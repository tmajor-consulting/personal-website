import {FC, memo} from 'react';

const Footer: FC = memo(() => (
  <footer
    className="flex items-center justify-between px-8 py-6 sm:px-12"
    style={{background: 'var(--dark)'}}>
    <p className="font-mono text-xs" style={{color: 'rgba(255,255,255,0.25)'}}>
      © {new Date().getFullYear()} Tamas Flucsa Major
    </p>
    <p className="font-mono text-xs" style={{color: 'rgba(255,255,255,0.25)'}}>
      tmajor.me
    </p>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
