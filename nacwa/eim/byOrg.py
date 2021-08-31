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
.col-2 {
flex-basis: 60%;
}
</style>
'''


def float_or_zero(num):
    try:
        return float(num)
    except:
        return 0
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
temp["total-score"] = sum([float_or_zero({EvaluationForm.q1UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheProductQualityAttribute.Score}), float_or_zero({EvaluationForm.q2UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheFinancialViabilityAttribute.Score}), float_or_zero({EvaluationForm.q3UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheCustomerSatisfactionAttribute1.Score}), float_or_zero({EvaluationForm.q4UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheStakeholderUnderstandingSupportAttribute.Score}), float_or_zero({EvaluationForm.q5UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheOperationalOptimizationAttribute.Score}), float_or_zero({EvaluationForm.q6UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheEmployeeLeadershipDevelopmentAttribute.Score}), float_or_zero({EvaluationForm.q7UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheEnterpriseResiliencyAttribute.Score}), float_or_zero({EvaluationForm.q8UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheInfrastructureStabilityPerformanceAttribute.Score}), float_or_zero({EvaluationForm.q9UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheCommunitySustainabilityAttribute.Score}), float_or_zero({EvaluationForm.q10UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheWaterResourceSustainabilityAttribute.Score}), float_or_zero({EvaluationForm.failedAttributes.Score}), float_or_zero({EvaluationForm.awardLevelRecommendedIndicateOne.Score})])
temp["weighted-score"] = sum([float_or_zero({EvaluationForm.q1UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheProductQualityAttribute.Score}), float_or_zero({EvaluationForm.q2UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheFinancialViabilityAttribute.Score}), float_or_zero({EvaluationForm.q3UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheCustomerSatisfactionAttribute1.Score}), float_or_zero({EvaluationForm.q4UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheStakeholderUnderstandingSupportAttribute.Score}), float_or_zero({EvaluationForm.q5UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheOperationalOptimizationAttribute.Score}), float_or_zero({EvaluationForm.q6UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheEmployeeLeadershipDevelopmentAttribute.Score}), float_or_zero({EvaluationForm.q7UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheEnterpriseResiliencyAttribute.Score}), float_or_zero({EvaluationForm.q8UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheInfrastructureStabilityPerformanceAttribute.Score}), float_or_zero({EvaluationForm.q9UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheCommunitySustainabilityAttribute.Score}), float_or_zero({EvaluationForm.q10UtilityHasFullyImplementedOrHasTakenSubstantiveStepsToImplementTheWaterResourceSustainabilityAttribute.Score})])
data.append(temp)
#END BODY#

#FOOTER#
all_entries = []
all_entries = sorted(data, key=lambda x: x["Id"])

print "<html><body>"
print "<div class='container'>"
i = 0
while i < 1:
	for item in all_entries:
		print "<div style='page-break-before: always;'>"
		print "  <h2>" + item['Name'] + "</h2>"
		print "  <h3>" + item['Category'] + "<br>App # " + temp['Id'] + "</h3>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'><strong>Score Summary</strong></div>"
		print "      <div class='col'>Total Score</div>"
		print "      <div class='col'>Weighted Score</div>"
		print "    </li>"
		print "      <li class='table-row'>"
		print "      <div class='col'>""</div>"
		total = 0
		weighted = 0
		for item in all_entries:
			total += item['total-score']
			weighted += item['weighted-score']
		print "      <div class='col'>", total, "</div>"
		print "      <div class='col'>", weighted, "</div>"
		print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q1. Utility has fully implemented, or has taken substantive steps to implement the PRODUCT QUALITY attribute?</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['q1'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q1. Product Quality Attribute Comments (as needed)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col col-2'>" + item['q1a'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q2. Utility has fully implemented, or has taken substantive steps to implement the FINANCIAL VIABILITY attribute?</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['q2'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Financial Viability Attribute Comments (as needed)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col col-2'>" + item['q2a'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q3. Utility has fully implemented, or has taken substantive steps to implement the CUSTOMER SATISFACTION attribute?</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['q3'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q3. Customer Satisfaction Comments (as needed)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col col-2'>" + item['q3a'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q4. Utility has fully implemented, or has taken substantive steps to implement the STAKEHOLDER UNDERSTANDING & SUPPORT attribute?</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['q4'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q4. Stakeholder Understanding & Support Attribute Comments (as needed)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col col-2'>" + item['q4a'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q5. Utility has fully implemented, or has taken substantive steps to implement the OPERATIONAL OPTIMIZATION attribute?</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['q5'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q5. Operational Optimization Attribute Comments (as needed)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col col-2'>" + item['q5a'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q6. Utility has fully implemented, or has taken substantive steps to implement the EMPLOYEE & LEADERSHIP DEVELOPMENT attribute?</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['q6'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q6. Employee & Leadership Development Attribute Comments (as needed)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col col-2'>" + item['q6a'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q7. Utility has fully implemented, or has taken substantive steps to implement the ENTERPRISE RESILIENCY attribute?</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['q7'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q7. Enterprise Resiliency Attribute Comments (as needed)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col col-2'>" + item['q7a'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q8. Utility has fully implemented, or has taken substantive steps to implement the INFRASTRUCTURE STABILITY & PERFORMANCE attribute?</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['q8'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q8. Infrastructure Stability & Performance Attribute Comments (as needed)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col col-2'>" + item['q8a'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q9. Utility has fully implemented, or has taken substantive steps to implement the COMMUNITY SUSTAINABILITY attribute?</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['q9'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q9. Community Sustainability Attribute Comments (as needed)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col col-2'>" + item['q9a'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q10. Utility has fully implemented, or has taken substantive steps to implement the WATER RESOURCE SUSTAINABILITY attribute?</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['q10'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Q10. Water Resource Sustainability Attribute Comments (as needed)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col col-2'>" + item['q10a'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Failed Attributes (including ones NOT submitted)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['failed'] + "</div>"
			print "      </li>"
		print "  </ul>"
		print "  <ul class='responsive-table'>"
		print "    <li class='table-header'>"
		print "      <div class='col'>Award Level Recommended (Indicate one)</div>"
		print "    </li>"
		for item in all_entries:
			print "      <li class='table-row'>"
			print "      <div class='col'>" + item['judge-name'] + "</div>"
			print "      <div class='col'>" + item['award-level'] + "</div>"
			print "      </li>"
		print "  </ul>"
		break
	i += 1
print "</div>"
print "</body></html>"
#END FOOTER#