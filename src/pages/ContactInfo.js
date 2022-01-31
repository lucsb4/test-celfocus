import { useLocation, useNavigate } from "react-router-dom";

const ContactInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { contactNumber, type } = state;

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div>{contactNumber}</div>
      <div>{type}</div>
    </>
  );
};

export default ContactInfo;
