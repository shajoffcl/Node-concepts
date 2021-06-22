import express from 'express';
import 'something';

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log('Server running successfully'));

/*

u are using esm features
by default finding in node_modules

*/