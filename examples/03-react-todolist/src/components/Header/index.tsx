import React, { useState, useContext } from "react";
import styles from "./index.css";
import { TodoContext } from "../Content";
import { IItem } from "../TodoItem/index.d";

const Header = () => {
  const [title, setTitle] = useState("");
  const { add } = useContext(TodoContext);
  const submit = () => {
    if (!title) {
      return;
    }
    const todoItem: IItem = {
      checked: false,
      title,
      uuid: Date.now().toString()
    };
    add(todoItem);
    setTitle("");
  };
  return (
    <div className={styles.header}>
      <input
        placeholder="enter todo item"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyPress={e => {
          if (e.key !== "Enter") {
            return;
          }
          submit();
        }}
      />
    </div>
  );
};

export default Header;
