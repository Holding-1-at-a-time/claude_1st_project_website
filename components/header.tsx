'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { BUSINESS_INFO } from '@/lib/constants';
import { NAV_ITEMS } from '@/config/navigation';
import { formatPhoneHref } from '@/lib/utils';

/**
 * Main navigation items
 */
const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
] as const;

/**
 * Render the site header with branding, responsive navigation, and call-to-action controls.
 *
 * Renders a sticky header containing the logo, a desktop navigation bar (visible on md+),
 * call and booking buttons (visible by breakpoint), and the MobileNav sheet trigger for small screens.
 *
 * @returns A JSX element containing the header with logo, desktop links, contact/book actions, and the mobile menu.
 * Header Component (Client Component for mobile menu state)
 * Includes desktop and mobile navigation
 */
export function Header(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">ODAAT</span>
          <span className="hidden text-sm font-medium text-muted-foreground sm:inline-block">
            One Detail At A Time
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          {/* Phone Button - Desktop */}
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden lg:inline-flex"
          >
            <a href={formatPhoneHref(BUSINESS_INFO.phoneRaw)}>
              <Phone className="mr-2 h-4 w-4" />
              {BUSINESS_INFO.phone}
            </a>
          </Button>

          {/* Book Now Button */}
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/booking">Book Now</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <div className="mb-4 border-b border-border pb-4">
                  <Link href="/" className="text-xl font-bold text-primary">
                    One Detail At A Time
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Professional Auto Detailing
                  </p>
                </div>

/**
 * Renders the mobile navigation sheet with branding, navigation links, contact actions, and address information.
 *
 * Presents a right-side slide-out sheet triggered by a menu button (hidden on md+). The sheet contains the site brand, links from NAV_ITEMS, a full-width call button, a booking button, and the business address and establishment year.
 *
 * @returns The mobile navigation sheet element as JSX to be embedded in the header.
 */
function MobileNav(): JSX.Element {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <div className="mb-4 border-b border-border pb-4">
            <Link href="/" className="text-xl font-bold text-primary">
              One Detail At A Time
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Professional Auto Detailing
            </p>
          </div>
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}

                <div className="mt-4 space-y-2 border-t border-border pt-4">
                  <SheetClose asChild>
                    <Button asChild className="w-full" size="lg">
                      <a href={formatPhoneHref(BUSINESS_INFO.phoneRaw)}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call {BUSINESS_INFO.phone}
                      </a>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild variant="outline" className="w-full" size="lg">
                      <Link href="/booking">Book Online</Link>
                    </Button>
                  </SheetClose>
                </div>

                <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                  <p>{BUSINESS_INFO.address.full}</p>
                  <p className="mt-1">
                    Serving San Antonio Since {BUSINESS_INFO.established}
                  </p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}