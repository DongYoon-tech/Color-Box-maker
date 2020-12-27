import React from "react";
import { fireEvent, render } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("add a new box", function () {
    const { getByLabelText, queryByText, getAllByDisplayValue, getByText } = render(<BoxList />);

    expect(queryByText('x')).not.toBeInTheDocument();

    const boxColor = getByLabelText("Color");
    const boxHeight = getByLabelText("Height");
    const boxWidth = getByLabelText("Width");
    const Addbtn = queryByText("Add Box");

    fireEvent.change(boxColor, { target: { value: "red" } });
    fireEvent.change(boxHeight, { target: { value: "100" } });
    fireEvent.change(boxWidth, { target: { value: "100" } });
    fireEvent.click(Addbtn)

    const removeBtn = getByText('x');
    expect(removeBtn).toBeInTheDocument();
    expect(removeBtn.previousSibling).toHaveStyle(`
    width: 100px;
    height: 100px;
    background-color: red;
  `);
    expect(getAllByDisplayValue("")).toHaveLength(3);
});

it("remove a box", function () {
    const { getByLabelText, queryByText, getByText } = render(<BoxList />);

    const boxColor = getByLabelText("Color");
    const boxHeight = getByLabelText("Height");
    const boxWidth = getByLabelText("Width");
    const Addbtn = queryByText("Add Box");

    fireEvent.change(boxColor, { target: { value: "red" } });
    fireEvent.change(boxHeight, { target: { value: "100" } });
    fireEvent.change(boxWidth, { target: { value: "100" } });
    fireEvent.click(Addbtn)

    const removeBtn = getByText('x');

    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
});