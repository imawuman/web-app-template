import sampleRouter from "./sample/router";

export const apiRoutes = (app) => {
  app.use("/api/sample", sampleRouter);
};
