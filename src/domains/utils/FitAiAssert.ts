import Exception from '@domains/exceptions/Exception';
import {Logger} from '@domains/utils/Logger';

class FitAiAssert {
  static notNull(object: any, message: string): void {
    if (object === null) {
      const exception = new Exception(message);
      Logger.d(exception.toString());
      throw exception;
    }
  }

  static isTruthy(object: any, message: string): void {
    if (!object) {
      const exception = new Exception(message);
      Logger.d(exception.toString());
      throw exception;
    }
  }

  static isTrue(expression: boolean, message: string) {
    if (!expression) {
      const exception = new Exception(message);
      Logger.d(exception.toString());
      throw exception;
    }
  }

  static isNull(object: any, message: string): void {
    if (object !== null) {
      const exception = new Exception(message);
      Logger.d(exception.toString());
      throw exception;
    }
  }
}

export default FitAiAssert;
