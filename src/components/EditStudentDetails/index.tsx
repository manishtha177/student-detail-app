import { useMemo, FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { useStudents } from '../../context';
import { StudentDetailForm } from '../common/StudentDetailForm';
import { LOCALIZATION_FILE_NAME, PATHS } from '../../constants';

import styles from './editStudent.module.css';
import { Student } from '../../modals';

interface EditStudentDetailsProps {
  studentId: string;
}

const EditStudentDetails: FC<EditStudentDetailsProps> = ({ studentId } ) => {
  const router = useRouter();
  const { editStudent, students } = useStudents();
  const { t } = useTranslation(LOCALIZATION_FILE_NAME);

  const studentToEdit =  useMemo(() => {
    return students.find(student => student.id === studentId);
  }, [studentId]);

  const onFormSubmit = (student: Student) => {
    editStudent(studentId, student);
    router.push(PATHS.HOME);
  };

  return (
    <div className={styles.editStudentContainer}>
      <StudentDetailForm
        buttonLabel={t("EDIT_RECORD")}
        student={studentToEdit}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
};

export default EditStudentDetails;
