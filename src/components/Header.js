const Header = ({title, devName}) => {
  return (
    <header>
        <div>
            <h1>{title} </h1>
            <div> ------------------ designed by {devName}</div>
        </div>
    </header>
  );
}

Header.defaultProps={
    title: 'Default'
}

export default Header;
