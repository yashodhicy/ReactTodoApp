import styles from "../styles/Header.module.css";
const Header = () => {
    const headerStyle = {
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
     };
    return (
        <header style={headerStyle} className={styles.header}>
            <h1>todos</h1>
            <h2>items will persist in the browser local storage</h2>
        </header>
    )
   
}

export default Header;