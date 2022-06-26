import { ReactElement } from "react"

type Props = {
    children: ReactElement | string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = ({ children, className, disabled = false, onClick }: Props) => {
    return (
        <button className={`btn ${className}`} disabled={disabled} onClick={onClick}>{children}</ button>
    )
}