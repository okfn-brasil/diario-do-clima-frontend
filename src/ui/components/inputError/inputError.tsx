import { red } from '/src/ui/utils/colors';

interface PropsInputError {
  children?: JSX.Element | string | boolean;
  sx?: React.CSSProperties;
}

const InputError = ({ children, sx }: PropsInputError) => {
    return (
        <div style={{color: red, marginTop: '5px'}}>
          { children }
        </div>
    );
}

export default InputError;