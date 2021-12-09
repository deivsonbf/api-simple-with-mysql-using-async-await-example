const app = require('./index');
const port = process.env.PORT || 5000

app.listen(port, (req, res) => {
    if (process.env.NODE_ENV == 'development') {
<<<<<<< HEAD
        console.log(`${process.env.NODE_ENV}`);
=======
        console.log(`http://localhost:${port}`);
>>>>>>> ac16a42caedf8cee27830bb701cc40dfa4ccb160
    } else {
        console.log(`${process.env.NODE_ENV}`);
    }
})