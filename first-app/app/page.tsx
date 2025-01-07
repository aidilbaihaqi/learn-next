import Greeting from "./components/Greeting";

export default function Home() {
  return (
    <>
      <div>
        <Greeting />
        <p className="text-center my-2">This is homepage</p>
      </div>
    </>
  );
}
