import Link from 'next/link';
import { auth, UserButton } from '@clerk/nextjs';

function Header() {
  const { userId } = auth();
  return (
    <>
      <div className="nav bg-blue-700 py-4 px-6 flex item-center justify-between mb-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg uppercase font-bold text-white">
              Clerk App
            </div>
          </Link>
        </div>
        <div className="text-white flex item-center">
          {!userId && (
            <>
              <Link
                href="sign-in"
                className="text-gray-300 hover:text-white mr-4"
              >
                Sign In
              </Link>
              <Link
                href="sign-up"
                className="text-gray-300 hover:text-white mr-4"
              >
                Sign Up
              </Link>
            </>
          )}
          {userId && (
            <Link
              href="profile"
              className="text-gray-300 hover:text-white mr-4 flex items-center"
            >
              Profile
            </Link>
          )}
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
