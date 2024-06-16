import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  headline: z.string().min(1, "Headline is required"),
  location: z.string().min(1, "Location is required"),
  image: z.string().url("Image URL must be valid"),
  bio: z.string().min(1, "Bio is required"),
  links: z.array(z.string().url("Each link must be a valid URL")),
  role: z.string().min(1, "Role is required"),
  interests: z.array(z.string().min(1, "Each interest must be non-empty")),
  skills: z.array(z.string().min(1, "Each skill must be non-empty")),
  education: z.array(
    z.string().min(1, "Each education entry must be non-empty")
  ),
  experience: z.array(
    z.string().min(1, "Each experience entry must be non-empty")
  ),
  projects: z.array(
    z.string().min(1, "Each project description must be non-empty")
  ),
  isVerified: z.boolean().optional(),
  collaborating: z.boolean(),
  criteria: z.array(z.string().min(1, "Each criterion must be non-empty")),
});
