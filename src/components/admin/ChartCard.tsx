import { cn } from '@/lib/utils'
export function ChartCard({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) { return <section className={cn('rounded-2xl border border-slate-200 bg-white p-5 shadow-sm', className)}><h2 className="text-base font-bold text-slate-900">{title}</h2><div className="mt-4">{children}</div></section> }
