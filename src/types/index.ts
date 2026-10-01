export type ServiceStatus = 'Active' | 'Inactive' | 'Draft' | 'Popular' | 'Recently Added'

export type Service = {
  id: string
  name: string
  category: string
  recurring: boolean
  frequency: 'Monthly' | 'Quarterly' | 'Half-Yearly' | 'Yearly' | 'One Time'
  price: number
  governmentFee: number
  processingTime: string
  status: ServiceStatus
  description: string
}

export type ServiceCategory = {
  id: string
  name: string
  description: string
  servicesCount: number
  status: 'Active' | 'Inactive'
  createdOn: string
}

export type UserRole = 'Admin' | 'Employee' | 'Sales' | 'Service Team' | 'Manager'

export type User = {
  id: string
  name: string
  role: UserRole
  designation: string
  department: string
  serviceSkill: string
  tasks: number
  recurring: boolean
  phone: string
  email: string
  status: 'Active' | 'Inactive'
}

export type Client = {
  id: string
  name: string
  businessName: string
  mobile: string
  email: string
  services: string[]
  activeTasks: number
  completedTasks: number
  totalAmount: number
  pendingAmount: number
  status: 'Active' | 'Inactive' | 'Review'
}

export type TaskStatus =
  | 'Pending'
  | 'In Progress'
  | 'Sent for Review'
  | 'Pending from Client'
  | 'Pending from Department'
  | 'Overdue'
  | 'Completed'
  | 'Cancelled'

export type TaskRecord = {
  id: string
  partnerName: string
  partnerContact: string
  clientName: string
  clientContact: string
  businessName: string
  taskCategory: string
  serviceName: string
  salesPerson: string
  assignedEmployee: string
  priority: 'Low' | 'Medium' | 'High' | 'Urgent'
  status: TaskStatus
  taskDate: string
  dueDate: string
  overdue: boolean
  notes: string
}

export type LicenceStatus = 'Active' | 'Expiring Soon' | 'Expired'

export type Licence = {
  id: string
  taskId: string
  partnerName: string
  partnerNumber: string
  clientName: string
  clientNumber: string
  licenceType: 'Permanent Licence' | 'Renewal Licence'
  taskCategory: string
  serviceName: string
  licenceNumber: string
  issueDate: string
  expiryDate: string
  userId: string
  password: string
  attachments: string[]
  status: LicenceStatus
}

export type NotificationItem = {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: 'task' | 'licence' | 'client' | 'payment' | 'service'
}

export type ReportMetric = {
  title: string
  value: string
  trend?: string
}
