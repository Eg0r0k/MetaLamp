import { LikeButton } from "./likeButton";
import { RatingBlock } from "./ratingBlock";



const likeButtons = document.querySelectorAll(".btn__likes");
likeButtons.forEach((likeBtn) => new LikeButton(likeBtn));

const ratingBlocks = document.querySelectorAll(".rating");
ratingBlocks.forEach((ratingBlock) => new RatingBlock(ratingBlock));


