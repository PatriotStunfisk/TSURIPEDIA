import Link from 'next/link';
export default function Footer(){return <footer className="footer"><div><div className="footerBrand">UO<span>LINK</span></div><p>魚を知る。釣り方がわかる。釣りに行ける。</p></div><div className="footerLinks"><Link href="/fish">魚図鑑</Link><Link href="/spots">釣りスポット</Link><Link href="/gear">釣具</Link><Link href="/game">ゲーム</Link></div><div className="copyright">© 2026 UOLINK</div></footer>}
