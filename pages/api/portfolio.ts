// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type PortfolioItems = {
    client: string;
    slogan: string;
    date: string;
    desc: string;
    img: string;
    link: string;
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
            date: '17/01/2024',
            link: '#'
        },
        {
            client: 'The Highlights App',
            slogan: 'portfolio_highlights_slogan',
            desc: 'portfolio_highlights_desc',
            img: '/assets/screens/HIGHLI.png',

            date: '17/01/2024',
            link: '#'
        },
        {
            client: 'J. Joshua',
            slogan: 'deliverly_highlights_slogan',
            desc: 'deliverly_highlights_desc',
            img: '/assets/screens/DELIVER.png',
            date: '17/01/2024',
            link: '#'
        }
    ]
  })
}
