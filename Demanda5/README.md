# Sistema de Monitoramento com Prometheus e Grafana

Este projeto implementa um sistema de monitoramento usando Prometheus e Grafana para coletar e visualizar métricas de uma aplicação Node.js.

## Estrutura do Projeto

```
.
├── app.js
├── Dockerfile
├── docker-compose.yml
├── package.json
├── prometheus.yml
└── README.md
```

## Requisitos

- Docker
- Docker Compose
## Configuração Local

1. Clone o repositório:
```bash
git clone https://github.com/Franck-Patrick/Desafio_DellTech.git
cd Demanda5/
```

2. Inicie os containers:
```bash
docker-compose up -d
```

3. Acesse os serviços:
- Aplicação: http://localhost:3000
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001

## Acesso ao Grafana

1. Acesse o Grafana em http://localhost:3001 (ou URL pública)
2. Login:
   - Usuário: admin
   - Senha: admin123

### Configurando o Datasource no Grafana

1. Acesse "Configuration > Data Sources"
2. Clique em "Add data source"
3. Selecione "Prometheus"
4. Configure a URL: http://demanda5_prometheus_1:9090
5. Clique em "Save & Test"

### Importando Dashboards

1. Acesse "Create > Import"
2. Use o ID 1860 para importar um dashboard Node.js
3. Selecione o datasource Prometheus configurado anteriormente

## Métricas Disponíveis

- `http_requests_total`: Total de requisições HTTP por método, path e status
- Métricas padrão do Node.js (memória, CPU, etc.)

# Por favor, pule a parte de hospedagem, eu não consegui hospedar no render.
## Hospedagem

Para hospedar em um serviço gratuito como o Render:

1. Crie uma conta no Render (https://render.com)
2. Conecte seu repositório GitHub
3. Crie um novo "Web Service" e configure as variáveis de ambiente necessárias
4. O Render irá automaticamente construir e implantar sua aplicação
5. Lembre de colocar no Root Directory: Demanda5/


## Teste de Scrap

1. Ir na aba de explore do Grafana
2. Selecionar Queries
3. em métricas browser rode `scrape_duration_seconds`

## Caso deseje é possivel expandir o Monitoramento

Para adicionar novas métricas:

1. Adicione novos coletores no arquivo `app.js`
2. Atualize o arquivo `prometheus.yml` se necessário
3. Crie novos painéis no Grafana para visualizar as novas métricas