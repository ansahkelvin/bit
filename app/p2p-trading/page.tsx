"use client";

import Image from "next/image";
import { ChevronDown, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Offer {
  advertiser: {
    name: string;
    transactions: number;
    rating: number;
  };
  price: string;
  quantity: string;
  limits: string;
  payment: string[];
}

const offers: Offer[] = Array(7).fill({
    advertiser: {name: "Sam", transactions: 367, rating: 97.34},
    price: "11.56",
    quantity: "100.00 USDT",
    limits: "50.00 - 400.00 GHS",
    payment: ["MTN Mobile Mon...", "Vodafone cash"],
});

export default function P2PTrading() {
    return (
        <div className="bg-background min-h-screen">
            <div className="mx-4 sm:mx-6 lg:mx-16 p-4 sm:p-6 my-4 sm:my-6 rounded-xl bg-[#212641] flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                    <h1 className="font-medium text-xl sm:text-2xl text-white">Explore 2000+ P2P offers</h1>
                    <p className="text-sm sm:text-base text-[#6E7693]">
                        Using Various Payment Method
                    </p>
                </div>
                <Image src={'bit.svg'} alt={"Icon"} width={200} height={200} className="w-16 h-16 sm:w-[80px] sm:h-[80px] flex-shrink-0"/>
            </div>

            <div className="bg-[#212641] mx-4 sm:mx-6 lg:mx-16 mb-8 sm:mb-16 p-4 sm:p-6 rounded-xl space-y-4 sm:space-y-6">
                {/* First Row - Buy/Sell and Currency */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {/* Buy/Sell Toggle */}
                    <div className="flex items-center gap-1 border border-[#6F7794] rounded-lg p-1">
                        <button className="px-4 sm:px-6 py-2 rounded-md bg-[#10b981] text-white font-medium text-sm">
                            Buy
                        </button>
                        <button
                            className="px-4 sm:px-6 py-2 rounded-md text-muted-foreground hover:text-foreground font-medium text-sm">
                            Sell
                        </button>
                    </div>

                    {/* Currency Buttons */}
                    <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#1A1F32] transition-colors">
                        <div
                            className="w-6 h-6 bg-[#2bb088] rounded-full flex items-center justify-center text-white font-bold text-xs">
                            ₮
                        </div>
                        <span className="text-foreground font-medium text-sm">USDT</span>
                    </button>

                    <button
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-[#6F7794] rounded-lg hover:border-[#6F7794]/60 transition-colors">
                        <div
                            className="w-6 h-6 bg-[#F7931A] rounded-full flex items-center justify-center text-white font-bold text-xs">
                            ₿
                        </div>
                        <span className="text-foreground font-medium text-sm">BTC</span>
                    </button>

                    <button
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-[#6F7794] rounded-lg hover:border-[#6F7794]/60 transition-colors">
                        <div
                            className="w-6 h-6 bg-[#627EEA] rounded-full flex items-center justify-center text-white font-bold text-xs">
                            Ξ
                        </div>
                        <span className="text-foreground font-medium text-sm">ETH</span>
                    </button>
                </div>

                {/* Second Row - Filters */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {/* Enter Amount with Search */}
                    <div className="flex items-center gap-2 bg-[#1A1F32] border border-[#6F7794] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex-1 min-w-[200px] sm:flex-initial">
                        <input
                            type="text"
                            placeholder="Enter Amount"
                            className="bg-transparent border-none outline-none text-foreground text-sm placeholder:text-muted-foreground w-20 sm:w-28 flex-1"
                        />
                        <button className="flex items-center gap-1 text-sm text-foreground whitespace-nowrap">
                            <span
                                className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">₵</span>
                            <span className="hidden sm:inline">GHc</span>
                            <ChevronDown className="h-4 w-4"/>
                        </button>
                        <button className="text-blue-500 text-sm font-medium whitespace-nowrap">Search</button>
                    </div>

                    {/* All Payments */}
                    <button
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border border-[#6F7794] rounded-lg text-foreground text-sm hover:border-[#6F7794]/60 transition-colors whitespace-nowrap">
                        <span className="hidden sm:inline">All Payments</span>
                        <span className="sm:hidden">Payments</span>
                        <ChevronDown className="h-4 w-4"/>
                    </button>

                    {/* Refresh */}
                    <button
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border border-[#6F7794] rounded-lg text-foreground text-sm hover:border-[#6F7794]/60 transition-colors">
                        <span className="hidden sm:inline">Refresh</span>
                        <RefreshCw className="h-4 w-4"/>
                    </button>

                    {/* Filter */}
                    <button
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border border-[#6F7794] rounded-lg text-foreground text-sm hover:border-[#6F7794]/60 transition-colors">
                        <span className="hidden sm:inline">Filter</span>
                        <ChevronDown className="h-4 w-4"/>
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-[#6F7794]/30 hover:bg-transparent">
                                <TableHead className="text-muted-foreground min-w-[150px]">Advertisers</TableHead>
                                <TableHead className="text-muted-foreground min-w-[100px]">Price</TableHead>
                                <TableHead className="text-muted-foreground min-w-[140px]">Available/Limit</TableHead>
                                <TableHead className="text-muted-foreground min-w-[160px]">Payment</TableHead>
                                <TableHead className="text-muted-foreground text-right min-w-[100px]">Trade</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {offers.map((offer, index) => (
                                <TableRow key={index} className="border-[#6F7794]/30 hover:bg-[#1A1F32]/50">
                                    <TableCell>
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div
                                                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                                S
                                            </div>
                                            <div>
                                                <div
                                                    className="text-foreground font-medium text-sm">{offer.advertiser.name}</div>
                                                <div className="text-xs text-muted-foreground whitespace-nowrap">
                                                    {offer.advertiser.transactions} Transactions
                                                    | {offer.advertiser.rating}%
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-foreground font-medium text-sm">GH₵{offer.price}</TableCell>
                                    <TableCell>
                                        <div className="text-foreground text-xs sm:text-sm">
                                            <div className="whitespace-nowrap">Quantity {offer.quantity}</div>
                                            <div className="text-muted-foreground text-xs whitespace-nowrap">Limits {offer.limits}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-foreground text-xs sm:text-sm space-y-1">
                                            {offer.payment.map((method, i) => (
                                            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                                                <div className={`w-1 h-5 rounded ${i === 0 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                                                <span>{method}</span>
                                            </div>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <button className="px-4 sm:px-8 py-2 sm:py-2.5 bg-[#2bb088] hover:bg-[#2bb088]/90 rounded-sm text-white font-medium text-xs sm:text-sm transition-colors whitespace-nowrap">
                                        Buy
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 pt-4 pb-4 px-4">
                <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-foreground hover:bg-[#1A1F32] transition-colors">
                    <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-[#212741] font-medium text-sm">
                    1
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center bg-[#6f7695] justify-center rounded-full border border-[#6F7794] text-[#212741] hover:bg-[#1A1F32] transition-colors text-sm">
                    2
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center bg-[#6f7695] justify-center rounded-full border border-[#6F7794] text-[#212741] hover:bg-[#1A1F32] transition-colors text-sm">
                    3
                </button>
                <button className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 items-center bg-[#6f7695] justify-center rounded-full border border-[#6F7794] text-[#212741] hover:bg-[#1A1F32] transition-colors text-sm">
                    4
                </button>
                <button className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 items-center bg-[#6f7695] justify-center rounded-full border border-[#6F7794]  text-[#212741] hover:bg-[#1A1F32] transition-colors text-sm">
                    5
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-white hover:bg-[#1A1F32] transition-colors">
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
            </div>
        </div>
    </div>
  );
}
