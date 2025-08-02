import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header Navigation */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="https://ext.same-assets.com/2575378027/2141081545.png"
                alt="Greguyschka Félix"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/keynotes" className="text-white hover:text-gray-300 transition-colors">
                Keynotes
              </Link>
              <a href="#testimonials" className="text-white hover:text-gray-300 transition-colors">
                Testimonials
              </a>
              <a href="#media" className="text-white hover:text-gray-300 transition-colors">
                Media
              </a>
              <a href="#blog" className="text-white hover:text-gray-300 transition-colors">
                Blog
              </a>
              <Button className="bg-robyn-orange hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full">
                BOOK GREGUYSCHKA
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="robyn-dark text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Inspire a<br />
                  <span className="text-white">World-</span><br />
                  <span className="text-white">Class Team</span><br />
                  <span className="font-script text-5xl lg:text-7xl robyn-yellow italic">Culture</span>
                </h1>
              </div>

              <p className="text-lg lg:text-xl text-gray-300 max-w-md">
                Leadership, innovation, and peak performance through the power of human connection.
              </p>

              <Button className="bg-robyn-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full text-sm uppercase tracking-wide">
                WATCH GREGUYSCHKA INSPIRE
              </Button>
            </div>

            {/* Right Content - Image placeholder */}
            <div className="hidden lg:block">
              <div className="relative h-96 w-full">
                {/* This would be where a hero image goes - for now using a dark background */}
                <div className="absolute inset-0 robyn-gray rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="flex justify-center mt-16">
          <Image
            src="https://ext.same-assets.com/2575378027/2656695609.png"
            alt="Down arrow"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>
      </section>

      {/* Adventure Racing Section */}
      <section className="bg-robyn-orange text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              {/* Using a different image that should work */}
              <div className="w-full h-80 bg-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Team Photo</span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Businesses can learn a lot about successful leadership, teamwork, and high performance by implementing practices from the world of adventure racing.
              </h2>

              <div className="space-y-4 text-lg">
                <p>
                  Both combine individuals with different strengths. Aiming for a goal that's impossible solo. Collaborating on ever-changing tasks with limited time and resources. Persevering through challenges, changes, setbacks, and regulations.
                </p>

                <p>
                  Greguyschka Félix's world champion adventure racing teams dominated the sport, not by being the best athletes but by being the best teammates.
                </p>

                <p>
                  They outperformed the competition for 15 years with different team members training in different countries. This wasn't one winning team; they had a winning culture. The one Greguyschka shares to inspire thousands of leaders and teammates to next-level performance and success in business and life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full">
                  HAVE GREGUYSCHKA ON YOUR TEAM →
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-6 py-3 rounded-full">
                  SEE GREGUYSCHKA'S STORY →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              If you want to go fast, go <span className="italic">alone</span>.<br />
              If you want to go far, go <span className="robyn-yellow font-bold">together</span>.
            </blockquote>
            <cite className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              - AFRICAN PROVERB
            </cite>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              TESTIMONIALS
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
              What <span className="italic bg-blue-100 px-2">People</span> Are Saying
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Testimonials */}
            <div className="bg-blue-100 p-8 rounded-lg space-y-8">
              {/* Intel Testimonial */}
              <div className="space-y-4">
                <div className="w-16 h-8 bg-gray-400 rounded flex items-center justify-center text-white text-xs font-bold">
                  INTEL
                </div>
                <div className="text-lg font-medium text-gray-700">
                  "It was amazing to hear how much [this leadership team] learned and how they can actually apply it to their roles. Thank you for really taking the time to learn about us and making the talk so relevant."
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  — Adi Moreh, HR Manager
                </div>
              </div>

              {/* Allstate Testimonial */}
              <div className="space-y-4">
                <div className="w-20 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                  ALLSTATE
                </div>
                <div className="text-lg font-medium text-gray-700">
                  "Allstate leaders might not be climbing mountains or bicycling through a rainforest but we are competing every day to take care of our customers and strengthen communities. Your stories remind us that no matter what challenge we face, we can overcome it by working together."
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  — Thomas J. Wilson, Chairman & CEO
                </div>
              </div>

              <Button className="bg-robyn-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full">
                SEE MORE
              </Button>
            </div>

            {/* Right - Images */}
            <div className="space-y-4">
              <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500">Speaking Events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Greguyschka Félix is an award-winning speaker on leadership, team building, and peak performance.
          </h2>

          {/* Media Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 items-center opacity-70">
            {/* Media Logo Placeholders */}
            {[
              "CNN", "VOGUE", "OUTSIDE", "NY TIMES", "HARVARD", "TODAY", "ESPN",
              "NBC", "DISCOVERY", "USA", "RUNNER'S", "ABC", "FAST CO", "ATD"
            ].map((logo, index) => (
              <div key={index} className="h-12 flex items-center justify-center">
                <span className="text-sm font-bold text-white">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Consistently Win Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="w-full h-96 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Greguyschka Speaking</span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                World Class Teamwork Isn't a Nice-to-Have
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                It's How You <span className="italic font-script text-orange-500">Consistently</span> Win
              </h2>

              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Greguyschka's racing teams became world champions by developing a unique operating system of connection, collaboration, and shared commitment. Her approach transforms how businesses perform. For over two decades, organizations have borrowed her playbook to drive revenue growth, navigate mergers, and turn market pressures into opportunities.
                </p>

                <p>
                  As a former field-sales rep in pharmaceutical and hospital supply sales, her keynotes on the exponential power of teamwork deliver more than short-term motivation. They show leaders how to build high-performing teams that break down silos, accelerate innovation, and achieve sustained success. When everyone operates as an outstanding team player, leaders can focus on growing the business instead of managing it. The result? Organizations that cross important finish lines...together.
                </p>
              </div>

              <Button className="bg-robyn-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full">
                I WANT YOUR TEAM TO FEEL LIKE THIS! →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted for 20+ Years Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12">
            <span className="italic font-script">Trusted</span> for 20+ Years
          </h2>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60">
            {/* Company Logo Placeholders */}
            {[
              "DASSAULT", "ASTRAZENECA", "ALLSTATE", "DELOITTE", "MAERSK",
              "MICROSOFT", "WALMART", "KRAFT", "GE", "GSK", "LINKEDIN", "GARDNER"
            ].map((logo, index) => (
              <div key={index} className="h-16 flex items-center justify-center border border-gray-200 rounded">
                <span className="text-xs font-bold text-gray-600">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Keynotes Section */}
      <section id="keynotes" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              <span className="italic font-script text-orange-500">Featured</span> Keynotes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              on Leadership, Team Building, Sustained Peak Performance, and Organizational Culture
            </p>
          </div>

          {/* Keynotes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Keynote 1 */}
            <div className="bg-orange-500 text-white p-6 rounded-lg">
              <div className="text-xs font-semibold uppercase tracking-wide mb-4">TEAMWORK</div>
              <h3 className="text-xl font-bold mb-4">The 8 Essential Elements of a World-Class Team Culture</h3>
              <div className="mt-auto">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>

            {/* Keynote 2 */}
            <div className="bg-blue-400 text-white p-6 rounded-lg">
              <div className="text-xs font-semibold uppercase tracking-wide mb-4">WIN AS ONE</div>
              <h3 className="text-xl font-bold mb-4">Achieving Breakthrough Performance Through Collaboration, Creativity and a Culture of One!</h3>
              <div className="mt-auto">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>

            {/* Keynote 3 */}
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <div className="text-xs font-semibold uppercase tracking-wide mb-4">INSPIRING GREATNESS THROUGH G.R.I.T</div>
              <h3 className="text-xl font-bold mb-4">Creating The Passion and Perseverance To Pursue The Impossible</h3>
              <div className="mt-auto">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>

            {/* Keynote 4 */}
            <div className="bg-yellow-500 text-white p-6 rounded-lg">
              <div className="text-xs font-semibold uppercase tracking-wide mb-4">WHY WINNERS WIN</div>
              <h3 className="text-xl font-bold mb-4">The Game-Changing Mindset for Next-level Success</h3>
              <div className="mt-auto">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-robyn-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full">
              BOOK GREGUYSCHKA
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="w-full h-96 bg-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Greguyschka Photo</span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="text-yellow-400 text-sm font-semibold uppercase tracking-wide">ABOUT</div>

              <div className="font-script text-5xl lg:text-6xl text-blue-100">
                Greguyschka
              </div>

              <div className="space-y-4 text-lg">
                <p>
                  For decades, team builder Greguyschka Félix has been competing, performing and winning at the highest levels of sport and business thanks to the power of world class teamwork. Greguyschka is an award-winning keynote speaker on leadership and team culture, a 20+ year veteran San Diego firefighter, world champion adventure racer, <em>New York Times</em> best-selling author, and founder of The Project Athena Foundation, for which she was named a CNN Hero.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full">
                  MEET GREGUYSCHKA
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3 rounded-full">
                  GREGUYSCHKA IN ACTION
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-robyn-orange text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left - Logo and Tagline */}
            <div className="space-y-4">
              <div className="font-script text-4xl font-bold">GREGUYSCHKA</div>
              <div className="text-sm font-semibold">Félix</div>
              <p className="text-sm">
                Leadership, innovation, and peak performance through the power of human connection
              </p>
            </div>

            {/* Middle - Navigation */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Navigate</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="/about" className="hover:text-orange-200">About</Link>
                <a href="#media" className="hover:text-orange-200">Media</a>
                <Link href="/keynotes" className="hover:text-orange-200">Keynotes</Link>
                <a href="#blog" className="hover:text-orange-200">Blog</a>
                <a href="#testimonials" className="hover:text-orange-200">Testimonials</a>
                <a href="#book" className="hover:text-orange-200">Book Greguyschka</a>
              </div>
            </div>

            {/* Right - Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact Information</h4>
              <div className="space-y-2 text-sm">
                <p>P: 888.544.4177</p>
                <p>E: info@feeliksdynamics.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-400 mt-12 pt-8 text-center text-sm">
            <p>Greguyschka Félix © 2025 | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
