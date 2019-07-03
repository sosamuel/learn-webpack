import React, { useContext } from "react";
import styles from "./footer.css";
import { TodoContext } from "../Content";
import { FooterProp } from "./footer.d";

enum selectedType {
  all = "all",
  active = "active",
  completed = "completed"
}

const Footer = (props: FooterProp) => {
  const { total } = props;
  const { selected, changeSelect } = useContext(TodoContext);
  const selectHandler = (type: selectedType) => (e: any) => {
    changeSelect(type);
  };
  const getClass = (bool: boolean) =>
    bool ? `${styles.selected} ${styles.footerBtn}` : styles.footerBtn;
  return (
    <div className={styles.footer}>
      <span>Total:{total}</span>
      <a
        href="javascript:;"
        className={getClass(selected === selectedType.all)}
        onClick={selectHandler(selectedType.all)}
      >
        All
      </a>
      <a
        href="javascript:;"
        className={getClass(selected === selectedType.active)}
        onClick={selectHandler(selectedType.active)}
      >
        Active
      </a>
      <a
        href="javascript:;"
        className={getClass(selected === selectedType.completed)}
        onClick={selectHandler(selectedType.completed)}
      >
        Completed
      </a>
    </div>
  );
};

export default Footer;
