import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Contact from "../components/Contact";
import { GetContacts } from "../service/GeneralService";

const CompanyInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { companyName, companyId } = state;

  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    GetContacts()
      .then((response) => response.json())
      .then((contactData) => setContactList(contactData));
  }, []);

  return (
    <section>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{companyName}</h1>
      <div className="table">
        <div>Number</div>
        <div>Type</div>
        {contactList
          .filter((contact) => contact.company_id === companyId)
          .map((contact) => (
            <Contact
              key={contact.id}
              contactNumber={contact.id}
              type={contact.type}
            />
          ))}
      </div>
    </section>
  );
};

export default CompanyInfo;
