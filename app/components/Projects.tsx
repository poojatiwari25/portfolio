import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Github Finder",
    description: "GitHub Finder simplifies GitHub profile discovery, follower exploration, public repository viewing, and user location checking seamlessly.",
    tags: ["React", "Tailwind CSS"],
    link: "https://github.com/poojatiwari25/Github-Finder-React"
  },
  {
    title: "Blockbuster Movie App",
    description: "The app provides a quick and efficient way to discover a vast collection of films",
    tags: ["React"],
    link: "#"
  },
  {
    title: "Task Manager",
    description: "A productivity app built with React and Firebase",
    tags: ["React", "Firebase", "Redux"],
    link: "#"
  },
  {
    title: "Weather App",
    description: "A sleek weather application using React and OpenWeatherMap API",
    tags: ["React", "API Integration", "Styled Components"],
    link: "#"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-[#121212] backdrop-blur-lg text-white">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-gray-200">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
  <Button asChild>
    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
  </Button>
</CardFooter>

            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

