export class LikeButton {
    constructor(likeBtn) {
      this.likeBtn = likeBtn;
      this.likeCount = likeBtn.querySelector("span");
      this.likeIcon = likeBtn.querySelector(".fa-heart");
      this.count = 0;
      this.isLike = false;
  
      this.likeBtn.addEventListener("click", this.toggleLike.bind(this));
    }
  
    toggleLike() {
      this.isLike ? this.count-- : this.count++;
      this.isLike = !this.isLike;
  
      this.updateUI();
    }
  
    updateUI() {
      this.likeCount.textContent = this.count;
      this.likeBtn.classList.toggle("active", this.isLike);
      this.likeIcon.classList.toggle("fa-solid", this.isLike);
    }
  }