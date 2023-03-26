import { Card, Section, Group } from "@/app/styles/components"
import { theme } from "@/app/styles/global/GlobalStyle"
import featsData from "@/app/data/features.json"

function Features() {
    const { title, secondary_title, description, cards } = featsData

    return (
        <Section
            backgroundColor={theme.colors.quaternary}
            align="center"
            justify="center">

            <Group
                style={{minHeight: "400px"}}
                justify="space-around"
                padding="0 20px"
                direction="column">

                <h3 style={{color:"white"}}>{title}</h3>
                <h3>{secondary_title}</h3>
                <text style={{color:"white"}}>{description}</text>
            </Group>

            <Group
                direction="row"
                align="center"
                justify="center"
                wrap="wrap">

                {cards.map((card, index) => (
                    <Card
                        key={index}>

                        <img
                            alt="Feature"
                            src={card.icon}/>

                        <h3>{card.title}</h3>
                    </Card>
                ))}

            </Group>
        </Section>
    )
}

export default Features