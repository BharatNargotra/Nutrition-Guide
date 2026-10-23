import Link from 'next/link'
export default function Nav() {
  return (
    <nav>
      <Link href="/" className="brand">🥦 NutriGuide</Link>
      <Link href="/macronutrients">Macros</Link>
      <Link href="/micronutrients">Micros</Link>
      <Link href="/diet-types">Diet Types</Link>
      <Link href="/meal-planning">Meal Planning</Link>
      <Link href="/gut-health">Gut Health</Link>
      <Link href="/sports-nutrition">Sports Nutrition</Link>
      <Link href="/weight-management">Weight Management</Link>
      <Link href="/supplements">Supplements</Link>
      <Link href="/food-science">Food Science</Link>
      <Link href="/glossary">Glossary</Link>
    </nav>
  )
}
