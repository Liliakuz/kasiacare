import { useEffect, useRef } from "react";
import { ClerkProvider, SignIn, SignUp, Show, useClerk } from "@clerk/react";
import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import About from "@/pages/about";
import Features from "@/pages/features";
import Pricing from "@/pages/pricing";
import Angels from "@/pages/angels";
import Contact from "@/pages/contact";
import FreeTrial from "@/pages/free-trial";
import Privacy from "@/pages/privacy";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function stripBase(path: string): string {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || "/"
    : path;
}

const clerkAppearance = {
  options: {
    logoPlacement: "inside" as const,
    logoLinkUrl: basePath || "/",
    logoImageUrl: `${window.location.origin}${basePath}/logo.svg`,
  },
  variables: {
    colorPrimary: "#1a3a5c",
    colorBackground: "#faf7f2",
    colorInputBackground: "#ffffff",
    colorText: "#1a3a5c",
    colorTextSecondary: "#5a7a96",
    colorInputText: "#1a3a5c",
    colorNeutral: "#8aaac8",
    borderRadius: "8px",
    fontFamily: "'DM Sans', sans-serif",
    fontFamilyButtons: "'DM Sans', sans-serif",
    fontSize: "16px",
  },
  elements: {
    rootBox: "w-full",
    cardBox: "shadow-[0_20px_60px_rgba(26,58,92,0.15)] rounded-2xl w-full overflow-hidden border border-[#e8dfd4]",
    card: "!shadow-none !border-0 !bg-transparent !rounded-none",
    footer: "!shadow-none !border-0 !bg-transparent !rounded-none",
    headerTitle: { color: "#1a3a5c", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: "600" },
    headerSubtitle: { color: "#5a7a96" },
    socialButtonsBlockButtonText: { color: "#1a3a5c" },
    formFieldLabel: { color: "#1a3a5c", fontWeight: "500" },
    footerActionLink: { color: "#c4667a" },
    footerActionText: { color: "#5a7a96" },
    dividerText: { color: "#8aaac8" },
    identityPreviewEditButton: { color: "#c4667a" },
    formFieldSuccessText: { color: "#2d6b2d" },
    alertText: { color: "#b03060" },
    logoBox: "flex justify-center mb-2",
    logoImage: "h-10",
    socialButtonsBlockButton: "border border-[#e8dfd4] hover:bg-[#f2e8d8] transition-colors",
    formButtonPrimary: "bg-[#1a3a5c] hover:bg-[#2c6fad] transition-colors font-medium",
    formFieldInput: "border-[#c8b89a] focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c]",
    dividerLine: "bg-[#e8dfd4]",
    alert: "border-[#f5d0dd] bg-[#fdf0f4]",
  },
};

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

function SignInPage() {
  // To update login providers, app branding, or OAuth settings use the Auth
  // pane in the workspace toolbar. More information can be found in the Replit docs.
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#faf7f2] px-4 py-12">
      <div className="w-full max-w-md">
        <SignIn routing="path" path={`${basePath}/sign-in`} signUpUrl={`${basePath}/sign-up`} />
      </div>
    </div>
  );
}

function SignUpPage() {
  // To update login providers, app branding, or OAuth settings use the Auth
  // pane in the workspace toolbar. More information can be found in the Replit docs.
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#faf7f2] px-4 py-12">
      <div className="w-full max-w-md">
        <SignUp routing="path" path={`${basePath}/sign-up`} signInUrl={`${basePath}/sign-in`} />
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <>
      <Show when="signed-in">
        <Dashboard />
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function ClerkQueryClientCacheInvalidator() {
  const { addListener } = useClerk();
  const queryClient = useQueryClient();
  const prevUserIdRef = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = addListener(({ user }) => {
      const userId = user?.id ?? null;
      if (prevUserIdRef.current !== undefined && prevUserIdRef.current !== userId) {
        queryClient.clear();
      }
      prevUserIdRef.current = userId;
    });
    return unsubscribe;
  }, [addListener, queryClient]);

  return null;
}

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      localization={{
        signIn: {
          start: {
            title: "Welcome back",
            subtitle: "Sign in to your KasiaCare account",
          },
        },
        signUp: {
          start: {
            title: "Start your free trial",
            subtitle: "14 days free — no credit card required",
          },
        },
      }}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ClerkQueryClientCacheInvalidator />
          <ScrollToTop />
          <Switch>
            {/* Public marketing routes */}
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/features" component={Features} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/angels" component={Angels} />
            <Route path="/contact" component={Contact} />
            <Route path="/free-trial" component={FreeTrial} />
            <Route path="/privacy" component={Privacy} />
            {/* Auth routes */}
            <Route path="/sign-in/*?" component={SignInPage} />
            <Route path="/sign-up/*?" component={SignUpPage} />
            {/* Protected app */}
            <Route path="/dashboard/*?" component={DashboardPage} />
            <Route component={NotFound} />
          </Switch>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

function App() {
  return (
    <WouterRouter base={basePath}>
      <ClerkProviderWithRoutes />
    </WouterRouter>
  );
}

export default App;
