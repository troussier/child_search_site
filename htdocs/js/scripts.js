$(function() {
    'use strict';
    
    $('#inputSearch').focus();
    
    $('#inputSubmit').on('click submit', function() {
        var search = $('#inputSearch').val();
        var site = $('.searchbox__checklist input:checked').map(function() {
            return $(this).val();
        }).get();
        var sites = '';
        $.each(site, function() {
            if (sites !== '') {
                sites += '+|+'
            }
            sites += 'site%3A' + this;
        });
        var url = 'https://www.google.co.jp/search?q=' + search + '+' + sites;
        var newWin = window.open(url);
        return false;
    });
});


