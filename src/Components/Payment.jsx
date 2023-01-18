import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getCartTotal } from "../reducer";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import PaymentProduct from "./PaymentProduct";
import axios from "../axios";

function Payment() {
    const [{ cart }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer (new price each time the basket changes)
        const getClientSecret = async () => {
          const response = await axios({
            method: "post",
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getCartTotal(cart) * 100}`,
          });
          setClientSecret(response.data.clientSecret);
        };
    
        getClientSecret();
    }, [cart]);
    
    console.log("THE SECRET IS: ", clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(async ({ paymentIntent }) => {
                // paymentIntent == payment confirmation from Stripe

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: "EMPTY_BASKET",
                });

                navigate("/orders", { replace: true });
            });
    };

    const handleChange = (e) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    return (
        <div className="min-h-screen pt-9 px-3">
            <div className="bg-gray-100 max-w-[1200px] mx-auto py-7 px-4 rounded-3xl">
                <div>
                    <h1 className="flex items-center gap-x-3 font-bold mb-7 text-xl">
                        <Link to="/cart">
                            <ArrowLeftIcon className="h-5" />
                        </Link>
                        Checkout {cart?.length} items
                    </h1>

                    <div>
                        <h3 className="text-light text-lg tracking-wide mb-4">
                            Review items and delivery
                        </h3>
                        <div>
                            {cart?.map((item, i) => (
                                <PaymentProduct
                                    key={i}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold tracking-wide my-4 border-b pb-2">Payment Details</h3>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <CardElement className="border-b pb-2" onChange={handleChange} />
                            <div>
                                <h3 className="my-4 font-light">Order Total: <span className="font-bold text-indigo-700">${getCartTotal(cart).toFixed(2)}</span></h3>

                                <button className="border py-2 px-6 bg-indigo-500 text-white rounded-2xl"
                                    disabled={
                                        processing || disabled || succeeded
                                    }>
                                    <span>
                                        {processing ? (
                                            <p>Processing</p>
                                        ) : (
                                            "Buy Now"
                                        )}
                                    </span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
