const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aula_manager'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente!');
  });

app.get('/api/usuarios', (req, res) => {
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
    res.json(results);
  });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
    
    db.query(query, [email, password], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al iniciar sesión' });
      }
  
      if (results.length > 0) {
        const usuario = results[0];
        res.json({
          id: usuario.id,
          nombre: usuario.nombre,
          correo: usuario.email
        });
      } else {
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    });
  });
  

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});