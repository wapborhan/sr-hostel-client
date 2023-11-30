import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex justify-center items-center -mt-32 z-50 relative">
      <div className="stats shadow">
        <div className="stat bg-prime space-y-4 p-8">
          <div className="stat-title text-black text-4xl font-dancing">
            Perfect for dining
          </div>
          <div className="stat-values w-72 text-black">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean
            lacinia bibend,um nulla sed consectetur. Vivamus sagittis lacus.
          </div>
          <div className="stat-desc text-xl">
            <NavLink to="/meal" className="underline">
              More
            </NavLink>
          </div>
        </div>

        <div className="stat bg-second space-y-4 p-8">
          <div className="stat-title text-black text-4xl font-dancing">
            Always New Menu
          </div>
          <div className="stat-values w-72 text-black">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean
            lacinia bibend,um nulla sed consectetur. Vivamus sagittis lacus.
          </div>
          <div className="stat-desc text-xl">
            <NavLink to="/meal" className="underline">
              More
            </NavLink>
          </div>
        </div>

        <div className="stat bg-prime space-y-4 p-8">
          <div className="stat-title text-black text-4xl font-dancing">
            Only Best Service
          </div>
          <div className="stat-values w-72 text-black">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean
            lacinia bibend,um nulla sed consectetur. Vivamus sagittis lacus.
          </div>
          <div className="stat-desc text-xl">
            <NavLink to="/meal" className="underline">
              More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
