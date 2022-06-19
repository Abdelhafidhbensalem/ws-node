// what's node js?
    // powerful runtime environment for executing javascript code / server side platform built on 
    // google chrome's
    //   javascript engine (V8 engine)

// ==========> Architecture Node : 
//             - javascript engine (every browser ) : js code---> js engine---->code machine
//                          microsoft edge: chakra  / firefox: spider monkey /  chrome :v8
//             -Ryan Dahl : execute js outside of browser
//                       took v8 engine( fastest js engine) and embedded it in c++ program called Node

//     Node js uses an even-driven , non-blocking I/O model that makes it lightweight and effcient ,
//      perfect for data-intensive real time apps tha run across distributed devices.


// Due to non -blocking( asunchronous)  highly-sacalable , data-intensive and real-time apps
// ==========>   single thread / multiple thread / non blocking


// Special about node :easy to get started  :
// 	great for prototyping 
// 	superfast and highly scalable 
// 	javascript everywhere
// 	cleaner and more consistent codebase
// 	large ecosystem of open-source libs

// Node JS Stats:
//    -Amazon, Netflix, eBay, Reddit, LinkedIn, Tumblr, and PayPal all use Node JS.
//    -43% of Node JS devs use it for enterprise applications.
//    -85% use it primarily for web app development.
//    -PayPal saw a 35% decrease in average response time on its page after deploying Node JS.
//    -Not only that – Node JS can increase applications’ performance by 50%.
//    -It also reduces development cost by 58%.
//    -No wonder it is the primary choice for startups.

/////////////// Global Object
  
//console.log(module)
  //console.log(process)
  console.log(global);
  // global.setTimeout(() => {
  //   console.log('in the timeout');
  // }, 3000);
  
setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
  }, 3000);
  
  const int = setInterval(() => {
    console.log('in the interval');
  }, 1000);
  
  console.log(__dirname);
  console.log(__filename);
  
  // no access to DOM methods
  //console.log(document.querySelector);