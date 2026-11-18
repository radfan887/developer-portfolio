import { ArrowUp } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Your Name.
        {t.footer}
      </p>

      <a href="#home" className="back-to-top">
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}