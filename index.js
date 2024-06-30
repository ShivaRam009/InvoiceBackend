const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Example invoice data with new placeholder logo and signature links
const exampleData = {
  logo: 'https://dummyimage.com/150x50/000/fff&text=Company+Logo', // New placeholder logo image link
  seller_details: {
    name: 'Your Company Name',
    address: '123 Street, City',
    city: 'City',
    state: 'State',
    pincode: '123456',
    pan_no: 'ABCDE1234F',
    gst_registration_no: 'GSTIN12345678'
  },
  place_of_supply: 'State',
  billing_details: {
    name: 'Customer Name',
    address: '456 Street, Area',
    city: 'City',
    state: 'State',
    pincode: '654321',
    state_ut_code: 'XX'
  },
  shipping_details: {
    name: 'Customer Name',
    address: '456 Street, Area',
    city: 'City',
    state: 'State',
    pincode: '654321',
    state_ut_code: 'XX'
  },
  place_of_delivery: 'State',
  order_details: {
    order_no: 'ORD123',
    order_date: '2024-06-29'
  },
  invoice_details: {
    invoice_no: 'INV123',
    invoice_date: '2024-06-29'
  },
  reverse_charge: 'No',
  items: [
    {
      description: 'Motorola Edge 50 Fusion (Hot Pink, 128 GB)  (8 GB RAM)',
      unit_price: 100,
      quantity: 2,
      discount: 10,
      tax_rate: 0.18,
    },
    {
      description: 'Item 2',
      unit_price: 200,
      quantity: 1,
      discount: 20,
      tax_rate: 0.18,
    }
  ],
  signature_image_url: 'https://dummyimage.com/100x50/000/fff&text=Signature' // New placeholder signature image link
};

// Route to fetch invoice data
app.get('/invoice-data', (req, res) => {
  res.json(exampleData);
});

app.get('/',(req, res)=>{
  res.send("Welcome to Invoice Generator");
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
