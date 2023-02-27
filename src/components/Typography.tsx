import clsx from "clsx";
import React, { ReactNode } from "react";

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'title' | 'title-body' | 'body' | 'caption';
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p' | 'div' | 'caption';

interface TypographyProps {
    tag: Tag;
    variant?: Variants;
    className: string;
    children: ReactNode;
}

const variantStyle: { [key in Variants]: string } = {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    title: '',
    'title-body': '',
    body: '',
    caption: '',
}

export default function Typography({tag = 'span', variant = 'body', children, className, ...rest }: TypographyProps) {
    const defaultClasses = ''
    const Component = tag;
    return (
        <Component {...rest}>{children}</Component>
    )
}