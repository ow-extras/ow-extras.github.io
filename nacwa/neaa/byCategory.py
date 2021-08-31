#HEADER#
data = []
print ('''
<style>
body {
  font-family: "lato", sans-serif;
}
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: left;
}

li {
border-radius: 3px;
padding: 25px 30px;
display: flex;
justify-content: space-between;
}
.table-header {
background-color: #eee;
box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
padding: 5px;
}
.table-row {
background-color: #ffffff;
box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
}
.col-2 {
flex-basis: 60%;
}
</style>
''')

#BODY#
temp = {}
temp["Program"] = {SolicitationName}
temp["Round"] = {RoundName}
temp["Id"] = {ApplicationCode}
temp["Nominee"] = {ApplicationName}
temp["Agency"] = {SubmissionForm.submittingAgencySName}
temp["Category"] = {SubmissionForm.category}
temp["q1"] = {EvaluationForm.q1DoesTheNominationMeetTheEligibilityAndCriteriaForThisNeaaCategory.Text}
temp["q1a"] = {EvaluationForm.q1CommentsAsNeeded.Score}
temp["changeCategory"] = {EvaluationForm.followUpQuestions.Score}
temp["q2"] = {EvaluationForm.q2DoYouRecommendThisNominationForAnNeaaHonor.Text}
temp["q2a"] = {EvaluationForm.q2CommentsAsNeeded.Score}
temp["feedback"] = {EvaluationForm.applicationFeedbackToAgency.Score}
temp["JudgeName"] = {JudgeFirstName} + " " + {JudgeLastName}
temp["numJudges"] = {NumberOfAssignedJudges}


data.append(temp)
#END BODY#

#FOOTER#
all_entries = []
apps = []
filtered_entries = []
cates = []
filtered_cates = []
all_entries = sorted(data, key=lambda x: x["Category"])

for item in all_entries:
    if item["Id"] not in apps:
        filtered_entries.append(item)
        apps.append(item["Id"])

for item in filtered_entries:
    if item["Id"] not in apps:
        filtered_entries.append(item)
        apps.append(item["Id"])

print ("<html><body>")
print ("<div class='container'>")
for item in filtered_entries:
    print ("<div style='page-break-before: always;'>")
    
    print ("<h1>" + item["Category"] + "</h1>")

    print ("<ul class='responsive-table'>")
    print ("<br><li class='table-row'>")
    print ("<div class='col col-1'> <strong>" + item["Nominee"] + "</strong><br>")
    print ("Agency: <strong>" + item['Agency'] + "</strong><br>")
    print ("App#: " + item["Id"])
    print ("</li><hr></div>")
    print ("<ul class='responsive-table'>")
    print ("<li class='table-header'>")
    print ("<div class='col'>Q1. Does the nomination meet the eligibility and criteria for this NEAA category?<div>")
    print ("</li>")
    tempId = item['Id']
    for item in all_entries:
        if int(item["Id"]) == int(tempId):
            print ("<li class='table-row'>")
            print ("<div class='col'>" + item["JudgeName"] + "</div>")
            print ("<div class='col'>" + item["q1"] + "</div>")
            print ("</li>")
    print ("</ul>")
    print ("<ul class='responsive-table'>")
    print ("<li class='table-header'>")
    print ("<div class='col'>Q1 Comments (as needed)</div>")
    print ("</li>")
    for item in all_entries:
        if int(item["Id"]) == int(tempId):
            print ("<li class='table-row'>")
            print ("<div class='col'>" + item["JudgeName"] + "</div>")
            print ("<div class='col col-2'>" + item['q1a'] + "</div>")
            print ("</li>")
    print ("</ul>")
    print ("<ul class='responsive-table'>")
    print ("<li class='table-header'>")
    print ("<div class='col'>Should this Award be moved to a different category?  Which one?</div>")
    print ("</li>")
    for item in all_entries:
        if int(item["Id"]) == int(tempId):
            print ("<li class='table-row'>")
            print ("<div class='col'>" + item["JudgeName"] + "</div>")
            print ("<div class='col col-2'>" + item['changeCategory'] + "</div>")
            print ("</li>")
    print ("</ul>")
    print ("<ul class='responsive-table'>")
    print ("<li class='table-header'>")
    print ("<div class='col'>Q2. Do you recommend this nomination for an NEAA honor?</div>")
    print ("</li>")
    for item in all_entries:
        if int(item["Id"]) == int(tempId):
            print ("<li class='table-row'>")
            print ("<div class='col'>" + item["JudgeName"] + "</div>")
            print ("<div class='col col-2'>" + item['q2'] + "</div>")
            print ("</li>")
    print ("</ul>")
    print ("<ul class='responsive-table'>")
    print ("<li class='table-header'>")
    print ("<div class='col'>Q2. Comments (as needed)</div>")
    print ("</li>")
    for item in all_entries:
        if int(item["Id"]) == int(tempId):
            print ("<li class='table-row'>")
            print ("<div class='col'>" + item["JudgeName"] + "</div>")
            print ("<div class='col col-2'>" + item['q2a'] + "</div>")
            print ("</li>")
    print ("</ul>")
    print ("<ul class='responsive-table'>")
    print ("<li class='table-header'>")
    print ("<div class='col'>APPLICATION FEEDBACK TO AGENCY</div>")
    print ("</li>")
    for item in all_entries:
        if int(item["Id"]) == int(tempId):
            print ("<li class='table-row'>")
            print ("<div class='col'>" + item["JudgeName"] + "</div>")
            print ("<div class='col col-2'>" + item['feedback'] + "</div>")
            print ("</li>")
    print ("</ul>")
    print ("</ul>")
print ('''
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(".col-4:empty").parent().hide();
$(".col-2:empty").parent().hide();
</script>
<script>
var map = {};
$("h1").each(function(){
    var value = $(this).text();
    if (map[value] == null){
        map[value] = true;
    } else {
        $(this).remove();
    }
});
</script>
''')
print ("</body></html>")
#END FOOTER#