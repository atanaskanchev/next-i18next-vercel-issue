import { useTranslation } from 'next-i18next';

/* eslint-disable-next-line */
export interface UiHomePageProps {}

export function UiHomePage(props: UiHomePageProps) {
  const { t } = useTranslation('common');

  console.log({
    props: JSON.stringify(props),
  });

  return (
    <>
      <h1>Welcome to UiHomePage!</h1>
      <p>{t('app_name')}</p>
    </>
  );
}

export default UiHomePage;
