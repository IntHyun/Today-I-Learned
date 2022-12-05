// 생성자 함수 이름을 Product로 가지고 product.calculate(200)을 입력할 때 3380을 출력하는 생성자 함수를 만들어라

class Product {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }

    calculator(num) {
        return (num * price) / 100;
    }
}
