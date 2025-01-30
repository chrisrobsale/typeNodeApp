import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../types/dto";
import { CreateUserQueryParams } from "../types/query-param";
import { UserResponse, CommonResponse } from "../types/response";

export function getUsers(req: Request, res: Response<CommonResponse>) {
  console.log("Start -- getUsers");
  res.status(200).send({
    message: "Successfully fetched users",
    data: [
      {
        id: 1,
        email: "test",
      },
    ],
  });
}

export function getUsersById(req: Request, res: Response) {
  res.send({});
}

export function createUser(
  req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  res: Response<UserResponse>
) {
  res.status(201).send({
    id: 1,
    email: "test@test.com",
    username: "testUser",
  });
}
