export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
  ],
};
