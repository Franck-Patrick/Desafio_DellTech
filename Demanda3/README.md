# Pipeline Jenkins com Docker

Este projeto contém um Jenkinsfile que demonstra a integração entre Jenkins e Docker, realizando clone de repositório, execução de containers e deploy.

## Pré-requisitos

- Jenkins instalado e configurado
- Plugin Docker Pipeline instalado no Jenkins
- Docker instalado no servidor Jenkins
- Permissões adequadas para o usuário Jenkins executar comandos Docker

## Configuração do Jenkins

1. Instale os seguintes plugins no Jenkins:
   - Docker Pipeline
   - Git
   - Pipeline
   - Workspace Cleanup

2. Configure as credenciais do Docker Hub (se necessário):
   - Acesse "Manage Jenkins" > "Manage Credentials"
   - Adicione suas credenciais do Docker Hub

3. Certifique-se que o usuário Jenkins está no grupo docker:
```bash
sudo usermod -aG docker jenkins
```

## Estrutura do Pipeline

O pipeline consiste em 4 estágios principais:

1. **Clone Repository**
   - Clona um repositório público do GitHub
   - Limpa o workspace antes do clone

2. **Build & Test in Docker**
   - Executa um container Node.js
   - Instala dependências
   - Executa testes

3. **Custom Script**
   - Executa um script personalizado dentro do container
   - Gera um arquivo de log
   - Arquiva o log como artefato

4. **Deploy**
   - Executa um container Nginx como exemplo de deploy
   - Verifica se o container está rodando
   - Realiza validações básicas

## Configuração do Pipeline no Jenkins

1. Crie um novo Pipeline job no Jenkins:
   - Acesse Jenkins
   - Clique em "New Item"
   - Escolha "Pipeline"
   - Digite um nome para o job

2. Configure o Pipeline:
   - Na seção "Pipeline", escolha "Pipeline script from SCM"
   - Escolha "Git" como SCM
   - Insira a URL do repositório: 'https://github.com/Franck-Patrick/Desafio_DellTech.git'
   - Especifique a branch main
   - Defina o path do Jenkinsfile como "Demanda3/Jenkinsfile"

## Variáveis de Ambiente

O pipeline usa as seguintes variáveis de ambiente que podem ser customizadas:

- `DOCKER_IMAGE`: Imagem Docker para build e teste (default: node:16-alpine)
- `DEPLOY_IMAGE`: Imagem Docker para deploy (default: nginx:alpine)
- `GIT_REPO`: URL do repositório Git para clone

## Customização

Para customizar o pipeline:

1. Modifique as variáveis de ambiente no início do Jenkinsfile
2. Ajuste os comandos no estágio "Custom Script" conforme necessário
3. Modifique o estágio "Deploy" para usar sua aplicação real
4. Adicione mais estágios conforme necessário

## Troubleshooting

Se encontrar problemas:

1. Verifique os logs do Jenkins
2. Confirme as permissões do Docker
3. Verifique se todos os plugins necessários estão instalados
4. Confirme se o repositório Git está acessível

## Segurança

- Não armazene credenciais sensíveis no Jenkinsfile
- Use o gerenciamento de credenciais do Jenkins
- Mantenha o Jenkins e plugins atualizados
- Limite as permissões do usuário Jenkins

## Suporte

Para questões e suporte, abra uma issue no repositório do projeto.# Pipeline Jenkins com Docker

Este projeto contém um Jenkinsfile que demonstra a integração entre Jenkins e Docker, realizando clone de repositório, execução de containers e deploy.

## Pré-requisitos

- Jenkins instalado e configurado
- Plugin Docker Pipeline instalado no Jenkins
- Docker instalado no servidor Jenkins
- Permissões adequadas para o usuário Jenkins executar comandos Docker

## Configuração do Jenkins

1. Instale os seguintes plugins no Jenkins:
   - Docker Pipeline
   - Git
   - Pipeline
   - Workspace Cleanup

2. Configure as credenciais do Docker Hub (se necessário):
   - Acesse "Manage Jenkins" > "Manage Credentials"
   - Adicione suas credenciais do Docker Hub

3. Certifique-se que o usuário Jenkins está no grupo docker:
```bash
sudo usermod -aG docker jenkins
```

## Estrutura do Pipeline

O pipeline consiste em 4 estágios principais:

1. **Clone Repository**
   - Clona um repositório público do GitHub
   - Limpa o workspace antes do clone

2. **Build & Test in Docker**
   - Executa um container Node.js
   - Instala dependências
   - Executa testes

3. **Custom Script**
   - Executa um script personalizado dentro do container
   - Gera um arquivo de log
   - Arquiva o log como artefato

4. **Deploy**
   - Executa um container Nginx como exemplo de deploy
   - Verifica se o container está rodando
   - Realiza validações básicas

## Configuração do Pipeline no Jenkins

1. Crie um novo Pipeline job no Jenkins:
   - Acesse Jenkins
   - Clique em "New Item"
   - Escolha "Pipeline"
   - Digite um nome para o job

2. Configure o Pipeline:
   - Na seção "Pipeline", escolha "Pipeline script from SCM"
   - Escolha "Git" como SCM
   - Insira a URL do repositório? https://github.com/Franck-Patrick/Desafio_DellTech.git
   - Especifique a branch main
   - Defina o path do Jenkinsfile como "Demanda3/Jenkinsfile"

## Variáveis de Ambiente

O pipeline usa as seguintes variáveis de ambiente que podem ser customizadas:

- `DOCKER_IMAGE`: Imagem Docker para build e teste (default: node:16-alpine)
- `DEPLOY_IMAGE`: Imagem Docker para deploy (default: nginx:alpine)
- `GIT_REPO`: URL do repositório Git para clone





