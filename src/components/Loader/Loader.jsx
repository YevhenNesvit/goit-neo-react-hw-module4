import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <TailSpin height="50" width="50" color="#007bff" />
  </div>
);

export default Loader;
