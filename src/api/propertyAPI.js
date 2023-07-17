export const propertyAPI = {
  getPropertyDetail: (propertyId, type) =>
    `https://average-needle-production.up.railway.app/api/v1/properties/${propertyId}${
      type ? `/${type}` : ""
    }`,
  getProperties: () =>
    `https://average-needle-production.up.railway.app/api/v1/properties`,
  propertyImage: (path) =>
    `https://huy-property-images.s3.ap-southeast-1.amazonaws.com/${path}`,
  defaultImage:
    "https://cdn.dribbble.com/userupload/4220677/file/original-c7f0a15e2d639a6dc4b91665ec79ba7b.jpg?compress=1&resize=2048x1536",
};
// https://huy-property-images.s3.ap-southeast-1.amazonaws.com/e526c42b-af03-4cea-bb9f-f7cdc60ca396_istockphoto-1354262369-612x612.jpg
// https://average-needle-production.up.railway.app
