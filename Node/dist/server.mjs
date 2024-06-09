import {
  registerForEvent
} from "./chunk-JWXC5NNT.mjs";
import {
  errorHandler
} from "./chunk-G4UD5DSF.mjs";
import {
  checkIn
} from "./chunk-M5CQ6FKR.mjs";
import {
  createEvent
} from "./chunk-R34ZK5OM.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-HLPXUILL.mjs";
import {
  getEventAttendees
} from "./chunk-KMIYGLHC.mjs";
import {
  getEvent
} from "./chunk-P2CHQIE6.mjs";
import "./chunk-UX6HP52O.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastifyCors } from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Projeto da NLW Unite.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
export {
  app
};
