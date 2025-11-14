function getTyrolSource() {
    var LOAD_ITEMS_DELAY = 500;
    var MAX_SCROLL_ATTEMPTS = 20;

    try {
        var selectedItem = document.querySelector('.media_item.selected');
        if (!selectedItem) {
            alert('Error: Selected image not found');
            return;
        }
        var mediaId = selectedItem.id;
        var url = 'https://matriken.tirol.gv.at/' + mediaId;

        var h1Element = document.querySelector('h1.objdata-name');
        if (!h1Element) {
            alert('Error: Element h1.objdata-name not found');
            return;
        }
        var fileName = h1Element.innerText.trim();

        var imageNumberMatch = fileName.match(/_(\d+)$/);
        if (!imageNumberMatch) {
            alert('Error: Could not extract image number from filename');
            return;
        }
        var imageNumber = parseInt(imageNumberMatch[1], 10);

        var indexMatch = fileName.match(/(_MF \d+-\d+)/);
        var index = indexMatch ? indexMatch[1] : '';

        var cityMatch = fileName.match(/_MF \d+-\d+_([^-]+)/);
        var city = cityMatch ? cityMatch[1].trim() : '';

        var yearsMatch = fileName.match(/(\d{4})-_(\d{4})/);
        var yearFrom = yearsMatch ? yearsMatch[1] : '';
        var yearTo = yearsMatch ? yearsMatch[2] : '';

        var categoryItems = document.querySelectorAll('.objdata-categories ul li');
        if (categoryItems.length < 2) {
            alert('Error: Registry type not found');
            return;
        }
        var bookType = categoryItems[1].innerText.trim();

        var getTotalCount = function(callback) {
            var container = document.getElementById('container_result');
            if (!container) {
                callback('ERROR');
                return;
            }

            var previousCount = document.querySelectorAll('.media_item').length;
            var attempts = 0;

            var scrollAndCheck = function() {
                container.scrollTop = container.scrollHeight;
                attempts++;

                setTimeout(function() {
                    var currentCount = document.querySelectorAll('.media_item').length;

                    if (currentCount > previousCount && attempts < MAX_SCROLL_ATTEMPTS) {
                        previousCount = currentCount;
                        scrollAndCheck();
                    } else {
                        var allItems = document.querySelectorAll('.media_item');
                        var maxNumber = 0;

                        allItems.forEach(function(item) {
                            var title = item.dataset.title || '';
                            if (title.includes(index)) {
                                var numberMatch = title.match(/_(\d+)$/);
                                if (numberMatch) {
                                    var num = parseInt(numberMatch[1], 10);
                                    if (num > maxNumber) {
                                        maxNumber = num;
                                    }
                                }
                            }
                        });

                        callback(maxNumber);
                    }
                }, LOAD_ITEMS_DELAY);
            };

            scrollAndCheck();
        };

        getTotalCount(function(totalCount) {
            var ref = '<ref>[' + url + ' ' + city + ' ' + bookType + ' ' + yearFrom + '-' + yearTo + ' mit Index' + index + ']. Image ' + imageNumber + ' of ' + totalCount + ', file: ' + fileName + '.jpg. Tiroler Landesarchiv.</ref>';

            navigator.clipboard.writeText(ref).then(function () {
                alert(ref);
            }, function (err) {
                alert('Error copying to clipboard');
            });
        });

    } catch (error) {
        alert('Error during processing: ' + error.message);
    }
}
