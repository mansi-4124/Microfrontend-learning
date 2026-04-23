import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  //Makes sure that the function is executed only once when the component is first displayed
  useEffect(() => mount(ref.current));

  return <div ref={ref} />;
};
