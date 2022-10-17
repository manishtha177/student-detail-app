import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Home from "../../../pages";
import { STUDENTS_DUMMY_DATA } from "../../constants";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Home Page", () => {
  it("render Home Page", () => {
    render(<Home />);
  });
});
