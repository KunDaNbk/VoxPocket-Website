import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { Architecture } from '@/components/Architecture';
import { UseCases } from '@/components/UseCases';
import { GettingStarted } from '@/components/GettingStarted';
import { FAQ } from '@/components/FAQ';
import { Changelog } from '@/components/Changelog';
import { Footer } from '@/components/Footer';

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Comparison />
        <Architecture />
        <UseCases />
        <GettingStarted />
        <FAQ />
        <Changelog />
      </main>
      <Footer />
    </>
  );
}
