
const express = require("express");
const cors = require("cors");

const port=10000
require('dotenv').config()
const stripe = require("stripe")(
	process.env.STRIPE_SECRET
);
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	console.log("payment Request Recieved for this amount>>>", total);
	try {
		const paymentIntent = await stripe.paymentIntents.create({
		amount: parseInt(total),
		currency: "usd",
	});
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
	} catch (error) {
		console.log(error.message)
	}
	
});

// testing server locally
app.listen(port,(err)=>{
	if (err) {
		console.log(err)
	}else{
		console.log(`Server running on port: ${port}`)
	}
})

//http://127.0.0.1:5001/project-6a94b/us-central1/api
