// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type PortfolioItems = {
    client: string;
    slogan: string;
    date: string;
    desc: string;
    img: string;
    link: string;
    category: string[];
}

type Data = {
    items: PortfolioItems[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    

  return res.status(200).json({
    items: [
        {
            client: 'Blind Harpy Studios',
            slogan: 'deliverly_cyclops_slogan',
            desc: 'deliverly_cyclops_desc',
            img: '/assets/screens/CYCLOPS.png',
            date: '29/01/2024',
            link: '#',
            category: ['Mobile', 'Web3']
        },
        {
            client: 'The Highlights App',
            slogan: 'portfolio_highlights_slogan',
            desc: 'portfolio_highlights_desc',
            img: '/assets/screens/HIGHLI.png',

            date: '28/01/2024',
            link: '#',
            category: ['Mobile']
        },
        {
            client: 'J. Joshua',
            slogan: 'deliverly_highlights_slogan',
            desc: 'deliverly_highlights_desc',
            img: '/assets/screens/DELIVER.png',
            date: '17/01/2024',
            link: '#',
            category: ['Mobile']
        },
        {
            client: 'ICAO4PILOTS',
            slogan: 'icao_slogan',
            desc: 'icao_desc',
            img: '/assets/screens/ICAO4.png',
            date: '18/01/2024',
            link: '#',
            category: ['Mobile']
        },
        {
            client: 'Chilton',
            slogan: 'chilton_slogan',
            desc: 'chilton_desc',
            img: '/assets/screens/chilton_b.png',
            date: '19/01/2024',
            link: 'https://www.chiltons.com/',
            category: ['Shopify']
        },
        {
            client: 'Korca',
            slogan: 'korca_slogan',
            desc: 'korca_desc',
            img: '/assets/screens/korca.png',
            date: '20/01/2024',
            link: 'https://www.birrakorca.com.al',
            category: ['Shopify']
        },
        {
            client: 'Sezon Decor',
            slogan: 'sezon_slogan',
            desc: 'sezon_desc',
            img: '/assets/screens/sezon.png',
            date: '14/01/2024',
            link: 'https://sezondecor.al',
            category: ['Shopify']
        },
        {
            client: 'ISOVOX',
            slogan: 'isovox_slogan',
            desc: 'isovox_desc',
            img: '/assets/screens/isovox.png',
            date: '15/01/2024',
            link: 'https://isovoxbooth.com/',
            category: ['Shopify']
        },
        {
            client: 'Alpacadabraz',
            slogan: 'alpaca_slogan',
            desc: 'alpaca_desc',
            img: '/assets/screens/alpaca.png',
            date: '20/01/2024',
            link: 'https://alpacadabraz.io/',
            category: ['Web3']
        },
        {
            client: 'Zwickies',
            slogan: 'zwickies_slogan',
            desc: 'zwickies_desc',
            img: '/assets/screens/zwickies.png',
            date: '20/01/2024',
            link: '#',
            category: ['Web3']
        }
    ]
  })
}
