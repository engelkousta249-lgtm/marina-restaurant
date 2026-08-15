'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Tide from '@/components/Tide';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/ReservationModal';

export default function HomePage() {
  const [reserveOpen, setReserveOpen] = useState(false);

  return (
    <>
      <Nav onReserve={() => setReserveOpen(true)} />
      <Hero onReserve={() => setReserveOpen(true)} />
      <Tide background="var(--navy)" fill="var(--sand)" />
      <About />
      <Menu />
      <Tide background="var(--navy)" fill="var(--cream)" flip />
      <Gallery />
      <Testimonials />
      <Location />
      <Footer />
      <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </>
  );
}
