import type { Client } from '@/types'

export const clients: Client[] = [
  { id: 'CL-1001', name: 'Aarav Foodworks', businessName: 'Aarav Foodworks', mobile: '+91 98110 02030', email: 'sales@aaravfoodworks.in', services: ['FSSAI Basic Registration', 'Zomato Onboarding'], activeTasks: 2, completedTasks: 7, totalAmount: 225000, pendingAmount: 42000, status: 'Active' },
  { id: 'CL-1002', name: 'Satyam Traders', businessName: 'Satyam Traders', mobile: '+91 98663 11223', email: 'accounts@satyamtraders.in', services: ['GST Registration', 'GST Return Filing'], activeTasks: 1, completedTasks: 12, totalAmount: 180000, pendingAmount: 26000, status: 'Active' },
  { id: 'CL-1003', name: 'Orchid Wellness', businessName: 'Orchid Wellness', mobile: '+91 99321 45678', email: 'info@orchidwellness.in', services: ['Trademark Registration', 'MSME / Udyam Registration'], activeTasks: 3, completedTasks: 9, totalAmount: 310000, pendingAmount: 56000, status: 'Review' },
  { id: 'CL-1004', name: 'Northwind Logistics', businessName: 'Northwind Logistics', mobile: '+91 98251 44477', email: 'ops@northwindlogistics.in', services: ['IEC Registration', 'GST Export Refund Documentation'], activeTasks: 2, completedTasks: 15, totalAmount: 485000, pendingAmount: 76000, status: 'Active' },
  { id: 'CL-1005', name: 'Maya Interiors', businessName: 'Maya Interiors', mobile: '+91 97888 11234', email: 'hello@mayainteriors.in', services: ['Private Limited Company Registration', 'DSC'], activeTasks: 1, completedTasks: 6, totalAmount: 210000, pendingAmount: 32000, status: 'Active' },
  { id: 'CL-1006', name: 'Keshav Pharma', businessName: 'Keshav Pharma', mobile: '+91 97222 98765', email: 'care@keshavpharma.in', services: ['GST Registration', 'Drug License'], activeTasks: 4, completedTasks: 11, totalAmount: 360000, pendingAmount: 82000, status: 'Inactive' },
]
