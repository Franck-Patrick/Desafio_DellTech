# DEMANDA 1: Crie uma API RESTful simples na linguagem de programação de sua escolha (exemplo:
# Node.js, C#, Java). Dockerize a aplicação e crie um arquivo docker-compose.yml que:
# 1. Suba a aplicação e um banco de dados de sua escolha (exemplo: MySQL,
# PostgreSQL, MongoDB).
# 2. Utilize volumes para persistência de dados do banco de dados.
# 3. Configure uma rede compartilhada entre os containers para que a API possa se
# conectar ao banco de dados.
# 4. Adicione variáveis de ambiente para configuração de conexões com o banco.

# Passo a Passo para testar a demanda:
# Primeiro, é necessário que no seu computador tenha o maven apache, que você pode baixar via terminal (linux), ou via web (windows)
# Para ter o maven, é necessário ter o java, geralmente 7+
# Ter o docker e o docker-compose instalados também será essencial para os testes. Vamos para a ação.

# Parte 1: Ir para o caminho da api, cd Demanda1/main/api
# Parte 2: Rodar o comando mvn clean install -DskipTests
# Parte 3: O comando anterior fazia o build da aplicação em springboot sem realizar testes que vem cheio de código sujo do maven.
# Parte 4: rodar o comando cd ../ para voltar ao diretório main, que é onde se encontra o docker-compose.
# Parte 5: Geralmente, buildamos a imagem e realizamos docker run, mas nesse caso... é só rodar docker-compose up -d
# Atenção: cuidado com a numeração das portas, por exemplo a 8080 sempre tá com jenkins, então neste usei localhost:8089
# Seguindo os passos anteriores e recebendo done para as respostas, rode docker ps para garantir que seus contâineres estão funcionando.
# Estando com status running ou up, basta você acessar o url: localhost:8089/swagger-ui.html
# Você pode ir em post e inserir dados para um novo empregado/funcionário.
# Para visualizar o que você criou, basta você se conectar ao banco, para isso é necessário que tenha o psql instalado, ou Dbeave..
# no caso de ser o psql mesmo no terminal é só rodar psql -h localhost -p 5432 -U postgres -d learning
# lembrando, que todos esses dados estão no compose, e a senha para o banco é "senha" não muito segura, mas é para fins de testes.
# Parte final: acessando o banco você pode visualizar as tabelas com \d e fazer um select * from tb_employees;
# Tendo inserido dados válidos e conseguido visualizar, chegou a hora de testar a persistência desses dados.
# caso esteja em psql digite exit.
# ainda em main, realize o comando: docker-compose down, e em seguida o comando docker-compose up -d
# refaça os passos para entrar no banco e veja que o empregado que você criou, ainda estará lá.
# Ao finalizar, não se esqueça de rodar docker-compose down para não ficar com muita informação.
