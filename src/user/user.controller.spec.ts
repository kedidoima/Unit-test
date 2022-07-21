import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { async } from 'rxjs';
import { User } from '../schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        { provide: getModelToken(User.name), useValue: jest.fn() },
      ],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
    userController = moduleRef.get<UserController>(UserController);
  });

  describe('test', () => {
    it('should return test', async () => {
      expect(userController.check()).toBe('test');
    });
  });

//   describe('findAll', ()=>{
//     it('should call findAll', async()=>{
//         userController.findAll();
//         expect(userService.findAll).toHaveBeenCalled();
//     })
//   });

  describe('findAll', () => {
    it('should return an array of user', async () => {
      const result = [];
      jest.spyOn(userService, 'findAll').mockImplementation(async () => result);
      expect(await userController.findAll()).toBe(result);
    });
  });
});
