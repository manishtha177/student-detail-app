import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import StudentDetails from "../src/components/StudentDetails/StudentDetails";

import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <StudentDetails />
    </div>
  );
};

export async function getServerSideProps({ locale }: { locale: string }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;
