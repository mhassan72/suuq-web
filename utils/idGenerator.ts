let idCounter = 0;

export const generateUniqueId = (prefix = 'id') => {
  return `${prefix}-${++idCounter}`;
};