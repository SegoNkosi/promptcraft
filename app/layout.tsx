export default function RootLayout({ children }: { children: React.ReactNode }) { 
  return (
    <html lang="en"> {/* Sets the document language to English */}
      <head>
        <title>PromptCraft</title> {/* Defines the title of the webpage */}
      </head>
      <body
        className="min-h-screen flex items-center justify-center text-gray-900 text-center p-6"
        style={{
          /* Defines a multi-layered radial gradient background for a visually appealing effect */
          background:
            "radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 100%),\n" +
            "radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),\n" +
            "radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),\n" +
            "radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%),\n" +
            "radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),\n" +
            "radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),\n" +
            "radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)",
        }}
      >
        {/* Centers the content and applies a white background with shadow for contrast */}
        <main className="w-full max-w-3xl p-10 bg-white shadow-xl rounded-xl text-center">
          {children} {/* Renders the child components passed into the layout */}
        </main>
      </body>
    </html>
  );
}
