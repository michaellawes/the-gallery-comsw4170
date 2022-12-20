import './TextInput.css';

function TextInput(props) {
  return (
    <div>
        <textarea 
            placeholder={props.placeholder}
            className={props.className}>
        </textarea>
    </div>
  );
}

export default TextInput;