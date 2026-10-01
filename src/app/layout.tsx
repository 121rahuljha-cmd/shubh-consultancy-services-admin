export const metadata = {
  title: 'Shubh Consultancy Services | Admin Panel',
  description: 'Internal admin panel for Shubh Consultancy Services business operations, clients, services, tasks, licences and reports.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
