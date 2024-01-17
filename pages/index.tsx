import ContactBox from '@/components/ContactBox';
import Header from '@/components/Header';
import TrustedByBox from '@/components/TrustedByBox';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col`}
      >
        <TrustedByBox/>
        <ContactBox/>
      </main>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};