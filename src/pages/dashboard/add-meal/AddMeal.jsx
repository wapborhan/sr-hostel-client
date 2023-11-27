import { useForm, Controller, useFieldArray } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddMeal = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    reset,

    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const time = new Date();

  const onSubmitAddMeal = (data) => {
    const inputData = {
      distributor_name: user?.displayName,
      distributor_email: user?.email,
      likes_count: 0,
      time: time,
      reviews: 0,
      ...data,
    };
    // console.log(inputData);
    fetch("http://localhost:3300/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          reset();
        }
      });
  };

  const onSubmitUpcomingMeal = (data) => {
    const inputData = {
      distributor_name: user?.displayName,
      distributor_email: user?.email,
      likes_count: 0,
      time: time,
      reviews: 0,
      ...data,
    };
    // console.log(inputData);

    // fetch("https://b8a11-server-side-wapborhan.vercel.app/jobs", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(inputData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       form.reset();
    //     }
    //   });
  };

  return (
    <div className="container max-w-7xl mx-auto">
      <div className="sect w-full mx-auto">
        <div className="content">
          <h2 className="text-center text-3xl"> Add Meal</h2>
        </div>

        <form>
          <div className="form  lg:mx-40 mx-5 my-6 space-y-4">
            <div className="frist flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Meal Picture URL</span>
                </label>
                <input
                  type="text"
                  {...register("meal_image", { required: true })}
                  placeholder="Meal Picture URL"
                  className="input input-bordered w-full"
                />
                {errors.meal_image && (
                  <span className="text-red-600">
                    Meal Picture URL is required
                  </span>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Meal Title</span>
                </label>
                <input
                  type="text"
                  {...register("meal_title", { required: true })}
                  placeholder="Meal Title"
                  className="input input-bordered w-full"
                />
                {errors.meal_title && (
                  <span className="text-red-600">Meal Title is required</span>
                )}
              </div>
            </div>

            <div className="frist flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Meal Category</span>
                </label>
                <Controller
                  name="meal_category"
                  control={control}
                  rules={{ required: true }}
                  defaultValue="" // Set default value if needed
                  render={({ field }) => (
                    <select
                      {...field}
                      id="selectOption"
                      className="input input-bordered w-full"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="breakfast">Breakfast</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                    </select>
                  )}
                />
                {errors.meal_category && (
                  <span className="text-red-600">
                    Meal Category is required
                  </span>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <input
                  type="number"
                  {...register("price", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
                {errors.price && (
                  <span className="text-red-600">Price is required</span>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Rating</span>
                </label>
                <input
                  type="number"
                  {...register("rating", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
                {errors.rating && (
                  <span className="text-red-600">Rating is required</span>
                )}
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Ingredients</span>
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {fields.map((item, index) => (
                    <div key={item.id} className="flex gap-3">
                      <Controller
                        name={`ingredients[${index}]`}
                        control={control}
                        defaultValue={item.value} // set default value if needed
                        render={({ field }) => (
                          <input
                            {...field}
                            placeholder={`Ingredients ${index + 1}`}
                            className="input input-bordered w-full"
                          />
                        )}
                      />

                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="btn   btn-error"
                      >
                        Remove
                      </button>
                    </div>
                  ))}{" "}
                  <button
                    type="button"
                    onClick={() => append("")}
                    className="btn btn-outline btn-warning"
                  >
                    Add Ingredients
                  </button>
                </div>
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Description</span>
                </label>
                <textarea
                  type="text"
                  {...register("description", {
                    required: true,
                  })}
                  placeholder="Description"
                  className="input input-bordered w-full h-40"
                />
                {errors.description && (
                  <span className="text-red-600">Description is required</span>
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="submit">
                <input
                  type="submit"
                  value="Add Meal"
                  onClick={handleSubmit(onSubmitAddMeal)}
                  className="rounded-lg font-h2 border-2-[#331A15] bg-prime w-full p-3 font-bold text-[18px] text-black hover:bg-second cursor-pointer"
                />
              </div>
              <div className="submit">
                <input
                  type="submit"
                  value="Upcoming Meal"
                  onClick={handleSubmit(onSubmitUpcomingMeal)}
                  className="rounded-lg font-h2 border-2-[#331A15] bg-prime w-full p-3 font-bold text-[18px] text-black hover:bg-second cursor-pointer"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMeal;
