import { ValidationError, CalculationError } from '../../domain/errors/CustomError';
import { isValidationError, isCalculationError } from '../../domain/errors/typeGuards';

export function handleError(error: unknown): string {
  if (isValidationError(error)) {
    return `Validation Error: ${error.message}`;
  } else if (isCalculationError(error)) {
    return `Calculation Error: ${error.message}`;
  } else if (error instanceof Error) {
    return `Error: ${error.message}`;
  } else {
    return 'An unknown error occurred.';
  }
}
