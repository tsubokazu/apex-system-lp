"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Wrench, Shield } from "lucide-react";
import { fadeInUp } from "@/utility/animations";
const features = [
  {
    icon: Users,
    title: "専門家のサポート",
    description:
      "経験豊富な専門家があなたの取引をサポートします。24時間体制でサポートを提供し、あなたの成功をバックアップします。",
  },
  {
    icon: Wrench,
    title: "最新のツール",
    description:
      "High&Lowツールや自動取引拡張機能で効率的な取引を。最新のAI技術を駆使し、市場動向を分析して最適な取引タイミングを提案します。",
  },
  {
    icon: Shield,
    title: "活発なコミュニティ",
    description:
      "メンバー同士で情報交換し、共に成長しましょう。定期的なウェビナーやオンラインイベントで、最新の市場動向や戦略を学べます。",
  },
];

export function FeatureCards() {
  return (
    <motion.section
      {...fadeInUp}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
    >
      {features.map((feature) => (
        <Card
          key={feature.title}
          className="bg-gray-800 border-none hover:bg-gray-700 transition-colors"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-orange-500 flex items-center">
              <feature.icon className="mr-2" /> {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </motion.section>
  );
}
