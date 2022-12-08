export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "farAway",
      type: "number",
      title: "Far away from your home to restaurant",
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 Stars)",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Please enter a Value between 1 and 5"),
    },
    {
      name: "review",
      type: "number",
      title: "Enter a num of reviews",
    },
    {
      name: "discount",
      type: "number",
      title: "Enter a discount",
      validation: (Rule) =>
        Rule.required().min(0).max(50).error("Please enter a Value between 0 and 50"),
    },
    {
      name: "deliveryTime",
      type: "number",
      title: "Enter a delivery time in minutes",
    },
    {
      name: "collectTime",
      type: "number",
      title: "Enter a collect time in minutes",
    },
    {
      name: "foodType",
      type: "array",
      title: "Enter a food type",
      of: [{ type: "string" }],
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
