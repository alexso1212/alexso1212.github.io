'use client';

import { Check, Copy, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const openingLine =
  '嗨，看到你觉得很有眼缘。比起一句话认识彼此，我做了个小小的自我介绍；如果你也愿意，我们从最近让你开心的一件小事聊起？';

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyOpeningLine() {
    await navigator.clipboard.writeText(openingLine);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fffaf5] text-[#2d2623]">
      <div className="page-glow" aria-hidden="true" />
      <section className="relative mx-auto max-w-[760px] px-5 pb-12 pt-7 sm:px-8 sm:pt-10">
        <header className="mb-10 flex items-center justify-between">
          <span className="font-serif text-lg italic tracking-tight text-[#9b5d55]">a little hello</span>
          <span className="rounded-full border border-[#eadbd1] bg-white/70 px-3 py-1 text-xs tracking-wide text-[#8b7368]">真诚认识，不赶时间</span>
        </header>

        <div className="intro-grid items-center gap-10">
          <div>
            <Badge className="mb-5 border-[#e9d1c6] bg-[#f7e2db] px-3 text-[#9b5147] shadow-none hover:bg-[#f7e2db]">
              <Heart className="size-3 fill-current" /> 在牵手认真打个招呼
            </Badge>
            <h1 className="font-serif text-[clamp(3.2rem,11vw,5.8rem)] leading-[0.92] tracking-[-0.065em] text-[#382b27]">你好，<br />我是 Alex。</h1>
            <p className="mt-6 max-w-md text-[17px] leading-8 text-[#66534c] sm:text-lg">
              没有准备套路，只想认真认识一个有趣的人。要是我们恰好都愿意多聊几句，那就从一次舒服的对话开始。
            </p>
          </div>

          <aside className="portrait-card relative mx-auto w-full max-w-[310px] overflow-hidden rounded-[2.2rem] p-6 text-white shadow-[0_24px_60px_rgba(123,71,59,0.22)]">
            <div className="absolute -right-10 -top-8 size-40 rounded-full bg-[#ffd4bc]/25 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 size-36 rounded-full bg-[#743b3c]/40 blur-2xl" />
            <div className="relative flex min-h-[310px] flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs">关于我</span>
                <Sparkles className="size-5 text-[#ffe2ba]" />
              </div>
              <div>
                <span className="font-serif text-[92px] leading-none tracking-[-0.11em] text-[#ffdfc8]">A</span>
                <p className="mt-3 max-w-[210px] text-sm leading-6 text-white/80">比起“条件匹配”，更相信两个人聊起来是不是自在。</p>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-12 border-y border-[#eaded6] py-8" aria-label="我期待的关系">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a27465]">我期待的相处</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['好好说话', '有分歧也愿意沟通，不玩猜心。'],
              ['保持好奇', '愿意分享小事，也愿意听彼此的世界。'],
              ['慢慢靠近', '不着急定义，但认真对待每一次见面。'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl bg-white/70 p-4 ring-1 ring-[#f1e5dc]">
                <h2 className="font-serif text-xl text-[#4a3530]">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#79665e]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-[#ead8cc] bg-white/80 p-6 shadow-[0_12px_40px_rgba(120,78,61,0.08)] sm:p-8">
          <MessageCircle className="size-6 text-[#bd7163]" />
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-[#422f2a]">如果你也想认识我</h2>
          <p className="mt-3 max-w-lg leading-7 text-[#705d56]">不用费心找一个完美开场。告诉我：最近让你觉得“今天还不错”的一件小事，是什么？</p>
          <Button onClick={copyOpeningLine} size="lg" className="mt-6 h-11 rounded-full bg-[#9f5c51] px-5 text-white hover:bg-[#84483f]">
            {copied ? <Check /> : <Copy />}
            {copied ? '已复制，去打个招呼吧' : '复制开场白'}
          </Button>
          <p className="mt-3 text-xs leading-5 text-[#9a8178]">复制后可以直接发到牵手聊天框，再按自己的语气改一改。</p>
        </section>

        <footer className="pt-9 text-center text-xs tracking-wide text-[#a48c82]">一段认识，从一句真话开始。</footer>
      </section>
    </main>
  );
}
