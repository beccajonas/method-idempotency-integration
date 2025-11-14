# Method API Idempotency Demo

## Overview

This application allows you to:

- Send payment requests to the Method API dev sandbox with idempotency keys
- Test idempotency by sending the same request twice and seeing identical results
- View payment request responses in a clean JSON format
- Understand how Method's idempotency feature prevents duplicate processing

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Method API key for the dev sandbox (required)
- Source and destination account IDs from your Method account

## Installation

Clone or download this repository

Install dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
npm start
```

Open your browser and navigate to:

```
http://localhost:3000
```

## Usage 

- Enter your Method API dev sandbox key in the "API Key" field
- Fill in the payment form fields
- Click "Send Request Once" to send the first payment request
- Click "Send Same Request Twice" to demonstrate idempotency by sending the same request again with the same idempotency key 

## Understanding the Response

- Both requests return the same payment ID
- This proves that Method only processed the payment once, even though the request was sent twice

