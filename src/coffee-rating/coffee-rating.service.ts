import { Injectable, Scope } from '@nestjs/common';

@Injectable()
export class CoffeeRatingService {}

// Scope DEFAULT - This is assumed when NO Scope is entered like so: @Injectable() */
@Injectable({ scope: Scope.DEFAULT })
export class ExpampleCoffeeRatingService1 {}

// -------------

/** 
 * Scope TRANSIENT 
  
 * Transient providers are NOT shared across consumers. 
 * Each consumer that injects a transient provider 
 * will receive a new, dedicated instance of that provider. 
 */
@Injectable({ scope: Scope.TRANSIENT })
export class ExpampleCoffeeRatingService2 {}

// -------------

/**
 * Scope REQUEST 

 * Request scope provides a new instance of the provider 
 * exclusively for each incoming request. 
 */
@Injectable({ scope: Scope.REQUEST })
export class ExpampleCoffeeRatingService3 {}
