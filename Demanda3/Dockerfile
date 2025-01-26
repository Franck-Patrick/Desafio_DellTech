FROM python:2.7

# Definir o diretório de trabalho
WORKDIR /html

# Copiar os arquivos necessários (incluindo app.py, index.html, etc.)
COPY index.html . 

# Expor a porta 3000
EXPOSE 3000

# Rodar o app.py
CMD python app.py
