# ELK Stack com Docker Compose

Este repositório contém a configuração necessária para levantar o **ELK Stack** (Elasticsearch, Logstash, Kibana) utilizando **Docker Compose**. A arquitetura foi criada para garantir a comunicação correta entre os serviços, com foco na segurança, persistência de dados e fácil gerenciamento.

## Arquitetura

A configuração do ELK Stack foi projetada para ser simples, mas robusta, com as seguintes características principais:

### 1. Elasticsearch

- **Responsabilidade**: Armazenar e indexar os dados
- **Segurança**: Configurado com uma senha de segurança para autenticação, utilizando variáveis de ambiente
- **Persistência de Dados**: Configurado com volumes para garantir que os dados não sejam perdidos após reinicializações do container

### 2. Logstash

- **Responsabilidade**: Processar logs antes de enviá-los ao Elasticsearch
- **Configuração**: Pipeline básico de entrada e saída para processar logs (por exemplo, de arquivos ou sistemas)

### 3. Kibana

- **Responsabilidade**: Interface web para visualização de logs armazenados no Elasticsearch
- **Configuração**: Conectado ao Elasticsearch para exibir logs na interface gráfica, usando as credenciais configuradas

## Variáveis de Ambiente

Para garantir a segurança e a comunicação correta entre os serviços, utilizamos variáveis de ambiente no arquivo `docker-compose.yml`:

- **Senha de Segurança**: A autenticação entre Elasticsearch, Logstash e Kibana é configurada com variáveis de ambiente
- **Usuário e Senha**: O Elasticsearch exige que você configure um usuário com senha para autenticação

## Arquitetura de Volumes

- **Persistência de Dados**: O Elasticsearch é configurado com volumes, garantindo que os dados sejam armazenados de forma persistente, mesmo após reinicializações dos containers

## Estrutura do Projeto

```
.
├── docker-compose.yml
├── logstash/
│   ├── config/
│   └── pipeline/
├── elasticsearch/
│   ├── data/
│   └── config/
└── kibana/
    └── config/
```

## Como Validar

### 1. Requisitos

Antes de começar, certifique-se de ter o Docker e o docker-compose instalados no seu sistema. Caso não tenha, siga os passos de instalação no [site oficial do Docker](https://www.docker.com/get-started).

### 2. Construir o ELK

1. Clone este repositório:
   ```bash
   git clone https://github.com/Franck-Patrick/Desafio_DellTech.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd /Demanda4
   ```

3. Inicialize grupos e usuários necessários:
   ```bash
   docker-compose up setup
   ```

4. Levante o stack:
   ```bash
   docker-compose up -d
   ```

Após aproximadamente um minuto, acesse a interface do Kibana em [http://localhost:5601](http://localhost:5601) com as credenciais padrão:

- **Usuário**: `elastic`
- **Senha**: `changeme`

## Testando a Persistência dos Dados

1. No Kibana (localhost:5601), acesse:
   - Menu (3 barras no canto superior esquerdo)
   - Management
   - Dev Tools

2. Crie um índice de teste:
   ```json
   PUT /meu_indice
   {
     "settings": {
       "number_of_shards": 1,
       "number_of_replicas": 1
     },
     "mappings": {
       "properties": {
         "nome": { "type": "text" },
         "idade": { "type": "integer" }
       }
     }
   }
   ```

3. Adicione dados de teste:
   ```json
   POST /meu_indice/_doc
   {
     "nome": "Douglas",
     "idade": 22
   }
   ```

4. Verifique os dados:
   ```json
   GET /meu_indice/_search
   ```

5. Teste a persistência:
   ```bash
   docker-compose down
   docker-compose up -d
   ```

6. Após um minuto, verifique novamente os dados:
   ```json
   GET /meu_indice/_search
   ```

Os dados devem permanecer intactos, confirmando a persistência do armazenamento.