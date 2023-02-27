import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

type Variants = 'default' | 'secondary' | 'outlined';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants;
    icon?: React.ReactNode;
}

const variantStyle: { [key in Variants]: string } = {
    default: '',
    secondary: 'bg-white/10 text-white',
    outlined: '',
}

export default function Button({ variant = 'default', icon, name, children, className, ...rest }: ButtonProps) {
    const defaultClasses = 'focus:outline-none focus:shadow-outline h-button rounded-input text-black text-sm font-medium';
    const withIconClasses = 'flex items-center justify-center gap-3';
    const buttonStyles = clsx(defaultClasses, variantStyle[variant], icon && withIconClasses,className);
    return (
        <button className={buttonStyles} {...rest}>
            <>
                {icon}
                {children}
            </>
        </button>
    )
}