import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSubscription = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isSubscribe, isPending: isisSubscribeLoading } = useQuery({
    queryKey: [user?.email, "isSubscribe"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
      return res?.data?.subscription;
    },
  });
  console.log(isSubscribe);
  return [isSubscribe, isisSubscribeLoading];
};

export default useSubscription;
