import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialSignIn from "../signin/SocialSignIn";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    createUser(formData.email, formData.password).then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      updateUserProfile(formData.name, formData.photoURL)
        .then(() => {
          const userInfo = {
            name: formData.name,
            photo: formData.photoURL,
            email: formData.email,
            badge: "bronze",
            role: "user",
          };
          // console.log(userInfo);
          axiosPublic.post("/user", userInfo).then((res) => {
            if (res.status === 200) {
              // console.log("user added to the database");
              reset();
              // Swal.fire({
              //   position: "top-end",
              //   icon: "success",
              //   title: "User created successfully.",
              //   showConfirmButton: false,
              //   timer: 1500,
              // });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Create Account
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-5"
          >
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500">
                Photo URL
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                name="photoURL"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                autoFocus
                defaultValue="borhanuddin979@gmail.com"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                defaultValue="Abc@123"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 12 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character (!@#$&*).
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                // disabled={disabled}
                value="Login"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Sign Up
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">
                  or Sign Up with
                </span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <SocialSignIn />
              </div>
            </div>
          </form>
        </div>
        <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <Link to="/">
              <img src="https://i.ibb.co/1LV8nQP/logo.png" alt="" />
            </Link>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            With the power of K-WD, you can now focus only on functionaries for
            your digital products, while leaving the UI design on us!
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Do You have an account?</span>
            <Link to="/signin" className="underline">
              Log In!
            </Link>
          </p>
          {/* <p className="mt-6 text-sm text-center text-gray-300">
          Read our
          <a href="#" className="underline">
            terms
          </a>
          and
          <a href="#" className="underline">
            conditions
          </a>
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
