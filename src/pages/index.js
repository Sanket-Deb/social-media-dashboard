import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Card from "@/components/Card/Card";
import PageTitle from "@/components/PageTitle/PageTitle";
import Toggle from "@/components/Toggle/Toggle";
import MiddleTile from "@/components/MiIddleTile/MiddleTile";
import Card2 from "@/components/Card2/Card2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const cards = 
  [{
    id:"facebook",
    icon:'./images/icon-facebook.svg',
    username:"@nathanf",
    followers:"1987",
    deltafollowers:"12",
    countcolour:"hsl(163, 72%, 41%)",
    arrow:'./images/icon-up.svg',
    bordercolour:"hsl(208, 92%, 53%)",
    label: "FOLLOWERS"
  },
{
    id:"twitter",
    icon:'./images/icon-twitter.svg',
    username:"@nathanf",
    followers:"1044",
    deltafollowers:"99",
    countcolour:"hsl(163, 72%, 41%)",
    arrow:'./images/icon-up.svg',
    bordercolour:"hsl(203, 89%, 53%)",
    label: "FOLLOWERS"
},
{
    id:"instagram",
    icon:'./images/icon-instagram.svg',
    username:"@nathanf",
    followers:"11k",
    deltafollowers:"1099",
    countcolour:"hsl(163, 72%, 41%)",
    arrow:'./images/icon-up.svg',
    bordercolour: '#8A2BE2',
    label: "FOLLOWERS"
},
{
  id:"youtube",
  icon:'./images/icon-youtube.svg',
  username:"@nathanf",
  followers:"8239",
  deltafollowers:"144",
  countcolour:"hsl(356, 69%, 56%)",
  arrow:'./images/icon-down.svg',
  bordercolour:"hsl(348, 97%, 39%)",
  label: "SUBSCRIBERS"
}
]
const display = cards.map((item)=>{
  return <Card key={item.id} icon={item.icon} username= {item.username} followers={item.followers} deltafollowers={item.deltafollowers} countcolour={item.countcolour} arrow={item.arrow} bordercolour={item.bordercolour} label={item.label}/>
})

const cards2 = [
  {
    id:"1",
    info:"Page Views",
    handle:"./images/icon-facebook.svg",
    data: "87",
    arrow:'./images/icon-up.svg',
    deltacolor:"hsl(163, 72%, 41%)",
    deltapercent: "3"
  },
  {
    id:"2",
    info:"Likes",
    handle:"./images/icon-facebook.svg",
    data: "52",
    arrow:'./images/icon-down.svg',
    deltacolor:"hsl(356, 69%, 56%)",
    deltapercent: "2"
  },
  {
    id:"3",
    info:"Likes",
    handle:"./images/icon-instagram.svg",
    data: "5462",
    arrow:'./images/icon-up.svg',
    deltacolor:"hsl(163, 72%, 41%)",
    deltapercent: "2257"
  },
  {
    id:"4",
    info:"Profile Views",
    handle:"./images/icon-instagram.svg",
    data: "52k",
    arrow:'./images/icon-up.svg',
    deltacolor:"hsl(163, 72%, 41%)",
    deltapercent: "1375"
  },
  {
    id:"5",
    info:"Retweets",
    handle:"./images/icon-twitter.svg",
    deltacolor:"hsl(163, 72%, 41%)",
    data: "117",
    arrow:'./images/icon-up.svg',
    deltapercent: "303"
  },
  {
    id:"6",
    info:"Likes",
    handle:"./images/icon-youtube.svg",
    data: "507",
    arrow:'./images/icon-up.svg',
    deltacolor:"hsl(163, 72%, 41%)",
    deltapercent: "553"
  },
  {
    id:"7",
    info:"Likes",
    handle:"./images/icon-youtube.svg",
    data: "107",
    arrow:'./images/icon-down.svg',
    deltacolor:"hsl(356, 69%, 56%)",
    deltapercent: "19"
  },
  {
    id:"8",
    info:"Total Views",
    handle:"./images/icon-youtube.svg",
    data: "1407",
    arrow:'./images/icon-down.svg',
    deltacolor:"hsl(356, 69%, 56%)",
    deltapercent: "12"
  }
]
  const display2 = cards2.map((item)=>{
    return <Card2 key={item.id} info={item.info} handle={item.handle} data={item.data} arrow={item.arrow} deltacolor={item.deltacolor} deltapercent={item.deltapercent}/>
  })

  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
        <meta name="description" content="Social Media Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Social Media Dashboard" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./images/social.jpeg" />
        <meta property="og:url" content="https://sanket-deb.github.io/social-media-dashboard/ " />
        <link rel="icon" href="./images/favicon-32x32.png" />        
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header>
          <PageTitle/>
          <Toggle/>
        </header>
        <section className={styles.cardsWrapper}>{display}</section>
          <MiddleTile/>
        <section className={styles.cards2Wrapper}>{display2}</section>
      </main>
    </>
  );
}
