import express from 'express'
let server = express();
import SomeService from "./SomeSerivce.js"

server.get("/", (req, res) =>{
  //breakpoint enabled
  res.send(new SomeService().print())
})


server.listen(3000, () =>{
  console.log(new SomeService().print())
})