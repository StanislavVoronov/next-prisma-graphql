import Navbar from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-4xl py-8 px-4 lg:px-0">{children}</div>
    </>
  );
}
