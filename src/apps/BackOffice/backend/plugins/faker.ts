import { faker } from '@faker-js/faker';

export class Faker {
  static generateRandomName(): string {
    return faker.person.fullName();
  }

  static generateRandomInt(min: number = 1, max: number = 10): number {
    return faker.number.int({ min, max });
  }

  static generateRandomUuid(): string {
    return faker.string.uuid();
  }

  static generateRandomString(length: number = 10): string {
    return faker.string.alphanumeric(length);
  }
}
