import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Macronutrients() {
  return (
    <>
      <Head><title>Macronutrients: Protein, Carbs & Fat | NutriGuide</title></Head>
      <Nav />
      <div className="container">
        <h1>Macronutrients: The Energy Providers</h1>
        <p>Macronutrients — protein, carbohydrates, and fat — are the three classes of nutrients the body requires in large amounts to produce energy, build structures, and regulate physiology. Understanding their distinct biochemical roles, caloric densities, and optimal intake ranges is central to any nutritional framework.</p>

        <h2 id="protein">Protein</h2>
        <p>Protein is composed of amino acids linked in long chains called polypeptides. Of the 20 standard amino acids, 9 are termed <strong>essential amino acids (EAAs)</strong> — histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine — because the human body cannot synthesize them and must obtain them from food.</p>
        <p>Protein provides 4 kcal per gram. Beyond energy, its primary roles are structural (collagen, muscle actin and myosin), enzymatic (thousands of metabolic reactions), hormonal (insulin, glucagon), immune (antibodies), and transport-related (haemoglobin, albumin).</p>
        <h3>Recommended Intake</h3>
        <p>The RDA for sedentary adults is <strong>0.8 g per kg body weight per day</strong>, but this represents the minimum to prevent deficiency, not the optimum. Meta-analyses of resistance-training populations support intakes of 1.6–2.2 g/kg/day for maximising muscle protein synthesis (MPS). Older adults (≥65 years) benefit from higher intakes — 1.2–1.6 g/kg/day — to counter sarcopenia, the age-related loss of muscle mass.</p>
        <h3>Protein Quality & PDCAAS/DIAAS</h3>
        <p>Not all proteins are equal. The <strong>Protein Digestibility-Corrected Amino Acid Score (PDCAAS)</strong> and the newer <strong>Digestible Indispensable Amino Acid Score (DIAAS)</strong> assess protein quality by measuring both amino acid completeness and actual digestibility in the human gut. Animal proteins (eggs, dairy, meat, fish) generally score 1.0 (maximum), while most plant proteins score lower due to limiting amino acids — though combining plant proteins across a day (e.g. rice + legumes) achieves full EAA profiles.</p>
        <h3>Leucine & Muscle Protein Synthesis</h3>
        <p>Leucine acts as a primary anabolic signal, activating the mTORC1 pathway that triggers MPS. A "leucine threshold" of approximately 2–3 g per meal is thought necessary to maximally stimulate MPS, which informs recommendations to distribute protein across 3–4 meals of 25–40 g each rather than consuming it all in one or two large meals.</p>
        <div className="tip-box">
          <strong>High-Quality Protein Sources</strong>
          <p style={{marginTop:'0.4rem', marginBottom:0}}>Eggs (6 g / large egg, DIAAS ~1.13), Greek yoghurt (17 g / 170 g), chicken breast (31 g / 100 g), canned tuna (25 g / 100 g), lentils (9 g / 100 g cooked, DIAAS ~0.59), tofu (8 g / 100 g), tempeh (19 g / 100 g).</p>
        </div>

        <h2 id="carbohydrates">Carbohydrates</h2>
        <p>Carbohydrates are molecules of carbon, hydrogen, and oxygen grouped as monosaccharides (glucose, fructose, galactose), disaccharides (sucrose, lactose, maltose), oligosaccharides, and polysaccharides (starch, glycogen, cellulose). They provide 4 kcal per gram. Glucose is the preferred fuel for the brain (consuming ~120 g/day) and for high-intensity anaerobic exercise.</p>
        <h3>Glycemic Index & Glycemic Load</h3>
        <p>The <strong>Glycemic Index (GI)</strong> ranks carbohydrate foods on a 0–100 scale based on how rapidly they raise blood glucose compared to pure glucose. Low GI (&lt;55) foods — oats, lentils, most vegetables — produce a gradual glucose rise. High GI (≥70) foods — white bread, short-grain rice, glucose drinks — cause rapid spikes. However, GI is measured for a fixed 50 g carbohydrate portion, so <strong>Glycemic Load (GL = GI × grams of carbs ÷ 100)</strong> is more clinically useful since it accounts for portion size. Watermelon has a high GI (~76) but very low GL per serving (~5) due to its high water content.</p>
        <h3>Dietary Fiber: Soluble vs Insoluble</h3>
        <p><strong>Soluble fiber</strong> (found in oats, apples, psyllium, legumes) dissolves in water to form a viscous gel that slows gastric emptying, attenuates post-meal glucose spikes, and binds bile acids, lowering LDL cholesterol. <strong>Insoluble fiber</strong> (wheat bran, vegetable skins, cellulose) adds bulk to stool, accelerates transit time, and is associated with reduced colorectal cancer risk. Most adults consume only 15–17 g/day versus the 25–38 g recommendation.</p>
        <h3>Resistant Starch</h3>
        <p>Resistant starch (RS) escapes small-intestine digestion and is fermented by colonic bacteria, producing short-chain fatty acids (SCFAs) — particularly butyrate, which is the primary fuel of colonocytes and has anti-inflammatory properties. Retrograding cooked-and-cooled potatoes or rice increases RS content. High RS intake is associated with improved insulin sensitivity and a more favorable gut microbiome profile.</p>

        <h2 id="fat">Dietary Fat</h2>
        <p>Fat provides 9 kcal per gram — more than twice that of protein or carbohydrate. It is essential for absorbing fat-soluble vitamins (A, D, E, K), synthesising steroid hormones (estrogen, testosterone, cortisol), maintaining cell membrane fluidity, and protecting organs.</p>
        <h3>Saturated vs Unsaturated Fatty Acids</h3>
        <p><strong>Saturated fatty acids (SFAs)</strong> have no double bonds. Found predominantly in animal products (butter, lard, fatty meat) and tropical oils (coconut, palm), high SFA intake raises LDL-cholesterol, specifically the small, dense LDL particles most atherogenic. The 2020–2025 Dietary Guidelines recommend limiting SFAs to &lt;10% of total energy.</p>
        <p><strong>Monounsaturated fatty acids (MUFAs)</strong> — oleic acid in olive oil, avocado, and nuts — have one double bond, are stable against oxidation, and replace SFAs to reduce LDL without lowering HDL. MUFAs are the hallmark of the Mediterranean diet.</p>
        <p><strong>Polyunsaturated fatty acids (PUFAs)</strong> have multiple double bonds. Omega-6 PUFAs (linoleic acid) and omega-3 PUFAs (ALA, EPA, DHA) are essential. Omega-3 fatty acids EPA and DHA, found in fatty fish (salmon, mackerel, sardines) and algae-based supplements, reduce triglycerides, modulate inflammatory eicosanoids, and are protective against cardiovascular disease. The Western diet has an omega-6:omega-3 ratio of roughly 15:1, compared to the evolutionarily likely 4:1, which may promote chronic low-grade inflammation.</p>
        <h3>Trans Fatty Acids</h3>
        <p>Industrially produced trans fats (partially hydrogenated oils) are uniquely harmful — they simultaneously raise LDL and lower HDL. The WHO estimates trans fats cause 500,000 cardiovascular deaths annually. They have been largely banned or restricted in the US, EU, and India. Small amounts of naturally occurring trans fats (vaccenic acid, conjugated linoleic acid) in dairy and beef have a different metabolic profile and are not considered harmful at usual dietary intakes.</p>

        <h2>Macronutrient Ratios for Different Goals</h2>
        <table>
          <thead><tr><th>Goal</th><th>Protein</th><th>Carbohydrates</th><th>Fat</th></tr></thead>
          <tbody>
            <tr><td>General Health (Sedentary)</td><td>15–20%</td><td>45–55%</td><td>25–35%</td></tr>
            <tr><td>Muscle Gain (Resistance Training)</td><td>25–35%</td><td>40–50%</td><td>20–30%</td></tr>
            <tr><td>Endurance Performance</td><td>15–20%</td><td>55–65%</td><td>20–25%</td></tr>
            <tr><td>Fat Loss (Caloric Deficit)</td><td>30–40%</td><td>30–40%</td><td>25–35%</td></tr>
            <tr><td>Ketogenic Diet</td><td>15–25%</td><td>3–5%</td><td>70–80%</td></tr>
            <tr><td>Mediterranean Pattern</td><td>15–20%</td><td>45–55%</td><td>30–40% (mostly MUFA)</td></tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}
