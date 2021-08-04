import { CalculatorService } from "./calculator.service";

describe("CalculatorService", () => {
  it("should add two numbers", () => {
    const logger = jasmine.createSpyObj('LoggerService', ['log']);
    const calculator = new CalculatorService(logger);
    const result = calculator.add(2, 2);
    expect(result).toBe(4, 'unexpected add result');
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    const logger = jasmine.createSpyObj('LoggerService', ['log']);
    const calculator = new CalculatorService(logger);
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});
