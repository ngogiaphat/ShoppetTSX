import solidLogo from "../assets/solid-logo.png";
function Header() {
    return (
        <header id = "main-header">
            <img src={solidLogo} alt="SolidJS Logo" />
            <h1>SolidJS Basics</h1>
        </header>
    );
}
export default Header;