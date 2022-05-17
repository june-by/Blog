import type { NextPage } from "next";
import CategorySelect from "../components/Block/MainPage/CategorySelect";
import styles from "./styles.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.HomeWrapper}>
      <CategorySelect />
    </div>
  );
};

export default Home;
