import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Micronutrients() {
  return (
    <>
      <Head><title>Vitamins & Minerals: Micronutrients Guide | NutriGuide</title></Head>
      <Nav />
      <div className="container">
        <h1>Vitamins & Minerals: The Regulatory Micronutrients</h1>
        <p>Micronutrients are vitamins and minerals required in small amounts but absolutely essential for growth, metabolism, immune function, and disease prevention. Unlike macronutrients, they do not provide energy, but without them, the enzymatic reactions that extract energy from macronutrients cannot proceed. Deficiencies remain a global health crisis — over 2 billion people suffer from "hidden hunger," a term for micronutrient malnutrition without overt caloric deprivation.</p>

        <h2>Fat-Soluble Vitamins (A, D, E, K)</h2>
        <p>Fat-soluble vitamins are stored in body fat and the liver, which means they do not need daily replenishment but also means toxicity is possible with excess supplementation — unlike water-soluble vitamins, which are excreted in urine.</p>

        <h3>Vitamin A (Retinol, Beta-Carotene)</h3>
        <p>Vitamin A is critical for vision (the rhodopsin visual cycle), immune defense, cell differentiation, and reproductive function. Two dietary forms exist: preformed retinol from animal sources (liver, dairy, eggs) and provitamin A carotenoids (beta-carotene in carrots, sweet potatoes, and leafy greens) that are converted to retinol in the intestinal wall with highly variable efficiency (~12:1 ratio). Deficiency is the leading preventable cause of childhood blindness globally. Excess preformed retinol (from supplements) is teratogenic in pregnancy.</p>

        <h3>Vitamin D (Calciferol)</h3>
        <p>Often called the "sunshine vitamin," vitamin D is synthesised in the skin from 7-dehydrocholesterol upon UVB exposure. Dietary sources are limited: fatty fish, egg yolks, UV-irradiated mushrooms, and fortified foods. After skin synthesis or ingestion, it is hydroxylated in the liver to 25(OH)D (the storage form, measured in blood tests) and then in the kidneys to the active 1,25(OH)₂D (calcitriol).</p>
        <p>Calcitriol acts as a hormone, regulating over 200 gene targets. Its classical role is calcium and phosphate absorption to maintain bone mineralisation. Beyond bone health, adequate vitamin D status is associated with reduced risk of colorectal cancer, improved immune modulation (reducing risk of respiratory infections and autoimmune conditions), and lower risk of type 2 diabetes. The optimal serum 25(OH)D level is debated but most experts recommend 40–60 ng/mL. Supplementation of 1,000–4,000 IU/day is commonly recommended for deficient populations, particularly those living in high latitudes, those with darker skin pigmentation (which reduces UVB synthesis), the obese (who sequester vitamin D in fat), and the elderly.</p>

        <h3>Vitamin E (Tocopherols)</h3>
        <p>Vitamin E is a group of eight fat-soluble compounds; alpha-tocopherol is the form preferentially maintained in human plasma. It is the primary chain-breaking antioxidant in cell membranes, protecting PUFAs from oxidative damage. Good sources include wheat germ oil, sunflower seeds, almonds, and hazelnuts. Clinical deficiency is rare in humans but causes peripheral neuropathy and ataxia in severe cases. High-dose supplementation (&gt;400 IU/day) has not shown cardiovascular benefits and may even increase all-cause mortality in some meta-analyses, illustrating that antioxidant supplements do not replicate the effects of food-form vitamins.</p>

        <h3>Vitamin K (K1 & K2)</h3>
        <p>Vitamin K exists as phylloquinone (K1, from leafy greens) and menaquinones (K2, from fermented foods like natto, aged cheese, and produced by gut bacteria). K1 is essential for the carboxylation of clotting factors II, VII, IX, X. K2 activates osteocalcin (bone protein) and matrix Gla-protein (prevents arterial calcification), which may explain why K2-rich dietary patterns are associated with lower coronary heart disease risk independent of K1 status. People on warfarin anticoagulants must maintain consistent — not eliminate — vitamin K intake.</p>

        <h2>Water-Soluble Vitamins (B-Complex & Vitamin C)</h2>
        <table>
          <thead><tr><th>Vitamin</th><th>Key Functions</th><th>Deficiency Signs</th><th>Top Food Sources</th></tr></thead>
          <tbody>
            <tr><td><strong>B1 (Thiamine)</strong></td><td>Pyruvate dehydrogenase complex; carbohydrate energy metabolism</td><td>Beriberi, Wernicke's encephalopathy (common in alcoholism)</td><td>Pork, legumes, whole grains, fortified cereals</td></tr>
            <tr><td><strong>B2 (Riboflavin)</strong></td><td>Redox reactions (FAD/FMN); electron transport chain</td><td>Angular stomatitis, glossitis, dermatitis</td><td>Dairy, meat, almonds, leafy greens</td></tr>
            <tr><td><strong>B3 (Niacin)</strong></td><td>NAD⁺/NADH central to energy metabolism, DNA repair</td><td>Pellagra (4Ds: dermatitis, diarrhoea, dementia, death)</td><td>Meat, fish, peanuts, mushrooms, fortified grains</td></tr>
            <tr><td><strong>B5 (Pantothenic acid)</strong></td><td>Coenzyme A synthesis; fatty acid metabolism</td><td>Burning feet syndrome (rare)</td><td>Widespread — liver, sunflower seeds, mushrooms</td></tr>
            <tr><td><strong>B6 (Pyridoxine)</strong></td><td>Amino acid metabolism; neurotransmitter synthesis; haem production</td><td>Peripheral neuropathy, sideroblastic anaemia, depression</td><td>Poultry, fish, potatoes, bananas, chickpeas</td></tr>
            <tr><td><strong>B7 (Biotin)</strong></td><td>Fatty acid synthesis, gluconeogenesis, amino acid catabolism</td><td>Hair loss, dermatitis (rare; raw egg whites block absorption)</td><td>Eggs (cooked), liver, nuts, seeds</td></tr>
            <tr><td><strong>B9 (Folate)</strong></td><td>One-carbon metabolism; DNA synthesis; neural tube development</td><td>Megaloblastic anaemia; neural tube defects in pregnancy</td><td>Dark leafy greens, legumes, fortified grains, liver</td></tr>
            <tr><td><strong>B12 (Cobalamin)</strong></td><td>Myelin synthesis; DNA replication; methylmalonyl-CoA mutase</td><td>Pernicious anaemia, irreversible neurological damage; highest risk in vegans</td><td>Animal products exclusively; fortified plant milks, supplements</td></tr>
            <tr><td><strong>Vitamin C (Ascorbate)</strong></td><td>Collagen hydroxylation; antioxidant; iron absorption enhancer; immune support</td><td>Scurvy (perifollicular haemorrhage, bleeding gums, impaired wound healing)</td><td>Bell peppers, citrus, kiwi, broccoli, strawberries</td></tr>
          </tbody>
        </table>

        <h2>Key Minerals</h2>
        <h3>Calcium</h3>
        <p>Calcium is the most abundant mineral in the body, with 99% stored in bones and teeth as hydroxyapatite. Serum calcium is tightly regulated by PTH and calcitriol; when dietary calcium is insufficient, bones are resorbed to maintain blood levels — making lifetime adequate intake critical for peak bone mass achieved by age 25–30. Calcium also plays essential roles in muscle contraction (troponin), neurotransmitter release, and coagulation. Bioavailability is highest from dairy (32–40%), moderate from fortified plant milks (~30%), and lower from oxalate-rich foods like spinach (~5%). Vitamin D is required for efficient calcium absorption.</p>

        <h3>Iron</h3>
        <p>Iron exists as haem iron (in meat and fish, 15–35% bioavailability) and non-haem iron (in plants and dairy, 2–20% bioavailability). It is central to haemoglobin (oxygen transport), myoglobin (oxygen storage in muscle), and hundreds of enzymes including cytochrome P450. Iron deficiency is the world's most common nutritional deficiency, affecting ~1.6 billion people. Vitamin C dramatically enhances non-haem iron absorption by reducing ferric (Fe³⁺) to ferrous (Fe²⁺) form. Conversely, calcium, tea polyphenols (tannins), phytates, and certain medications inhibit iron absorption — consuming these away from iron-rich meals improves uptake.</p>

        <h3>Magnesium</h3>
        <p>Magnesium is a cofactor for over 300 enzymatic reactions, including ATP synthesis (ATP must be complexed with Mg²⁺ to be biologically active), DNA/RNA synthesis, protein synthesis, and muscle relaxation. It also regulates voltage-gated calcium channels and NMDA glutamate receptors, with implications for neuromuscular function, blood pressure, and glucose metabolism. Despite its importance, population surveys show that 50–60% of Americans fail to meet the RDA (310–420 mg/day). Rich sources include dark chocolate, almonds, cashews, black beans, edamame, avocado, and whole grains.</p>

        <h3>Zinc</h3>
        <p>Zinc is a structural component of over 2,000 transcription factors and a catalytic component of over 300 enzymes. It is essential for immune cell development (particularly T-cell function), wound healing, taste and smell perception, and reproductive health. Phytates in whole grains and legumes form insoluble complexes with zinc that reduce absorption by 15–50%, making zinc status a concern in vegan diets. Soaking, sprouting, or fermenting legumes significantly reduces phytate content and improves zinc bioavailability.</p>

        <div className="tip-box">
          <strong>🌿 Optimising Micronutrient Absorption</strong>
          <p style={{marginTop:'0.4rem', marginBottom:0}}>Pair non-haem iron sources with vitamin C (spinach salad with lemon juice). Eat fat-soluble vitamins with dietary fat (vitamin D supplement with a meal containing avocado or olive oil). Soak legumes to reduce phytates. Ferment or cook food to increase availability of many minerals. Avoid calcium and tea within an hour of iron-rich meals.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
