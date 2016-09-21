var isURL = /^https?:\/\//;
var set = new Set();

function collect(object) {
    set.add(object);

    for (var key in object) {
        if (!object.hasOwnProperty(key)) {
            return;
        }

        var value = object[key];

        if (typeof value === 'object' && value !== null && !set.has(value)) {
            collect(value);
        }
    }
}

function sniff(object) {
    for (var key in object) {
        if (!object.hasOwnProperty(key)) {
            return;
        }

        var value = object[key];

        if (value === null) {
            return;
        }

        switch (typeof value) {
            case 'object':
                if (!set.has(value)) {
                    // console.warn(value);
                    sniff(value);
                }
                break;

            case 'string':
                if (isURL.test(value)) {
                    console.log(object, key, value);
                }
                break;
        }
    }
}

collect(window);

set.forEach(function (object) {
    sniff(object);
});
