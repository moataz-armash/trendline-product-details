const RATING = 4.5;
const TOTAL_REVIEWS = 3000;
const DISTRIBUTION = [67, 15, 6, 3, 9];

const REVIEWS = new Array(4).fill(0).map((_, i) => ({
  id: i,
  name: "Alex Daewn",
  stars: 4,
  when: "4 months ago",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
}));

export { RATING, TOTAL_REVIEWS, DISTRIBUTION, REVIEWS };
