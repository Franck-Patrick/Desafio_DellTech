# Demanda 1: Criação de uma API RESTful Simples

## Objetivo

Criar uma API RESTful utilizando a linguagem de programação de sua escolha (exemplo: Node.js, C#, Java). A aplicação será dockerizada e incluirá um arquivo `docker-compose.yml` que:

1. Suba a aplicação e um banco de dados de sua escolha (exemplo: MySQL, PostgreSQL, MongoDB).
2. Utilize volumes para persistência de dados do banco de dados.
3. Configure uma rede compartilhada entre os containers para que a API possa se conectar ao banco de dados.
4. Adicione variáveis de ambiente para configuração de conexões com o banco.

## Passo a Passo para Testar a Demanda

### Pré-requisitos

Certifique-se de que as seguintes ferramentas estejam instaladas:

- **Docker e Docker-Compose:** Essenciais para rodar os containers.

### Etapas

1. **Navegue para o diretório da API:**

   ```bash
   cd Demanda1/main
   ```
2. **Suba os containers utilizando o Docker Compose:**

   ```bash
   docker-compose up -d
   ```

   > **Nota:** Certifique-se de verificar as portas utilizadas. Por exemplo, a porta `8080` frequentemente é usada pelo Jenkins. Neste caso, utilizamos `localhost:8089` para a API.

3. **Verifique se os containers estão rodando:**

   ```bash
   docker ps
   ```

   Os containers devem estar com o status `running` ou `up`.

4. **Acesse a API via Swagger:**
   Abra o navegador e acesse: `http://localhost:8089/swagger-ui.html`

5. **Teste as operações da API:**

   - Use a rota `POST` para inserir dados de um novo empregado/funcionário.

6. **Verifique os dados no banco de dados:**

   - Certifique-se de ter um cliente PostgreSQL instalado, como o `psql`, Dbeaver ou método GET ainda no navegador.
   - Para conectar-se ao banco via terminal:
     ```bash
     psql -h localhost -p 5438 -U postgres -d learning
     ```
   - As credenciais de acesso estão definidas no arquivo `docker-compose.yml`. A senha padrão para o banco é `senha` (não segura, mas adequada para fins de teste).

7. **Visualize as tabelas e dados:**

   - Liste as tabelas disponíveis:
     ```sql
     \d
     ```
   - Consulte os dados inseridos:
     ```sql
     SELECT * FROM tb_employees;
     ```

8. **Teste a persistência dos dados:**

    - Saia do cliente PostgreSQL:
      ```bash
      exit
      ```
    - Pare os containers:
      ```bash
      docker-compose down
      ```
    - Suba os containers novamente:
      ```bash
      docker-compose up -d
      ```
    - Refaça os passos para acessar o banco e verifique se os dados persistem.

9. **Finalize:**

    - Após os testes, pare os containers para liberar recursos:
      ```bash
      docker-compose down
      ```
