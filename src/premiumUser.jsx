import axios from 'axios';
import * as React from 'react';
import { BASEURL } from './constant';

const PremiumUser = ()=> {
    const premiumClickHandler =async  ()=> {
    try{
        const order = await axios.post(`${BASEURL}/payment/create`, {type:"gold"}, {
            withCredentials: true
        });
        console.log(order);

        const {amount, currency, orderId, status, notes, keyId } = order.data;
        const options = {
        key: keyId, // Replace with your Razorpay key_id
        amount,
        currency,
        name: 'Bholaram devtinder',
        description: 'Test the razorpay',
        order_id: orderId,
        prefill: {
          firstName: notes.firstName,
          lastName: notes.lastName,
          emailId: notes.emailId
        },
        theme: {
          color: '#F37254'
        },
      };
        const rzp = new Razorpay(options);
        rzp.open();
    } catch(err){
     console.log('errror while fetching data')
    }
   }


    return (
    <>
    <button style={{backgroundColor:"green", padding:"4px", margin:"4px"}}onClick={premiumClickHandler}>Pay Now to become Premium user</button>
    </>
    )
}

export default PremiumUser;