
type Props = {
    value: string;
    name: string;
    placeholder?: string;
    type?: string;
    onchange: any;
}

export const InputFied = ({ placeholder, type = "text", value, name, onchange }: Props) => {
    return (
        <>
            <input type={type} placeholder={placeholder} className="input-field" value={value} name={name} onChange={onchange} />
        </>
    )
}
