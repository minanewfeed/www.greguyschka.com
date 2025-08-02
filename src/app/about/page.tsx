import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header Navigation */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="https://ext.same-assets.com/2575378027/468525130.png"
                alt="Greguyschka Félix"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors border-b-2 border-orange-500">
                About
              </Link>
              <a href="#keynotes" className="text-white hover:text-gray-300 transition-colors">
                Keynotes
              </a>
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

            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-blue-800 to-purple-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Meet <span className="italic font-script text-yellow-400">Keynote</span><br />
                  Speaker
                </h1>

                <h2 className="text-3xl lg:text-4xl font-script text-orange-400">
                  Greguyschka<br />
                  <span className="text-2xl lg:text-3xl">Félix</span>
                </h2>
              </div>

              <p className="text-lg lg:text-xl text-gray-200 max-w-lg">
                Since mastering the art of overcoming obstacles and achieving success through teamwork in adventure racing, firefighting, and business, award-winning keynote speaker Greguyschka Félix helps company leaders and teams connect, collaborate, and perform at their best.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-robyn-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full">
                  GET IN TOUCH WITH GREGUYSCHKA →
                </Button>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full">
                  FEATURED KEYNOTES →
                </Button>
              </div>
            </div>

            {/* Right Content - Testimonial Box */}
            <div className="lg:self-start lg:mt-12">
              <div className="bg-blue-100 text-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">SIEMENS</div>
                </div>
                <blockquote className="text-lg font-medium mb-4">
                  "By far the best and most inspiring talk I have ever heard."
                </blockquote>
                <cite className="text-sm font-semibold text-gray-600">
                  — Edward Hayes, Director, Human Resources
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Content Section */}
      <section className="bg-robyn-orange text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold">
                Unlike most athletes, Greguyschka doesn't solely rely on stories about individual accomplishments.
              </h2>

              <div className="space-y-4 text-lg">
                <p>
                  Speaking with humor and humility, her deeply customized story-driven multimedia presentations inspire in business audiences the mindset and we-thinking culture they need to achieve collective success. She honed her team-building philosophy by depending on extreme teamwork as a 20+ year veteran firefighter and as a leader and teammate on adventure racing's most prolific world champion teams.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p>
                A <em>New York Times</em> bestselling author, Greguyschka also leads <strong>The Project Athena Foundation</strong>, a nonprofit she founded to help survivors of medical or other traumatic setbacks create their big comeback stories through adventure and endurance sports, for which she was named a CNN Hero. <em>Harvard Business Review</em> has recognized Greguyschka as a Top 10 Speaker for her culture-shaping keynotes on leadership, teambuilding and peak performance. Her unique take on radical teamwork has profited countless teams at Fortune 500 companies—including Starbucks, Walmart, Boeing, Johnson & Johnson and Intel—leaving their audiences energized with practical tools and inspiration, knowing they have what it takes to persevere and prevail together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              "When you create a culture in which everyone values the team's <span className="italic">performance</span> over their individual pride, that's where the <span className="italic font-script text-orange-500">magic</span> happens."
            </blockquote>
            <cite className="text-lg font-semibold text-gray-600">
              — Greguyschka
            </cite>
          </div>
        </div>
      </section>

      {/* Dark Testimonial Section */}
      <section className="robyn-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="font-script text-3xl text-yellow-400 mb-6">Lilly,</div>

            <blockquote className="text-2xl lg:text-3xl font-bold mb-8">
              ".. yours was one of the best, if not the best, keynote session I've seen in over two decades at my company."
            </blockquote>

            <cite className="text-lg text-gray-300">
              — Vice President-Global Patient Outcomes and Real World Evidence
            </cite>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button className="bg-robyn-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full">
                GET IN TOUCH WITH GREGUYSCHKA →
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full">
                FEATURED KEYNOTES →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Greguyschka's Take Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-80 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Adventure Racing Team</span>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Why Greguyschka's Take on <span className="italic font-script text-orange-500">Leadership</span> and <span className="italic font-script text-blue-600">Teamwork</span> is Relevant to Business <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-2xl">Now</span>
              </h2>

              <div className="space-y-4 text-lg text-gray-700">
                <p className="font-semibold">
                  How do business audiences gain anything useful from someone whose job as an adventure racer involved wading through swamps and rappelling off cliffs?
                </p>

                <p>
                  The unexpected race context makes Greguyschka's presentation unique, approachable and compelling. Most audiences have heard from business speakers and sports stars. Adventure racing allows your leaders and frontline employees to see teamwork and leadership in new ways with fresh eyes. She helps audiences realize that they're actually all adventure racers: facing steep challenges, navigating uncharted terrain, forced to find a way forward or make one. When they see a team carry their injured teammate over a mountain, or a barefoot villager go to extreme lengths to help a team in need, they want to BE that kind of leader and teammate. They're genuinely inspired, believing they can and want to do amazing things by embracing the power of human synergy.
                </p>
              </div>

              <Button className="bg-robyn-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full">
                I WANT YOUR TEAM TO FEEL LIKE THIS! →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Another Testimonial */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-20 h-12 bg-gray-300 rounded mx-auto mb-4 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">AESO</span>
              </div>
            </div>

            <blockquote className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              "You are an <span className="italic">amazing</span> person. A true <span className="italic">inspiration</span> to all. We are all <span className="robyn-yellow font-bold">grateful</span> that you were there to show us not only that it could be done, but how we—<span className="italic">the mere mortals</span>—could do it as well."
            </blockquote>

            <cite className="text-lg font-semibold text-gray-600">
              — Oliver G. Santos, President
            </cite>
          </div>
        </div>
      </section>

      {/* Top Takeaways Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Top <span className="italic font-script text-yellow-400">Takeaways</span> on Leadership, <span className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full">Teamwork</span> and <span className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full">Peak Performance</span>
            </h2>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto mt-6">
              Leaders often quote Greguyschka, crediting her with helping them learn something new about teamwork and leadership. Here are a few takeaways they've reflected:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <div className="w-16 h-8 bg-gray-600 rounded flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-white">AVIVA</span>
                </div>
              </div>

              <blockquote className="text-lg font-bold mb-4">
                "It's always brilliant to see our people truly wrap their arms around our plans"
              </blockquote>

              <p className="text-sm mb-4">
                "I know we all went away feeling incredibly confident about achieving our ambitions as a team. Thank you to Greguyschka for her remarkable inspiration, reminding us of <strong>the importance of 'we thinking'</strong> and perfectly bringing to life what it looks like to win when you work together."
              </p>

              <cite className="text-sm font-semibold">
                — Tracy Garrad, CEO
              </cite>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <div className="w-20 h-8 bg-blue-600 rounded flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-white">Express</span>
                </div>
              </div>

              <blockquote className="text-lg font-bold mb-4">
                "It's been almost a year since attending a summit Greguyschka spoke at..."
              </blockquote>

              <p className="text-sm mb-4">
                and her words still drive my career. <strong>Winning is <em>that</em> way!</strong>
              </p>

              <cite className="text-sm font-semibold">
                — Rachel Searles, Staff Consultant
              </cite>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <div className="w-24 h-8 bg-red-600 rounded flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-white">Boston Scientific</span>
                </div>
              </div>

              <blockquote className="text-lg font-bold mb-4">
                "Focus on the comeback, not the setback."
              </blockquote>

              <p className="text-sm mb-4">
                "Heck yeah! Your impact on the BSC Cardiology team and our follow-on conversations you prompted today was profound."
              </p>

              <cite className="text-sm font-semibold">
                — Sasha Young, Regional Vice President of Sales
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-robyn-orange text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-5xl font-bold tracking-wider">GREGUYSCHKA</div>
              <div className="font-script text-3xl text-blue-100 -mt-2">Félix</div>
              <p className="text-sm">
                Leadership, innovation, and peak performance through the power of human connection
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Navigate</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="/" className="hover:text-orange-200">Home</Link>
                <a href="#media" className="hover:text-orange-200">Media</a>
                <Link href="/about" className="hover:text-orange-200">About</Link>
                <a href="#blog" className="hover:text-orange-200">Blog</a>
                <a href="#keynotes" className="hover:text-orange-200">Keynotes</a>
                <a href="#book" className="hover:text-orange-200">Book Greguyschka</a>
                <a href="#testimonials" className="hover:text-orange-200">Testimonials</a>
              </div>
            </div>

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
