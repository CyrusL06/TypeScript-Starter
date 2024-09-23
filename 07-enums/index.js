// Enums exist
// because you want someone to restrict their action
// lik ecom when someone orders you wanna restrict the order status
// it can be wishlist deliver,etc...
// restrict users choice
// like in airport placement of people...
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var CyrusSeat = SeatChoice.AISLE;
