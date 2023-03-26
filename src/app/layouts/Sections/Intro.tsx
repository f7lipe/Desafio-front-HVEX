import { CheckMark, Section, Group, List, ListItem } from "@/app/styles/components"
import introData from "@/app/data/intro.json"

function Intro() {
    const { image, title, description, checklist } = introData
    const checkedImage = <img src="/checked.svg" width={15} height={15} alt="checked" />
    return (
        <Section>
            
            <Group 
                direction="column"
                align="center"
                justify="center">
            <img
                alt="Intro"
                src={image}
                width="100%"
                style={{objectFit: "cover", maxWidth: "553px"}}/>

            </Group>

            <Group
                style={{minHeight: "500px"}}
                justify="space-around"
                padding="0 20px"
                direction="column">

                <h3>{title}</h3>
                
                <text>{description}</text>

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
        </Section>
    )
}

export default Intro