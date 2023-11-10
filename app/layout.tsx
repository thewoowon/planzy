"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "@/styles/GlobalStyles";
import Landing from "@/components/Landing";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import { NavermapsProvider as NaverMapsProvider } from "react-naver-maps";

const removeLayout = ["/login", "/camera", "/map", "/member", "/review"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLanding, setIsLanding] = useState(true);
  const pathname = usePathname();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        retry: 0,
      },
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLanding(false);
    }, 1000);
  }, []);
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <NaverMapsProvider
              ncpClientId={process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || ""}
            >
              <GlobalStyles />
              {!removeLayout.includes(pathname) ? (
                pathname.startsWith("/member") ||
                pathname.startsWith("/review") ? (
                  <div>{children}</div>
                ) : (
                  <Layout>{children}</Layout>
                )
              ) : (
                children
              )}
            </NaverMapsProvider>
          </RecoilRoot>
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
