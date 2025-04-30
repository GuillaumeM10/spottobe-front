import "./style/main.scss";
import Router from "./components/Router";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
