import { Field, LabelText, Input, Textarea, SelectWrap, Select } from "./FormField.styles";

/**
 * ช่องกรอกฟอร์มพร้อม label
 * type = text | email | textarea | select ...  (select ใช้ options = ["a", "b"] หรือ [{ label, value }])
 */
export default function FormField({ label, required = false, type = "text", options = [], ...props }) {
  const labelText = required ? `${label} *` : label;

  const renderControl = () => {
    if (type === "textarea") return <Textarea required={required} {...props} />;
    if (type === "select") {
      return (
        <SelectWrap>
          <Select required={required} {...props}>
            {options.map((opt) => {
              const { label: text, value } = typeof opt === "string" ? { label: opt, value: opt } : opt;
              return (
                <option key={value} value={value}>
                  {text}
                </option>
              );
            })}
          </Select>
        </SelectWrap>
      );
    }
    return <Input type={type} required={required} {...props} />;
  };

  return (
    <Field>
      <LabelText>{labelText}</LabelText>
      {renderControl()}
    </Field>
  );
}
