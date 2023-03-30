import { Section, Group, Button, Circle } from "@/app/styles/components"
import bannerData from "@/app/data/banner.json"
import { theme } from "@/app/styles/global/GlobalStyle"

function Banner() {
    const { title, description, image, icon } = bannerData
    return (
        <Section
            minHeight="817px"
            backgroundColor={theme.colors.quaternary}
            splitBackground
            align="center"
            justify="space-between">
            <Group
                zIndex={1}
                padding="0 20px"
                direction="column"
                align="flex-start"
                justify="center"
            >
                <h1 style={{ color: "white" }}>{title}</h1>
                <p style={{ color: "white" }}>{description}</p>
                <Button
                    style={{ marginTop: "20px" }}
                    border={`1px solid ${theme.colors.primary}`}
                    color={theme.colors.primary}
                    radius="5px"
                    width="200px"
                    height="50px">
                    Quero saber mais
                </Button>
            </Group>
            <Group
                align="flex-end">
                <img src={image} alt="banner" />
                <Group
                    zIndex={3}
                    width="100px"
                    height="100px">
                    <a href="/">
                    <Circle
                        backgroundColor={theme.colors.primary}>
                        <img src={icon} width={100} height={100} alt="whatsapp" />
                    </Circle>
                    </a>
                </Group>
            </Group>
        </Section>
    )
}

export default Banner