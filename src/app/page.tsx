import Image from 'next/image';
import Header from './components/Header';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="">
      hello world
      <Header />
      <Button>Test</Button>
      <Button>Test</Button>
      <Button>Test</Button>
    </main>
  );
}
