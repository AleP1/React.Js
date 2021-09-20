import React, { createContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { projectFirestore as dataBase } from '../firebase/firebase';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [itemSelected, setItemSelected] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState();

  const addItem = () => {
    const isInCart = cart.some((product) => product.itemSelected.id === itemSelected.id);
    console.log(`${isInCart}`);
    console.log(`${itemSelected.id}`);

    if (!isInCart) {
      setCart([...cart, { itemSelected, quantity }]);////////console.log(`entro por aqui`)

    } else {
      cart.forEach((product) => {
        if (product.itemSelected.id === itemSelected.id) {
          // eslint-disable-next-line no-param-reassign
          product.quantity += quantity;
        }
      });
      setCart([...cart]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    console.log(`${id}`);
    const filteredCart = cart.filter((product) => product.itemSelected.id !== id);
    setCart(filteredCart);
  };

  const cartCounter = () => {
    let subtotal = 0;
    if (cart.length > 0) {
      // eslint-disable-next-line no-return-assign
      cart.map((prod) => (subtotal += prod.quantity));
    }
    setCounter(subtotal);
  };

  const counterTotal = () => {
    const nextTotal = cart
      .map(({ itemSelected, quantity }) => itemSelected.price * quantity)
      .reduce(
        (cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice,
        0,
      );
    setTotal(nextTotal);
  };
  useEffect(() => {
    cartCounter();
    counterTotal();
  }, [cart]);

  /*const getOrder = () => {
        const userInfo = 'hola'
        const db = dataBase
        const orders = db.collection("orders")
        const newOrder = {
            buyer: userInfo,
            items: cart,
            date: firebase.firestore.timestamp.fromDate(new Date()),
            total: total
        }
        orders.add(newOrder).then(({ id }) => {
            setOrderId(id) //Success
        }).catch(err => {
            console.log("Error searching item")
        })*/

  const getOrder = () => {
    const ordersCollection = dataBase.collection('orders');

    const newOrder = {
      buyer: {
        name: 'Alejo Piñeiro',
        phone: '011 56602721',
        email: 'alejo.k26@gmail.com',
      },
      items: cart.map((product) => {
        return {
          id: product.itemSelected.id,
          title: product.itemSelected.title,
          price: product.itemSelected.price,
          quantity,
        };
      }),
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total,
    };

    ordersCollection.add(newOrder).then(({ id }) => {
      setOrderId(id);
      console.log(`Has comprado ${orderId}`);
      alert('Has finalizado tu compra');
    }).catch((error) => {
      console.log('Error while uploading new order: ', error);
    });
  };

  return (
    <CartContext.Provider value={{
      cart,
      total,
      counter,
      setQuantity,
      setItemSelected,
      addItem,
      clear,
      removeItem,
      getOrder,
      orderId,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
