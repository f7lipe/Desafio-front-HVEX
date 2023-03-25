import {
    Button,
    Group,
    Logo,
    DesktopMenu as Menu,
    MenuItem,
    NavLink
} from "../../styles/components"
import { theme } from "@/app/styles/global/GlobalStyle"

function DesktopMenu() {

    return (
        <Menu>
            <Logo
                priority
                src="/logo.svg"
                alt="Logo"
                width="60"
                height="60" />
            <Group
                direction="row"
                width="60%"
                justify="space-between"
                align="center">
                <MenuItem>
                    <NavLink
                        href="/"
                        active={"true"}>
                        <h5>Omni trafo</h5>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink href="/about">
                        <h5>Sinalizador de faltas</h5>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink href="/about">
                        <h5>Acoplador DP</h5>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <Button
                        height="50px"
                        width="170px"
                        border={`1px solid`}
                        radius="5px"
                        color={theme.colors.primary}
                    >
                        <h5>Comprar agora</h5>
                    </Button>
                </MenuItem>
            </Group>
        </Menu>
    )
}

export default DesktopMenu