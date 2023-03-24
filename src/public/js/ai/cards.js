class Card {
  static isA(cardValue) {
    const value = this.getValue(cardValue);
    return value === card.A;
  }

  static getValue(cardValue) {
    return +cardValue.substring(4, 6);
  }
}
