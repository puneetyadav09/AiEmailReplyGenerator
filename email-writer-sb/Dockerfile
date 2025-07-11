# Use Java 21 base image and install Maven
FROM maven:3.9.6-eclipse-temurin-21

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Build the project
RUN mvn package -DskipTests

# Run the application
CMD ["java", "-jar", "target/email-writer-sb-0.0.1-SNAPSHOT.jar"]
