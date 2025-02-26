interface Props {
    title: string;
    description?: string;
    gap: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    justify: "start" | "center" | "end" | "between";
    direction: "column" | "row";
    size: "normal" | "lg";
    weight: "regular" | "medium" | "semibold" | "bold"
    classes?: string;
};

const justifyRowClasses: Record<Props["justify"], string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
};

const justifyColumnClasses: Record<Props["justify"], string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    between: "items-stretch",
};

const directionClasses: Record<Props["direction"], string> = {
    column: "flex-col",
    row: "flex-row",
};

const sizeClasses = (size: Props["size"], weight: Props["weight"]) => {
    return size === "normal"
        ? `text-display-sm-${weight} md:text-display-md-${weight} lg:text-display-lg-${weight}`
        : `text-display-md-${weight} md:text-display-lg-${weight} lg:text-display-xl-${weight}`;
};

const gapClasses: Record<Props["gap"], string> = {
    none: "gap-0",
    xs: "gap-2",
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-5",
    xl: "gap-6",
    "2xl": "gap-8",
};

export default function TitleDescription(props: Partial<Props> & { title: string }) {
    const {
        title,
        description = "",
        gap = "sm",
        justify = "start",
        direction = "column",
        classes = "",
        size = "normal",
        weight = "semibold"
    } = props;

    const justifyClasses = direction === 'column' ? justifyColumnClasses[justify] : justifyRowClasses[justify]
    return (
        <div className={`flex ${directionClasses[direction]} ${justifyClasses} ${gapClasses[gap]} ${classes}`}>
            <h5 className={`${sizeClasses(size, weight)} text-neutral-950`}>
                {title}
            </h5>
            <p className="text-body-sm-medium md:text-body-md-medium lg:text-body-lg-medium text-neutral-700">
                {description}
            </p>
        </div>
    )
}
