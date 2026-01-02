const QPAY_API_URL = process.env.QPAY_API_URL || "https://merchant.qpay.mn/v2";
const QPAY_MERCHANT_ID = process.env.QPAY_MERCHANT_ID;
const QPAY_SECRET_KEY = process.env.QPAY_SECRET_KEY;
const QPAY_INVOICE_CODE = process.env.QPAY_INVOICE_CODE;

async function getQpayToken() {
  const username = QPAY_MERCHANT_ID;
  const password = QPAY_SECRET_KEY;
  if (!username || !password)
    throw new Error("QPAY_MERCHANT_ID or QPAY_SECRET_KEY not set");
  const credentials = `${username}:${password}`;
  const encodedCredentials = Buffer.from(credentials).toString("base64");

  const res = await fetch(`${QPAY_API_URL}/auth/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!data.access_token) throw new Error("Failed to get QPay token");
  return data.access_token;
}

module.exports = {
  getQpayToken,
  QPAY_API_URL,
  QPAY_INVOICE_CODE,
};
