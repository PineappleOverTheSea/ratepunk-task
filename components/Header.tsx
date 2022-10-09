import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.scss"
import wrapper from "../styles/wrapper.module.scss"

export const Header = () => {
    return(
        <header className={styles.header}>
            <div className={wrapper.wrapper}>
                <div className={styles.content}>
                    <Image src="/images/svg/logo.svg" height="32px" width="125.05px"/>
                    <ul>
                        <li><Link href="">Chrome Extension</Link></li>
                        <li><Link href="">Price Comparison</Link></li>
                        <li><Link href="">Blog</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}