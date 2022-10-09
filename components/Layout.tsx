import styles from "../styles/landing.module.scss"

export const Layout = ({children} : any) => {
    return(
        <div className={styles.container}>{children}</div>
    );
}