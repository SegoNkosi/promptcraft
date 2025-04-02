"use client"; // Enables client-side rendering for this component

export default function PromptList({
  prompts,
  deletePrompt,
}: {
  prompts: string[]; // Array of saved prompts
  deletePrompt: (index: number) => void; // Function to delete a specific prompt
}) {
  return (
    <div>
      {/* Heading for the saved prompts section */}
      <h2 className="text-xl font-bold mt-4">Saved Prompts</h2>
      
      {/* Unordered list to display saved prompts */}
      <ul className="mt-2">
        {/* Check if there are any saved prompts */}
        {prompts.length === 0 ? (
          <p className="text-gray-500">No prompts saved yet.</p> // Display message if no prompts are saved
        ) : (
          // Map through the prompts array and display each prompt
          prompts.map((prompt, index) => (
            <li 
              key={index} // Unique key for each list item
              className="flex justify-between items-center p-2 border-b" // Styling for each prompt item
            >
              <span>{prompt}</span> {/* Display the prompt text */}
              
              {/* Button to delete the prompt */}
              <button
                onClick={() => deletePrompt(index)} // Calls deletePrompt function with the corresponding index
                className="text-red-500 hover:underline" // Red text with underline on hover
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
