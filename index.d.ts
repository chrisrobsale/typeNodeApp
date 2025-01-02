import * as express from "express-serve-static-core";

declare global {
  namespace Express {
    interface Request {
      customField?: string;
    }
    interface Response {
      send: jest.Mock<any, any>;
    }
  }
}
