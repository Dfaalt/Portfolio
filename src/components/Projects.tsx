import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  projects,
  categories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [cardPreviewImage, setCardPreviewImage] = useState<{
    [key: string]: number;
  }>({});
  const [detailCarouselApi, setDetailCarouselApi] =
    useState<CarouselApi | null>(null);
  const [detailActiveIndex, setDetailActiveIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    if (!detailCarouselApi) return;

    const sync = () =>
      setDetailActiveIndex(detailCarouselApi.selectedScrollSnap());
    sync();
    detailCarouselApi.on("select", sync);
    detailCarouselApi.on("reInit", sync);

    return () => {
      detailCarouselApi.off("select", sync);
      detailCarouselApi.off("reInit", sync);
    };
  }, [detailCarouselApi]);

  // Reset showAllProjects when category changes
  useEffect(() => {
    setShowAllProjects(false);
  }, [activeCategory]);

  const allFilteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // For "All" category, show only 6 unless showAllProjects is true
  const filteredProjects =
    activeCategory === "all" && !showAllProjects
      ? allFilteredProjects.slice(0, 6)
      : allFilteredProjects;

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
      <div className="floating-shape w-72 h-72 bg-accent top-40 -right-36 animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Some projects I've worked on with the latest technologies.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <Tabs
            value={activeCategory}
            onValueChange={(value) =>
              setActiveCategory(value as ProjectCategory)
            }
          >
            <TabsList className="glass-card h-auto p-1 sm:p-1.5 gap-0.5 sm:gap-1 flex-wrap">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg transition-all duration-300 
                    hover:bg-primary/10 hover:text-primary hover:scale-105 hover:shadow-md
                    data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent 
                    data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeCategory}-${project.title}`}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 30, rotateX: -15 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: index * 0.06,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.85,
                  y: -20,
                  transition: { duration: 0.2, ease: "easeIn" },
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col h-[400px] sm:h-[420px]"
              >
                {/* Image Section - 60% */}
                <div className="relative overflow-hidden h-[60%]">
                  <img
                    src={project.images[cardPreviewImage[project.title] || 0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium uppercase">
                    {project.category}
                  </span>
                  {/* Thumbnail previews */}
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {project.images.map((img, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCardPreviewImage((prev) => ({
                            ...prev,
                            [project.title]: imgIndex,
                          }));
                        }}
                        className={`w-8 h-8 rounded-md overflow-hidden border-2 transition-all hover:scale-110 ${
                          (cardPreviewImage[project.title] || 0) === imgIndex
                            ? "border-primary ring-2 ring-primary/50"
                            : "border-white/40 hover:border-white/80"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Preview ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Section - 40% */}
                <div className="p-4 sm:p-5 h-[40%] flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1.5 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center mt-auto pt-2">
                    <div className="flex items-center text-primary text-xs sm:text-sm font-medium">
                      <span>Details</span>
                      <ChevronRight className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects button - only show for "All" category when not all projects are shown */}
        {activeCategory === "all" &&
          !showAllProjects &&
          allFilteredProjects.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button
                variant="glass"
                size="lg"
                onClick={() => setShowAllProjects(true)}
              >
                View All Projects ({allFilteredProjects.length})
              </Button>
            </motion.div>
          )}
      </div>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
            setDetailCarouselApi(null);
            setDetailActiveIndex(0);
          }
        }}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 gap-0 bg-card border-border flex flex-col lg:grid lg:grid-rows-[60%_40%] [&>button]:top-2 [&>button]:right-2 [&>button]:z-50 [&>button]:bg-background/80 [&>button]:rounded-full [&>button]:p-1.5">
          {selectedProject && (
            <>
              {/* Image Carousel - aspect-video on mobile, 60% on desktop */}
              <div className="relative aspect-video lg:aspect-auto lg:h-full flex-shrink-0 overflow-hidden">
                <Carousel
                  className="w-full h-full"
                  setApi={setDetailCarouselApi}
                >
                  <CarouselContent className="h-full">
                    {selectedProject.images.map((image, index) => (
                      <CarouselItem key={index} className="h-full">
                        <div
                          className="relative h-full group/image cursor-pointer"
                          onClick={() => setLightboxIndex(index)}
                        >
                          <img
                            src={image}
                            alt={`${selectedProject.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent" />
                          {/* Zoom icon overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/image:bg-black/30 transition-colors">
                            <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover/image:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 sm:left-4 bg-background/80 hover:bg-background border-border" />
                  <CarouselNext className="right-2 sm:right-4 bg-background/80 hover:bg-background border-border" />
                </Carousel>

                {/* Image thumbnails */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                  {selectedProject.images.map((img, index) => (
                    <div
                      key={index}
                      className={
                        "w-8 h-8 sm:w-10 sm:h-10 rounded-md overflow-hidden border-2 transition-all cursor-pointer " +
                        (detailActiveIndex === index
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-white/40 hover:border-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        detailCarouselApi?.scrollTo(index, true);
                      }}
                    >
                      <img
                        src={img}
                        alt={`Thumb ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content - flexible on mobile, 40% on desktop */}
              <div className="flex-1 lg:h-full flex flex-col min-h-0 overflow-hidden">
                {/* Scrollable content area */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-5 lg:p-6">
                  <DialogHeader className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/20 text-primary text-xs font-medium uppercase">
                        {selectedProject.category}
                      </span>
                    </div>
                    <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 sm:mb-5">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sticky Action Bar */}
                <div className="flex-shrink-0 border-t border-border bg-card/95 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4">
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {/* View Code - shown for all categories */}
                    <Button
                      variant="glass"
                      size="default"
                      className="text-sm"
                      asChild
                    >
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1.5" />
                        View Code
                      </a>
                    </Button>

                    {/* Live Demo - only for Web */}
                    {selectedProject.category === "web" && (
                      <Button
                        variant="gradient"
                        size="default"
                        className="text-sm"
                        asChild
                      >
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}

                    {/* Download APK - only for Mobile */}
                    {selectedProject.category === "mobile" && (
                      <Button
                        variant="gradient"
                        size="default"
                        className="text-sm"
                        asChild
                      >
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="w-4 h-4 mr-1.5" />
                          Download APK
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Lightbox for Full Image */}
      <Dialog
        open={lightboxIndex !== null && !!selectedProject}
        onOpenChange={() => setLightboxIndex(null)}
      >
        <DialogContent className="w-auto max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none [&>button]:hidden">
          {lightboxIndex !== null && selectedProject && (
            <div className="relative inline-block">
              {/* Close button - positioned relative to image */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-3 -right-3 z-50 bg-background/90 hover:bg-background rounded-full p-2 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </button>

              {/* Previous button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null && prev > 0
                      ? prev - 1
                      : selectedProject.images.length - 1,
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-background/90 hover:bg-background rounded-full p-2 transition-colors shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="sr-only">Previous image</span>
              </button>

              {/* Image */}
              <img
                src={selectedProject.images[lightboxIndex]}
                alt={`Full size preview ${lightboxIndex + 1}`}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              />

              {/* Next button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null && prev < selectedProject.images.length - 1
                      ? prev + 1
                      : 0,
                  )
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-background/90 hover:bg-background rounded-full p-2 transition-colors shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
                <span className="sr-only">Next image</span>
              </button>

              {/* Image counter */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-background/90 px-3 py-1 rounded-full text-sm shadow-lg">
                {lightboxIndex + 1} / {selectedProject.images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
