const express = require('express')
const tacos = require('../usecases/tacos')
const router = express.Router()
// el router le pertenece a tacos. Ya no necesitamos poner tacos al principio.

const auth = require('../middlewares/auth')
// router.use(auth) para todas las rutas
router.get('/', async (request, response) => {
  try {
    const allTacos = await tacos.getAll()

    response.json({
      success: true,
      message: 'All tacos',
      data: {
        tacos: allTacos
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', auth, async (request, response) => {
  try {
    const {
      type,
      precio,
      isChido
    } = request.body
    if (!type) { throw new Error('Type is required') }
    if (!precio) { throw new Error('precio is required') }
    if (isChido == null) { throw new Error('isChido is required') }

    const newTaco = await tacos.create({ type, precio, isChido })

    response.json({
      success: true,
      message: 'Taco added',
      data: {
        taco: newTaco
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const tacoSelected = await tacos.getById(id)

    response.json({
      success: true,
      message: 'taco selected',
      data: {
        taco: tacoSelected
      }
    })

    const selectedTaco = await tacos.getById(id)
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedTaco = await tacos.deleteById(id)

    response.json({
      success: true,
      message: 'taco deleted',
      data: {
        taco: deletedTaco
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})
router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const newDataTaco = request.body

    const tacoUpdated = await tacos.updateById(id, newDataTaco)
    response.json({
      success: true,
      message: 'Taco updated',
      data: {
        tacos: tacoUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router

// exportamos nuestro router pero falata montarlo en el servidor.
