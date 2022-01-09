// parameter wise AQI calculation
function Linear(AQIhigh, AQIlow, Conchigh, Conclow, Concentration) {
    var linear;
    var Conc = parseFloat(Concentration);
    var AQI;
    AQI = ((Conc - Conclow) / (Conchigh - Conclow)) * (AQIhigh - AQIlow) + AQIlow;
    linear = Math.round(AQI);
    return linear;
}

function AQIPM25(Concentration) {
    var conc;
    var AQI;
    conc = (Math.floor(10 * parseFloat(Concentration))) / 10;
    if (conc >= 0 && conc < 12.1) {
        AQI = Linear(50, 0, 12, 0, conc);
    } else if (conc >= 12.1 && conc < 35.5) {
        AQI = Linear(100, 51, 35.4, 12.1, conc);
    } else if (conc >= 35.5 && conc < 55.5) {
        AQI = Linear(150, 101, 55.4, 35.5, conc);
    } else if (conc >= 55.5 && conc < 150.5) {
        AQI = Linear(200, 151, 150.4, 55.5, conc);
    } else if (conc >= 150.5 && conc < 250.5) {
        AQI = Linear(300, 201, 250.4, 150.5, conc);
    } else if (conc >= 250.5 && conc < 350.5) {
        AQI = Linear(400, 301, 350.4, 250.5, conc);
    } else if (conc >= 350.5 && conc < 500.5) {
        AQI = Linear(500, 401, 500.4, 350.5, conc);
    } else {
        AQI = "PM25message";
    }
    return AQI;
}

function AQIPM10(Concentration) {
    var conc;
    var AQI;
    conc = Math.floor(parseFloat(Concentration));
    if (conc >= 0 && conc < 55) {
        AQI = Linear(50, 0, 54, 0, conc);
    } else if (conc >= 55 && conc < 155) {
        AQI = Linear(100, 51, 154, 55, conc);
    } else if (conc >= 155 && conc < 255) {
        AQI = Linear(150, 101, 254, 155, conc);
    } else if (conc >= 255 && conc < 355) {
        AQI = Linear(200, 151, 354, 255, conc);
    } else if (conc >= 355 && conc < 425) {
        AQI = Linear(300, 201, 424, 355, conc);
    } else if (conc >= 425 && conc < 505) {
        AQI = Linear(400, 301, 504, 425, conc);
    } else if (conc >= 505 && conc < 605) {
        AQI = Linear(500, 401, 604, 505, conc);
    } else {
        AQI = "PM10message";
    }
    return AQI;
}

function AQICO(Concentration) {
    var conc;
    var AQI;
    conc = (Math.floor(10 * parseFloat(Concentration))) / 10;
    if (conc >= 0 && conc < 4.5) {
        AQI = Linear(50, 0, 4.4, 0, conc);
    } else if (conc >= 4.5 && conc < 9.5) {
        AQI = Linear(100, 51, 9.4, 4.5, conc);
    } else if (conc >= 9.5 && conc < 12.5) {
        AQI = Linear(150, 101, 12.4, 9.5, conc);
    } else if (conc >= 12.5 && conc < 15.5) {
        AQI = Linear(200, 151, 15.4, 12.5, conc);
    } else if (conc >= 15.5 && conc < 30.5) {
        AQI = Linear(300, 201, 30.4, 15.5, conc);
    } else if (conc >= 30.5 && conc < 40.5) {
        AQI = Linear(400, 301, 40.4, 30.5, conc);
    } else if (conc >= 40.5 && conc < 50.5) {
        AQI = Linear(500, 401, 50.4, 40.5, conc);
    } else {
        AQI = "Out of Range";
    }
    return AQI;
}

function AQISO21hr(Concentration) {
    var conc;
    var AQI;
    conc = Math.floor(parseFloat(Concentration));
    if (conc >= 0 && conc < 36) {
        AQI = Linear(50, 0, 35, 0, conc);
    } else if (conc >= 36 && conc < 76) {
        AQI = Linear(100, 51, 75, 36, conc);
    } else if (conc >= 76 && conc < 186) {
        AQI = Linear(150, 101, 185, 76, conc);
    } else if (conc >= 186 && conc <= 304) {
        AQI = Linear(200, 151, 304, 186, conc);
    } else if (conc >= 304 && conc <= 604) {
        AQI = "SO21hrmessage";
    } else {
        AQI = "Out of Range";
    }
    return AQI;
}

