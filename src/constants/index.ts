import { v4 as uuidv4 } from "uuid";

export enum CLASSES {
  A = "A",
  B = "B",
  C = "C",
}

export const PATHS = {
  addStudent: "add-student",
  editStudent: "edit-student",
  dashboard: "/",
};

export const STUDENT_DETAILS = [
  {
    studentId: uuidv4(),
    studentName: "Alan",
    score: 70,
    class: "A",
  },
  {
    studentId: uuidv4(),
    studentName: "Ben",
    score: 90,
    class: "B",
  },
  {
    studentId: uuidv4(),
    studentName: "Cath",
    score: 80,
    class: "C",
  },
];

export const ClassesFilter = [
  {
    className: "A",
    isChecked: true,
  },
  {
    className: "B",
    isChecked: true,
  },
  {
    className: "C",
    isChecked: true,
  },
];

export const FILTER_INITIAL_VALUES = {
  from: 0,
  to: 100,
  classesSelected: [String(CLASSES.A), String(CLASSES.B), String(CLASSES.C)],
};

export const LOCALIZATION_FILE_NAME = "common";
