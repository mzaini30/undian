$(function() {
    $(".proses").click(function() {
        localStorage.setItem("undian", $(".data-undian").val())
        alert(localStorage.getItem("undian"))
    })
})
