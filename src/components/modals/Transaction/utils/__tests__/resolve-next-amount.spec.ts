import { resolveNextAmount } from '../resolve-next-amount';

describe('Transaction Modal resolveNextAmount util', () => {
  it('should return the right value after every key stroke', () => {
    expect(resolveNextAmount('', '8')).toBe('8');
    expect(resolveNextAmount('8', '.')).toBe('8.');
    expect(resolveNextAmount('8', '0')).toBe('80');
    expect(resolveNextAmount('8.', '2')).toBe('8.2');
    expect(resolveNextAmount('8.2', '0')).toBe('8.2');
    expect(resolveNextAmount('8.2', '4')).toBe('8.24');
    expect(resolveNextAmount('8.24', '6')).toBe('8.24');
    expect(resolveNextAmount('', 'DELETE')).toBe('');
    expect(resolveNextAmount('123456789', '1')).toBe('123456789');
    expect(resolveNextAmount('123456789', '.')).toBe('123456789.');
    expect(resolveNextAmount('123456789.', '1')).toBe('123456789.1');
    expect(resolveNextAmount('123456789.1', '2')).toBe('123456789.12');
    expect(resolveNextAmount('123456789.12', '3')).toBe('123456789.12');
    expect(resolveNextAmount('123456789.12', 'DELETE')).toBe('123456789.1');
  });
});
