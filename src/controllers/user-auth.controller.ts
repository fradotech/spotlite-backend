import { ApiResponse } from "../../infrastructure/api.contract";
import { User } from "../entities/user.entity";
import { UserAuthService } from "../services/user-auth.service";
import { Request } from "../../infrastructure/middlewares/auth.middleware";

export class UserAuthController {
  constructor(private readonly userAuthService: UserAuthService) {}

  register = ApiResponse.tryCatch(
    async (req: Request): Promise<User | null> => {
      return await this.userAuthService.register(req.body);
    }
  );

  login = ApiResponse.tryCatch(async (req: Request): Promise<User | null> => {
    return await this.userAuthService.login(req.body);
  });

  account = ApiResponse.tryCatch(async (req: Request): Promise<User | null> => {
    return await this.userAuthService.account(+req.user.id);
  });
}
