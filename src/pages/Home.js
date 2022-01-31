import { useEffect, useState } from "react";
import { GetCompanies } from "../service/GeneralService";
import Company from "../components/Company";
import "../components/styles.scss";

const Companies = () => {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    GetCompanies()
      .then((response) => response.json())
      .then((companyList) => setCompanyList(companyList));
  }, []);

  return (
    <section>
      <h1>Companies</h1>
      <div className="table">
        <div>Company Name</div>
        <div>vatin</div>
        {companyList.map((company) => (
          <Company
            key={company.id}
            companyId={company.id}
            name={company.name}
            vatin={company.vatin}
          />
        ))}
      </div>
    </section>
  );
};

export default Companies;
