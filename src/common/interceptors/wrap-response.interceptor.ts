import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before the method');
    return next
      .handle()
      .pipe(map((data) => console.log('After the method', { test: data }))); // map method is able to change the response content. Now response is an object named "test"
  }
}
