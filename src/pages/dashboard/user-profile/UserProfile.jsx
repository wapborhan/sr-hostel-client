import moment from "moment";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserProfile = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: userData } = useQuery({
    queryKey: [user?.email, "userData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res?.data;
    },
  });

  console.log(userData?.badge);

  return (
    <div className="container max-w-7xl lg:mx-auto px-5 my-6">
      <div
        className="hero h-64  border-2 bg-cover bg-blue-400 h-112 rounded-t-lg"
        style={{
          backgroundImage:
            "url('https://template.canva.com/EAENvp21inc/1/0/1600w-qt_TMRJF4m0.jpg')",
        }}
      ></div>
      <div className=" border-2 shadow">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:relative">
          <div className="w-full lg:w-1/4 ">
            <img
              src={user?.photoURL}
              alt="logo"
              className="rounded-full border-2 h-48 w-48 lg:absolute lg:pin-l lg:pin-t lg:-mt-48 -mt-24 ml-7 "
            />
          </div>
          <div className="w-full lg:w-1/2 py-8 lg:ml-0 ml-10 grid lg:grid-cols-2 justify-center">
            <div className="flex flex-col gap-3">
              <span href="#" className="font-bold flex text-2xl">
                {user?.displayName} -{" "}
                {userData?.subscription === "bronze" && (
                  <>
                    <img
                      src="https://i.ibb.co/fHZF43w/silver.png"
                      className="w-12"
                      alt=""
                    />
                  </>
                )}
                {userData?.subscription === "gold" && (
                  <>
                    <img
                      src="https://i.ibb.co/xs9v31q/gold.png"
                      className="w-12"
                      alt=""
                    />
                  </>
                )}
                {userData?.subscription === "platinum" && (
                  <>
                    <img
                      src="https://i.ibb.co/19sX9rH/platinam.png"
                      className="w-12"
                      alt=""
                    />
                  </>
                )}
              </span>
              <span href="#" className="">
                {user?.email}
              </span>
              <span></span>
            </div>
          </div>
          <div className="right lg:px-0 pb-5 px-5">
            <div className="role">
              <span className="text-teal">
                Acount Create: <br />
                {moment(user?.metadata?.creationTime).format(
                  "Do MMMM  YYYY, h:mm:ss a"
                )}
              </span>
            </div>
            <div className="date">
              <span className="text-teal">
                Last Login: <br />
                {moment(user?.metadata?.lastSignInTime).format(
                  "Do MMMM  YYYY, h:mm:ss a"
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
