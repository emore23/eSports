import express from 'express';

const app = express();

app.get('', (req, res) => {
	return res.json({id: 1, nome: 'a'});
});

app.listen(8080, () => {
	console.log('server running!')
});