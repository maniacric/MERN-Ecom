import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartEmpty, loadCart } from './helper/cartHelper';
import { getmeToken, processPayment } from './helper/paymenthelper';
import { createOrder } from "./helper/orderhelper"
import { isAuthenticated } from '../auth/helper';
import DropIn from "braintree-web-drop-in-react";


const PaymentB = ({ products, setReload = f => f, reload = undefined }) => {

  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {}
  })

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getmeToken(userId, token).then(info => {
      console.log("INFORMATION", info);
      if (info && info?.error) {
        setInfo({ ...info, error: info?.error });
      } else {
        const clientToken = info?.clientToken;
        setInfo({ clientToken });
      }
    });
  };

  const getAmount = () => {
    let amount = 0;
    products && products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  const onPurchase = () => {
    console.log("working");
    try {
      setInfo({ ...info, loading: true })
      let nonce = null;
      let getNonce = null;
      getNonce = info?.instance?.requestPaymentMethod().then((data) => {
        console.log(getNonce);
        nonce = data.nonce;
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getAmount(),
        };
        processPayment(userId, token, paymentData)
          .then((response) => {
            setInfo({ ...info, success: response.success, loading: true });
            console.log("PAYMENT SUCCESS");

            const orderData = {
              products: products,
              transaction_id: response.transaction.id,
              amount: response.transaction.amount,
            };

            createOrder(userId, token, orderData);

            cartEmpty(() => {
              console.log("Did we got a crash?");
            });

            setReload(!reload);
          })
          .catch((error) => {
            setInfo({ loading: false, success: false });
            console.log("PAYMENT FAILED sucker  ");
          });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const showbtdropIn = () => {
    return (
      <div>
        {info.clientToken !== null && products && products.length > 0 ? (
          <div>
            <h3>Now Checkout you dumass </h3>
            <DropIn
              options={{ authorization: info.clientToken }}
              onInstance={instance => (info.instance = instance)}
            />
            <button className="btn btn-block btn-success" onClick={onPurchase}>
              Buy
            </button>
          </div>
        ) : (
          <h3>Your Basket looks sad, Now fill it with Tessss.... and joy<br />
            Also Did you login
          </h3>
        )}
      </div>
    );
  };

  useEffect(() => {
    getToken(userId, token)
  }, [])

  return (
    <div>
      <h3>Your Total is ${getAmount()} <br /></h3>
      <h3>Make sure you are signed in</h3>
      <br />
      {showbtdropIn()}
    </div>
  )
}

export default PaymentB;

