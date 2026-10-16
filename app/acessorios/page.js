import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";
export const revalidate = 300;
export const generateMetadata = () => categoryMetadata("acessorios");
export default function Page() { return <CategoryPage slug="acessorios" />; }
