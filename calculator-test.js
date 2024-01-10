
describe('calculateMonthlyPayment function', function () {
  it('should calculate the monthly rate correctly', function () {
    const result = calculateMonthlyPayment({ amount: 10000, years: 8, rate: 5.8 });
    expect(result).toEqual('130.44');
  });

  it('should return a result with 2 decimal places', function () {
    const result = calculateMonthlyPayment({ amount: 10000, years: 8, rate: 5.8 });
    // Regex to check for two decimal places
    expect(result).toMatch(/^\d+\.\d{2}$/);
  });

  // ...add more tests as needed...
});
