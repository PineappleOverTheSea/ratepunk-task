import styles from "../styles/referral.module.scss"

export const Referral = () =>{
    return(
        <form className={styles.referral}>
            <div className={styles.referral_title}>refer friends get rewards</div>
            <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
            <input type="email" placeholder="Enter your email address"/>
            <button>get referral link</button>
            <div className={styles.bottom_text}>Limits on max rewards apply.</div>
        </form>
    )
}