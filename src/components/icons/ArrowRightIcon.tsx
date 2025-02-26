interface props {
    size?: number;
    color?: string;
}

const ArrowRightIcon = ({ size = 24, color = "#121212" }: props) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13.5 4.88464L21 12.3846M21 12.3846L13.5 19.8846M21 12.3846H3"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default ArrowRightIcon;
