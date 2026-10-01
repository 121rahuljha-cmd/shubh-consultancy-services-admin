import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, BriefcaseBusiness, Building2, ClipboardList, FileCheck2, LayoutDashboard, Settings, ShieldCheck, Users } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { cn } from '@/lib/utils'

const icons = { LayoutDashboard, BriefcaseBusiness, ClipboardList, Users, Building2, ShieldCheck, FileCheck2, BarChart3, Settings }

export function Sidebar() {
  const pathname = usePathname()
  return <aside className="hidden h-screen w-64 shrink-0 flex-col bg-[#081b2d] text-white lg:flex">
    <div className="border-b border-white/10 px-5 py-5"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2d7ff7] text-lg font-bold">S</div><div><div className="text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">Shubh</div><div className="text-sm font-semibold">Consultancy Services</div></div></div></div>
    <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">{navItems.map((item) => { const Icon = item.icon ? icons[item.icon as keyof typeof icons] : null; const active = pathname === item.href || pathname.startsWith(`${item.href}/`); return <div key={item.title}><Link href={item.href} className={cn('flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition', active ? 'bg-[#2d7ff7] text-white' : 'text-blue-100/75 hover:bg-white/10 hover:text-white')}>{Icon && <Icon className="h-4 w-4" />}{item.title}</Link>{item.children && active && <div className="ml-4 mt-1 space-y-1 border-l border-white/15 pl-3">{item.children.map((child) => <Link key={child.href} href={child.href} className={cn('block rounded-lg px-2 py-1.5 text-xs', pathname === child.href ? 'bg-white/15 text-white' : 'text-blue-100/60 hover:text-white')}>{child.title}</Link>)}</div>}</div> })}</nav>
    <div className="border-t border-white/10 p-4 text-xs text-blue-100/50">Internal admin system<br />© 2026 Shubh Consultancy Services</div>
  </aside>
}
