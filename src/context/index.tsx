import {
  useContext,
  createContext,
  useState,
  ReactElement,
  Dispatch,
  SetStateAction,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { FILTER_INITIAL_VALUES, STUDENT_DETAILS } from "../constants";
import { FilterProps, StudentProps } from "../modals/student";

interface StudentProviderProps {
  students: Array<StudentProps>;
  filters: FilterProps;
  setFilterValues?: Dispatch<SetStateAction<FilterProps>>;
  filterStudents?: () => void;
  deleteStudent?: (student: StudentProps) => void;
  addStudent?: (student: StudentProps) => void;
  editStudentDetail?: (
    studentId: string | string[] | undefined,
    editedStudentDetails: StudentProps
  ) => void;
}

const initialValues = {
  students: STUDENT_DETAILS,
  filters: FILTER_INITIAL_VALUES,
};

export const Students = createContext<StudentProviderProps>(initialValues);

export const StudentsProvider = ({ children }: { children: ReactElement }) => {
  const [students, setStudents] = useState([...STUDENT_DETAILS]);
  const [filterValues, setFilterValues] = useState(FILTER_INITIAL_VALUES);
  const [filterStudentDetails, setFilterStudentDetails] = useState(students);

  const filterStudents = () => {
    const filteredStudentDetails = students.filter(
      (element) =>
        element.score >= filterValues.from &&
        element.score <= filterValues.to &&
        filterValues.classesSelected.includes(element.class)
    );

    if (filterValues.from >= 0 && filterValues.to <= 100) {
      setFilterStudentDetails(filteredStudentDetails);
    } else {
      alert("Kindly enter correct values for from and to");
    }
  };

  const deleteStudent = (student: StudentProps) => {
    const { studentId } = student;
    const filteredStudents = students.filter(
      (student) => student.studentId !== studentId
    );

    setStudents(filteredStudents);
    setFilterStudentDetails(filteredStudents);
  };

  const addStudent = (student: StudentProps) => {
    setStudents([...students, student]);
    setFilterStudentDetails([...filterStudentDetails, student]);
  };

  const editStudentDetail = (
    studentId: string | string[] | undefined,
    editedStudentDetails: StudentProps
  ) => {
    const editedIndex = students.findIndex(
      (student) => student.studentId === studentId
    );

    students[editedIndex].studentName = editedStudentDetails.studentName;
    students[editedIndex].score = Number(editedStudentDetails.score);
    students[editedIndex].class = editedStudentDetails.class;
    students[editedIndex].studentId = uuidv4();
  };

  return (
    <Students.Provider
      value={{
        ...initialValues,
        students: filterStudentDetails,
        filters: filterValues,
        setFilterValues,
        filterStudents,
        deleteStudent,
        addStudent,
        editStudentDetail,
      }}
    >
      {children}
    </Students.Provider>
  );
};

export default Students;

export function useStudents() {
  const context = useContext(Students);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
