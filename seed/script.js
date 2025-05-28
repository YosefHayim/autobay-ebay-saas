import { faker } from "@faker-js/faker";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const barberServices = [
  "Haircut",
  "Buzz Cut",
  "Fade",
  "Beard Trim",
  "Beard Shaping",
  "Hot Towel Shave",
  "Straight Razor Shave",
  "Head Shave",
  "Hairline Cleanup",
  "Neck Shave",
  "Mustache Trim",
  "Eyebrow Shaping",
  "Scalp Massage",
  "Hair Wash & Style",
  "Hair Coloring",
  "Grey Blending",
  "Facial Treatment",
  "Black Mask Facial",
  "Ear Hair Trim",
  "Nose Hair Trim",
];

const createbusiness = async () => {
  const business = {
    name: faker.company.name(),
    phone: faker.phone.number({ style: "national" }),
    email: faker.internet.email(),
    address: faker.location.streetAddress({ useFullAddress: true }),
    is_active: true,
    created_at: new Date().toISOString(),
  };
  const { data, error } = await supabase.from("business").insert([business]).select().single();
  if (error) throw error;
  console.log("Finish generate business");
  return data;
};

const createbusinessImages = async (business_id, count = 10) => {
  const images = Array.from({ length: count }).map(() => ({
    business_id,
    img_url: faker.image.urlPicsumPhotos(),
    created_at: new Date(),
  }));

  const { error } = await supabase.from("business_imgs").insert(images);
  console.log("Finish generate business imgs");

  if (error) throw error;
};

const createbusinessOwner = async (business_id) => {
  const owner = {
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 60 }),
    address: faker.location.streetAddress({ useFullAddress: true }),
    phone: faker.phone.number({ style: "national" }),
    gender: faker.person.gender(),
    is_free_trial_end: faker.datatype.boolean(),
    is_active: true,
    created_at: new Date().toISOString(),
    business_id,
  };
  const { data, error } = await supabase.from("business_owners").insert([owner]).select().single();
  if (error) throw error;
  console.log("Finish generate business owners");

  return data;
};

const createEmployees = async (business_id, business_owner_id) => {
  const employees = Array.from({ length: 3 }, () => ({
    name: faker.person.fullName(),
    business_id,
    business_owner_id,
    age: faker.number.int({ min: 18, max: 60 }),
    phone: faker.phone.number({ style: "national" }),
    email: faker.internet.email(),
    address: faker.location.streetAddress({ useFullAddress: true }),
    gender: faker.person.gender(),
    is_active: true,
    created_at: new Date().toISOString(),
  }));

  const { data, error } = await supabase.from("employees").insert(employees).select();
  if (error) throw error;
  console.log("Finish generate employees");

  return data;
};

const createServices = async (employee_id, count = 5) => {
  const services = Array.from({ length: count }, () => ({
    employee_id,
    service_name: faker.helpers.arrayElement(barberServices),
    duration_min: faker.number.int({ min: 15, max: 90 }),
    price: faker.number.int({ min: 10, max: 100 }),
    description: faker.lorem.sentence(),
    is_active: true,
    created_at: new Date().toISOString(),
  }));

  const { data, error } = await supabase.from("services").insert(services).select();
  if (error) throw error;
  console.log(`Generated ${services.length} services for employee ${employee_id}`);
  return data;
};

const createCustomers = async (business_id, count = 100) => {
  const customers = Array.from({ length: count }, () => ({
    name: faker.person.fullName(),
    profile_img: faker.image.avatar(),
    phone: faker.phone.number({ style: "national" }),
    email: faker.internet.email(),
    is_active: true,
    created_at: new Date().toISOString(),
    business_id,
  }));

  const { data, error } = await supabase.from("customers").insert(customers).select();
  if (error) throw error;
  console.log("Finish generate customers");

  return data;
};

const createAppointments = async (business_id, customers, services) => {
  const appointments = customers.map((customer) => {
    const service = faker.helpers.arrayElement(services);
    const now = new Date();
    const scenario = faker.helpers.arrayElement([
      { status: "pending", when_to_arrive: faker.date.soon({ days: 30 }), is_cancelled: false },
      { status: "completed", when_to_arrive: faker.date.recent({ days: 30 }), is_cancelled: false },
      { status: "cancelled", when_to_arrive: faker.date.recent({ days: 30 }), is_cancelled: true },
    ]);

    return {
      business_id,
      customer_id: customer.id,
      service_id: service.id,
      when_to_arrive: scenario.when_to_arrive.toISOString(),
      status: scenario.status,
      is_cancelled: scenario.is_cancelled,
      is_active: true,
      created_at: now.toISOString(),
    };
  });

  const { data, error } = await supabase.from("appointments").insert(appointments).select();
  if (error) throw error;
  console.log("Finish generate appointments");
  return data;
};

const createCustomerReviews = async (business_id, customers) => {
  const reviews = customers.map((customer) => ({
    business_id,
    customer_id: customer.id,
    rating: faker.number.int({ min: 1, max: 5 }),
    comment: faker.lorem.sentences(1),
    created_at: new Date().toISOString(),
  }));

  const { data, error } = await supabase.from("customer_reviews").insert(reviews).select();
  if (error) throw error;
  console.log("Finish generate reviews");

  return data;
};

const generateData = async (businessCount = 5) => {
  for (let i = 0; i < businessCount; i++) {
    const business = await createbusiness();
    await createbusinessImages(business.id);

    const owner = await createbusinessOwner(business.id);
    const employees = await createEmployees(business.id, owner.id);

    const allServices = [];
    for (const employee of employees) {
      const services = await createServices(employee.id);
      allServices.push(...services);
    }

    const customerCount = faker.number.int({ min: 50, max: 100 });
    const customers = await createCustomers(business.id, customerCount);

    await createAppointments(business.id, customers, allServices);
    await createCustomerReviews(business.id, customers);

    console.log(`✅ Finished seeding business ${i + 1} with ${customerCount} customers`);
  }
};

const resetDB = async () => {
  const tables = ["appointments", "customer_reviews", "customers", "services", "employees", "business_owners", "business_imgs", "business"];

  for (const table of tables) {
    const { error } = await supabase.from(table).delete().not("id", "is", null);
    if (error) {
      console.error(`Failed to delete from ${table}:`, error.message);
    } else {
      console.log(`Deleted all rows from ${table}`);
    }
  }

  console.log("Database reset complete.");
};

// resetDB();
generateData(100).catch(console.error);
