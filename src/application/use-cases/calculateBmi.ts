import { BmiResult } from '../../domain/models/bmiResult';

export class CalculateBmi {
  execute(weight: number, height: number): BmiResult {
    if (height <= 0 || weight <= 0) {
      throw new Error('Height and weight must be greater than zero.');
    }
    
    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }

    return { bmi, category };
  }
}
