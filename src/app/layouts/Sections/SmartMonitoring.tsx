import { 
        DynamicDashboard, 
        HorizontalLine,
        Section, 
        Group, 
        List, 
        ListItem 
    } from "@/app/styles/components"
import { theme } from "@/app/styles/global/GlobalStyle"
import DashboardItem from "../DashboardItem"
import data from "@/app/data/smart_monitoring.json"

function SmartMonitoring() {
    const { title, secondary_title, description, image, dash_items } = data
    return (
        <Section>

            <Group
                direction="column"
                align="center"
                justify="center">
                <img
                    alt="Smart Monitoring Device"
                    src={image}
                    width="100%"
                    style={{ objectFit: "cover", maxWidth: "500px" }} />

            </Group>

            <Group
                style={{ minHeight: "700px" }}
                justify="space-around"
                padding="0 20px"
                direction="column">

                <h3 style={{color: theme.colors.quaternary}}>{title}</h3>

                <HorizontalLine 
                    color={theme.colors.primary}
                    thickness="5px"
                    width="100px" />

                <h3 style={{color: theme.colors.quaternary}}>{secondary_title}</h3>
                <text>{description}</text>

                <DynamicDashboard>
                    <List>
                        {
                            dash_items.map((item, index) => {
                                return (
                                    <ListItem
                                        key={index}>
                                        <DashboardItem
                                            src={item.icon}
                                            alt={item.title}
                                            title={item.title} />
                                    </ListItem>
                                )
                            }
                            )
                        }
                    </List>
                </DynamicDashboard>
            </Group>

        </Section>
    )
}

export default SmartMonitoring