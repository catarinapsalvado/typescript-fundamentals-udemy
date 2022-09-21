//ex, rgb color only accepts 3 colors


const color: [number, number, number] = [255,0,45] 

type HTTPResponse = [number, string]

const goodRes: HTTPResponse =[200, 'OK']

//Ts still accepts s tuple to push

// not very important kk

const responses : HTTPResponse[] = [[404, 'Not found'], [200, 'OK']] // An array of Tuples

// Enum - set of named constants - instead of having separate different variables we have a group

enum OrderStatus {
    PENDING, 
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED

function isDelivered(status:OrderStatus){
    return status ===OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
    UP ='up',
    DOWN ='down',
    LEFT ='left',
    RIGHT ='right'
}

ArrowKeys.LEFT

//Enums - try to use const so it doesnt change the code in JS const enum OrderStatus{}