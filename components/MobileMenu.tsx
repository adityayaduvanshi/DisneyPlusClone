interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-[#090b13] flex w-[80%]  absolute top-16 right-0 py-5  flex-col border-2 border-gray-900  ">
      <div className="flex flex-col gap-4 ">
        <div className="px-3 text-center text-white hover:underline hover:underline-offset-4">
          Home
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
