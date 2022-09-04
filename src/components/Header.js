import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, devName}) => {
  return (
    <header className='header' style={headerStyling}>
        <h1> {title} </h1>
        <br></br><br></br> ------------------ designed by {devName}
        <Button color='green' text="Add" onClick={onClick}></Button>
    </header>
  );
}

const onClick= (e)=>{
    console.log("clicked")
}


Header.defaultProps={
    title: 'Default'
}

Header.propTypes={
    title: PropTypes.string
}

const headerStyling = {
    color:"red",
    backgroundColor: 'black'
}

export default Header;
