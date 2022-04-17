import { ChangeEventHandler } from 'react';

interface Props {
  id: string;
  placeholdrer: string;
  value: string;
  errorMesage: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const TextInput: React.FC<Props> = ({
  id,
  placeholdrer,
  value,
  onChange,
  errorMesage,
}) => (
  <div className="form-group">
    <label htmlFor={id}>Title</label>
    <input
      type="text"
      className="form-control"
      id={id}
      placeholder={placeholdrer}
      value={value}
      onChange={onChange}
    />
    <p style={{ color: 'red' }}>{errorMesage}</p>
  </div>
);

export default TextInput;
