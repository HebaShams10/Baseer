import { AppErrorCode } from '../constants/error-codes.js';
export interface ApiResponse<T = any> {
  success: boolean;
  statusCode: number;
  data?: T;
  errorCode?: AppErrorCode;
  message?: string;
  timestamp: string;
}
