const { faker } = require("@faker-js/faker");

const createBusiness = () => {
  const fullName = faker.person.fullName();
  const email = faker.person.email();
  const phone = faker.phone.number({ style: "national" });
  const address = faker.location.streetAddress({ useFullAddress: true });
  const numberOfEmployees = 0;
  isActive = true;
  createdAt = Date.now();
};
