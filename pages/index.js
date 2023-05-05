import Head from "next/head";
import Image from "next/image";

import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import TopCards from "@/components/TopCards";
import RecentRegister from "@/components/RecentRegister";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs Dashboard App</title>
      </Head>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-2 grid-cols-1 gap-4">
          <BarChart />
          <RecentRegister />
        </div>
      </main>
    </>
  );
}
