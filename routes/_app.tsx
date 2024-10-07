import type { PageProps } from "fresh";
import { ThemeProvider } from "@/islands/theme-provider.tsx";
import { getCookies } from "@std/http/cookie";

export default function App({ Component, req }: PageProps) {
  const theme = getCookies(req.headers)["ui-theme"];
  const isSystemTheme = theme === "system" || !theme;

  return (
    <html class={(!isSystemTheme && theme) || ""}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh</title>
        <link rel="icon" href="https://fav.farm/lemon" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <ThemeProvider defaultTheme={"system"} storageKey="ui-theme">
          <Component />
        </ThemeProvider>
      </body>
    </html>
  );
}
