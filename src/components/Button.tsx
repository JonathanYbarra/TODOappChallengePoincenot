import { ReactElement } from "react"

type Props = {
    children: ReactElement | string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export const Button = ({ children, className, disabled = false, onClick, type = "button" }: Props) => {
    return (
        <button
            className={`btn ${className}`}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {children}
        </ button>
    )
}