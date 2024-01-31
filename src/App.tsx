import Link from "./components/Link";

function App() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="md:min-w-[475px] md:max-w-[700px] lg:max-w-[700px] rounded-lg bg-dark-grey space-y-6 flex flex-col p-10">
        <img
          src="avatar-jessica.jpeg"
          alt="Jessica"
          className="rounded-full w-[75px] h-[75px] md:w-[125px] md:h-[125px] self-center"
        />
        <div className="font-bold text-center flex flex-col gap-2">
          <h1 className="md:text-3xl text-xl">Jessica Randall</h1>
          <span className="text-limey text-sm ">London, United Kingdom</span>
        </div>
        <p className="text-center text-sm">&quot;Front-end developer and avid reader. &quot;</p>
        <div className="flex flex-col gap-3 md:gap-5">
          <Link href="https://github.com/pawix135">GitHub</Link>
          <Link href="https://github.com/pawix135">Frontend Mentor</Link>
          <Link href="https://github.com/pawix135">LinkedIn</Link>
          <Link href="https://github.com/pawix135">Twitter</Link>
          <Link href="https://github.com/pawix135">Instagram</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
