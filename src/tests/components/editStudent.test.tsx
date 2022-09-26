import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { STUDENT_DETAILS } from "../../constants";
import EditStudentDetails from "../../components/EditStudentDetails";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Edit Student", () => {
  it("render Edit Student", () => {
    render(<EditStudentDetails studentId={STUDENT_DETAILS[0].studentId} />);
  });
});
