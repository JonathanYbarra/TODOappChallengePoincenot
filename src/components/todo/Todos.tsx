import { useEffect } from "react";
import icon from "../../assets/icons/pcnt-logo.svg";
import { useDispatch } from "react-redux";
import { CreateUser } from "../../api/apiAuth";
import { TodoForm } from './_components/TodoForm';

export const Todos = () => {
  const dispatch = useDispatch();

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
    </div>
  )
}
