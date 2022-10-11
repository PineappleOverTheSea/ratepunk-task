import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Download } from '../components/Download'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { Referral } from '../components/Referral'
import styles from "../styles/landing.module.scss"
import stepStyles from "../styles/step.module.scss"
import wrapper from "../styles/wrapper.module.scss"

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ratepunk</title>
      </Head>

      <Header />
      <main>
        <div className={wrapper.wrapper}>
          <div className={styles.main_content}>
            <Referral />
            <div className={styles.referral_instructions}>
                <div className={stepStyles.step}>
                  <div className={stepStyles.image_container}>
                    <Image src="/images/svg/invite.svg" layout="fill"/>
                  </div>
                  <div className={stepStyles.step_content}>
                    <b>step 1</b>
                    <b>invite friends</b>
                    <p>Refer friends with your unique referral link.</p>
                  </div>
                </div>
                <div className={stepStyles.step}>
                  <div className={stepStyles.image_container}>
                    <Image src="/images/svg/collect-coins.svg" layout="fill"/>
                  </div>
                  <div className={stepStyles.step_content}>
                    <b>step 2</b>
                    <b>collect coins</b>
                    <p>Get 1 coin for each friend that installs our extension using your referral link.</p>
                  </div>
                </div>
                <div className={stepStyles.step}>
                  <div className={stepStyles.image_container}>
                    <Image src="/images/svg/voucher.svg" layout="fill" />
                  </div>
                  <div className={stepStyles.step_content}>
                    <b>step 3</b>
                    <b>get voucher</b>
                    <p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className={wrapper.wrapper}>
          <div className={styles.download_container}>
            <Download image_path={"/images/svg/chrome.svg"} store_name={"chrome web store"} />
            <Download image_path={"/images/svg/apple.svg"} store_name={"apple app store"} />
            <div className={styles.reviews_chrome}>
              <div className={styles.stars}>
                <div className={styles.star_wrapper}>
                  <Image src="/images/star-white.png" layout="fill"/>
                </div>
                <div className={styles.star_wrapper}>
                  <Image src="/images/star-white.png" layout="fill"/>
                </div>
                <div className={styles.star_wrapper}>
                  <Image src="/images/star-white.png" layout="fill"/>
                </div>
                <div className={styles.star_wrapper}>
                  <Image src="/images/star-white.png" layout="fill"/>
                </div>
                <div className={styles.star_wrapper}>
                  <Image src="/images/star-white.png" layout="fill"/>
                </div>
              </div>
              <div>Chrome Store reviews</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
      
  )
}

export default Home
