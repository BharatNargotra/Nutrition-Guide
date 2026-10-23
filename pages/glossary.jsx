import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Glossary() {
  const terms = [
    { term: 'Amino Acid', def: 'The monomer building blocks of proteins. Twenty standard amino acids exist; 9 are essential (must be obtained from food).' },
    { term: 'Antioxidant', def: 'Molecules that neutralise free radicals (reactive oxygen species) and prevent oxidative damage to cells. Include vitamins C, E, selenium, and polyphenols.' },
    { term: 'Basal Metabolic Rate (BMR)', def: 'The minimum energy required to sustain life at complete rest — breathing, circulation, temperature regulation. Accounts for 60–75% of TDEE.' },
    { term: 'Bioavailability', def: 'The proportion of an ingested nutrient that enters the bloodstream and is available for physiological use.' },
    { term: 'Blood Glucose', def: 'The concentration of glucose in blood, tightly regulated between 70–100 mg/dL fasting. Dysregulation leads to diabetes or hypoglycemia.' },
    { term: 'BMI (Body Mass Index)', def: 'Weight (kg) ÷ Height² (m²). A population screening tool — not an individual diagnostic — for underweight (<18.5), normal (18.5–24.9), overweight (25–29.9), and obese (≥30).' },
    { term: 'Caloric Density', def: 'Calories per gram of food. Fat (9 kcal/g) > carbohydrates/protein (4 kcal/g). Low caloric density foods (vegetables, soups) allow larger volumes for fewer calories.' },
    { term: 'Carotenoids', def: 'Plant pigments (beta-carotene, lycopene, lutein, zeaxanthin) that act as antioxidants and provitamin A sources. Found in yellow, orange, red, and dark green produce.' },
    { term: 'Cholesterol', def: 'A sterol essential for cell membranes, steroid hormones, bile acids, and vitamin D synthesis. Transported as LDL (associated with atherosclerosis risk) and HDL (protective).' },
    { term: 'Dietary Reference Intake (DRI)', def: 'An umbrella term for reference values including the RDA (Recommended Dietary Allowance), EAR (Estimated Average Requirement), AI (Adequate Intake), and UL (Tolerable Upper Intake Level).' },
    { term: 'Dyslipidemia', def: 'Abnormal blood lipid levels — elevated LDL, elevated triglycerides, or low HDL. A major modifiable cardiovascular risk factor addressable through diet.' },
    { term: 'Essential Fatty Acid (EFA)', def: 'Fatty acids the body cannot synthesise and must obtain from food: linoleic acid (omega-6) and alpha-linolenic acid (ALA, omega-3). EPA and DHA are conditionally essential.' },
    { term: 'Fermentation', def: 'Microbial conversion of carbohydrates to acids, gases, or alcohol. Enhances food preservation, increases nutrient bioavailability, and produces probiotic microorganisms.' },
    { term: 'Folic Acid / Folate', def: 'Vitamin B9. Folate is the naturally occurring form; folic acid is the synthetic form in supplements/fortified foods (better absorbed). Critical in pregnancy for neural tube formation.' },
    { term: 'Free Radical', def: 'Unstable molecules with unpaired electrons that react with and damage DNA, proteins, and lipids. Produced by normal metabolism, inflammation, UV radiation, and smoking.' },
    { term: 'Gluconeogenesis', def: 'The synthesis of new glucose in the liver and kidneys from non-carbohydrate substrates (amino acids, glycerol, lactate). Maintains blood glucose during fasting.' },
    { term: 'Glycaemic Index (GI)', def: 'A ranking of carbohydrate foods on a 0–100 scale based on how rapidly they raise blood glucose compared to pure glucose. Low (<55), Medium (56–69), High (≥70).' },
    { term: 'Gut Microbiome', def: 'The community of approximately 38 trillion microorganisms (bacteria, viruses, fungi) inhabiting the gastrointestinal tract, profoundly influencing immunity, metabolism, and brain function.' },
    { term: 'Insulin Resistance', def: 'A state where cells respond less effectively to insulin, requiring higher insulin concentrations to maintain glucose homeostasis. Precursor to type 2 diabetes and metabolic syndrome.' },
    { term: 'Ketosis', def: 'A metabolic state in which fat breakdown produces ketone bodies (beta-hydroxybutyrate, acetoacetate) that replace glucose as the primary fuel. Induced by fasting or very low carbohydrate intake.' },
    { term: 'Lectin', def: 'Carbohydrate-binding proteins found in legumes, grains, and nightshades. Largely deactivated by cooking. At high raw concentrations, can cause GI distress.' },
    { term: 'Lipid', def: 'A class of hydrophobic molecules including fats, oils, waxes, phospholipids, and sterols. Essential for energy storage, membrane structure, and signalling.' },
    { term: 'Metabolic Syndrome', def: 'A cluster of conditions — abdominal obesity, elevated blood glucose, hypertension, low HDL, elevated triglycerides — that significantly increase risk of type 2 diabetes and cardiovascular disease.' },
    { term: 'Microbiome', def: 'The collective genomes of all microorganisms in a given environment. The gut microbiome contains 150–200 times more genes than the human genome.' },
    { term: 'mTOR (mechanistic Target Of Rapamycin)', def: 'A key kinase that integrates nutrient signals (especially leucine and insulin) to regulate cell growth, protein synthesis, and autophagy.' },
    { term: 'Phytate (Phytic Acid)', def: 'An antinutrient in whole grains, legumes, and seeds that binds minerals (iron, zinc, calcium) and reduces their absorption. Reduced by soaking, fermentation, and cooking.' },
    { term: 'Polyphenol', def: 'A large class of plant secondary metabolites with antioxidant and anti-inflammatory properties. Include flavonoids, phenolic acids, stilbenes (resveratrol), and lignans. Over 8,000 identified.' },
    { term: 'Probiotic', def: 'Live microorganisms that, when administered in adequate amounts, confer a health benefit on the host. Effects are strain-specific and indication-specific.' },
    { term: 'Satiety', def: 'The feeling of fullness and suppression of appetite after eating. Regulated by gastric stretch, hormones (GLP-1, PYY, CCK), and macronutrient composition — protein highest, fat moderate, refined carbs lowest.' },
    { term: 'Short-Chain Fatty Acids (SCFAs)', def: 'Metabolites produced by gut bacteria fermenting dietary fiber. Include acetate, propionate, and butyrate. Butyrate is the primary colonocyte fuel and has anti-inflammatory properties.' },
    { term: 'TDEE (Total Daily Energy Expenditure)', def: 'The total calories burned per day: BMR + Thermic Effect of Food (TEF) + Exercise Activity Thermogenesis (EAT) + Non-Exercise Activity Thermogenesis (NEAT).' },
    { term: 'Trans Fat', def: 'Unsaturated fats with a trans rather than cis double-bond configuration. Industrial trans fats (partially hydrogenated oils) raise LDL, lower HDL, and cause cardiovascular disease. WHO targets global elimination.' },
    { term: 'Triglyceride', def: 'The main storage form of fat in the body and a common dietary fat form. Elevated fasting triglycerides (>150 mg/dL) are a risk factor for cardiovascular disease and pancreatitis.' },
  ]
  return (
    <>
      <Head><title>Nutrition Glossary: A–Z Definitions | NutriGuide</title></Head>
      <Nav />
      <div className="container">
        <h1>Nutrition Glossary</h1>
        <p>Definitions for key terms used throughout NutriGuide, drawn from clinical nutrition, biochemistry, and evidence-based medicine.</p>
        {terms.map(({ term, def }) => (
          <div key={term} style={{ borderBottom: '1px solid #d8f3dc', padding: '0.75rem 0' }}>
            <strong style={{ color: '#1b4332' }}>{term}</strong>
            <p style={{ marginBottom: 0, marginTop: '0.25rem' }}>{def}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
