import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
