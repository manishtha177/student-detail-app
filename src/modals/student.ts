export interface StudentProps {
  studentName: string;
  score: number;
  class: string;
  studentId: string;
}

export interface FilterProps {
  from: number;
  to: number;
  classesSelected: string[];
}

export interface StudentDetailProps {
  studentName: string;
  score: number;
  class: string;
  studentId?: string;
}
