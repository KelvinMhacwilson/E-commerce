import Stripe from "stripe";
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server";
import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { getCurrentUser } from "@/actions/getCurrentUser";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2023-10-16"})

const calculateOrderAmount = (items: CartProductType[]) => {
  const totalPrice = items.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity

    return acc + itemTotal
  }, 0)

  return totalPrice
}

export async function POST(request: Request){
  const currentUser =await getCurrentUser()

  if(!currentUser){
    return NextResponse.json({error: "Unauthorized"}, {status: 401})
  }

  const body = await request.json()
  const {items, payment_intent_id} = body

  const total = calculateOrderAmount(items) * 100
  const orderData = {
    user: {connect: {id: currentUser.id}},
    amount: total,
    currency: "usd",
    status: "pending",
    deliveryStatus: "pending",
    paymentIntentId: payment_intent_id,
    products: items
  }

  if(payment_intent_id){
    // Update the order
  } else {
    // Create the payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      automatic_payment_methods: {enabled: true}
    })
    // Create the order
    
  }
}