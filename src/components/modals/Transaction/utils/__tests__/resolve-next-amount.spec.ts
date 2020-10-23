import resolveNextAmount from '../resolve-next-amount';

describe('Transaction Modal resolveNextAmount util', () => {
  it('should return the right value after every key stroke', () => {
    expect(resolveNextAmount('', '8')).toBe('8');
    expect(resolveNextAmount('8', '.')).toBe('8.');
    expect(resolveNextAmount('8', '0')).toBe('80');
    expect(resolveNextAmount('8.', '2')).toBe('8.2');
    expect(resolveNextAmount('8.2', '0')).toBe('8.2');
    expect(resolveNextAmount('8.2', '4')).toBe('8.24');
    expect(resolveNextAmount('8.24', '6')).toBe('8.24');
  });
});
