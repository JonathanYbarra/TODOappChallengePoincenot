import { useEffect } from "react";
import icon from "../../assets/icons/pcnt-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { CreateUser } from "../../api/apiAuth";
import { TodoForm } from './_components/TodoForm';
import { Loader } from "../Loader";
import { selectAllTodos } from '../../store/slices/todoSlice';

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);

  useEffect(() => {
    dispatch(CreateUser());
  }, [dispatch]);

  return (
    <div className="container">
      <header className="header-container">
        <img src={icon} alt="icon" />
      </header>

      <h1 className="title">To do list</h1>

      <h5 className="subtitle-questions">¿Qué cosas tenés que terminar hoy?</h5>

      <TodoForm />

      <Loader isLoading={todos.loading} />
    </div>
  )
}
