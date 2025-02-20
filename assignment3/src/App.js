import "./App.css";
import { TheamProvider } from "./ContextApi/theamContext";
import { UserCredProvider } from "./ContextApi/userCredContext";
import { TheamToggler } from "./components/theamToggler";
import { LoginPage } from "./components/loginPage";
import { Home } from "./components/homePage";
import { TheamContext } from "./ContextApi/theamContext";
import { UserCredContext } from "./ContextApi/userCredContext";
import { useContext } from "react";

function App() {
  return (
    <TheamProvider>
      <UserCredProvider>
        <Content />
      </UserCredProvider>
    </TheamProvider>
  );
}

function Content() {
  const { isLoggedIn } = useContext(UserCredContext);
  const { theam } = useContext(TheamContext);

  return (
    <>
      <div
        className={`wrapperDiv  ${
          theam === "light" ? "lightTheam" : "darkTheam"
        }`}
      >
        <TheamToggler />
        {isLoggedIn ? <Home /> : <LoginPage />}
      </div>
    </>
  );
}
export default App;
