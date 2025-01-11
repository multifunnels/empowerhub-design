import { Users, Target, MessageSquare } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CourseCard } from "@/components/CourseCard";
import { Testimonial } from "@/components/Testimonial";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const courses = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Leadership Development",
      description: "Master essential leadership skills for the modern workplace",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Conflict Resolution",
      description: "Learn effective strategies to manage workplace conflicts",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Team Building",
      description: "Build and maintain high-performing teams",
    },
  ];

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-primary">OrgEmpower</div>
            <div className="hidden md:flex space-x-6">
              <Button variant="ghost">Courses</Button>
              <Button variant="ghost">About Us</Button>
              <Button variant="ghost">Testimonials</Button>
              <Button variant="ghost">Resources</Button>
              <Button variant="ghost">Contact</Button>
            </div>
            <Button>Sign Up</Button>
          </div>
        </div>
      </nav>

      <Hero />

      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>

      <FeatureSection />

      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial
            quote="The leadership course transformed how I manage my team. Highly recommended!"
            author="Sarah Johnson"
            role="HR Director"
          />
          <Testimonial
            quote="Practical, engaging, and immediately applicable to our organization."
            author="Michael Chen"
            role="Team Lead"
          />
          <Testimonial
            quote="The best investment we've made in our team's development."
            author="Emma Rodriguez"
            role="Operations Manager"
          />
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">OrgEmpower</h3>
              <p className="text-gray-400">Transforming organizations through effective learning</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Courses</li>
                <li>Resources</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest courses and tips</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded bg-gray-800 text-white"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 OrgEmpower. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;