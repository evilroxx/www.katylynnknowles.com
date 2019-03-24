requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
requirejs([
			'bootstrap/jquery-1.11.0',
			'bootstrap/bootstrap.min',
			'bootstrap/jqBootstrapValidation',			
			'flex/classie',
			'flex/cbpAnimatedHeader.min',
			'site/contact_me',
			'site/Site',
			'site/timelines',
			'flex/jquery.flex-images.min',
			'scroll/educator',
			'dynamic/controllers',
			'galleriffic/jquery.galleriffic',
			'galleriffic/jquery.history',
			'galleriffic/jquery.opacityrollover',
			'galleriffic/galleriffic_loader'
		  ],
function   ($,jQuery,bootstrap,jqBootstrapValidation,classie,cbpAnimatedHeader,contactme,site,timelines,flexImages,educator,controllers,gall1,gall2,gall3,gall4) {

          $('#grid').flexImages({rowHeight: 180});  
		  
		  document.write('<style>.noscript { display: none; }</style>');
});