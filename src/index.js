const express = require("express");
const { v4: uuidV4 } =  require("uuid");

const app = express();
app.use(express.json());

const custumers = [];

app.post("/account", (request , response)=>{
    const { cpf, name } = request.body;
    const id = uuidV4();

    const custumersAlreadyExists = custumers.some((custumer) => custumer.cpf === cpf);

    if(custumersAlreadyExists){
    return  response.status(400).json({error: "Custumer already exists"});
    }
    custumers.push(
        {
            cpf,
            name,
            id,
            statement : []
        }
    );
    return response.status(201).send();
})

app.listen(3333);