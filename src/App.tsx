import React from "react";
import * as Components from "./Components";
import "./Scss/main.scss";

function App() {
  const [isTheme, setIsTheme] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <div className={isTheme ? "app-dark" : "app-light"}>
      <Components.Header setIsTheme={setIsTheme} setIsLoading={setIsLoading} />
      <Components.Home />
      <Components.Education />
      <Components.Skills />
      <Components.Projects />
      <Components.Experiences />
      <Components.Contact />

      <Components.Loading isLoading={isLoading} />
    </div>
  );
}

export default App;
