const General = () => {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <h1>General</h1>
      <select name="language" id="language" className="w-full rounded-sm border border-gray-500 p-2">
        <option value="english">English</option>
        <option value="hebrew">Hebrew</option>
      </select>
    </div>
  );
};

export default General;
