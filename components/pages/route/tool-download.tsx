"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { fadeInUp } from "@/utility/animations";
export function ToolDownload() {
  return (
    <motion.section {...fadeInUp} className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4 text-white">High&Lowツール</h2>
      <p className="mb-8 text-gray-300">
        最新のバイナリーオプション取引ツールをダウンロード
      </p>
      <Button className="bg-gradient-to-r from-orange-400 to-red-600 text-white hover:from-orange-500 hover:to-red-700 rounded-full transition-colors">
        ツールをダウンロード <Download className="ml-2" />
      </Button>
    </motion.section>
  );
}
