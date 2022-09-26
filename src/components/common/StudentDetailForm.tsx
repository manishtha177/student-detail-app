import { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { Radio } from "./Radio";
import { Input } from "./Input";
import { Button } from "./Button";
import { StudentDetailProps } from "../../modals/student";
import { CLASSES, LOCALIZATION_FILE_NAME } from "../../constants";

import styles from "./common.module.css";

interface StudentDetailFormProps {
  studentFormDetail: StudentDetailProps;
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
  const { t } = useTranslation(LOCALIZATION_FILE_NAME);

  const onBackButtonClick = () => {
    router.push("/");
  };

  return (
    <>
      <div className={styles.backButtonWrapper}>
        <Button label={t("BACK")} handleOnClick={onBackButtonClick} />
      </div>
      <form onSubmit={onFormSubmit} className={styles.formWrapper}>
        <h4 className={styles.formLabel}>{t("STUDENT_NAME")}</h4>
        <Input
          value={studentFormDetail.studentName}
          name="studentName"
          handleOnChange={onChange}
          className={styles.formInput}
        />
        <h4 className={styles.formLabel}>{t("SCORE")}</h4>
        <Input
          type="number"
          value={studentFormDetail.score}
          name="score"
          handleOnChange={onChange}
          className={styles.formInput}
        />
        <h4 className={styles.formLabel}>{t("CLASS")}</h4>
        <div className={styles.formCheckBoxWrapper}>
          {Object.values(CLASSES).map((studentClass, index) => (
            <Radio
              key={index}
              label={studentClass}
              isChecked={studentFormDetail.class === studentClass}
              name="class"
              value={studentClass}
              handleRadioClick={onChange}
            />
          ))}
        </div>
        <Button
          customClassName={styles.formButton}
          type="submit"
          label={buttonLabel}
        />
      </form>
    </>
  );
};
