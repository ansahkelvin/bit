"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const paymentServices = [
  { id: 1, name: "Ezipay Global Wallet", icon: "💳" },
  { id: 2, name: "MTN MOMO", icon: "📱" },
  { id: 3, name: "Vodafone Cash", icon: "📱" },
  { id: 4, name: "Bank Transfer", icon: "🏦" },
];

export default function TradeSection() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const [selectedPayment, setSelectedPayment] = useState(1);
  const [buyAmount, setBuyAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");

  return (
    <section className="w-full">
      <div className="mx-auto  max-w-7xl  px-4 sm:px-6 pb-8">
        {/* Tabs */}
        <div className="flex gap-8 mb-6">
          <button
            onClick={() => setActiveTab("buy")}
            className={`text-lg font-medium pb-2 transition-colors relative ${
              activeTab === "buy"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Buy
            {activeTab === "buy" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("sell")}
            className={`text-lg font-medium pb-2 transition-colors relative ${
              activeTab === "sell"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sell
            {activeTab === "sell" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
            )}
          </button>
        </div>

        {/* Main Card */}
        <div className="border border-[#6F7794] rounded-2xl p-6 md:p-10 bg-[#212741] mb-6">
          {/* Currency Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8">
            {/* I want to buy */}
            <div className="space-y-4">
              <label className="text-sm text-foreground">I want to buy</label>
              <div className="relative">
                <div className="flex items-center gap-4 border border-[#6F7794] rounded-xl px-5 py-5 bg-[#212741]">
                  <button className="flex items-center gap-2 text-foreground">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      $
                    </div>
                    <span className="font-medium">USD</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <input
                    type="text"
                    value={buyAmount}
                    onChange={(e) => setBuyAmount(e.target.value)}
                    placeholder="0.00"
                    className="flex-1 bg-transparent border-none outline-none text-foreground text-xl"
                  />
                </div>
              </div>
              <p className="text-sm text-white">200-29,500 USD</p>
            </div>

            {/* I will receive */}
            <div className="space-y-4">
              <label className="text-sm text-foreground">I will receive</label>
              <div className="relative">
                <div className="flex items-center gap-4 border border-[#6F7794] rounded-xl px-5 py-5 bg-[#212741]">
                  <button className="flex items-center gap-2 text-foreground">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ₿
                    </div>
                    <span className="font-medium">BTC</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <input
                    type="text"
                    value={receiveAmount}
                    onChange={(e) => setReceiveAmount(e.target.value)}
                    placeholder="0.00"
                    className="flex-1 bg-transparent border-none outline-none text-foreground text-xl"
                  />
                </div>
              </div>
              <p className="text-sm text-white">1 USDT ≈ 12.06 GHS</p>
            </div>
          </div>

          {/* Payment Services */}
          <div className="space-y-4">
            <h3 className="text-base text-foreground">Payment Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {paymentServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedPayment(service.id)}
                  className={`flex items-center gap-3 px-5 py-5 rounded-xl border-2 transition-all ${
                    selectedPayment === service.id
                      ? "border-[#2D59CC] bg-[#2D59CC]/5"
                      : "border-[#6F7794] hover:border-[#6F7794]/60"
                  }`}
                >
                  <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-lg">{service.icon}</span>
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    {service.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Buy Button - Outside the card */}
        <button className="w-full md:w-auto px-24 py-3.5 bg-[#426CD8] hover:bg-[#426CD8]/90 text-white font-medium rounded-lg transition-colors">
          Buy
        </button>
      </div>
    </section>
  );
}
