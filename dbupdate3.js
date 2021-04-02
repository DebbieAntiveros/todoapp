const pool = require("./db");

const sql = 'UPDATE public.category SET cat_description = $1 WHERE cat_id =16 RETURNING *';
const data = ['others'];

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();