import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public routes
const PublicRoute = [
  { path: '/', element: Home },
  { path: '/following', element: Following },
  { path: '/profile', element: Profile },
  { path: '/upload', element: Upload, layout: HeaderOnly },
  { path: '/search', element: Search, layout: null },
];

const PrivateRoute = [];

export { PublicRoute, PrivateRoute };
