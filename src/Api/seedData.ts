// faker-data.js
import { faker } from "@faker-js/faker";
import { supabase } from "./init";

// Configuration
const NUM_BARBERS = 10;
const NUM_CLIENTS = 50;
const NUM_APPOINTMENTS = 100;
const NUM_IMAGES_PER_BARBER = 3;

// Helper functions
const generateBarbers = (count) => {
  return Array.from({ length: count }, () => ({
    user_id: faker.string.uuid(), // Simulating auth.users reference
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    shop_name: faker.company.name(),
    shop_description: faker.lorem.paragraph(),
  }));
};

const generateClients = (count) => {
  return Array.from({ length: count }, () => ({
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
  }));
};

const generateAppointments = (count, barbers, clients) => {
  const statuses = ["scheduled", "completed", "cancelled", "no-show"];
  const services = ["Haircut", "Beard Trim", "Hair Color", "Shave", "Hair Treatment", "Kids Cut", "Senior Cut", "Buzz Cut", "Fade"];

  return Array.from({ length: count }, () => {
    const barber = faker.helpers.arrayElement(barbers);
    const client = faker.helpers.arrayElement(clients);

    return {
      barber_id: barber.id,
      client_id: client.id,
      service_name: faker.helpers.arrayElement(services),
      appointment_time: faker.date.soon({ days: 30 }).toISOString(),
      status: faker.helpers.arrayElement(statuses),
      notes: Math.random() < 0.7 ? faker.lorem.sentences({ min: 0, max: 3 }) : null,
    };
  });
};

const generateImages = (barbers) => {
  const imageTypes = ["shop", "barber", "work"];

  return barbers.flatMap((barber) => {
    return Array.from({ length: NUM_IMAGES_PER_BARBER }, () => ({
      barber_id: barber.id,
      image_url: faker.image.urlLoremFlickr({ category: "barber" }),
      type: faker.helpers.arrayElement(imageTypes),
    }));
  });
};

// Insert data into Supabase in correct order
export const populateSupabase = async () => {
  try {
    // 1. Insert Barbers
    const barbersData = generateBarbers(NUM_BARBERS);
    const { data: barbers, error: barbersError } = await supabase.from("barbers").insert(barbersData).select();

    if (barbersError) throw barbersError;
    console.log(`Inserted ${barbers.length} barbers`);

    // 2. Insert Clients
    const clientsData = generateClients(NUM_CLIENTS);
    const { data: clients, error: clientsError } = await supabase.from("clients").insert(clientsData).select();

    if (clientsError) throw clientsError;
    console.log(`Inserted ${clients.length} clients`);

    // 3. Insert Appointments
    const appointmentsData = generateAppointments(NUM_APPOINTMENTS, barbers, clients);
    const { data: appointments, error: appointmentsError } = await supabase.from("appointments").insert(appointmentsData).select();

    if (appointmentsError) throw appointmentsError;
    console.log(`Inserted ${appointments.length} appointments`);

    // 4. Insert Images
    const imagesData = generateImages(barbers);
    const { data: images, error: imagesError } = await supabase.from("images").insert(imagesData).select();

    if (imagesError) throw imagesError;
    console.log(`Inserted ${images.length} images`);
  } catch (error) {
    console.error("Error populating Supabase:", error);
    throw error;
  } finally {
    console.log("successfully inserted data");
  }
};

await populateSupabase();
