import NextAuth from 'next-auth';
import Providers from 'next-auth/providares';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: '',
      clientSecret: '',
    }),
  ],
});
