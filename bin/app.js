$(function() {

    $(".proses").click(function() {
        localStorage.setItem("undian", $(".data-undian").val().split("\n"))
        location.href = "proses.html"
    })

    $(".kembali").hide()
    arrayundian = localStorage.getItem("undian").split(",")
    $(".hasil").html(arrayundian[Math.floor(Math.random() * arrayundian.length)])
    $(".hasil").hide()
    x = 0
    setInterval(function() {
        $(".acak").html(arrayundian[x])
        x++
        if (x >= arrayundian.length) {
            x = 0
        }
    }, 100)

    $(".berhenti").click(function() {
        $(".acak").hide()
        $(".hasil").show()
        $(".berhenti").hide()
        $(".kembali").show()
    })

    $(".kembali").click(function() {
        location.href = "index.html"
    })

})
