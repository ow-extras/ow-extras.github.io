FrontendApiManager.onReady("submissionForm", function(api) {
    function updateTotals() {
        var numTeacher = api.getField("totalTeacherParticipants");
        var numStu = api.getField("totalStudentParticipants");
        var numCha = api.getField("totalChaperones");
        var adultCount = (teacherCount = studentCount = 0);

        $(".teacher").each(function() {
            teacherCount++;
            numTeacher.setValue(teacherCount);
        });

        if ($('.teacher').length == 0) {
            numTeacher.setValue(0);
        }

        $(".chaperone").each(function() {
            adultCount++;
            numCha.setValue(adultCount);
        });

        if ($('.chaperone').length == 0) {
            numCha.setValue(0);
        }

        $(".student").each(function() {
            studentCount++;
            numStu.setValue(studentCount);
        });

        if ($('.student').length == 0) {
            numStu.setValue(0);
        }
    }

    window.setInterval(function() {
        updateTotals();
    }, 1000);
});