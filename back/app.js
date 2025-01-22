//! INICIAMOS PRIMERO NUESTRO SERVIDOR 

const axios = require('axios');
const express = require('express');
const cors = require('cors');// con esta dependencia permitimos que  
// cualquier pagina que acceda a nuestro servidor pueda obtener esa información
const app = express();
const PORT = 3002;

app.use(cors()); //aqui hacemos que todas nuestras rutas pasen primero por ese 
//cors y permita esa entrada 


// CREAMOS LA RUTA PARA RECOGER CADA UNO DE LOS POKEMON

app.get('/pokemon/:pokemonName', async (req, res) => {
    const pokemonName = req.params.pokemonName
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    try {
        const response = await axios.get(url)
        const {name, sprites: {front_default}, height, weight} = response.data

        res.json({name, sprites: {front_default}, height, weight})
    }   catch (ERROR){
        res.status(404).json({error: 'pokemón no encontrado'})

    }

})



//!escuchamos al servidor con el puerto

app.listen(PORT, () => {
    console.log(`listening server on port http://localhost:${PORT}`);
});