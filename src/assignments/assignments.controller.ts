import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  private isPrime(number: number): boolean {
    if (number <= 1) return false; 
    if (number === 2) return true; 
    if (number % 2 === 0) return false; 

    for (let i = 3; i * i <= number; i += 2) {
      if (number % i === 0) {
        return false; 
      }
    }
    
    return true; 
  }

  @Get('prime/:number')
  checkPrime(@Param('number') number: string) {
    const num = parseInt(number, 10);
    
    if (isNaN(num)) {
      return { message: "Invalid input. Please provide a valid number." };
    }

    const result = this.isPrime(num);
    return { isPrime: result };
  }
}
