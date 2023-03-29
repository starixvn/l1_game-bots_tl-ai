$(document).ready(function () {
  $("#download").click(function () {
    const limitRound = +$("#inputDownloadLimit").val();
    $.ajax({
      url: `/log?limitRound=${limitRound}`,
      method: "GET",
      dataType: "json",
      contentType: "application/json",
      success: function (data) {
        const blob = new Blob([JSON.stringify(data, null, 2)]);
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `${new Date().toISOString()}.json`;
        link.click();
      },
    });
  });
});
