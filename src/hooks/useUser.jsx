import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const { user, loading } = useAuth();

  // console.log(user?.email);

  const [axiosSecure] = useAxiosSecure();
  const { data: isUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["isUser", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/user/${user?.email}`);
      // console.log("is User response", res);
      return res.data.user;
    },
  });
  // console.log(isUser);
  return [isUser, isUserLoading];
};
export default useUser;
