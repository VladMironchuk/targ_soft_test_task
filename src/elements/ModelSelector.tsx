export interface ModeSelectorProps {
  defaultValue: string;
  changeMode: (value: string) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = (props) => {
  const { defaultValue, changeMode } = props;
  return (
    <div>
      {'Column Resizing Mode:'}
      &nbsp;
      <select
        defaultValue={defaultValue}
        onChange={(e) => changeMode(e.target.value)}
        className="dropdown"
        style={{
          height: '2em',
        }}
      >
        <option value="widget">Widget</option>
        <option value="nextColumn">NextColumn</option>
      </select>
    </div>
  );
};

export default ModeSelector;
