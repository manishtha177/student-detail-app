import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AddStudentDetails from "../../src/components/AddStudentDetails";
import { LOCALIZATION_FILE_NAME } from "../../src/constants";

const AddStudent = () => (
  <div>
    <AddStudentDetails />;
  </div>
);

export async function getServerSideProps({ locale }: { locale: string }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, [LOCALIZATION_FILE_NAME])),
    },
  };
}

export default AddStudent;
