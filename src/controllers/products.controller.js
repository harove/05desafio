import { productsManager as manager } from "../services/productsManager.js"

export async function postController(req, res) {
    const pojo = req.body
    manager.create(pojo)
    const pojos = await manager.findAll()
    pojos.push(pojo)
    res.json(pojo)
}

export async function getController(req, res) {
    const {limit} = req.query
    const pojos = await manager.findAll({limit})
    res.json(pojos)
}

export async function getByIdController(req, res) {
    const id = req.params.id
    try {
        const pojo = await manager.getById(id)
        res.json(pojo)
    } catch (error) {
        res.status(404).json({
            mensaje: error.message
        })
    }
}

export async function updateController(req, res) {
    const id = req.params.id
    const fields = req.body
    try {
        const pojos = await manager.update(id,fields)
        res.json(pojos)
    } catch (error) {
        res.status(404).json({
            mensaje: error.message
        })
    }
}

export async function deleteController(req, res) {
    const id = req.params.id
    try {
        const pojos = await manager.delete(id)
        res.json(pojos)
    } catch (error) {
        res.status(404).json({
            mensaje: error.message
        })
    }
}