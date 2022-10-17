import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Dashboard from '../src/components/Dashboard';
import { LOCALIZATION_FILE_NAME } from '../src/constants';

const Home: NextPage = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [LOCALIZATION_FILE_NAME])),
    },
  };
}

export default Home;
