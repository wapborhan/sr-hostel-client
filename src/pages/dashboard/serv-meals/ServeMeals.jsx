import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";

const ServeMeals = () => {
  const { user } = useAuth();

  const axiosPublic = useAxiosPublic();

  const {
    data: servMeals,
    // isLoading,
    // isError,
  } = useQuery({
    queryKey: ["servMeals", user?.email],
    queryFn: () => axiosPublic.get(`/servmeals`).then((res) => res.data),
    enabled: user != null,
  });

  console.log(servMeals);

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
    return "Serve";
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Served Meals</span>
    </div>
  );
  const footer = `In total there are ${
    servMeals ? servMeals.length : 0
  } Served Meals.`;

  return (
    <div className="card">
      <DataTable
        value={servMeals}
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
        <Column field="req_name" header="Requester Name"></Column>
        <Column field="req_email" header="Requester Email"></Column>
        <Column field="status" header="Status"></Column>
        <Column header="Action" body={actionBodyTemplate}></Column>
      </DataTable>
    </div>
  );
};

export default ServeMeals;
