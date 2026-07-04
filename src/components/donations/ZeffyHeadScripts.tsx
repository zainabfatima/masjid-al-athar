import { ZEFFY_HEADER_SCRIPT_SRCS } from "@/lib/zeffy-donations";
import Script from "next/script";

export function ZeffyHeadScripts() {
  if (ZEFFY_HEADER_SCRIPT_SRCS.length === 0) {
    return null;
  }

  return (
    <>
      {ZEFFY_HEADER_SCRIPT_SRCS.map((src) => (
        <Script key={src} id={`zeffy-${src}`} src={src} strategy="afterInteractive" />
      ))}
    </>
  );
}
