"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCart = void 0;
function getCart(req, res) {
    try {
        res.status(200).json(`this is the cart page.`);
    }
    catch (error) {
        res.status(500).json(error);
    }
}
exports.getCart = getCart;
