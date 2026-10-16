export default function Logo({ className = "h-16" }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo.jpg" alt="Martins iPhone Store" className={`${className} w-auto`} />;
}
