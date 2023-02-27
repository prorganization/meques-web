import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes } from "react";

type Variants = 'button' | 'link';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: Variants;
    icon?: React.ReactNode;
    href: string;
}

const variantStyle: { [key in Variants]: string } = {
    button: 'focus:outline-none focus:shadow-outline h-button rounded-input text-black text-sm font-medium bg-white/10 text-white',
    link: '',
}

export default function ButtonLink({ variant = 'link', href, icon, children, className, ...rest }: ButtonLinkProps) {
    const withIconClasses = 'flex items-center justify-center gap-3';
    const buttonStyles = clsx(variantStyle[variant], icon && withIconClasses, className);
    return (
        <Link href={href} className={buttonStyles} {...rest}>
            <>
                {icon}
                {children}
            </>
        </Link>
    )
}