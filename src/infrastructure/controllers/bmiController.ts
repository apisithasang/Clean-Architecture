import { CalculateBmi } from '../../application/use-cases/calculateBmi';
import { handleError } from '../utils/errorHandler';

export class BmiController {
  private calculateBmi: CalculateBmi;

  constructor() {
    this.calculateBmi = new CalculateBmi();
  }

  handleRequest(weight: number, height: number): string {
    try {
      const result = this.calculateBmi.execute(weight, height);
      return `Your BMI is ${result.bmi.toFixed(2)} (${result.category})`;
    } catch (error: unknown) {
      return handleError(error);
    }
  }
}
