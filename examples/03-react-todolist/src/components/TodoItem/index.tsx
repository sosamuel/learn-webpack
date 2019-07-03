import React, { useContext } from "react";
import { TodoContext } from "../Content";
import { TodoItemProps } from "./index.d";
import styles from "./item.css";

const Radio = (props: any) => {
  const { size } = props;
  return (
    <div>
      <input />
      <div />>
    </div>
  );
};

const TodoItem = (props: TodoItemProps) => {
  const { item } = props;
  const { modified, remove } = useContext(TodoContext);
  return (
    <div className={styles.itemWrapper}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={e => {
          modified(item.uuid, e.target.checked);
        }}
      />
      <p title={item.title} className={item.checked ? styles.middleLine : ""}>
        {item.title}
      </p>
      <span className={styles.close} onClick={e => remove(item)} />
    </div>
  );
};

export default TodoItem;
