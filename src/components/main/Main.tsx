import { TriangleDownIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "../mode-toggle";
import { useState } from "react";
import { Assets } from "../../assets/Assets";
import {
  Brush,
  CheckCircle2,
  Images,
  Lightbulb,
  MapPin,
  SendHorizontal,
} from "lucide-react";
import Suggestions from "./Suggestions";

const Main = () => {
  const [open, setOpen] = useState(false);

  const suggestions = [
    {
      text: "Give me a beginner's guide to an activity",
      src: <Brush />,
    },
    {
      text: "Help create a weekly meal plan for two",
      src: <Brush />,
    },
    {
      text: "What's the time it takes to walk to several landmarks",
      src: <MapPin />,
    },
    {
      text: "Explain what the keto diet is in simple terms",
      src: <Lightbulb />,
    },
  ];

  return (
    <>
      <div className="w-full h-screen flex-1">
        {/* Header  */}
        <div className="flex justify-between py-3.5 px-7">
          <div
            className="flex items-center gap-2 text-xl cursor-pointer relative"
            onClick={() => setOpen(!open)}
          >
            <p>Gemini</p>
            <TriangleDownIcon />
            {open && (
              <div className="absolute -left-4 -bottom-36 bg-secondary w-64 dark:bg-[#282A2C] flex flex-col gap-6 rounded-md px-3 py-5">
                <div className="flex items-center gap-2">
                  <img src={Assets.Logo} alt="logo" className="w-6" />
                  <div className="flex flex-1 justify-between items-center">
                    <p className="text-sm">Gemini</p>
                    <CheckCircle2 />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={Assets.Logo}
                    alt="logo"
                    className="w-6 filter hue-rotate-90"
                  />
                  <div className="text-sm flex flex-1 justify-between items-center">
                    <p className="text-nowrap text-[#989797]">
                      Gemini Advanced
                    </p>
                    <button className="px-3 py-2 dark:bg-[#1B1B1B] rounded-sm">
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* 393B3D */}
          <div className="flex gap-6 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/Pransh013.png" />
              <AvatarFallback>PV</AvatarFallback>
            </Avatar>
            <ModeToggle />
          </div>
        </div>

        {/* main  */}
        <div className="w-full px-52">
          <div className="pt-12">
            <h1
              className="text-6xl font-medium"
              style={{
                background:
                  "linear-gradient(to right, #4E82EE, #D96570, #D96570)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hello Pranshu
            </h1>
            <h1 className="text-6xl font-medium text-[#757474] dark:text-[#444746]">
              How can I help you today?
            </h1>
            <div className="flex justify-between pt-20">
              {suggestions.map((ele, idx) => (
                <Suggestions icon={ele.src} text={ele.text} key={idx} />
              ))}
            </div>
          </div>
          <div className="mt-32">
            <div className="w-full flex h-16 bg-muted dark:bg-[#1E1F20] gap-5 px-6 items-center rounded-full focus:bg-[#282A2C]">
              <input
                type="text"
                placeholder="Enter a prompt here"
                className="flex-1 h-full rounded-2xl bg-inherit pl-2 outline-none focus:outline-none"
              />
              <Images />
              <SendHorizontal />
            </div>
            <p className="text-sm dark:text-[#D2D2D2] text-center mt-3">
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
