const express = require('express');
const app = express();

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

//Servir los archivos estaticos
app.use(express.static('public'));

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
    res.render('index', { nombre: 'Usuario Pug' });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
    res.render('index.ejs', { nombre: 'Usuario EJS' });
});

app.get('/perfil/:id', (req, res) => {
    const userId = req.params.id;
    // Aquí puedes buscar los datos del usuario en una base de datos, por ejemplo
    const user = { id: userId, nombre: 'Usuario ' + userId };
    res.render('perfil', { user: user });
});

// Ruta para renderizar la plantilla Pug
app.get('/miplantilla-pug/:num', (req, res) => {
    const numero = req.params.num
    res.render('miplantilla', {     
        mensaje: 'Bienvenido a la tabla Tecsup',
        numero: numero
    });
});

// Ruta para renderizar la plantilla EJS
app.get('/miplantilla-ejs/:num', (req, res) => {
    const numero = req.params.num;
    res.render('miplantilla.ejs', {     
        mensaje: 'Bienvenido a la tabla Tecsup',
        numero: numero
    });
});

/*
// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Aplicación web dinámica ejecutándose en el puerto 3000 \n http://localhost:3000');
});
*/