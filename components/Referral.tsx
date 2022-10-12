import { ChangeEvent, FormEvent, useRef, useState } from "react"
import Image from "next/image"
import styles from "../styles/referral.module.scss"

export const Referral = () =>{

    const [email, setEmail] = useState<string>("")

    const ref = useRef<HTMLDivElement>(null)
    const emailInputRef = useRef<HTMLInputElement>(null)
    const referralInputRef = useRef<HTMLInputElement>(null)
    const emailContainerRef = useRef<HTMLDivElement>(null)
    const reflinkContainerRef = useRef<HTMLDivElement>(null)


    const onEmailChange = (e : ChangeEvent<HTMLInputElement>) =>{
        const emailWarning = ref.current
        const value = e.target.value
        setEmail(value)
        emailWarning?.classList.remove(styles.warning_visible)
    }

    const onFormSubmit = (e : FormEvent) =>{
        e.preventDefault()
        const emailContainer = emailContainerRef.current
        const reflinkContainer = reflinkContainerRef.current
        
        if(validate()){
            emailContainer?.classList.add(styles.hide_container)
            reflinkContainer?.classList.remove(styles.hide_container)
        }
    }

    const validate = () : boolean =>{
        const input = emailInputRef.current
        const emailWarning = ref.current
        if(!input?.checkValidity() || input.value === ""){
            emailWarning?.classList.add(styles.warning_visible)
            return false
        }
        return true
    }

    const onCopy = () =>{
        const input = referralInputRef.current
        input?.select()
        input?.setSelectionRange(0, -0)
        navigator.clipboard.writeText(input?.value || "")
    }

    return(
        <form className={styles.referral} onSubmit={e => onFormSubmit(e)} noValidate>
            <div className={styles.referral_title}>refer friends get rewards</div>
            <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
            <div ref={emailContainerRef} className={styles.email_container}>
                <div ref={ref} className={styles.warning}>Please enter correct e-mail address</div>
                <input ref={emailInputRef} id="email" type="email" placeholder="Enter your email address" value={email} onChange={e => onEmailChange(e)}/>
                <button onClick={validate}>get referral link</button>
            </div>
            <div ref={reflinkContainerRef} className={`${styles.reflink_container} ${styles.hide_container}`}>
                <div className={styles.success_container}>
                    <Image src="/images/svg/success.svg" height="32px" width="32px" />
                    <b>Your email is confirmed!</b>
                </div>
                <input ref={referralInputRef} type="text" value="https://ratepunk.com/referral" disabled/>
                <button onClick={onCopy}>Copy</button>
            </div>
            <div className={styles.bottom_text}>Limits on max rewards apply.</div>
        </form>
    )
}