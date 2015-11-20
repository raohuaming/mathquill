Package.describe({
  summary: "Magic textboxes where you can type math as easily as writing",
  version: "0.9.5",
  name: "huaming:mathquill",
  git: "https://github.com/mathquill/mathquill.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  api.use('jquery', 'client');
  api.use( 'less' );

  api.addAssets( [
    'build/font/stixgeneral-bundle/STIXFontLicense2010.txt',
    'build/font/stixgeneral-bundle/stixgeneral-webfont.eot',
    'build/font/stixgeneral-bundle/stixgeneral-webfont.svg',
    'build/font/stixgeneral-bundle/stixgeneral-webfont.ttf',
    'build/font/stixgeneral-bundle/stixgeneral-webfont.woff',
    'build/font/stixgeneral-bundle/stixgeneralbol-webfont.eot',
    'build/font/stixgeneral-bundle/stixgeneralbol-webfont.svg',
    'build/font/stixgeneral-bundle/stixgeneralbol-webfont.ttf',
    'build/font/stixgeneral-bundle/stixgeneralbol-webfont.woff',
    'build/font/stixgeneral-bundle/stixgeneralbolita-webfont.eot',
    'build/font/stixgeneral-bundle/stixgeneralbolita-webfont.svg',
    'build/font/stixgeneral-bundle/stixgeneralbolita-webfont.ttf',
    'build/font/stixgeneral-bundle/stixgeneralbolita-webfont.woff',
    'build/font/stixgeneral-bundle/stixgeneralitalic-webfont.eot',
    'build/font/stixgeneral-bundle/stixgeneralitalic-webfont.svg',
    'build/font/stixgeneral-bundle/stixgeneralitalic-webfont.ttf',
    'build/font/stixgeneral-bundle/stixgeneralitalic-webfont.woff',
    'build/font/Symbola.eot',
    'build/font/Symbola.otf',
    'build/font/Symbola.svg',
    'build/font/Symbola.ttf',
    'build/font/Symbola.woff'
  ], 'client' );

  api.addFiles( [
    'build/mathquill.css',
    'build/mathquill.min.js'
  ], 'client' );
});

Package.onTest(function (api) {
  api.use('huaming:mathquill');
  api.use('tinytest');
  api.addFiles('meteor/test.js', 'client');
});
