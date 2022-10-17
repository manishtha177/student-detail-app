import { v4 as uuidv4 } from 'uuid';
import { STUDENT_CLASS } from '../modals';

export const PATHS = {
  ADD_STUDENT: 'add-student',
  EDIT_STUDENT: 'edit-student',
  HOME: '/',
};

export const STUDENTS_DUMMY_DATA = [
  {
    id: uuidv4(),
    name: 'Alan',
    score: 70,
    class: STUDENT_CLASS.A,
  },
  {
    id: uuidv4(),
    name: 'Ben',
    score: 90,
    class: STUDENT_CLASS.B,
  },
  {
    id: uuidv4(),
    name: 'Cath',
    score: 80,
    class: STUDENT_CLASS.C,
  },
];

export const FILTER_DEFAULT_VALUES = {
  from: 0,
  to: 100,
  selectedClasses: [STUDENT_CLASS.A, STUDENT_CLASS.B, STUDENT_CLASS.C],
};

export const CLASSES = [STUDENT_CLASS.A, STUDENT_CLASS.B, STUDENT_CLASS.C];

export const LOCALIZATION_FILE_NAME = 'common';
