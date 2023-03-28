import { useState } from 'react'
import { 
    AccordionBody, 
    AccordionHeader, 
    AccordionContent, 
    HorizontalLine 
} from '@/app/styles/components'

interface Props{
    title: string;
    content: string;
}

function Accordion({title, content}: Props) {

    const [isExpanded, setIsExpanded] = useState(false);
    const openedImage = <img src="/opened.svg" width={12} height={12} alt="Close" />
    const closedImage = <img src="/colapse.svg" width={12} height={12} alt="Open" />

    function toggleAccordion() {
      setIsExpanded((prevState) => !prevState);
    }
    
    return (
        <AccordionBody isExpanded={isExpanded}>
            <AccordionHeader 
                onClick={toggleAccordion}>
                    <p>{title}</p>
                    <p>{isExpanded ? closedImage : openedImage}</p>
                    </AccordionHeader>
            {
                isExpanded && (
                    <>
                        <HorizontalLine />
                        <AccordionContent>{content}</AccordionContent>
                    </>
                    
                )
            }
        </AccordionBody>
    )
}

export default Accordion