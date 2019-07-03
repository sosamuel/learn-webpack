import React, { createContext, useState, useEffect, useContext } from "react";
import TodoList from "../TodoList";
import Header from "../Header";
import Footer from "../Footer";
import { IItem } from "../TodoItem/index.d";

const todoListKey = "__WEBPACK_TODOLIST_E.X3";
const historyList = localStorage.getItem(todoListKey) || "[]";
const parsedHistory = JSON.parse(historyList);
const initList: IItem[] = Array.isArray(parsedHistory) ? parsedHistory : [];
export interface ITodoContext {
  list: IItem[];
  add: (item: IItem) => void;
  modified: (uuid: string, checked: boolean) => void;
  remove: (item: IItem) => void;
  init: (list: IItem[]) => void;
}

const initCtx: ITodoContext = {
  list: [],
  modified: () => {},
  add: () => {},
  remove: () => {},
  init: () => {}
};

const save = (list: any): void => {
  localStorage.setItem(todoListKey, JSON.stringify(list));
};

export const TodoContext = createContext(initCtx);

export const Content = (props = {}): JSX.Element => {
  const [list, setState] = useState(initList);
  const add = (item: IItem) => {
    const afterList = [...list, item];
    setState(afterList);
  };
  const remove = (item: IItem) => {
    setState(list.filter(i => i.uuid !== item.uuid));
  };
  const init = (iList: IItem[]) => {
    setState(iList);
  };
  const modified = (uuid: string, checked: boolean) => {
    const changeItem = list.find(item => item.uuid === uuid);
    changeItem && (changeItem.checked = checked);
    setState([...list]);
  };
  useEffect(() => {
    save(list);
  }, [list]);
  return (
    <TodoContext.Provider
      value={{
        list,
        add,
        remove,
        modified,
        init
      }}
    >
      <Header />
      <TodoList list={list} />
      {list.length && <Footer total={list.length} />}
    </TodoContext.Provider>
  );
};

export default Content;
