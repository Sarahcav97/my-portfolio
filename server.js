const express = require('express');

const app = express();

const PORT = 6003;

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
