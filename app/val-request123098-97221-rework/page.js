'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [scale, setScale] = useState(1.5);
  const [retryText, setRetryText] = useState(0);

  const convincingTexts = [
    'No',
    'Are you Sure? 🤔',
    'Really Sure? 🤨',
    'Think Again...🤯',
    'Last Chance ⌛️',
    'Surely Not! 😮',
    'You might regret this 😬',
    'Give it another thought 🤔',
    'Are you absolutely certain? 🤨',
    'This could be a mistake 😬',
    'Have a heart 💖',
    `Don't be so cold ❄️`,
    'Change of heart? 💓',
    `Wouldn't you reconsider? 🤔`,
    'Is that your final answer? 🤨',
    `You're breaking my heart 💔`
  ]

  const handleRejection = () => {
    const retryTextCount = convincingTexts.length;
    const number = Number(retryText + 1)
    const newFontSize = (scale + 0.3).toFixed(2);
    setScale(Number(newFontSize))
    if (number < retryTextCount) {
      setRetryText(Number(retryText + 1))
    } else {
      setRetryText(0)
      setScale(1.5)
      router.push('/val-response/fail')
    }
  }
  return (
    <main className={`flex h-screen w-full items-center justify-center home`}>
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-3xl text-slate-600 font-bold">Will you be my Valentine?</h2>
          <div className="min-w-1/2 mx-auto flex flex-col gap-3 md:flex-row md:gap-0 overflow-x-hidden justify-evenly mt-5 items-center">
            <button
              style={{ fontSize: `${scale}rem` }}
              className={`text-white rounded-sm min-w-24 min-h-16 bg-green-500 p-3 transition-all duration-300 delay-100 ease-in-out`}
              onClick={() => router.push('/val-response/success')}>Yes</button>
            <button style={{ fontSize: `1.2rem` }} className="transition-all duration-300 delay-100 ease-in-out text-white rounded-sm bg-red-500 min-w-24 min-h-16 text-wrap p-3 inline-block" onClick={handleRejection}>{convincingTexts[retryText]}</button>
          </div>

        </div>
    </main>
  );
}
