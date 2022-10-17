import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { useStudents } from '../../context';
import { StudentDetailForm } from '../common/StudentDetailForm';
import { LOCALIZATION_FILE_NAME, PATHS } from '../../constants';

import styles from './addStudent.module.css';
import { Student } from '../../modals';

const AddStudentDetails = () => {
  const router = useRouter();
  const { addStudent } = useStudents();
  const { t } = useTranslation(LOCALIZATION_FILE_NAME);

  const onFormSubmit = (student: Student) => {
    addStudent(student);
    router.push(PATHS.HOME);
  };

  return (
    <div className={styles.addStudentContainer}>
      <StudentDetailForm
        buttonLabel={t("CREATE_RECORD")}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
};

export default AddStudentDetails;
