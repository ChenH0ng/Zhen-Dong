const Express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');
const app = Express();
const router = require('./router')({Router: Express.Router});
const publicPath = Path.resolve(__dirname, 'public');

app.use(Express.static(publicPath));
app.use(bodyParser.json());
app.use(router);
app.use((req, res) => {
	console.log(req.url);
	res.sendFile(Path.resolve(publicPath, 'index.html'));
});
app.use((error, req, res) => {
	console.log(req.url);
	console.log(error);
	res.send('invalid operation');
});
app.listen(3000, () => {
	console.log(`server is listening at 3000.`);
});