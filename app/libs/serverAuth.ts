import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

import prismadb from '@/app/libs/prismadb';

const serverAuth = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    throw new Error('Not signed in');
  }
  const currentUser = await prismadb.user.findUnique({
    where: { id: session.user.email },
  });
  if (!currentUser) {
    throw new Error('Not signed in');
  }
  return { currentUser };
};

export default serverAuth;
