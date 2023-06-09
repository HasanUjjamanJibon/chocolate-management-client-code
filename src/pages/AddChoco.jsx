import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";

const AddChoco = () => {
  // form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const url = form.photoURL.value;
    const select = form.select.value;

    const newChocolate = { name, country, url, select };
    fetch(`https://chocolate-management-server-code.up.railway.app/add`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          Swal.fire("Good job!", "Chocolate Added Successfully!", "success");
        }
      })
      .catch((err) => console.log(err.code));
    form.reset();
  };

  return (
    <div className="p-6 block text-left">
      <Link
        to="/"
        className="inline-flex  items-center font-semibold gap-2  capitalize   rounded-md px-3 py-2"
      >
        <BsArrowLeft className="text-lg" />
        all chocolates
      </Link>
      <hr />
      <div className="h-full block w-full bg-gray-200 px-5   my-10 py-12">
        <div className="text-center ">
          <h2 className="text-base md:text-lg text-gray-800  lg:text-xl capitalize font-bold">
            new chocolates
          </h2>

          <p className="my-2 text-gray-700">
            Use the below form to create a new product
          </p>
        </div>

        <div>
          <form
            onSubmit={handleFormSubmit}
            className=" max-w-7xl mx-4 lg:mx-auto space-y-4"
          >
            {/* name input field */}
            <div className="space-y-3">
              <label htmlFor="name" className="font-bold block text-base">
                <span>Name</span>
              </label>
              <input
                className="w-full py-3 px-6 rounded-md text-gray-700 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400"
                type="text"
                name="name"
                id="name"
                placeholder="Enter chocolate name"
              />
            </div>

            {/* country input field */}
            <div className="space-y-3">
              <label htmlFor="country" className="font-bold block text-base">
                <span>Country</span>
              </label>
              <input
                className="w-full py-3 px-6 rounded-md text-gray-700 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400"
                type="text"
                name="country"
                id="country"
                placeholder="Enter country name"
              />
            </div>

            {/* category input field */}
            <div className="space-y-3">
              <label htmlFor="category" className="font-bold block text-base">
                <span>Category</span>
              </label>
              <select
                name="select"
                className="select  w-full py-3 px-6 rounded-md text-gray-500 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-700"
              >
                <option>Premium</option>
                <option>Standard</option>
              </select>
            </div>

            {/* coutry input field */}
            <div className="space-y-3">
              <label htmlFor="photoURL" className="font-bold block text-base">
                <span>Photo URL</span>
              </label>
              <input
                className="w-full py-3 px-6 rounded-md text-gray-700 font-semibold  focus:outline-0 placeholder:font-semibold placeholder:text-sm placeholder:text-gray-400"
                type="url"
                name="photoURL"
                id="photoURL"
                placeholder="Enter photoURL "
              />
            </div>

            <div>
              <button className="w-full my-2 py-3 px-6 rounded-md bg-yellow-800 text-gray-200 font-semibold   focus:outline-0 ">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddChoco;
