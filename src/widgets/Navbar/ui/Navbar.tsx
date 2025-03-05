import React from "react";
import styles from './Navbar.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?:string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={classNames(styles.links, {}, [])}>
                <AppLink to={'/'}>Главная</AppLink>
                <AppLink to={'about'}>О нас</AppLink>
            </div>
        </div>
    );
};



