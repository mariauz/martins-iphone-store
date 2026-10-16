import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";
export const revalidate = 300;
export const generateMetadata = () => categoryMetadata("perfumes");
export default function Page() { return <CategoryPage slug="perfumes" modo="perfume" />; }
