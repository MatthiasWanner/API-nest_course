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
    console.log('Wrap Response interceptor before the method');
    return next.handle().pipe(
      map((data) => {
        return {
          interceptor: 'wrap-response',
          calling: 'After the method',
          response: data,
        };
      }),
    ); // map method is able to change the response content. Now response is an object named "test"
  }
}
