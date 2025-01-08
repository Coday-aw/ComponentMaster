import Buttons from "./Buttons";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-4 m-5 mx-8 ">
      <Logo />
      <Buttons />
    </div>
  );
};
export default Navbar;
