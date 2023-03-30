import {
    Section,
    Group,
    List,
    ListItem,
    HorizontalLine,
    CheckMark
} from "@/app/styles/components"
import { theme } from "@/app/styles/global/GlobalStyle"
import advantagesData from "@/app/data/advantages.json"

function Advantages() {
    const { description, checklist, image } = advantagesData
    const checkedImage = <img src="/section4_1.svg" width={15} height={15} alt="checked" />

    return (
        <Section
            minHeight="723px"
            backgroundColor="#F4F4F4">

            <Group
                style={{ minHeight: "400px" }}
                justify="space-around"
                padding="0 20px"
                direction="column">

                <h3 style={{color: theme.colors.quaternary}}>{description}</h3>

                <HorizontalLine 
                    color={theme.colors.primary}
                    thickness="5px"
                    width="150px" />

                <List>
                    {checklist.map((item, index) => (
                        <ListItem
                            key={index}>
                            <CheckMark
                                className={item.isChecked ? "checked" : ""}>
                                {item.isChecked ? checkedImage : ""}
                            </CheckMark>
                            {item.description}
                        </ListItem>
                    ))}
                </List>
            </Group>

            <Group
                direction="column"
                align="center"
                justify="flex-start">
                <img
                    alt="checked"
                    src={image}
                    width="100%"
                    style={{ objectFit: "cover", maxWidth: "644px" }} />

            </Group>

        </Section>
    )
}

export default Advantages