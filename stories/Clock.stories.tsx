import React from "react";
import Clock from "../src/Clock";
// export default { title: "Basic Map" };
import { storiesOf } from "@storybook/react";

storiesOf("Basic Map", module).add("Simple Map", () => (
  <Clock size={400} value={new Date()} 
  renderNumbers={true}/>
));
