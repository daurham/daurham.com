export const UniqueButton = () => (
  <div className="flex flex-col items-center justify-center h-48 w-full bg-muted rounded-lg">
    <button
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={() => {}}
    >
      Unique Button
    </button>
    <span className="mt-2 text-xs text-muted-foreground">Try clicking the button!</span>
  </div>
);