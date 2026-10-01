import type { User } from '@/types'

export const employees: User[] = [
  { id: 'EMP-201', name: 'Riya Verma', role: 'Employee', designation: 'Senior Analyst', department: 'Compliance', serviceSkill: 'FSSAI / GST', tasks: 14, recurring: true, phone: '+91 98123 45678', email: 'riya@shubhconsultancy.in', status: 'Active' },
  { id: 'EMP-202', name: 'Poonam Tiwari', role: 'Employee', designation: 'Document Executive', department: 'Documentation', serviceSkill: 'Legal Documentation', tasks: 9, recurring: false, phone: '+91 97654 32109', email: 'poonam@shubhconsultancy.in', status: 'Inactive' },
  { id: 'EMP-203', name: 'Amit Soni', role: 'Employee', designation: 'Compliance Executive', department: 'Compliance', serviceSkill: 'Trade License / MSME', tasks: 16, recurring: true, phone: '+91 99888 77441', email: 'amit@shubhconsultancy.in', status: 'Active' },
  { id: 'EMP-204', name: 'Nisha Nair', role: 'Employee', designation: 'Support Associate', department: 'Service', serviceSkill: 'GST / ITR', tasks: 13, recurring: true, phone: '+91 98555 66321', email: 'nisha@shubhconsultancy.in', status: 'Active' },
]
