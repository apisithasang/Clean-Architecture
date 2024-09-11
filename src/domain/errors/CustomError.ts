export class CustomError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  export class ValidationError extends CustomError {
    constructor(message: string) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  export class CalculationError extends CustomError {
    constructor(message: string) {
      super(message);
      this.name = 'CalculationError';
    }
  }