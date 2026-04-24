import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  //To call mount function
  //Makes sure that the function is executed only once when the component is first displayed
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) history.push(nextPathname);
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
