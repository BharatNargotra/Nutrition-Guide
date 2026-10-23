import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Supplements() {
  return (
    <>
      <Head><title>Supplements Guide: Evidence-Based Review | NutriGuide</title></Head>
      <Nav />
      <div className="container">
        <h1>Dietary Supplements: Evidence-Based Review</h1>
        <p>The global dietary supplement market exceeds $170 billion and continues to grow. Yet the vast majority of supplements are sold with minimal clinical evidence and are not required to prove safety or efficacy before reaching consumers (in the US, the 1994 DSHEA act classifies supplements as foods, not drugs). This guide applies the same evidence standards used in clinical medicine.</p>

        <h2>Supplements With Strong Evidence</h2>
        <h3>Vitamin D (for deficient populations)</h3>
        <p>Serum 25(OH)D below 20 ng/mL affects an estimated 1 billion people globally. Supplementation of 1,000–4,000 IU/day is safe and effective for correcting deficiency. Evidence supports benefits for bone health (fracture prevention), immune function (reduced respiratory infections), and muscle function. Recent large trials (VITAL study, 25,000 participants) showed no cardiovascular or cancer mortality benefit in replete populations, reinforcing that correction of deficiency — not pharmacological supplementation — is the goal.</p>
        <h3>Omega-3 Fatty Acids (EPA/DHA)</h3>
        <p>At doses of 2–4 g/day, EPA and DHA reliably reduce triglycerides by 20–35%. The REDUCE-IT trial using 4 g/day icosapentaenoic acid (EPA-only Vascepa/icosapent ethyl) in patients with elevated triglycerides on statins showed a 25% relative risk reduction in major cardiovascular events — though this trial remains controversial due to the mineral oil comparator used. Standard over-the-counter fish oil at 1 g/day has not demonstrated cardiovascular event reduction in most large trials. For vegetarians and vegans, algae-based omega-3 is biochemically equivalent and more sustainable.</p>
        <h3>Magnesium</h3>
        <p>Approximately 50% of populations in developed countries fail to meet the RDA. Supplementation may improve sleep quality (supports melatonin synthesis and GABA activity), reduce migraine frequency, improve insulin sensitivity, and lower blood pressure. Magnesium glycinate and magnesium threonate are better tolerated than oxide (which has poor bioavailability and causes diarrhoea). Standard doses: 200–400 mg/day.</p>
        <h3>Iodine (for at-risk individuals)</h3>
        <p>Iodine deficiency is the world's leading preventable cause of intellectual disability. Globally prevalent in inland and mountainous regions. Adequate iodine is critical in pregnancy for fetal brain development. Most table salt is iodised; however, unprocessed salts (sea salt, pink Himalayan salt) are typically not. Vegans avoiding seaweed and iodised salt should supplement 150–220 µg/day.</p>

        <h2>Supplements With Moderate Evidence</h2>
        <h3>Vitamin B12 (for vegans and those on metformin)</h3>
        <p>Metformin, the most widely prescribed type 2 diabetes medication, depletes B12 by impairing ileal absorption via intrinsic factor mechanisms. Long-term metformin users should have B12 monitored annually. All vegans need supplemental B12 — the form (cyanocobalamin vs methylcobalamin) is less important than consistent intake. Cyanocobalamin is more stable and better studied.</p>
        <h3>Zinc (for immune support and wound healing)</h3>
        <p>Zinc lozenges (75 mg/day elemental zinc from zinc acetate) started within 24 hours of cold symptom onset consistently reduce duration by ~33% in Cochrane meta-analyses. Chronic supplementation above 40 mg/day competes with copper absorption and should include copper co-supplementation.</p>

        <h2>Supplements That Are Overhyped</h2>
        <table>
          <thead><tr><th>Supplement</th><th>Common Claim</th><th>Reality</th></tr></thead>
          <tbody>
            <tr><td>Collagen peptides</td><td>"Improves skin, joints, and hair"</td><td>Digested to amino acids like any protein. Skin benefits small and inconsistent. Joint benefits weak. No evidence for hair. Could meet protein needs if cost-effective.</td></tr>
            <tr><td>Vitamin C megadosing (&gt;1g/day)</td><td>"Prevents colds and immunity booster"</td><td>Does not prevent colds in general population. May reduce duration by ~1 day in extreme athletes. GI distress at high doses. Excess excreted.</td></tr>
            <tr><td>Detox supplements (liver cleanses etc.)</td><td>"Flushes toxins"</td><td>The liver, kidneys, and lymphatics detoxify the body continuously. No clinical evidence that any "detox" supplement enhances this. Some (high-dose licorice, comfrey) are hepatotoxic.</td></tr>
            <tr><td>Branched-chain amino acids (BCAAs)</td><td>"Prevents muscle breakdown; grows muscle"</td><td>If total protein intake is adequate, BCAAs provide no additional benefit. The leucine effect requires all EAAs for complete MPS. BCAA supplements are expensive versus whole protein sources.</td></tr>
            <tr><td>Raspberry ketones</td><td>"Melts fat"</td><td>Zero human RCT data at physiological doses. Effect seen only in high-concentration cell/rat studies. No evidence in humans.</td></tr>
            <tr><td>Biotin for hair/nail growth</td><td>"Strengthens hair and nails"</td><td>Effective only if biotin-deficient (rare). No evidence in replete individuals. Biotin at high doses interferes with thyroid and troponin lab assays — a patient safety concern.</td></tr>
          </tbody>
        </table>

        <div className="tip-box">
          <strong>⚠️ Third-Party Testing for Athletes</strong>
          <p style={{marginTop:'0.4rem', marginBottom:0}}>The supplement industry has minimal pre-market regulatory oversight. Athletes subject to anti-doping rules should only use supplements certified by NSF International Certified for Sport, Informed Sport, or USP Verified — programs that test for banned substance contamination. Numerous positive drug tests have been attributed to contaminated supplements.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
