import { Request, Response } from "express-serve-static-core";

export const mockGetUsersRequest = {} as Request;

export const mockGetUsersResponse = {
  send: jest.fn(),
} as unknown as Response;
