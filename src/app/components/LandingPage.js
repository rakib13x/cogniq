"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import logoText from "../../../public/logo-text.png";
import nutshell from "../../../public/nutshell-logo.png";
import nutshellYellow from "../../../public/nutshell-yellow-logo.png";
import Image from "next/image";
import apiImage from "../../../public/api-image.png";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";
import eye from "../../../public/eye-moving.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const walletAddress = "CA:9ZBYsQCNaR6Ck3KnwWwfWB4dLFKMakCuJaUGAHE8pump";

  // Function to handle copying to clipboard
  const handleCopy = () => {
    // Copy the wallet address to the clipboard
    navigator.clipboard.writeText(walletAddress).then(() => {
      // Set copied state to true to show feedback
      setCopied(true);

      // Reset copied feedback after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  // Function to toggle the visibility of the "Waitlist" section
  const handleJoinWaitlist = () => {
    setIsWaitlistOpen(!isWaitlistOpen); // Toggle the state
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Disable body scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      typeof document !== "undefined" &&
        (document.body.style.overflow = "hidden"); // Disable scrolling
    } else {
      typeof document !== "undefined" &&
        (document.body.style.overflow = "unset"); // Enable scrolling
    }

    // Cleanup function to ensure scrolling is re-enabled when the component unmounts or the menu closes
    return () => {
      typeof document !== "undefined" &&
        (document.body.style.overflow = "unset"); // Re-enable scrolling on cleanup
    };
  }, [menuOpen]);
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <header
        className="w-full border-b border-dashed border-white/20 px-4 py-3 z-40 font-instrumentSans"
        style={{ boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.50)" }}
      >
        <nav className="w-full flex items-center justify-between">
          <a
            className="flex flex-1 items-center justify-start gap-2 z-50"
            href="./"
          >
            <div className="border border-primary-yellow/30 rounded-full">
              <Image
                src="https://i.ibb.co.com/fV3R8mk7/logo.webp"
                alt="logo"
                loading="lazy"
                width="33"
                height="33"
                decoding="async"
                style={{ color: "transparent" }}
              />
            </div>
            <Image
              alt="logo"
              loading="lazy"
              width="54"
              height="20"
              decoding="async"
              style={{ color: "transparent" }}
              src="https://i.ibb.co.com/HpBJM3F2/logo-text.webp"
            />
          </a>
          <div className="hidden lg:flex flex-2 items-center justify-center gap-3">
            <a
              className="text-xs font-medium text-white/60 uppercase hover:text-primary-yellow transition-colors duration-200"
              href="/library"
            >
              Library
            </a>
            <div className="w-px h-3 bg-[#3A3A4B]"></div>
            <a
              className="text-xs font-medium text-white/60 uppercase hover:text-primary-yellow"
              target="_blank"
              rel="noopener noreferrer"
              href="https://dexscreener.com/solana/atgxmxx5cwibfxb4v6glwslvfktqj4pwx1ykulukrtna"
            >
              Dexscreener
            </a>
            <div className="w-px h-3 bg-[#3A3A4B]"></div>
            <a
              className="text-xs font-medium text-white/60 uppercase hover:text-primary-yellow"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dextools.io/app/en/token/nuttyai?t=1738251197537"
            >
              Dextools
            </a>
            <div className="w-px h-3 bg-[#3A3A4B]"></div>
            <a
              className="text-xs font-medium text-white/60 group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.alphakek.ai/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="87"
                height="23"
                viewBox="0 0 67 13"
                fill="none"
              >
                <path
                  d="M5.00865 2.89111H6.67692L10.3381 10.1526H8.7296L7.89035 8.46362H3.78499L2.93551 10.1526H1.3483L5.00865 2.89111ZM5.83767 4.35773L4.41217 7.19966H7.25334L5.83767 4.35773ZM12.2385 2.89111V10.1526H10.8228V2.89111H12.2385ZM14.7369 9.51548V11.9529H13.3213V4.83309H14.7369V5.48041C15.1009 5.07589 15.7985 4.73196 16.7286 4.73196C18.5492 4.73196 19.6206 5.98608 19.6206 7.49283C19.6206 9.00981 18.5492 10.2639 16.7286 10.2639C15.7985 10.2639 15.1009 9.92 14.7369 9.51548ZM14.676 7.46253V7.53336C14.676 8.43332 15.4648 9.11095 16.476 9.11095C17.4365 9.11095 18.2659 8.53445 18.2659 7.49283C18.2659 6.46104 17.4365 5.88494 16.476 5.88494C15.4648 5.88494 14.676 6.55234 14.676 7.46253ZM20.4114 10.1526V2.89111H21.8271V5.50048C22.2111 5.06565 22.8788 4.73196 23.7684 4.73196C25.2045 4.73196 26.0839 5.71298 26.0839 7.18943V10.1526H24.6686V7.52313C24.6686 6.61294 24.2138 6.00615 23.3033 6.00615C22.3531 6.00615 21.8275 6.59248 21.8275 7.5432V10.1526H20.4114ZM29.0475 10.2639C27.773 10.2639 26.8126 9.68744 26.8126 8.61512C26.8126 7.63449 27.6519 7.0883 28.9259 6.95687L31.1403 6.7243V6.68377C31.1403 6.2391 30.746 5.87471 29.8159 5.87471C29.0368 5.87471 28.4002 6.21864 28.2184 6.68377L26.9948 6.26901C27.3284 5.33875 28.5013 4.73196 29.8662 4.73196C31.5345 4.73196 32.5056 5.40958 32.5056 6.70384V8.79732C32.5056 9.09048 32.637 9.22231 33.2437 9.09048V10.1526C32.081 10.3851 31.5046 10.0109 31.2819 9.49541C30.7968 9.9503 29.9977 10.2639 29.0471 10.2639H29.0475ZM31.1407 8.09962V7.73563L29.138 7.95796C28.5112 8.02879 28.1877 8.18029 28.1877 8.57498C28.1877 8.97951 28.582 9.18178 29.2395 9.18178C30.109 9.18178 31.1403 8.80755 31.1403 8.09962H31.1407ZM34.6806 2.89111V7.83676L38.361 4.87362H39.3419L36.5614 7.07807L39.5241 10.1526H38.6443L36.0558 7.4826L34.6806 8.58522V10.1526H34.0129V2.89111H34.6806ZM42.477 9.66737C43.6196 9.66737 44.3983 9.08065 44.6509 8.27159L45.2072 8.55491C44.8936 9.48517 43.9128 10.2537 42.477 10.2537C40.7478 10.2537 39.5139 9.11095 39.5139 7.5129C39.5139 5.94555 40.7375 4.77249 42.477 4.77249C44.1858 4.77249 45.2474 5.92548 45.2474 7.37123V7.65456H40.1513C40.2217 8.86815 41.1928 9.66698 42.477 9.66698V9.66737ZM42.4566 5.34859C41.2939 5.34859 40.3634 6.03645 40.1816 7.12883H44.6005C44.5498 6.28947 43.7916 5.34859 42.4566 5.34859ZM46.9451 2.89111V7.83676L50.626 4.87362H51.6069L48.8259 7.07807L51.7886 10.1526H50.9089L48.3203 7.4826L46.9451 8.58522V10.1526H46.2778V2.89111H46.9451ZM57.711 2.89111H59.3797L63.04 10.1526H61.4323L60.5931 8.46362H56.4873L55.6382 10.1526H54.0506L57.711 2.89111ZM58.5404 4.35773L57.1145 7.19966H59.9561L58.5404 4.35773ZM65.1025 2.89111V10.1526H63.616V2.89111H65.1025Z"
                  className="fill-white/60 group-hover:fill-primary-yellow transition-colors duration-200"
                ></path>
              </svg>
            </a>
            <div className="w-px h-3 bg-[#3A3A4B]"></div>
            <a
              className="flex-shrink-0 text-[13px] font-medium text-white/60 font-ubuntoMono uppercase hover:text-primary-yellow transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              href="https://schizoterminal.com/"
            >
              Schizo Terminal//:
            </a>
            <div className="w-px h-3 bg-[#3A3A4B]"></div>
            <a
              className="text-xs font-medium text-white/60 uppercase group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@nutshellanimations"
            >
              <div className="relative">
                <Image
                  alt="nutshell"
                  loading="lazy"
                  width="67"
                  height="23"
                  decoding="async"
                  className="opacity-80 transition-opacity duration-200 group-hover:hidden"
                  style={{ color: "transparent" }}
                  src="https://i.ibb.co.com/sp0Pf35W/nutshell-logo.webp"
                />
                <Image
                  alt="nutshell yellow"
                  loading="lazy"
                  width="67"
                  height="23"
                  decoding="async"
                  className="opacity-80 transition-opacity duration-200 hidden group-hover:block"
                  style={{ color: "transparent" }}
                  src="https://i.ibb.co.com/SwPsfVXK/nutshell-yellow-logo.webp"
                />
              </div>
            </a>
            <div className="w-px h-3 bg-[#3A3A4B]"></div>
            <a
              className="group text-white/60"
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/NuttyAi"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.6906 9.34166L9.45535 3.37357H4.76835L11.0205 12.3712L4.73516 19.5029L4.0332 20.25L5.57915 20.2468L11.6816 13.3226L16.3134 19.9884H21.2461L14.3595 10.2842L20.1211 3.74677L20.832 3L19.2771 3.00293L13.6906 9.34166ZM6.92001 4.49857L16.9016 18.8634H19.0682L8.87422 4.49857H6.92001Z"
                  className="fill-white/60 group-hover:fill-primary-yellow transition-colors duration-200"
                ></path>
              </svg>
            </a>
          </div>

          <div className="md:flex md:flex-1 md:items-center md:justify-end md:gap-5 hidden">
            <button className="flex flex-row flex-shrink-0 items-center justify-center text-black text-center px-3 py-1.5 rounded-md transition-all duration-300 bg-yellow-500 border border-yellow-600 text-xs font-medium leading-[20px] text-primary-text [box-shadow:0px_2px_0px_0px_#997F20_inset] hover:[box-shadow:none] h-[32px]">
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex flex-1 items-center justify-end gap-5 z-50 md:hidden ">
            <button className="flex flex-row flex-shrink-0 items-center justify-center text-black text-center px-3 py-1.5 rounded-md transition-all duration-300 bg-yellow-500 border border-yellow-600 text-xs font-medium leading-[20px] text-primary-text [box-shadow:0px_2px_0px_0px_#997F20_inset] hover:[box-shadow:none] h-[32px]">
              Join Waitlist
            </button>
            <button
              className="w-[33px] h-[33px] flex flex-shrink-0 items-center justify-center rounded-full z-50 bg-primary-yellow"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <RxCross1 className="text-black" />
              ) : (
                <FiMenu className="text-black" />
              )}
            </button>
          </div>

          {/* Mobile Menu (Sliding from right) */}
          <div
            className={`${
              menuOpen ? "translate-x-0" : "translate-x-full overflow-hidden"
            } fixed top-0 right-0 z-40 w-full h-screen bg-black text-white transition-transform duration-300`}
          >
            <div className="flex flex-col items-center justify-center gap-3 py-10 space-y-2 h-screen  overflow-hidden">
              <a
                className="text-xs font-medium text-white/60 uppercase hover:text-primary-yellow transition-colors duration-200"
                href="/library"
              >
                Library
              </a>
              <a
                className="text-xs font-medium text-white/60 uppercase hover:text-primary-yellow"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dexscreener.com/solana/atgxmxx5cwibfxb4v6glwslvfktqj4pwx1ykulukrtna"
              >
                Dexscreener
              </a>
              <a
                className="text-xs font-medium text-white/60 uppercase hover:text-primary-yellow"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.dextools.io/app/en/token/nuttyai?t=1738251197537"
              >
                Dextools
              </a>
              <a
                className="text-xs font-medium text-white/60 group"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.alphakek.ai/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="87"
                  height="23"
                  viewBox="0 0 67 13"
                  fill="none"
                >
                  <path
                    d="M5.00865 2.89111H6.67692L10.3381 10.1526H8.7296L7.89035 8.46362H3.78499L2.93551 10.1526H1.3483L5.00865 2.89111ZM5.83767 4.35773L4.41217 7.19966H7.25334L5.83767 4.35773ZM12.2385 2.89111V10.1526H10.8228V2.89111H12.2385ZM14.7369 9.51548V11.9529H13.3213V4.83309H14.7369V5.48041C15.1009 5.07589 15.7985 4.73196 16.7286 4.73196C18.5492 4.73196 19.6206 5.98608 19.6206 7.49283C19.6206 9.00981 18.5492 10.2639 16.7286 10.2639C15.7985 10.2639 15.1009 9.92 14.7369 9.51548ZM14.676 7.46253V7.53336C14.676 8.43332 15.4648 9.11095 16.476 9.11095C17.4365 9.11095 18.2659 8.53445 18.2659 7.49283C18.2659 6.46104 17.4365 5.88494 16.476 5.88494C15.4648 5.88494 14.676 6.55234 14.676 7.46253ZM20.4114 10.1526V2.89111H21.8271V5.50048C22.2111 5.06565 22.8788 4.73196 23.7684 4.73196C25.2045 4.73196 26.0839 5.71298 26.0839 7.18943V10.1526H24.6686V7.52313C24.6686 6.61294 24.2138 6.00615 23.3033 6.00615C22.3531 6.00615 21.8275 6.59248 21.8275 7.5432V10.1526H20.4114ZM29.0475 10.2639C27.773 10.2639 26.8126 9.68744 26.8126 8.61512C26.8126 7.63449 27.6519 7.0883 28.9259 6.95687L31.1403 6.7243V6.68377C31.1403 6.2391 30.746 5.87471 29.8159 5.87471C29.0368 5.87471 28.4002 6.21864 28.2184 6.68377L26.9948 6.26901C27.3284 5.33875 28.5013 4.73196 29.8662 4.73196C31.5345 4.73196 32.5056 5.40958 32.5056 6.70384V8.79732C32.5056 9.09048 32.637 9.22231 33.2437 9.09048V10.1526C32.081 10.3851 31.5046 10.0109 31.2819 9.49541C30.7968 9.9503 29.9977 10.2639 29.0471 10.2639H29.0475ZM31.1407 8.09962V7.73563L29.138 7.95796C28.5112 8.02879 28.1877 8.18029 28.1877 8.57498C28.1877 8.97951 28.582 9.18178 29.2395 9.18178C30.109 9.18178 31.1403 8.80755 31.1403 8.09962H31.1407ZM34.6806 2.89111V7.83676L38.361 4.87362H39.3419L36.5614 7.07807L39.5241 10.1526H38.6443L36.0558 7.4826L34.6806 8.58522V10.1526H34.0129V2.89111H34.6806ZM42.477 9.66737C43.6196 9.66737 44.3983 9.08065 44.6509 8.27159L45.2072 8.55491C44.8936 9.48517 43.9128 10.2537 42.477 10.2537C40.7478 10.2537 39.5139 9.11095 39.5139 7.5129C39.5139 5.94555 40.7375 4.77249 42.477 4.77249C44.1858 4.77249 45.2474 5.92548 45.2474 7.37123V7.65456H40.1513C40.2217 8.86815 41.1928 9.66698 42.477 9.66698V9.66737ZM42.4566 5.34859C41.2939 5.34859 40.3634 6.03645 40.1816 7.12883H44.6005C44.5498 6.28947 43.7916 5.34859 42.4566 5.34859ZM46.9451 2.89111V7.83676L50.626 4.87362H51.6069L48.8259 7.07807L51.7886 10.1526H50.9089L48.3203 7.4826L46.9451 8.58522V10.1526H46.2778V2.89111H46.9451ZM57.711 2.89111H59.3797L63.04 10.1526H61.4323L60.5931 8.46362H56.4873L55.6382 10.1526H54.0506L57.711 2.89111ZM58.5404 4.35773L57.1145 7.19966H59.9561L58.5404 4.35773ZM65.1025 2.89111V10.1526H63.616V2.89111H65.1025Z"
                    className="fill-white/60 group-hover:fill-primary-yellow transition-colors duration-200"
                  ></path>
                </svg>
              </a>
              <a
                className="flex-shrink-0 text-[13px] font-medium text-white/60 font-ubuntoMono uppercase hover:text-primary-yellow transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://schizoterminal.com/"
              >
                Schizo Terminal//:
              </a>
              <a
                className="text-xs font-medium text-white/60 uppercase group"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@nutshellanimations"
              >
                <div className="relative">
                  <Image
                    alt="nutshell"
                    loading="lazy"
                    width="67"
                    height="23"
                    decoding="async"
                    className="opacity-80 transition-opacity duration-200 group-hover:hidden"
                    style={{ color: "transparent" }}
                    src="https://i.ibb.co.com/sp0Pf35W/nutshell-logo.webp"
                  />
                  <Image
                    alt="nutshell yellow"
                    loading="lazy"
                    width="67"
                    height="23"
                    decoding="async"
                    className="opacity-80 transition-opacity duration-200 hidden group-hover:block"
                    style={{ color: "transparent" }}
                    src="https://i.ibb.co.com/SwPsfVXK/nutshell-yellow-logo.webp"
                  />
                </div>
              </a>
              <a
                className="group text-white/60"
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/NuttyAi"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.6906 9.34166L9.45535 3.37357H4.76835L11.0205 12.3712L4.73516 19.5029L4.0332 20.25L5.57915 20.2468L11.6816 13.3226L16.3134 19.9884H21.2461L14.3595 10.2842L20.1211 3.74677L20.832 3L19.2771 3.00293L13.6906 9.34166ZM6.92001 4.49857L16.9016 18.8634H19.0682L8.87422 4.49857H6.92001Z"
                    className="fill-white/60 group-hover:fill-primary-yellow transition-colors duration-200"
                  ></path>
                </svg>
              </a>
              <button
                className="absolute bottom-6 w-[23rem] m-10 h-14 bg-yellow-500 [box-shadow:0px_4px_0px_0px_#997F20_inset] hover:[box-shadow:none] rounded-xl text-black"
                onClick={handleJoinWaitlist} // Trigger state change on click
              >
                Join Waitlist
              </button>

              {isWaitlistOpen && (
                <>
                  <div className="absolute top-0 bg-black h-screen w-[23rem] z-50  ">
                    <div className="flex flex-col items-start mt-36 border border-dashed pl-4 justify-center py-24 rounded-xl">
                      <h1 className="text-4xl">Join Waitlist</h1>
                      <p className="text-xs">
                        Enter your emal to join waitlist
                      </p>
                      <div className="flex flex-col items-center justify-center mt-16 gap-6 ">
                        <input
                          className="w-[20rem] p-3 rounded-xl bg-black border border-white "
                          placeholder="enter your email"
                        />
                        <button className="w-[20rem] h-12 text-center bg-yellow-400 [box-shadow:0px_4px_0px_0px_#997F20_inset] hover:[box-shadow:none] text-black rounded-xl">
                          join waitlist
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-[33px] h-[33px] flex flex-shrink-0 absolute  z-50 top-40 right-4"
                    onClick={handleJoinWaitlist}
                  >
                    {isWaitlistOpen ? (
                      <RxCross1 className="text-white text-2xl" />
                    ) : (
                      <FiMenu className="text-black" />
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <div class="px-4  ">
          <div className="jsx-bfdfaeb70e6ba3ca flex flex-col items-center justify-center gap-2">
            <p
              className="text-sm sm:text-base font-normal text-[#D9D9D9]/60 text-center"
              style={{ opacity: 1, transform: "none" }}
            >
              The next phase of agentic models
            </p>
            <div className="h-[118px] sm:h-[162px] text-[32px] sm:text-[62px] font-normal leading-[48px] sm:leading-[81px] text-white text-center font-poppins relative">
              {/* First Part - "Ai Agents on TikTok" */}
              <span className="undefined relative">
                <TypeAnimation
                  sequence={[
                    "Ai Agents on TikTok", // Text to be typed first
                    2000, // Wait for 2 seconds after typing this text
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0} // Run the animation only once
                  cursor={false}
                  className="undefined relative"
                />
              </span>

              <br />

              {/* Second Part - "have" with yellow color */}
              <span className="text-primary-yellow">
                <TypeAnimation
                  sequence={[2000, " have", 1000]} // Text to type next with yellow color
                  wrapper="span"
                  speed={50}
                  repeat={0}
                  cursor={false} // Run the animation only once
                  className="undefined relative"
                />
              </span>

              {/* Third Part - "Arrived" */}
              <span className="undefined relative">
                <TypeAnimation
                  sequence={[3000, " Arrived", 1000]} // Text to type next
                  wrapper="span"
                  speed={50}
                  repeat={0} // Run the animation only once
                  cursor={false}
                  className="undefined relative"
                />
              </span>

              {/* Cursor Animation - Only appears after final text */}
            </div>
            <button
              className="jsx-bfdfaeb70e6ba3ca flex flex-row items-center justify-between gap-2 p-2 shadow-3xl rounded-md bg-white"
              onClick={handleCopy} // Trigger handleCopy when button is clicked
            >
              <p className="jsx-bfdfaeb70e6ba3ca flex flex-1 text-xs lg:text-sm font-normal text-black text-start">
                <span className="jsx-bfdfaeb70e6ba3ca hidden sm:inline">
                  {walletAddress}
                </span>
                <span className="jsx-bfdfaeb70e6ba3ca sm:hidden">
                  {walletAddress.slice(0, 20)}...pump
                </span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                className="jsx-bfdfaeb70e6ba3ca"
              >
                <rect
                  x="1.25342"
                  y="5"
                  width="14"
                  height="14"
                  rx="3"
                  stroke="black"
                  strokeWidth="2"
                  className="jsx-bfdfaeb70e6ba3ca"
                ></rect>
                <rect
                  x="5.25342"
                  y="1"
                  width="14"
                  height="14"
                  rx="3"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                  className="jsx-bfdfaeb70e6ba3ca"
                ></rect>
              </svg>
              {/* Feedback: Change icon or show text when copied */}
              {copied && (
                <span className="ml-2 text-black font-bold text-xs">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mascot */}
        <div className="relative md:w-96 w-[60%] h-60 md:h-96 mx-auto my-16 border border-gray-400 rounded-full bg-white">
          <Lottie
            animationData={eye}
            loop={true}
            className="w-full md:max-w-md md:h-52 h-36 md:mt-28 mt-22  md:mr-11 mr-0"
          />
        </div>

        {/* Developed By */}
        <div className="jsx-bfdfaeb70e6ba3ca flex flex-col items-center justify-center gap-2">
          <p className="jsx-bfdfaeb70e6ba3ca text-xl text-white">
            Developed by
          </p>
          <div className="jsx-bfdfaeb70e6ba3ca flex flex-col sm:flex-row flex-1 items-center justify-center gap-0 sm:gap-3">
            <a
              className="text-xs font-medium text-white/60 group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.alphakek.ai/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="87"
                height="23"
                viewBox="0 0 67 13"
                fill="none"
                className="jsx-bfdfaeb70e6ba3ca"
              >
                <path
                  d="M5.00865 2.89111H6.67692L10.3381 10.1526H8.7296L7.89035 8.46362H3.78499L2.93551 10.1526H1.3483L5.00865 2.89111ZM5.83767 4.35773L4.41217 7.19966H7.25334L5.83767 4.35773ZM12.2385 2.89111V10.1526H10.8228V2.89111H12.2385ZM14.7369 9.51548V11.9529H13.3213V4.83309H14.7369V5.48041C15.1009 5.07589 15.7985 4.73196 16.7286 4.73196C18.5492 4.73196 19.6206 5.98608 19.6206 7.49283C19.6206 9.00981 18.5492 10.2639 16.7286 10.2639C15.7985 10.2639 15.1009 9.92 14.7369 9.51548ZM14.676 7.46253V7.53336C14.676 8.43332 15.4648 9.11095 16.476 9.11095C17.4365 9.11095 18.2659 8.53445 18.2659 7.49283C18.2659 6.46104 17.4365 5.88494 16.476 5.88494C15.4648 5.88494 14.676 6.55234 14.676 7.46253ZM20.4114 10.1526V2.89111H21.8271V5.50048C22.2111 5.06565 22.8788 4.73196 23.7684 4.73196C25.2045 4.73196 26.0839 5.71298 26.0839 7.18943V10.1526H24.6686V7.52313C24.6686 6.61294 24.2138 6.00615 23.3033 6.00615C22.3531 6.00615 21.8275 6.59248 21.8275 7.5432V10.1526H20.4114ZM29.0475 10.2639C27.773 10.2639 26.8126 9.68744 26.8126 8.61512C26.8126 7.63449 27.6519 7.0883 28.9259 6.95687L31.1403 6.7243V6.68377C31.1403 6.2391 30.746 5.87471 29.8159 5.87471C29.0368 5.87471 28.4002 6.21864 28.2184 6.68377L26.9948 6.26901C27.3284 5.33875 28.5013 4.73196 29.8662 4.73196C31.5345 4.73196 32.5056 5.40958 32.5056 6.70384V8.79732C32.5056 9.09048 32.637 9.22231 33.2437 9.09048V10.1526C32.081 10.3851 31.5046 10.0109 31.2819 9.49541C30.7968 9.9503 29.9977 10.2639 29.0471 10.2639H29.0475ZM31.1407 8.09962V7.73563L29.138 7.95796C28.5112 8.02879 28.1877 8.18029 28.1877 8.57498C28.1877 8.97951 28.582 9.18178 29.2395 9.18178C30.109 9.18178 31.1403 8.80755 31.1403 8.09962H31.1407ZM34.6806 2.89111V7.83676L38.361 4.87362H39.3419L36.5614 7.07807L39.5241 10.1526H38.6443L36.0558 7.4826L34.6806 8.58522V10.1526H34.0129V2.89111H34.6806ZM42.477 9.66737C43.6196 9.66737 44.3983 9.08065 44.6509 8.27159L45.2072 8.55491C44.8936 9.48517 43.9128 10.2537 42.477 10.2537C40.7478 10.2537 39.5139 9.11095 39.5139 7.5129C39.5139 5.94555 40.7375 4.77249 42.477 4.77249C44.1858 4.77249 45.2474 5.92548 45.2474 7.37123V7.65456H40.1513C40.2217 8.86815 41.1928 9.66698 42.477 9.66698V9.66737ZM42.4566 5.34859C41.2939 5.34859 40.3634 6.03645 40.1816 7.12883H44.6005C44.5498 6.28947 43.7916 5.34859 42.4566 5.34859ZM46.9451 2.89111V7.83676L50.626 4.87362H51.6069L48.8259 7.07807L51.7886 10.1526H50.9089L48.3203 7.4826L46.9451 8.58522V10.1526H46.2778V2.89111H46.9451ZM57.711 2.89111H59.3797L63.04 10.1526H61.4323L60.5931 8.46362H56.4873L55.6382 10.1526H54.0506L57.711 2.89111ZM58.5404 4.35773L57.1145 7.19966H59.9561L58.5404 4.35773ZM65.1025 2.89111V10.1526H63.616V2.89111H65.1025Z"
                  className="jsx-bfdfaeb70e6ba3ca fill-white/60 group-hover:fill-primary-yellow transition-colors duration-200"
                ></path>
              </svg>
            </a>
            <p className="jsx-bfdfaeb70e6ba3ca">&amp;</p>
            <a
              className="text-[13px] font-medium text-white/60 font-ubuntoMono uppercase hover:text-primary-yellow transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              href="https://schizoterminal.com/"
            >
              Schizo Terminal//:
            </a>
            <p className="jsx-bfdfaeb70e6ba3ca">&amp;</p>
            <a
              className="text-xs font-medium text-white/60 uppercase group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@nutshellanimations"
            >
              <div className="jsx-bfdfaeb70e6ba3ca relative">
                <Image
                  alt="nutshell"
                  loading="lazy"
                  width="67"
                  height="23"
                  decoding="async"
                  data-nimg="1"
                  className="opacity-80 transition-opacity duration-200 group-hover:hidden"
                  style={{ color: "transparent" }}
                  src="https://i.ibb.co.com/sp0Pf35W/nutshell-logo.webp"
                />
                <img
                  alt="nutshell yellow"
                  loading="lazy"
                  width="67"
                  height="23"
                  decoding="async"
                  data-nimg="1"
                  className="opacity-80 transition-opacity duration-200 hidden group-hover:block"
                  style={{ color: "transparent" }}
                  src="https://i.ibb.co.com/SwPsfVXK/nutshell-yellow-logo.webp"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* new test section */}
      <section className="relative w-full min-h-screen border-t border-dashed border-[#584811] overflow-hidden">
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-16 py-16">
          {/* Modular */}
          <div className="px-4  ">
            <div className="flex flex-col items-center justify-center">
              <div className="h-[96px] sm:h-[49px] text-[32px] sm:text-[40px] font-medium text-white text-center font-poppins mb-4 relative">
                <span>
                  <TypeAnimation
                    sequence={[
                      "Modular multi agent workflow", // This is the text that will be typed out
                      2000, // Time to wait after typing the text
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={0} // This ensures the animation runs only once
                    className="text-customBlue" // Customize the text color if needed
                  />
                </span>
              </div>
              <p
                className="text-sm font-normal text-white/60 text-center mb-7"
                style={{ opacity: 1, transform: "none" }}
              >
                Become an automated creator
              </p>
              <div style={{ opacity: 1, transform: "none" }}>
                <button
                  className="flex flex-row flex-shrink-0 items-center justify-center text-center
						px-3 py-1.5 rounded-md transition-all duration-300 bg-yellow-500 border border-yellow-600 text-black
						text-xs font-medium leading-[20px] text-primary-text [box-shadow:0px_2px_0px_0px_#997F20_inset]
						hover:[box-shadow:none] h-[32px]"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
          {/* LLm */}
          <div className="w-full h-full flex flex-col-reverse sm:flex-row items-center justify-between gap-16 px-4 lg:px-[100px]">
            <div className="flex flex-col items-start justify-center text-start gap-8">
              <div
                className="max-w-full sm:min-w-[324px] sm:max-w-[324px] 2xl:max-w-[540px]"
                style={{ opacity: 1 }}
              >
                <p
                  className="text-xs font-bold leading-[124%] text-white mb-2"
                  style={{ opacity: 1, transform: "none" }}
                >
                  LLM
                </p>
                <p
                  className="text-xs font-medium leading-[124%] text-white/50"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Uncensored, unbiased, and trained LLM blends 1m+ real-time
                  on/off-chain data points to produce accurate on-brand prompts
                </p>
              </div>
              <div
                className="max-w-full sm:min-w-[324px] sm:max-w-[324px] 2xl:max-w-[540px]"
                style={{ opacity: 1 }}
              >
                <p
                  className="text-xs font-bold leading-[124%] text-white mb-2"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Voice, Image, Text
                </p>
                <p
                  className="text-xs font-medium leading-[124%] text-white/50"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Prompts are analyzed and fine-tuned with image, voice, and
                  text models, using our proprietary knowledge engine
                </p>
              </div>
              <div
                className="max-w-full sm:min-w-[324px] sm:max-w-[324px] 2xl:max-w-[540px]"
                style={{ opacity: 1 }}
              >
                <p
                  className="text-xs font-bold leading-[124%] text-white mb-2"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Video
                </p>
                <p
                  className="text-xs font-medium leading-[124%] text-white/50"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Enhanced data processing, capable of handling more
                  simultaneous data sources than conventional models combines
                  each modular output into a succinct video output
                </p>
              </div>
              <div
                className="max-w-full sm:min-w-[324px] sm:max-w-[324px] 2xl:max-w-[540px]"
                style={{ opacity: 1 }}
              >
                <p
                  className="text-xs font-bold leading-[124%] text-white mb-2"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Channel API
                </p>
                <p
                  className="text-xs font-medium leading-[124%] text-white/50"
                  style={{ opacity: 1, transform: "none" }}
                >
                  Bespoke, unique, and unparalled videos are created and shared
                  across social channels via API
                </p>
              </div>
            </div>
            <div>
              <Image src={apiImage} width={1000} height={1000} alt="apiImage" />
            </div>
          </div>
          {/* LLm End*/}
        </div>
      </section>
      {/* new test section End */}

      {/* Stats Section */}
      <div className="w-full border-y border-dashed border-[#584811]">
        <div className="container mx-auto">
          <div className="w-full flex flex-col sm:flex-row divide-y sm:divide-x divide-dashed divide-white/20">
            <div
              className="flex-1 flex flex-col items-center justify-center py-[22px]"
              style={{ opacity: 1 }}
            >
              <p
                className="text-xs font-medium leading-[124%] text-white/50"
                style={{ opacity: 1, transform: "none" }}
              >
                Accounts Reached
              </p>
              <p
                className="text-[36px] font-medium leading-[124%] text-white mt-2"
                style={{ opacity: 1, transform: "none" }}
              >
                50M+
              </p>
            </div>
            <div
              className="flex-1 flex flex-col items-center justify-center py-[22px]"
              style={{ opacity: 1 }}
            >
              <p
                className="text-xs font-medium leading-[124%] text-white/50"
                style={{ opacity: 1, transform: "none" }}
              >
                Data Points
              </p>
              <p
                className="text-[36px] font-medium leading-[124%] text-white mt-2"
                style={{ opacity: 1, transform: "none" }}
              >
                1M+
              </p>
            </div>
            <div
              className="flex-1 flex flex-col items-center justify-center py-[22px]"
              style={{ opacity: 1 }}
            >
              <p
                className="text-xs font-medium leading-[124%] text-white/50"
                style={{ opacity: 1, transform: "none" }}
              >
                Models used
              </p>
              <p
                className="text-[36px] font-medium leading-[124%] text-white mt-2"
                style={{ opacity: 1, transform: "none" }}
              >
                5
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer top */}
      <div className="w-full h-[100px] flex flex-row items-center justify-center text-center gap-6 py-28">
        <div className="flex-1">
          <img
            alt="line"
            loading="lazy"
            width="350"
            height="1"
            decoding="async"
            data-nimg="1"
            className="w-full object-cover"
            style={{ color: "transparent" }}
            src="	https://www.nuttyai.tech/images/line-dashed-yellow.svg"
          />
        </div>
        <div className="flex-shrink-0 w-[300px]">
          <div className="text-sm sm:text-xl font-normal leading-[24px] text-white/60 relative">
            <TypeAnimation
              sequence={[
                "Execute with agents",
                2000,
                "Break down into tasks",
                2000,
                "Review and improve",
                2000,
                "Deploy and scale",
                2000,
                "",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-customBlue"
            />
          </div>
        </div>
        <div className="flex-1">
          <img
            alt="line"
            loading="lazy"
            width="350"
            height="1"
            decoding="async"
            data-nimg="1"
            className="w-full object-cover"
            style={{ color: "transparent" }}
            src="https://www.nuttyai.tech/images/line-dashed-yellow.svg"
          />
        </div>
      </div>

      {/* Footer */}

      <footer
        className="w-full border-t border-dashed border-white/20 px-4 py-4 z-50 font-instrumentSans"
        style={{ boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.50)" }}
      >
        <div className="w-full flex justify-center items-center text-center">
          <p className="max-w-4xl py-4 text-white/60">
            NuttyAi Memes are intended to function as an expression of support
            for, and engagement with, the ideals and beliefs embodied by the
            symbol &ldquo;$NUTTY&rdquo; and the associated artwork, and are not
            intended to be, or to be the subject of, an investment opportunity,
            investment contract, or security of any type.
          </p>
        </div>
        <nav className="w-full flex flex-col lg:flex-row items-center justify-between gap-2">
          <div className="w-full flex flex-row items-center justify-between">
            <a
              className="flex flex-1 items-center justify-start gap-2"
              href="./"
            >
              <div className="border border-primary-yellow/30 rounded-full">
                <Image
                  src="https://i.ibb.co.com/fV3R8mk7/logo.webp"
                  alt="logo"
                  loading="lazy"
                  width="33"
                  height="33"
                  decoding="async"
                  style={{ color: "transparent" }}
                />
              </div>
            </a>
            <div className="hidden lg:flex flex-1 items-center justify-center gap-8 text-center">
              <a
                className="text-xs font-normal text-white hover:text-primary-yellow flex-shrink-0"
                href="/terms-of-use"
              >
                Terms of Use
              </a>
              <a
                className="text-xs font-normal text-white hover:text-primary-yellow flex-shrink-0"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-1 items-center justify-end gap-5">
              <p className="text-xs font-medium text-white hover:text-primary-yellow">
                © 2025 Nutty AI
              </p>
            </div>
          </div>
          <div className="w-full flex lg:hidden items-center justify-between gap-8 text-center">
            <a
              className="text-xs font-normal text-white hover:text-primary-yellow"
              href="/terms-of-use"
            >
              Terms of Use
            </a>
            <a
              className="text-xs font-normal text-white hover:text-primary-yellow"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
