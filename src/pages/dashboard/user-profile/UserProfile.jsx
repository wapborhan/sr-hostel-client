import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();

  console.log(user);

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
              className="rounded-full border-2 h-48 w-48 lg:absolute lg:pin-l lg:pin-t lg:-mt-48 ml-7 "
            />
          </div>
          <div className="w-full lg:w-1/2 py-5 lg:ml-0 ml-10 grid grid-cols-2 justify-center">
            <div className="flex flex-col gap-3">
              <span href="#" className="font-bold text-2xl">
                {user?.displayName}
              </span>
              <span href="#" className="">
                {user?.email}
              </span>
              <span className="text-teal">
                Acount Create: <br />
                {user?.metadata?.creationTime}
              </span>
              <span className="text-teal">
                Last Login: <br /> {user?.metadata?.lastSignInTime}
              </span>
            </div>
          </div>
          <div className="right">
            <div className="role">Role</div>
            <div className="badge">
              <h2>Badge</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
