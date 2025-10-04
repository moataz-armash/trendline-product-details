import { ColorOption, Option } from "../types/productDescription";

const TYPES: Option[] = [
  { label: "Cotton", value: "cotton" },
  { label: "Polyester", value: "poly" },
  { label: "Linen", value: "linen" },
];

const SIZES: Option[] = [
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
  { label: "2XL", value: "2XL" },
];

const COLORS: ColorOption[] = [
  { name: "Red", hex: "#ef233c" },
  { name: "Blue", hex: "#cde0ef" }, // active in mock
  { name: "Khaki", hex: "#b19b63" },
  { name: "Denim", hex: "#7aa0d6" },
  { name: "Gray", hex: "#6b7280" },
];

export { TYPES, SIZES, COLORS };
