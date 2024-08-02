// require('dotenv').config();
// const http = require("http");
// const app = require("./app")

// const PORT = process.env.PORT || 8000;
// const server = http.createServer(app);

// server.listen(PORT, () => {
//     console.log(`server running in PORT ${PORT}`);
//     app.get('/', (req, res) => {
//         res.send('Hellooooo');
//     });
// });



require('dotenv').config();

const app = require("./app");
const { sequelize } = require('./models');
const port = process.env.PORT ;
// const server = http.createServer(app);

app.listen(port,async()=>{
    await sequelize.authenticate()
    console.log(`SERVER RUNNING SUCCESSFULLY IN PORT ${port}.` )
})

app.get('/', (req, res) => {
    res.send('Helloooooo');
  });