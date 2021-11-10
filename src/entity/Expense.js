class Expense {
  constructor(date, name, price) {
    this.id = crypto.randomUUID()
    this.date = date;
    this.name = name;
    this.price = price;
  }
}

export default Expense;
