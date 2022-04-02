import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer(){
    return (
        <div>
            <footer className={styles.footer}>
        <a
          href="https://github.com/aakzsh/memedat"
          target="_blank"
          rel="noopener noreferrer"
        >
          made with 🖤 and 😩 | {' '}
          <span className={styles.logo}>
            <Image src="/github.svg" alt="GitHub Logo" width={20} height={20} />
          </span>
        </a>
      </footer>
        </div>
    )
}