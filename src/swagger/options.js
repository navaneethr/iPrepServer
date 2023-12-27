export const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "iPrepApp Express API with Swagger",
      version: "0.1.0",
      description: "iPrepApp API",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*/*.js"],
};