'use client'

import useWindowSize from "@rooks/use-window-size"

export default function Home() {
  const { innerWidth } = useWindowSize();
  const numberOfBalloons = innerWidth < 999 ? 6 : 10;

  return (
    <main className="flex h-full w-full items-center justify-center bg-love">
        <div className="flex flex-col md:flex-row align-center items-center w-full h-full">
          <div className="w-full md:w-1/2 p-5 md:p-3 order-2">
          <p className="text-white text-2xl">Your &apos;yes&apos; has painted the skies with the hues of romance. Excited for a Valentine&apos;s Day filled with love, laughter, and endless joy with you by my side. 💖</p>
          </div>
          
          <div className="w-full md:w-1/2 order-1">
            <img
              alt="image"
              src={"https://media1.tenor.com/m/PweWUNx9saMAAAAC/love-friends.gif"}
              className="w-full"
              style={{height: '100%', objectFit: 'cover'}}
            />
          </div>
          
          <div className="absolute flex justify-between w-full flex-wrap">
            {[...Array(numberOfBalloons)].map((_, index) => (
              <div key={index} className="balloon" style={{ animationDuration: `${index < 5 ? index + 1.5 : index / 2}s` }}></div>
            ))}
          </div>
        </div>
    </main>
  );
}
