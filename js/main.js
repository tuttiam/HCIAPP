/*
ngSoundcloud - An angular soundcloud element.
Just pop a <ng-soundcloud track="yourtrack"> and you're done.

TODO: 
 - output JSON to scope instead of mapping variables.
 - addition of time controller like video.js or youtube.
 - more interesting design, transitions, coolbeans.

JSON API Reference
https://developers.soundcloud.com/docs/api/reference#tracks
*/
var app = angular.module("app", []);

app.directive('ngSoundcloud', function () {
    return {
        restrict: 'E',
        template: 
        `
<h1>
Hello World
</h1>
        `
    };
});