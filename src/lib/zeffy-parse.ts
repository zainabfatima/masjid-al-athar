/**
 * Extract external script URLs from Zeffy website header embed code.
 * Returns unique src values for deduplicated loading in the site head.
 */
export function parseZeffyHeaderScriptSrcs(headerCode: string): string[] {
  const srcs = new Set<string>();
  const scriptTagPattern =
    /<script[^>]*\ssrc=["']([^"']+)["'][^>]*>\s*<\/script>/gi;

  for (const match of headerCode.matchAll(scriptTagPattern)) {
    srcs.add(match[1]);
  }

  return [...srcs];
}

/**
 * Extract iframe src from Zeffy "embed form on site" HTML, if present.
 */
export function parseZeffyIframeSrc(embedCode: string): string | undefined {
  const iframeMatch = embedCode.match(/<iframe[^>]*\ssrc=["']([^"']+)["']/i);
  return iframeMatch?.[1];
}

/**
 * Extract the Zeffy form identifier attribute from button embed code.
 * Zeffy buttons use a custom attribute on the button element.
 */
export function parseZeffyButtonFormId(buttonCode: string): string | undefined {
  const attributeMatch = buttonCode.match(
    /<button[^>]*\s([a-z0-9-]+)=["']([^"']+)["']/i,
  );

  if (!attributeMatch) {
    return undefined;
  }

  const [, attributeName, attributeValue] = attributeMatch;
  if (attributeName === "class" || attributeName === "style") {
    return undefined;
  }

  return attributeValue;
}
