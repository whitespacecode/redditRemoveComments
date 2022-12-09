var total = $('div#siteTable div.comment:not(.hidden)').length;
$('div#siteTable div.comment:not(.hidden)').each(function (i) {
  var that = this;
  setTimeout(function () {
    var flag = false;
    if ($(that).find('textarea').text() != ".") {
      $(that).find('textarea').text('.');
      $(that).find('div.usertext-buttons button.save').click();
      flag = true;
    }

    function del() {
      $(that).find('form.del-button a.yes').click();
      console.debug("Deleted " + i + "/" + total);
    }

    if (flag) setTimeout(del, (total + i) * 1100);
    else del();
  }, i * 1100);
});
