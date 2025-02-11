"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Users, MessageCircle } from "lucide-react";

type Course = {
  id: number;
  title: string;
  description: string;
};

export default function SupportPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: 1,
      title: "バイナリーオプション入門",
      description: "初心者向けの基礎コース",
    },
    { id: 2, title: "高度な取引戦略", description: "経験者向けの応用コース" },
    {
      id: 3,
      title: "リスク管理マスター",
      description: "資金管理とリスク制御を学ぶ",
    },
  ];

  const faqs = [
    {
      question: "サポートの対応時間は？",
      answer: "24時間365日対応しています。",
    },
    {
      question: "コースの難易度は？",
      answer: "初心者から上級者まで、様々なレベルのコースを用意しています。",
    },
    {
      question: "途中でコースを変更できますか？",
      answer: "はい、いつでもコースの変更が可能です。",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-white">受講サポート</h1>
          <p className="text-xl mb-8 text-gray-300">
            あなたの学習をサポートするためのリソースとツール
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">コース一覧</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="bg-gray-800 border-none hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-500">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {selectedCourse && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">
              コース詳細: {selectedCourse.title}
            </h2>
            <Card className="bg-gray-800 border-none">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4">
                  {selectedCourse.description}
                </p>
                <Button className="bg-gradient-to-r from-orange-400 to-red-600 text-white hover:from-orange-500 hover:to-red-700 transition-colors">
                  コースに申し込む
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        )}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">
            サポートスケジュール
          </h2>
          <Card className="bg-gray-800 border-none">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="mr-2 text-orange-500" />
                <p className="text-gray-300">
                  週次グループセッション: 毎週水曜日 20:00-21:30
                </p>
              </div>
              <div className="flex items-center mb-4">
                <Users className="mr-2 text-orange-500" />
                <p className="text-gray-300">
                  月次ウェビナー: 毎月第一土曜日 14:00-16:00
                </p>
              </div>
              <div className="flex items-center">
                <MessageCircle className="mr-2 text-orange-500" />
                <p className="text-gray-300">
                  1対1メンタリング: 予約制（月2回まで）
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">よくある質問</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>
      </main>
    </div>
  );
}
