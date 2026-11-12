const EventEmitter = require('events');

// Create a custom class that inherits EventEmitter powers
class OrderSystem extends EventEmitter {
  placeOrder(item, quantity) {
    console.log(`Processing ${item}...`);
    // Emit the event directly from 'this' class instance
    this.emit('orderPlaced', item, quantity);
   }
}

const shop = new OrderSystem();

// Listen for the event on your custom object
shop.on('orderPlaced', (item, quantity) => {
  console.log(`Order confirmed: ${quantity}x ${item}`);
});

// Trigger the method
shop.placeOrder('Espresso', 3);

// const EventEmitter = require('events');

// // 1. Create an emitter instance
// const myEmitter = new EventEmitter();

// // 2. Register an event listener 
// myEmitter.on('orderPlaced',(item, quantity) => {
//     console.log(`Order received: ${quantity}x ${item}`);
// });

// // 3. Emit the event with arguments
// myEmitter.emit('orderPlaced', 'Coffee', 2);
// // Output: Order received 2x Coffee