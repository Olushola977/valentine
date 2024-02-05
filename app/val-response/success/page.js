export default function Home() {
  const numberOfBalloons = 10;

  return (
    <main className="flex h-screen w-full items-center justify-center bg-love">
        <div className="flex flex-col md:flex-row align-center items-center w-full h-full">
          <div className="w-1/2 p-3">
          <p className="text-white text-2xl">Your &apos;yes&apos; has painted the skies with the hues of romance. Excited for a Valentine&apos;s Day filled with love, laughter, and endless joy with you by my side. 💖</p>
          </div>
          
          <div className="w-1/2 h-full">
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
