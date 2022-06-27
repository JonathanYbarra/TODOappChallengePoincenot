import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo } from "../../../api/apiTodo";
import { Checkbox } from './../../Checkbox';
import { SetCompletionTodo } from './../../../api/apiTodo';
import { selectAllTodos } from './../../../store/slices/todoSlice';

interface Props {
    todo: any;
};

export const TodoItem = ({ todo }: Props) => {

    const [todoCheck, setTodoCheck] = useState<boolean>(todo.completed);
    const { auth } = useSelector((state: any) => state);
    const todos = useSelector(selectAllTodos);

    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch(DeleteTodo({ userId: auth.user, todoId: todo.todoId }));
    };

    const updateTodo = () => {
        setTodoCheck(!todoCheck);
        dispatch(SetCompletionTodo({ userId: auth.user, todo }));
    };

    console.log(todos);
    
    return (
        <div className='todo-list-card__item'>
            <Checkbox
                checked={todoCheck}
                id={todo.todoId}
                label={todo.title}
                onChange={updateTodo}
            />
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}
