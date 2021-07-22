import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import setItem from "../../helpers/localStorage";
import { getItem } from "../../helpers/localStorage";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      toDoList: getItem() === null ? [] : getItem(),
    };
  }

  takeInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  componentDidUpdate() {
    setItem(this.state.toDoList);
  }

  handleAdd = (event) => {
    event.preventDefault();
    if (this.state.inputValue !== "") {
      this.setState((prevState) => {
        return {
          toDoList: [
            ...prevState.toDoList,
            {
              id: Math.random(),
              inputText: this.state.inputValue,
              isChecked: false,
              isEditMode: false,
            },
          ],

          inputValue: "",
        };
      });
    }
  };

  handleDelete = (item) => {
    this.setState((prevState) => ({
      toDoList: prevState.toDoList.filter((el) => item.id !== el.id),
    }));
  };

  handleChecked = (item) => {
    this.setState((prevState) => ({
      toDoList: prevState.toDoList.map((todo) =>
        todo.id === item.id ? { ...todo, isChecked: !todo.isChecked } : todo
      ),
    }));
  };

  handleEdit = (item) => {
    this.setState((prevState) => ({
      toDoList: prevState.toDoList.map((todo) =>
        todo.id === item.id ? { ...todo, isEditMode: !todo.isEditMode } : todo
      ),
    }));
  };

  handleCheckedAll = () => {
    this.setState((prevState) => ({
      toDoList: prevState.toDoList.map((todo) => {
        return { ...todo, isChecked: true };
      }),
    }));
    let completeAll = this.state.toDoList.every((todo) => todo.isChecked);
    if (completeAll) {
      this.setState((prevState) => ({
        completeAll: true,
        toDoList: prevState.toDoList.map((todo) => {
          return { ...todo, isChecked: false };
        }),
      }));
    }
  };

  render() {
    return (
      <div className="">
        <p className="text-4xl">To Do List</p>
        <form onClick={this.handleAdd}>
          <Input
            value={this.state.inputValue}
            onChange={this.takeInputValue}
            type="text"
            className="bg-gray-200 h-10 w-80"
            placeholder="todo list..."
          />
          <Input
            type="submit"
            value="ADD"
            className="
                bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
          />
        </form>

        <div>
          {this.state.toDoList.map((item) => (
            <div className="" key={item.id}>
              {item.isEditMode ? (
                <Input
                  defaultValue={item.inputText}
                  onChange={this.handleEdit}
                />
              ) : (
                <span
                  onClick={() => {
                    this.handleChecked(item);
                  }}
                  className={item.isChecked ? "line-through" : "no-underline"}
                >
                  {item.inputText}
                </span>
              )}

              <Button
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
                onClick={() => {
                  this.handleEdit(item);
                }}
                value="Edit"
              />

              <Button
                className="
                bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
                onClick={() => {
                  this.handleDelete(item);
                }}
                value="Delete"
              />
            </div>
          ))}
        </div>
        <Button
          onClick={this.handleCheckedAll}
          className="
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
          value="Checked All"
        />
      </div>
    );
  }
}
export default TodoList;
