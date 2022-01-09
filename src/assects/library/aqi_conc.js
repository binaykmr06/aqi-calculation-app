// parameter wise conc calculation
function InvLinear(AQIhigh, AQIlow, Conchigh, Conclow, a) {
    var conc;
    conc = ((a - AQIlow) / (AQIhigh - AQIlow)) * (Conchigh - Conclow) + Conclow;
    return conc;
}

function ConcPM25(aqi) {
	var concCalc;
    if (aqi >= 0 && aqi <= 50) {
        concCalc = InvLinear(50, 0, 12, 0, aqi);
    } else if (aqi > 50 && aqi <= 100) {
        concCalc = InvLinear(100, 51, 35.4, 12.1, aqi);
    } else if (aqi > 100 && aqi <= 150) {
        concCalc = InvLinear(150, 101, 55.4, 35.5, aqi);
    } else if (aqi > 150 && aqi <= 200) {
        concCalc = InvLinear(200, 151, 150.4, 55.5, aqi);
    } else if (aqi > 200 && aqi <= 300) {
        concCalc = InvLinear(300, 201, 250.4, 150.5, aqi);
    } else if (aqi > 300 && aqi <= 400) {
        concCalc = InvLinear(400, 301, 350.4, 250.5, aqi);
    } else if (aqi > 400 && aqi <= 500) {
        concCalc = InvLinear(500, 401, 500.4, 350.5, aqi);
    } else {
        concCalc = "PM25message";
    }
    return concCalc;
}

function ConcPM10(aqi) {
	var concCalc;
    if (aqi >= 0 && aqi <= 50) {
        concCalc = InvLinear(50, 0, 54, 0, aqi);
    } else if (aqi > 50 && aqi <= 100) {
        concCalc = InvLinear(100, 51, 154, 55, aqi);
    } else if (aqi > 100 && aqi <= 150) {
        concCalc = InvLinear(150, 101, 254, 155, aqi);
    } else if (aqi > 150 && aqi <= 200) {
        concCalc = InvLinear(200, 151, 354, 255, aqi);
    } else if (aqi > 200 && aqi <= 300) {
        concCalc = InvLinear(300, 201, 424, 355, aqi);
    } else if (aqi > 300 && aqi <= 400) {
        concCalc = InvLinear(400, 301, 504, 425, aqi);
    } else if (aqi > 400 && aqi <= 500) {
        concCalc = InvLinear(500, 401, 604, 505, aqi);
    } else {
        concCalc = "PM10message";
    }
    return concCalc;
}

function ConcCO(aqi) {
	var concCalc;
    if (aqi >= 0 && aqi <= 50) {
        concCalc = InvLinear(50, 0, 4.4, 0, aqi);
    } else if (aqi > 50 && aqi <= 100) {
        concCalc = InvLinear(100, 51, 9.4, 4.5, aqi);
    } else if (aqi > 100 && aqi <= 150) {
        concCalc = InvLinear(150, 101, 12.4, 9.5, aqi);
    } else if (aqi > 150 && aqi <= 200) {
        concCalc = InvLinear(200, 151, 15.4, 12.5, aqi);
    } else if (aqi > 200 && aqi <= 300) {
        concCalc = InvLinear(300, 201, 30.4, 15.5, aqi);
    } else if (aqi > 300 && aqi <= 400) {
        concCalc = InvLinear(400, 301, 40.4, 30.5, aqi);
    } else if (aqi > 400 && aqi <= 500) {
        concCalc = InvLinear(500, 401, 50.4, 40.5, aqi);
    } else {
        concCalc = "Out of Range";
    }
    return concCalc;
}

function ConcSO21hr(aqi) {
	var concCalc;
    if (aqi >= 0 && aqi <= 50) {
        concCalc = InvLinear(50, 0, 35, 0, aqi);
    } else if (aqi > 50 && aqi <= 100) {
        concCalc = InvLinear(100, 51, 75, 36, aqi);
    } else if (aqi > 100 && aqi <= 150) {
        concCalc = InvLinear(150, 101, 185, 76, aqi);
    } else if (aqi > 150 && aqi <= 200) {
        concCalc = InvLinear(200, 151, 304, 186, aqi);
    } else {
        concCalc = "Out of Range";
    }
    return concCalc;
}

