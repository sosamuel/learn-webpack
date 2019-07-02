import React, { useState } from "react";
import styles from "./footer.css";
import { FooterProp } from "./footer.d";

const Footer = (props: FooterProp) => {
  const [select, setSelect] = useState("");
  const { total, onAll, onActive, onCompeleted } = props;
  return (
    <div className={styles.footer}>
      <span>Total:{total}</span>
      <a href="javascript:;" className={styles.footerBtn} onClick={onAll}>
        All
      </a>
      <a href="javascript:;" className={styles.footerBtn} onClick={onAll}>
        Active
      </a>
      <a href="javascript:;" className={styles.footerBtn} onClick={onAll}>
        Compeleted
      </a>
    </div>
  );
};
export default Footer;
