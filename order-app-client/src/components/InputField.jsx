export function InputField(props) {
  const INPUTS = ["text", "number"];

  const type = props.type?.toLowerCase() || "text";
  const required = props.required || false;

  if (!INPUTS.includes(type)) {
    return null;
  }

  const minProp = props.min || null;

  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.label}:
      </label>
      <input
        id={props.name}
        name={props.name}
        type={type}
        className="form-control"
        placeholder={props.prompt}
        value={props.value}
        required={required}
        min={minProp}
        minLength={props.minLength}
        pattern={props.pattern}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default InputField;
