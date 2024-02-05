export default function Home() {
  const numberOfBalloons = 10;

  return (
    <main className={`flex h-screen w-full items-center justify-center bg-blue-200`}>
        <div className="flex flex-col md:flex-row align-center items-center w-full">
          <div className="w-1/2 p-3">
          <p className="text-white text-2xl">I respect your decision, though it feels like a gentle rain on the petals of my hopeful heart. Wishing you a Valentine's filled with happiness, even if not by my side. 💔☔️</p>
          </div>
          
          <div className="w-1/2">
            <img
              alt="image"
              src={"https://media1.tenor.com/m/LuZ_0ZWFMAkAAAAC/sad-crying.gif"}
              className="w-full"
            />
          </div>
          
          {/* <div className="absolute flex justify-between w-full flex-wrap">
            {[...Array(numberOfBalloons)].map((_, index) => (
              <div key={index} className="balloon" style={{ animationDuration: `${index < 5 ? index + 1.5 : index / 2}s` }}></div>
            ))}
          </div> */}
        </div>
    </main>
  );
}