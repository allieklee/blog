import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Naruto Uzumaki</p>
        <p>
        <Link href = "/about-me">
          <a>About Me</a>
        </Link>
        </p>
        <p>
        <Link href = "/contact-info">
          <a>Contact Info</a>
        </Link>
        </p>
      </section>
    </Layout>
  )
}