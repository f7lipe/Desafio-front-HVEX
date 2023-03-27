import { 
    Circle, 
    Group, 
} from "@/app/styles/components"
import { theme } from "@/app/styles/global/GlobalStyle"

interface Props {
    src: string
    alt: string
    title: string
}

const DashboardItem = ({ src, alt, title }: Props) => {
    return (
        <Group
        align="center"
        justify="space-between"
        direction="column"
        height="160px"
        width="140px"
        padding="5px"
        >
        <Circle
            backgroundColor={theme.colors.quaternary}
            align="center"
            justify="center">
                <img
                    alt={alt}
                    src={src}/>
            </Circle>
            <small>
                {title}
            </small>
    </Group>
    )
}

export default DashboardItem