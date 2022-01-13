import { UiHomePage } from '@next-i18next-vercel-issue/ui/home-page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConf from '../next-i18next.config.js';

export function Index() {
  return <UiHomePage />;
}

export async function getStaticProps({ locale }) {
  const sst = await serverSideTranslations(locale, ['common'], i18nextConf);

  console.log({
    locale,
    sst: JSON.stringify(sst),
  });

  return {
    props: {
      ...sst,
      // Will be passed to the page component as props
    },
  };
}

export default Index;
