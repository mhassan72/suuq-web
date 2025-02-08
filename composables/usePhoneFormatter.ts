const SECTION_LENGTHS = [3, 4, 3];

export function usePhoneFormatter() {
  const formatPhoneNumber = (rawValue: string) => {
    const numbers = rawValue.replace(/\D/g, '');
    let result = '';
    let index = 0;

    for (const length of SECTION_LENGTHS) {
      if (index >= numbers.length) break;
      const section = numbers.slice(index, index + length);
      result += section + (index + length < numbers.length ? ' - ' : '');
      index += length;
    }

    return result;
  };

  return { formatPhoneNumber };
}