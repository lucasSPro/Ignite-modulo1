### Requisitos

- [x] Deve ser possivel criar uma conta
- [x] Deve ser possivel buscar o extrato bancario do cliente
- [x] Deve ser possivel realizar um deposito
- [x] Deve ser possivel realizar um saque
- [] Deve ser possivel buscar o extrato bancario do cliente por data
- [] Deve ser possivel atualizar dados da conta do cliente
- [] Deve ser possivel obter dados da conta do cliente
- [] Deve ser possivel deletar uma conta

### Regra de negócio

- [x] Não deve ser possivel cadastrar uma conta com CPF ja existente
- [x] Não deve ser possivel buscar extrato em uma conta nao existente
- [x] Não deve ser possivel fazer deposito em uma conta nao existente
- [x] Não deve ser possivel fazer saque em uma conta nao existente
- [] Não deve ser possivel excluir uma conta nao existente
- [] Não deve ser possivel fazer saque quando o saldo for insuficiente

### dados da conta
 CPF - string
 name - string
 id - uuid
 statement - [description, amount, created_at, type]


