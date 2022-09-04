import PropTypes from 'prop-types';

const Header = ({title, devName}) => {
  return (
    <header>
        <div>
            <h1 style={{color:"red", backgroundColor:"black"}}> {title} </h1>
            <div> ------------------ designed by {devName}</div>
        </div>
    </header>
  );
}

Header.defaultProps={
    title: 'Default'
}

Header.propTypes={
    title: PropTypes.string
}

export default Header;
