const express = require('express');
const sqlite3 = require('sqlite3');
const crypto = require('crypto');

let db = new sqlite3.Database('./DB/nexus-db.db', (err) => {
	if (err){
		console.log(err.message);
	}
	console.log("Conectado a la Nexus DB")
});

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('../'));
app.use(express.urlencoded({ extended: true }));

app.get('/api/version', (req, res) =>{
	res.json({ version: "Nexus-Stream v0.1" });
})

app.post('/api/signup', (req, res) => {
	if (req.body.email && req.body.password){

		let cookie = crypto.randomBytes(32).toString('hex');
		let email = req.body.email;
		let password = crypto.createHash('md5').update(req.body.password).digest("hex");

		db.run('INSERT INTO sessions(email,password,cookie) VALUES(?,?,?)', [email, password, cookie], (err) => {
			if (err) {
				console.log(err.message);
			}
		});

		res.cookie('session', cookie);
		res.status(200).json({status:"Usuario creado"})
	} else {
	res.status(400).json({status:"Error creando usuario, por favor intenta de nuevo"})
	}
})

app.post('/api/signin', (req,res) => {

	console.log(req.body);
	console.log(req.body.password);

	if(req.body.email && req.body.password){
		let password = crypto.createHash('md5').update(req.body.password).digest('hex');
		let email = req.body.email;
		console.log(email);

		db.get('SELECT * FROM sessions WHERE email = ?', [email], (err, row) =>{
			if(err){
				console.log(err);
				res.status(401).json({status:"Error al iniciar sesion"})
			} else {
				console.log(row);
				res.status(200).json({status:"funca"})
			}
		})
	}
})









app.listen(port, () => {
	console.log(`La app esta corriendo en el puerto ${port}`);
})
