// app/page.tsx (or any other server component route)

import React from 'react';
import { signIn } from '@/app/actions/sign-in';
import { signOut } from './actions/sign-out';
import { auth } from './auth';
import Topheader from './ui/Topheader';
import TopicCreateForm from './Posts/TopicCreateForm';

const Page = async () => {
  const session = await auth();
  console.log("session",session)

  return (
    <>
   
    {/* <div>
      <form action={signIn}>
        <button type="submit">Sign In</button>
      </form>

      <form action={signOut}>
        <button type="submit">Sign Out</button>
      </form>

      {session?.user && (
        <div>
          <h2>User Info:</h2>
          <pre>{JSON.stringify(session.user, null, 2)}</pre>
        </div>
      )}
     
    </div> */}
    <div>
 <Topheader/>
 <TopicCreateForm/>
    </div>
    </>
  );
};

export default Page;
