'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <div className="flex flex-col  justify-center container h-full gap-0  sm:w-2/5 w-4/5">
      <div className="w-100  h-24 sm:h-40 relative">
        <Image
          src="/images/cta-logo-one.svg"
          alt="home"
          fill
          className="w-100 h-100 object-contain"
        />
      </div>
      <div
        onClick={() => signIn('google', { callbackUrl: '/profiles' })}
        className=" text-center cursor-pointer text-white bg-blue-600 mb-3   text-2xl py-3 px-0 border-none rounded-md"
      >
        Get All There
      </div>
      <p className="text-white text-center font-light text-xs leading-6 ">
        Get Premier Access to Raya and the Last Dragon for an additional fee
        with a Disney+ subscription. As of 11/26/23, the price of Disney+ and
        The Disney Bundle will increase by $1.
      </p>
      <div className=" w-100 h-16 sm:h-20 relative">
        <Image
          src="/images/cta-logo-two.png"
          alt=""
          fill
          className="w-100 h-100 object-contain"
        />
      </div>
    </div>
  );
};

export default SignIn;
