const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.json());
contador = 0;
produtos = '';



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

    app.get ('/listar-produtos', (req, res) => {
        (async () => {
            const database = require('./db');
            const Produto = require('./products-page');
            await database.sync();

            try {
                const resultado = await Produto.findAll();
                produtos = resultado;
                res.send(produtos);
            } catch (error) {
                console.log(error);
            }
        })();
        

    });
    app.get ('/listar-produtos/:id', (req, res) => {
        (async () => {
            const database = require('./db');
            const Produto = require('./products-page');
            await database.sync();
            console.log(req.params.id)
            try {
                const resultado = await Produto.findAll({
                    where: {
                        idx: req.params.id
                    }
                });
                produtos = resultado;
                res.send(produtos);
            } catch (error) {
                console.log(error);
            }
        })();
        

    });
    app.put('/listar-produtos', (req, res) => {
        contador++;
         const { texto } = req.body;
         lembretes[contador] = {
         contador, texto
         }
         res.status(201).send(lembretes[contador]);
         });

    app.listen(4000, () => {
    console.log('produtos. Porta 4000');
    });
	
	