import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function MealPlanning() {
  return (
    <>
      <Head><title>Meal Planning Guide: Practical Weekly Nutrition | NutriGuide</title></Head>
      <Nav />
      <div className="container">
        <h1>Meal Planning: Practical Guide to Nutritional Completeness</h1>
        <p>Meal planning is the single most evidence-supported behaviour for improving diet quality, reducing food waste, managing food costs, and achieving health goals. Studies show that people who plan meals in advance consume more vegetables, more dietary fiber, fewer calories from discretionary foods, and have lower rates of overweight and obesity compared to unplanned eaters.</p>

        <h2>The Plate Method</h2>
        <p>The simplest and most research-validated tool for portion control without calorie counting is the <strong>Healthy Plate Method</strong> (endorsed by Diabetes UK, Harvard T.H. Chan School of Public Health, and the American Diabetes Association):</p>
        <ul>
          <li><strong>½ plate: Non-starchy vegetables</strong> — salad greens, broccoli, cauliflower, courgette, peppers, tomatoes, green beans, mushrooms</li>
          <li><strong>¼ plate: Lean protein</strong> — chicken, fish, eggs, tofu, legumes, tempeh, low-fat dairy</li>
          <li><strong>¼ plate: Whole grain or starchy carbohydrate</strong> — brown rice, quinoa, sweet potato, whole wheat pasta, oats</li>
          <li><strong>Side: Healthy fat</strong> — small serving of avocado, nuts, olive oil dressing, or seeds</li>
        </ul>
        <p>This approach achieves adequate protein (25–35 g/meal from ¼ plate of protein), sufficient fiber (10–15 g/meal from vegetables and whole grains), and controlled energy density without weighing food.</p>

        <h2>Sample 7-Day Balanced Meal Plan (~2,000 kcal)</h2>
        <table>
          <thead><tr><th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th><th>Snack</th></tr></thead>
          <tbody>
            <tr><td>Monday</td><td>Greek yoghurt (200 g) + mixed berries + walnuts (30 g) + oats (30 g)</td><td>Lentil soup + whole grain bread + side salad</td><td>Baked salmon fillet + roasted broccoli + quinoa</td><td>Apple + almond butter (15 g)</td></tr>
            <tr><td>Tuesday</td><td>Scrambled eggs (3) + spinach + wholegrain toast + orange</td><td>Chickpea and vegetable stir fry + brown rice</td><td>Chicken breast + roasted sweet potato + green beans</td><td>Cottage cheese (150 g) + cucumber</td></tr>
            <tr><td>Wednesday</td><td>Overnight oats with chia seeds + sliced banana + peanut butter</td><td>Turkey and avocado wrap (wholemeal) + tomato soup</td><td>Beef and vegetable curry + basmati rice + raita</td><td>Mixed nuts (30 g)</td></tr>
            <tr><td>Thursday</td><td>Smoothie: banana + spinach + protein powder + oat milk + frozen berries</td><td>Soba noodle salad with edamame, cucumber, sesame dressing</td><td>Grilled mackerel + steamed kale + roasted carrots</td><td>Boiled eggs (2)</td></tr>
            <tr><td>Friday</td><td>Porridge oats + flaxseed + dried apricots + skimmed milk</td><td>Tofu and vegetable rice bowl + miso soup</td><td>Prawn stir fry + pak choi + noodles + garlic sauce</td><td>Hummus (60 g) + carrot sticks</td></tr>
            <tr><td>Saturday</td><td>Avocado on sourdough + poached eggs + cherry tomatoes</td><td>Mixed bean chilli + corn tortillas + guacamole</td><td>Lamb kebab + tabbouleh + tzatziki + pitta</td><td>Kefir (200 ml) + flaxseed</td></tr>
            <tr><td>Sunday</td><td>Smoked salmon + scrambled eggs + sourdough</td><td>Roast chicken + roasted vegetables + potato</td><td>Slow-cooked butternut squash soup + feta + seeds</td><td>Dark chocolate (30 g) + walnuts</td></tr>
          </tbody>
        </table>

        <h2>Batch Cooking: The Weekly System</h2>
        <p>A 2-hour Sunday batch cook can prepare the backbone of a nutritious week with minimal weekday effort. The system: cook 2–3 grains (e.g. brown rice, quinoa, farro), roast 3 trays of mixed vegetables, prepare 2–3 protein sources (baked chicken thighs, a pot of lentils, boiled eggs), make 1–2 sauces (tahini dressing, simple tomato sauce), and wash/prep salad leaves. These components combine in different configurations across the week — preventing the monotony that kills adherence while ensuring nutrient variety. Studies show households who batch cook spend on average 34% less on food and 40% less time on weekday cooking.</p>

        <h2>Budget-Friendly Nutritional Powerhouses</h2>
        <table>
          <thead><tr><th>Food</th><th>Cost/Serving</th><th>Nutritional Highlights</th></tr></thead>
          <tbody>
            <tr><td>Dried lentils</td><td>Very low</td><td>18 g protein, 15 g fiber, 90% DV folate per cup cooked</td></tr>
            <tr><td>Oats (rolled)</td><td>Very low</td><td>Beta-glucan (cholesterol lowering), 5 g protein, 4 g fiber per 40 g serving</td></tr>
            <tr><td>Frozen spinach</td><td>Very low</td><td>Equal nutrition to fresh; vitamin K, folate, iron, calcium</td></tr>
            <tr><td>Canned sardines</td><td>Low</td><td>25 g protein, 1,300 mg omega-3, 27% DV calcium (if bones consumed)</td></tr>
            <tr><td>Eggs</td><td>Low</td><td>Complete protein, choline, lutein/zeaxanthin, B12, D</td></tr>
            <tr><td>Frozen mixed vegetables</td><td>Very low</td><td>Flash-frozen at peak nutrition; often more nutrient-dense than "fresh" stored produce</td></tr>
            <tr><td>Chickpeas (canned)</td><td>Low</td><td>Protein, fiber, folate, manganese; versatile for salads, curries, hummus</td></tr>
            <tr><td>Sweet potatoes</td><td>Low</td><td>Exceptionally high beta-carotene (Vitamin A), potassium, C, B6</td></tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}
