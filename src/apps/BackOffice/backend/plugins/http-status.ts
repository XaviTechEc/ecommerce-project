import { StatusCodes, ReasonPhrases, getReasonPhrase, getStatusCode } from 'http-status-codes';

export class HttpStatus {
  static codes = { ...StatusCodes };
  static reason = { ...ReasonPhrases };

  getReasonPhrase(code: number) {
    return getReasonPhrase(code);
  }
  getStatusCode(phrase: string) {
    return getStatusCode(phrase);
  }
}
