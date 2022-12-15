import Head from 'next/head';
import style from 'src/styles/modules/home.module.css';

export default function Home() {
  return (
    <div className={style.header}>
      <Head>
        <title>SaltPay Team</title>
        <meta name="description" content="All the best and happy coding" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <h3>All the best and happy coding</h3>
    </div>
  );
}
