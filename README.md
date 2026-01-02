# qpay (converted to Next.js)

This repository was converted to a Next.js project. API routes for QPay are under `pages/api/qpay`.

Quick start

1. Copy `.env.local.example` to `.env.local` and fill values.

```bash
npm install
npm run dev
```

API routes

- `POST /api/qpay/create` — create invoice
- `GET /api/qpay/check/:invoiceId` — check invoice
- `POST /api/qpay/callback` — callback endpoint
"# sf-qpay" 
