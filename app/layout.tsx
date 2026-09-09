import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://alexso1212.github.io'),
  title: '认识一下 Alex',
  description: '一个认真、轻松的自我介绍。',
  openGraph: {
    title: '认识一下 Alex',
    description: '没有套路，想从一次舒服的对话开始。',
    type: 'website',
    images: [{ url: '/og.png', width: 1726, height: 911, alt: '认识一下 Alex' }],
  },
  twitter: { card: 'summary_large_image', title: '认识一下 Alex', description: '没有套路，想从一次舒服的对话开始。', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
