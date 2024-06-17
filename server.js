const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.NODE_ENV === 'dev' ? 3001 : 6000;

app.use(express.static('./public'));

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
