import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import useUpMeals from "../../../hooks/useUpMeals";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";

const ReqMeals = () => {
  const { user } = useAuth();

  const axiosPublic = useAxiosPublic();

  const {
    data: reqMeals,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["reqMeals", user?.email],
    queryFn: () =>
      axiosPublic.get(`/reqmeals?email=${user?.email}`).then((res) => res.data),
    enabled: user != null,
  });

  console.log(reqMeals);

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
    return "Cancel";
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">Requested Meals</span>
    </div>
  );
  const footer = `In total there are ${
    reqMeals ? reqMeals.length : 0
  } Requested Meals.`;
  return (
    <div className="card">
      <DataTable
        value={reqMeals}
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
        <Column field="status" header="Status"></Column>
        <Column header="Action" body={actionBodyTemplate}></Column>
      </DataTable>
    </div>
  );
};

export default ReqMeals;
