import faker from 'faker';
import { AccountModel } from '@/domain/models';

export const mockAccountModel = (): AccountModel => ({
  accessToken: fakerStatic.random.uuid(),
  name: faker.name.findName()
});
