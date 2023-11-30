import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  // const [users, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user");
      return res.data;
    },
  });

  const imageBodyTemplate = (user) => {
    return (
      <img
        src={user.photo}
        alt={user.photo}
        className="w-12 h-12 shadow-2 rounded-full"
      />
    );
  };

  const roleBodyTemplate = (user) => {
    const handleMakeAdmin = (user) => {
      console.log("clicked", user);
      axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
        console.log(res);
        if (res.status === 200) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    };
    const adminIs = user?.role === "admin";

    return (
      <>
        {adminIs ? (
          <Tag value={user.role} severity={getSeverity(user)}></Tag>
        ) : (
          <Tag
            value={user.role}
            onClick={() => handleMakeAdmin(user)}
            severity={getSeverity(user)}
            className="cursor-pointer"
          ></Tag>
        )}
      </>
    );
  };
  const actionBodyTemplate = (user) => {
    return "Edit";
  };

  const getSeverity = (user) => {
    switch (user.role) {
      case "admin":
        return "success";

      case "user":
        return "warning";

      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
      <span className="text-xl text-900 font-bold">All Users</span>
    </div>
  );
  const footer = `In total there are ${users ? users.length : 0} users.`;
  return (
    <div className="card">
      <DataTable
        value={users}
        header={header}
        footer={footer}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="badge" header="Badge"></Column>
        <Column field="subscription" header="Subscription"></Column>
        <Column header="Role" body={roleBodyTemplate}></Column>
        {/* <Column header="Action" body={actionBodyTemplate}></Column> */}
      </DataTable>
    </div>
  );
};

export default ManageUsers;
