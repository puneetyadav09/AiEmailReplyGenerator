# Use Java 21 base image
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Build the app using Maven wrapper
RUN ./mvnw package -DskipTests

# Run the jar file
CMD ["java", "-jar", "target/email-writer-sb-0.0.1-SNAPSHOT.jar"]
