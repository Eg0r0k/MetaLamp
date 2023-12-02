

export class RatingBlock {
  constructor(ratingBlock) {
    this.ratingBlock = ratingBlock;
    this.stars = ratingBlock.querySelectorAll("i");

    this.stars.forEach((star, index) => {
      star.addEventListener("click", () => this.updateStars(index));
    });
  }

  updateStars(clickedIndex) {
    this.stars.forEach((star, index) => {
      const newClass = clickedIndex >= index ? "fa-solid" : "fa-regular";
      star.className = `fa ${newClass} fa-star`;
    });
  }
}
