import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LOCALIZATION_FILE_NAME } from '../../../src/constants';
import EditStudentDetails from '../../../src/components/EditStudentDetails';

const EditStudent = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <EditStudentDetails studentId={id as string} />;
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

export default EditStudent;
