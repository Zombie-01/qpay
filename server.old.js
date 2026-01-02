// Original Express server moved to server.old.js for reference
// If you need to run the original server, run: node server.old.js

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());

const QPAY_API_URL = "https://merchant.qpay.mn/v2";
const QPAY_MERCHANT_ID = "TUMEN_DUGUI";
const QPAY_SECRET_KEY = "FGUpC64V";
const QPAY_INVOICE_CODE = "TUMEN_DUGUI_INVOICE";

// --- truncated: original server logic preserved in this file ---

const PORT = 3000;
app.listen(PORT, () => console.log(`QPay Node server running on port ${PORT}`));
