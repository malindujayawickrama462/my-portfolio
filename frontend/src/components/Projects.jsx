const projectList = [
  { id: 1, title: 'Project One' },
  { id: 2, title: 'Project Two' },
  { id: 3, title: 'Project Three' },
  { id: 4, title: 'Project Four' },
];

export default function Projects() {
  return (
    <div className="flex-1 bg-black/40 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-2xl">
      <div className="grid grid-cols-2 gap-4">
        {projectList.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="aspect-video bg-gray-800 rounded-md overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-tighter">
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}