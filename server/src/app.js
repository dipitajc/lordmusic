/* On va définir une pp web */

console.log('hello my name is jc and the server is running')
/* en faisant require, le système va aller chercher
express, cors etc dans le fichier node_modules et va trouver le fichier principal  dans le package.json du module en question*/ 
const express = require('express')  
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan') /* le module "morgan" permet de savoir quel type d'appareil s'est connecté sur notre
serveur et sur quel navigateur */

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json()) /*afin de facilement parser des requêtes json*/
app.use(cors()) /* permettre à n'importe quel client ou serveur d'accéder au serveur*/

app.post ('/register' , (req, res) => {
    res.send ({
        message: `Hello ${req.body.email} your user has been correcly registered`
    })
})
app.listen (process.env.PORT || 8081)