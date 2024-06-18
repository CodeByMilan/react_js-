import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Daniel de Visé",
      title: "'Spaving' discounts can derail your finances - USA TODAY",
      description:
        "'Spaving,' a mashup of spending and saving, is a discount scheme that can play havoc with your finances.",
      url: "https://www.usatoday.com/story/money/2024/06/16/spaving-meaning-discounts-can-derail-finances/74095929007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/25/USAT/71702582007-usatsi-21962611.jpg?crop=2999,1688,x0,y197&width=2999&height=1688&format=pjpg&auto=webp",
      publishedAt: "2024-06-17T08:41:25Z",
      content:
        "Any time you buy two of something and get a third item for half off, or add a few dollars to an online order to secure free shipping, you are spaving.\r\nSpaving is a mashup of spending and saving: spe… [+6164 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Helen Regan, Junko Ogura",
      title:
        "Japan reports record spike in potentially deadly bacterial infection - CNN",
      description:
        "Cases of a dangerous and highly fatal bacterial infection have reached record levels in Japan, official figures show, with experts so far unable to pinpoint the reason for the rise.",
      url: "https://www.cnn.com/2024/06/17/asia/japan-record-spike-stss-bacterial-infection-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1337945805.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-06-17T07:26:00Z",
      content:
        "Cases of a dangerous and highly fatal bacterial infection have reached record levels in Japan, official figures show, with experts so far unable to pinpoint the reason for the rise.\r\nAs of June 2, Ja… [+3156 chars]",
    },
    
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Ukraine summit: A path to peace? - BBC.com",
      description:
        "Ukraine aimed to seize the initiative through diplomacy - with some success, says the BBC's Sarah Rainsford.",
      url: "https://www.bbc.com/news/articles/c1wwy6g9qgjo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/8b21/live/c4cfe950-2c5f-11ef-a7c2-a5d0956ae6dc.jpg",
      publishedAt: "2024-06-17T05:52:27Z",
      content:
        "By Sarah Rainsford, Eastern Europe correspondent\r\nFor two days the whir of propellers broke the peace of a Swiss mountainside, all in the cause of peace in Ukraine.\r\nThe helicopters were carrying wor… [+4613 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Sumanti Sen",
      title:
        "Who was Michael William Nash? Michigan splash pad shooter may have planned more attacks before killing himself - Hindustan Times",
      description:
        "Before dying by suicide, Michael William Nash allegedly fired 28 rounds at the Brooklands Plaza Splash Pad, injuring nine people, including two children.",
      url: "https://www.hindustantimes.com/world-news/us-news/who-was-michael-william-nash-michigan-splash-pad-shooter-may-have-planned-more-attacks-before-killing-himself-101718602462986.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/06/17/1600x900/US-CRIME-SHOOTING-MICHIGAN-3_1718602735333_1718602747498.jpg",
      publishedAt: "2024-06-17T05:43:03Z",
      content:
        "The Oakland County Sheriff's Office identified the gunman who shot and wounded nine people at the Brooklands Plaza Splash Pad in Rochester Hills as Michael William Nash. The 42-year-old allegedly fir… [+1855 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Dennis Romero, Patrick Smith",
      title:
        "Epic heatwave to expand from Midwest to East Coast and could last a week or more - NBC News",
      description:
        "Almost 72 million people across the country were under warnings of extreme heat Monday morning, the National Weather Service said.",
      url: "https://www.nbcnews.com/news/weather/epic-heatwave-expand-midwest-east-coast-last-week-rcna157448",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240617-heat-wave-chicago-cc-0100a-aebe0a.jpg",
      publishedAt: "2024-06-17T05:21:00Z",
      content:
        "Almost 72 million people across the country were under warnings of extreme heat Monday morning, the National Weather Service said.\r\nWith Thursday's seasonal solstice taking place amid a weeklong heat… [+2832 chars]",
    },
    
    
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Disney and Pixar's Inside Out 2 makes record opening weekend - BBC.com",
      description:
        "It marks a big win for cinemas, which have seen lacklustre takings for some major new movies this year.",
      url: "https://www.bbc.com/news/articles/cd114gg38xpo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1ca8/live/6d54c370-2c42-11ef-8aae-7d5a09fbb416.jpg",
      publishedAt: "2024-06-17T03:43:39Z",
      content:
        "By João da Silva, Business reporter\r\nPixar's Inside Out 2 has broken box office records over the weekend as it brought in an estimated $295m (£232.6m) around the world.\r\nThat makes it the strongest g… [+1635 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Paolo Uggetti",
      title:
        "Bryson DeChambeau's triumph and Rory McIlroy's heartbreak determined by inches at the U.S. Open - ESPN",
      description:
        "The final-round duel that played out at Pinehurst No. 2 on Sunday cemented Bryson DeChambeau's evolution while perpetuating a 10-year narrative for Rory McIlroy.",
      url: "https://www.espn.com/golf/story/_/id/40365743/bryson-dechambeau-rory-mcilroy-2024-us-open-pinehurst-no-2",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0616%2Fr1346701_1296x729_16%2D9.jpg",
      publishedAt: "2024-06-17T03:05:00Z",
      content:
        "PINEHURST, N.C. -- The putt that Bryson DeChambeau had to win the 2024 U.S. Open was 3 feet, 11 inches long.\r\nIts importance was obvious, but the significance of its length went beyond the single mom… [+7219 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Erin Cox, Katie Shepherd, Katie Mettler",
      title:
        "Maryland governor to issue mass pardon of low-level marijuana convictions - The Washington Post - The Washington Post",
      description:
        "The blanket pardon by Gov. Wes Moore will forgive decades of low-level marijuana possession charges for about 100,000 people.",
      url: "https://www.washingtonpost.com/dc-md-va/2024/06/16/maryland-mass-pardon-marijuana-conviction/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5JI4HK6DWAHHLY5UTL6KQ5UMH4_size-normalized.jpg&w=1440",
      publishedAt: "2024-06-17T02:45:00Z",
      content:
        "Maryland Gov. Wes Moore will issue a mass pardon of more than 175,000 marijuana convictions Monday morning, one of the nations most sweeping acts of clemency involving a drug now in widespread recrea… [+10214 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Associated Press",
      title:
        "American tourist found dead on small Greek island. Three other tourists are missing - CNN",
      description:
        "A missing American tourist has been found dead on a beach on a small Greek island west of Corfu, local media reported.",
      url: "https://www.cnn.com/2024/06/16/europe/american-tourist-dead-greece-island-intl-latam/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/screen-shot-2024-06-16-at-6-25-41-pm.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-06-17T02:20:00Z",
      content:
        "A missing American tourist has been found dead on a beach on a small Greek island west of Corfu, local media reported.\r\nThe body of the man was found Sunday on a rocky, fairly remote beach on the isl… [+1848 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "",
      title:
        "A fast-moving wildfire spreads north of Los Angeles, forcing evacuations - NPR",
      description:
        "The fire, which scorched over 12,000 acres in less than a day, has forced the evacuation of about 1,200 people, California fire officials said. The blaze was 2% contained as of Sunday evening.",
      url: "https://www.npr.org/2024/06/16/nx-s1-5008077/post-fire-los-angeles-ventura",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4500x2531+0+234/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F07%2F88%2F61ec61e3405c99bbd83e8f8e82be%2Fap24168294997783.jpg",
      publishedAt: "2024-06-17T02:05:12Z",
      content:
        "A wildfire northwest of Los Angeles has burned more than 14,600 acres and forced the evacuation of about 1,200 people, California fire officials said.\r\nThe fast-growing blaze, which began around 2 p.… [+1303 chars]",
    },
    {
      source: {
        id: null,
        name: "Post Magazine",
      },
      author: null,
      title:
        "China's property fall overshadows spending rebound in May, challenging Beijing's economic targets - South China Morning Post",
      description:
        "The worrisome property-investment decline reached double-digits in May, but consumers in China opened their wallets a bit more, year on year.",
      url: "https://www.scmp.com/economy/economic-indicators/article/3266847/chinas-property-fall-outshines-spending-rebound-may-challenging-beijing-economic-targets",
      urlToImage:
        "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2024/06/17/20bd9913-638b-4bb3-a25a-98739b730fce_7ab02b47.jpg?itok=X9TGNjtt&v=1718589605",
      publishedAt: "2024-06-17T02:00:09Z",
      content:
        "Property investment fell by 10.1 per cent, year on year, in the first five months of 2024, worsening from a 9.8 per cent drop from January through April and a 9.5 per cent drop in the first quarter.\r… [+4569 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Jennifer Maas",
      title:
        "Why ‘House of the Dragon’ Season 2 Premiere Killed Off [SPOILER] in ‘Blood and Cheese’ Scene and How It’s Different From the Book - Variety",
      description:
        'Season 2 of HBO\'s "House of the Dragon" begins with another tragic death.',
      url: "https://variety.com/2024/tv/news/house-of-the-dragon-season-2-premiere-blood-and-cheese-death-jaehaerys-1236035549/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2024/06/House-of-the-Dragon-Season-2.jpg?w=1000&h=563&crop=1",
      publishedAt: "2024-06-17T02:00:00Z",
      content:
        "SPOILER ALERT: This story contains major spoilers from the Season 2 premiere of HBO’s “House of the Dragon.”\r\nAfter closing Season 1 with the swift and shocking death of a child — Rhaenyra Targaryen’… [+8423 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "ANITA SNOW",
      title:
        "Severe, chaotic weather around US with high temperatures in Southwest and Midwest, snow in Rockies - The Associated Press",
      description:
        "Extreme weather that ranged from triple digit temperatures in the Southwest to unseasonable cold in the Pacific Northwest was forecast over the U.S. into the early week. Mushy late season snow was headed to the Rocky Mountains and severe thunderstorms were de…",
      url: "https://apnews.com/article/severe-weather-heat-thunderstorms-cold-snow-8b531511f17a8409914473e230d24301",
      urlToImage:
        "https://dims.apnews.com/dims4/default/bd5f393/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F16%2F58%2F2425caf4012cc19573fe4f4efbde%2Fb1d748d85a9743298c1f868b70ab7665",
      publishedAt: "2024-06-17T01:37:00Z",
      content:
        "PHOENIX (AP) Extreme heat spread across Arizona, New Mexico and parts of Texas, Colorado and Kansas as severe weather swept across many parts of the U.S. on Sunday. There was unseasonable cold in the… [+4152 chars]",
    },
    
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Bryan Pietsch",
      title:
        "Chinese nuclear arsenal undergoing ‘significant’ growth, report says - The Washington Post",
      description:
        "China is also modernizing its nuclear arsenal and could have as many intercontinental ballistic missiles as the United States by 2030, a new report says.",
      url: "https://www.washingtonpost.com/world/2024/06/16/china-nuclear-arsenal-weapons/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2BEB75IRC2JRUBUIGBOD3WR4ZA_size-normalized.JPG&w=1440",
      publishedAt: "2024-06-17T01:05:00Z",
      content:
        "China is in the midst of a significant expansion of its nuclear capabilities and may have as many intercontinental ballistic missiles as the United States or Russia by 2030, according to a new global… [+5546 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container">
        <h1>NewsMonkey -Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title.slice(0, 15)}
                description={element.description.slice(0, 60)}
                imgUrl={element.urlToImage}
                newsurl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
