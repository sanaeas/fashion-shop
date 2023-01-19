import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, doc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useStateValue } from '../StateProvider';
import Order from './Order';

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, 'users', user?.uid);
      const colRef = collection(docRef, 'orders');
      const q = query(colRef, orderBy('created', 'desc'))
      onSnapshot(q, (snapshot) => (
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })))
      ))
    } else {
      setOrders([])
    }
  }, [user]);

  return (
    <div className='px-5 my-8'>
      <h1 className='my-8 text-center text-3xl font-bold tracking-wide'>Your <span className='text-indigo-500'>Orders</span></h1>

      <div>
        {
          orders?.map(order => (
            <Order order={order} />
          ))
        }
      </div>
    </div>
  )
}

export default Orders