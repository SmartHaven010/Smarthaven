export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} SmartHaven – Make your life easy.
      </p>
    </footer>
  );
}
