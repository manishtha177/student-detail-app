export enum STUDENT_CLASS {
  A = 'A',
  B = 'B',
  C = 'C',
}

export interface Student {
  name: string;
  score: number;
  class: STUDENT_CLASS;
  id: string;
}

export interface Filter {
  from: number;
  to: number;
  selectedClasses: STUDENT_CLASS[];
}
