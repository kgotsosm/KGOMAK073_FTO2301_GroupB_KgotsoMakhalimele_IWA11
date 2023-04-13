const order1 = document.querySelector('dl[data-key="order1"]');
const order2 = document.querySelector('dl[data-key="order2"]');
const order3 = document.querySelector('dl[data-key="order3"]');

const updateOrder = (order) => {
    const biscuits = order.querySelector('.biscuits .count');
    const donuts = order.querySelector('.donuts .count');
    const pancakes = order.querySelector('.pancakes .count');
    const status = order.querySelector('.status dd');

    biscuits.textContent = order.dataset.biscuits;
    donuts.textContent = order.dataset.donuts;
    pancakes.textContent = order.dataset.pancakes;
    status.textContent = order.dataset.delivered === "true" ? "Delivered" : "Pending";
};

updateOrder(order1);
updateOrder(order2);
updateOrder(order3);
