import express, {Request, Response} from "express"
import "express-async-errors";
import cors from "cors"
import { AddressInfo } from "net"

export const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
})

app.get("/test", (req: Request, res: Response)=>{
    res.status(200).send({message: "Sucesso"})
} )


