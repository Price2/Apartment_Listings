import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


/**
 * Initializes and configures the NestJS application.
 * 
 * This function performs the following tasks:
 * - Creates a NestJS application instance using the `AppModule`.
 * - Enables Cross-Origin Resource Sharing (CORS) with specific options:
 *   - Allows requests from `http://localhost:3000`.
 *   - Permits HTTP methods: GET, HEAD, PUT, PATCH, POST, DELETE.
 *   - Specifies allowed headers: `Content-Type` and `Authorization`.
 *   - Enables credentials for cross-origin requests.
 *   - Disables preflight continuation and sets the success status for preflight requests to 204.
 * - Configures global validation pipes to:
 *   - Automatically strip properties not defined in the DTO (`whitelist`).
 *   - Reject requests containing properties not defined in the DTO (`forbidNonWhitelisted`).
 *   - Automatically transform payloads to match the expected DTO types (`transform`).
 * - Starts the application and listens on the port specified in the `PORT` environment variable,
 *   defaulting to 5000 if not set.
 * 
 * @async
 * @function bootstrap
 * @returns {Promise<void>} A promise that resolves when the application is successfully started.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, 
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, 
      forbidNonWhitelisted: true, 
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
