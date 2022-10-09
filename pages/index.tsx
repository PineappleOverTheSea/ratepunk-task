import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Download } from '../components/Download'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import styles from "../styles/landing.module.scss"

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ratepunk</title>
      </Head>

      <Header />
      <main>
        <div className={styles.wrapper}>
          <div className={styles.main_content}>
            <div className={styles.referral}>
              <b>refer friends get rewards</b>
              <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
              <input type="email" placeholder="Enter your email address"/>
              <button>get referral link</button>
              <div>Limits on max rewards apply.</div>
            </div>
            <div className={styles.referral_instructions}>

            </div>
          </div>
        </div>
      </main>
      <section>
        <Download image_path={"/images/svg/chrome.svg"} store_name={"chrome web store"} />
        <Download image_path={"/images/svg/apple.svg"} store_name={"apple app store"} />
        <div className={styles.reviews_chrome}>
          <div className={styles.stars}>
            <Image src="/images/star-white.png" height="20px" width="20px" />
            <Image src="/images/star-white.png" height="20px" width="20px" />
            <Image src="/images/star-white.png" height="20px" width="20px" />
            <Image src="/images/star-white.png" height="20px" width="20px" />
            <Image src="/images/star-white.png" height="20px" width="20px" />
          </div>
          <div>Chrome Store reviews</div>
        </div>
      </section>
      <Footer />
    </Layout>
      
  )
}

export default Home
