import type { NotificationItem } from '@/types'

export const notifications: NotificationItem[] = [
  { id: 'N-1001', title: 'New task assigned', message: 'Task T-1001 is assigned to Seema Gupta.', time: '2 mins ago', read: false, type: 'task' },
  { id: 'N-1002', title: 'Task overdue', message: 'Task T-1004 is overdue for Northwind Logistics.', time: '18 mins ago', read: false, type: 'task' },
  { id: 'N-1003', title: 'Licence expiring soon', message: 'GST registration for Satyam Traders expires in 30 days.', time: '1 hour ago', read: false, type: 'licence' },
  { id: 'N-1004', title: 'New client added', message: 'A new client, Blue Stone, has been created.', time: '3 hours ago', read: true, type: 'client' },
  { id: 'N-1005', title: 'Payment received', message: 'Payment of ₹18,500 received from Maya Interiors.', time: '5 hours ago', read: true, type: 'payment' },
  { id: 'N-1006', title: 'Service updated', message: 'GST Return Filing pricing has been updated.', time: 'Yesterday', read: true, type: 'service' },
]
