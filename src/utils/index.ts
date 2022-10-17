export const validateAddEditForm = (name: string, score: number) => {

  const validName = name.trim().length > 2 && name.trim().length < 50;
  const validScore =  score >= 0 && score <= 100;

  return validName && validScore;
};
