import {
    Button,
    Group,
    Logo,
    MobileMenu as Menu,
    MenuItem,
    NavLink
} from "../../styles/components"
import { theme } from "@/app/styles/global/GlobalStyle"
import { useState } from "react"
import Image from "next/image"

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Menu isOpen={isOpen}>
            <Group
                direction="row"
                justify="space-between"
                align="flex-start">
                <Logo
                    priority
                    src="/logo.svg"
                    alt="Logo"
                    width="60"
                    height="60" />
                <Button
                    width="50px"
                    height="50px"
                    onClick={handleOpen}>
                    {
                        isOpen ?
                            <Image
                                src="/close.svg"
                                alt="Close"
                                width="30"
                                height="30" />
                            :
                            <Image
                                src="./menu.svg"
                                alt="Menu"
                                width="30"
                                height="30" />
                    }
                </Button>
            </Group>
            {
                isOpen &&
                <>
                    <MenuItem>
                        <NavLink
                            href="/"
                            active={"true"}>
                                <h5>Omni trafo</h5>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink 
                            href="/to-be-defined">
                                <h5>Sinalizador de faltas</h5>
                                </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink 
                        href="/to-be-defined">
                            <h5>Acoplador DP</h5>
                            </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <Button
                            height="50px"
                            border={`1px solid`}
                            radius="5px"
                            color={theme.colors.primary}> 
                            <h5>Comprar agora </h5>
                            </Button>
                    </MenuItem>
                </>
            }
        </Menu>
    )
}

export default MobileMenu