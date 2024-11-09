import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  private calculateFibonacci(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }

  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string) {
    const num = parseInt(n, 10);
    if (isNaN(num) || num < 0) {
      return { message: "Invalid input. Please provide a non-negative integer." };
    }

    const sequence = this.calculateFibonacci(num);
    return { sequence };
  }
}



