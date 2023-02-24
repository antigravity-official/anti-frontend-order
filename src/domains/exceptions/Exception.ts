class Exception extends Error {
  readonly key: string;

  constructor(
    message = '알 수 없는 오류가 발생 하였습니다.',
    key = 'UNKNOWN_EXCEPTION'
  ) {
    super();
    this.name = this.constructor.name;
    this.message = message;
    this.key = key;
  }

  toString() {
    return `[${this.name}] [${this.key}] [${this.message}]`;
  }
}

export default Exception;
