import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import AddStudent from "../../../pages/add-student";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Add Student", () => {
  it("render Add Student", () => {
    render(<AddStudent />);
  });
});
