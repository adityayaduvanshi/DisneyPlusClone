import getCurrentUser from '../actions/getCurrentUser';
import { redirect } from 'next/navigation';
import ClientOnly from '../components/ClientOnly';
import Profile from './components/Profile';

const Profilepage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect('/auth');
  }
  return (
    <ClientOnly>
      <div className="flex items-center  h-full justify-center">
        <div className="flex  flex-col">
          <h1 className="text-3xl md:text-6xl text-white  text-center">
            Who is watching?
          </h1>
          <Profile name={currentUser.name} />
        </div>
      </div>
    </ClientOnly>
  );
};

export default Profilepage;
