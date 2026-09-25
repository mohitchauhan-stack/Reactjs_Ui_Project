const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 bg-black">
      <h4 className="px-5 py-2 bg-black rounded-full text-white uppercase">
        Target Audience
      </h4>
      <button className="px-5 py-2 bg-neutral-200  rounded-full text-black tracking-wider text-sm uppercase">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
