# Method Idempotency Demo

This simple web application demonstrates Method's idempotency feature.

## Features

- **Send Request Once**: Make a single payment request
- **Send Same Request Twice**: Demonstrates idempotency by sending the same request twice with the same idempotency key
- Visual comparison of both requests side-by-side
- Shows that the second request returns the exact same result as the first

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## How It Works

1. Fill out form and hit "Send Request Once" then "Send Same Request Twice" to see idempotency in action
2. The app will make two requests to Method's API with the same idempotency key
3. Both requests will show the same payment id, proving that Method only processed the payment once

## API Details

The app uses Method's payment API:
- Endpoint: `https://dev.methodfi.com/payments` (Be sure to use API key for your method DEV environment)
- Method: POST
- Headers include the `Idempotency-Key` header which ensures duplicate requests return the same result

