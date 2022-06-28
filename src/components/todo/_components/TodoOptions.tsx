
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetTodos, GetTodosCompleted } from '../../../api/apiTodo';

type toggleParam = "ALL" | "COMPLETED" | "UNCOMPLETED";

type Props = {
    showFilter: boolean;
}

export const TodoOptions = ({ showFilter }: Props) => {
    const { user } = useSelector((state: any) => state.auth);

    const [filterOptions, setFilterOptions] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        filterOptions === "ALL" && dispatch(GetTodos({ userId: user, state: "ALL" }));
        filterOptions === "UNCOMPLETED" && dispatch(GetTodosCompleted({ userId: user, completed: false }));
        filterOptions === "COMPLETED" && dispatch(GetTodosCompleted({ userId: user, completed: true }));
    }, [filterOptions, dispatch, user])

    const toggleFilter = (option: toggleParam) => {
        setFilterOptions(option);
    }

    const isActive = (id: toggleParam): boolean => {
        return id === filterOptions;
    }

    return (
        showFilter ? (
            <div className="todo-options">
                <p className={`option ${isActive("ALL") && "active"}`} role="button" onClick={() => toggleFilter("ALL")}>Todos</p>
                <p className={`option ${isActive("UNCOMPLETED") && "active"}`} role="button" onClick={() => toggleFilter("UNCOMPLETED")}>No realizados</p>
                <p className={`option ${isActive("COMPLETED") && "active"}`} role="button" onClick={() => toggleFilter("COMPLETED")}>Realizados</p>
            </div>
        ) : null
    )
}
