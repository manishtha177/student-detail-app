import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Radio } from "../common/Radio";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { CLASSES, STUDENT_DETAILS } from "../../constants";

import styles from "./addStudent.module.css";

const StudentInitialValue = {
  studentName: "",
  score: 0,
  selectedClass: CLASSES.A.toString(),
};

const AddStudentDetails = () => {
  const router = useRouter();
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
    router.push("/");
  };

  return (
    <div className={styles.addStudentContainer}>
      <form onSubmit={onFormSubmit}>
        <span>{t("STUDENT_NAME")}</span>
        <Input
          name="studentName"
          value={newStudentDetails.studentName}
          handleOnChange={onChange}
        />
        <span>{t("SCORE")}</span>
        <Input
          type="number"
          name="score"
          value={newStudentDetails.score}
          handleOnChange={onChange}
        />
        <span>{t("CLASS")}</span>
        {Object.values(CLASSES).map((studentClass, index) => (
          <div key={index}>
            <Radio
              label={studentClass}
              isChecked={newStudentDetails.selectedClass === studentClass}
              name="selectedClass"
              value={studentClass}
              handleRadioClick={onChange}
            />
          </div>
        ))}
        <Button type="submit" label={t("CREATE_RECORD")} />
      </form>
    </div>
  );
};

export default AddStudentDetails;
