import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AddNewTodo } from '../../../api/apiTodo';
// Components
import { InputFied } from '../../InputFied';
import { Button } from '../../Button';

import { useForm } from '../../../hooks';
import { TodoListCard } from './TodoListCard';

export const TodoForm = () => {

    const { auth } = useSelector((state: any) => state);
    const dispatch = useDispatch();

    const { inputValues, handleInputChange, validateInputs, disabledSubmit, resetForm } = useForm({
        message: "",
        completed: false,
    });

    useEffect(() => {
        validateInputs(["message"]);
    }, [validateInputs, inputValues]);

    const addTodo = () => {
        dispatch(AddNewTodo({ userId: auth.user, todo: inputValues }));
        resetForm();
    };

    return (
        <>
            <div className="form-container">
                <InputFied placeholder="Escribí un item" value={inputValues.message} name="message" onchange={handleInputChange} />
                <TodoListCard />
                <Button className="btn-primary btn-block" disabled={disabledSubmit} onClick={addTodo}>Agregar</Button>
            </div>
        </>
    )
}