function ConcSO224hr(aqi) {
	var concCalc;
    if (aqi >= 201 && aqi <= 300) {
        concCalc = InvLinear(300, 201, 604, 305, aqi);
    } else if (aqi > 300 && aqi <= 400) {
        concCalc = InvLinear(400, 301, 804, 605, aqi);
    } else if (aqi > 400 && aqi <= 500) {
        concCalc = InvLinear(500, 401, 1004, 805, aqi);
    } else {
        concCalc = "Out of Range";
    }
    return concCalc;
}

function ConcOzone8hr(aqi) {
	var concCalc;
    if (aqi >= 0 && aqi <= 50) {
        concCalc = InvLinear(50, 0, 54, 0, aqi);
    } else if (aqi > 50 && aqi <= 100) {
        concCalc = InvLinear(100, 51, 70, 55, aqi);
    } else if (aqi > 100 && aqi <= 150) {
        concCalc = InvLinear(150, 101, 85, 71, aqi);
    } else if (aqi > 150 && aqi <= 200) {
        concCalc = InvLinear(200, 151, 105, 86, aqi);
    } else if (aqi > 200 && aqi <= 300) {
        concCalc = InvLinear(300, 201, 200, 106, aqi);
    } else {
        concCalc = "O3message";
    }
    return concCalc;
}

function ConcOzone1hr(aqi) {
	var concCalc;
    if (aqi > 100 && aqi <= 150) {
        concCalc = InvLinear(150, 101, 164, 125, aqi);
    } else if (aqi > 150 && aqi <= 200) {
        concCalc = InvLinear(200, 151, 204, 165, aqi);
    } else if (aqi > 200 && aqi <= 300) {
        concCalc = InvLinear(300, 201, 404, 205, aqi);
    } else if (aqi > 300 && aqi <= 400) {
        concCalc = InvLinear(400, 301, 504, 405, aqi);
    } else if (aqi > 400 && aqi <= 500) {
        concCalc = InvLinear(500, 401, 604, 505, aqi);
    } else {
        concCalc = "Out of Range";
    }
    return concCalc;
}

