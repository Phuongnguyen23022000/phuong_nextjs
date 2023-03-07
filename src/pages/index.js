import styles from '@/styles/Home.module.css';
import Head from '@/components/Head';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
      <Head />
      <main >
        <div className={styles.container}></div>
      </main>
      <Footer />
    </>
  )
}
