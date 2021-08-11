import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.time('Request-response time'); // start time
    console.log('Hi from middleware!');

    res.on('finish', () => console.timeEnd('Request-response time')); // end time when response is finished
    next();
  }
}
