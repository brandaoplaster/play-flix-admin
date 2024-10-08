import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CategoryForm } from "../../../../features/categories/components/CategoryForm";

const Props = {
  category: {
    id: "123",
    name: "test",
    description: "test",
    is_active: true,
    created_at: "2021-03-01T00:00:00.000000Z",
    updated_at: "2021-03-01T00:00:00.000000Z",
    deleted_at: null,
  },
  isdisabled: false,
  isLoading: false,
  handleSubmit: () => {},
  handleChange: () => {},
  handleToggle: () => {},
};

describe("CategoryFrom", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<CategoryForm {...Props} />, {
      wrapper: BrowserRouter,
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render CategoryFrom with loading", () => {
    const { asFragment } = render(
      <CategoryForm {...Props} isLoading={true} isdisabled={true} />,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
