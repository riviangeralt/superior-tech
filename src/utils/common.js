export const CommaFormatted = (x) => {
  if (x) {
    return parseFloat(x).toLocaleString("en-IN");
  } else {
    return 0;
  }
};
