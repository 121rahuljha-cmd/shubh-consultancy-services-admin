import type { User } from '@/types'

export const users: User[] = [
  { id: 'USR-1001', name: 'Ankit Sharma', role: 'Admin', designation: 'Operations Head', department: 'Management', serviceSkill: 'All Services', tasks: 28, recurring: true, phone: '+91 98765 43210', email: 'ankit@shubhconsultancy.in', status: 'Active' },
  { id: 'USR-1002', name: 'Riya Verma', role: 'Employee', designation: 'Senior Analyst', department: 'Compliance', serviceSkill: 'FSSAI / GST', tasks: 14, recurring: true, phone: '+91 98123 45678', email: 'riya@shubhconsultancy.in', status: 'Active' },
  { id: 'USR-1003', name: 'Nitin Pandey', role: 'Sales', designation: 'Business Development Executive', department: 'Sales', serviceSkill: 'Company / LLP', tasks: 23, recurring: true, phone: '+91 98989 11223', email: 'nitin@shubhconsultancy.in', status: 'Active' },
  { id: 'USR-1004', name: 'Seema Gupta', role: 'Service Team', designation: 'Case Manager', department: 'Service', serviceSkill: 'Trademark / ITR', tasks: 18, recurring: true, phone: '+91 98100 99887', email: 'seema@shubhconsultancy.in', status: 'Active' },
  { id: 'USR-1005', name: 'Rahul Mehta', role: 'Manager', designation: 'Team Lead', department: 'Operations', serviceSkill: 'All Services', tasks: 31, recurring: true, phone: '+91 98210 44556', email: 'rahul@shubhconsultancy.in', status: 'Active' },
  { id: 'USR-1006', name: 'Poonam Tiwari', role: 'Employee', designation: 'Document Executive', department: 'Documentation', serviceSkill: 'Legal Documentation', tasks: 9, recurring: false, phone: '+91 97654 32109', email: 'poonam@shubhconsultancy.in', status: 'Inactive' },
]
