const { response } = require("express");
const express = require("express");
const { v4: uuidV4 } =  require("uuid");

const app = express();
app.use(express.json());

const customers = [];

function verifyIfExisteAccountCPF(request, response, next){
    const {cpf} = request.headers;

    const customer = customers.find(customer => customer.cpf === cpf);

    if(!customer){
        return response.status(400).json({error: "Customer not found"});
    }
    request.customer = customer;
    return next();
}

app.post("/account", (request , response)=>{
    const { cpf, name } = request.body;

    const customersAlreadyExists = customers.some((customer) => customer.cpf === cpf);

    if(customersAlreadyExists){
    return  response.status(400).json({error: "Customer already exists"});
    }
    customers.push(
        {
            cpf,
            name,
            id: uuidV4(),
            statement : []
        }
    );
    return response.status(201).send();
});

app.get("/statement", verifyIfExisteAccountCPF, (request, response)=>{
    const { customer } = request;
    return response.json(customer.statement);
});

app.post("/deposit", verifyIfExisteAccountCPF, (request, response)=>{
    const {description, amount, type} = request.body;

    const { customer } = request;

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type
    }
    customer.statement.push(statementOperation);

    return response.status(201).send();
})

app.listen(3333);