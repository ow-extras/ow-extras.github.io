// (function() {
//     'use strict';
//     var URL = '/a/organizations/main/solicitations/selectcurrentsolicitation';
//     $('#warp').addClass('change-solicitation-fix');
//     $(".changeSolicitation").parents("li").hide();
//     $(".currentSolicitation").hide();
//     $.get(URL, function(data) {
//         $(data).find("script:contains('currentSolicitationId')").each(function() {
//             var REGEX = /currentSolicitationId: "(\d+)"/;
//             if (REGEX.test(this.innerText) && !!this.innerText.match(REGEX)[1]) {
//                 Backbone.post(URL, {
//                         solicitationId: ''
//                     }, {
//                         dontShowSuccessAlert: !0
//                     })
//                     .done(function() {
//                         window.location.assign(window.location.href)
//                     });
//             }
//         });
//     });
// })();