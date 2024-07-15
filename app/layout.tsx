import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import HeaderFooter from "../Components/HeaderFooterWrapper/HeaderFooterWrapper";

export const metadata = {
  title: "THE 24 ADDA CAFE",
  description: "THE 24 ADDA CAFE is your go-to cafe for delightful brews, yummy treats, and a cozy atmosphere.",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{backgroundColor:'#ffffff'}}>
        <MantineProvider theme={theme}>
          {children}
          </MantineProvider>
      </body>
    </html>
  );
}
