import {pool} from '../db.js'

export const get_index = async(req,res)=>{
    const [resul] = await pool.query('select * from shop.users')
    res.json(resul)
}