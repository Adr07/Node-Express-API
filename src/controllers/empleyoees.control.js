import {pool} from '../db.js'

export const get_employees = (req,res)=>{
    res.send("Pagina de empleados get")
}
export const post_employees = async (req,res)=>{
    const {name , edad ,email} = req.body
    const [ row ] = await pool.query('INSERT INTO users (name,edad,email) VALUES( ? , ? , ?)',[name , edad ,email])
    res.send({ row })

}
export const put_employees = (req,res)=>{
    res.send("Pagina de empleados put")
}
export const delete_employees = async (req,res)=>{
    const {name , edad ,email} = req.body
    const [row] = await pool.query("DELETE FROM users WHERE name = ?",[name]) 
    res.send({row})
}


