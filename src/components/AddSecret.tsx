import "../style.css";
import { Storage } from "@plasmohq/storage";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const AddSecret = () => {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    (async () => {
      let activeUrl = await chrome.tabs.query({ active: true });
      setActiveTab(new URL(activeUrl[0].url).hostname);
    })();
  }, []);

  return (
    <div className="h-full w-full bg-[#2E3654] rounded-md p-3 pb-1 box-border">
      <div className="h-full">
        <div className=" h-1/6">
          <label className=" h-1/3 text-[#828CAE]">URL</label>
          <input
            type="text"
            className="w-full h-2/3 bg-[#2E3654] text-base pl-4 text-white border border-[#4C598B] rounded-3xl focus:outline-none"
            value={activeTab}
          />
        </div>
        <div className="h-1/6 mt-2">
          <label className="text-[#828CAE] h-1/3">User Name</label>
          <div className="w-full h-2/3">
            <input
              type="text"
              className="w-10/12 h-full  bg-[#2E3654] text-base pl-4 text-white border border-[#4C598B] rounded-3xl focus:outline-none"
              placeholder="Enter value"
            />
            <label className="relative inline-flex items-center cursor-pointer ml-2">
              <input type="checkbox" value="" className="sr-only peer " />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="h-1/6 mt-2">
          <label className="text-[#828CAE] h-1/3">Password</label>
          <div className="w-full h-2/3">
            <input
              type="text"
              className="w-10/12 h-full bg-[#2E3654] text-base pl-4 text-white border border-[#4C598B] rounded-3xl focus:outline-none"
              placeholder="Enter value"
            />
            <label className="relative inline-flex items-center cursor-pointer ml-2 ">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="h-[30%] mt-2 mb-1">
          {/* <div className=" h-4/12 flex justify-center items-center bg-[#3A4468] border border-dashed rounded-lg border-[#4C598B] mb-2">
                        <button className="">
                            <Icon icon="ic:round-add" className="text-[#828CAE] text-xl" /> 
                        </button>
                    </div> */}
          <div className="h-full">
            <textarea
              className="h-full w-full bg-[#2E3654] text-sm pl-2 pt-2 placeholder-[#828CAE] text-white border border-[#4C598B] rounded focus:outline-none"
              placeholder="Enter description about the secret"
            />
          </div>
        </div>

        <div className=" h-auto mt-0 flex justify-end">
          <button className="bg-[#4E46DC] px-4 py-2 rounded-3xl text-white text-bold">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSecret;
