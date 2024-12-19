import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js";
import Stripe from 'stripe'
import razorpay from 'razorpay'

// global vaiables
const currency = 'EGP'
const delivaryCharge = 10

// getway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// const razorpayInstance = new razorpay({
//     key_id : process.env.RAZORPAY_KEY_ID,
//     key_secret : process.env.RAZORPAY_KEY_SECRET,
// })

// placing orders using COD method
const placeOrder = async (req,res) => {
    try {
        
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,massage:"Order Placed"})
        

    } catch (error) {
        console.log(error)
        res.json({success:false,massage:error.massage})
    }

}

// placing orders using STRIPE method
const placeOrderStripe = async (req,res) => {

    try {
        
        const {userId, items, amount, address} = req.body
        const {origin} = req.headers;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const line_items = items.map((item) => ({
            price_data: {
                currency:currency,
                product_data:{
                    name:item.name
                },
                unit_amount: item.price * 100
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data: {
                currency:currency,
                product_data:{
                    name:'Delivery Charge'
                },
                unit_amount: delivaryCharge * 100
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderID=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderID=${newOrder._id}`,
            line_items,
            mode: 'payment',
        });
        
        res.json({ success: true, success_url: session.url }); 
        

    } catch (error) {
        console.log(error)
        res.json({success:false,massage:error.massage})
    }

}

// verify stripe
const verifyStripe = async (req,res) => {
    
    const {orderId, success, userId} = req.body

    try {
        if(success===true){
            await orderModel.findByIdAndUpdate(orderId, {payment:true});
            await userModel.findByIdAndUpdate(userId, {cartData:{}});
            res.json({success:true});
        }else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false});
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,massage:error.massage})
    }

}


// placing orders using RAZORPAY method
const placeOrderRazorpay = async (req,res) => {
    try {
        
        const {userId, items, amount, address} = req.body

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Razorpay",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const options = {
            amount : amount * 100,
            currency : currency.toUpperCase(),
            receipt : newOrder._id.tostring()
        }

        await razorpayInstance.orders.create(options, (error,order) => {
            if(error){
                console.log(error)
                return res.json({success:false,massage:error.massage})
            }
            res.json({success:true,order})
        })


    } catch (error) {
        console.log(error)
        res.json({success:false,massage:error.massage})
    }

}

// verify razorpay
const verifyRazorpay = async (req,res) => {

    try {
        const {userId, razorpay_order_id} = req.body
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

        if(orderInfo.status == 'paid'){
            await orderModel.findByIdAndUpdate(orderInfo.receipt, {payment:true});
            await userModel.findByIdAndUpdate(userId, {cartData:{}});
            res.json({success:true, massage:'Payment Successful'});
        }else{
            res.json({success:false, massage:'Payment Failed'});
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,massage:error.massage})
    }

}


// all orders data for admin panal
const allOrders = async (req,res) => {
    try {
        
        const orders = await orderModel.find({})
        res.json({success:true,orders})

    } catch (error) {
        console.log("error")
        res.json({success:false,massage:error.massage})
    }

}

// users order data for frontend
const userOrders = async (req,res) => {
    try {
        
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        res.json({success:false,massage:error.massage})
    }

}

// update orderstatus from admin panal
const updateStatus = async (req,res) => {
    try {
        
        const {orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,massage:'status updated'})

    } catch (error) {
        console.log(error)
        res.json({success:false,massage:error.massage})
    } 

}

export {placeOrder, placeOrderStripe, verifyStripe, placeOrderRazorpay, verifyRazorpay, allOrders, userOrders, updateStatus}