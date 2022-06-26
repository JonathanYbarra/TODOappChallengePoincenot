import { useState } from "react";

export const useForm = (initialState: any = {}) => {
    const [inputValues, setInputValues] = useState(initialState);
    const [disabledSubmit, setDisabledSubmit] = useState<boolean>(false);

    const reset = () => {
        setInputValues(initialState);
    }

    const validateInputs = (inputs: any) => {
        const disabled = Object.keys(inputs).every((input: any) => inputs[input].length < 1);
        setDisabledSubmit(disabled)
    }

    const handleInputChange = ({ target }: any) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value
        });
    }

    return { inputValues, handleInputChange, reset, validateInputs, disabledSubmit };
}