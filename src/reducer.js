export const initialState = {
    cart: [],
    user: null,
    products: [],
};

// Selector
export const getCartTotal = (cart) => 
  cart?.reduce((amount, item) => (item.price * item.quantity) + amount, 0);


export const reducer = (state, action) => {
    console.log(action);
    
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];
        
            if (index >= 0) {
                newCart.splice(index, 1);
        
            } else {
                console.warn(
                `Cant remove product (id: ${action.id}) as its not in cart!`
                )
            }
        
            return {
                ...state,
                cart: newCart
            };
        
        case "UPDATE_QUANTITY":
            const proIndex = state.cart.findIndex(element => element.id === action.id);
            let nCart = [...state.cart];
            nCart[proIndex].quantity = action.quantity 

            return {
                ...state,
                cart: nCart
            };
        
        case "EMPTY_CART":
            return {
                ...state,
                cart: [],
            }
        
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }

        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.products,
            }

        default:
            return state;
    }

};