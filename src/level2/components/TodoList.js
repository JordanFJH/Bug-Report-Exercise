import Todo from "./Todo";

export function TodoList({ todos, listType, deleteTodo, completeTodo }) {
  let filteredTodos = todos.filter((item) => {
    if (listType === "all") {
      return true;
    } else if (listType === "complete") {
      if (item.completed === true) {
        return true;
      }
    } else {
      if (item.completed === false) {
        return true;
      }
    }
    return false;
  });

  return (
    <ul>
      {filteredTodos.map((item, index) => (
        <Todo
        key={index}
          item={item}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}