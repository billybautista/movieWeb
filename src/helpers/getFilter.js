export const getFilter = (value) => {
  if (value === 1) return [0, 2];
  if (value === 2) return [2, 4];
  if (value === 3) return [4, 6];
  if (value === 4) return [6, 8];
  if (value === 5) return [8, 10];
  else return 0;
};
