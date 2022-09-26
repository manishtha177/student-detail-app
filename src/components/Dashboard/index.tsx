import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Filter from "../Filter";
import { Table } from "../common/Table";
import { Button } from "../common/Button";
import { useStudents } from "../../context";
import { LOCALIZATION_FILE_NAME, PATHS } from "../../constants";

import styles from "./dashboard.module.css";

const Dashboard = () => {
  const router = useRouter();
  const { t } = useTranslation(LOCALIZATION_FILE_NAME);
  const tableHeading = [t("STUDENT_NAME"), t("SCORE"), t("CLASS")];

  const { students, filters, filterStudents, deleteStudent, setFilterValues } =
    useStudents();

  const onButtonClick = () => {
    router.push(PATHS.addStudent);
  };

  const onHanldeEdit = (studentId: string) => {
    router.push(`${PATHS.editStudent}/${studentId}`);
  };

  return (
    <div className={styles.studentDetailContainer}>
      <div className={styles.headerWrapper}>
        <h1>{t("STUDENT_DASHBOARD")}</h1>
        <Button label={t("CREATE_RECORD")} handleOnClick={onButtonClick} />
      </div>
      <Filter
        filterValues={filters}
        setFilterValues={setFilterValues}
        handleFilter={filterStudents}
      />

      <Table
        headings={tableHeading}
        studentDetails={students}
        onHanldeDelete={deleteStudent}
        onHanldeEdit={onHanldeEdit}
      />
      {students.length < 1 && <h3>{t("NO_RECORDS_FOUND")}</h3>}
    </div>
  );
};

export default Dashboard;
