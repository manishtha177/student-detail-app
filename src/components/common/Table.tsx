import { Button } from "./Button";

interface TableProps {
  headings: Array<string>;
  studentDetails: Array<{
    studentName: string;
    score: number;
    class: string;
    studentId: string;
  }>;
  onHanldeDelete: (studentId: string) => void;
  onHanldeEdit: (studentId: string) => void;
}

export const Table = ({
  headings,
  studentDetails,
  onHanldeDelete,
  onHanldeEdit,
}: TableProps) => (
  <table>
    <thead>
      <tr>
        {headings.map((heading: string, index: number) => (
          <th key={index}>{heading}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {studentDetails.map(
        (
          student: {
            studentName: string;
            score: number;
            class: string;
            studentId: string;
          },
          index: number
        ) => (
          <tr key={index}>
            <td>{student.studentName}</td>
            <td>{student.score}</td>
            <td>{student.class}</td>
            <td>
              <Button
                label="Delete"
                handleOnClick={() => onHanldeDelete(student.studentId)}
              />
            </td>
            <td>
              <Button
                label="Edit"
                handleOnClick={() => onHanldeEdit(student.studentId)}
              />
            </td>
          </tr>
        )
      )}
    </tbody>
  </table>
);
