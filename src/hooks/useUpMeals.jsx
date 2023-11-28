import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useUpMeals = () => {
  const axiosPublic = useAxiosPublic();

  const { data: upMeals = [], refetch } = useQuery({
    queryKey: ["upMeals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/upcoming");
      return res.data;
    },
  });

  return [upMeals, refetch];
};

export default useUpMeals;