function AQISO224hr(Concentration) {
    var conc;
    var AQI;
    conc = Math.floor(parseFloat(Concentration));
    if (conc >= 0 && conc <= 304) {
        AQI = "SO224hrmessage";
    } else if (conc >= 304 && conc < 605) {
        AQI = Linear(300, 201, 604, 305, conc);
    } else if (conc >= 605 && conc < 805) {
        AQI = Linear(400, 301, 804, 605, conc);
    } else if (conc >= 805 && conc <= 1004) {
        AQI = Linear(500, 401, 1004, 805, conc);
    } else {
        AQI = "Out of Range";
    }
    return AQI;
}

function AQIOzone8hr(Concentration) {
    var conc;
    var AQI;
    conc = (Math.floor(parseFloat(Concentration))) / 1000;

    if (conc >= 0 && conc < .055) {
        AQI = Linear(50, 0, 0.054, 0, conc);
    } else if (conc >= .055 && conc < .071) {
        AQI = Linear(100, 51, .070, .055, conc);
    } else if (conc >= .071 && conc < .086) {
        AQI = Linear(150, 101, .085, .071, conc);
    } else if (conc >= .086 && conc < .106) {
        AQI = Linear(200, 151, .105, .086, conc);
    } else if (conc >= .106 && conc < .201) {
        AQI = Linear(300, 201, .200, .106, conc);
    } else if (conc >= .201 && conc < .605) {
        AQI = "O3message";
    } else {
        AQI = "Out of Range";
    }
    return AQI;
}

function AQIOzone1hr(Concentration) {
    var conc;
    var AQI;
    conc = (Math.floor(parseFloat(Concentration))) / 1000;
    if (conc >= 0 && conc <= .124) {
        AQI = "O31hrmessage";
    } else if (conc >= .125 && conc < .165) {
        AQI = Linear(150, 101, .164, .125, conc);
    } else if (conc >= .165 && conc < .205) {
        AQI = Linear(200, 151, .204, .165, conc);
    } else if (conc >= .205 && conc < .405) {
        AQI = Linear(300, 201, .404, .205, conc);
    } else if (conc >= .405 && conc < .505) {
        AQI = Linear(400, 301, .504, .405, conc);
    } else if (conc >= .505 && conc < .605) {
        AQI = Linear(500, 401, .604, .505, conc);
    } else {
        AQI = "Out of Range";
    }
    return AQI;
}

function AQINO2(Concentration) {
    var conc;
    var AQI;
    conc = (Math.floor(parseFloat(Concentration))) / 1000;
    if (conc >= 0 && conc < .054) {
        AQI = Linear(50, 0, .053, 0, conc);
    } else if (conc >= .054 && conc < .101) {
        AQI = Linear(100, 51, .100, .054, conc);
    } else if (conc >= .101 && conc < .361) {
        AQI = Linear(150, 101, .360, .101, conc);
    } else if (conc >= .361 && conc < .650) {
        AQI = Linear(200, 151, .649, .361, conc);
    } else if (conc >= .650 && conc < 1.250) {
        AQI = Linear(300, 201, 1.249, .650, conc);
    } else if (conc >= 1.250 && conc < 1.650) {
        AQI = Linear(400, 301, 1.649, 1.250, conc);
    } else if (conc >= 1.650 && conc <= 2.049) {
        AQI = Linear(500, 401, 2.049, 1.650, conc);
    } else {
        AQI = "Out of Range";
    }
    return AQI;
}

// get AQI category
function AQICategory(AQIndex) {
    var AQI = parseFloat(AQIndex)
    var AQICategory;
    if (AQI <= 50) {
        AQICategory = "Good";
    } else if (AQI > 50 && AQI <= 100) {
        AQICategory = "Moderate";
    } else if (AQI > 100 && AQI <= 150) {
        AQICategory = "Unhealthy for Sensitive Groups";
    } else if (AQI > 150 && AQI <= 200) {
        AQICategory = "Unhealthy";
    } else if (AQI > 200 && AQI <= 300) {
        AQICategory = "Very Unhealthy";
    } else if (AQI > 300 && AQI <= 400) {
        AQICategory = "Hazardous";
    } else if (AQI > 400 && AQI <= 500) {
        AQICategory = "Hazardous";
    } else {
        AQICategory = "Out of Range";
    }
    return AQICategory;
}

