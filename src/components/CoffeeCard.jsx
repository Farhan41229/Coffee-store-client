import React from 'react';
import { FaEye, FaPen } from 'react-icons/fa';
import { ImBin2 } from 'react-icons/im';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, HandleDelete }) => {
  const { _id, name, chef, supplier, photo } = coffee;

  return (
    <div className="w-[600px] p-[30px] mx-auto bg-[#F5F4F1]">
      <div className="flex justify-between items-center gap-5">
        <div>
          <img className=" object-contain" src={photo} alt="" />
        </div>
        <div className="space-y-2 text-base">
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-bold">Supplier:</span> {supplier}
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#D2B48C] text-white hover:cursor-pointer">
            <Link>
              <FaEye />
            </Link>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#3C393B] text-white hover:cursor-pointer">
            <Link>
              <FaPen />
            </Link>
          </div>
          <div
            onClick={() => HandleDelete(_id)}
            className="w-[40px] h-[40px] flex justify-center items-center bg-[#EA4744] text-white hover:cursor-pointer"
          >
            <Link>
              <ImBin2 />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
