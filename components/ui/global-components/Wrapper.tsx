import { HtmlHTMLAttributes } from "react";


export const Wrapper: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={`flex items-center justify-center w-full h-full ${className}`}{...props}>{children}</div>
    )
}