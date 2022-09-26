import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import AddStudentDetails from "../../components/AddStudentDetails";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Add Student Detais", () => {
  it("render Add Student", () => {
    render(<AddStudentDetails />);
  });
});
