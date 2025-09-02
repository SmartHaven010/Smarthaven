import Link from "next/link";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  link: string;
}

export default function ProductCard({ title, price, image, link }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{price}</p>
        <Link
          href={link}
          className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Bekijk product
        </Link>
      </div>
    </div>
  );
}
