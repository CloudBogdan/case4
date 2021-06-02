const router = require("./api");
const
    express = require("express"),
    cors = require("cors"),
    app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(router);

app.listen(port, ()=> console.log(`Server started on port ${ port } ❤`));