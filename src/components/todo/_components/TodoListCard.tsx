import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TodoItem } from './TodoItem';
import { TodoOptions } from './TodoOptions';

import filter from "../../../assets/icons/filter.svg";
import resetList from "../../../assets/icons/akar-icons_circle-plus-fill.svg";
import { Modal } from '../../Modal';
import { ResetTodo } from '../../../api/apiTodo';


export const TodoListCard = () => {
    const dispatch = useDispatch();
    const { todoList } = useSelector((state: any) => state.todos);
    const { user } = useSelector((state: any) => state.auth);

    const [showFilter, setShowFilter] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const resetTodos = () => {
        dispatch(ResetTodo(user))
        setOpenModal(false)
    }

    const ModaBody = (
        <>
            <p>
                Cuando comenzás una nueva lista, tu lista existente se elimina.
            </p>
            <p>
                ¿Estás seguro que querés empezar una nueva lista?
            </p>
        </>
    );

    return (
        <>
            {
                todoList.length > 0 && (
                    <div className="todo-list-card">
                        <div className="todo-list-card__header">
                            <div className="todo-list-card__header__title">
                                <h2>To do list</h2>
                                <button className='button-reset' onClick={() => setOpenModal(true)}>
                                    <img src={resetList} alt="Reset List" />
                                </button>
                            </div>
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

            <Modal
                open={openModal}
                btnCancelOnClick={() => setOpenModal(false)}
                btnCancelText="Cancelar"
                title="Empezar nueva lista"
                secondBtntext="Nueva lista"
                secondBtnOnClick={resetTodos}
                body={ModaBody}
            />
        </>
    )
}
