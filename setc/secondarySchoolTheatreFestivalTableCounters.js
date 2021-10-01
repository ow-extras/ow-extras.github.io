FrontendApiManager.onReady("submissionForm", function(api) {
    function updateTotals() {
        var numTeacher = api.getField("totalTeacherParticipants")
        var numStu = api.getField("totalStudentParticipants")
        var numCha = api.getField("totalChaperones")
        var adultCount = (teacherCount = studentCount = 0)
        if ($('.teacher').length == 0) {
            numTeacher.setValue(0)
        } else {
            $(".teacher").each(function() {
                teacherCount++
                numTeacher.setValue(teacherCount)
            })
        }
        if ($('.chaperone').length == 0) {
            numCha.setValue(0)
        } else {
            $(".chaperone").each(function() {
                adultCount++
                numCha.setValue(adultCount)
            })
        }
        if ($('.student').length == 0) {
            numStu.setValue(0)
        } else {
            $(".student").each(function() {
                studentCount++
                numStu.setValue(studentCount)
            })
        }
    }
    window.setInterval(function() {
        updateTotals()
    }, 1000)
})