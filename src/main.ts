import { HelloController } from './infrastructure/controllers/helloController';
import { BmiController } from './infrastructure/controllers/bmiController';

// Testing HelloController
const helloController = new HelloController();
const helloResponse = helloController.handleRequest('World');
console.log(helloResponse); // Output: Hello, World!

// Testing BmiController
const bmiController = new BmiController();
const bmiResponse = bmiController.handleRequest(50, 1.75); // Weight in kg, Height in meters
console.log(bmiResponse); // Output: Your BMI is 22.86 (Normal weight)
