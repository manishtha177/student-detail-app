import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AddStudentDetails from "../../src/components/AddStudentDetails";

import styles from "../../styles/home.module.css";

const AddStudent = () => (
  <div className={styles.container}>
    <AddStudentDetails />;
  </div>
);

export async function getServerSideProps({ locale }: { locale: string }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default AddStudent;
