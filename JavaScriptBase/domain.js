function foo(a) {
	console.log( a + b );
	b = a;
}

foo( 2 );

function foo(str, a) {
	eval( str ); 
	console.log( a, b );
}

var b = 2;

foo( "var b = 3;", 1 );

function foo(str) {
    eval( str );
    console.log( a );
 }
 
 foo( "var a = 2" );

