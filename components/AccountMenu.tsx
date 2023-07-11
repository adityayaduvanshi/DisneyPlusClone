'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56  absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            src="/images/default-blue.png"
            alt="profile"
            width={40}
            height={40}
          />
          <p className="text-white text-sm group-hover/item:underline">
            Username
          </p>
        </div>
        <hr className="bg-gray-500 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-white text-sm text-center  hover:underline"
        >
          Sign out of Disney+
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
