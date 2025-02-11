"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { fadeInUp } from "@/utility/animations";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/hero-bg.webp"
        alt="Hero background"
        fill
        className="absolute top-0 left-0 object-cover w-full h-full"
        priority
      />
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-black/70" />
      <motion.section {...fadeInUp} className="w-full h-full">
        <div className="flex w-full h-full flex-col items-center justify-center text-center z-20 absolute top-0 left-0">
          <h1 className="text-5xl font-bold mb-4 text-white">
            LastBinary{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              コミュニティ
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            バイナリーオプションの最先端を行く、あなたのための特別なコミュニティ
          </p>
          <Button className="bg-gradient-to-r from-orange-400 to-red-600 text-white hover:from-orange-500 hover:to-red-700 text-lg px-8 py-3 rounded-full transition-colors">
            今すぐ参加する <ChevronRight className="ml-2" />
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
