import express from 'express'
import axios from 'axios'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express();
const port = 9876

// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

app.use('/chat', createProxyMiddleware({ target: 'http://localhost:3000/', changeOrigin: true }));
app.use('/', createProxyMiddleware({ target: 'http://localhost:5173', changeOrigin: true }));


app.listen(9876, () => console.log('Proxy server listening on port 9876'));