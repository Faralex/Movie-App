import Select from "../../../shared/ui/Select/Select";

const GenreSelect = ({ value, onChange, genres, loading, error }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={genres}
      placeholder="Все жанры"
      loading={loading}
      error={error}
    />
  );
};

export default GenreSelect;
