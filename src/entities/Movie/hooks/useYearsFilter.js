import { useState, useEffect } from "react";
import getYearsRange from "../../../shared/helpers/getYearsRange";

const useYearsFilter = (startYear = 2024, endYear = 1980) => {
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    const years = getYearsRange(startYear, endYear);
    setAvailableYears(years);
  }, [startYear, endYear]);

  return { availableYears };
};

export default useYearsFilter;
