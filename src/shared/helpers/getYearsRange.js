const getYearsRange = (startYear, endYear) => {
  const years = [];
  for (let year = startYear; year >= endYear; year--) {
    years.push(year);
  }
  return years;
};

export default getYearsRange;
