import { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { Radio } from "./Radio";
import { Input } from "./Input";
import { Button } from "./Button";
import { CLASSES } from "../../constants";

import styles from "./common.module.css";

interface StudentDetailFormProps {
  studentFormDetail: {
    studentName: string;
    score: number;
    selectedClass: string;
  };
  buttonLabel: string;
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const StudentDetailForm = ({
  studentFormDetail,
  buttonLabel,
  onFormSubmit,
  onChange,
}: StudentDetailFormProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const onBackButtonClick = () => {
    router.push("/");
  };

  return (
    <>
      <div className={styles.backButtonWrapper}>
        <Button label={t("BACK")} handleOnClick={onBackButtonClick} />
      </div>
      <form onSubmit={onFormSubmit}>
        <span>{t("STUDENT_NAME")}</span>
        <Input
          value={studentFormDetail.studentName}
          name="studentName"
          handleOnChange={onChange}
        />
        <span>{t("SCORE")}</span>
        <Input
          type="number"
          value={studentFormDetail.score}
          name="score"
          handleOnChange={onChange}
        />
        <span>{t("CLASS")}</span>
        {Object.values(CLASSES).map((studentClass, index) => (
          <div key={index}>
            <Radio
              label={studentClass}
              isChecked={studentFormDetail.selectedClass === studentClass}
              name="selectedClass"
              value={studentClass}
              handleRadioClick={onChange}
            />
          </div>
        ))}
        <Button type="submit" label={buttonLabel} />
      </form>
    </>
  );
};
