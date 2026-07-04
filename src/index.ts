import {createServer} from "node:http"
import createExpressApplication from "./app/index.js"


async function main(){
    try {
        const server = createServer(createExpressApplication())
        const PORT:Number = 1157

        server.listen(PORT,() =>{
            console.log(`http server is running on port:${PORT}`)
        })
        
    } catch (error) {
         throw new Error(`Error from create server: ${error}`);
        
    }
}

main()