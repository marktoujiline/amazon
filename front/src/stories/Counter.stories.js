import React from "react";
import { Counter } from "../react/Counter";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from "@storybook/react/demo";

// export default {
//   title: "Welcome",
//   component: Welcome
// };

// export const ToStorybook = () => <Welcome showApp={linkTo("Button")} />;

// ToStorybook.story = {
//   name: "to Storybook"
// };

export default {
  component: Counter,
  title: "Counter"
};

export const CounterStorybook = () => (
  <Counter count={0} inc={() => {}} dec={() => {}}></Counter>
);
