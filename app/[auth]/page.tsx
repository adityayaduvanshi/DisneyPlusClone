// 'use client';
import { signOut } from 'next-auth/react';
import { Logo } from '../components/logo';
import SignIn from './components/SignIn';
import getCurrentUser from '../actions/getCurrentUser';
import { redirect } from 'next/navigation';

const Authpage = async () => {
  const currentUser = getCurrentUser();

  return (
    <div className="relative h-screen w-full bg-[url('/images/login-background.jpg')] bg-no-repeat bg-fixed bg-cover">
      <div className="flex  items-center px-2 sm:px-12 justify-between">
        <Logo height={100} width={140} />
        {/* <div onClick={() => signOut()}>Sign In</div> */}
      </div>
      <div className="flex justify-center items-center py-20">
        <SignIn />
      </div>
    </div>
  );
};

export default Authpage;
