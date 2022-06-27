import { useState } from "react";

export const useForm = (initialState: any = {}) => {
    const [inputValues, setInputValues] = useState(initialState);
    const [disabledSubmit, setDisabledSubmit] = useState<boolean>(false);

    const resetForm = () => {
        setInputValues(initialState);
    }

    const validateInputs = (inputs: string[]) => {
        const disabled = inputs.every((input: string) => inputValues[input].length < 1);
        setDisabledSubmit(disabled);
    }

    const handleInputChange = ({ target }: any) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value
        });
    }

    return { inputValues, handleInputChange, resetForm, validateInputs, disabledSubmit };
}