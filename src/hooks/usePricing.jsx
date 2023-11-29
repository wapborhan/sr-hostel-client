import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const usePricing = (userPackage) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: priceData = [], refetch } = useQuery({
    queryKey: ["priceData"],
    enabled: user != null,
    queryFn: async () => {
      const res = await axiosPublic.get(`/pricing/${userPackage}`);
      return res.data;
    },
  });

  return [priceData, refetch];
};

export default usePricing;
