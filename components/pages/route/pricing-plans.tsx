"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInUp } from "@/utility/animations";
type PlanType = {
  title: string;
  price: string;
  period: string;
  features: string[];
};

const plans: Record<"monthly" | "yearly", PlanType[]> = {
  monthly: [
    {
      title: "ベーシック",
      price: "¥5,000",
      period: "月",
      features: [
        "基本的なツールアクセス",
        "週1回のグループコンサルティング",
        "コミュニティフォーラムアクセス",
      ],
    },
    {
      title: "スタンダード",
      price: "¥10,000",
      period: "月",
      features: [
        "高度なツールアクセス",
        "週2回のグループコンサルティング",
        "プライベートチャットサポート",
      ],
    },
    {
      title: "プレミアム",
      price: "¥20,000",
      period: "月",
      features: [
        "全ツールへの無制限アクセス",
        "週1回の個別コンサルティング",
        "24/7プライオリティサポート",
      ],
    },
  ],
  yearly: [
    {
      title: "ベーシック（年間）",
      price: "¥50,000",
      period: "年",
      features: [
        "基本的なツールアクセス",
        "週1回のグループコンサルティング",
        "コミュニティフォーラムアクセス",
        "2ヶ月分お得",
      ],
    },
    {
      title: "スタンダード（年間）",
      price: "¥100,000",
      period: "年",
      features: [
        "高度なツールアクセス",
        "週2回のグループコンサルティング",
        "プライベートチャットサポート",
        "2ヶ月分お得",
      ],
    },
    {
      title: "プレミアム（年間）",
      price: "¥200,000",
      period: "年",
      features: [
        "全ツールへの無制限アクセス",
        "週1回の個別コンサルティング",
        "24/7プライオリティサポート",
        "2ヶ月分お得",
      ],
    },
  ],
};

function PricingCard({ plan }: { plan: PlanType }) {
  return (
    <Card className="bg-gray-800 border-orange-500 border-2 hover:bg-gray-700 transition-colors">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">
          {plan.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold mb-4 text-white">
          {plan.price}
          <span className="text-sm font-normal text-gray-300">
            /{plan.period}
          </span>
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Button className="w-full bg-gradient-to-r from-orange-400 to-red-600 text-white hover:from-orange-500 hover:to-red-700 transition-colors">
          選択する
        </Button>
      </CardContent>
    </Card>
  );
}

export function PricingPlans() {
  return (
    <motion.section {...fadeInUp} className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">
        サブスクリプションプラン
      </h2>
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="monthly">月払い</TabsTrigger>
          <TabsTrigger value="yearly">年払い</TabsTrigger>
        </TabsList>
        {Object.entries(plans).map(([period, planList]) => (
          <TabsContent key={period} value={period}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {planList.map((plan) => (
                <PricingCard key={plan.title} plan={plan} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.section>
  );
}
