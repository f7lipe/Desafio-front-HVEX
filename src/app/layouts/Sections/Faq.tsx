import {
    Section,
    Group,
} from "@/app/styles/components"
import Accordion from "../Accordion"
import { theme } from "@/app/styles/global/GlobalStyle"
import faqData from "@/app/data/faq.json"

function Faq() {
    const { questions } = faqData

    return (
        <Section
            backgroundColor="#F4F4F4"
            minHeight="600px">
            <Group
                direction="column"
                align="center">
                <h2 style={{color: theme.colors.quaternary}}>Perguntas Frequentes</h2>
                {
                    questions.map((question, index) => (
                        <Accordion
                            key={index}
                            title={question.title}
                            content={question.answer}
                        />
                    ))
                }
            </Group>
            </Section>
    )
}

export default Faq