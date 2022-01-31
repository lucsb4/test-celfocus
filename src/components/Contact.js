import { Link } from "react-router-dom";

const Contact = ({ contactNumber, type }) => {
  return (
    <div key={contactNumber} className="row">
      <div>
        <Link to={`/numbers/${contactNumber}`} state={{ contactNumber, type }}>
          {contactNumber}
        </Link>
      </div>
      <div>{type}</div>
    </div>
  );
};

export default Contact;
