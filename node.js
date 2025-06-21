const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('your_stripe_secret_key'); // Replace with actual Stripe Secret Key

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let orders = [];

// Handle order submission
app.post('/submit-order', (req, res) => {
    const { flavor, quantity, address } = req.body;

    // Validate data
    if (!flavor || !quantity || !address) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Simulate saving order to database
    orders.push({ flavor, quantity, address });
    res.json({ message: 'Order placed successfully!' });
});

// Handle payment
app.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount } = req.body; // In cents

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'],
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
