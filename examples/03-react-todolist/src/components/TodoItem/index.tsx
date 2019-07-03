import React, { useContext } from "react";
import { TodoContext } from "../Content";
import { TodoItemProps } from "./index.d";
import styles from "./item.css";

const TodoItem = (props: TodoItemProps) => {
  const { item } = props;
  const { modified, remove } = useContext(TodoContext);
  return (
    <div className={styles.itemWrapper}>
      <input
        type="radio"
        checked={item.checked}
        onChange={e => {
          modified(item.uuid, e.target.checked);
        }}
      />
      <p title={item.title}>{item.title}</p>
      <span className={styles.close} onClick={e => remove(item)} />
    </div>
  );
};

export default TodoItem;
