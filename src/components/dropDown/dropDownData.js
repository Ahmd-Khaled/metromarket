import { v4 as uuidv4 } from 'uuid';

const dropDownData = [
    {
        id: uuidv4(),
        grandListName: "Bakery",
        parentList: [
            {
                id: uuidv4(),
                parentListName: "Bread",
                childList: ["Prepacked"],
            },
            {
                id: uuidv4(),
                parentListName: "Desserts",
                childList: ["Prepacked"],
            },
            {
                id: uuidv4(),
                parentListName: "Pastry",
                childList: ["Prepacked"],
            },
            {
                id: uuidv4(),
                parentListName: "Salted",
                childList: ["Prepacked"],
            },
            {
                id: uuidv4(),
                parentListName: "Seasonal Bakery",
                childList: ["Christmas", "Eid"],
            },
        ]
    },
    {
        id: uuidv4(),
        grandListName: "Beverage",
        parentList: [
            {
                id: uuidv4(),
                parentListName: "Carbonated",
                childList: ["Regular Carbonated", "Energy Drinks"],
            },
            {
                id: uuidv4(),
                parentListName: "Syrups",
                childList: ["Liquid", "Powder"],
            },
            {
                id: uuidv4(),
                parentListName: "Water",
                childList: ["Regular Water", "Sparkling"],
            },
            {
                id: uuidv4(),
                parentListName: "Juice",
                childList: ["Regular Juice"],
            },
        ]
    },
    {
        id: uuidv4(),
        grandListName: "Canned Food",
        parentList: [
            {
                id: uuidv4(),
                parentListName: "Canned Fish",
                childList: ["Tuna", "Others", "Sardine"],
            },
            {
                id: uuidv4(),
                parentListName: "Fruits",
                childList: ["Pineapple", "Cocktail", "Peach"],
            },
            {
                id: uuidv4(),
                parentListName: "Meat",
                childList: ["Corned Beef", "Luncheon"],
            },
            {
                id: uuidv4(),
                parentListName: "Pickles",
                childList: ["Grape Leave", "Black Olive", "Green Olive", "Mixed Pickles", "Others"],
            },
            {
                id: uuidv4(),
                parentListName: "Vegetables",
                childList: ["Others Veg", "Foul", "Tomato", "Corn", "Mushroom"],
            },
        ]
    },
];

export default dropDownData;