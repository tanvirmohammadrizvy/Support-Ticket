// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Dashboard',
    items: [
      { title: 'Dashboard', path: '/dashboard', icon: ICONS.dashboard },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Management',
    items: [
      {
        title: 'user',
        path: '/users',
        icon: ICONS.user,
        children: [
          { title: 'Users', path: '/users/all' },
          { title: 'Create User', path: '/users/create-user' },
          { title: 'Five', path: '/user/five' },
          { title: 'Six', path: '/user/six' },
        ],
      },
    ],
  },
];

export default sidebarConfig;
