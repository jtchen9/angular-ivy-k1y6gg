import { greet, getCurrencies } from "./greet";

describe('greet', () => {
  it('should include the inputed name in the message', () => {
    expect(greet('JT')).toContain('JT');
  });
});
describe('getCurrencies', () => {
  it('should return the supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
