import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  headline: z.string().min(1, "Headline is required"),
  location: z.string().min(1, "Location is required"),
  image: z.string().url("Image URL must be valid"),
  bio: z.string().min(1, "Bio is required"),
  links: z.array(z.string().url("Each link must be a valid URL")),
  role: z.string().min(1, "Role is required"),
  interests: z.array(z.string().min(1, "Each interest must be non-empty")),
  skills: z.array(z.string().min(1, "Each skill must be non-empty")),
  education: z.string().min(1, "Each education entry must be non-empty"),
  experience: z.string().min(1, "Each experience entry must be non-empty"),
  projects: z.array(
    z.string().min(1, "Each project description must be non-empty")
  ),
  isVerified: z.boolean().optional(),
  collaborating: z.boolean(),
  criteria: z.string().min(1, "Each criterion must be non-empty"),
});

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8em;
`;

const ProfileEdit = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "",
      headline: "",
      location: "",
      image: "",
      bio: "",
      links: [],
      role: "",
      interests: [],
      skills: [],
      education: [],
      experience: [],
      projects: [],
      isVerified: false,
      collaborating: false,
      criteria: [],
    },
  });

  const onSubmit = (data: any) => {
    const modifiedData = {
      ...data,
      links: data.links.split(",").map((link: any) => link.trim()),
    };
    console.log(modifiedData);
  };

  return (
    <FormWrapper>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input {...field} placeholder="Name" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="headline"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input {...field} placeholder="Headline" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="location"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input {...field} placeholder="Location" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="image"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input {...field} placeholder="Image URL" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="bio"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextArea {...field} placeholder="Bio" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="links"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextArea {...field} placeholder="Links (comma separated URLs)" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="role"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input {...field} placeholder="Role" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="interests"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextArea {...field} placeholder="Interests (comma separated)" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="skills"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextArea {...field} placeholder="Skills (comma separated)" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="education"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextArea {...field} placeholder="Education (comma separated)" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="experience"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextArea {...field} placeholder="Experience (comma separated)" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />
        <Controller
          name="projects"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextArea {...field} placeholder="Projects (comma separated)" />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />

        <Controller
          name="isVerified"
          control={control}
          render={({ field }) => (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                />
                Verified
              </label>
            </>
          )}
        />
        <Controller
          name="collaborating"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                />
                Collaborating
              </label>
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default ProfileEdit;

