import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head><title>NutriGuide — Evidence-Based Nutrition & Diet Information</title></Head>
      <Nav />
      <div className="hero">
        <h1>Understand Your Nutrition</h1>
        <p>Comprehensive, research-backed guidance on macronutrients, micronutrients, dietary patterns, meal planning, and the science behind what we eat.</p>
      </div>
      <div className="container">
        <h2>Explore Our Nutrition Library</h2>
        <div className="card-grid">
          <div className="card">
            <span className="tag">Foundation</span>
            <h3><Link href="/macronutrients">Macronutrients</Link></h3>
            <p>Deep dive into proteins, carbohydrates, and fats — how each fuels your body, optimal ratios, and common myths debunked.</p>
          </div>
          <div className="card">
            <span className="tag">Foundation</span>
            <h3><Link href="/micronutrients">Vitamins & Minerals</Link></h3>
            <p>Why micronutrients are non-negotiable. Essential vitamins, minerals, deficiency signs, and food sources for each.</p>
          </div>
          <div className="card">
            <span className="tag">Diet Patterns</span>
            <h3><Link href="/diet-types">Diet Types Explained</Link></h3>
            <p>Mediterranean, ketogenic, plant-based, paleo, DASH and more — evidence, risks, and who benefits from each approach.</p>
          </div>
          <div className="card">
            <span className="tag">Practical</span>
            <h3><Link href="/meal-planning">Meal Planning Guide</Link></h3>
            <p>Build nutritionally complete, budget-friendly weekly menus. Strategies for batch cooking, portion control, and variety.</p>
          </div>
          <div className="card">
            <span className="tag">Health</span>
            <h3><Link href="/gut-health">Gut Health & Microbiome</Link></h3>
            <p>The gut–brain connection, the role of fiber and fermented foods, probiotics vs prebiotics, and signs of dysbiosis.</p>
          </div>
          <div className="card">
            <span className="tag">Performance</span>
            <h3><Link href="/sports-nutrition">Sports Nutrition</Link></h3>
            <p>Fueling for endurance, strength, and recovery. Timing, hydration, carb loading, and ergogenic aids reviewed.</p>
          </div>
          <div className="card">
            <span className="tag">Goals</span>
            <h3><Link href="/weight-management">Weight Management</Link></h3>
            <p>Evidence-based strategies beyond calorie counting — metabolism, satiety hormones, sustainable deficits, and set-point theory.</p>
          </div>
          <div className="card">
            <span className="tag">Supplements</span>
            <h3><Link href="/supplements">Supplement Guide</Link></h3>
            <p>Which supplements have strong evidence, which are overhyped, dosing protocols, and interactions to watch for.</p>
          </div>
          <div className="card">
            <span className="tag">Science</span>
            <h3><Link href="/food-science">Food Science</Link></h3>
            <p>How cooking changes nutrient content, the Maillard reaction, bioavailability, processing effects, and glycemic index explained.</p>
          </div>
        </div>

        <h2>Key Nutritional Principles</h2>
        <p>Modern nutritional science revolves around a few foundational ideas. First, <strong>dietary variety</strong> remains the most robust predictor of micronutrient adequacy — no single food or supplement can replicate the synergistic effects of a diverse whole-food diet. Second, the quality of calories matters significantly: 500 kcal of ultra-processed food produces a markedly different metabolic response than 500 kcal of whole grains, legumes, or lean proteins. Third, individual variation — driven by genetics, gut microbiome composition, activity level, age, and health status — means there is no single "perfect" diet for all humans.</p>

        <div className="tip-box">
          <strong>📌 Evidence Hierarchy in Nutrition Research</strong>
          <p style={{marginTop:'0.5rem', marginBottom:0}}>Not all nutrition studies are equal. Randomised controlled trials (RCTs) with adequate power and duration are most reliable, but hard to conduct over long periods. Large prospective cohort studies (like the Nurses' Health Study) track real populations over decades and generate strong associative evidence. Mechanistic lab studies explain why something works. Be cautious of small cross-over studies, industry-funded trials, and observational data drawing causal conclusions.</p>
        </div>

        <h2>Daily Reference Values at a Glance</h2>
        <table>
          <thead><tr><th>Nutrient</th><th>Adult Daily Value (DV)</th><th>Primary Function</th></tr></thead>
          <tbody>
            <tr><td>Protein</td><td>50 g (0.8 g/kg body weight)</td><td>Tissue building, enzymes, hormones</td></tr>
            <tr><td>Total Fat</td><td>65–78 g (20–35% of calories)</td><td>Hormone synthesis, fat-soluble vitamins</td></tr>
            <tr><td>Carbohydrates</td><td>130 g minimum (EAR); 225–325 g at 2,000 kcal</td><td>Primary brain and muscle fuel</td></tr>
            <tr><td>Dietary Fiber</td><td>25–38 g</td><td>Gut microbiome, satiety, blood sugar</td></tr>
            <tr><td>Sodium</td><td>≤ 2,300 mg</td><td>Fluid balance, nerve conduction</td></tr>
            <tr><td>Calcium</td><td>1,000–1,200 mg</td><td>Bone density, muscle contraction</td></tr>
            <tr><td>Iron</td><td>8 mg (men), 18 mg (women pre-menopause)</td><td>Oxygen transport</td></tr>
            <tr><td>Vitamin D</td><td>600–800 IU (15–20 µg)</td><td>Calcium absorption, immune function</td></tr>
            <tr><td>Potassium</td><td>2,600–3,400 mg</td><td>Blood pressure regulation</td></tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}
