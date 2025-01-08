import { LuComponent } from "react-icons/lu";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-blue-500 p-2 rounded-lg">
        <LuComponent size={30} color="white" />
      </div>
      <div className="flex gap-1 text-2xl">
        <span className="text-blue-500 font-bold">Component</span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
};
export default Logo;
