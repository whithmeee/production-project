import styles from './Button.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, ReactNode} from "react";

export enum ThemeButton {
    CLEAR = "clear"
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string;
    children: ReactNode;
    theme?: ThemeButton;
}

export const Button = ({className, children, theme, ...props}: ButtonProps) => {
    return (
        <button {...props} className={classNames(styles.Button, {[styles[theme]]: true}, [className])}>
            {children}
        </button>
    );
};