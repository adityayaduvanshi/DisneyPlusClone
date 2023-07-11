'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { AiFillHome, AiOutlinePlus } from 'react-icons/ai';
import { BiMovie, BiSearch } from 'react-icons/bi';
import { Logo } from './logo';
import { BsChevronDown } from 'react-icons/bs';
import MobileMenu from '@/components/MobileMenu';
import AccountMenu from '@/components/AccountMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAccountOpen, setAccountOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((current) => !current);
  }, []);
  const toggleAccount = useCallback(() => {
    setAccountOpen((current) => !current);
  }, []);

  const routes = [
    {
      href: '/',
      icon: <AiFillHome className="h-4 w-4 text-white mr-2" />,
      label: 'Home',
    },
    {
      href: '/',
      icon: <AiOutlinePlus className="h-4 w-4 text-white mr-2" />,
      label: 'Watchlist',
    },
    {
      href: '/',
      icon: <BiMovie className="h-4 w-4 text-white mr-2" />,
      label: 'Movies',
    },
  ];

  return (
    <div className=" fixed top-0 left-0 right-0 h-16 bg-[#090b13] flex justify-between items-center py-0 px-9 leading-tight z-10">
      <Link href="/" className="text-3xl cursor-pointer font-bold text-white">
        <Logo height={100} width={100} />
      </Link>
      <div className="hidden  md:flex items-center flex-nowrap h-full  flex-end m-0 p-0  relative mr-auto ml-7">
        {routes.map((route) => (
          <Link
            className="flex items-center px-2 "
            href={route.href}
            key={route.href}
          >
            {route.icon}{' '}
            <span className="text-white text-sm leading-tight py-2 hover:underline hover:underline-offset-8">
              {route.label}
            </span>
          </Link>
        ))}
      </div>
      <div
        onClick={toggleMenu}
        className="md:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer"
      >
        <p className="text-white text-sm">Browse</p>
        <BsChevronDown className="text-white  transition " />
        <MobileMenu visible={isOpen} />
      </div>
      <div className="flex flex-row ml-auto gap-7 items-center">
        <div className="text-gray-200  hover:text-gray-300 cursor-pointer">
          <BiSearch />
        </div>
        <div className="flex flex-row items-center gap-2 cursor-pointer relative ">
          <div
            onClick={toggleAccount}
            className="w-6 h-6 lg:w-10 lg:h-10 rounded-full overflow-hidden"
          >
            <img
              alt="im"
              src="/images/default-blue.png"
              // fill
              className="rounded-full"
            />
          </div>
          <AccountMenu visible={isAccountOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
