import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Avataar = () => {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://github.com/Pransh013.png" />
        <AvatarFallback>PV</AvatarFallback>
      </Avatar>
    </>
  );
};

export default Avataar;
