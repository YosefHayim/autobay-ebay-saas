import { countries } from "./countries";

const CountrySelection = () => {
  return (
    <select name="country" id="country" className="w-full border-gray-500 p-2">
      {countries.map((country) => (
        <option value={country}>{country}</option>
      ))}
    </select>
  );
};

export default CountrySelection;
