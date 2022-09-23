import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "next-i18next";
import { ChangeEvent, FormEvent, useState } from "react";
import { CLASSES, STUDENT_DETAILS } from "../../constants";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Radio } from "../common/Radio";

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
  };

  return (
    <div className={styles.editStudentContainer}>
      <form onSubmit={onFormSubmit}>
        <span>{t("STUDENT_NAME")}</span>
        <Input
          value={editStudentDetails.studentName}
          name="studentName"
          handleOnChange={onChange}
        />
        <span>{t("SCORE")}</span>
        <Input
          type="number"
          value={editStudentDetails.score}
          name="score"
          handleOnChange={onChange}
        />
        <span>{t("CLASS")}</span>
        {Object.values(CLASSES).map((studentClass, index) => (
          <div key={index}>
            <Radio
              label={studentClass}
              isChecked={editStudentDetails.selectedClass === studentClass}
              name="selectedClass"
              value={studentClass}
              handleRadioClick={onChange}
            />
          </div>
        ))}
        <Button type="submit" label={t("EDIT_RECORD")} />
      </form>
    </div>
  );
};

export default EditStudentDetails;
