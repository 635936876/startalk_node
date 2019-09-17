var nodeConfig = require('../node_config.js');

exports.renderTouchSubmenu = function(req, res, next) {
    var args = {
        pageTitle: nodeConfig.touchSubmenu.title || '二级菜单',
        jquery: nodeConfig.jquery,
        touchsubmenucss: nodeConfig.touchSubmenu.touchsubmenucss,
        touchsubmenujs: nodeConfig.touchSubmenu.touchsubmenujs,
        nav: nodeConfig.navigation
    }

    res.render('touchSubmenu', args); 
    //res.render('testTouchSubmenu', args); 
};

exports.renderWebSubmenu = function(req, res, next) {
    var args = {
        pageTitle: nodeConfig.webSubmenu.title || '二级菜单',
        jquery: nodeConfig.jquery,
        websubmenucss: nodeConfig.webSubmenu.websubmenucss,
        websubmenujs: nodeConfig.webSubmenu.websubmenujs,
        nav: nodeConfig.navigation
    }

    res.render('webSubmenu', args); 
    //res.render('testWebSubmenu', args); 
};

exports.renderWeb = function(req, res, next) {
    var ipAddress = getClientIp(req) || '';
    var args = {
        ip: ipAddress,
        pageTitle: nodeConfig.web.title || '在线客服',
        jquery: nodeConfig.jquery,
        webcss: nodeConfig.web.webcss,
        webjs: nodeConfig.web.webjs,
        nav: nodeConfig.navigation
    }

    res.render('web', args);
    //res.render('testWeb', args);   
};

exports.renderTouch = function(req, res, next) {
    var ipAddress = getClientIp(req) || '';
    var args = {
        ip: ipAddress,
        pageTitle: nodeConfig.touch.title || '在线客服',
        jquery: nodeConfig.jquery,
        touchcss: nodeConfig.touch.touchcss,
        touchjs: nodeConfig.touch.touchjs,
        nav: nodeConfig.navigation
    }

    res.render('touch', args);
    //res.render('testTouch', args);
};

function getClientIp(req) {
    var ipAddress,
        forwardedIps,
        forwardedIpsStr = req.header('x-forwarded-for');
    if(forwardedIpsStr) {
        forwardedIps = forwardedIpsStr.split(',');
        ipAddress = forwardedIps[0];
    }
    if(!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }
    return ipAddress;
}