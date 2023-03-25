import { Nav } from "../../styles/components"
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"

function Navbar() {

    return (
        <Nav>
            <MobileMenu />
            <DesktopMenu />
        </Nav>
    )
}

export default Navbar