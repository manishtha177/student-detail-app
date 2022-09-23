import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "next-i18next";

import { STUDENT_DETAILS } from "../../constants";
import { StudentDetailForm } from "../common/StudentDetailForm";

import styles from "./editStudent.module.css";

const EditStudentDetails = ({
  studentId,
}: {
  studentId: string | string[] | undefined;
}) => {
  const { t } = useTranslation("common");
  const editedIndex = STUDENT_DETAILS.findIndex(
    (student) => student.studentId === studentId
  );
  const [editStudentDetails, setEditStudentDetails] = useState({
    studentName: STUDENT_DETAILS[editedIndex].studentName,
    score: STUDENT_DETAILS[editedIndex].score,
    selectedClass: STUDENT_DETAILS[editedIndex].class,
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

    STUDENT_DETAILS[editedIndex].studentName = editStudentDetails.studentName;
    STUDENT_DETAILS[editedIndex].score = Number(editStudentDetails.score);
    STUDENT_DETAILS[editedIndex].class = editStudentDetails.selectedClass;
    STUDENT_DETAILS[editedIndex].studentId = uuidv4();

    alert("Student Detail edited");
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
