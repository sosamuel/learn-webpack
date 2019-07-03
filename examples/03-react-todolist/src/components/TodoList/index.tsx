import * as React from "react";
import { TodoListProps } from "./index.d";
import TodoItem from "../TodoItem";

const TodoList = ({ list }: TodoListProps) => {
  return (
    <>
      {list.map(item => (
        <TodoItem key={item.uuid} item={item} />
      ))}
    </>
  );
};
export default TodoList;
