import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import Swal from 'sweetalert2';

const Home = () => {
  const data = useLoaderData();
  //   console.log(data);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    setCoffees(data);
  }, [data]);

  const HandleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Data after deleting the user: ', data);
            if (data.deletedCount > 0) {
              const newCoffees = coffees.filter((coffee) => coffee._id != id);
              setCoffees(newCoffees);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
  //   console.log(coffees);
  return (
    <div className="my-20 flex flex-col justify-center items-center">
      <h1 className="text-xl raleway text-center mb-2">--- Sip & Savor ---</h1>
      <h1 className="text-6xl text-center rancho text-[#331A15] mb-4">
        Our Popular Products
      </h1>
      <Link className="mx-auto py-[9px] px-[45px] bg-[#E3B577] text-white border-4 border-[#331A15] rounded-[5px] mb-12">
        <p className="text-2xl  rancho">Add Coffee</p>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
        {coffees.map((coffee) => (
          <CoffeeCard
            HandleDelete={HandleDelete}
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
