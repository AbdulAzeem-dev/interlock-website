"use client";
import { CircleHalf } from "@phosphor-icons/react";
export default function ThemeToggle() {
  return <button className="text-link theme-toggle" type="button" onClick={() => {
    const root = document.documentElement;
    const current = root.dataset.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("interlock-theme", next); } catch { /* Preference storage is optional. */ }
  }}><CircleHalf size={15}/>Switch appearance</button>;
}
