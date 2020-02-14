import React from "react";
import { Counter } from "../react/Counter";

export default {
  component: Counter,
  title: "Counter"
};

export const CounterStorybook = () => (
  <Counter count={0} inc={() => {}} dec={() => {}}></Counter>
);
