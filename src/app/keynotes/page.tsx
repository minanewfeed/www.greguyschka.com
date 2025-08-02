import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function KeynotesPage() {
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
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/keynotes" className="text-white hover:text-gray-300 transition-colors border-b-2 border-orange-500">
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

            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="italic font-script text-orange-400">Featured</span><br />
                Keynotes
              </h1>

              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
                on Leadership, Team Building, Sustained Peak Performance, and Organizational Culture
              </p>

              <div className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
                <p>
                  Transform your organization with keynotes that deliver actionable strategies for building world-class teams and achieving breakthrough performance.
                </p>
              </div>

              <Button className="bg-robyn-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg">
                BOOK GREGUYSCHKA NOW →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Keynotes Overview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Greguyschka's Keynotes?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike most speakers who focus on individual achievement, Greguyschka's keynotes are built on real-world experience leading world champion teams through extreme challenges—exactly what your business faces every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-robyn-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Battle-Tested Strategies</h3>
              <p className="text-gray-600">
                Proven methods from 15 years of world champion adventure racing teams that dominated through teamwork, not individual talent.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customized Content</h3>
              <p className="text-gray-600">
                Every keynote is tailored to your organization's specific challenges, industry, and goals for maximum impact and relevance.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Actionable Takeaways</h3>
              <p className="text-gray-600">
                Practical tools and frameworks your teams can implement immediately to drive measurable results and sustained performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Keynotes */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Signature Keynotes
            </h2>
            <p className="text-xl text-gray-600">
              Choose the keynote that best fits your event goals and audience needs
            </p>
          </div>

          {/* Keynote 1 */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-robyn-orange text-white p-8 rounded-lg h-full">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-4">TEAMWORK</div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                    The 8 Essential Elements of a World-Class Team Culture
                  </h3>
                  <div className="space-y-4 text-lg">
                    <p>
                      Learn the exact framework that enabled Greguyschka's teams to outperform competitors for over a decade, not through superior athleticism, but through superior teamwork.
                    </p>
                    <p>
                      This keynote reveals the 8 non-negotiable elements that transform groups of individuals into unstoppable teams that deliver extraordinary results under pressure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Key Takeaways:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• How to build trust rapidly in high-pressure situations</li>
                    <li>• The "we-thinking" mindset that eliminates silos</li>
                    <li>• Communication strategies for seamless collaboration</li>
                    <li>• Creating accountability without micromanagement</li>
                    <li>• Turning setbacks into team-strengthening opportunities</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Perfect For:</h4>
                  <p className="text-gray-700">
                    Leadership teams, sales organizations, project teams, and any group that needs to perform as one unified force to achieve ambitious goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Keynote 2 */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Key Takeaways:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Breaking down departmental barriers for innovation</li>
                    <li>• Collaborative decision-making under time pressure</li>
                    <li>• Leveraging diverse strengths for breakthrough results</li>
                    <li>• Creating psychological safety for risk-taking</li>
                    <li>• Building momentum through shared victories</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Perfect For:</h4>
                  <p className="text-gray-700">
                    Organizations undergoing transformation, merger integration, cross-functional teams, and companies aiming to accelerate innovation.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-blue-600 text-white p-8 rounded-lg h-full">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-4">WIN AS ONE</div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                    Achieving Breakthrough Performance Through Collaboration, Creativity and a Culture of One!
                  </h3>
                  <div className="space-y-4 text-lg">
                    <p>
                      Discover how to create an organizational culture where every individual's unique strengths amplify the team's collective capability, resulting in performance that exceeds the sum of its parts.
                    </p>
                    <p>
                      This keynote provides the blueprint for building high-performance cultures that thrive on collaboration and drive sustainable competitive advantage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Keynote 3 */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-purple-600 text-white p-8 rounded-lg h-full">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-4">INSPIRING GREATNESS THROUGH G.R.I.T</div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                    Creating The Passion and Perseverance To Pursue The Impossible
                  </h3>
                  <div className="space-y-4 text-lg">
                    <p>
                      Learn how to develop unshakeable resilience and maintain motivation when facing your organization's biggest challenges and most ambitious goals.
                    </p>
                    <p>
                      Based on lessons from conquering the world's most grueling endurance events, this keynote reveals how to build the mental toughness needed for long-term success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Key Takeaways:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Building resilience in the face of constant change</li>
                    <li>• Maintaining team motivation during long projects</li>
                    <li>• Turning obstacles into growth opportunities</li>
                    <li>• Developing a growth mindset across the organization</li>
                    <li>• Creating systems that sustain peak performance</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Perfect For:</h4>
                  <p className="text-gray-700">
                    Organizations facing major challenges, ambitious growth goals, industry disruption, or teams that need to maintain performance through extended pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Keynote 4 */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Key Takeaways:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Developing a championship mindset across teams</li>
                    <li>• Strategic thinking under competitive pressure</li>
                    <li>• Creating sustainable competitive advantages</li>
                    <li>• Building confidence in high-stakes situations</li>
                    <li>• Maintaining excellence as a standard, not an exception</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Perfect For:</h4>
                  <p className="text-gray-700">
                    Sales teams, competitive industries, organizations seeking market leadership, and any group that needs to consistently outperform the competition.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-yellow-500 text-white p-8 rounded-lg h-full">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-4">WHY WINNERS WIN</div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                    The Game-Changing Mindset for Next-level Success
                  </h3>
                  <div className="space-y-4 text-lg">
                    <p>
                      Uncover the mental strategies and decision-making frameworks that separate champions from everyone else, both in adventure racing and business.
                    </p>
                    <p>
                      This keynote reveals the psychology of sustained excellence and how to create a winning culture that delivers results consistently, not just occasionally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What Clients Say About Greguyschka's Keynotes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">MICROSOFT</div>
              </div>
              <blockquote className="text-lg font-medium mb-4">
                "Greguyschka's keynote completely shifted how our teams approach collaboration. The results have been measurable and lasting."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-600">
                — Sarah Johnson, VP of Operations
              </cite>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">DELOITTE</div>
              </div>
              <blockquote className="text-lg font-medium mb-4">
                "The most practical and immediately applicable leadership content we've ever received. Our teams are still implementing her strategies months later."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-600">
                — Michael Chen, Managing Director
              </cite>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">WALMART</div>
              </div>
              <blockquote className="text-lg font-medium mb-4">
                "Greguyschka's insights on team performance have transformed our approach to major initiatives. Breakthrough results speak for themselves."
              </blockquote>
              <cite className="text-sm font-semibold text-gray-600">
                — Lisa Rodriguez, Regional Director
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Every Keynote is <span className="italic font-script text-orange-500">Customized</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Greguyschka doesn't deliver one-size-fits-all presentations. Every keynote is specifically tailored to your organization's industry, challenges, goals, and audience to ensure maximum relevance and impact.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Pre-Event Consultation</h3>
                <p className="text-gray-600">
                  In-depth discussion about your organization's specific challenges, goals, and desired outcomes to ensure the keynote addresses your exact needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Industry-Specific Examples</h3>
                <p className="text-gray-600">
                  Real-world case studies and examples from your industry woven throughout the presentation to maximize relevance and applicability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Audience-Appropriate Content</h3>
                <p className="text-gray-600">
                  Content level and messaging adapted for your specific audience, whether C-suite executives, middle management, or frontline teams.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Actionable Takeaways</h3>
                <p className="text-gray-600">
                  Specific tools and frameworks your teams can implement immediately based on your organizational structure and current initiatives.
                </p>
              </div>
            </div>

            <Button className="bg-robyn-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg">
              DISCUSS YOUR EVENT NEEDS →
            </Button>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-robyn-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Team?
            </h2>

            <p className="text-xl mb-8">
              Book Greguyschka Félix for your next event and give your organization the tools to achieve breakthrough performance through world-class teamwork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg">
                GET SPEAKING FEES & AVAILABILITY
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-8 py-4 rounded-full text-lg">
                DOWNLOAD SPEAKER ONE-SHEET
              </Button>
            </div>

            <div className="mt-8 text-orange-100">
              <p>📞 888.544.4177 | 📧 info@feeliksdynamics.com</p>
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
                <Link href="/keynotes" className="hover:text-orange-200">Keynotes</Link>
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
