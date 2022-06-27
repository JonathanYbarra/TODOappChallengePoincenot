import { useSelector } from "react-redux";
import { TodoItem } from './TodoItem';

export const TodoListCard = () => {
    const { todoList } = useSelector((state: any) => state.todos);
    return (
        <>
            {
                todoList.length > 0 && (
                    <div className="todo-list-card">
                        <div className="todo-list-card__header">
                            <h2>To do list</h2>
                            <span>Todos</span>
                        </div>

                        <div className="todo-list-card__content">
                            {
                                todoList.map((todo: any) =>
                                    <TodoItem todo={todo} key={todo.todoId} />
                                )
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}
