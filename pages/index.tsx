import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";

/* Components */
import {
  GradientBackgroundCon,
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  FooterLink,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

/* Assets */
import Clouds1 from "../assets/cloud-and-thunder.png";
import Clouds2 from "../assets/cloudy-weather.png";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="To Generate Quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        {/* Quote Generator Modal Pop-Up*/}
        {/* <QuoteGeneratorModal /> */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration for today? Generate a quote
              card with a random inspirational quote provided by{" "}
              <FooterLink
                href="https://zenquotes.io/"
                target="_blank"
                rel="noopener no referrer"
              >
                ZenQuotes API
              </FooterLink>
            </QuoteGeneratorSubTitle>
            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background  Images*/}
        <BackgroundImage1 src={Clouds1} height="300" alt="cloudybackground1" />
        <BackgroundImage2 src={Clouds2} height="300" alt="cloudybackground1" />

        <FooterCon>
          <>Quotes Generated: {numberOfQuotes}</>
          <br />
        </FooterCon>
      </GradientBackgroundCon>
    </>
  );
}
