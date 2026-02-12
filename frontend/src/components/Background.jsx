export default function Background({ children }) {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-8"
      style={{ backgroundImage: `url('/portfolio-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center gap-12">
        {children}
      </div>
    </div>
  );
}