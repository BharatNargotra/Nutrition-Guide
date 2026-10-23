import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function SportsNutrition() {
  return (
    <>
      <Head><title>Sports Nutrition: Fuel for Performance & Recovery | NutriGuide</title></Head>
      <Nav />
      <div className="container">
        <h1>Sports Nutrition: Fuelling Performance and Recovery</h1>
        <p>Sports nutrition sits at the intersection of exercise physiology, biochemistry, and behavioural science. Getting nutrition right can mean the difference between a podium finish and hitting the wall at kilometre 35 of a marathon. Modern sports nutrition has moved well beyond protein shakes and energy gels — it encompasses periodised nutrition (eating differently on different training days), gut training, sleep nutrition, and sophisticated timing protocols.</p>

        <h2>Energy Systems & Substrate Utilisation</h2>
        <p>Exercise intensity dictates which energy system predominates. At low intensities (&lt;65% VO₂max), fat oxidation provides the majority of ATP. As intensity rises above the lactate threshold (typically 75–90% VO₂max), carbohydrates become the dominant fuel. At maximal intensities (sprinting, heavy lifting), the phosphocreatine (PCr) system provides ATP in under 10 seconds, followed by anaerobic glycolysis. Understanding this underpins sports nutrition decisions: endurance athletes need carbohydrate loading and careful glycogen management; strength athletes need creatine and adequate protein; team sport athletes need strategies for all three systems.</p>

        <h2>Carbohydrate Loading for Endurance</h2>
        <p>Carbohydrate loading (glycogen supercompensation) significantly improves performance in events lasting &gt;90 minutes. The modern protocol involves a 3-day carbohydrate loading phase (8–12 g/kg/day of carbohydrate, tapering exercise) immediately before competition, following a glycogen-depleting training period. This can increase muscle glycogen from ~100 mmol/kg to 150–200 mmol/kg dry weight, effectively extending the duration before "hitting the wall" (the point of glycogen depletion). Practical foods: rice, pasta, bread, oats, potatoes, bananas. Glycogen stores also retain water (~3 g water per g glycogen), causing transient 1–2 kg weight gain that is normal and expected.</p>

        <h2>During Exercise: Carbohydrate Intake</h2>
        <p>For exercise lasting 45–75 minutes, mouth rinsing with carbohydrate solution (without swallowing) activates brain reward pathways and improves performance. For 1–2.5 hours: 30–60 g carbohydrate/hour from a single source (glucose or maltodextrin). For &gt;2.5 hours: 60–90 g carbohydrate/hour from <em>multiple transportable carbohydrates</em> — specifically a 2:1 ratio of glucose:fructose, because these use different intestinal transporters (SGLT1 for glucose, GLUT5 for fructose) and their combined use maximises absorption without gastrointestinal distress. Elite cyclists and ultramarathon runners can train the gut to absorb 100–120 g/hour at the highest intensities.</p>

        <h2>Protein for Athletes</h2>
        <p>The International Society of Sports Nutrition (ISSN) position stand recommends 1.4–2.0 g/kg/day for active individuals, with the higher end (1.8–2.2 g/kg/day) for those seeking to maximise muscle hypertrophy or preserve lean mass during caloric restriction. Distribution matters: 0.4 g/kg per meal across 4 meals maximises MPS more than 2 larger meals providing the same total daily intake. Pre-sleep protein (40 g casein 30 minutes before bed) is strongly supported by Maastricht University research showing enhanced overnight MPS and improved next-day performance.</p>

        <h2>Hydration & Electrolytes</h2>
        <p>Even 2% body weight loss through sweat impairs aerobic performance. Sweat composition varies enormously between individuals (0.5–2.5 L/hour, sodium 200–2,000 mg/L), which is why individualised sweat testing is becoming standard in elite sport. General guidelines: drink 400–600 mL in the 2 hours before exercise; during exercise, aim to limit losses to &lt;2% body weight (approximately 400–800 mL/hour for most conditions); post-exercise, replace 150% of fluid lost (weigh before and after to calculate). Sodium in sports drinks is not just for taste — it sustains the drive to drink, reduces urinary losses, and aids intestinal glucose co-transport. Hyponatraemia (low blood sodium from excessive plain water intake) is more dangerous than dehydration in endurance events.</p>

        <h2>Creatine: The Most Evidenced Ergogenic Aid</h2>
        <p>Creatine monohydrate is the most researched and effective sports supplement, with over 500 peer-reviewed studies. It increases phosphocreatine stores by 10–40%, directly enhancing ATP availability for high-intensity, short-duration efforts. Benefits include improved power output in repeated sprints, increased total training volume (the primary driver of hypertrophy), and enhanced strength and lean mass gains in resistance training. Loading protocol: 20 g/day in 4 doses for 5–7 days, followed by 3–5 g/day maintenance. Non-loading: 3–5 g/day reaches saturation in ~28 days. Creatine monohydrate is safe in healthy individuals across all ages and is well-supported in older adults for sarcopenia prevention. "Non-responders" (approximately 25–30% of individuals) have naturally higher baseline creatine stores, often from high meat intake.</p>

        <h2>Recovery Nutrition</h2>
        <p>Post-exercise recovery nutrition targets three key goals: glycogen resynthesis, muscle protein synthesis, and rehydration. Glycogen resynthesis is fastest (5–8 mmol/kg/hr) in the 2-hour window after exercise, especially with high-GI carbohydrates — this "anabolic window" matters most when athletes train twice daily or on consecutive days. For once-daily training, total daily carbohydrate intake is more important than precise timing. Co-ingesting protein with post-exercise carbohydrates (4:1 carb:protein ratio) does not accelerate glycogen resynthesis in isolation, but improves MPS and may reduce muscle damage markers (CK, IL-6) after eccentric exercise.</p>

        <table>
          <thead><tr><th>Supplement</th><th>Evidence Level</th><th>Best Use Case</th><th>Effective Dose</th></tr></thead>
          <tbody>
            <tr><td>Creatine monohydrate</td><td>A (Strong)</td><td>Strength, power, hypertrophy</td><td>3–5 g/day maintenance</td></tr>
            <tr><td>Caffeine</td><td>A (Strong)</td><td>Endurance, cognitive, strength</td><td>3–6 mg/kg body weight, 45–60 min pre-exercise</td></tr>
            <tr><td>Beta-alanine</td><td>B (Moderate)</td><td>Events 1–4 min; high-intensity intervals</td><td>3.2–6.4 g/day (split to reduce paraesthesia)</td></tr>
            <tr><td>Sodium bicarbonate</td><td>B (Moderate)</td><td>High-intensity &gt;1 min; team sports</td><td>0.3 g/kg, 60–90 min pre-exercise</td></tr>
            <tr><td>Nitrates (beetroot)</td><td>B (Moderate)</td><td>Endurance; improved O₂ economy</td><td>6–8 mmol nitrate ~2.5 hours pre-exercise</td></tr>
            <tr><td>Protein supplements</td><td>A (for meeting protein targets)</td><td>Convenience; post-exercise</td><td>Per total daily protein goal</td></tr>
            <tr><td>Vitamin D</td><td>B (if deficient)</td><td>Muscle function, immune support</td><td>1,000–4,000 IU/day (based on blood level)</td></tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}
