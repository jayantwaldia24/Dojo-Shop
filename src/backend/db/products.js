import item1 from "../../toolkit/assets/item-1.png";
import item1_1 from "../../toolkit/assets/item-1-1.jpg";
import item1_2 from "../../toolkit/assets/item-1-2.webp";
import item1_3 from "../../toolkit/assets/item-1-3.png";
import item1_4 from "../../toolkit/assets/item-1-4.jpg";
import item2 from "../../toolkit/assets/item-2.png";
import item2_1 from "../../toolkit/assets/item-2-1.webp";
import item2_2 from "../../toolkit/assets/item-2-2.webp";
import item2_3 from "../../toolkit/assets/item-2-3.webp";
import item2_4 from "../../toolkit/assets/item-2-4.webp";
import item3 from "../../toolkit/assets/item-3.png";
import item3_1 from "../../toolkit/assets/item-3-1.webp";
import item3_2 from "../../toolkit/assets/item-3-2.jpg";
import item3_3 from "../../toolkit/assets/item-3-3.jpg";
import item3_4 from "../../toolkit/assets/item-3-4.jpg";
import item4 from "../../toolkit/assets/item-4.png";
import item4_1 from "../../toolkit/assets/item-4-1.jpg";
import item4_2 from "../../toolkit/assets/item-4-2.jpg";
import item4_3 from "../../toolkit/assets/item-4-3.jpg";
import item4_4 from "../../toolkit/assets/item-4-4.jpg";
import item5 from "../../toolkit/assets/item-5.png";
import item5_1 from "../../toolkit/assets/item-5-1.jpg";
import item5_2 from "../../toolkit/assets/item-5-2.jpg";
import item5_3 from "../../toolkit/assets/item-5-3.jpg";
import item5_4 from "../../toolkit/assets/item-5-4.jpg";
import item6 from "../../toolkit/assets/item-6.png";
import item6_1 from "../../toolkit/assets/item-6-1.jpg";
import item6_2 from "../../toolkit/assets/item-6-2.jpg";
import item6_3 from "../../toolkit/assets/item-6-3.jpg";
import item6_4 from "../../toolkit/assets/item-6-4.jpg";

export const products = [
  {
    _id: 1,
    brand: "Nike Air",
    name: "Women's Running Jacket",
    price: 5995,
    img: item1,
    category: "women",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Collection", href: "#" },
    ],
    images: [
      {
        src: item1_4,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: item1_2,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: item1_3,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: item1_1,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    reviews: { href: "#", average: 4, totalCount: 126 },
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
    description:
      "The Nike Air Jacket is a celebration of your outdoor journey, of the time spent in solitude as you chase your running goals. Breathable at the back, with coverage up top, the jacket is geared to keep you feeling loose with every step. A bungee at the back lets you control the shape and feel along your route.",
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
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Collection", href: "#" },
    ],
    images: [
      {
        src: item2_4,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: item2_2,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: item2_3,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: item2_1,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    reviews: { href: "#", average: 4, totalCount: 221 },
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: false },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
    description:
      "Take flight in signature style. Made from soft, comfortable cotton, this relaxed tee has printed graphics on the chest.",
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
    _id: 3,
    brand: "Nike Dri-FIT",
    name: "Women's Cropped Tank Yoga Luxe",
    price: 2895,
    img: item3,
    category: "women",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Collection", href: "#" },
    ],
    images: [
      {
        src: item3_4,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: item3_2,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: item3_3,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: item3_1,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    reviews: { href: "#", average: 3, totalCount: 17 },
    sizes: [
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: false },
    ],
    description:
      "The Nike Yoga Dri-FIT Luxe Cropped Tank is made from Infinalon fabric that feels irresistibly soft and smooth while providing a gently compressive feel that hugs your body, so you can stretch and move without limits. Mixed-material panels create a fluid look and extra breathability while you move.",
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
    _id: 4,
    brand: "Nike Dri-FIT",
    name: "Men's Graphic Training T-Shirt",
    price: 1795,
    img: item4,
    category: "men",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Collection", href: "#" },
    ],
    images: [
      {
        src: item4_4,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: item4_2,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: item4_3,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: item4_1,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    reviews: { href: "#", average: 5, totalCount: 161 },
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: false },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
    description:
      "Commit to the grind and flex hard in the Nike Legend T-Shirt. Made with soft, lightweight jersey fabric, it feels silky smooth on your skin and wicks sweat to keep you dry.",
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
    _id: 5,
    brand: "Nike SB",
    name: "Skate Crew",
    price: 3795,
    img: item5,
    category: "men",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Collection", href: "#" },
    ],
    images: [
      {
        src: item5_4,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: item5_2,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: item5_3,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: item5_1,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    reviews: { href: "#", average: 4, totalCount: 27 },
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
    ],
    description:
      "The Nike SB Crew is made from mid-weight French terry fabric that's smooth and naturally breathable. An elastic bungee at the back of the collar adds a utility-inspired finish and a chest pocket gives you a convenient space to stash small items.",
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
    _id: 6,
    brand: "Nike Air",
    name: "Women's Pique Polo",
    price: 2747,
    img: item6,
    category: "women",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Collection", href: "#" },
    ],
    images: [
      {
        src: item6_4,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: item6_2,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: item6_3,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: item6_1,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    reviews: { href: "#", average: 3, totalCount: 57 },
    sizes: [
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
    ],
    description:
      "Freshen up your sportswear staples in this airy pique polo. Its elongated sleeves provide a casual, roomy look while the elastic hem and slight crop make it easy to pair with your favourite high-rise leggings and shorts. A front zip provides styling and fit options.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
];
