const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Cross-Origin-Opener-Policy', 'same-origin');
    res.header('Cross-Origin-Embedder-Policy', 'require-corp');
    res.header('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
});

app.use(express.static('build'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

app.get('/', function(req, res){
    res.sendFile('silence.html', { root: __dirname});
});
