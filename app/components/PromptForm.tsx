"use client";

import { useState } from "react";

// This component is responsible for handling user input and adding new prompts.
export default function PromptForm({ addPrompt }: { addPrompt: (prompt: string) => void }) {
  // State to store the user's input
  const [input, setInput] = useState("");

  // Handles form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default form submission behavior
    addPrompt(input); // Calls the addPrompt function passed as a prop with the input value
    setInput(""); // Clears the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4"> {/* Form element with a submit handler */}
      <input
        type="text"
        className="w-full p-2 border rounded" // Input styling for full width, padding, border, and rounded edges
        placeholder="Enter your AI prompt..." // Placeholder text for the input field
        value={input} // Binds input value to the state
        onChange={(e) => setInput(e.target.value)} // Updates state when user types
      />
      <button
        type="submit" // Button triggers form submission
        className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition" // Styled button with hover effect
      >
        Save Prompt
      </button>
    </form>
  );
}
