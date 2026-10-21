const Footer = () => <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
  <a href="mailto:tarynwux@gmail.com" className="text-white-500">Contact Tong Wu</a>
  <a className="social-icon" href="https://github.com/tongwux" target="_blank" rel="noopener noreferrer" aria-label="Tong Wu on GitHub"><img src="/assets/github.svg" alt="" className="w-1/2 h-1/2" /></a>
  <p className="text-white-500">© {new Date().getFullYear()} Tong Wu. All rights reserved.</p>
</footer>;
export default Footer;
