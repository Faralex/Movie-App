import Select from "../../../shared/ui/Select/Select";

const YearSelect = ({ value, onChange, years }) => {
  return <Select value={value} onChange={onChange} options={years} placeholder="Все годы" />;
};

export default YearSelect;
