import {
  useContext,
  createContext,
  useState,
  ReactElement,
  useMemo,
} from 'react';

import { FILTER_DEFAULT_VALUES, STUDENTS_DUMMY_DATA } from '../constants';
import { Filter, Student, STUDENT_CLASS } from '../modals';

interface StudentProviderProps {
  students: Student[];
  filters: Filter;
  updateFilter?: (key: string, value: string | STUDENT_CLASS[]) => void;
  deleteStudent?: (student: Student) => void;
  addStudent: (student: Student) => void;
  editStudent: (id: string, student: Student) => void;
}

const INITIAL_VALUES = {
  students: STUDENTS_DUMMY_DATA,
  filters: FILTER_DEFAULT_VALUES,
  addStudent: () => {},
  editStudent: () => {},
};

export const Students = createContext<StudentProviderProps>(INITIAL_VALUES);

export const StudentsProvider = ({ children }: { children: ReactElement }) => {

  const [students, setStudents] = useState([...STUDENTS_DUMMY_DATA]);
  const [filters, setFilters] = useState({ ...FILTER_DEFAULT_VALUES });

  const dataToShow = useMemo(() => {    
    return students.filter((student) =>
        student.score >= filters.from &&
        student.score <= filters.to &&
        filters.selectedClasses.includes(student.class)
    );
  }, [students, filters]);

  const updateFilter = (key: string, value: string | STUDENT_CLASS[]) => {
    if (key === 'to' || key === 'from') {
      setFilters({ ...filters, [key]: parseInt(value as string, 10) });
      return
    }
    setFilters({ ...filters, [key]: value });
  }

  const deleteStudent = (student: Student) => {
    const filteredStudents = students.filter(_student => _student.id !== student.id);

    setStudents(filteredStudents);
  };

  const addStudent = (student: Student) => {
    setStudents([ ...students, student ]);
  };

  const editStudent = (id: string, student: Student) => {
    const updatedStudents = students.map((_student) => {
      if(_student.id === id) {
        return student;
      }
      return _student;
    });

    setStudents(updatedStudents);
  };

  return (
    <Students.Provider
      value={{
        students: dataToShow,
        filters,
        updateFilter,
        deleteStudent,
        addStudent,
        editStudent,
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
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
