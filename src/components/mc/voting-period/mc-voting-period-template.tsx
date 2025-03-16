'use client';

import Image from "next/image";
import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MCVotingPeriodTemplateProps {
  children?: ReactNode;
}

export default function MCVotingPeriodTemplate({
  children
}: MCVotingPeriodTemplateProps) {
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <Image
        src="/mc/logo.svg"
        alt="ロゴ"
        width={200}
        height={200}
        className="object-contain lg:hidden"
      />
      <Card className="px-6 py-8 sm:px-20 sm:py-16 rounded-lg border-none grid place-items-center max-w-[370px] sm:max-w-full">
        <CardContent className="px-0 flex flex-col items-center">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};