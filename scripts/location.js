function $(s) {
    return document.querySelector(s);
}

function compile(label, value) {
    return '<td>' + label + '</td><td><pre>' + value + '</pre></td>';
}

function add(label, value) {
    var $tbody = $('tbody');
    var $tr = document.createElement('tr');
    $tr.innerHTML = compile(label, value);
    $tbody.appendChild($tr);
}

function getAncestors() {
    var orgs = [].slice.call(location.ancestorOrigins);
    return orgs.map(function (item) {
        return item;
    }).join('\n');
}

window.addEventListener('load', function () {
    add('### you are on ###', location.href);
    add('location.ancestorOrigins', getAncestors());
    add('document.referrer', document.referrer);
});
