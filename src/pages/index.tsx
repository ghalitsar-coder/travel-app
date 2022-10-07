import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Booking, Category, Header, HeroBanner, Testimonials, TopSelling } from "components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jadoo</title>
        <meta name="description" content="Jadoo Travel App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroBanner />
      <Category />
      <TopSelling />
      <Booking />
      <Testimonials />

    </>
  );
};

export default Home;
