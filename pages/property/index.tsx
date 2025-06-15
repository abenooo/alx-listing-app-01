import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import Link from "next/link";

export default function PropertyList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <Link 
            href={`/property/${property.name}`} 
            key={property.name}
            className="block"
          >
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={property.image} 
                alt={property.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{property.name}</h2>
                <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
                <p className="text-lg font-bold mt-2">${property.price}/night</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
