import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-param";
import { User, UserList } from "../types/response";

export function getUsers(req: Request, res: Response<UserList>) {
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
  res: Response<User>
) {
  res.status(201).send({
    id: 1,
    email: "test@test.com",
    username: "testUser",
  });
}
