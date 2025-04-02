"use client";

import { useState, useEffect } from "react";
import PromptForm from "./components/PromptForm";
import PromptList from "./components/PromptList";

export default function Home() {
  const [prompts, setPrompts] = useState<string[]>([]);

  // Load saved prompts from localStorage when the page loads
  useEffect(() => {
    const storedPrompts = localStorage.getItem("prompts");
    if (storedPrompts) {
      setPrompts(JSON.parse(storedPrompts));
    }
  }, []);

  // Save prompts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("prompts", JSON.stringify(prompts));
  }, [prompts]);

  // Function to add a new prompt
  const addPrompt = (newPrompt: string) => {
    if (newPrompt.trim() !== "") {
      setPrompts([...prompts, newPrompt]);
    }
  };

  // Function to delete a prompt
  const deletePrompt = (index: number) => {
    const updatedPrompts = prompts.filter((_, i) => i !== index);
    setPrompts(updatedPrompts);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">PromptCraft</h1>
      <p>Discover and Share Prompts</p>
      <PromptForm addPrompt={addPrompt} />
      <PromptList prompts={prompts} deletePrompt={deletePrompt} />
    </div>
  );
}
