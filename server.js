const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// const PORT = 3001; // bring this in when developing
const PORT = 6000;

app.use(express.static('./public'));

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
