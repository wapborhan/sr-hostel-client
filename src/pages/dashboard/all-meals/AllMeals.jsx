import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { Tag } from "primereact/tag";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import useMenu from "../../../hooks/useMenu";
import { NavLink } from "react-router-dom";
import { FaEdit, FaRegTrashAlt, FaRegEye } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllMeals = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (meal) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${meal._id}`);

        if (res.status === 200) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${meal.meal_title} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  const imageBodyTemplate = (meal) => {
    // console.log(user);
    return (
      <img
        src={meal?.meal_image}
        alt={meal?.meal_image}
        className="w-12 h-12 shadow-2 rounded-full"
      />
    );
  };

  const actionBodyTemplate = (meal) => {
    return (
      <div className="flex gap-3">
        <NavLink
          to={`/meal/${meal?._id}`}
          className=" btn-sm btn btn-outline btn-warning"
        >
          <FaRegEye />
        </NavLink>
        <NavLink
          to={`/dashboard/allMeals/update/${meal?._id}`}
          className="btn-sm btn btn-outline btn-success"
        >
          <FaEdit />
        </NavLink>
        <span
          onClick={() => handleDeleteItem(meal)}
          className="btn-sm btn btn-outline btn-error"
        >
          <FaRegTrashAlt />
        </span>
      </div>
    );
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">All Menus</span>
    </div>
  );
  const footer = `In total there are ${menu ? menu.length : 0} menu.`;
  return (
    <div className="card">
      <DataTable
        value={menu}
        header={header}
        footer={footer}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column
          field="meal_title"
          header="Meal Title
"
        ></Column>
        <Column field="likes_count" header=" Likes"></Column>
        <Column field="reviews" header="Reviews"></Column>
        <Column field="distributor_name" header="Distributor Name"></Column>
        <Column field="distributor_email" header="Distributor Email"></Column>
        <Column header="Action" body={actionBodyTemplate}></Column>
      </DataTable>
    </div>
  );
};

export default AllMeals;
