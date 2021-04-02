const pool = require("./db");

const sql = 'UPDATE public.todo SET todo_desc = $1 WHERE todo_id =2 RETURNING *';
const data = ['hiking'];

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();