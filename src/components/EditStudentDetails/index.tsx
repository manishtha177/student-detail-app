import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { useStudents } from "../../context";
import { validateAddEditForm } from "../../utils";
import { StudentDetailForm } from "../common/StudentDetailForm";
import {
  LOCALIZATION_FILE_NAME,
  PATHS,
  STUDENT_DETAILS,
} from "../../constants";

import styles from "./editStudent.module.css";

const EditStudentDetails = ({
  studentId,
}: {
  studentId: string | string[] | undefined;
}) => {
  const router = useRouter();
  const { editStudentDetail, students } = useStudents();
  const { t } = useTranslation(LOCALIZATION_FILE_NAME);

  const editedIndex = students.findIndex(
    (student) => student.studentId === studentId
  );
  const [editStudentDetails, setEditStudentDetails] = useState({
    studentName: students[editedIndex].studentName,
    score: students[editedIndex].score,
    class: students[editedIndex].class,
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEditStudentDetails({
      ...editStudentDetails,
      [name]: value,
    });
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editStudentDetail && validateAddEditForm(editStudentDetails)) {
      editStudentDetail(studentId, {
        ...editStudentDetails,
        studentId: uuidv4(),
      });
    } else {
      alert("Kindly enter valid details");
    }

    router.push(PATHS.dashboard);
  };

  return (
    <div className={styles.editStudentContainer}>
      <StudentDetailForm
        buttonLabel={t("EDIT_RECORD")}
        studentFormDetail={editStudentDetails}
        onChange={onChange}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
};

export default EditStudentDetails;
