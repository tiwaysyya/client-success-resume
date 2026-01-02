import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const JumpstartCV = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <Button onClick={() => window.print()} size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* CV Content */}
        <div className="bg-white text-black p-8 shadow-lg print:shadow-none print:p-0">
          {/* Header */}
          <header className="border-b-2 border-black pb-4 mb-6">
            <h1 className="text-3xl font-bold tracking-tight mb-2">TIWAYSYYA SANTHRA SEGARAN</h1>
            <p className="text-sm">
              London, UK | tiwaysyya@gmail.com | +44 7778007951 | LinkedIn
            </p>
          </header>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-lg font-bold border-b border-black mb-3 pb-1">EDUCATION</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">BSc Biotechnology (Hons)</h3>
                  <p className="text-sm">Imperial College London</p>
                </div>
                <span className="text-sm">Oct 2022 – Jun 2025</span>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                <li>Upper Second Class Honours (68.88%)</li>
                <li>Two 1st Class research dissertations on enzyme kinetics and cancer immunotherapy</li>
                <li>Courses: Corporate Finance, Entrepreneurship, Metabolic Engineering</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Cambridge A-Levels</h3>
                  <p className="text-sm">Methodist College Kuala Lumpur</p>
                </div>
                <span className="text-sm">Jan 2020 – May 2021</span>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                <li>4A*s: Mathematics, Biology, Chemistry, Physics</li>
                <li>Top 1% of cohort | Merit Scholarship | Dean's List</li>
              </ul>
            </div>
          </section>

          {/* Employment & Work Experience */}
          <section className="mb-6">
            <h2 className="text-lg font-bold border-b border-black mb-3 pb-1">EMPLOYMENT & WORK EXPERIENCE</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Equity Analyst Intern (Buy Side)</h3>
                  <p className="text-sm">RHB Asset Management, Kuala Lumpur</p>
                </div>
                <span className="text-sm">Jul 2024 – Aug 2024</span>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                <li>Built financial models for 2 companies (&gt;RM 15B combined market cap): DCF, peer benchmarking, ESG mapping</li>
                <li>Contributed to 5+ equity research reports informing multi-million investment decisions</li>
                <li>Presented stock pitch on Sunway Construction to portfolio managers; elevated to top-priority status</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Patent Law Intern</h3>
                  <p className="text-sm">KASS International, Kuala Lumpur</p>
                </div>
                <span className="text-sm">Aug 2023 – Sep 2023</span>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                <li>Executed prior art diligence on biotech patents; 30% faster attorney turnaround</li>
                <li>Collaborated with 6 specialists; reduced examiner objections by 15%</li>
                <li>Authored 10+ explainer articles on regulatory constraints</li>
              </ul>
            </div>
          </section>

          {/* Leadership & Extracurricular */}
          <section className="mb-6">
            <h2 className="text-lg font-bold border-b border-black mb-3 pb-1">EXTRACURRICULAR & VOLUNTEER</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Product & Market Strategy Lead</h3>
                  <p className="text-sm">CO2LLECT (Climate Tech Startup), London</p>
                </div>
                <span className="text-sm">Oct 2023 – Jun 2024</span>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                <li>Won 1st place in startup pitch competition; secured VC and Imperial Enterprise Lab interest</li>
                <li>Conducted 50+ interviews with farmers, logisticians, regulators to validate commercial model</li>
                <li>Designed pricing model and go-to-market strategy using competitor benchmarking</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Investment Editorial Head</h3>
                  <p className="text-sm">Imperial Investment Society, London</p>
                </div>
                <span className="text-sm">Oct 2024 – Jun 2025</span>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                <li>Led ESG coverage producing sustainability analysis for 1,500+ readers</li>
                <li>Grew newsletter audience 45%; led 10-person team to 100% on-time publication</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Strategy & Branding Director</h3>
                  <p className="text-sm">GenCorporate, London</p>
                </div>
                <span className="text-sm">Oct 2023 – Oct 2024</span>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                <li>Grew membership 50% and engagement 80% through data-driven outreach</li>
                <li>Built 15+ partnerships (McKinsey, EY, PwC); hosted panels for 150+ participants at 95% satisfaction</li>
              </ul>
            </div>
          </section>

          {/* Additional Qualifications */}
          <section className="mb-6">
            <h2 className="text-lg font-bold border-b border-black mb-3 pb-1">ADDITIONAL QUALIFICATIONS</h2>
            <div className="text-sm space-y-2">
              <p><span className="font-semibold">Technical:</span> Excel (Modelling, VBA), Python, SQL, Power BI, Tableau, Bloomberg</p>
              <p><span className="font-semibold">Projects:</span> Biotech Market Dashboard (strategy tool for founders/investors), Lab Protocol Web App (workflow automation)</p>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-lg font-bold border-b border-black mb-3 pb-1">LANGUAGES</h2>
            <p className="text-sm">English (Native) | Malay (Conversational) | Tamil (Basic)</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JumpstartCV;
