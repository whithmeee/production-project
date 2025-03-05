import styles from './AppLink.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";




interface AppLinkProps extends LinkProps{
    className?:string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {children, to, className, ...otherProps} = props
    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};