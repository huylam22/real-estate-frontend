import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getPropertyDetail = async (propertyId) => {
  const response = await api.get(`/properties/details/${propertyId}`);
  return response.data;
};

//   const [propertyDetail, setPropertyDetail] = React.useState({});

//   const handleFetchData = async () => {
//     try {
//       const response = await getPropertyDetail(propertyId);
//       setPropertyDetail(response);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     handleFetchData();
//   }, []);

//   const { propertyCoverPaths } = propertyDetail;
//   console.log(propertyDetail.propertyCoverPaths.length);
