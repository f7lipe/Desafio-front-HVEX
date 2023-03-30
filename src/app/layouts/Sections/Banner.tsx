import { Section, Group, Button } from "@/app/styles/components"
import bannerData from "@/app/data/banner.json"
import { theme } from "@/app/styles/global/GlobalStyle"

function Banner() {
    const { title, description, image } = bannerData
    return (
        <Section 
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
                <h1 style={{color: "white"}}>{title}</h1>
                <p style={{color: "white"}}>{description}</p>
                <Button
                        style={{marginTop:"20px"}}
                        border={`1px solid ${theme.colors.primary}`}
                        color={theme.colors.primary}
                        radius="5px"
                        width="200px"
                        height="50px">
                        Quero saber mais
                        </Button>
            </Group>
            <Group>
                <img src={image} alt="banner"/>
            </Group>
            <Group
                width="10%"
                height="100px"
                zIndex={2}>
                    <img src="/images/section-background.png" alt="background"/>
            </Group>
        </Section>
    )
}

export default Banner