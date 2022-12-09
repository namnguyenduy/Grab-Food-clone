export default {
  name: "category",
  title: "Menu Category",
  type: "document",
  fields: [
    {
      name: "id",
      type: "number",
      title: "id",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      type: "string",
      title: "Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of Category",
    },
  ],
};
