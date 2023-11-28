import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import useUpMeals from "../../../hooks/useUpMeals";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ReqMeals = () => {
  const [upMeals] = useUpMeals();

  const axiosPublic = useAxiosPublic();

  // const { data: reqMeals = [], refetch } = useQuery({
  //   queryKey: ["upMeals"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get("/upcoming");
  //     return res.data;
  //   },
  // });

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
    return "publish";
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Upcoming Meals</span>
    </div>
  );
  const footer = `In total there are ${
    upMeals ? upMeals.length : 0
  } Upcoming Meals.`;
  return (
    <div className="card">
      <DataTable
        value={upMeals}
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

export default ReqMeals;
