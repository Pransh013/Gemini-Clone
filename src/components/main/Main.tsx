import { TriangleDownIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "../mode-toggle";
import { useContext, useState } from "react";
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
import { Context } from "@/contexts/Context";
import Avataar from "./Avatar";
import Loader from "../Loader";

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

const Main = () => {
  const [open, setOpen] = useState(false);

  const { recent, showResult, onSent, input, setInput, resultData, loading } =
    useContext(Context);

  return (
    <>
      <div className="w-full h-screen flex-1 relative overflow-hidden">
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
          <div className="flex gap-6 items-center">
            <Avataar />
            <ModeToggle />
          </div>
        </div>

        {/* main  */}
        <div className="w-full px-52 h-full">
          {showResult ? (
            <div className="flex flex-col gap-12 h-3/4 cws overflow-y-scroll">
              <div className="flex gap-4 items-center">
                <Avataar />
                <p>{recent}</p>
              </div>
              <div className="flex items-center gap-4 relative">
                <img
                  src={Assets.Logo}
                  alt="logo"
                  className="w-8 absolute left-1 top-0.5"
                />
                {loading ? (
                  <Loader />
                ) : (
                  <p className="pl-12 pt-2">{resultData}</p>
                )}
              </div>
            </div>
          ) : (
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
          )}
          <div className="mt-32 w-2/3 absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className="w-full flex h-16 bg-muted dark:bg-[#1E1F20] gap-5 px-6 items-center rounded-full focus:bg-[#282A2C]">
              <input
                type="text"
                placeholder="Enter a prompt here"
                className="flex-1 h-full rounded-2xl bg-inherit pl-2 outline-none focus:outline-none"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <Images />
              <SendHorizontal onClick={() => onSent()} />
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
