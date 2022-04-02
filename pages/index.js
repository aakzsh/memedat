import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from '../components/footer';


export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>memedat</title>
        <meta name="description" content="the ultimate movie meme game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>MEMEDAT</h1>
       <h3>play the ultimate movie meme game</h3>

       
       <button onClick= {(e) => router.push('/game')}>start playing</button>
      
      </main>

<Footer/>
      
    </div>
  )
}
