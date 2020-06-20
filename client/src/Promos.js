import React from "react";

export default () => {
    // temp
    const items = [{
        "id": 1,
        "imgUrl": "https://images.unsplash.com/photo-1576873689386-2e0e972d7198?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        "imgAlt": "Dog pajamas",
        "desc": "Dog pajamas (black)",
        "discount": 0.15,
        "price": 20.0,
        "productName": "pajamas (Black)"
    },
        {
            "id": 2,
            "imgUrl": "https://images.unsplash.com/photo-1591946532546-4160f60a5311?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
            "imgAlt": "Jeans overalls",
            "desc": "Jeans overalls for dogs",
            "discount": 0,
            "price": 35.0,
            "productName": "Jeans Overalls"
        }];
    const itemList = [];
    itemList.filter(item => item.discount !== 0);

    return (
        <div className={"App"}>
            <h1>Pet Swag</h1>
            <hr/>
            <div className={"App-item-list"}>
                {itemList.length !== 0 ? itemList : "We don't have any Promos at the moment. Be to check back soon!"}
            </div>
        </div>
    );
}