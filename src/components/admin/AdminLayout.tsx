import { Header } from '@/components/admin/Header'
import { Sidebar } from '@/components/admin/Sidebar.client'

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#f5f8ff]">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Header />
        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
