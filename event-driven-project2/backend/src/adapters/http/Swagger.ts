import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import swaggerJSDoc from "swagger-jsdoc";

export function setupSwagger(app: Express) {
    const specs = swaggerJSDoc({
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Hexagonal API",
                version: "1.0.0",
                description: "Backend with hexagonal architecture",
            },
        },
        apis: ["./src/adapters/http/**/*.ts"],
    });

    app.use("/", swaggerUi.serve, swaggerUi.setup(specs));
}
