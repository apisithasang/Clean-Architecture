import { SayHello } from '../../application/use-cases/sayHello';

export class HelloController {
  private sayHello: SayHello;

  constructor() {
    this.sayHello = new SayHello();
  }

  handleRequest(name: string): string {
    const greeting = this.sayHello.execute(name);
    return greeting.message;
  }
}
