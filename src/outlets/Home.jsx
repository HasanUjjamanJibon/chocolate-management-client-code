import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { app } from "../../firebase.config";
import { getAuth } from "firebase/auth";
import Swal from "sweetalert2";
const auth = getAuth(app);

const Home = () => {
  const allChoclates = useLoaderData();

  const [update, setUpdate] = useState(allChoclates || [{}, {}]);
  let serial = 1;

  // handle delete choclate
  const handleDelete = (id) => {
    fetch(`https://chocolate-server.vercel.app/chocolate/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = update?.filter((choco) => choco._id !== id);
        Swal.fire("Yes!", "You Successfully Deleted!", "success");
        setUpdate(remaining);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-6 block text-left">
      <Link
        to="/add_choco"
        className="inline-flex items-center font-semibold gap-2 border-2 capitalize  border-gray-300 rounded-md px-3 py-2"
      >
        <AiOutlinePlus />
        New chocolate
        <img
          src="https://i.postimg.cc/gJb0kGFw/chocolate-bar.png"
          alt="chocolate image"
        />
      </Link>

      <div className="overflow-x-auto  my-10">
        <table className="table w-full   capitalize font-semibold table-heading">
          {/* head*/}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Country</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {update &&
              update?.map((chocolate) => (
                <tr key={chocolate?._id}>
                  <th>{serial++}</th>
                  <td>
                    <img
                      className="h-12 w-12 bg-green-600"
                      src={chocolate?.url}
                      alt="chocolate image"
                    />
                  </td>
                  <td>{chocolate?.name}</td>
                  <td>{chocolate?.country}</td>
                  <td>{chocolate?.select}</td>
                  <td className="flex items-center gap-3">
                    <Link
                      to={`/update_choco/${chocolate?._id}`}
                      className="bg-gray-100 text-gray-800 text-xl p-2 rounded-md"
                    >
                      <FiEdit2 />
                    </Link>

                    <button
                      onClick={() => handleDelete(chocolate?._id)}
                      className="bg-gray-100 text-gray-800 text-xl p-2 rounded-md"
                    >
                      <RxCross2 />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
