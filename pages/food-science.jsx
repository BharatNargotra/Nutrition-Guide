import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function FoodScience() {
  return (
    <>
      <Head><title>Food Science: Cooking, Bioavailability & Nutrition | NutriGuide</title></Head>
      <Nav />
      <div className="container">
        <h1>Food Science: How Processing & Cooking Affect Nutrition</h1>
        <p>Food is not a static collection of nutrients — it is a complex biological matrix that changes profoundly through cooking, fermentation, storage, and industrial processing. Understanding food science helps us make smarter cooking choices and interpret nutrition labels and research more critically.</p>

        <h2>The Maillard Reaction</h2>
        <p>The Maillard reaction is a series of non-enzymatic chemical reactions between amino acids and reducing sugars that occurs when food is heated above approximately 140–165°C. It is responsible for the golden-brown colour and complex flavour of roasted coffee, seared meat, toasted bread, and baked goods. While it enhances palatability, it also produces advanced glycation end-products (AGEs) and, at very high temperatures with certain amino acid–sugar combinations (especially asparagine and glucose), acrylamide — a probable carcinogen. Boiling and steaming at 100°C do not produce acrylamide; it forms in starchy foods (potatoes, cereals) cooked above 120°C. The ALARA principle (As Low As Reasonably Achievable) suggests opting for lighter cooking colours and shorter times where possible without compromising food safety.</p>

        <h2>Bioavailability: How Much Nutrient You Actually Absorb</h2>
        <p>Bioavailability refers to the fraction of an ingested nutrient that reaches systemic circulation and is available for use by body tissues. Bioavailability can differ enormously between food forms of the same nutrient. Iron bioavailability ranges from 2–40% depending on the form (haem vs non-haem), concurrent nutrients (vitamin C enhances; calcium, tea tannins inhibit), and iron status (absorption is upregulated in deficiency). Lycopene (the carotenoid in tomatoes associated with prostate cancer prevention) has 2.5-fold higher bioavailability from cooked/processed tomato products (sauce, paste) than from raw tomatoes, because heat breaks down the cell matrix that sequesters lycopene. Fat-soluble nutrients (carotenoids, lycopene, vitamins A, D, E, K) are consistently better absorbed when consumed with dietary fat.</p>

        <h2>Effects of Common Cooking Methods</h2>
        <table>
          <thead><tr><th>Cooking Method</th><th>Temperature</th><th>Effect on Nutrients</th><th>Best Suited For</th></tr></thead>
          <tbody>
            <tr><td>Raw/No cooking</td><td>—</td><td>Preserves heat-sensitive vitamins (C, folate, B1). BUT reduces digestibility of many nutrients; plant cell walls limit extraction. Some antinutrients present.</td><td>Salad greens, bell peppers, fruits</td></tr>
            <tr><td>Steaming</td><td>100°C</td><td>Minimal vitamin leaching (no water contact). Preserves colour and texture. Best for water-soluble vitamin retention (C, B complex).</td><td>Vegetables, fish, dumplings</td></tr>
            <tr><td>Boiling</td><td>100°C</td><td>Water-soluble vitamins leach into cooking water by 30–60%. Retain cooking water for soups and gravies.</td><td>Pasta, eggs, root vegetables</td></tr>
            <tr><td>Microwaving</td><td>Varies</td><td>Short cooking time preserves water-soluble vitamins well. No browning (no Maillard). Safe for reheating and quick cooking.</td><td>Vegetables, leftovers</td></tr>
            <tr><td>Roasting/Baking</td><td>160–230°C</td><td>Maillard browning; caramelisation of sugars; some vitamin C and folate degradation. Increases digestibility of starch.</td><td>Meat, root vegetables, bread, nuts</td></tr>
            <tr><td>Frying (shallow/deep)</td><td>170–190°C</td><td>Significant fat absorption. High temperatures degrade heat-labile vitamins. Trans fats if oil repeatedly reused. Acrylamide in starchy foods.</td><td>Occasional use; choose stable oils</td></tr>
            <tr><td>Pressure cooking</td><td>120°C</td><td>Shorter cook time reduces vitamin losses compared to prolonged boiling. Effectively destroys antinutrients (lectins in beans, phytates in grains).</td><td>Legumes, tough cuts of meat, grains</td></tr>
            <tr><td>Fermentation</td><td>Room temp</td><td>Increases B vitamins (some B12 analogues), reduces phytates and lectins, increases mineral bioavailability, produces probiotics and postbiotics.</td><td>Dairy, vegetables, soy, grains</td></tr>
          </tbody>
        </table>

        <h2>Antinutrients: Should You Be Worried?</h2>
        <p>Antinutrients are naturally occurring plant compounds that reduce nutrient bioavailability. They include <strong>phytates</strong> (in whole grains and legumes — chelate minerals), <strong>oxalates</strong> (in spinach, rhubarb, nuts — bind calcium), <strong>lectins</strong> (in raw legumes — resist digestion, can damage intestinal lining in very large amounts), <strong>tannins</strong> (in tea, red wine, legumes — inhibit iron absorption), and <strong>goitrogens</strong> (in cruciferous vegetables — may interfere with thyroid function in large raw quantities in iodine-deficient individuals).</p>
        <p>In the context of a varied diet and standard cooking practices, antinutrients are not a meaningful health concern for most people. Soaking legumes overnight and discarding the water removes 30–80% of phytates. Boiling and pressure-cooking destroy lectins. The same foods containing antinutrients also contain abundant fiber, polyphenols, vitamins, and minerals — and population health studies consistently show that legume and whole grain consumers have better health outcomes than those who avoid them.</p>

        <h2>The NOVA Food Classification System</h2>
        <p>Developed at the University of São Paulo, NOVA classifies foods into four groups based on the extent and purpose of processing — not nutrient content. Group 1: Unprocessed or minimally processed foods (whole fruits, vegetables, fresh meat, eggs). Group 2: Processed culinary ingredients (oils, flours, sugar, salt — used to prepare Group 1 foods). Group 3: Processed foods (canned fish, cheese, cured meats, bread — combinations of Groups 1 and 2). Group 4: Ultra-processed foods (UPFs) — industrial formulations with little or no whole food, containing additives not used in home cooking: emulsifiers, artificial colours/flavours, hydrogenated oils, high-fructose corn syrup, protein isolates. Examples include soft drinks, instant noodles, packaged snacks, reconstituted meat products, flavoured yoghurts with multiple additives.</p>
        <p>A 2019 NIH feeding study found that participants randomly assigned to a 2-week UPF diet consumed 500 kcal/day more and gained 0.9 kg compared to the whole-food phase — even though both diets were matched for total sugar, fat, protein, and fiber on a per-calorie basis. UPF consumption is associated with dose-dependent increases in all-cause mortality, cardiovascular disease, type 2 diabetes, depression, and colorectal cancer in large prospective cohort studies.</p>
      </div>
      <Footer />
    </>
  )
}
