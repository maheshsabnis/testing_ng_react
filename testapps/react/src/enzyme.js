// importing the configuration for Enzyme OM
import Enzyme, { configure, shallow, mount, render } from "enzyme";
// importing the Adapter for React test integration
import Adapter from "enzyme-adapter-react-16";
// connect the Enzyme-Adapter with the current app.
configure({ adapter: new Adapter() });
// Object Model for
// 1. shallow rendering --> shallow
// 2. deep DOM rendering --> mount
export { shallow, mount, render };
// exporting Enzyme OM
export default Enzyme;
