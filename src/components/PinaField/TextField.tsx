interface TextFieldProps {
    label: String;
    value: String;
}

const TextField = ({label, value}: TextFieldProps) => {
    return(
        <div className="pina-text-field">
            <p className="pina-text-field-label">{label}</p>
            <p className="pina-text-field-value">{value}</p>
        </div>
    )
}

export default TextField;