let me = { age: 30 };
// 이렇게 하면 me의 값 자체가 복사 되는 것이나리라 you 가 me의 주소값을 참조함.
// 따라서 age:30의 참조카운트는 2입니다.
let you = me;

me = null; // 참조 카운트가 1이됩니다 왜냐면 me를 null로 했으니
you = null; // 이렇게 하면 참조카운트가 0이됩니다. 이렇게 참조카운트가 0이되면 가비지컬렉터의 컬렉션 대상이 됩니다.
// 계속해서 가비지 컬렉터가 감시하고 있다가 참조카운트가 0이되면 가비지 컬렉션이
// 아~ 너 이제 더이상 이거 안쓰는구나 하고 수거해갑니다.

let x = {
    y: {
        z: 1,
    },
};

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2라고 하겠습니다.

let a = x; // object1의 참조카운트는? => 2 (x와 a가 참조)
x = 1; // 이렇게 되면 새로운 값을 할당해주었기 때문에 object1의 참조카운트는 1이됩니다. ( a 만남음)

let b = a.y; // object2의 참조카운트는? => 2 (a.y와 b 가참조)
a = 2; // ( object1을 참조하고있던 a의 값이 바뀌어서 참조카운트는 0이 됩니다. ) 따라서 이 object1 은 가비지컬렉션의 대상이 됩니다.
// 그러나 위의 경우에는 object2가 x안의 값을 바라보고 있기 때문에 이러한 경우에는 카비지컬렉션이 이를 확인하여 수거해가지 않습니다.
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리 누수가 발생했다고 표현합니다.
// 대표적인 경우가 클로저에 해당됩니다.

function outer() {
    // 아래와 같이 클로저공간이 생기면 가비지컬렉션의 대상이 되지않습니다.
    let privateVal = ['test'];

    function getPrivate() {
        return privateVal;
    }

    return getPrivate;
}

const getPrivateData = outer();
const secretVal = getPrivateData();

console.log(secretVal);

// 따라서 메모리누수를 막기위해 아래와 같이 값을 비워주도록 합니다.
// null또는 undefined로 값을 비워주면 됩니다.
secretVal = null;
secretVal = undefined;
