export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/pre-award',
    title: 'Pre-Award',
    type: 'sub',
    icontype: 'fas fa-certificate text-orange',
    collapse: 'pre-award',
    isCollapsed: true,
    children: [
      { path: 'announcement-calls', title: 'Announcement Calls', type: 'link' },
      { path: 'applicant-match-up', title: 'Applicant Match-up', type: 'link' },
      { path: 'proposal-management', title: 'Proposal Management', type: 'link' },
      { path: 'grant-contract-management', title: 'Grant and Contract Management', type: 'link' },
      { path: 'account-management', title: 'Account Management', type: 'link' },
    ]
  },
  {
    path: '/admin/post-award',
    title: 'Post-Award',
    type: 'sub',
    icontype: 'fa fa-trophy text-green',
    collapse: 'post-award',
    isCollapsed: true,
    children: [
      { path: 'grant-monitoring', title: 'Grant Monitoring', type: 'link' },
      { path: 'extension-closure', title: 'Extension and Closure', type: 'link' },
      { path: 'report', title: 'Report', type: 'link' },
    ]
  },
  {
    path: '/admin/system-management',
    title: 'System Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'system-management',
    isCollapsed: true,
    children: [
      { path: 'user-control', title: 'User Control', type: 'link' },
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' }
    ]
  },
  // {
  //   path: '/admin/management',
  //   title: 'Management',
  //   type: 'sub',
  //   icontype: 'fas fa-file-invoice text-pink',
  //   collapse: 'management',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
  //     { path: 'user', title: 'User', type: 'link' }
  //   ]
  // },
  // {
  //   path: '/admin/report',
  //   title: 'Reporting',
  //   type: 'link',
  //   icontype: 'fas fa-chart-bar text-red'
  // },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];