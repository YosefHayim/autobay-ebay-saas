import loaderStyle from "./Loader.module.css";

const Loader = () => {
  return (
    <div style={loaderStyle}>
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
