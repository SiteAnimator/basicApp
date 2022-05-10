/*
    @package    SiteAnimator\Modules\BasicApp

    file:       basicApp.js
    function:   this file contains a bare structure
                of a basic application module.
                Logs 'Hello World'.
                
    Last revision: 09-05-2022
 
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
    
