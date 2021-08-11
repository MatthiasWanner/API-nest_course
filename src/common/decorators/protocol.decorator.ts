import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// When we call this decorator into a route parameters, it return protocol used by request. It,'s just to test custom parameter decorator
// ex: findCoffees(@protocol() protocol: string)
export const Protocol = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.protocol;
  },
);
