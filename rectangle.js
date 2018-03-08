// The reason why I'm using the setTimeout is to simulate
//  a delay before the callback comes in from the other side.
 
module.exports = (x,y,callback) => {
	if(x<=0 || y<=0){
		setTimeout(() => 
			callback(new Error("rectangle dimnensions should be greater than zero:  l = "
               + x + ", and b = " + y),null) , 2000);
		
	}
	else {
		setTimeout(() => 
			callback(null,
			{
				perimeter: () => (2*(x+y)),
				area: () => (x*y)

			}) ,
		 2000);
	}
} 





//perimeter =  (x, y) => (2*(x+y));
//area = (x, y) => (x*y);
