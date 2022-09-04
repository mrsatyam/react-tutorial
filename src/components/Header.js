import PropTypes from 'prop-types';

const Header = ({title, devName}) => {
  return (
    <header>
        <div>
            <h1 style={headerStyling} > {title} </h1>
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

const headerStyling = {
    color:"red",
    backgroundColor: 'black'
}

export default Header;
