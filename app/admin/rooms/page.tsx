import React from 'react'
import Image from "next/image";
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { FaPlusCircle  } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";

import Layout from '../components/Layout'
import room1 from "../../../public/assets/PresidentialSuite.jpg";
import room2 from "../../../public/assets/AssassinBlackTheme.jpg";
import room3 from "../../../public/assets/Service-room1.jpg";
import room4 from "../../../public/assets/Service-room2.jpg";
import room5 from "../../../public/assets/luxury-penthouse.jpg";


const page = () => {
    const rooms = [
        {
          id: "1",
          title: "High Table Residence",
          image: room1,
          isAvailable: false,
          price: '150',
        },
        {
          id: "2",
          title: "Assassin's Retreat Suite",
          image: room2,
          isAvailable: true,
          price: '100',
        },
        {
          id: "3",
          title: "Safe House Quarters",
          image: room3,
          isAvailable: true,
          price: '250',
        },
        {
          id: "4",
          title: "Diplomat's Refuge",
          image: room4,
          isAvailable: false,
          price: '350',
        },
        {
          id: "5",
          title: "Continental Penthouse",
          image: room5,
          isAvailable: false,
          price: '550',
       },
      ];
  return (
    <Layout>
        <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <h1 className='font-heading text-2xl font-medium text-white'>Rooms & Suits</h1>
                <div className='flex items-center gap-2'>
                    <button type='button'>
                        <FaPlusCircle color='#fff' size={40} />
                    </button>
                    <input 
                        type='text'
                        placeholder='Search here..'
                         className='border-1 border-white rounded-lg p-1 text-white' />
                </div>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-5">
        {rooms.map((item) => {
          return (
            <Card className="py-4 bg-[#191C24]" key={item.id}>
              <CardHeader className="py-2">
                <Image
                  src={item.image}
                  width={270}
                  height={100}
                  className="object-cover rounded-xl sm:w-fit"
                  objectFit="cover"
                  alt="room"
                />
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col h-fit">
                <span className="text-cutomGold font-heading text-lg">
                  {item.title}
                </span>
                <div className='flex items-center gap-3'>
                    <label className='text-white font-heading text-medium font-semibold'>Status:</label>
                    {
                        item.isAvailable == false ? 
                        <span className='text-green-400 font-body text-medium'>Avialable</span>: 
                        <span className='text-red-400 font-body text-medium'>Unaviable</span>
                    }
                    
                </div>
                <div className='flex items-center gap-3'>
                    <label className='text-white font-heading text-medium font-semibold'>Price:</label>
                    <span className='text-white font-body text-medium'>{item.price} Coins</span> 
                </div>
                <div className='flex justify-end'>
                    <button className='bg-gray-400 flex items-center gap-2 text-sm font-body font-medium text-black px-3 py-1 rounded-xl'>
                      <AiOutlineEdit />
                      Edit
                    </button>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
        </div>
    </Layout>
  )
}

export default page