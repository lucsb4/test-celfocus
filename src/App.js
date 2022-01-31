import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompanyInfo from "./pages/CompanyInfo";
import ContactInfo from "./pages/ContactInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="company" element={<CompanyInfo />}>
          <Route path=":companyId" element={<CompanyInfo />} />
        </Route>
        <Route path="numbers" element={<ContactInfo />}>
          <Route path=":numberId" element={<ContactInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
