# Usando a imagem oficial do OpenJDK para rodar a aplicação Spring Boot
FROM openjdk:21-jdk-slim

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando o arquivo JAR gerado pelo Maven ou Gradle
COPY target/*.jar app.jar

# Expondo a porta padrão do Spring Boot
EXPOSE 8084

# Comando para rodar a aplicação Spring Boot
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
