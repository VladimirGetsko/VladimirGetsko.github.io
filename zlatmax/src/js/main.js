window.addEventListener('DOMContentLoaded', function () {
	'use strict';
    const spollers = require('./module/spollers.js');
    const documentActions = require('./module/catalogMenu.js');
    const menuBlocks = require('./module/menuBlocks.js');
    const menuButton = require('./module/menuButton.js');
    const dynamicAdapt = require('./module/dynamicAdapt.js');
    
    spollers();
    menuBlocks();
    menuButton();
    dynamicAdapt();
    
    document.addEventListener('click', documentActions);
});
