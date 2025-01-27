const express = require('express');
const promClient = require('prom-client');
const app = express();

// Criar um registro de métricas
const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

// Criar métricas personalizadas
const httpRequestsTotal = new promClient.Counter({
    name: 'http_requests_total',
    help: 'Total de requisições HTTP',
    labelNames: ['method', 'path', 'status'],
    registers: [register]
});

// Middleware para contar requisições
app.use((req, res, next) => {
    res.on('finish', () => {
        httpRequestsTotal.inc({
            method: req.method,
            path: req.path,
            status: res.statusCode
        });
    });
    next();
});

// Rota principal
app.get('/', (req, res) => {
    res.send('Aplicação de exemplo para monitoramento!');
});

// Endpoint de métricas para o Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});