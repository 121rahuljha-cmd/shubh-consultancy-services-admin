import { AdminLayout } from '@/components/admin/AdminLayout'

export const metadata = { title: 'Admin | Shubh Consultancy Services' }

export default function AdminLayoutPage({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>
}
