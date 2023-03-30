import {
    Section,
    Group,
    Button,
    HorizontalLine
} from "@/app/styles/components"
import { theme } from "@/app/styles/global/GlobalStyle"
import knowMoreData from "@/app/data/know_more.json"

function KnowMore() {
    const { title } = knowMoreData

    return (
        <Section
            minHeight="366px"
            backgroundColor={theme.colors.tertiary}
            align="center"
            justify="center">
                <Group
                    padding="20px"
                    align="center"
                    justify="space-around"
                    direction="column"
                    style={{minHeight:"300px"}}
                    >
                    <h2 style={{color:"white", width: "50%", textAlign:"center"}}>{title}</h2>
                    <HorizontalLine 
                        color={theme.colors.primary}
                        thickness="5px"
                        width="15%"/>

                    <Button
                        style={{marginTop:"20px"}}
                        border={`1px solid ${theme.colors.primary}`}
                        color={theme.colors.primary}
                        radius="5px"
                        width="200px"
                        height="50px">
                        Falar com um consultor
                        </Button>
                </Group>
        </Section>
    )
}

export default KnowMore