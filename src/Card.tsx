import { CardContainer } from "./styles"

interface CardProps {
    text: string
    index?: number
    id?: string
    columnId?: string
    isPreview?: boolean
}
  
export const Card = ({ text }: CardProps) => {
    return <CardContainer>
        {text}
    </CardContainer>
}