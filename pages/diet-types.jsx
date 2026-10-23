import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function DietTypes() {
  return (
    <>
      <Head><title>Diet Types Explained: Mediterranean, Keto, Vegan & More | NutriGuide</title></Head>
      <Nav />
      <div className="container">
        <h1>Dietary Patterns: Evidence, Benefits & Considerations</h1>
        <p>Hundreds of dietary approaches are promoted for weight loss, longevity, disease prevention, and athletic performance. Here we apply an evidence-based lens to the most widely studied patterns, examining the research rather than marketing claims.</p>

        <h2>Mediterranean Diet</h2>
        <p>The Mediterranean diet (MedDiet) is the most extensively studied dietary pattern in human health research. Based on traditional eating habits of populations bordering the Mediterranean Sea, it emphasises abundant plant foods (vegetables, fruits, legumes, whole grains, nuts), olive oil as the primary fat source, moderate fish and seafood, low-to-moderate poultry and dairy, minimal red meat, and moderate red wine with meals.</p>
        <p>The landmark <strong>PREDIMED trial</strong> (Prevención con Dieta Mediterránea), a Spanish RCT of 7,447 high-cardiovascular-risk adults, found that MedDiet supplemented with extra-virgin olive oil or mixed nuts reduced major cardiovascular events by approximately 30% compared to a low-fat control diet over 5 years. The MedDiet is also strongly associated with reduced risk of type 2 diabetes, certain cancers, cognitive decline, and all-cause mortality. Mechanisms include high polyphenol intake (anti-inflammatory), MUFA-driven LDL reduction, omega-3 from fish, and prebiotic fiber supporting gut microbiome diversity.</p>

        <h2>Ketogenic Diet</h2>
        <p>The ketogenic diet restricts carbohydrates to typically &lt;20–50 g/day, forcing the body into a metabolic state called ketosis, wherein the liver converts fatty acids to ketone bodies (acetoacetate, beta-hydroxybutyrate, acetone) that serve as the primary fuel for the brain and muscles. Fat provides 70–80% of energy, protein 15–25%, with minimal carbohydrates.</p>
        <p>Originally developed in the 1920s as a treatment for refractory epilepsy — where it remains highly effective, reducing seizure frequency by ≥50% in 50–60% of patients — the ketogenic diet has gained mainstream popularity for weight loss and metabolic health. Short-term (≤6 months) trials show impressive weight loss, improved triglycerides, and elevated HDL. However, LDL cholesterol may rise significantly in some individuals. Long-term adherence is challenging due to food restriction, keto flu (a transient adaptation period of fatigue, headache, and brain fog), and potential kidney stress from high protein intake if not carefully managed. Athletes in disciplines requiring explosive, high-intensity effort generally perform worse on ketogenic diets due to impaired muscle glycolysis.</p>

        <h2>Plant-Based Diets</h2>
        <p>Plant-based diets span a spectrum: <strong>flexitarian</strong> (mostly plants, occasional meat), <strong>pescatarian</strong> (plants plus fish), <strong>lacto-ovo vegetarian</strong> (plants, dairy, and eggs), <strong>vegan</strong> (exclusively plants). Large cohort studies including the Adventist Health Study-2 (with 96,000 participants) consistently show that plant-based dieters have lower rates of obesity, type 2 diabetes, hypertension, and ischaemic heart disease, and modestly longer lifespan.</p>
        <p>The <strong>critical nutritional considerations</strong> for vegans include: B12 supplementation (non-negotiable — no reliable plant source exists), vitamin D (especially in northern latitudes), omega-3 EPA/DHA (algae-based supplements bypass low ALA conversion), zinc and iron (with absorption-enhancing strategies), calcium (via fortified milks, tofu set with calcium sulphate, and green vegetables), and iodine (via iodised salt or seaweed, carefully as excess iodine also causes thyroid dysfunction).</p>

        <h2>DASH Diet</h2>
        <p>The Dietary Approaches to Stop Hypertension (DASH) diet was developed specifically to reduce blood pressure without medication. It emphasises fruits, vegetables, low-fat dairy, whole grains, lean protein, and nuts while limiting sodium (&lt;1,500–2,300 mg/day), saturated fats, red meat, sweets, and sugary beverages. Clinical trials show DASH reduces systolic blood pressure by 6–11 mmHg in hypertensive individuals, comparable to the effect of a single antihypertensive medication. The DASH–sodium trial found that combining DASH with a 1,500 mg/day sodium target produced the greatest blood pressure reduction.</p>

        <h2>Paleo Diet</h2>
        <p>The Paleolithic or "paleo" diet is based on the hypothesis that modern humans are genetically best suited to the diet of pre-agricultural hunter-gatherers. It includes meat, fish, eggs, vegetables, fruits, nuts, and seeds while excluding grains, legumes, dairy, refined sugar, and processed foods. While the elimination of ultra-processed foods is clearly beneficial, the premise has scientific limitations: humans have evolved lactase persistence and amylase gene copies since the Paleolithic, suggesting significant dietary adaptation has occurred. Legumes and whole grains excluded by paleo are strongly associated with longevity in multiple blue-zone population studies.</p>

        <h2>Intermittent Fasting</h2>
        <p>Intermittent fasting (IF) refers to eating patterns that cycle between periods of eating and fasting. Common protocols include <strong>16:8</strong> (16-hour daily fast, eating within an 8-hour window), <strong>5:2</strong> (five normal eating days, two days of 500–600 kcal restriction), and <strong>alternate day fasting (ADF)</strong>. The primary proposed mechanisms include caloric restriction by default, improved insulin sensitivity, activation of autophagy (cellular self-cleaning), and beneficial effects on circadian rhythm alignment when the eating window aligns with daylight hours (early time-restricted eating, eTRE).</p>
        <p>Head-to-head RCTs comparing IF to continuous caloric restriction generally show equivalent weight loss over 6–12 months, with IF achieving better adherence in some but not all populations. IF is contraindicated in pregnancy, eating disorder history, type 1 diabetes requiring strict glucose management, and certain medications requiring food. The social disruption of skipping dinner or breakfast also affects long-term sustainability.</p>

        <table>
          <thead><tr><th>Diet</th><th>Strongest Evidence For</th><th>Cautions</th><th>Evidence Grade</th></tr></thead>
          <tbody>
            <tr><td>Mediterranean</td><td>Cardiovascular disease prevention</td><td>High olive oil intake = calorie-dense</td><td>⭐⭐⭐⭐⭐</td></tr>
            <tr><td>DASH</td><td>Hypertension management</td><td>Requires sodium vigilance in restaurant eating</td><td>⭐⭐⭐⭐⭐</td></tr>
            <tr><td>Plant-Based/Vegan</td><td>Cardiometabolic health, diabetes prevention</td><td>B12, iron, DHA must be managed</td><td>⭐⭐⭐⭐</td></tr>
            <tr><td>Ketogenic</td><td>Epilepsy; short-term weight loss</td><td>Long-term data limited; lipid effects vary</td><td>⭐⭐⭐</td></tr>
            <tr><td>Intermittent Fasting</td><td>Weight management (equivalent to CR)</td><td>Not superior to CR; adherence varies</td><td>⭐⭐⭐</td></tr>
            <tr><td>Paleo</td><td>Short-term metabolic improvement</td><td>Excludes nutrient-dense legumes and dairy without strong evidence</td><td>⭐⭐</td></tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}
