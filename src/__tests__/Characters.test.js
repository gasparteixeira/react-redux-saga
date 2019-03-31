import React from "react";
import Characters from "../components/Characters";
import { shallow, mount } from "enzyme";

describe("Characters", () => {
  it("should create a stateless snapshot component simple", () => {
    const component = shallow(<Characters />);
    expect(component).toMatchSnapshot();
  });

  it("should render a statless component and contain 'Loading...' element", () => {
    const component = shallow(<Characters />);
    expect(component.text()).toBe("Loading...");
  });

  it("should create a stateless snapsht component with data only index", () => {
    const onlyIndex = [{ name: "" }];
    const component = shallow(<Characters data={onlyIndex} />);
    expect(component).toMatchSnapshot();
  });

  it("should a stateless component count data to be 3 element", () => {
    const data = [{ name: "Darth" }, { name: "Obi-Wan" }, { name: "Luke" }];
    const component = mount(<Characters data={data} />);
    expect(component.find("div.element").length).toBe(3);
    component.unmount();
  });

  it("should create a stateless snapsht component with data equal 'Darth Vader'", () => {
    const dartVader = [{ name: "Darth Vader" }];
    const component = shallow(<Characters data={dartVader} />);
    expect(component).toMatchSnapshot();
    expect(component.text().includes("Darth Vader")).toBe(true);
  });
});
