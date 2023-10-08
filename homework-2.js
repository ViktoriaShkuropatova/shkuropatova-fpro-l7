function pow(number, degree) {

    if (degree === 0) {
        return 1;
    } //якщо ступінь отримали 0, то як результат повертаємо 1

    return number * pow(number, degree - 1);
}

const example = pow(3,4);
console.log(example);