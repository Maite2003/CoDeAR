'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/mapa', label: 'Mapa' },
  { href: '/cronograma', label: 'Cronograma' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/organizan', label: 'Organizan' },
] as const;

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A] text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0 leading-none" aria-label="CoDeAR 2026, inicio">
          <span className="block font-codec text-lg tracking-[0.14em]">CODEAR</span>
        </Link>

        <nav className="hidden md:block" aria-label="Secciones">
          <ul className="flex items-center gap-1">
            {LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`inline-block border-b-2 px-3 py-2 font-codec text-[11px] tracking-[0.16em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D74E2A] ${
                      active
                        ? 'border-[#D74E2A] text-white'
                        : 'border-transparent text-white/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D74E2A]"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-white transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute top-1.5 left-0 h-0.5 w-5 bg-white transition ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-white transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Secciones"
        className={`border-t border-white/10 bg-[#0A0A0A] md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col px-4 py-2">
          {LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`block border-b border-white/10 py-4 font-codec text-sm tracking-[0.18em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D74E2A] ${
                    active ? 'text-[#D74E2A]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
