interface TextFieldProps {
    label: String;
    value: String;
    className ? : String;
}

const TextField = ({label, value, className}: TextFieldProps) => {
    return(
        <div className="pina-text-field">
            <p className="pina-text-field-label">{label}</p>
            <p className={`pina-text-field-value ${className}`}>{value}</p>
        </div>
    )
}

export default TextField;