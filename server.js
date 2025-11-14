const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('.'));

// Payment endpoint
app.post('/api/payment', async (req, res) => {
    const { amount, source, destination, description, idempotencyKey, apiKey } = req.body;

    if (!apiKey) {
        return res.status(400).json({
            success: false,
            error: 'API key is required'
        });
    }

    try {
        const response = await fetch('https://dev.methodfi.com/payments', {
            method: 'POST',
            headers: {
                'Method-Version': '2025-07-04',
                'Authorization': `Bearer ${apiKey}`,
                'Idempotency-Key': idempotencyKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                source,
                destination,
                description
            })
        });

        const data = await response.json();

        res.status(response.status).json({
            success: response.ok,
            status: response.status,
            statusText: response.statusText,
            data: data,
            idempotencyKey: idempotencyKey,
            message: response.ok 
                ? 'Payment processed successfully' 
                : 'Payment request completed (may have failed)'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            idempotencyKey: idempotencyKey
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

