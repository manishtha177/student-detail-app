import { Student } from '../../modals';
import { Button } from './Button';

import styles from './common.module.css';

interface TableProps {
  headings: string[];
  students: Student[];
  onHanldeDelete?: (student: Student) => void;
  onHanldeEdit: (studentId: string) => void;
}

export const Table = ({
  headings,
  students,
  onHanldeDelete,
  onHanldeEdit,
}: TableProps) => (
  <table className={styles.tableWrapper}>
    <thead className={styles.tableHeader}>
      <tr>
        {headings.map((heading: string, index: number) => (
          <th className={styles.tableDataWrapper} key={index}>
            {heading}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {students.map((student: Student) => (
        <tr key={student.id}>
          <td className={styles.tableDataWrapper}>{student.name}</td>
          <td className={styles.tableDataWrapper}>{student.score}</td>
          <td className={styles.tableDataWrapper}>
            {student.class}
            <div>
              <Button
                label="Delete"
                customClassName={styles.tableButton}
                handleOnClick={() => onHanldeDelete && onHanldeDelete(student)}
              />
              &nbsp; &nbsp;
              <Button
                label="Edit"
                customClassName={styles.tableButton}
                handleOnClick={() => onHanldeEdit(student.id)}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
