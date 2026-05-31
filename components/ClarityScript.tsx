import Script from "next/script";
import { CLARITY_PROJECT_ID } from "@/lib/config";

/**
 * Microsoft Clarity: heatmaps y grabaciones de sesión (responde "dónde se van
 * los usuarios" de forma visual). Complementa a PostHog.
 *
 * Se carga solo si `NEXT_PUBLIC_CLARITY_PROJECT_ID` está definido. Si no, no
 * renderiza nada y la página funciona igual.
 */
export function ClarityScript() {
  if (!CLARITY_PROJECT_ID) return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
    </Script>
  );
}
