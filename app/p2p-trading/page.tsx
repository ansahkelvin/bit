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
            <div className={"mx-16 p-6 my-6 rounded-xl bg-[#212641] flex flex-col sm:flex-row justify-between items-center"}>
                <div>
                    <h1 className="font-medium text-2xl text-white">Explore 2000+ P2P offers</h1>
                    <p className="text-base  text-[#6E7693]">
                        Using Various Payment Method
                    </p>
                </div>
                <Image src={'bit.svg'} alt={"Icon"} width={200} height={200} className={'w-[80px] h-[80px]'}/>
            </div>

            <div className={"bg-[#212641] mx-16 mb-16 p-6 rounded-xl space-y-6"}>
                {/* First Row - Buy/Sell and Currency */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* Buy/Sell Toggle */}
                    <div className="flex items-center gap-1 border border-[#6F7794] rounded-lg p-1">
                        <button className="px-6 py-2 rounded-md bg-[#10b981] text-white font-medium text-sm">
                            Buy
                        </button>
                        <button
                            className="px-6 py-2 rounded-md text-muted-foreground hover:text-foreground font-medium text-sm">
                            Sell
                        </button>
                    </div>

                    {/* Currency Buttons */}
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1F32] transition-colors">
                        <div
                            className="w-6 h-6 bg-[#2bb088] rounded-full flex items-center justify-center text-white font-bold text-xs">
                            ₮
                        </div>
                        <span className="text-foreground font-medium text-sm">USDT</span>
                    </button>

                    <button
                        className="flex items-center gap-2 px-4 py-2 border border-[#6F7794] rounded-lg hover:border-[#6F7794]/60 transition-colors">
                        <div
                            className="w-6 h-6 bg-[#F7931A] rounded-full flex items-center justify-center text-white font-bold text-xs">
                            ₿
                        </div>
                        <span className="text-foreground font-medium text-sm">BTC</span>
                    </button>

                    <button
                        className="flex items-center gap-2 px-4 py-2 border border-[#6F7794] rounded-lg hover:border-[#6F7794]/60 transition-colors">
                        <div
                            className="w-6 h-6 bg-[#627EEA] rounded-full flex items-center justify-center text-white font-bold text-xs">
                            Ξ
                        </div>
                        <span className="text-foreground font-medium text-sm">ETH</span>
                    </button>
                </div>

                {/* Second Row - Filters */}
                <div className="flex flex-wrap items-center gap-4">
                    {/* Enter Amount with Search */}
                    <div className="flex items-center gap-2 bg-[#1A1F32] border border-[#6F7794] rounded-lg px-4 py-3">
                        <input
                            type="text"
                            placeholder="Enter Amount"
                            className="bg-transparent border-none outline-none text-foreground text-sm placeholder:text-muted-foreground w-28"
                        />
                        <button className="flex items-center gap-1 text-sm text-foreground">
                            <span
                                className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">₵</span>
                            <span>GHc</span>
                            <ChevronDown className="h-4 w-4"/>
                        </button>
                        <button className="ml-2 text-blue-500 text-sm font-medium">Search</button>
                    </div>

                    {/* All Payments */}
                    <button
                        className="flex items-center gap-2 px-4 py-3 border border-[#6F7794] rounded-lg text-foreground text-sm hover:border-[#6F7794]/60 transition-colors">
                        All Payments
                        <ChevronDown className="h-4 w-4"/>
                    </button>

                    {/* Refresh */}
                    <button
                        className="flex items-center gap-2 px-4 py-3 border border-[#6F7794] rounded-lg text-foreground text-sm hover:border-[#6F7794]/60 transition-colors">
                        Refresh
                        <RefreshCw className="h-4 w-4"/>
                    </button>

                    {/* Filter */}
                    <button
                        className="flex items-center gap-2 px-4 py-3 border border-[#6F7794] rounded-lg text-foreground text-sm hover:border-[#6F7794]/60 transition-colors">
                        Filter
                        <ChevronDown className="h-4 w-4"/>
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-[#6F7794]/30 hover:bg-transparent">
                                <TableHead className="text-muted-foreground">Advertisers</TableHead>
                                <TableHead className="text-muted-foreground">Price</TableHead>
                                <TableHead className="text-muted-foreground">Available/Limit</TableHead>
                                <TableHead className="text-muted-foreground">Payment</TableHead>
                                <TableHead className="text-muted-foreground text-right">Trade</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {offers.map((offer, index) => (
                                <TableRow key={index} className="border-[#6F7794]/30 hover:bg-[#1A1F32]/50">
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                                                S
                                            </div>
                                            <div>
                                                <div
                                                    className="text-foreground font-medium">{offer.advertiser.name}</div>
                                                <div className="text-xs text-muted-foreground">
                                                    {offer.advertiser.transactions} Transactions
                                                    | {offer.advertiser.rating}%
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-foreground font-medium">GH₵{offer.price}</TableCell>
                                    <TableCell>
                                        <div className="text-foreground text-sm">
                                            <div>Quantity {offer.quantity}</div>
                                            <div className="text-muted-foreground text-xs">Limits {offer.limits}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="text-foreground text-sm space-y-1">
                                            {offer.payment.map((method, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className={`w-1 h-5 rounded ${i === 0 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                                                <span>{method}</span>
                                            </div>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <button className="px-8 py-2.5 bg-[#2bb088] hover:bg-[#2bb088]/90 rounded-sm text-white font-medium text-sm transition-colors">
                                        Buy
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-[#1A1F32] transition-colors">
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#212741] font-medium">
                    1
                </button>
                <button className="w-10 h-10 flex items-center bg-[#6f7695] justify-center rounded-full border border-[#6F7794] text-[#212741] hover:bg-[#1A1F32] transition-colors">
                    2
                </button>
                <button className="w-10 h-10 flex items-center bg-[#6f7695] justify-center rounded-full border border-[#6F7794] text-[#212741] hover:bg-[#1A1F32] transition-colors">
                    3
                </button>
                <button className="w-10 h-10 flex items-center bg-[#6f7695] justify-center rounded-full border border-[#6F7794] text-[#212741] hover:bg-[#1A1F32] transition-colors">
                    4
                </button>
                <button className="w-10 h-10 flex items-center bg-[#6f7695] justify-center rounded-full border border-[#6F7794]  text-[#212741] hover:bg-[#1A1F32] transition-colors">
                    5
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-[#1A1F32] transition-colors">
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    </div>
  );
}
