
type Props = {
    id: string;
    label: string;
}

export const Checkbox = ({ label, id }: Props) => {
    return (
        <div className="checkbox-container">
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
