import { PassportSerializer } from '@nestjs/passport';
import { Inject } from '@nestjs/common';
import { User } from 'src/typeorm';
import { UsersService } from 'src/users/services/users.service';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err, user: User) => void) {
    done(null, user);
  }
  async deserializeUser(user: User, done: (err, user: User) => void) {
    const userDB = await this.userService.findOne(user.id);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
