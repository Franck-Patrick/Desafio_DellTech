# Nginx Customizado com Página HTML

Este repositório contém a configuração para criar uma imagem Docker personalizada do Nginx, que serve uma página HTML simples com o texto "Hello Del.Tech World".

## Arquitetura

- O servidor Nginx serve o arquivo HTML (`index.html`) como página inicial.
- A configuração personalizada do Nginx é aplicada por meio do arquivo `nginx.conf`.

## Estrutura do Projeto

- `Dockerfile`: Arquivo para construir a imagem Docker do Nginx.
- `nginx.conf`: Arquivo de configuração do Nginx.
- `index.html`: Página HTML que será servida pelo Nginx.

## Como Validar

### 1. Requisitos

Antes de começar, certifique-se de ter o Docker instalado no seu sistema. Caso não tenha, siga os passos de instalação no [site oficial do Docker](https://www.docker.com/get-started).

### 2. Construir a Imagem Docker

Clone este repositório ou baixe os arquivos no seu ambiente local.

Em seguida, abra o terminal no diretório onde os arquivos estão localizados e execute o seguinte comando para construir a imagem Docker:

```bash
docker build -t my-nginx-image .
```
Por último, rode docker run -d -p 9090:80 my-nginx-image (A escolha da porta é feita baseada na hipótese de que a porta 8080 já esteja em uso.).

### 3. Em seu navegador, acesse localhost:9090

Deve retornar Hello Del.Tech World.


