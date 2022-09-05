import PropTypes from 'prop-types';

const Button = ({color, text, onClick, onAdd}) => {
   
  return (
    <button style={{backgroundColor:color}} className='btn' onClick={onAdd}>
        {text}
    </button>
  );
}

Button.defaultProps={
    color:'steelBlue'
}

Button.propTypes={
    onClick: PropTypes.func
}
export default Button;
