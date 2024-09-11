import { CustomError, ValidationError, CalculationError } from './CustomError';

export function isCustomError(error: unknown): error is CustomError {
  return error instanceof CustomError;
}

export function isValidationError(error: unknown): error is ValidationError {
  return isCustomError(error) && error.name === 'ValidationError';
}

export function isCalculationError(error: unknown): error is CalculationError {
  return isCustomError(error) && error.name === 'CalculationError';
}
