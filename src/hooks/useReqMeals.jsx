import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useReqMeals = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reqMeals = [], refetch } = useQuery({
    queryKey: ["reqMeals"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reqmeals");
      return res.data;
    },
  });

  return [reqMeals, refetch];
};

export default useReqMeals;
