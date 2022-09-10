/*
    @package    SiteAnimator\Modules\BasicApp

    file:       basicApp.js
    function:   this file contains the bare structure
                of an application module.
                Logs 'Hello World' after page load.
                
    Last revision: 10-09-2022
 
*/    

// create module function
( function() {

    // MODULE: basicApp( void ) void 
    
    // create the app singleton
    window.basicApp = window.basicApp ? window.basicApp : {}; 
    
    // create self
    const self = window.basicApp;
    
    // PRIVATE:
    self.moduleName = 'basicApp';       // string

    // FUNCTIONS
    self.start = function() {
    // FUNCTION: start( void ) void

        // log activity
        console.log( 'Hello World' );

    // DONE FUNCTION: start( void ) void
    };

    // start the application
    window.onload = function(){
        
        // start
        self.start();
        
    };
    // done start the application
    
    // DONE private
    
    // DONE MODULE: basicApp( void ) void 
    
})();
// done create module function
    
