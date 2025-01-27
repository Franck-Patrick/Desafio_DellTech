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
- Node.js (para desenvolvimento local)

## Configuração Local

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd [NOME_DO_DIRETORIO]
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
4. Configure a URL: http://prometheus:9090
5. Clique em "Save & Test"

### Importando Dashboards

1. Acesse "Create > Import"
2. Use o ID 1860 para importar um dashboard Node.js
3. Selecione o datasource Prometheus configurado anteriormente

## Métricas Disponíveis

- `http_requests_total`: Total de requisições HTTP por método, path e status
- Métricas padrão do Node.js (memória, CPU, etc.)

## Hospedagem

Para hospedar em um serviço gratuito como o Render:

1. Crie uma conta no Render (https://render.com)
2. Conecte seu repositório GitHub
3. Crie um novo "Web Service" e configure as variáveis de ambiente necessárias
4. O Render irá automaticamente construir e implantar sua aplicação

## Expandindo o Monitoramento

Para adicionar novas métricas:

1. Adicione novos coletores no arquivo `app.js`
2. Atualize o arquivo `prometheus.yml` se necessário
3. Crie novos painéis no Grafana para visualizar as novas métricas

## Troubleshooting

- Verifique os logs dos containers: `docker-compose logs [service_name]`
- Confirme se as portas estão corretamente expostas
- Verifique se o Prometheus está conseguindo acessar o endpoint de métricas

## Segurança

- Altere a senha padrão do Grafana em produção
- Configure SSL/TLS para conexões seguras
- Implemente autenticação adequada para o ambiente de produção

## Suporte

Para questões e suporte, abra uma issue no repositório do projeto.