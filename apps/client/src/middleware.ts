import createMiddleware from 'next-intl/middleware';
 
const locales = ['en', 'fr', 'de'];

export default createMiddleware({
  locales: locales,
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', `/(en|fr|de)/:path*`]
};