
type Props = {
    id: string;
    label: string;
    checked?: boolean;
    onChange?: (value: any) => void;
}

export const Checkbox = ({ label, id, checked, onChange }: Props) => {
    return (
        <div className="checkbox-container">
            <input type="checkbox" id={id} checked={checked} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
