import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.date({
    required_error: "נדרש תאריך התחלה",
  }),
  endDate: z.date({
    required_error: "נדרש תאריך סיום",
  }),
  color: z.enum(["כחול", "ירוק", "אדום", "צהוב", "סגול", "כתום"], {
    required_error: "נדרש לבחור צבע",
  }),
});

export type TEventFormData = z.infer<typeof eventSchema>;
