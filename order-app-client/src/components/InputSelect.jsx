export function InputSelect(props) {
  const required = props.required || false;

  // příznak označení prázdné hodnoty
  const emptySelected = props.value?.length === 0;
  

  return (
    <div className="form-group">
      <label>{props.label}:</label>
      <select
        required={required}
        className="browser-default form-select"
        name={props.name}
        onChange={props.handleChange}
        value={props.value}
      >
        {required ? (
          /* prázdná hodnota zakázaná (pro úpravu záznamu) */
          <option disabled value={emptySelected}>
            {props.prompt}
          </option>
        ) : (
          /* prázdná hodnota povolená (pro filtrování přehledu) */
          <option key={0} value={emptySelected}>
            ({props.prompt})
          </option>
        )}

        {props.items.map((item, index) => (
              <option key={required ? index : index + 1} value={item.id}>
                 {`${item.name}, cena bez DPH: ${item.unitPrice}Kč, popis: ${item.description}`}
              </option>
            ))
        }
      </select>
    </div>
  );
}

export default InputSelect;
