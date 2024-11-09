import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  private calculateFactorial(number: number): number {
    if (number < 0) {
      throw new Error('Factorial is not defined for negative numbers');
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }

  @Get('factorial/:number')
  getFactorial(@Param('number') number: string) {
    const num = parseInt(number, 10);
    
    if (isNaN(num)) {
      return { message: "Invalid input. Please provide a valid number." };
    }

    try {
      const result = this.calculateFactorial(num);
      return { factorial: result };
    } catch (error) {
      return { message: error.message };
    }
  }
}
