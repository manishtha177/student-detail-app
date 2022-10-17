import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { STUDENTS_DUMMY_DATA } from "../../constants";
import EditStudentDetails from "../../components/EditStudentDetails";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Edit Student", () => {
  it("render Edit Student", () => {
    render(<EditStudentDetails studentId={STUDENTS_DUMMY_DATA[0].id} />);
  });
});
