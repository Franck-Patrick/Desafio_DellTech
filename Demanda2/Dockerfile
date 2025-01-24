# Usando última imagem
FROM nginx:latest

# Copiando o arquivo html para o nginx
COPY index.html /usr/share/nginx/html/

# Copiando o arquivo de configuração nginx.conf para o ngnix
COPY nginx.conf /etc/nginx/nginx.conf

# Expodo na porta 80
EXPOSE 80

# Iniciando o servidor do nginx assim que o contâinter for iniciado.
CMD ["nginx", "-g", "daemon off;"]
