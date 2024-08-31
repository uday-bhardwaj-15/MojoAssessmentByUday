"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Users, BarChart2, Eye, ThumbsUp } from "lucide-react";

type Page = {
  id: string;
  name: string;
};

type Stats = {
  followers: number;
  engagement: number;
  impressions: number;
  reactions: number;
};

const pages: Page[] = [
  { id: "1", name: "My Cool Page" },
  { id: "2", name: "My Awesome Page" },
  { id: "3", name: "My Amazing Page" },
];

const pageData: Record<string, Stats> = {
  "1": { followers: 1000, engagement: 500, impressions: 5000, reactions: 300 },
  "2": {
    followers: 2000,
    engagement: 1000,
    impressions: 10000,
    reactions: 600,
  },
  "3": {
    followers: 3000,
    engagement: 1500,
    impressions: 15000,
    reactions: 900,
  },
};

const HomePage = () => {
  // Set static user data
  const user = {
    name: "Uday Bhardwaj",
    picture:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const [selectedPage, setSelectedPage] = useState<string>("");
  const [since, setSince] = useState<string>("");
  const [until, setUntil] = useState<string>("");
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    if (selectedPage) {
      // Simulating API call with since and until parameters
      setStats(pageData[selectedPage]);
    }
  }, [selectedPage, since, until]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4 overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white opacity-10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animation: `float ${
                Math.random() * 10 + 5
              }s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto p-4">
        <div className="mb-4 flex items-center">
          <img
            src={user.picture}
            alt={user.name}
            className="mr-2 h-10 w-10 rounded-full"
          />
          <span className="text-lg font-semibold">{user.name}</span>
        </div>

        <div className="mb-4 grid gap-4 md:grid-cols-3">
          <Select onValueChange={setSelectedPage}>
            <SelectTrigger>
              <SelectValue placeholder="Select a page" />
            </SelectTrigger>
            <SelectContent>
              {pages.map((page) => (
                <SelectItem key={page.id} value={page.id}>
                  {page.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="date"
            placeholder="Since"
            value={since}
            onChange={(e) => setSince(e.target.value)}
          />

          <Input
            type="date"
            placeholder="Until"
            value={until}
            onChange={(e) => setUntil(e.target.value)}
          />
        </div>

        {stats && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden">
              <CardHeader className="bg-blue-500 text-white">
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Total Followers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stats.followers}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-green-500 text-white">
                <CardTitle className="flex items-center">
                  <BarChart2 className="mr-2 h-4 w-4" />
                  Total Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stats.engagement}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-yellow-500 text-white">
                <CardTitle className="flex items-center">
                  <Eye className="mr-2 h-4 w-4" />
                  Total Impressions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stats.impressions}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-red-500 text-white">
                <CardTitle className="flex items-center">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Total Reactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stats.reactions}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
