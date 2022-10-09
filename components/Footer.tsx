import styles from "../styles/footer.module.scss"
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.about}>
                <Image src="/images/svg/logo.svg" height="32px" width="125.05px"/>
                <p>
                    Ratepunk compares hotel room prices across the major online travel agencies.
                    When you search for a room, Ratepunk extension scans the top booking sites
                    and runs a price comparison, so you can be confident in knowing you’re
                    getting the best deal!
                </p>
                <div>
                    © 2021 Ratepunk. All Rights Reserved.
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.quick_links}>
                    <b>quick links</b>
                    <ul>
                        <li><Link href="">price comparison</Link></li>
                        <li><Link href="">chrome extension</Link></li>
                        <li><Link href="">how it works</Link></li>
                        <li><Link href="">ratepunk blog</Link></li>
                        <li><Link href="">privacy policy</Link></li>
                    </ul>
                </div>
                <div className={styles.contact_social}>
                    <div className={styles.contact}>
                        <b>contact</b>
                        <ul>
                            <li><Link href="">hi@ratepunk.com</Link></li>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <b>social</b>
                        <ul>
                            <li><Link href=""><Image src="/images/svg/instagram.svg" height="16px" width="16px"/></Link></li>
                            <li><Link href=""><Image src="/images/svg/facebook.svg" height="16px" width="16px"/></Link></li>
                            <li><Link href=""><Image src="/images/svg/linkedin.svg" height="16px" width="16px"/></Link></li>
                            <li><Link href=""><Image src="/images/svg/twitter.svg" height="16px" width="16px"/></Link></li>
                            <li><Link href=""><Image src="/images/svg/tiktok.svg" height="16px" width="16px"/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}