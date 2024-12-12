const express = require('express');
const cors = require('cors');  
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    res.status(200).json({ message: 'User registered successfully' });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});