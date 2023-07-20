function calculateCardRating (rating: number) {
  return (Math.round((Math.ceil(rating) / 5) * 100)).toString();
}

export {calculateCardRating};
