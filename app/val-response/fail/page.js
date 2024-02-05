export default function Home() {
  return (
    <main className="flex h-full w-full items-center justify-center bg-blue-200">
        <div className="flex flex-col md:flex-row align-center items-center w-full">
          <div className="w-full md:w-1/2 p-5 md:p-3 order-2">
          <p className="text-white text-2xl">I respect your decision, though it feels like a gentle rain on the petals of my hopeful heart. Wishing you a Valentine&apos;s filled with happiness, even if not by my side. 💔☔️</p>
          </div>
          
          <div className="w-full md:w-1/2 order-1">
            <img
              alt="image"
              src={"https://media1.tenor.com/m/LuZ_0ZWFMAkAAAAC/sad-crying.gif"}
              className="w-full"
            />
          </div>
        </div>
    </main>
  );
}
