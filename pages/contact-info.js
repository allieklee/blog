import Link from 'next/link'

export default function ContactInfo() {
  return (
    <>
      <h1>About me!</h1>
      <h2>
          Phone: 9209125206
      </h2>
      <h2>
          Email: NarutoUzumaki@gmail.com
      </h2>
      <h2>
          Address: 111 E. Leaf St, Konohagakure (Hidden Leaf Village)
      </h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}