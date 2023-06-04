export function numberOfAreas (number: number | undefined): string {
    if (number === undefined) {
      return '';
    } else {
      const count = number % 10;
      if (count === 1) return 'помещение';
      if (1 < count && count < 5) return 'помещения';
      if (number === 0 || 5 <= count || count < 10) return 'помещений';
    }
    return '';
  };