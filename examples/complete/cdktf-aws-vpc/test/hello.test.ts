import { VPC } from '../src/awsvpc';

test('hello', () => {
  expect(new VPC("test").sayHello()).toBe('hello, world!');
});