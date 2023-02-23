import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

type Variants = 'default' | 'icon' | 'action'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: Variants
}

const variantStyle: { [key in Variants]: string } = {
    default: '',
    icon: '',
    action: '',
  }

export default function Input({ name, className, variant = 'default', ...rest }: InputProps) {
    const defaultClasses = 'bg-white/[0.08] focus:outline-none focus:shadow-outline w-full h-input rounded-input text-shadow-grey5 text-sm font-medium px-3.5'
    const inputStyles = clsx(defaultClasses, variantStyle[variant], className)
    return (
        <input
            id={name}
            name={name}
            className={inputStyles}
            {...rest}
        />)
}