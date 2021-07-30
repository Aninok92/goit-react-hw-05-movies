import Loader from "react-loader-spinner";
import s from "./Loader.module.scss";

const LoaderContainer = () => {
  return (
    <div className={s.loaderContainer}>
      <Loader
        type="Circles"
        color="#ff6768"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default LoaderContainer;
