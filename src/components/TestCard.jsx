import React from 'react'

function TestCard() {
  return (
    <div className="p-7 bg-slate-900 rounded-lg text-white flex flex-col space-y-5">
      <p className="text-sm">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <div className="flex space-x-3 ">
        <div className="bg-white text-black h-[55px] w-[55px] rounded-full flex flex-col items-center justify-center font-extrabold text-3xl">H</div>
        <div>
          <h3>Big brother</h3>
          <h5 className="text-[#666d7a]">Web developer</h5>
          <span className="text-yellow-500 font-bold">#####</span>
        </div>
      </div>
    </div>
  );
}

export default TestCard