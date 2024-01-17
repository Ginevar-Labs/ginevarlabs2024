// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type EngineeringBlogCategory = {
    title: string;
    icon: string;
}

type EngineeringBlogPost = {
    url: string;
    title: string;
    category: EngineeringBlogCategory;
    date: string;
    image: string;
    content: string;
}

type Data = {
    categories: EngineeringBlogCategory[]
    posts: EngineeringBlogPost[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    let _categoryAndroidDevelopment: EngineeringBlogCategory = {
        title: 'eb-android-development',
        icon: '/assets/icons/icon-android.png'
    }

    let _categoryBlockchainDevelopment: EngineeringBlogCategory = {
        title: 'eb-blockchain-development',
        icon: '/assets/icons/icon-blockchain.png'
    }

    let _categoryIosDevelopment: EngineeringBlogCategory = {
        title: 'eb-ios-development',
        icon: '/assets/icons/icon-ios.png'
    }

    let _categoryMobileDevelopment: EngineeringBlogCategory = {
        title: 'eb-mobile-development',
        icon: '/assets/icons/icon-mobile.png'
    }

    let _categoryShopifyDevelopment: EngineeringBlogCategory = {
        title: 'eb-shopify-development',
        icon: '/assets/icons/icon-shopify.png'
    }

    let _categoryUiDevelopment: EngineeringBlogCategory = {
        title: 'eb-ui-development',
        icon: '/assets/icons/icon-ui.png'
    }

    let _categoryBusinessDevelopment: EngineeringBlogCategory = {
        title: 'eb-business-development',
        icon: '/assets/icons/icon-business.png'
    }

  return res.status(200).json({
    categories: [
        _categoryAndroidDevelopment,
        _categoryBlockchainDevelopment,
        _categoryIosDevelopment,
        _categoryMobileDevelopment,
        _categoryShopifyDevelopment,
        _categoryUiDevelopment,
        _categoryBusinessDevelopment
    ],
    posts: [
        {
            url: "eb-0-test",
            title: "eb-0test-title",
            category: _categoryIosDevelopment,
            date: '17/01/2024',
            image: "/assets/blog/eb-0test.png",
            content: "eb-0test"
        },

        {
            url: "eb-1-test",
            title: "eb-1test-title",
            category: _categoryUiDevelopment,
            date: '10/01/2024',
            image: "/assets/blog/eb-1test.png",
            content: "eb-1test",
        },

        {
            url: "eb-2-test",
            title: "eb-2test-title",
            category: _categoryBusinessDevelopment,
            date: '02/01/2024',
            image: "/assets/blog/eb-2test.png",
            content: "eb-2test",
        },
      ]
  })
}
