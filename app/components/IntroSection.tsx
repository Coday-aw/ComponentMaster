const IntroSection = () => {
  return (
    <div className="text-center flex flex-col items-center gap-5 mt-32 mx-16 ">
      <p className="text-3xl font-semibold">
        {" "}
        <span className="text-blue-500">Componets</span> Master Helps You Save
        Your <span className="text-blue-500">Componets</span>
      </p>
      <p className="w-[400px] sm:w-[600px] font-semibold">
        Effortlessly organize your code snippets and components using tags,
        making it quick and easy to find exactly what you need. Spend less time
        searching through code and more time being productive—save and
        streamline your work efficiently!{" "}
      </p>
      <button className="border border-blue-500 p-2 px-10 font-semibold rounded-lg text-blue-500 hover:bg-blue-500   hover:text-white">
        Get Started
      </button>
    </div>
  );
};
export default IntroSection;
