import { StudentProps } from "../../modals/student";
import { Button } from "./Button";

import styles from "./common.module.css";

interface TableProps {
  headings: Array<string>;
  studentDetails: Array<StudentProps>;
  onHanldeDelete?: (student: StudentProps) => void;
  onHanldeEdit: (studentId: string) => void;
}

export const Table = ({
  headings,
  studentDetails,
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
      {studentDetails.map((student: StudentProps, index: number) => (
        <tr key={index}>
          <td className={styles.tableDataWrapper}>{student.studentName}</td>
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
                handleOnClick={() => onHanldeEdit(student.studentId)}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
