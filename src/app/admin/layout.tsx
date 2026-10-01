'use client'

import { AdminLayout } from '@/components/admin/AdminLayout'

export const metadata = { title: 'Admin | Shubh Consultancy Services' }

export default function RootAdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>
}
