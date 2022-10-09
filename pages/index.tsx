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
