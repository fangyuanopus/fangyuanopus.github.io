import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "苏俊朋 | Personal Space",
  description: "苏俊朋的个人空间：记录公开项目、AI 工具、编程、逆向分析、接口机制和学习兴趣。",
  icons: {
    icon: "/favicon.svg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  )
}
