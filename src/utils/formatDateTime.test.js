import {formatDate, formatTime, formatDateTime, formatDateTo} from './formatDateTime';

describe('Datetime Util functions', () => {
  it('should return formatted Date', () => {
    expect(formatDate(1525271963)).toBe('05.02.18');
  });

  it('should return formatted Time', () => {
    expect(formatTime(1525271963)).toBe('2:39pm');
  });

  it('should return formatted DateTime', () => {
    expect(formatDateTime(1525271963)).toBe('May 02, 2018 at 2:39pm');
  });

  it('should return datetime with provided format', () => {
    expect(formatDateTo(1525271963)).toBe('May 02, 2018');
    expect(formatDateTo(1525271963, 'MM/DD/YYYY')).toBe('05/02/2018');
  });
});
