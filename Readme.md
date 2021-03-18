### Requisitos

- [] Deve ser possivel criar uma conta
- [] Deve ser possivel buscar o extrato bancario do cliente
- [] Deve ser possivel realizar um deposito
- [] Deve ser possivel realizar um saque
- [] Deve ser possivel buscar o extrato bancario do cliente por data
- [] Deve ser possivel atualizar dados da conta do cliente
- [] Deve ser possivel obter dados da conta do cliente
- [] Deve ser possivel deletar uma conta

### Regra de negócio

- [] Não deve ser possivel cadastrar uma conta com CPF ja existente
- [] Não deve ser possivel fazer deposito em uma conta nao existente
- [] Não deve ser possivel buscat estrato em uma conta nao existente
- [] Não deve ser possivel fazer saque em uma conta nao existente
- [] Não deve ser possivel excluir uma conta nao existente
- [] Não deve ser possivel fazer saque quando o saldo for insuficiente

### dados da conta
 CPF - string
 name - string
 id - uuid
 statement - []
