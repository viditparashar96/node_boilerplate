import swaggerJSDoc from "swagger-jsdoc";

 const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Demo API with Swagger",
      version: "0.1.0",
      description: "Demo api endpoints",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "",
        url: "",
        email: "",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
      
    ],
  },
  apis: ["**/*.ts"]
};

export const specs = swaggerJSDoc(options);
