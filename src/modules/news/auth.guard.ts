import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token não fornecido');
    }

    const [, token] = authHeader.split(' ');

    try {
      const payload = this.jwtService.verify(token);
      const user = await this.authService.validateUser(payload.id);

      if (!user) {
        throw new UnauthorizedException('Usuário não encontrado');
      }

      request.user = user;
      return true;
    } catch {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
