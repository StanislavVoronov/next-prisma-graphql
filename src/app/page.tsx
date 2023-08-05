"use client";

import { useCasesQuery } from "@/api";
import Link from "next/link";

const Home = () => {
  const { data } = useCasesQuery();

  console.log(
    "data",
    data?.cases?.map((item) => item?.name)
  );
  const stats = [
    { name: "Ортодонтов с нами", value: "182" },
    { name: "Готовых работ", value: "500+" },
    { name: "На рынке элайнеров", value: "3 года" },
    { name: "Выгоды при работе с нами", value: "до 30%" },
  ];

  return (
    <main className="relative isolate overflow-hidden min-h-screen py-24 sm:py-32">
      <div>test</div>
    </main>
  );
};

export default Home;
