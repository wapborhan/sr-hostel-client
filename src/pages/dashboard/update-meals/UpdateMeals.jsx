import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateMeals = () => {
  const navigate = useNavigate();
  const meals = useLoaderData();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitUpdateMeal = (data) => {
    const inputData = {
      distributor_name: meals?.distributor_name,
      distributor_email: meals?.distributor_email,
      likes_count: meals?.likes_count,
      time: meals?.time,
      ingredients: meals?.ingredients,
      reviews: meals?.reviews,
      ...data,
    };

    axiosPublic.patch(`/menu/${meals?._id}`, inputData).then((res) => {
      if (res.status === 200) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Meals Added Sucessfull.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/allMeals");
      }
    });
  };

  return (
    <div className="container max-w-7xl mx-auto">
      <div className="sect w-full mx-auto">
        <div className="content">
          <h2 className="text-center text-3xl">Update Meal</h2>
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
                  defaultValue={meals?.meal_image}
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
                  defaultValue={meals?.meal_title}
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
                  defaultValue={meals?.meal_category} // Set default value if needed
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
                  defaultValue={meals?.price}
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
                  defaultValue={meals?.rating}
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
                  <span className="label-text font-bold">Description</span>
                </label>
                <textarea
                  type="text"
                  {...register("description", {
                    required: true,
                  })}
                  defaultValue={meals?.description}
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
                  value="Update Meal"
                  onClick={handleSubmit(onSubmitUpdateMeal)}
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

export default UpdateMeals;
