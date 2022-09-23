import item1 from "../../toolkit/assets/item-1.png";
import item2 from "../../toolkit/assets/item-2.png";
import item3 from "../../toolkit/assets/item-3.png";
import item4 from "../../toolkit/assets/item-4.png";

export const products = [
  {
    _id: 1,
    brand: "Nike Air",
    name: "Women's Running Jacket",
    price: 5995,
    img: item1,
    category: "women",
    inStock: true,
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
  {
    _id: 2,
    brand: "Jordan Essentials",
    name: "Men's Graphic T-Shirt",
    price: 1795,
    img: item2,
    category: "men",
    inStock: true,
  },
  {
    _id: 3,
    brand: "Nike Yoga Dri-FIT Luxe",
    name: "Women's Cropped Tank",
    price: 2895,
    img: item3,
    category: "women",
    inStock: false,
  },
  {
    _id: 4,
    brand: "Nike Dri-FIT Legend",
    name: "Men's Graphic Training T-Shirt",
    price: 1795,
    img: item4,
    category: "men",
    inStock: true,
  },
];
