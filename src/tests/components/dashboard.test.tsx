import Dashboard from "../../components/Dashboard";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Dashboard", () => {
  it("render Dashboard", () => {
    render(<Dashboard />);
  });
});
