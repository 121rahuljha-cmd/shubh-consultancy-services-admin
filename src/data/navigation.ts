export const adminNav = [
  { title: 'Dashboard', href: '/admin/dashboard', icon: 'LayoutDashboard' },
  { title: 'Services', href: '/admin/services', icon: 'BriefcaseBusiness', children: [
    { title: 'All Services', href: '/admin/services' },
    { title: 'Add Service', href: '/admin/services/new' },
    { title: 'Categories', href: '/admin/services/categories' },
  ] },
  { title: 'Tasks', href: '/admin/tasks', icon: 'ClipboardList', children: [
    { title: 'All Tasks', href: '/admin/tasks' },
    { title: 'Add Task', href: '/admin/tasks/new' },
    { title: 'Assign Task', href: '/admin/tasks/assign' },
    { title: 'Task Calendar', href: '/admin/tasks/calendar' },
  ] },
  { title: 'Team', href: '/admin/team/users', icon: 'Users', children: [
    { title: 'Users', href: '/admin/team/users' },
    { title: 'Employees', href: '/admin/team/employees' },
    { title: 'Sales Team', href: '/admin/team/sales' },
    { title: 'Service Team', href: '/admin/team/service' },
  ] },
  { title: 'Clients', href: '/admin/clients', icon: 'Building2' },
  { title: 'Licence', href: '/admin/licence', icon: 'ShieldCheck' },
  { title: 'DSC', href: '/admin/dsc', icon: 'FileCheck2' },
  { title: 'Reports / Analytics', href: '/admin/reports', icon: 'BarChart3', children: [
    { title: 'Licence Report', href: '/admin/reports/licence' },
    { title: 'Service Team Report', href: '/admin/reports/service-team' },
    { title: 'Sales Team Report', href: '/admin/reports/sales-team' },
    { title: 'Task Report', href: '/admin/reports/tasks' },
    { title: 'Revenue Report', href: '/admin/reports/revenue' },
  ] },
  { title: 'Settings', href: '/admin/settings', icon: 'Settings' },
]
