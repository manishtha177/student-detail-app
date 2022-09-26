interface ValidateAddEditFormProps {
  studentName: string;
  score: number;
}

export const validateAddEditForm = (student: ValidateAddEditFormProps) => {
  const { studentName, score } = student;
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let studentIsValidated = false;

  if (
    studentName.trim().length > 2 &&
    studentName.trim().length < 50 &&
    regName.test(studentName)
  ) {
    studentIsValidated = true;
  }

  if (score >= 0 && score <= 100) {
    studentIsValidated = true;
  }

  return studentIsValidated;
};
