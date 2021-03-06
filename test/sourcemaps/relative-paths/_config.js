var path = require( 'path' );
var assert = require( 'assert' );

module.exports = {
	description: 'source paths are relative with relative dest (#344)',
	options: {
		moduleName: 'myModule',
		dest: path.resolve( '_actual/bundle.js' )
	},
	test: function ( code, map ) {
		assert.deepEqual( map.sources, [ '../main.js' ]);
	}
};
