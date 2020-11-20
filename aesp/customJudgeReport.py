#HEADER#
data = []
print "<div style='page-break-after: always; padding: 50% 0; text-align: center;'><h1>APPLICATIONS ABOVE 3.5</h1></div>"
#END HEADER#

#BODY#
temp = {}
temp["Id"] = {ApplicationCode}
temp["Title"] = {SubmissionForm.title}
temp["Score"] = {AverageScore}
temp["Submitter"] = {SubmissionForm.submitterName1}
temp["SubmitterCompany"] = {SubmissionForm.submitterCompanyName}
temp["SubmitterEmail"] = {SubmitterEmail}
temp["SpeakerName"] = {SubmissionForm.speakerName}
temp["SpeakerTitle"] = {SubmissionForm.speakerTitle}
temp["SpeakerCompany"] = {SubmissionForm.speakerCompany}
temp["SpeakerEmail"] = {SubmissionForm.speakerEmail}
temp["SpeakerBio"] = {SubmissionForm.speakerBio}
temp["Resume"] = {SubmissionForm.speakerResume.MediaUrl}
temp["Video"] = {SubmissionForm.videoFileUpload.MediaUrl}
temp["Caption"] = {SubmissionForm.speakerResume.Caption}
temp["AdditionalSpeakers"] = {SubmissionForm.untitled}
temp["SessionFormat"] = {SubmissionForm.sessionFormat}
temp["TopicCategory"] = {SubmissionForm.topicCategories}
temp["Subtopics"] = {SubmissionForm.programDesignImplementation}
temp["Audience"] = {SubmissionForm.selectYourIdealTargetAudience}
temp["Description"] = {SubmissionForm.summary}
temp["Expanded"] = {SubmissionForm.results}
temp["Takeaways"] = {SubmissionForm.provideYourThreeKeyTakeaways}
temp["Comments"] = {ListOfJudgeTextScores}
data.append(temp)
#END BODY#

#FOOTER#
print '''
<html><body>
<style>
    body {
        max-width: 90%;
        margin:0 auto; 
    }
    .div {
        padding-bottom: 0;
    }
    .container {
        width: 100%;
        margin: 0 auto;
    }
    .row {   
        line-height: 24pt;
        border: solid 1px black;
        padding: 5px;
    }
    div.container>div:nth-of-type(odd) {
        background: #e0e0e0;
    }
    label {
        font-weight: bold;
    }
    .show-if-content-block[data-placeholder=""] {
        display: none !important;
    }
    .show-if-content-block.inline-block {
        display: inline-block;
    }
    .show-if-content-block.inline {
        display: inline;
    }
    .show-if-content-block {
        overflow: hidden;
    }
</style>
'''
all_entries = []
filtered_entries = []
all_entries = sorted(data, key=lambda x: x['Id'])
for i in all_entries:
    if i not in filtered_entries:
        filtered_entries.append(i)

flag = False
filtered_entries.sort(key=lambda x: x['Score'], reverse=True)
for item in filtered_entries:
    if float(item["Score"]) < 3.5 and flag == False:
        print "<div style='page-break-after: always; page-break-before: always; padding: 50% 0; text-align: center;'><h1>ABSTRACTS BELOW 3.5</h1></div>"
        flag = True
    print "<br/><div class='container'>"
    print "<h2>Submission: " + item["Id"] + "<br/>"
    not_these = ['a', 'the', 'of', 'for']
    title = ' '.join(word
                     if word in not_these
                     else word.title()
                     for word in item["Title"].capitalize().split(" "))
    print title + "<br/>"
    print "Score: " + item["Score"] + "</h2>"
    print "<div class='row'><label>Submitter Name</label><br/>" + item["Submitter"] + "</div>"
    print "<div class='row'><label>Submitter Company</label><br/>" + item["SubmitterCompany"] + "</div>"
    print "<div class='row'><label>Submitter Email</label><br/>" + item["SubmitterEmail"] + "</div>"
    print "<div class='row'><label>Speaker Name</label><br/>" + item["SpeakerName"] + "</div>"
    print "<div class='row'><label>Speaker Title</label><br/>" + item["SpeakerTitle"] + "</div>"
    print "<div class='row'><label>Speaker Company</label><br/>" + item["SpeakerCompany"] + "</div>"
    print "<div class='row'><label>Speaker Email</label><br/>" + item["SpeakerEmail"] + "</div>"
    print "<div class='row'><label>Speaker Bio</label><br/>" + item["SpeakerBio"] + "</div>"
    print "<div class='row'><label>Speaker Resume</label><br/><a href='" + item["Resume"] + "'>" + item["Resume"] + "</a></div>"
    print "<section class='show-if-content-block' data-class='' data-placeholder='" + item['Video'] + "'><div class='show-if-inner'><div class='row'><label>Video File Upload</label><br/><a href='" + item['Video'] + "'>" + item['Video'] + "</a></div></div></section>"
    print "<section class='show-if-content-block' data-class='' data-placeholder='" + item['Caption'] + "'><div class='show-if-inner'><div class='row'><label>Link to Video Clip</label><br/>" + item['Caption'] + "</div></div></section>"
    print "<section class='show-if-content-block' data-class='' data-placeholder='" + item['AdditionalSpeakers'] + "'><div class='show-if-inner'><div class='row'><label>Additional Speakers or Panelists</label><br/>" + item['AdditionalSpeakers'] + "</div></div></section>"
    print "<div class='row'><label>Session Format</label><br/>" + item["SessionFormat"] + "</div>"
    print "<div class='row'><label>Topic Category</label><br/>" + item["TopicCategory"] + "</div>"
    print "<section class='show-if-content-block' data-class='' data-placeholder='" + item['Subtopics'] + "'><div class='show-if-inner'><div class='row'><label>Sub Topics</label><br/>" + item['Subtopics'] + "</div></div></section>"
    print "<div class='row'><label>Target Audience</label><br/>" + item["Audience"] + "</div>"
    print "<div class='row'><label>Presentation Title (to be used in Conference book)</label><br/>" + title + "</div>"
    print "<div class='row'><label>Presentation Description (to be used in Conference Book)</label><br/>" + item["Description"] + "</div>"
    print "<div class='row'><label>Expanded Presentation Description</label><br/>" + item["Expanded"] + "</div>"
    print "<div class='row'><label>Provide three key takeaways for the audience</label><br/>" + item["Takeaways"] + "</div>"
    strip_comment_label = item["Comments"][124:]
    print "<div class='row'><label>Comments:</label>" + strip_comment_label + "</div>"
    print "</div><br/>"
print "</body></html>"
#END FOOTER#