import express from "express";
import type {Express} from "express"

function createExpressApplication():Express{
    const app = express();




    //routes

    app.route("/").get((req,res)=>{
        return res.send("welcome to / route")
       
    })


    return app;


}

export default createExpressApplication;