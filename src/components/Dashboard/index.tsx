import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import Filter from '../Filter';
import { Table } from '../common/Table';
import { Button } from '../common/Button';
import { useStudents } from '../../context';
import { LOCALIZATION_FILE_NAME, PATHS } from '../../constants';

import styles from './dashboard.module.css';

const Dashboard = () => {
  const router = useRouter();
  const { t } = useTranslation(LOCALIZATION_FILE_NAME);

  const { students, deleteStudent } = useStudents();

  const onButtonClick = () => {
    router.push(PATHS.ADD_STUDENT);
  };

  const onHanldeEdit = (studentId: string) => {
    router.push(`${PATHS.EDIT_STUDENT}/${studentId}`);
  };

  return (
    <div className={styles.studentDetailContainer}>
      <div className={styles.headerWrapper}>
        <h1>{t("STUDENT_DASHBOARD")}</h1>
        <Button label={t("CREATE_RECORD")} handleOnClick={onButtonClick} />
      </div>
      <Filter />
      <Table
        headings={[t("STUDENT_NAME"), t("SCORE"), t("CLASS")]}
        students={students}
        onHanldeDelete={deleteStudent}
        onHanldeEdit={onHanldeEdit}
      />
      {students.length < 1 && <h3>{t("NO_RECORDS_FOUND")}</h3>}
    </div>
  );
};

export default Dashboard;
