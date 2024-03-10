import { useState } from "react";
import { Assets } from "../../assets/Assets";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div
        className={`pt-6 pl-6 h-screen bg-secondary dark:bg-[#1E1F20] relative ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* top */}
        <div>
          <img
            src={Assets.Menu}
            alt=""
            className="dark:invert w-5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="mt-16 -ml-2 rounded-full py-3 px-4 max-w-fit bg-white dark:bg-[#1A1A1C] flex items-center gap-5">
            <img src={Assets.Plus} alt="" className="dark:invert w-3" />
            {isOpen && (
              <p className="dark:text-[#666667] text-sm font-semibold">
                New Chat
              </p>
            )}
          </div>
          {isOpen && (
            <div className="mt-5 flex flex-col gap-4">
              <p>Recent</p>
              <div className="flex items-center gap-4">
                <img
                  src={Assets.Message}
                  alt=""
                  className="dark:invert brightness-110 w-7"
                />
                <p className="text-sm font-semibold dark:text-[#d2d2d2]">
                  What is React...
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={Assets.Message}
                  alt=""
                  className="dark:invert brightness-110 w-7"
                />
                <p className="text-sm font-semibold dark:text-[#d2d2d2]">
                  What is React...
                </p>
              </div>
            </div>
          )}
        </div>
        {/* bottom */}
        <div className="mt-48 flex flex-col gap-5 absolute bottom-10">
          <div className="flex items-center gap-4">
            <img src={Assets.Question} alt="" className="dark:invert w-5" />
            {isOpen && (
              <p className="text-sm font-semibold dark:text-[#d2d2d2]">Help</p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <img src={Assets.History} alt="" className="dark:invert w-5" />
            {isOpen && (
              <p className="text-sm font-semibold dark:text-[#d2d2d2]">
                History
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <img src={Assets.Setting} alt="" className="dark:invert w-5" />
            {isOpen && (
              <p className="text-sm font-semibold dark:text-[#d2d2d2]">
                Setting
              </p>
            )}
          </div>
          {isOpen && (
            <div className="flex gap-2 -ml-3 max-w-fit items-center bg-white dark:bg-[#47494A] px-3 py-2 rounded-xl">
              <img
                src={Assets.Logo}
                alt=""
                className="filter hue-rotate-90 w-6"
              />
              <p className="text-xs font-semibold dark:text-[#d2d2d2]">
                Upgrade to Gemini Advanced
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
