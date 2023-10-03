// import axios from "axios";
// import { getProperties } from "../../api/getProperty";
import { fetcher } from "../../../config/config";
import useSWR from "swr";
import PropertyCard from "../../molecules/Property/PropertyCard/PropertyCard";
import { propertyAPI } from "../../../api/propertyAPI";
import PropertyCardLoading from "../../loading/PropertyCardLoading";

const PropertyList = () => {
  const { data, error, isLoading } = useSWR(
    propertyAPI.getProperties(),
    fetcher
  );
  const properties = data?.content;
  console.log(data);
  return (
    <section className="page-container">
      <h1 className="">Hiển thị 5 trong số 5</h1>
      {isLoading && (
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:gap-x-4 lg:gap-y-6">
          {[...Array(4)].map((_, index) => (
            <PropertyCardLoading key={index} />
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:gap-x-4 lg:gap-y-6">
        {properties?.length > 0 &&
          properties.map((item) => (
            <PropertyCard key={item.id} item={item}></PropertyCard>
          ))}
      </div>
    </section>
  );
};

export default PropertyList;
