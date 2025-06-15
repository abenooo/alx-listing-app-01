import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Property details and reviews */}
        <div className="lg:col-span-2">
          <PropertyDetail property={property} />
          <ReviewSection reviews={property.reviews || []} />
        </div>
        
        {/* Right column - Booking section */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
}