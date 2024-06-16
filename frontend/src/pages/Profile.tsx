import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileSchema } from "../validators/userProfileSchema";

const Profile = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProfileSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center p-5 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Profile Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                {...field}
                placeholder="Name"
                className="my-2 p-2 w-full box-border"
              />
              {error && (
                <span className="text-red-600 text-sm">{error.message}</span>
              )}
            </>
          )}
        />
        <Controller
          name="headline"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                {...field}
                placeholder="Headline"
                className="my-2 p-2 w-full box-border"
              />
              {error && (
                <span className="text-red-600 text-sm">{error.message}</span>
              )}
            </>
          )}
        />
        <Controller
          name="location"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                {...field}
                placeholder="Location"
                className="my-2 p-2 w-full box-border"
              />
              {error && (
                <span className="text-red-600 text-sm">{error.message}</span>
              )}
            </>
          )}
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white border-none cursor-pointer hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
