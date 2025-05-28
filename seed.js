import { faker } from "@faker-js/faker";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { number } from "motion";
dotenv.config();

const createBusiness = () => {
  const name = faker.person.name();
  const phone = faker.phone.number({ style: "national" });
  // Missing business_owner_id
  const email = faker.internet.email();
  const address = faker.location.streetAddress({ useFullAddress: true });
  const numberOfEmployees = 0;
  const isActive = true;
  const createdAt = Date.now();

  return { name, email, phone, address, number, isActive, createdAt, numberOfEmployees };
};

const createEmployees = () => {
  const name = faker.person.name();
  // missing business_id and business_owner_id
  const phone = faker.phone.number({ style: "national" });
  const email = faker.internet.email();
  const address = faker.location.streetAddress({ useFullAddress: true });
  const gender = faker.person.gender();
  const numberOfEmployees = 0;
  const isActive = true;
  const createdAt = Date.now();

  return { name, email, phone, address, number, isActive, createdAt, numberOfEmployees, gender };
};

const createBusinessImgs = () => {};
