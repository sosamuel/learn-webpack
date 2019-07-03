export interface IItem {
  uuid: string;
  title: string;
  checked: boolean;
}
export interface TodoItemProps {
  item: IItem;
}
