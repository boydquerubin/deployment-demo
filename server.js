const express = require('express');

const app = express();

const PORT = 4000;

app.use(express.static(`${__dirname}/public`));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});