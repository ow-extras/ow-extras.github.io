#HEADER#
data = []
print '''
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
.col-1 {
flex-basis: 45%;
}
.col-2 {
flex-basis: 50%;
}
.col-4 {
flex-basis: 30%;
}

@media all and (max-width: 767px) {
.table-header {
    display: none;
}
.table-row{
    
}
li {
    display: block;
}
.col {
    
    flex-basis: 100%;
    
}
.col {
    display: flex;
    padding: 10px 0;
  }
}
</style>
'''
#END HEADER#

#BODY#
temp = {}
temp["Program"] = {SolicitationName}
temp["Round"] = {RoundName}
temp["Id"] = {ApplicationCode}
temp["Category"] = {SubmissionForm.category}
temp["Name"] = {SubmissionForm.nameOfNominatedProjectProgramOrNomineeAsItWillAppearOnTheNeaaAward1}
temp["q1"] = {EvaluationForm.q1UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheProductQualityAttribute.Text}
temp["q1a"] = {EvaluationForm.q1ProductQualityAttributeCommentsAsNeeded.Score}
temp["q2"] = {EvaluationForm.q2UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheFinancialViabilityAttribute.Text}
temp["q2a"] = {EvaluationForm.q2FinancialViabilityAttributeCommentsAsNeeded.Score}
temp["q3"] = {EvaluationForm.q3UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheCustomerSatisfactionAttribute1.Text}
temp["q3a"] = {EvaluationForm.q3CustomerSatisfactionCommentsAsNeeded.Score}
temp["q4"] = {EvaluationForm.q4UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheStakeholderUnderstandingSupportAttribute.Text}
temp["q4a"] = {EvaluationForm.q4StakeholderUnderstandingSupportAttributeCommentsAsNeeded.Score}
temp["q5"] = {EvaluationForm.q5UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheOperationalOptimizationAttribute.Text}
temp["q5a"] = {EvaluationForm.q5OperationalOptimizationAttributeCommentsAsNeeded.Score}
temp["q6"] = {EvaluationForm.q6UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheEmployeeLeadershipDevelopmentAttribute.Text}
temp["q6a"] = {EvaluationForm.q6EmployeeLeadershipDevelopmentAttributeCommentsAsNeeded.Score}
temp["q7"] = {EvaluationForm.q7UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheEnterpriseResiliencyAttribute.Text}
temp["q7a"] = {EvaluationForm.q7EnterpriseResiliencyAttributeCommentsAsNeeded.Score}
temp["q8"] = {EvaluationForm.q8UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheInfrastructureStabilityPerformanceAttribute.Text}
temp["q8a"] = {EvaluationForm.q8InfrastructureStabilityPerformanceAttributeCommentsAsNeeded.Score}
temp["q9"] = {EvaluationForm.q9UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheCommunitySustainabilityAttribute.Text}
temp["q9a"] = {EvaluationForm.q9CommunitySustainabilityAttributeCommentsAsNeeded.Score}
temp["q10"] = {EvaluationForm.q10UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheWaterResourceSustainabilityAttribute.Text}
temp["q10a"] = {EvaluationForm.q10WaterResourceSustainabilityAttributeCommentsAsNeeded.Score}
temp["failed"] = {EvaluationForm.failedAttributes.Text}
temp["award-level"] = {EvaluationForm.awardLevelRecommendedIndicateOne.Text}
temp["judge-name"] = {JudgeFirstName} + " " + {JudgeLastName}

data.append(temp)
#END BODY#

#FOOTER#
all_entries = []
all_entries = sorted(data, key=lambda x: x["Id"])
print "<html><body>"
print "<div class='container' style='page-break-before: always;'>"
print "  <h2>" + temp['Program'] + "</h2>"
print "  <h3>" + temp['Round'] + "</h3>"
print "  <ul class='responsive-table'>"
print "<strong>Q1. Utility has fully implemented, or has taken substantive steps to implement the PRODUCT QUALITY attribute?</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-4'>" + item['q1'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q1. Product Quality Attribute Comments (as needed)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['q1a'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q2. Utility has fully implemented, or has taken substantive steps to implement the FINANCIAL VIABILITY attribute?</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-4'>" + item['q2'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q2. Financial Viability Attribute Comments (as needed)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['q2a'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q3. Utility has fully implemented, or has taken substantive steps to implement the CUSTOMER SATISFACTION attribute?</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-4'>" + item['q3'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Customer Satisfaction Comments (as needed)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['q3a'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q4. Utility has fully implemented, or has taken substantive steps to implement the STAKEHOLDER UNDERSTANDING & SUPPORT attribute?</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-4'>" + item['q4'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q4. Stakeholder Understanding & Support Attribute Comments (as needed)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['q4a'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q5. Utility has fully implemented, or has taken substantive steps to implement the OPERATIONAL OPTIMIZATION attribute?</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-4'>" + item['q5'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q5. Operational Optimization Attribute Comments (as needed)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['q5a'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q6. Utility has fully implemented, or has taken substantive steps to implement the EMPLOYEE & LEADERSHIP DEVELOPMENT attribute?</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-4'>" + item['q6'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q6. Employee & Leadership Development Attribute Comments (as needed)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['q6a'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q7. Utility has fully implemented, or has taken substantive steps to implement the ENTERPRISE RESILIENCY attribute?</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-4'>" + item['q7'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q7. Enterprise Resiliency Attribute Comments (as needed)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['q7a'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q8. Utility has fully implemented, or has taken substantive steps to implement the INFRASTRUCTURE STABILITY & PERFORMANCE attribute?</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-4'>" + item['q8'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q8. Infrastructure Stability & Performance Attribute Comments (as needed)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['q8a'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q9. Utility has fully implemented, or has taken substantive steps to implement the COMMUNITY SUSTAINABILITY attribute?</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-4'>" + item['q9'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q9. Community Sustainability Attribute Comments (as needed)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['q9a'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q10. Utility has fully implemented, or has taken substantive steps to implement the WATER RESOURCE SUSTAINABILITY attribute?</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-4'>" + item['q10'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Q10. Water Resource Sustainability Attribute Comments (as needed)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['q10a'] + "</div>"
    print "      </li>"
print "  </ul>"



print "  <ul class='responsive-table'>"
print "<strong>Failed Attributes (including ones NOT submitted)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['failed'] + "</div>"
    print "      </li>"
print "  </ul>"
print "  <ul class='responsive-table'>"
print "<strong>Award Level Recommended (Indicate one)</strong><br><br>"
print "    <li class='table-header'>"
print "      <div class='col col-1'>Organization</div>"
print "      <div class='col col-4'>Judge Name</div>"
print "      <div class='col col-4'>Judge Response</div>"
print "    </li>"
for item in all_entries:
    print "      <li class='table-row'>"
    print "      <div class='col col-2'><strong>" + item['Name'] + "</strong><br>" +  item['Category']  + "<br>App # " + item['Id'] + "</div>"
    print "      <div class='col col-2'>" + item['judge-name'] + "</div>"
    print "      <div class='col col-2'>" + item['award-level'] + "</div>"
    print "      </li>"
print "  </ul>"
print "</div>"
print '''
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(".col-4:empty").parent().hide();
$(".col-2:empty").parent().hide();
</script>
'''
print "</body></html>"
#END FOOTER#