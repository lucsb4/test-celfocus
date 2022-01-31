const GetCompanies = (companyId) => {
  return fetch(
    `http://localhost:3000/companies${companyId ? `/${companyId}` : ""}`
  );
};

const GetContacts = (contactNumber) => {
  return fetch(
    `http://localhost:3000/phone_numbers${
      contactNumber ? `/${contactNumber}` : ""
    }`
  );
};

export { GetCompanies, GetContacts };
