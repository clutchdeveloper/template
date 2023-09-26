import React from 'react'

function PlanCard() {
  return (
    <div className="w-auto flex flex-col ">
      <div className="w-auto flex flex-col px-8 py-10 items-center bg-slate-900 rounded-lg pb-10 text-white  space-y-8 justify-center ">
        <img src="#" alt="image" />
        <h3 className="font-semibold text-2xl uppercase mb-[125px]">Starter Pack</h3>
        <div className="bg-slate-800 p-6 rounded-md w-full flex flex-col items-center">
          <p className="font-bold text-[#666d7a]">Price:</p>
          <span className="font-semibold text-yellow-500 text-lg">0.0005BTC</span>
        </div>
        <div className="border-b-[2px] border-[#3d434f] w-full flex flex-col items-center">
          <p className="font-semibold text-[#666d7a]">Duration:</p>
          <h4 className="pb-3 font-semibold">For 1month(s)</h4>
        </div>
        <div className="border-b-[2px] border-[#3d434f] w-full flex flex-col items-center">
          <p className="font-semibold text-[#666d7a]">Referral:</p>
          <h4 className="pb-3 font-semibold">2%</h4>
        </div>
        <div className="border-b-[2px] border-[#3d434f] w-full flex flex-col items-center mb-10">
          <p className="font-semibold text-[#666d7a]">Hashrate:</p>
          <h4 className="pb-3 font-semibold">5Ph/s</h4>
        </div>
      </div>
    </div>
  );
}

export default PlanCard