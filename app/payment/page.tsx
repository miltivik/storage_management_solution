"use client";
import React from 'react'
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js'


const page = () => {
    

  return (

    <div className='container'>
        <div className='mx-auto flex justify-center items-center h-screen'>
            <PayPalScriptProvider options={{ clientId : "AVt3LJmchC0TITCGl6MrVh7-3uwavYrtCzM_DQMtptiH7h4aOAKzFft5kzl2R7j10I1OvRAZENr25fQa" }}>
                <PayPalButtons
                createOrder={async () =>{
                  const res = await fetch("/api/checkout", {
                    method: "POST",
                  })
                  const order = await res.json()
                  console.log(order)
                  return order.id
                }}
                onApprove={(data, actions) => {
                  console.log(data)
                 if (actions.order) {
                   actions.order.capture();
                 } else {
                   console.error("Order is undefined");
                 }
                }}
                onCancel={(data) => {
                  console.log("Cancelado:",data)
                }}
                />
            </PayPalScriptProvider>
        </div>
    </div>

  )
}

export default page