const Header = (props) => {
  return (
    <header>
        <div>
            <h1>{props.title} </h1>
            <div> ------------------ designed by {props.devName}</div>
        </div>
    </header>
  );
}

Header.defaultProps={
    title: 'Default'
}

export default Header;
