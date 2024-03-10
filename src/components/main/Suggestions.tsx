type Card = {
  text: string;
  icon: React.ReactNode;
};

const Suggestions = ({ text, icon }: Card) => {
  return (
    <div className="w-[12.5rem] h-[12.5rem] p-4 bg-muted dark:bg-[#1E1F20] rounded-lg relative cursor-pointer">
      <p>{text}</p>
      <div className="absolute right-3 bottom-3 h-12 flex items-center justify-center w-12 rounded-full bg-white dark:bg-[#09090B]">
        {icon}
      </div>
    </div>
  );
};

export default Suggestions;
