import { Link } from "react-router-dom";

const Company = ({ companyId, name, vatin }) => {
  return (
    <div className="row" key={companyId}>
      <div>
        <Link
          to={`company/${companyId}`}
          state={{ companyName: name, companyId: companyId }}
        >
          {name}
        </Link>
      </div>
      <div>{vatin}</div>
    </div>
  );
};

export default Company;
