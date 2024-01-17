import Header from '@/components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        
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