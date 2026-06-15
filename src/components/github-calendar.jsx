"use client";

import { useEffect, useState } from "react";

export default function GithubCalendar() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/shreejaybhay")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((resData) => {
        setData(resData);
        // Find latest year available in data
        const years = Object.keys(resData.total).map(Number).sort((a, b) => b - a);
        setSelectedYear(years[0] || new Date().getFullYear());
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full animate-pulse">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold font-sans text-[--foreground]">GitHub Activity</h1>
          <div className="h-6 w-32 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
        </div>
        <div className="h-[120px] bg-neutral-100 dark:bg-neutral-900/40 rounded-xl border border-neutral-200 dark:border-neutral-800/80" />
      </div>
    );
  }

  if (error || !data) {
    return null; // Silent fallback if fetch fails
  }

  // Get available years list
  const years = Object.keys(data.total).map(Number).sort((a, b) => b - a);
  const activeYear = selectedYear || years[0] || new Date().getFullYear();
  const totalInYear = data.total[activeYear] || 0;
  
  // Sum of all contributions across all years
  const totalOverall = Object.values(data.total).reduce((acc, curr) => acc + curr, 0);

  // Filter contributions for selected year
  const yearConts = data.contributions.filter(
    (c) => new Date(c.date).getFullYear() === activeYear
  );

  // Pad start of the year based on the day of week Jan 1st starts on
  const firstDate = new Date(`${activeYear}-01-01`);
  const startDayOfWeek = firstDate.getDay(); // 0 is Sunday, 1 is Monday, etc.

  const paddedContributions = [
    ...Array(startDayOfWeek).fill(null),
    ...yearConts,
  ];

  // Calculate month labels alignment
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthLabels = [];
  const seenMonths = new Set();

  paddedContributions.forEach((item, index) => {
    if (!item) return;
    const date = new Date(item.date);
    const monthIndex = date.getMonth();
    const dayOfMonth = date.getDate();

    if (dayOfMonth === 1 && !seenMonths.has(monthIndex)) {
      const colIndex = Math.floor(index / 7);
      monthLabels.push({
        name: months[monthIndex],
        colIndex,
      });
      seenMonths.add(monthIndex);
    }
  });

  // Ensure January is present at colIndex 0
  if (!seenMonths.has(0)) {
    monthLabels.unshift({ name: "Jan", colIndex: 0 });
  }

  const levelColors = {
    0: "bg-[#ebedf0] dark:bg-[#161b22]",
    1: "bg-[#9be9a8] dark:bg-[#0e4429]",
    2: "bg-[#40c463] dark:bg-[#006d32]",
    3: "bg-[#30a14e] dark:bg-[#26a641]",
    4: "bg-[#216e39] dark:bg-[#39d353]",
  };

  const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <div className="w-full">
      {/* Header with Year Selector */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold font-sans text-[--foreground]">GitHub Activity</h1>
        <div className="flex gap-1.5">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1 rounded-full border text-[11px] font-sans font-medium transition-all duration-200 cursor-pointer ${
                activeYear === year
                  ? "border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-white dark:text-black font-semibold"
                  : "border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full overflow-x-auto scrollbar-none py-1">
        <div className="min-w-[790px] flex flex-col pr-1 select-none">
          {/* Months header */}
          <div className="relative h-5 text-[10px] text-neutral-400 font-sans mb-1">
            {monthLabels.map((m, idx) => (
              <span
                key={idx}
                style={{ position: "absolute", left: `${30 + m.colIndex * 14}px` }}
                className="font-medium"
              >
                {m.name}
              </span>
            ))}
          </div>

          {/* Grid and day labels */}
          <div className="flex gap-[3px] items-center">
            {/* Day labels */}
            <div className="grid grid-rows-7 gap-[3px] text-[9px] text-neutral-400 w-[30px] pr-2 text-right h-[95px] font-sans font-medium">
              {dayLabels.map((label, idx) => (
                <div key={idx} className="flex items-center justify-end h-[11px]">
                  {label}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-rows-7 grid-flow-col gap-[3px] h-[95px]">
              {paddedContributions.map((item, idx) => {
                if (item === null) {
                  return (
                    <div
                      key={`pad-${idx}`}
                      className="w-[11px] h-[11px] bg-transparent"
                    />
                  );
                }
                return (
                  <div
                    key={item.date}
                    title={`${item.count} contributions on ${new Date(item.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}`}
                    className={`w-[11px] h-[11px] rounded-[2px] transition-colors duration-150 ${
                      levelColors[item.level] || levelColors[0]
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs text-neutral-500 font-sans mt-3 select-none">
        <div>
          <span className="font-semibold text-neutral-700 dark:text-neutral-300">
            {totalInYear} contributions
          </span>{" "}
          in {activeYear} (
          <span className="text-neutral-400">
            {totalOverall} total
          </span>
          )
        </div>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <div className="flex gap-[3px]">
            <div className="w-[11px] h-[11px] rounded-[2px] bg-[#ebedf0] dark:bg-[#161b22]" />
            <div className="w-[11px] h-[11px] rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]" />
            <div className="w-[11px] h-[11px] rounded-[2px] bg-[#40c463] dark:bg-[#006d32]" />
            <div className="w-[11px] h-[11px] rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]" />
            <div className="w-[11px] h-[11px] rounded-[2px] bg-[#216e39] dark:bg-[#39d353]" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
