import Head from 'next/head'
import Image from 'next/image'
import { Inter, Metal } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Layout from '../../components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
      <Layout pageTitle='HomePage'>
        <Image src='/myimages.jpeg' width={200} height={200} alt='profile' />
        {/* <img src='/myimages.jpeg' style={{width:200, height:200}} alt='profile' /> */}
        <h1 className={styles['title-homepage']}>Zaenuddin</h1>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
        <Image src='/imagesya.jpeg' width={200} height={200} alt='profile' />
        <p>Lorep ipsum sit dolor amet</p>
        <p>Lorep ipsum sit dolor amet</p>
      </Layout>
      </>
  );
}
