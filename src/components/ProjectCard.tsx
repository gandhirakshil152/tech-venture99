import { motion } from "framer-motion";
import { ExternalLink, Image as ImageIcon } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string | null;
    live_link: string | null;
    screenshots: string[] | null;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const screenshots = project.screenshots ?? [];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl overflow-hidden group relative border border-transparent hover:border-primary/30 transition-all duration-500"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
        style={{ boxShadow: "inset 0 0 40px hsl(183 100% 50% / 0.06), 0 0 30px hsl(183 100% 50% / 0.1)" }}
      />

      {screenshots.length > 0 ? (
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={screenshots[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          {screenshots.length > 1 && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full glass text-xs text-foreground">
              <ImageIcon className="w-3 h-3" /> {screenshots.length}
            </div>
          )}
        </div>
      ) : (
        <div className="h-48 md:h-56 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
          <ImageIcon className="w-10 h-10 text-muted-foreground/20" />
        </div>
      )}

      <div className="p-6 relative z-10">
        <h3 className="font-display text-lg mb-2 text-foreground group-hover:neon-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
        {project.live_link && (
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-accent tracking-wider bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" /> Visit Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
