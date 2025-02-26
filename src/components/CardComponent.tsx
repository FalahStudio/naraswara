import { Card, CardBody, CardFooter, Image } from "@heroui/react";

interface Props {
    title?: string
    desc?: string
    image?: string
}

export default function CardComponent({ title = '', desc = '', image = '' }: Props) {
    return (
        <Card
            shadow="none"
            radius="none"
            className="gap-6"
        >
            <CardBody className="overflow-visible p-0">
                <Image
                    alt={title}
                    className="w-full object-cover h-[140px]"
                    radius="none"
                    shadow="none"
                    src={image}
                    width="100%"
                    height={448}
                />
            </CardBody>
            <CardFooter className="flex-col items-start text-start !p-0 gap-4">
                <h6 className="text-display-xs-medium">{title}</h6>
                <p className="text-body-lg-medium font-lora">{desc}</p>
            </CardFooter>
        </Card>
    )
}
