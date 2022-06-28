import { useSelector } from "react-redux";
import { TodoItem } from './TodoItem';
import filter from "../../../assets/icons/filter.svg";
import { TodoOptions } from './TodoOptions';
import { useState } from 'react';

export const TodoListCard = () => {
    const { todoList } = useSelector((state: any) => state.todos);
    const [showFilter, setShowFilter] = useState(false);
    return (
        <>
            {
                todoList.length > 0 && (
                    <div className="todo-list-card">
                        <div className="todo-list-card__header">
                            <h2>To do list</h2>
                            <button className="todo-list-card__header__options" onClick={() => setShowFilter(!showFilter)}>
                                <span>Todos</span>
                                <img src={filter} alt="filter" />

                                <TodoOptions showFilter={showFilter} />
                            </button>

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
