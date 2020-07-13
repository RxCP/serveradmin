import { controller } from '@foal/core';
import { AuthController } from './controllers';

export class AuthPluginController {
  subControllers = [controller('/api/auth', AuthController)];
}
