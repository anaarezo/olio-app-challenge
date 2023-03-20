import {convertDateToDistance, convertStringUTCToDate} from '..';

describe('Date utils ----', () => {
  it('should be in the convert String to UTC Date format', () => {
    const date = '2020-12-12T10:49:18.000Z';
    const result = convertStringUTCToDate(date);

    expect(new Date(result)).toBeInstanceOf(Date);
  });

  it('should be in the convert UTC Date format to Distance', () => {
    const date = new Date('2020-12-12T10:49:18.000Z');
    const result = convertDateToDistance(date);

    expect(result).toBe('over 2 years ago');
  });
});
