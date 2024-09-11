import { Greeting } from '../../domain/models/greeting';

export class SayHello {
  execute(name: string): Greeting {
    return { message: `Hello, ${name}!` };
  }
}