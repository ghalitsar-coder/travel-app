import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Booking,
  Category,
  Clients,
  Footer,
  Header,
  HeroBanner,
  Subscription,
  Testimonials,
  TopSelling,
} from "components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jadoo</title>
        <meta name="description" content="Jadoo Travel App" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://ghalitsardev-travel-app.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jadoo" />
        <meta
          property="og:description"
          content="travel app, life app, aplikasi jalan-jalan, pesan guid, dan sebagainya"
        />
        <meta property="og:image " content="Jadoo" />
      </Head>

      <div className="overflow-hidden">
        <Header />
        <HeroBanner />
        <Category />
        <TopSelling />
        <Booking />
        <Testimonials />
        <Clients />
        <Subscription />
        <Footer />
      </div>
    </>
  );
};

export default Home;
