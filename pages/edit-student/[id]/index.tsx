import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import EditStudentDetails from "../../../src/components/EditStudentDetails";

import styles from "../../../styles/home.module.css";

const EditStudent = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <EditStudentDetails studentId={id} />;
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

export default EditStudent;