// get parameter unit
function PollutantUnit(paramIndex) {
    if (paramIndex === '1' || paramIndex === '2') {
        return "ug/m3";
    } else if (paramIndex === '3') {
        return "ppm";
    } else if (paramIndex === '4' || paramIndex === '5' || paramIndex === '6' || paramIndex === '7' || paramIndex === '8') {
        return "ppb";
    }
    return '';
}

// Calculate AQI
function ConcAQI (param, value) {
	return new Promise(function(resolve, reject) {
        let AQIValue;
		let returnObject = {};

        if (param === '1') {
            AQIValue = AQIPM25(value);
        } else if (param === '2') {
            AQIValue = AQIPM10(value);
        } else if (param === '3') {
            AQIValue = AQICO(value);
        } else if (param === '4') {
            AQIValue = AQISO21hr(value);
        } else if (param === '5') {
            AQIValue = AQISO224hr(value);
        } else if (param === '6') {
            AQIValue = AQIOzone8hr(value);
        } else if (param === '7') {
            AQIValue = AQIOzone1hr(value);
        } else if (param === '8') {
            AQIValue = AQINO2(value);
        }

        if (AQIValue === "Out of Range") {
            returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>Note: Values above 500 are considered Beyond the AQI. Follow recommendations for the Hazardous category</p>";
			returnObject['aqiValue'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
        } else if (AQIValue === "SO21hrmessage") {
            returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>AQI values of 201 or greater are calculated with 24-hour SO2 concentrations.</p>";
			returnObject['aqiValue'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
        } else if (AQIValue === "SO224hrmessage") {
            returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>AQI values less than 201 are calculated with 1-hour SO2 concentrations.</p>";
			returnObject['aqiValue'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
        } else if (AQIValue === "O3message") {
            returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>8-hour ozone values do not define higher AQI values (>=301).</p><p> AQI values of 301 or greater are calculated with 1-hour ozone concentrations.</p>";
			returnObject['aqiValue'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
        } else if (AQIValue === "O31hrmessage") {
            returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>1-hour ozone values do not define lower AQI values (<= 100).  AQI values of 100 or lower are calculated with 8-hour ozone concentrations.</p>";
			returnObject['aqiValue'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
        } else if (AQIValue === "PM25message") {
            returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>Note: Values above 500 are considered Beyond the AQI.</p><p>Additional information on reducing exposure to extremely high levels of particle pollution is available <a href='https://airnow.gov/index.cfm?action=aqibasics.pmhilevels'target='_blank'>here</a>.</p>";
			returnObject['aqiValue'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
        } else if (AQIValue === "PM10message") {
            returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>Note: Values above 500 are considered Beyond the AQI. Follow recommendations for the Hazardous category.</p>";
			returnObject['aqiValue'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
        } else {
            returnObject['messageType'] = "success";
			returnObject['message'] = "<p>Note: Values above 500 are considered Beyond the AQI. Follow recommendations for the Hazardous category.</p>";
			returnObject['aqiValue'] = AQIValue;
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = AQICategory(AQIValue);
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
        }

		if (returnObject['aqiCategory'] === 'Good') {
            returnObject['backgroundColor'] = "#00e000";
            returnObject['fontColor'] = "black";
            if (param === '1') {
                returnObject['sensitiveGroups'] = "People with respiratory or heart disease, the elderly and children are the groups most at risk.";
            } else if (param === '2') {
                returnObject['sensitiveGroups'] = "People with respiratory disease are the group most at risk.";
            } else if (param === '3') {
                returnObject['sensitiveGroups'] = "People with heart disease are the group most at risk.";
            } else if (param === '4' || param === '5') {
                returnObject['sensitiveGroups'] = "People with asthma are the group most at risk.";
            } else if (param === '6' || param === '7') {
                returnObject['sensitiveGroups'] = "Children and people with asthma are the groups most at risk.";
            } else if (param === '8') {
                returnObject['sensitiveGroups'] = "People with asthma or other respiratory diseases, the elderly, and children are the groups most at risk.";
            }
        } else if (returnObject['aqiCategory'] === 'Moderate') {
            returnObject['backgroundColor'] = "#ffff00";
            returnObject['fontColor'] = "black";
            if (param === '1') {
                returnObject['sensitiveGroups'] = "People with respiratory or heart disease, the elderly and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Unusually sensitive people should consider reducing prolonged or heavy exertion.";
                returnObject['cautionaryStatements'] = "Unusually sensitive people should consider reducing prolonged or heavy exertion.";
            } else if (param === '2') {
                returnObject['sensitiveGroups'] = "People with respiratory disease are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Unusually sensitive people should consider reducing prolonged or heavy exertion.";
                returnObject['cautionaryStatements'] = "Unusually sensitive people should consider reducing prolonged or heavy exertion.";
            } else if (param === '3') {
                returnObject['sensitiveGroups'] = "People with heart disease are the group most at risk.";
                returnObject['healthEffectsStatements'] = "None";
                returnObject['cautionaryStatements'] = "None";
            } else if (param === '4' || param === '5') {
                returnObject['sensitiveGroups'] = "People with asthma are the group most at risk.";
                returnObject['healthEffectsStatements'] = "None";
                returnObject['cautionaryStatements'] = "None";
            } else if (param === '6' || param === '7') {
                returnObject['sensitiveGroups'] = "Children and people with asthma are the groups most at risk.";
                if (param === '6') {
                    returnObject['healthEffectsStatements'] = "Unusually sensitive individuals may experience respiratory symptoms.";
                    returnObject['cautionaryStatements'] = "Unusually sensitive people should consider limiting prolonged outdoor exertion.";
                }
            } else if (param === '8') {
                returnObject['sensitiveGroups'] = "People with asthma or other respiratory diseases, the elderly, and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Unusually sensitive individuals may experience respiratory symptoms.";
                returnObject['cautionaryStatements'] = "Unusually sensitive people should consider reducing prolonged or heavy outdoor exertion.";
            }
        } else if (returnObject['aqiCategory'] === 'Unhealthy for Sensitive Groups') {
            returnObject['backgroundColor'] = "#ff7600";
            returnObject['fontColor'] = "black";
            if (param === '1') {
                returnObject['sensitiveGroups'] = "People with respiratory or heart disease, the elderly and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Increasing likelihood of respiratory symptoms in sensitive individuals, aggravation of heart or lung disease and premature mortality in persons with cardiopulmonary disease and the elderly.";
                returnObject['cautionaryStatements'] = "People with respiratory or heart disease, the elderly and children should limit prolonged exertion.";
            } else if (param === '2') {
                returnObject['sensitiveGroups'] = "People with respiratory disease are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Increasing likelihood of respiratory symptoms and aggravation of lung disease, such as asthma";
                returnObject['cautionaryStatements'] = "People with respiratory disease, such as asthma, should limit outdoor exertion.";
            } else if (param === '3') {
                returnObject['sensitiveGroups'] = "People with heart disease are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Increasing likelihood of reduced exercise tolerance due to increased cardiovascular symptoms, such as chest pain, in people with cardiovascular disease.";
                returnObject['cautionaryStatements'] = "People with cardiovascular disease, such as angina, should limit heavy exertion and avoid sources of CO, such as heavy traffic.";
            } else if (param === '4' || param === '5') {
                returnObject['sensitiveGroups'] = "People with asthma are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Increasing likelihood of respiratory symptoms, such as chest tightness and breathing discomfort, in people with asthma.";
                returnObject['cautionaryStatements'] = "People with asthma should consider limiting outdoor exertion.";
            } else if (param === '6' || param === '7') {
                returnObject['healthEffectsStatements'] = "Increasing likelihood of respiratory symptoms and breathing discomfort in active children and adults and people with respiratory disease, such as asthma.";
                returnObject['sensitiveGroups'] = "Children and people with asthma are the groups most at risk.";
                if (param === '6') {
                    returnObject['cautionaryStatements'] = "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.";
                } else if (param === '7') {
                    returnObject['cautionaryStatements'] = "Active children and adults, and people with respiratory disease, such as asthma, should limit heavy outdoor exertion.";
                }
            } else if (param === '8') {
                returnObject['sensitiveGroups'] = "People with asthma or other respiratory diseases, the elderly, and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Increasing likelihood of respiratory symptoms and breathing discomfort in active children, the elderly, and people with lung disease, such as asthma.";
                returnObject['cautionaryStatements'] = "Active children, the elderly, and people with lung disease, such as asthma, should reduce prolonged or heavy outdoor exertion.";
            }
        } else if (returnObject['aqiCategory'] === 'Unhealthy') {
            returnObject['backgroundColor'] = "#ff0000";
            returnObject['fontColor'] = "black";
            if (param === '1') {
                returnObject['sensitiveGroups'] = "People with respiratory or heart disease, the elderly and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Increased aggravation of heart or lung disease and premature mortality in persons with cardiopulmonary disease and the elderly; increased respiratory effects in general population.";
                returnObject['cautionaryStatements'] = "People with respiratory or heart disease, the elderly and children should avoid prolonged exertion; everyone else should limit prolonged exertion.";
            } else if (param === '2') {
                returnObject['sensitiveGroups'] = "People with respiratory disease are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Increased respiratory symptoms and aggravation of lung disease, such as asthma; possible respiratory effects in general population.";
                returnObject['cautionaryStatements'] = "People with respiratory or heart disease, the elderly and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Increased aggravation of heart or lung disease and premature mortality in persons with cardiopulmonary disease and the elderly; increased respiratory effects in general population.";
                returnObject['cautionaryStatements'] = "People with respiratory or heart disease, the elderly and children should avoid prolonged exertion; everyone else should limit prolonged exertion.";
            } else if (param === '3') {
                returnObject['sensitiveGroups'] = "People with heart disease are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Reduced exercise tolerance due to increased cardiovascular symptoms, such as chest pain, in people with cardiovascular disease.";
                returnObject['cautionaryStatements'] = "People with cardiovascular disease, such as angina, should limit moderate exertion and avoid sources of CO, such as heavy traffic.";
            } else if (param === '4' || param === '5') {
                returnObject['sensitiveGroups'] = "People with asthma are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Increased respiratory symptoms, such as chest tightness and wheezing in people with asthma; possible aggravation of heart or lung disease.";
                returnObject['cautionaryStatements'] = "Children, asthmatics, and people with heart or lung disease should limit outdoor exertion.";
            } else if (param === '6' || param === '7') {
                returnObject['sensitiveGroups'] = "Children and people with asthma are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Greater likelihood of respiratory symptoms and breathing difficulty in active children and adults and people with respiratory disease, such as asthma; possible respiratory effects in general population.";
                if (param === '6') {
                    returnObject['cautionaryStatements'] = "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion.";
                } else if (param === '7') {
                    returnObject['cautionaryStatements'] = "Active children and adults, and people with respiratory disease, such as asthma, should avoid heavy outdoor exertion; everyone else, especially children, should limit heavy outdoor exertion.";
                }
            } else if (param === '8') {
                returnObject['sensitiveGroups'] = "People with asthma or other respiratory diseases, the elderly, and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Greater likelihood of respiratory symptoms in active children, the elderly, and people with lung disease, such as asthma; possible respiratory effects in general population.";
                returnObject['cautionaryStatements'] = "Active children, the elderly, and people with lung disease, such as asthma, should avoid prolonged or heavy outdoor exertion; everyone else, expecially children, should reduce prolonged or heavy outdoor exertion.";
            }
        } else if (returnObject['aqiCategory'] === 'Very Unhealthy') {
            returnObject['backgroundColor'] = "#990049";
            returnObject['fontColor'] = "#ffffff";
            if (param === '1') {
                returnObject['sensitiveGroups'] = "People with respiratory or heart disease, the elderly and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Significant aggravation of heart or lung disease and premature mortality in persons with cardiopulmonary disease and the elderly; significant increase in respiratory effects in general population.";
                returnObject['cautionaryStatements'] = "People with respiratory or heart disease, the elderly and children should avoid any outdoor activity; everyone else should avoid prolonged exertion.";
            } else if (param === '2') {
                returnObject['sensitiveGroups'] = "People with respiratory disease are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Significant increase in respiratory symptoms and aggravation of lung disease, such as asthma; increasing likelihood of respiratory effects in general population.";
                returnObject['cautionaryStatements'] = "People with respiratory disease, such as asthma, should avoid any outdoor activity; everyone else, especially the elderly and children, should limit outdoor exertion.";
            } else if (param === '3') {
                returnObject['sensitiveGroups'] = "People with heart disease are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Significant aggravation of cardiovascular symptoms, such as chest pain, in people with cardiovascular disease.";
                returnObject['cautionaryStatements'] = "People with cardiovascular disease, such as angina, should avoid exertion and sources of CO, such as heavy traffic.";
            } else if (param === '4' || param === '5') {
                returnObject['sensitiveGroups'] = "People with asthma are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Significant increase in respiratory symptoms, such as wheezing and shortness of breath, in people with asthma; aggravation of heart or lung disease.";
                returnObject['cautionaryStatements'] = "Children, asthmatics, and people with heart or lung disease should avoid outdoor exertion; everyone else should limit outdoor exertion.";
            } else if (param === '6' || param === '7') {
                returnObject['sensitiveGroups'] = "Children and people with asthma are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Increasingly severe symptoms and impaired breathing likely in active children and adults and people with respiratory disease, such as asthma; increasing likelihood of respiratory effects in general population.";
                returnObject['cautionaryStatements'] = "Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.";
            } else if (param === '8') {
                returnObject['sensitiveGroups'] = "People with asthma or other respiratory diseases, the elderly, and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Increasingly severe symptoms and impaired breathing likely in active children, the elderly, and people with lung disease, such as asthma; increasing likelihood of respiratory effects in general population.";
                returnObject['cautionaryStatements'] = "Active children, the elderly, and people with lung disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should avoid prolonged or heavy outdoor exertion.";
            }
        } else if (returnObject['aqiCategory'] === 'Hazardous') {
            returnObject['backgroundColor'] = "#7E0023";
            returnObject['fontColor'] = "#ffffff";
            if (param === '1') {
                returnObject['sensitiveGroups'] = "People with respiratory or heart disease, the elderly and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Serious aggravation of heart or lung disease and premature mortality in persons with cardiopulmonary disease and the elderly; serious risk of respiratory effects in general population.";
                returnObject['cautionaryStatements'] = "Everyone should avoid any outdoor exertion; people with respiratory or heart disease, the elderly and children should remain indoors.";
            } else if (param === '2') {
                returnObject['sensitiveGroups'] = "People with respiratory disease are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Serious risk of respiratory symptoms and aggravation of lung disease, such as asthma; respiratory effects likely in general population.";
                returnObject['cautionaryStatements'] = "Everyone should avoid any outdoor exertion; people with respiratory disease, such as asthma, should remain indoors.";
            } else if (param === '3') {
                returnObject['sensitiveGroups'] = "People with heart disease are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Serious aggravation of cardiovascular symptoms, such as chest pain, in people with cardiovascular disease; impairment of strenuous activities in general population.";
                returnObject['cautionaryStatements'] = "People with cardiovascular disease, such as angina, should avoid exertion and sources of CO, such as heavy traffic; everyone else should limit heavy exertion.";
            } else if (param === '4' || param === '5') {
                returnObject['sensitiveGroups'] = "People with asthma are the group most at risk.";
                returnObject['healthEffectsStatements'] = "Severe respiratory symptoms, such as wheezing and shortness of breath, in people with asthma; increased aggravation of heart or lung disease; possible respiratory effects in general population.";
                returnObject['cautionaryStatements'] = "Children, asthmatics, and people with heart or lung disease should remain indoors; everyone else should avoid outdoor exertion.";
            } else if (param === '6' || param === '7') {
                returnObject['sensitiveGroups'] = "Children and people with asthma are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Severe respiratory effects and impaired breathing likely in active children and adults and people with respiratory disease, such as asthma; increasingly severe respiratory effects likely in general population.";
                returnObject['cautionaryStatements'] = "Everyone should avoid all outdoor exertion.";
            } else if (param === '8') {
                returnObject['sensitiveGroups'] = "People with asthma or other respiratory diseases, the elderly, and children are the groups most at risk.";
                returnObject['healthEffectsStatements'] = "Severe respiratory effects and impaired breathing likely in active children, the elderly, and people with lung disease, such as asthma; increasingly severe respiratory effects likely in general population.";
                returnObject['cautionaryStatements'] = "Children, the elderly, and people with lung disease, such as asthma, should remain indoors; everyone else, especially children, should avoid outdoor exertion.";
            }
        } else {
            returnObject['backgroundColor'] = "#ffffff";
            returnObject['fontColor'] = "black";
            returnObject['sensitiveGroups'] = "";
            returnObject['healthEffectsStatements'] = "";
            returnObject['cautionaryStatements'] = "";
        }

		resolve(returnObject);
	});
};

module.exports = {ConcAQI}