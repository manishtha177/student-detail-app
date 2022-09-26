import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { useStudents } from "../../context";
import { validateAddEditForm } from "../../utils";
import { StudentDetailForm } from "../common/StudentDetailForm";
import { CLASSES, LOCALIZATION_FILE_NAME, PATHS } from "../../constants";

import styles from "./addStudent.module.css";

const StudentInitialValue = {
  studentName: "",
  score: 0,
  class: CLASSES.A.toString(),
};

const AddStudentDetails = () => {
  const router = useRouter();
  const { addStudent } = useStudents();
  const { t } = useTranslation(LOCALIZATION_FILE_NAME);

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

    if (addStudent && validateAddEditForm(newStudentDetails)) {
      addStudent({
        studentName: newStudentDetails.studentName,
        score: Number(newStudentDetails.score),
        class: newStudentDetails.class,
        studentId: uuidv4(),
      });
    } else {
      alert("Kindly enter valid details");
    }

    router.push(PATHS.dashboard);
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