function ConcNO2(aqi) {
	var concCalc;
    if (aqi >= 0 && aqi <= 50) {
        concCalc = InvLinear(50, 0, 53, 0, aqi);
    } else if (aqi > 50 && aqi <= 100) {
        concCalc = InvLinear(100, 51, 100, 54, aqi);
    } else if (aqi > 100 && aqi <= 150) {
        concCalc = InvLinear(150, 101, 360, 101, aqi);
    } else if (aqi > 150 && aqi <= 200) {
        concCalc = InvLinear(200, 151, 649, 361, aqi);
    } else if (aqi > 200 && aqi <= 300) {
        concCalc = InvLinear(300, 201, 1244, 650, aqi);
    } else if (aqi > 300 && aqi <= 400) {
        concCalc = InvLinear(400, 301, 1644, 1245, aqi);
    } else if (aqi > 400 && aqi <= 500) {
        concCalc = InvLinear(500, 401, 2044, 1645, aqi);
    } else {
        concCalc = "Out of Range";
    }
    return concCalc;
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
function AQIConc (param, value) {
	return new Promise(function(resolve, reject) {
		let roundValue;
		let concValue;
		let returnObject = {};

		if (param === '1') {
			roundValue = Math.round(value);
			if (roundValue < 0 || roundValue > 500) {
				roundValue = "PM25message";
			} else {
				concValue = Math.floor(10 * ConcPM25(roundValue)) / 10;
			}
		} else if (param === '2') {
			roundValue = (value);
			if (roundValue < 0 || roundValue > 500) {
				roundValue = "PM10message";
			} else {
				concValue = Math.floor(ConcPM10(roundValue));
			}
		} else if (param === '3') {
			roundValue = Math.round(value);
			if (roundValue < 0 || roundValue > 500) {
				roundValue = "Out of Range";
			} else {
				concValue = Math.floor(10 * ConcCO(roundValue)) / 10;
			}
		} else if (param === '4') {
			roundValue = Math.round(value);

			if (roundValue < 0 || roundValue > 500) {
				roundValue = "Out of Range";

			} else if (roundValue > 200 && roundValue <= 500) {
				roundValue = "SO21hrmessage";
			} else {
				concValue = Math.floor(ConcSO21hr(roundValue));
			}
		} else if (param === '5') {
			roundValue = Math.round(value);
			if (roundValue < 0 || roundValue > 500) {
				roundValue = "Out of Range";
			} else if (roundValue >= 0 && roundValue <= 200) {
				roundValue = "SO224hrmessage";
			} else {
				concValue = Math.floor(ConcSO224hr(roundValue));
			}
		} else if (param === '6') {
			roundValue = Math.round(value);
			if (roundValue < 0 || roundValue > 500) {
				roundValue = "Out of Range";

			} else if (roundValue > 300 && roundValue <= 500) {
				roundValue = "O3message";
			} else {
				concValue = Math.floor(ConcOzone8hr(roundValue));
			}
		} else if (param === '7') {
			roundValue = Math.round(value);
			if (roundValue < 0 || roundValue > 500) {
				roundValue = "Out of Range";
			} else if (roundValue >= 0 && roundValue <= 100) {
				roundValue = "O31hrmessage";
			} else {
				concValue = Math.floor(ConcOzone1hr(roundValue));
			}
		} else if (param === '8') {
			roundValue = Math.round(value);
			if (roundValue < 0 || roundValue > 500) {
				roundValue = "Out of Range";
			} else {
				concValue = Math.floor(ConcNO2(roundValue));
			}
		}

		if (roundValue === "Out of Range") {
			returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>Note: Values above 500 are considered Beyond the AQI. Follow recommendations for the Hazardous category.</p>";
			returnObject['concentration'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
		} else if (roundValue === "SO21hrmessage") {
			returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>AQI values of 201 or greater are calculated with 24-hour SO2 concentrations.</p>";
			returnObject['concentration'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
		} else if (roundValue === "SO224hrmessage") {
			returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>AQI values of 201 or greater are calculated with 24-hour SO2 concentrations.</p>";
			returnObject['concentration'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
		} else if (roundValue === "O31hrmessage") {
			returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>AQI values of 201 or greater are calculated with 24-hour SO2 concentrations</p>";
			returnObject['concentration'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
		} else if (roundValue === "O3message") {
			returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>8-hour ozone values do not define higher AQI values (>=301).</p>  <p>AQI values of 301 or greater are calculated with 1-hour ozone concentrations.</p>";
			returnObject['concentration'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
		} else if (roundValue === "PM25message") {
			returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>Note: Values above 500 are considered Beyond the AQI.</p><p>Additional information on reducing exposure to extremely high levels of particle pollution is available <a href='https://airnow.gov/index.cfm?action=aqibasics.pmhilevels'target='_blank'>here</a>.</p>";
			returnObject['concentration'] = '';
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = '';
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
		} else if (roundValue === "PM10message") {
			returnObject['messageType'] = "exception";
			returnObject['message'] = "<p>Note: Values above 500 are considered Beyond the AQI. Follow recommendations for the Hazardous category.</p>";
			returnObject['concentration'] = '';
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
			returnObject['concentration'] = concValue;
			returnObject['unit'] = PollutantUnit(param);
			returnObject['aqiCategory'] = AQICategory(roundValue);
			returnObject['sensitiveGroups'] = '';
			returnObject['healthEffectsStatements'] = '';
			returnObject['cautionaryStatements'] = '';
			returnObject['backgroundColor'] = '';
			returnObject['fontColor'] = '';
		}

		if (returnObject['aqiCategory'] === 'Good') {
			returnObject['backgroundColor'] = "#00e000";
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
				returnObject['healthEffectsStatements'] = "Increasing likelihood of respiratory symptoms and aggravation of lung disease, such as asthma.";
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

module.exports = {AQIConc}