import Link from 'next/link'

export default function Page() {
  return (
    <>
      <p><Link href="/use-ref">useRef Sample</Link></p>
      <p><Link href="/use-effect">useEffect Sample</Link></p>
      <p><Link href="/use-state">useState Sample</Link></p>
    </>
  );
}
