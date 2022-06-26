import { useEffect } from "react";
import icon from "../../assets/icons/pcnt-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from '../../store/slices/authSlice';
import { addTodo } from '../../store/slices/todoSlice';

import { Button } from '../Button';
// import { Checkbox } from '../Checkbox';
import { InputFied } from '../InputFied';
import { useForm } from '../../hooks';

export const Todos = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { inputValues, handleInputChange, validateInputs, disabledSubmit } = useForm({
    message: "",
    completed: false,
  });

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    validateInputs(inputValues);
  }, [validateInputs, inputValues]);

  const addNewTodo = () => dispatch(addTodo(inputValues));

  console.log(state);

  return (
    <div className="container">
      <header className="header-container">
        <img src={icon} alt="icon" />
      </header>

      <h1 className="title">To do list</h1>

      <h5 className="subtitle-questions">¿Qué cosas tenés que terminar hoy?</h5>

      <div className="form-container">
        <InputFied placeholder="Escribí un item" value={inputValues.message} name="message" onchange={handleInputChange} />
        <Button className="btn-primary" disabled={disabledSubmit} onClick={() => addNewTodo()}>Agregar</Button>
      </div>
    </div>
  )
}
