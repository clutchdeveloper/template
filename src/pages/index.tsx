import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { api } from "@/utils/api";

import Navbar from "../components/Navbar";
import ComCard from "../components/ComCard";
import PlanCard from "../components/PlanCard";
import TestCard from "../components/TestCard";



export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const randomNumber = getRandomNumber();
  const items = [
    "James Witson withdrew $15,000",
    "Marie D. withdrew $170,000",
    "Stanbb withdrew $315,000",
    "Kelvin tyler withdrew $45,000",
    "Goego5 withdrew $315,000",
    "Harold44 withdrew $3,215,000",
    "Pius Den withdrew $500,000",
    "Petrov11 withdrew $77,000",
    "Rice F. deposits $1,170,000",
    "henryusa withdrew $705,000",
    "Talui  deposits $75,000",
    "larry54 deposits $354,000",
    "Yunpu withdrew $500,000",
    "dash frey withdrew $32,050",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, [items]);
  
  return (
    <>
      <Head>
        <title>Bitmine</title>
        <meta name="description" content="Bitmine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Navbar />
        <div>
          {isVisible && (
            <div className="h-15 fixed bottom-5 left-5 flex w-auto flex-col items-center justify-between space-x-3 rounded-md   border border-slate-800 bg-white p-1 text-black shadow-lg transition-all delay-150">
              <p className="text-sm">{items[currentIndex]}</p>
              <p className="text-sm font-semibold">
                #{new Date().getMilliseconds()}
              </p>
            </div>
          )}
        </div>
        <main className="min-h-screen w-full">
          <div className="container-xl flex h-full flex-col items-center justify-center ">
            <div>
              <h1 className="text-7xl font-bold">Bitnami</h1>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="mb-4 text-4xl font-semibold">
                Larget Crypto Minning Project{" "}
              </h3>
              <p className="text-md mb-4">Start bitcoin mining today</p>
              <button className="rounded-full bg-orange-400 px-4 py-2 text-white">
                Get Started
              </button>
            </div>
          </div>
        </main>
        <section className="w-full min-h-screen">
          <div className="container-xl flex h-full flex-col items-center justify-center ">
            <h3 className="mb-4 text-center text-5xl font-bold capitalize">
              The most trusted <br /> cryptocurrency platform
            </h3>
            <p className="mb-8 font-semibold">
              Here are a few reasons why you should choose us
            </p>
            <div className="grid items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ComCard />
              <ComCard />
              <ComCard />
              <ComCard />
            </div>
          </div>
        </section>
        <section className="my-8 w-full min-h-screen">
          <div className="container-xl flex h-full flex-col items-center justify-center">
            <h3 className="mb-4 text-center text-5xl font-bold capitalize">
              Investment <br /> Plan
            </h3>
            <p className="mb-8 font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio atque at optio vitae aut autem consequuntur error in
              consectetur obcaecati?
            </p>
            <div className="grid w-full  items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <PlanCard />
              <PlanCard />
              <PlanCard />
              <PlanCard />
            </div>
          </div>
        </section>
        <section className="my-8 w-full min-h-screen">
          <div className="container-xl flex h-full flex-col items-center justify-center">
            <h3 className="mb-4 text-center text-5xl font-bold capitalize">
              Frequent Asked questions
            </h3>
            <p className="mb-8 font-semibold">
              Turn on Round-up Rules and start saving up effortlessly. Whenever
              you make a purchase, Goals make it easy to save for the things you
              want or want to do. There’s no need for spreadsheets or extra apps
              to budget and track your money.
            </p>

            <h3>Build your savings without even trying.</h3>

            {/* widget goes here */}
          </div>
        </section>
        <section className="my-8 w-full min-h-screen">
          <div className="container-xl flex h-full flex-col items-center justify-center">
            <h3 className="mb-4 text-5xl font-bold capitalize">
              Diversify your investment porfolio
            </h3>
            <p className="mb-4 p-1">
              Bitclub is fully legit and officially registered company whose
              activities are regulated by the financial control authorities
              under the jurisdiction of the United Kingdom. Accepting our terms
              of coorperation, you can be absolutely sure of getting a
              guaranteed profit and full return on your investment.
            </p>
            <div className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:space-x-10">
              <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-6xl font-semibold text-yellow-500">14M+</h1>
                <h3 className="text-4xl font-semibold md:text-xl lg:text-sm">
                  Total asset
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-6xl font-semibold text-yellow-500">13+</h1>
                <h3 className="text-center text-4xl font-semibold md:text-xl lg:text-sm">
                  Years of <br />
                  experience
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-6xl font-semibold text-yellow-500">244+</h1>
                <h3 className="text-4xl font-semibold md:text-xl lg:text-sm">
                  Qualified traders
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-6xl font-semibold text-yellow-500">53</h1>
                <h3 className="text-4xl font-semibold md:text-xl lg:text-sm">
                  Countries <br /> supported
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="my-8 w-full min-h-screen">
          <div className="container-xl flex h-full flex-col items-center justify-center">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <TestCard />
              <TestCard />
              <TestCard />
              <TestCard />
            </div>
          </div>
        </section>
        <footer className="w-full">
          <div className="container-xl flex flex-col items-center justify-center">
            <p className="mb-5 text-center text-sm">
              © All right reserved 2023. <br /> Bitmine - The easiest place to
              invest bitcoin.
            </p>
          </div>
        </footer>
        
      </>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
