export interface ResetWidthButtonProps {
  resetWidths: () => void;
}

const ResetWidthButton: React.FC<ResetWidthButtonProps> = (props) => {
  const { resetWidths } = props;
  return (
    <button
      type="button"
      onClick={resetWidths}
      className="btn btn-sm"
      style={{
        paddingLeft: '8px',
        paddingRight: '8px',
        height: '2em',
        width: 'auto',
        fontSize: '1em',
      }}
    >
      Reset widths to default
    </button>
  );
};

export default ResetWidthButton;
