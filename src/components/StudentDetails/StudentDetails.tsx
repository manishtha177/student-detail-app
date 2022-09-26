import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { STUDENT_DETAILS } from "../../constants";
import { Table } from "../common/Table";
import { useState } from "react";
import Filter from "../Filter";

import styles from "./studentDetails.module.css";
import { Button } from "../common/Button";

const filterInitialValues = {
  from: 0,
  to: 100,
  classesSelected: ["A", "B", "C"],
};

const StudentDetails = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const tableHeading = [t("STUDENT_NAME"), t("SCORE"), t("CLASS")];

  const [studentDetails, setStudentDetails] = useState(STUDENT_DETAILS);
  const [filterValues, setFilterValues] = useState(filterInitialValues);
  const [filterStudentDetails, setFilterStudentDetails] =
    useState(studentDetails);

  const onButtonClick = () => {
    router.push("/add-student");
  };

  const handleFilter = () => {
    const filteredStudentDetails = studentDetails.filter(
      (element) =>
        element.score >= filterValues.from &&
        element.score <= filterValues.to &&
        filterValues.classesSelected.includes(element.class)
    );
    setFilterStudentDetails(filteredStudentDetails);
  };

  const onHanldeDelete = (student: {
    studentName: string;
    score: number;
    class: string;
    studentId: string;
  }) => {
    const { studentId } = student;
    const studentIndex = studentDetails.indexOf(student);
    const filteredStudents = studentDetails.filter(
      (student) => student.studentId !== studentId
    );

    STUDENT_DETAILS.splice(studentIndex, 1);
    setStudentDetails(filteredStudents);
    setFilterStudentDetails(filteredStudents);
  };

  const onHanldeEdit = (studentId: string) => {
    router.push(`edit-student/${studentId}`);
  };

  return (
    <div className={styles.studentDetailContainer}>
      <h1>Student Details</h1>
      <Filter
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        handleFilter={handleFilter}
      />
      <Button label={t("CREATE_RECORD")} handleOnClick={onButtonClick} />
      <Table
        headings={tableHeading}
        studentDetails={filterStudentDetails}
        onHanldeDelete={onHanldeDelete}
        onHanldeEdit={onHanldeEdit}
      />
    </div>
  );
};

export default StudentDetails;
