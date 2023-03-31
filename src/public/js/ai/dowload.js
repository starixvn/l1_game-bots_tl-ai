$(document).ready(function () {
  const code = makeId();
  $("#inputDownloadCode").val(code);
  $("#inputCode").val(code);

  $("#download").click(function () {
    const limitRound = +$("#inputDownloadLimit").val();
    const code = $("#inputDownloadCode").val();
    const hasPlayer = $("#hasPlayer").is(":checked");
    const url = `/log?limitRound=${limitRound}&code=${code}${
      hasPlayer ? "&hasPlayer=1" : ""
    }`;
    $.ajax({
      url,
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

  function makeId(length = 9) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      counter += 1;
    }
    return result;
  }
});
