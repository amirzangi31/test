import { Toaster } from "react-hot-toast";
import LoginPage from "./components/template/LoginPage";

function App() {
  return (
    <>
      <LoginPage />
      <Toaster position="top-left" />
    </>
  );
}

export default App;
