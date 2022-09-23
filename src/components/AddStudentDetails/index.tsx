import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "next-i18next";

import { CLASSES, STUDENT_DETAILS } from "../../constants";
import { StudentDetailForm } from "../common/StudentDetailForm";

import styles from "./addStudent.module.css";

const StudentInitialValue = {
  studentName: "",
  score: 0,
  selectedClass: CLASSES.A.toString(),
};

const AddStudentDetails = () => {
  const { t } = useTranslation("common");

  const [newStudentDetails, setNewStudentDetails] =
    useState(StudentInitialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewStudentDetails({
      ...newStudentDetails,
      [name]: value,
    });
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    STUDENT_DETAILS.push({
      studentName: newStudentDetails.studentName,
      score: Number(newStudentDetails.score),
      class: newStudentDetails.selectedClass,
      studentId: uuidv4(),
    });
  };

  return (
    <div className={styles.addStudentContainer}>
      <StudentDetailForm
        buttonLabel={t("CREATE_RECORD")}
        studentFormDetail={newStudentDetails}
        onChange={onChange}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
};

export default AddStudentDetails;
