 "use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { categoryOrder, getCategorySlug, visualsAsset, xumm3rLogoAsset } from "@/config/content-catalog";

type PortfolioShellProps = {
  pageTitle: string;
  pageKicker: string;
  pageSubtitle: string;
  children: ReactNode;
};

function formatCategoryLabel(category: string) {
  return category;
}

const navLinkClass =
  "font-[var(--font-display)] text-[length:var(--size-nav)] leading-[var(--lh-nav)] uppercase text-[var(--color-text-on-bg)] hover:text-[var(--color-nav-hover-yellow)] max-[700px]:inline-flex max-[700px]:min-h-[44px] max-[700px]:items-center";

const railLinkClass =
  "font-[var(--font-display)] text-[length:var(--size-micro)] leading-[var(--lh-micro)] uppercase hover:text-[var(--color-nav-hover-yellow)] max-[700px]:inline-flex max-[700px]:min-h-[44px] max-[700px]:items-center";

export function PortfolioShell({ pageTitle, pageKicker, pageSubtitle, children }: PortfolioShellProps) {
  const hasHero = Boolean(pageKicker.trim() || pageTitle.trim() || pageSubtitle.trim());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 700) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen bg-[var(--color-bg)] [--content-offset-desktop:0px] [--desktop-gutter:var(--layout-left-rail-offset)] [--desktop-content-start:calc(var(--desktop-gutter)+var(--layout-left-rail)+var(--space-md))] [--desktop-nav-start:var(--desktop-content-start)] [animation:page-enter_var(--motion-page-enter)_ease-out_both] max-[1024px]:[--content-offset-desktop:var(--space-xs)]"
      id="top"
    >
      <header className="fixed left-0 top-0 z-[200] flex h-[var(--layout-top-bar)] w-full items-start justify-start bg-[var(--color-bg)] px-[var(--desktop-gutter)] pt-[var(--space-sm)] max-[700px]:h-auto max-[700px]:min-h-[var(--layout-top-bar)] max-[700px]:flex-wrap max-[700px]:gap-[var(--space-xs)] max-[700px]:p-[var(--space-sm)]">
        <Link href="/" className="shrink-0 leading-none" aria-label="Home">
          {xumm3rLogoAsset ? (
            <Image
              className="block h-auto w-[344px] max-[1024px]:w-[220px] max-[700px]:w-[140px]"
              src={xumm3rLogoAsset.src}
              alt="xumm3r logo"
              width={605}
              height={187}
              priority
            />
          ) : (
            <span className="font-[var(--font-display)] text-[length:var(--size-nav)] leading-[var(--lh-nav)] uppercase">
              xumm3r
            </span>
          )}
        </Link>

        <nav className="absolute left-[var(--desktop-nav-start)] top-[var(--space-md)] flex items-center gap-[48px] whitespace-nowrap pr-[140px] max-[1024px]:static max-[1024px]:translate-y-0 max-[1024px]:gap-[var(--space-sm)] max-[1024px]:pr-0 max-[700px]:hidden">
          <Link className={navLinkClass} href="/">
            Home
          </Link>
          {categoryOrder.map((category) => (
            <Link key={category} className={navLinkClass} href={`/${getCategorySlug(category)}`}>
              {formatCategoryLabel(category)}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`${navLinkClass} hidden max-[700px]:inline-flex`}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? "Close" : "Menu"}
        </button>

        <div className="absolute right-[var(--desktop-gutter)] top-[var(--space-md)] flex flex-col items-end gap-[var(--space-xs)] max-[700px]:hidden">
          <a className={railLinkClass} href="mailto:xumm3rr@gmail.com">
            Email
          </a>
          <a
            className={railLinkClass}
            href="https://www.instagram.com/xumm3r/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <Link className={railLinkClass} href="/resume">
            Resume
          </Link>
        </div>
      </header>

      {isMobileMenuOpen ? (
        <nav
          id="mobile-nav-panel"
          className="mobile-menu-panel"
          aria-label="Mobile navigation"
        >
          <Link className={navLinkClass} href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          {categoryOrder.map((category) => (
            <Link
              key={category}
              className={navLinkClass}
              href={`/${getCategorySlug(category)}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {formatCategoryLabel(category)}
            </Link>
          ))}
        </nav>
      ) : null}

      <aside className="fixed left-[var(--desktop-gutter)] top-[calc(var(--layout-top-bar)+var(--space-sm))] z-[120] flex w-[var(--layout-left-rail)] flex-col max-[1024px]:static max-[1024px]:min-h-0 max-[1024px]:w-auto max-[1024px]:px-[var(--space-xs)] max-[1024px]:pt-[calc(var(--layout-top-bar)+env(safe-area-inset-top)+var(--space-sm))] max-[700px]:hidden">
        <div className="mt-[var(--space-sm)] grid w-full max-w-[240px] gap-[var(--space-xxs)] max-[700px]:mt-[var(--space-md)] max-[700px]:w-[132px] max-[700px]:max-w-none max-[430px]:w-[120px]" aria-label="Visuals">
          {visualsAsset ? (
            <Link href="/personal#asset-personal-personal-visual-mp4" aria-label="Open personal visual">
              <video
                className="block h-auto w-full object-contain"
                src={visualsAsset.src}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
              />
            </Link>
          ) : null}
        </div>
      </aside>

      <main
        id="main-content"
        className={`relative ml-[var(--desktop-content-start)] mr-[var(--desktop-gutter)] w-[calc(100vw-var(--desktop-content-start)-var(--desktop-gutter))] pb-[var(--space-xxl)] pt-[calc(var(--layout-top-bar)+var(--space-lg))] max-[1024px]:m-0 max-[1024px]:w-full max-[1024px]:pt-[var(--space-md)] ${
          isMobileMenuOpen ? "max-[700px]:pt-[calc(var(--layout-top-bar)+220px)]" : ""
        }`}
        tabIndex={-1}
      >
        {hasHero ? (
          <section
            className="mb-[var(--space-xl)] w-full pl-[var(--content-offset-desktop)] [scroll-margin-top:calc(var(--layout-top-bar)+env(safe-area-inset-top)+var(--space-sm))] max-[1024px]:px-[var(--space-xs)] max-[700px]:mt-[var(--space-sm)]"
            id="hero"
          >
            <p className="mb-[var(--space-xs)] mt-0 font-[var(--font-meta)] text-[length:var(--size-micro)] leading-[var(--lh-micro)] normal-case">
              {pageKicker}
            </p>
            <h1 className="m-0 font-[var(--font-display)] text-[length:var(--size-hero)] leading-[var(--lh-hero)] font-medium uppercase">
              {pageTitle}
            </h1>
            <p className="mt-[var(--space-sm)] max-w-[32rem] font-[var(--font-body)] text-[length:var(--size-body)] leading-[var(--lh-body)] max-[700px]:max-w-none max-[430px]:text-[12px] max-[430px]:leading-[18px]">
              {pageSubtitle}
            </p>
          </section>
        ) : null}

        {children}

        <section className="mobile-bottom-block" aria-label="Mobile links and visuals">
          <div className="mobile-footer-links">
            <a className={railLinkClass} href="mailto:xumm3rr@gmail.com">
              Email
            </a>
            <a
              className={railLinkClass}
              href="https://www.instagram.com/xumm3r/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <Link className={railLinkClass} href="/resume">
              Resume
            </Link>
          </div>
          <div className="mt-[var(--space-sm)] w-[140px]">
            {visualsAsset ? (
              <Link href="/personal#asset-personal-personal-visual-mp4" aria-label="Open personal visual">
                <video
                  className="block h-auto w-full object-contain"
                  src={visualsAsset.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                />
              </Link>
            ) : null}
          </div>
        </section>
      </main>
    </div>
  );
}
