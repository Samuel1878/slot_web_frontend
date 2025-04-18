export const xReel : number = 6;
export const yReel :number= 5;
export const reelSize : number= 30;
export const bingo :symbol = B
const temblePosible = [
    2,
    4,
    10,
    20,
    30,
    100,
]
enum tembleType {
    V = "V",
    Y = "Y",
    H = "H",
    Z = "Z"
}
export enum reelType {
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE",
  FOUR = "FOUR",
  FIVE = "FIVE",
  SIX = "SIX",
  SEVEN = "SEVEN",
  EIGHT = "EIGHT",
  NINE = "NINE",
}
// export const  tembleArray = [
//     { type: tembleType.V, size:  },
// ]
export const reelTypeArray = [
  reelType.ONE,
  reelType.TWO,
  reelType.THREE,
  reelType.FOUR,
  reelType.FIVE,
  reelType.SIX,
  reelType.SEVEN,
  reelType.EIGHT,
  reelType.NINE,
];

const ONE = [
    {matches: 8, amount: 20},
    {matches:9, amount:20},
    {matches:10, amount:50},
    {matches:11, amount:100},
    {matches:12, amount:200},
];


export const reelTypeObject = {
    [reelType.ONE]: {
        value: 1,
        image: "1.png",
        
    },
    [reelType.TWO] : {
        value: 1,
        image:
    }
}
