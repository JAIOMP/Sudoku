'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 1000
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');
});