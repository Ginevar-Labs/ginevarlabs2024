import ContactBox from '@/components/ContactBox';
import EngineeringBlogBox from '@/components/EngineeringBlogBox';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HomeMessageBox from '@/components/HomeMessageBox';
import TrustedByBox from '@/components/TrustedByBox';
import { InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

export default function Home({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col`}
      >
        <TrustedByBox/>
        <HomeMessageBox message={t('home_message_box_message_1', { ns: 'common'})}/>
        <EngineeringBlogBox categories={blog.categories} posts={blog.posts} />
        <ContactBox/>
      </main>
      <Footer/>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const { locale } = context;
  const _blogs = await fetch('http://localhost:3000/api/engineeringblog')
  const _blogData = await _blogs.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'eb'])),
      blog: _blogData
    },
  };
};