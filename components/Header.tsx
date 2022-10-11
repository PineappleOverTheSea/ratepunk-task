import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "../styles/header.module.scss"
import wrapper from "../styles/wrapper.module.scss"

export const Header = () => {

    const menuRef = useRef(null)
    const openRef = useRef(null)
    const closeRef = useRef(null)

    const menuControl = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        if(menuRef.current !== null && openRef.current !== null && closeRef.current !== null){
            const menu = menuRef.current as HTMLUListElement
            const open = openRef.current as HTMLDivElement
            const close = closeRef.current as HTMLDivElement
            if(menu.classList.contains(styles.menu_hidden)){
                menu.classList.remove(styles.menu_hidden)
                open.classList.add(styles.nav_hidden)
                close.classList.remove(styles.nav_hidden)
            }
            else{
                menu.classList.add(styles.menu_hidden)
                open.classList.remove(styles.nav_hidden)
                close.classList.add(styles.nav_hidden)
            }
        }
    }

    return(
        <header className={styles.header}>
            <div className={wrapper.wrapper}>
                <div className={styles.content}>
                    <Image src="/images/svg/logo.svg" height="32px" width="125.05px"/>
                    <ul ref={menuRef} className={styles.menu_hidden}>
                        <li><Link href="">Chrome Extension</Link></li>
                        <li><Link href="">Price Comparison</Link></li>
                        <li><Link href="">Blog</Link></li>
                    </ul>
                    <div className={styles.nav_wrap}>
                        <div ref={openRef} className={styles.menu_wrapper} onClick={e => menuControl(e)}>
                            <Image src="/images/svg/menu.svg" height="16px" width="16px" />
                        </div>
                        <div ref={closeRef} className={`${styles.menu_wrapper} ${styles.nav_hidden}`} onClick={e => menuControl(e)}>
                            <Image src="/images/svg/close.svg" height="16px" width="16px" />
                        </div>
                    </div>
                    
                    

                </div>
            </div>
        </header>
    );
}