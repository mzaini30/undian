$(function() {

    // fungsi shuffle

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            // And swap it with the current element.
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }

        return array
    }

    $(".proses").click(function() {
        localStorage.setItem("undian", $(".data-undian").val().split("\n"))
        location.href = "proses.html"
    })

    arrayundian = localStorage.getItem("undian").split(",")
    arrayundian = arrayundian.filter(function(entry){
        return entry.trim() != ''
    })
    acakarrayundian = shuffle(arrayundian)

    $(".hasil").html(arrayundian[Math.floor(Math.random() * arrayundian.length)])
    $(".hasil").hide()
    x = 0
    setInterval(function() {
        $(".acak").html(acakarrayundian[x])
        x++
        if (x >= arrayundian.length) {
            x = 0
        }
    }, 50)

    $(".berhenti").click(function() {
        $(".acak").hide()
        $(".hasil").show()
        $(".berhenti").hide()
    })

    $(".kembali").click(function() {
        location.href = "index.html"
    })

})
