import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";
export const revalidate = 300;
export const generateMetadata = () => categoryMetadata("iphone");
export default function Page() { return <CategoryPage slug="iphone" modo="iphone" />; }
