interface LogoProps {
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
}

export default function Logo({ size, strokeColor, strokeWidth, className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      style={{ width: size, height: size }}
    >
      <polygon
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="none"
        points="7 19 7 12 9 4 11 12 11 14 13 14 13 12 15 4 17 12 17 19"
      />
    </svg>
  )
}

Logo.defaultProps = {
  strokeColor: 'currentColor',
  strokeWidth: 1
}
