const express = require('express');
const router = express.router();

//index

router.get('/', (req, res) =>{
    res.send('Lista dei post')
});

//show

router.get('/:id', (req, res) =>{
    res.send(`Dettagli del post con id ${req.params.id}`)
});

//store

router.post('/', (req, res) =>{
    res.send('Nuovo post')
});

//update

router.put('/:id', (req, res) =>{
    res.send(`Modifico l'elemento con id ${req.params.id}`)
});

//modify

router.patch('/:id', (req, res) =>{
    res.send(`Modifico parzialmente l'elemento con id ${req.params.id}`)
});

//destroy

router.delete('/:id', (req, res) =>{
    res.send(`Elimino l'elemento con id ${req.params.id}`)
})


module.exports = router;