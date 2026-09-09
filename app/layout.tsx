import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://alexso1212.github.io'), title: '认识一下 Vincent', description: '一张关于 Vincent 怎样生活、怎样喜欢一个人的小地图。',
  openGraph: { title: '认识一下 Vincent', description: '认真生活，也认真等一场相遇。', type: 'website', images: [{ url: '/og.png', width: 1726, height: 911, alt: '认识一下 Vincent' }] },
  twitter: { card: 'summary_large_image', title: '认识一下 Vincent', description: '认真生活，也认真等一场相遇。', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
