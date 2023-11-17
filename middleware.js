import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({ publicRoutes: ['/', '/register'] }); // we define our public route

// block everything accept public routes
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
