// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type EngineeringBlogCategory = {
    title: string;
    icon: string;
}

type EngineeringBlogPost = {
    title: string;
    category: EngineeringBlogCategory;
    date: string;
    image: string;
    externallink: string;
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
            title: "eb-0test-title",
            category: _categoryIosDevelopment,
            date: '17/01/2024',
            image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*cZpzFkhsMFQoW2f4",
            externallink: 'https://juancurti.medium.com/how-to-build-a-chrome-extension-to-analyze-text-as-you-write-a1c0ab1923f9'
        },

        {
            title: "eb-1test-title",
            category: _categoryUiDevelopment,
            date: '10/01/2024',
            image: "/assets/blog/eb-1test.png",
            externallink: 'https://medium.com'
        },

        {
            title: "eb-2test-title",
            category: _categoryBusinessDevelopment,
            date: '02/01/2024',
            image: "/assets/blog/eb-2test.png",
            externallink: 'https://medium.com'
        },
      ]
  })
}
