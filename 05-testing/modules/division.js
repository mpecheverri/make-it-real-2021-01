const division = (dividendInput, dividerInput) => {
  const dividend = parseInt(dividendInput);
  const divider = parseInt(dividerInput);

  return divider === 0 ? 'no se puede realizar' : dividend / divider;
};

module.exports = { division };
