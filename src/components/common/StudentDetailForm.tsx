import { ChangeEvent, useEffect, useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import { Radio } from './Radio';
import { Input } from './Input';
import { Button } from './Button';
import { Student, STUDENT_CLASS } from '../../modals';
import { CLASSES, LOCALIZATION_FILE_NAME, PATHS } from '../../constants';
import { validateAddEditForm } from '../../utils';

import styles from './common.module.css';

interface StudentDetailFormProps {
  student?: Student;
  buttonLabel: string;
  onFormSubmit: (student: Student) => void;
}

export const StudentDetailForm = ({
  student,
  buttonLabel,
  onFormSubmit,
}: StudentDetailFormProps) => {
  const router = useRouter();
  const { t } = useTranslation(LOCALIZATION_FILE_NAME);
  const [studentState, setStudent] = useState<Student>({ id: '', name: '', class: STUDENT_CLASS.A, score: 0 });

  useEffect(() => {
    if (student) {
      setStudent(student);
    }
  }, [student]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent({ ...studentState, [name]: value });
  }

  const onBackButtonClick = () => {
    router.push(PATHS.HOME);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateAddEditForm(studentState.name, studentState.score)) {
      onFormSubmit({ ...studentState, id: studentState.id || uuidv4() });
    } else {
      alert('Kindly enter valid details');
    }
  }

  return (
    <>
      <div className={styles.backButtonWrapper}>
        <Button label={t("BACK")} handleOnClick={onBackButtonClick} />
      </div>
      <form onSubmit={onSubmit} className={styles.formWrapper}>
        <h4 className={styles.formLabel}>{t("STUDENT_NAME")}</h4>
        <Input
          value={studentState.name}
          name="name"
          handleOnChange={onChange}
          className={styles.formInput}
        />
        <h4 className={styles.formLabel}>{t("SCORE")}</h4>
        <Input
          type="number"
          value={studentState.score}
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
              isChecked={studentState.class === studentClass}
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
