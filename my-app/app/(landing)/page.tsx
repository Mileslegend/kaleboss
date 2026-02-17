
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex max-w-247 mx-auto flex-1 w-full flex-col lg:flex-row items-center justify-center p-4 gap-2 ">
      <div className="relative w-60 h-60 lg:w-106 lg:h-106 mb-8 lg:mb-0 ">
        <Image src="/favicon.svg" fill alt="hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-120 text-center ">
          Learn, Practice and Master new skills with Edufric
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-82.5 w-full">
          <ClerkLoading>
            <Loader className="w-5 h-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" fallbackRedirectUrl="/learn">
                <Button size={"lg"} variant={"secondary"} className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" fallbackRedirectUrl="/learn">
                <Button size={"lg"} variant={"primaryOutline"} className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant={"secondary"} asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
