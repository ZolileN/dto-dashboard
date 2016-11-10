export default complexState = {
  "currentUser": {
    "id": 1,
    "email": "dev@localhost",
    "token": "580db19fa3194333baaa54ce7a0edc63b9886f0726fa492c95eb84da1b893715"
  },
  "app": {},
  "dashboards": [{
    "id": 1,
    "name": "myGov",
    "description": "Description",
    "notes": "<dl> <dt> Where is this information from? <dd> myGov & Australian Department of Human Services. <dt> What is myGov? <dd> myGov is a secure, fast and simple way to access Australian Government services online with one username and password. <dt> What is an \"Active Account\"? <dd> An account on myGov with at least 1 linked member service. <dt> What is a \"Sign-in\"? <dd> A log in to the myGov service. In a given month, multiple sign-ins by a single account will be counted multiple times. <dt> What is a member service? <dd> This is an Australian Government service available to users through the myGov account. </dl>",
    "url": "https://my.gov.au",
    "target_users": "Users",
    "display_hero": false,
    "display_kpis": false,
    "published_at": "2016-10-25T03:40:35.896Z"
  }, {
    "id": 2,
    "name": "Australian Citizenship Appointment Booking Service",
    "description": "Description",
    "notes": "<dl> <dt> Where is this information from? <dd> Department of Immigration and Border Protection. <dt> What is Australian Citizenship Appointment Booking Service? <dd> The Australian Citizenship Appointment Booking Service makes it quicker, easier and more convenient for users to reschedule a citizenship test appointment. Prior to the introduction of the online service, users were only able to change their appointment by calling the Department. The public beta release of the service is currently available in Melbourne, Victoria. <dt> User Satisfaction <dd> User satisfaction measures the percentage of users who responded “satisfied” and “very satisfied” with the appointment booking service using the feedback kiosks located in the Department’s citizenship areas. <dt> Cost per Transaction <dd> This data is not available. <dt> Digital Take-up <dd> Digital take-up measures the number of users who had an appointment booked using the new service as a percentage of all appointments that have been made Australia-wide. <dt> Completion Rate <dd> Completion rate measures the number of users who were able to use the digital service without having to contact the Department for assistance when rescheduling their appointment. </dl>",
    "url": null,
    "target_users": "Users",
    "display_hero": true,
    "display_kpis": true,
    "published_at": "2016-10-25T03:40:38.024Z"
  }],
  "widgets": [{
    "id": 1,
    "dashboard_id": 1,
    "row": 0,
    "pos": 0,
    "name": "Kpis",
    "type": "full",
    "size": "extra-large",
    "units": "n",
    "description": null,
    "options": {},
    "is_hero": true,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [1, 2, 3, 4]
  }, {
    "id": 2,
    "dashboard_id": 1,
    "row": 1,
    "pos": 0,
    "name": "User Satisfaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Overall satisfaction score includes all ratings weighted from 100% for very satisfied to 0% for very dissatisfied",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [1]
  }, {
    "id": 3,
    "dashboard_id": 1,
    "row": 1,
    "pos": 1,
    "name": "Cost Per Transaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "$",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [2]
  }, {
    "id": 4,
    "dashboard_id": 1,
    "row": 1,
    "pos": 2,
    "name": "Digital Take-up",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [3]
  }, {
    "id": 5,
    "dashboard_id": 1,
    "row": 1,
    "pos": 3,
    "name": "Completion Rate",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Percentage of transactions made using the digital service.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [4]
  }, {
    "id": 6,
    "dashboard_id": 1,
    "row": 2,
    "pos": 0,
    "name": "New Accounts",
    "type": "bar",
    "size": "large",
    "units": "n",
    "description": "The number of new myGov accounts created each month.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [20]
  }, {
    "id": 7,
    "dashboard_id": 1,
    "row": 2,
    "pos": 1,
    "name": "Total Accounts",
    "type": "sparkline",
    "size": "small",
    "units": "n",
    "description": "The total number of myGov accounts.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [23]
  }, {
    "id": 8,
    "dashboard_id": 1,
    "row": 3,
    "pos": 0,
    "name": "Fact",
    "type": "fact",
    "size": "small",
    "units": "n",
    "description": "As of April, 43% of accounts are linked to more than one member service.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": []
  }, {
    "id": 9,
    "dashboard_id": 1,
    "row": 7,
    "pos": 0,
    "name": "Fact",
    "type": "fact",
    "size": "small",
    "units": "n",
    "description": "Chrome was the most popular browser used to access myGov with over 104 million hits.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": []
  }, {
    "id": 10,
    "dashboard_id": 1,
    "row": 3,
    "pos": 1,
    "name": "Member Service Adoption",
    "type": "line",
    "size": "large",
    "units": "%",
    "description": "The number of members services adopted by myGov users.",
    "options": {"displayRoundedData": true},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [15, 16, 17, 18, 19]
  }, {
    "id": 11,
    "dashboard_id": 1,
    "row": 4,
    "pos": 0,
    "name": "Sign-ins per myGov Account",
    "type": "line",
    "size": "medium",
    "units": "n",
    "description": "Monthly frequency of account sign-ins.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [21]
  }, {
    "id": 12,
    "dashboard_id": 1,
    "row": 4,
    "pos": 1,
    "name": "Visits To Member Services",
    "type": "line",
    "size": "medium",
    "units": "n",
    "description": "The average number of member services visited for each sign-in.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [22]
  }, {
    "id": 13,
    "dashboard_id": 1,
    "row": 7,
    "pos": 1,
    "name": "Device Usage",
    "type": "line",
    "size": "large",
    "units": "%",
    "description": null,
    "options": {"displayRoundedData": true},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [31, 32, 33]
  }, {
    "id": 14,
    "dashboard_id": 1,
    "row": 6,
    "pos": 1,
    "name": "Browser types",
    "type": "pie",
    "size": "small",
    "units": "%",
    "description": "Types of browsers used to access myGov",
    "options": {"displayRoundedData": true},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [5, 6, 7, 8, 9]
  }, {
    "id": 15,
    "dashboard_id": 1,
    "row": 5,
    "pos": 0,
    "name": "Linked Member Services",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "The adoption of each member service by myGov users.",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [24, 25, 26, 27, 28, 29]
  }, {
    "id": 16,
    "dashboard_id": 1,
    "row": 5,
    "pos": 1,
    "name": "Member Services Activity",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "The use of member services by myGov users.",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [34, 35, 36, 37, 38]
  }, {
    "id": 17,
    "dashboard_id": 1,
    "row": 6,
    "pos": 0,
    "name": "Traffic source",
    "type": "bar",
    "size": "large",
    "units": "%",
    "description": "Source of web traffic to myGov",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-08-25T01:01:01.111Z",
    "datasets": [10, 11, 12, 13, 14]
  }, {
    "id": 18,
    "dashboard_id": 2,
    "row": 1,
    "pos": 0,
    "name": "User Satisfaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Overall satisfaction score includes all ratings weighted from 100% for very satisfied to 0% for very dissatisfied",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-06-30T01:01:01.111Z",
    "datasets": [41]
  }, {
    "id": 19,
    "dashboard_id": 2,
    "row": 1,
    "pos": 1,
    "name": "Cost Per Transaction",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "$",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-06-30T01:01:01.111Z",
    "datasets": [42]
  }, {
    "id": 20,
    "dashboard_id": 2,
    "row": 1,
    "pos": 2,
    "name": "Digital Take-up",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": null,
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-06-30T01:01:01.111Z",
    "datasets": [44]
  }, {
    "id": 21,
    "dashboard_id": 2,
    "row": 1,
    "pos": 3,
    "name": "Completion Rate",
    "type": "kpi-sparkline",
    "size": "extra-small",
    "units": "%",
    "description": "Percentage of transactions made using the digital service.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-06-30T01:01:01.111Z",
    "datasets": [43]
  }, {
    "id": 22,
    "dashboard_id": 2,
    "row": 2,
    "pos": 1,
    "name": "Devices used by users",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "This shows the types of devices used by users to access the appointment booking service.",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-06-30T01:01:01.111Z",
    "datasets": [45, 46, 47]
  }, {
    "id": 23,
    "dashboard_id": 2,
    "row": 3,
    "pos": 0,
    "name": "Browsers used by users",
    "type": "bar",
    "size": "medium",
    "units": "%",
    "description": "This shows the types of browsers used by users to access the appointment booking service.",
    "options": {"displayRoundedData": true, "stacking": "percentage"},
    "is_hero": false,
    "last_updated_at": "2016-06-30T01:01:01.111Z",
    "datasets": [48, 49, 50, 51, 52]
  }, {
    "id": 24,
    "dashboard_id": 2,
    "row": 3,
    "pos": 1,
    "name": "Fact",
    "type": "fact",
    "size": "medium",
    "units": "n",
    "description": "Prior to the digital transformation clients could only reschedule a citizenship test appointment to a more suitable time by calling the Department.",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-06-30T01:01:01.111Z",
    "datasets": []
  }, {
    "id": 25,
    "dashboard_id": 2,
    "row": 2,
    "pos": 0,
    "name": "Fact",
    "type": "fact",
    "size": "medium",
    "units": "n",
    "description": "The Appointment Booking Service was developed to replace the Department’s existing booking system. User research found that users wanted a more efficient and effective way to reschedule their citizenship test appointment to a time and/or day that better suited them. ",
    "options": {},
    "is_hero": false,
    "last_updated_at": "2016-06-30T01:01:01.111Z",
    "datasets": []
  }, {
    "id": 26,
    "dashboard_id": 2,
    "row": 0,
    "pos": 0,
    "name": "Kpis",
    "type": "full",
    "size": "extra-large",
    "units": "n",
    "description": null,
    "options": {},
    "is_hero": true,
    "last_updated_at": "2016-06-30T01:01:01.111Z",
    "datasets": [41, 42, 44, 43]
  }],
  "datasets": [{
    "id": 1,
    "name": "User Satisfaction",
    "label": "User Satisfaction",
    "units": "n",
    "notes": null,
    "updated_at": "2016-10-25T03:40:35.919Z",
    "datapoints": []
  }, {
    "id": 2,
    "name": "Cost per transaction",
    "label": "Cost per transaction",
    "units": "$",
    "notes": "",
    "updated_at": "2016-10-25T03:40:35.929Z",
    "datapoints": []
  }, {
    "id": 3,
    "name": "Digital take-up",
    "label": "Digital take-up",
    "units": "%",
    "notes": null,
    "updated_at": "2016-10-25T03:40:35.938Z",
    "datapoints": []
  }, {
    "id": 4,
    "name": "Completion rate",
    "label": "Completion rate",
    "units": "%",
    "notes": null,
    "updated_at": "2016-10-25T03:40:35.954Z",
    "datapoints": []
  }, {
    "id": 5,
    "name": "Chrome",
    "label": "Chrome",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:35.968Z",
    "datapoints": [7, 6, 5, 4, 3, 2, 1]
  }, {
    "id": 6,
    "name": "Browser Usage - Safari",
    "label": "Safari",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.054Z",
    "datapoints": [14, 13, 12, 11, 10, 9, 8]
  }, {
    "id": 7,
    "name": "Browser Usage - Mozilla",
    "label": "Mozilla",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.078Z",
    "datapoints": [21, 20, 19, 18, 17, 16, 15]
  }, {
    "id": 8,
    "name": "Browser Usage - IE",
    "label": "IE",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.100Z",
    "datapoints": [28, 27, 26, 25, 24, 23, 22]
  }, {
    "id": 9,
    "name": "Browser Usage - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.119Z",
    "datapoints": [35, 34, 33, 32, 31, 30, 29]
  }, {
    "id": 10,
    "name": "Web Traffic Source - humanservices.gov.au",
    "label": "humanservices.gov.au",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.137Z",
    "datapoints": [62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36]
  }, {
    "id": 11,
    "name": "Web Traffic Source - Direct",
    "label": "Direct",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.205Z",
    "datapoints": [89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63]
  }, {
    "id": 12,
    "name": "Web Traffic Source - ato.gov.au",
    "label": "ato.gov.au",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.277Z",
    "datapoints": [116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90]
  }, {
    "id": 13,
    "name": "Web Traffic Source - Google",
    "label": "Google",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.346Z",
    "datapoints": [143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117]
  }, {
    "id": 14,
    "name": "Web Traffic Source - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.413Z",
    "datapoints": [170, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149, 148, 147, 146, 145, 144]
  }, {
    "id": 15,
    "name": "Linked Accounts - 1 service",
    "label": "1 service",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.476Z",
    "datapoints": [187, 186, 185, 184, 183, 182, 181, 180, 179, 178, 177, 176, 175, 174, 173, 172, 171]
  }, {
    "id": 16,
    "name": "Linked Accounts - 2 services",
    "label": "2 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.521Z",
    "datapoints": [204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188]
  }, {
    "id": 17,
    "name": "Linked Accounts - 3 services",
    "label": "3 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.591Z",
    "datapoints": [221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 211, 210, 209, 208, 207, 206, 205]
  }, {
    "id": 18,
    "name": "Linked Accounts - 4 services",
    "label": "4 services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.633Z",
    "datapoints": [238, 237, 236, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222]
  }, {
    "id": 19,
    "name": "Linked Accounts - 5+ services",
    "label": "5+ services",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.674Z",
    "datapoints": [255, 254, 253, 252, 251, 250, 249, 248, 247, 246, 245, 244, 243, 242, 241, 240, 239]
  }, {
    "id": 20,
    "name": "New accounts",
    "label": "New accounts",
    "units": "i",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.717Z",
    "datapoints": [272, 271, 270, 269, 268, 267, 266, 265, 264, 263, 262, 261, 260, 259, 258, 257, 256]
  }, {
    "id": 21,
    "name": "Sign in per account",
    "label": "Sign in per account",
    "units": "n",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.760Z",
    "datapoints": [289, 288, 287, 286, 285, 284, 283, 282, 281, 280, 279, 278, 277, 276, 275, 274, 273]
  }, {
    "id": 22,
    "name": "Visits to member services",
    "label": "Visits to member services",
    "units": "n",
    "notes": "The average number of member services a user visits during sign-in",
    "updated_at": "2016-10-25T03:40:36.804Z",
    "datapoints": [306, 305, 304, 303, 302, 301, 300, 299, 298, 297, 296, 295, 294, 293, 292, 291, 290]
  }, {
    "id": 23,
    "name": "Total accounts",
    "label": "Total accounts",
    "units": "i",
    "notes": "The total number of myGov accounts held be all users",
    "updated_at": "2016-10-25T03:40:36.846Z",
    "datapoints": [345, 344, 343, 342, 341, 340, 339, 338, 337, 336, 335, 334, 333, 332, 331, 330, 329, 328, 327, 326, 325, 324, 323, 322, 321, 320, 319, 318, 317, 316, 315, 314, 313, 312, 311, 310, 309, 308, 307]
  }, {
    "id": 24,
    "name": "Links by member service - Medicare",
    "label": "Medicare",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.939Z",
    "datapoints": [362, 361, 360, 359, 358, 357, 356, 355, 354, 353, 352, 351, 350, 349, 348, 347, 346]
  }, {
    "id": 25,
    "name": "Links by member service - Centrelink",
    "label": "Centrelink",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:36.979Z",
    "datapoints": [379, 378, 377, 376, 375, 374, 373, 372, 371, 370, 369, 368, 367, 366, 365, 364, 363]
  }, {
    "id": 26,
    "name": "Links by member service - CSA",
    "label": "CSA",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:37.021Z",
    "datapoints": [396, 395, 394, 393, 392, 391, 390, 389, 388, 387, 386, 385, 384, 383, 382, 381, 380]
  }, {
    "id": 27,
    "name": "Links by member service - MyHealth",
    "label": "MyHealth",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:37.064Z",
    "datapoints": [413, 412, 411, 410, 409, 408, 407, 406, 405, 404, 403, 402, 401, 400, 399, 398, 397]
  }, {
    "id": 28,
    "name": "Links by member service - ATO",
    "label": "ATO",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:37.110Z",
    "datapoints": [430, 429, 428, 427, 426, 425, 424, 423, 422, 421, 420, 419, 418, 417, 416, 415, 414]
  }, {
    "id": 29,
    "name": "Links by member service - Other",
    "label": "Other",
    "units": "%",
    "notes": "Includes DVA, NDIS, JobSearch & MyAgedCare",
    "updated_at": "2016-10-25T03:40:37.164Z",
    "datapoints": [447, 446, 445, 444, 443, 442, 441, 440, 439, 438, 437, 436, 435, 434, 433, 432, 431]
  }, {
    "id": 31,
    "name": "Device Types - Desktop",
    "label": "Desktop",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:37.248Z",
    "datapoints": [481, 480, 479, 478, 477, 476, 475, 474, 473, 472, 471, 470, 469, 468, 467, 466, 465]
  }, {
    "id": 32,
    "name": "Device Types - Mobile",
    "label": "Mobile",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:37.290Z",
    "datapoints": [498, 497, 496, 495, 494, 493, 492, 491, 490, 489, 488, 487, 486, 485, 484, 483, 482]
  }, {
    "id": 33,
    "name": "Device Types - Other",
    "label": "Other",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:37.329Z",
    "datapoints": [515, 514, 513, 512, 511, 510, 509, 508, 507, 506, 505, 504, 503, 502, 501, 500, 499]
  }, {
    "id": 34,
    "name": "Navigaations by service - Medicare",
    "label": "Medicare",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:37.368Z",
    "datapoints": [532, 531, 530, 529, 528, 527, 526, 525, 524, 523, 522, 521, 520, 519, 518, 517, 516]
  }, {
    "id": 35,
    "name": "Navigaations by service - Centrelink",
    "label": "Centrelink",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:37.407Z",
    "datapoints": [549, 548, 547, 546, 545, 544, 543, 542, 541, 540, 539, 538, 537, 536, 535, 534, 533]
  }, {
    "id": 36,
    "name": "Navigaations by service - Child Support",
    "label": "Child Support",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:37.446Z",
    "datapoints": [566, 565, 564, 563, 562, 561, 560, 559, 558, 557, 556, 555, 554, 553, 552, 551, 550]
  }, {
    "id": 37,
    "name": "Navigaations by service - ATO",
    "label": "ATO",
    "units": "%",
    "notes": "note for this dataset",
    "updated_at": "2016-10-25T03:40:37.486Z",
    "datapoints": [583, 582, 581, 580, 579, 578, 577, 576, 575, 574, 573, 572, 571, 570, 569, 568, 567]
  }, {
    "id": 38,
    "name": "Navigaations by service - Other",
    "label": "Other",
    "units": "%",
    "notes": "Includes Disability Care, DVA, DSS, PCHER, MyHealth",
    "updated_at": "2016-10-25T03:40:37.527Z",
    "datapoints": [600, 599, 598, 597, 596, 595, 594, 593, 592, 591, 590, 589, 588, 587, 586, 585, 584]
  }],
  "datapoints": [
    {"id": 7, "value": null, "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 6,
    "value": null,
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 5, "value": null, "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 4,
    "value": "41.37",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 3, "value": "40.15", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 2,
    "value": "41.7",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 1, "value": "41.15", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 14,
    "value": null,
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 13, "value": null, "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 12,
    "value": null,
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 11, "value": "24.82", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 10,
    "value": "26.33",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 9, "value": "27.09", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 8,
    "value": "28.65",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 21, "value": null, "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 20,
    "value": null,
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 19, "value": null, "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 18,
    "value": "30.74",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 17, "value": "29.39", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 16,
    "value": "26.2",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 15, "value": "25.09", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 28,
    "value": null,
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 27, "value": null, "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 26,
    "value": null,
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 25, "value": "2.16", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 24,
    "value": "2.81",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 23, "value": "3.74", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 22,
    "value": "3.68",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 35, "value": null, "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 34,
    "value": null,
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 33, "value": null, "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 32,
    "value": "0.91",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 31, "value": "1.32", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 30,
    "value": "1.26",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 29, "value": "1.43", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 62,
    "value": "14.2",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 61, "value": "19.8", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 60,
    "value": "24.3",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 59, "value": "23.5", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 58,
    "value": "25.1",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 57, "value": "25.7", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 56,
    "value": "29.4",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 55, "value": "28.9", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 54,
    "value": "24.9",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 53, "value": "21.3", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 52,
    "value": "23.5",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 51, "value": "22.2", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 50,
    "value": "21.1",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 49, "value": "35.9", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 48,
    "value": "36.4",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 47, "value": "31.7", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 46,
    "value": "41.3",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 45, "value": "38.1", "label": "2015-02", "ts": "2015-02-01 00:00:00.000"}, {
    "id": 44,
    "value": "33.3",
    "label": "2015-01",
    "ts": "2015-01-01 00:00:00.000"
  }, {"id": 43, "value": "33.5", "label": "2014-12", "ts": "2014-12-01 00:00:00.000"}, {
    "id": 42,
    "value": "29.3",
    "label": "2014-11",
    "ts": "2014-11-01 00:00:00.000"
  }, {"id": 41, "value": "19.7", "label": "2014-10", "ts": "2014-10-01 00:00:00.000"}, {
    "id": 40,
    "value": "22.2",
    "label": "2014-09",
    "ts": "2014-09-01 00:00:00.000"
  }, {"id": 39, "value": "19.6", "label": "2014-08", "ts": "2014-08-01 00:00:00.000"}, {
    "id": 38,
    "value": "17.7",
    "label": "2014-07",
    "ts": "2014-07-01 00:00:00.000"
  }, {"id": 37, "value": "37.6", "label": "2014-06", "ts": "2014-06-01 00:00:00.000"}, {
    "id": 36,
    "value": "40.6",
    "label": "2014-05",
    "ts": "2014-05-01 00:00:00.000"
  }, {"id": 89, "value": "19.9", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 88,
    "value": "24.6",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 87, "value": "23.1", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 86,
    "value": "25.1",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 85, "value": "23.1", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 84,
    "value": "21.8",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 83, "value": "20.4", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 82,
    "value": "20.7",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 81, "value": "19.4", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 80,
    "value": "18.2",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 79, "value": "17.0", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 78,
    "value": "15.7",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 77, "value": "14.5", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 76,
    "value": "17.1",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 75, "value": "17.7", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 74,
    "value": "18.0",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 73, "value": "16.7", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 72,
    "value": "17.9",
    "label": "2015-02",
    "ts": "2015-02-01 00:00:00.000"
  }, {"id": 71, "value": "19.4", "label": "2015-01", "ts": "2015-01-01 00:00:00.000"}, {
    "id": 70,
    "value": "21.0",
    "label": "2014-12",
    "ts": "2014-12-01 00:00:00.000"
  }, {"id": 69, "value": "20.9", "label": "2014-11", "ts": "2014-11-01 00:00:00.000"}, {
    "id": 68,
    "value": "22.2",
    "label": "2014-10",
    "ts": "2014-10-01 00:00:00.000"
  }, {"id": 67, "value": "22.1", "label": "2014-09", "ts": "2014-09-01 00:00:00.000"}, {
    "id": 66,
    "value": "22.1",
    "label": "2014-08",
    "ts": "2014-08-01 00:00:00.000"
  }, {"id": 65, "value": "23.5", "label": "2014-07", "ts": "2014-07-01 00:00:00.000"}, {
    "id": 64,
    "value": "21.2",
    "label": "2014-06",
    "ts": "2014-06-01 00:00:00.000"
  }, {"id": 63, "value": "20.4", "label": "2014-05", "ts": "2014-05-01 00:00:00.000"}, {
    "id": 116,
    "value": "19.1",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 115, "value": "6.3", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 114,
    "value": "4.2",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 113, "value": "3.7", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 112,
    "value": "3.9",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 111, "value": "4.0", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 110,
    "value": "3.9",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 109, "value": "4.1", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 108,
    "value": "6.3",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 107, "value": "11.4", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 106,
    "value": "9.8",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 105, "value": "15.1", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 104,
    "value": "22.3",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 103, "value": "4.6", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 102,
    "value": "4.0",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 101, "value": "3.7", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 100,
    "value": "3.1",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 99, "value": "3.9", "label": "2015-02", "ts": "2015-02-01 00:00:00.000"}, {
    "id": 98,
    "value": "3.9",
    "label": "2015-01",
    "ts": "2015-01-01 00:00:00.000"
  }, {"id": 97, "value": "4.2", "label": "2014-12", "ts": "2014-12-01 00:00:00.000"}, {
    "id": 96,
    "value": "7.8",
    "label": "2014-11",
    "ts": "2014-11-01 00:00:00.000"
  }, {"id": 95, "value": "20.5", "label": "2014-10", "ts": "2014-10-01 00:00:00.000"}, {
    "id": 94,
    "value": "16.5",
    "label": "2014-09",
    "ts": "2014-09-01 00:00:00.000"
  }, {"id": 93, "value": "20.0", "label": "2014-08", "ts": "2014-08-01 00:00:00.000"}, {
    "id": 92,
    "value": "23.8",
    "label": "2014-07",
    "ts": "2014-07-01 00:00:00.000"
  }, {"id": 91, "value": "7.9", "label": "2014-06", "ts": "2014-06-01 00:00:00.000"}, {
    "id": 90,
    "value": "5.9",
    "label": "2014-05",
    "ts": "2014-05-01 00:00:00.000"
  }, {"id": 143, "value": "35.0", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 142,
    "value": "34.8",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 141, "value": "33.6", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 140,
    "value": "34.0",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 139, "value": "33.8", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 138,
    "value": "33.9",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 137, "value": "32.7", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 136,
    "value": "33.1",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 135, "value": "34.7", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 134,
    "value": "33.0",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 133, "value": "33.6", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 132,
    "value": "33.7",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 131, "value": "31.9", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 130,
    "value": "29.0",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 129, "value": "29.3", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 128,
    "value": "34.6",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 127, "value": "27.4", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 126,
    "value": "26.6",
    "label": "2015-02",
    "ts": "2015-02-01 00:00:00.000"
  }, {"id": 125, "value": "29.5", "label": "2015-01", "ts": "2015-01-01 00:00:00.000"}, {
    "id": 124,
    "value": "28.1",
    "label": "2014-12",
    "ts": "2014-12-01 00:00:00.000"
  }, {"id": 123, "value": "28.9", "label": "2014-11", "ts": "2014-11-01 00:00:00.000"}, {
    "id": 122,
    "value": "24.8",
    "label": "2014-10",
    "ts": "2014-10-01 00:00:00.000"
  }, {"id": 121, "value": "25.1", "label": "2014-09", "ts": "2014-09-01 00:00:00.000"}, {
    "id": 120,
    "value": "24.3",
    "label": "2014-08",
    "ts": "2014-08-01 00:00:00.000"
  }, {"id": 119, "value": "22.1", "label": "2014-07", "ts": "2014-07-01 00:00:00.000"}, {
    "id": 118,
    "value": "20.5",
    "label": "2014-06",
    "ts": "2014-06-01 00:00:00.000"
  }, {"id": 117, "value": "20.5", "label": "2014-05", "ts": "2014-05-01 00:00:00.000"}, {
    "id": 170,
    "value": "11.9",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 169, "value": "14.6", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 168,
    "value": "14.8",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 167, "value": "13.9", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 166,
    "value": "14.0",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 165, "value": "14.6", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 164,
    "value": "13.7",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 163, "value": "13.1", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 162,
    "value": "14.7",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 161, "value": "16.1", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 160,
    "value": "16.1",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 159, "value": "13.5", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 158,
    "value": "10.2",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 157, "value": "13.4", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 156,
    "value": "12.7",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 155, "value": "12.0", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 154,
    "value": "11.9",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 153, "value": "13.6", "label": "2015-02", "ts": "2015-02-01 00:00:00.000"}, {
    "id": 152,
    "value": "14.0",
    "label": "2015-01",
    "ts": "2015-01-01 00:00:00.000"
  }, {"id": 151, "value": "13.3", "label": "2014-12", "ts": "2014-12-01 00:00:00.000"}, {
    "id": 150,
    "value": "13.1",
    "label": "2014-11",
    "ts": "2014-11-01 00:00:00.000"
  }, {"id": 149, "value": "12.9", "label": "2014-10", "ts": "2014-10-01 00:00:00.000"}, {
    "id": 148,
    "value": "14.2",
    "label": "2014-09",
    "ts": "2014-09-01 00:00:00.000"
  }, {"id": 147, "value": "14.0", "label": "2014-08", "ts": "2014-08-01 00:00:00.000"}, {
    "id": 146,
    "value": "12.9",
    "label": "2014-07",
    "ts": "2014-07-01 00:00:00.000"
  }, {"id": 145, "value": "12.8", "label": "2014-06", "ts": "2014-06-01 00:00:00.000"}, {
    "id": 144,
    "value": "12.7",
    "label": "2014-05",
    "ts": "2014-05-01 00:00:00.000"
  }, {"id": 187, "value": "55.83", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 186,
    "value": "56.5",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 185, "value": "56.98", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 184,
    "value": "57.42",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 183, "value": "57.84", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 182,
    "value": "58.24",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 181, "value": "58.72", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 180,
    "value": "59.21",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 179, "value": "59.56", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 178,
    "value": "59.98",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 177, "value": "60.54", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 176,
    "value": "61.15",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 175, "value": "62.12", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 174,
    "value": "63.66",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 173, "value": "64.29", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 172,
    "value": "64.88",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 171, "value": "65.51", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 204,
    "value": "25.71",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 203, "value": "25.64", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 202,
    "value": "25.52",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 201, "value": "25.38", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 200,
    "value": "25.23",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 199, "value": "25.09", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 198,
    "value": "24.9",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 197, "value": "24.7", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 196,
    "value": "24.55",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 195, "value": "24.37", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 194,
    "value": "24.13",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 193, "value": "23.85", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 192,
    "value": "23.41",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 191, "value": "22.78", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 190,
    "value": "22.46",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 189, "value": "22.18", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 188,
    "value": "21.91",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 221, "value": "12.58", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 220,
    "value": "12.28",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 219, "value": "12.11", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 218,
    "value": "11.94",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 217, "value": "11.79", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 216,
    "value": "11.64",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 215, "value": "11.48", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 214,
    "value": "11.31",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 213, "value": "11.19", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 212,
    "value": "11.04",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 211, "value": "10.86", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 210,
    "value": "10.64",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 209, "value": "10.31", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 208,
    "value": "9.75",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 207, "value": "9.55", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 206,
    "value": "9.36",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 205, "value": "9.16", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 238,
    "value": "4.46",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 237, "value": "4.25", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 236,
    "value": "4.14",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 235, "value": "4.05", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 234,
    "value": "3.97",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 233, "value": "3.89", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 232,
    "value": "3.81",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 231, "value": "3.74", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 230,
    "value": "3.69",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 229, "value": "3.63", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 228,
    "value": "3.55",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 227, "value": "3.47", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 226,
    "value": "3.32",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 225, "value": "3.09", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 224,
    "value": "3.0",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 223, "value": "2.92", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 222,
    "value": "2.82",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 255, "value": "1.43", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 254,
    "value": "1.32",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 253, "value": "1.25", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 252,
    "value": "1.22",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 251, "value": "1.18", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 250,
    "value": "1.13",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 249, "value": "1.09", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 248,
    "value": "1.05",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 247, "value": "1.02", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 246,
    "value": "0.98",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 245, "value": "0.93", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 244,
    "value": "0.89",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 243, "value": "0.84", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 242,
    "value": "0.73",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 241, "value": "0.69", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 240,
    "value": "0.65",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 239, "value": "0.6", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 272,
    "value": "387871.0",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 271, "value": "155572.0", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 270,
    "value": "152011.0",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 269, "value": "141670.0", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 268,
    "value": "148489.0",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 267, "value": "176164.0", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 266,
    "value": "158949.0",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 265, "value": "130831.0", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 264,
    "value": "154047.0",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 263, "value": "257663.0", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 262,
    "value": "223160.0",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 261, "value": "334409.0", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 260,
    "value": "494759.0",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 259, "value": "166691.0", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 258,
    "value": "164505.0",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 257, "value": "154952.0", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 256,
    "value": "182284.0",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 289, "value": "1.43", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 288,
    "value": "0.69",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 287, "value": "0.58", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 286,
    "value": "0.56",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 285, "value": "0.58", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 284,
    "value": "0.6",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 283, "value": "0.6", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 282,
    "value": "0.54",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 281, "value": "0.29", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 280,
    "value": "0.47",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 279, "value": "0.41", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 278,
    "value": "0.56",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 277, "value": "1.01", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 276,
    "value": "0.32",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 275, "value": "0.32", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 274,
    "value": "0.43",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 273, "value": "0.41", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 306,
    "value": "1.26",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 305, "value": "1.23", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 304,
    "value": "1.2",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 303, "value": "1.24", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 302,
    "value": "1.42",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 301, "value": "1.04", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 300,
    "value": "1.35",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 299, "value": "1.77", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 298,
    "value": "2.96",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 297, "value": "2.02", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 296,
    "value": "2.32",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 295, "value": "2.01", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 294,
    "value": "1.99",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 293, "value": "1.95", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 292,
    "value": "1.87",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 291, "value": "1.31", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 290,
    "value": "1.38",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 345, "value": "9954414.0", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 344,
    "value": "9566543.0",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 343, "value": "9410971.0", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 342,
    "value": "9258960.0",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 341, "value": "9117290.0", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 340,
    "value": "8968801.0",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 339, "value": "8792637.0", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 338,
    "value": "8633688.0",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 337, "value": "8502857.0", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 336,
    "value": "8348810.0",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 335, "value": "8091147.0", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 334,
    "value": "7867987.0",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 333, "value": "7533578.0", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 332,
    "value": "7038819.0",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 331, "value": "6872128.0", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 330,
    "value": "6707623.0",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 329, "value": "6552671.0", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 328,
    "value": "6370387.0",
    "label": "2015-02",
    "ts": "2015-02-01 00:00:00.000"
  }, {"id": 327, "value": "6224366.0", "label": "2015-01", "ts": "2015-01-01 00:00:00.000"}, {
    "id": 326,
    "value": "6100676.0",
    "label": "2014-12",
    "ts": "2014-12-01 00:00:00.000"
  }, {"id": 325, "value": "5999398.0", "label": "2014-11", "ts": "2014-11-01 00:00:00.000"}, {
    "id": 324,
    "value": "5853250.0",
    "label": "2014-10",
    "ts": "2014-10-01 00:00:00.000"
  }, {"id": 323, "value": "5220496.0", "label": "2014-09", "ts": "2014-09-01 00:00:00.000"}, {
    "id": 322,
    "value": "4775605.0",
    "label": "2014-08",
    "ts": "2014-08-01 00:00:00.000"
  }, {"id": 321, "value": "4109819.0", "label": "2014-07", "ts": "2014-07-01 00:00:00.000"}, {
    "id": 320,
    "value": "2923386.0",
    "label": "2014-06",
    "ts": "2014-06-01 00:00:00.000"
  }, {"id": 319, "value": "2752832.0", "label": "2014-05", "ts": "2014-05-01 00:00:00.000"}, {
    "id": 318,
    "value": "2605269.0",
    "label": "2014-04",
    "ts": "2014-04-01 00:00:00.000"
  }, {"id": 317, "value": "2490089.0", "label": "2014-03", "ts": "2014-03-01 00:00:00.000"}, {
    "id": 316,
    "value": "2373578.0",
    "label": "2014-02",
    "ts": "2014-02-01 00:00:00.000"
  }, {"id": 315, "value": "2257796.0", "label": "2014-01", "ts": "2014-01-01 00:00:00.000"}, {
    "id": 314,
    "value": "2146290.0",
    "label": "2013-12",
    "ts": "2013-12-01 00:00:00.000"
  }, {"id": 313, "value": "2062742.0", "label": "2013-11", "ts": "2013-11-01 00:00:00.000"}, {
    "id": 312,
    "value": "1945613.0",
    "label": "2013-10",
    "ts": "2013-10-01 00:00:00.000"
  }, {"id": 311, "value": "1824121.0", "label": "2013-09", "ts": "2013-09-01 00:00:00.000"}, {
    "id": 310,
    "value": "1740113.0",
    "label": "2013-08",
    "ts": "2013-08-01 00:00:00.000"
  }, {"id": 309, "value": "1628151.0", "label": "2013-07", "ts": "2013-07-01 00:00:00.000"}, {
    "id": 308,
    "value": "1477505.0",
    "label": "2013-06",
    "ts": "2013-06-01 00:00:00.000"
  }, {"id": 307, "value": "1368549.0", "label": "2013-05", "ts": "2013-05-01 00:00:00.000"}, {
    "id": 362,
    "value": "29.0",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 361, "value": "29.0", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 360,
    "value": "29.0",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 359, "value": "29.0", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 358,
    "value": "29.0",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 357, "value": "29.0", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 356,
    "value": "29.0",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 355, "value": "29.0", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 354,
    "value": "29.0",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 353, "value": "29.0", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 352,
    "value": "29.0",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 351, "value": "29.0", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 350,
    "value": "29.0",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 349, "value": "29.0", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 348,
    "value": "29.0",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 347, "value": "29.0", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 346,
    "value": "29.0",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 379, "value": "28.0", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 378,
    "value": "28.0",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 377, "value": "28.0", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 376,
    "value": "28.0",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 375, "value": "28.0", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 374,
    "value": "28.0",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 373, "value": "28.0", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 372,
    "value": "28.0",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 371, "value": "27.0", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 370,
    "value": "27.0",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 369, "value": "27.0", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 368,
    "value": "27.0",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 367, "value": "27.0", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 366,
    "value": "26.0",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 365, "value": "26.0", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 364,
    "value": "25.0",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 363, "value": "25.0", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 396,
    "value": "3.0",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 395, "value": "3.0", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 394,
    "value": "3.0",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 393, "value": "3.0", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 392,
    "value": "3.0",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 391, "value": "3.0", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 390,
    "value": "3.0",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 389, "value": "3.0", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 388,
    "value": "3.0",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 387, "value": "3.0", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 386,
    "value": "3.0",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 385, "value": "3.0", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 384,
    "value": "3.0",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 383, "value": "3.0", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 382,
    "value": "3.0",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 381, "value": "3.0", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 380,
    "value": "3.0",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 413, "value": "7.0", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 412,
    "value": "7.0",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 411, "value": "7.0", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 410,
    "value": "7.0",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 409, "value": "7.0", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 408,
    "value": "7.0",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 407, "value": "7.0", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 406,
    "value": "7.0",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 405, "value": "7.0", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 404,
    "value": "7.0",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 403, "value": "7.0", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 402,
    "value": "7.0",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 401, "value": "7.0", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 400,
    "value": "8.0",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 399, "value": "8.0", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 398,
    "value": "8.0",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 397, "value": "8.0", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 430,
    "value": "30.0",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 429, "value": "30.0", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 428,
    "value": "30.0",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 427, "value": "31.0", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 426,
    "value": "31.0",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 425, "value": "32.0", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 424,
    "value": "32.0",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 423, "value": "33.0", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 422,
    "value": "33.0",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 421, "value": "33.0", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 420,
    "value": "33.0",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 419, "value": "33.0", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 418,
    "value": "33.0",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 417, "value": "33.0", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 416,
    "value": "33.0",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 415, "value": "34.0", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 414,
    "value": "34.0",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 447, "value": "3.0", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 446,
    "value": "3.0",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 445, "value": "3.0", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 444,
    "value": "3.0",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 443, "value": "3.0", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 442,
    "value": "3.0",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 441, "value": "3.0", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 440,
    "value": "3.0",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 439, "value": "3.0", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 438,
    "value": "2.0",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 437, "value": "2.0", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 436,
    "value": "2.0",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 435, "value": "2.0", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 434,
    "value": "2.0",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 433, "value": "2.0", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 432,
    "value": "2.0",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 431, "value": "2.0", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 481,
    "value": null,
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 480, "value": null, "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 479,
    "value": null,
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 478, "value": "82.07", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 477,
    "value": "80.71",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 476, "value": "80.7", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 475,
    "value": "78.82",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 474, "value": null, "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 473,
    "value": null,
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 472, "value": null, "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 471,
    "value": null,
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 470, "value": null, "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 469,
    "value": "78.5",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 468, "value": "76.88", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 467,
    "value": "76.32",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 466, "value": "76.29", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 465,
    "value": "76.55",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 498, "value": null, "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 497,
    "value": null,
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 496, "value": null, "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 495,
    "value": "11.81",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 494, "value": "12.65", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 493,
    "value": "12.43",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 492, "value": "13.82", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 491,
    "value": null,
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 490, "value": null, "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 489,
    "value": null,
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 488, "value": null, "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 487,
    "value": null,
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 486, "value": "14.4", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 485,
    "value": "14.4",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 484, "value": "14.15", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 483,
    "value": "14.42",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 482, "value": "14.02", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 515,
    "value": null,
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 514, "value": null, "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 513,
    "value": null,
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 512, "value": "6.12", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 511,
    "value": "6.64",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 510, "value": "6.87", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 509,
    "value": "7.36",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 508, "value": null, "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 507,
    "value": null,
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 506, "value": null, "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 505,
    "value": null,
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 504, "value": null, "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 503,
    "value": "7.68",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 502, "value": "8.72", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 501,
    "value": "9.53",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 500, "value": "9.29", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 499,
    "value": "9.43",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 532, "value": "7.39", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 531,
    "value": "14.79",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 530, "value": "15.44", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 529,
    "value": "12.14",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 528, "value": "12.14", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 527,
    "value": "12.79",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 526, "value": "11.18", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 525,
    "value": "9.12",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 524, "value": "10.77", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 523,
    "value": "10.23",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 522, "value": "10.84", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 521,
    "value": "9.5",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 520, "value": "6.95", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 519,
    "value": "15.26",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 518, "value": "16.28", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 517,
    "value": "17.7",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 516, "value": "18.61", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 549,
    "value": "36.42",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 548, "value": "55.7", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 547,
    "value": "52.55",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 546, "value": "55.51", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 545,
    "value": "61.76",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 544, "value": "55.08", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 543,
    "value": "61.33",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 542, "value": "64.47", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 541,
    "value": "52.06",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 540, "value": "38.89", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 539,
    "value": "45.85",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 538, "value": "35.95", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 537,
    "value": "33.42",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 536, "value": "56.55", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 535,
    "value": "54.7",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 534, "value": "51.52", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 533,
    "value": "54.23",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 566, "value": "5.63", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 565,
    "value": "8.36",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 564, "value": "10.26", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 563,
    "value": "10.37",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 562, "value": "8.72", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 561,
    "value": "9.05",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 560, "value": "9.15", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 559,
    "value": "11.55",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 558, "value": "8.75", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 557,
    "value": "8.27",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 556, "value": "8.03", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 555,
    "value": "7.21",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 554, "value": "5.15", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 553,
    "value": "12.29",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 552, "value": "12.69", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 551,
    "value": "13.19",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 550, "value": "14.38", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}, {
    "id": 583,
    "value": "46.76",
    "label": "2016-07",
    "ts": "2016-07-01 00:00:00.000"
  }, {"id": 582, "value": "14.92", "label": "2016-06", "ts": "2016-06-01 00:00:00.000"}, {
    "id": 581,
    "value": "14.33",
    "label": "2016-05",
    "ts": "2016-05-01 00:00:00.000"
  }, {"id": 580, "value": "13.0", "label": "2016-04", "ts": "2016-04-01 00:00:00.000"}, {
    "id": 579,
    "value": "11.57",
    "label": "2016-03",
    "ts": "2016-03-01 00:00:00.000"
  }, {"id": 578, "value": "16.24", "label": "2016-02", "ts": "2016-02-01 00:00:00.000"}, {
    "id": 577,
    "value": "12.99",
    "label": "2016-01",
    "ts": "2016-01-01 00:00:00.000"
  }, {"id": 576, "value": "10.92", "label": "2015-12", "ts": "2015-12-01 00:00:00.000"}, {
    "id": 575,
    "value": "23.75",
    "label": "2015-11",
    "ts": "2015-11-01 00:00:00.000"
  }, {"id": 574, "value": "38.11", "label": "2015-10", "ts": "2015-10-01 00:00:00.000"}, {
    "id": 573,
    "value": "30.39",
    "label": "2015-09",
    "ts": "2015-09-01 00:00:00.000"
  }, {"id": 572, "value": "42.79", "label": "2015-08", "ts": "2015-08-01 00:00:00.000"}, {
    "id": 571,
    "value": "51.85",
    "label": "2015-07",
    "ts": "2015-07-01 00:00:00.000"
  }, {"id": 570, "value": "11.65", "label": "2015-06", "ts": "2015-06-01 00:00:00.000"}, {
    "id": 569,
    "value": "12.07",
    "label": "2015-05",
    "ts": "2015-05-01 00:00:00.000"
  }, {"id": 568, "value": "12.95", "label": "2015-04", "ts": "2015-04-01 00:00:00.000"}, {
    "id": 567,
    "value": "8.02",
    "label": "2015-03",
    "ts": "2015-03-01 00:00:00.000"
  }, {"id": 600, "value": "3.8", "label": "2016-07", "ts": "2016-07-01 00:00:00.000"}, {
    "id": 599,
    "value": "6.23",
    "label": "2016-06",
    "ts": "2016-06-01 00:00:00.000"
  }, {"id": 598, "value": "7.42", "label": "2016-05", "ts": "2016-05-01 00:00:00.000"}, {
    "id": 597,
    "value": "6.73",
    "label": "2016-04",
    "ts": "2016-04-01 00:00:00.000"
  }, {"id": 596, "value": "5.81", "label": "2016-03", "ts": "2016-03-01 00:00:00.000"}, {
    "id": 595,
    "value": "6.84",
    "label": "2016-02",
    "ts": "2016-02-01 00:00:00.000"
  }, {"id": 594, "value": "5.35", "label": "2016-01", "ts": "2016-01-01 00:00:00.000"}, {
    "id": 593,
    "value": "3.93",
    "label": "2015-12",
    "ts": "2015-12-01 00:00:00.000"
  }, {"id": 592, "value": "4.67", "label": "2015-11", "ts": "2015-11-01 00:00:00.000"}, {
    "id": 591,
    "value": "4.5",
    "label": "2015-10",
    "ts": "2015-10-01 00:00:00.000"
  }, {"id": 590, "value": "4.89", "label": "2015-09", "ts": "2015-09-01 00:00:00.000"}, {
    "id": 589,
    "value": "4.55",
    "label": "2015-08",
    "ts": "2015-08-01 00:00:00.000"
  }, {"id": 588, "value": "2.63", "label": "2015-07", "ts": "2015-07-01 00:00:00.000"}, {
    "id": 587,
    "value": "4.25",
    "label": "2015-06",
    "ts": "2015-06-01 00:00:00.000"
  }, {"id": 586, "value": "4.27", "label": "2015-05", "ts": "2015-05-01 00:00:00.000"}, {
    "id": 585,
    "value": "4.65",
    "label": "2015-04",
    "ts": "2015-04-01 00:00:00.000"
  }, {"id": 584, "value": "4.75", "label": "2015-03", "ts": "2015-03-01 00:00:00.000"}]
};
