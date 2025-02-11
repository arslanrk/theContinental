import React from 'react'
import { FaBookJournalWhills } from "react-icons/fa6";
import { GiAndroidMask, GiAxeSword, GiBarracksTent } from "react-icons/gi";

const HeaderWidgets = () => {
  return (
    <div className='grid grid-cols-4 gap-5'>
        <div className='bg-[#191C24] rounded-lg p-5 flex items-center justify-between'>
            <GiAndroidMask color='#f3cc8a' size={40} />
            <div className='flex flex-col'>
                <span className='text-white font-heading'>Active Members</span>
                <span className='text-cutomGold text-center font-heading text-2xl font-semibold'>31,00</span>
            </div>
        </div>
        <div className='bg-[#191C24] rounded-lg p-5 flex items-center justify-between'>
            <GiBarracksTent color='#f3cc8a' size={40} />
            <div className='flex flex-col'>
                <span className='text-white font-heading'>Room Availability</span>
                <span className='text-cutomGold text-center font-heading text-2xl font-semibold'>26</span>
            </div>
        </div>
        <div className='bg-[#191C24] rounded-lg p-5 flex items-center justify-between'>
            <FaBookJournalWhills color='#f3cc8a' size={40} />
            <div className='flex flex-col'>
                <span className='text-white font-heading'>Pending Requests</span>
                <span className='text-cutomGold text-center font-heading text-2xl font-semibold'>26</span>
            </div>
        </div>
        <div className='bg-[#191C24] rounded-lg p-5 flex items-center justify-between'>
            <GiAxeSword color='#f3cc8a' size={40} />
            <div className='flex flex-col'>
                <span className='text-white font-heading'>Assassin Availability</span>
                <span className='text-cutomGold text-center font-heading text-2xl font-semibold'>26</span>
            </div>
        </div>
    </div>
  )
}

export default HeaderWidgets