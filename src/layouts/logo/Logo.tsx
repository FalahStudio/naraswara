interface Props {
    size?: number,
    color?: string,
}

const Logo = ({ size = 35, color = '#121212' }: Props) => (
    <svg
        width={size}
        height={size - 7}
        viewBox="0 0 35 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_8017_225)">
            <path d="M0 9.33333L0 28H9.33333L9.33333 9.33333H0Z" fill={color} />
            <path d="M11.6641 0L11.6641 28H23.3307V0H11.6641Z" fill={color} />
            <path
                d="M25.6641 2.09808e-05V18.6667H34.9974V2.09808e-05H25.6641Z"
                fill={color}
            />
        </g>
        <defs>
            <clipPath id="clip0_8017_225">
                <rect width={size} height={size - 7} fill="white" />
            </clipPath>
        </defs>
    </svg>
);
export default Logo;
