import React from "react";
import { shallow, mount } from "./../../enzyme";

import List from "./../List";

describe("List tests", () => {
  // test case
  it("should renders list-items", () => {
    // the test data
    const items = ["one", "two", "three"];
    // read the component mounting after rendering
    const wrapper = mount(<List items={items} />);
    // Let's check what wrong in our instance
    console.log(wrapper.debug());
    expect(wrapper.find(".list-items")).toBeDefined();
    expect(wrapper.find(".item")).toHaveLength(items.length);
  });

  // it("renders a list item", () => {
  //     const items = ["Thor", "Loki"];
  //     //const wrapper = shallow(<List items={items} />);
  //     const wrapper = mount(<List items={items} />);
  //     // Let's check what wrong in our instance
  //     console.log(wrapper.debug());
  //     // Check if an element in the Component exists
  //     expect(
  //         wrapper.contains(
  //             <li key="Thor" className="item">
  //                 Thor
  //     </li>
  //         )
  //     ).toBeTruthy();
  // });

  // it("renders correct text in item", () => {
  //     const items = ["John", "James", "Luke"];
  //     //const wrapper = shallow(<List items={items} />);
  //     const wrapper = mount(<List items={items} />);
  //     // Let's check what wrong in our instance
  //     console.log(wrapper.debug());
  //     //Expect the child of the first item to be an array
  //     expect(wrapper.find(".item").get(0).props.children).toEqual("John");
  // });
});
