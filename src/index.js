const express = require('express');
const app = express();
const bot = require('./bot'); // Impor logika bot
const sendMessageRoute = require('./routes/sendMessageRoute');


const PORT = process.env.PORT || 4000;

// Middleware untuk JSON
app.use(express.json());

// Endpoint sederhana untuk memastikan server berjalan
app.get('/', (req, res) => {
    res.send('WhatsApp Bot is Running!');
});

// Gunakan route send-message
app.use('/api/messages', sendMessageRoute);


// Jalankan server Express
app.listen(PORT, () => {
    console.log(`Server is running on http://172.16.86.21:${PORT}`);
});

// Inisialisasi bot WhatsApp
bot();
