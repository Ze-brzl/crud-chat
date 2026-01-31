# Projeto CRUD

- A ideia é fazer um crud, com rotas para criar atendimentos, mensagens usuários e clientes

  - Para poder criar ou editar um atendimento ou mensagem, é necessário passar o \_id de um usuário
    - No futuro, a ideia é usar jwt token ou semelhante para autenticar na API e poder manipular essas rotas.
    - Utilizar services para:
      - Gerar identificador nos atendimentos (protocolo),
      - Validar se e-mail já está cadastrado,
      - Validar a existencia do cliente que está sendo cadastrado (via ssn ou nome, validando status)

- Atendimentos:
  - Busca por:
    - \_id
    - status
      ...
