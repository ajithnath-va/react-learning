export const pcatResponse = [{
	"toolTips": [],
	"unlimited": {
		"unitPrice": "550"
	},
	"bytheGig": [
		{
			"name": "Under 1 GB",
			"id": 1,
			"unitPrice": "100"
		},
		{
			"name": "1 GB",
			"id": 2,
			"unitPrice": "150"
		}
	],
	"currentMobileProvider": [
		{
			"name": "AT&T",
			"id": 1
		},
		{
			"name": "AT&T Business",
			"id": 2
		}
	],
	"pcat": [
		{
			"devices": [
				{
					"productCode": "a2482-iphone-13",
					"name": "iPhone 13",
					"paymentOptions": [
						{
							"id": 1,
							"name": "onetime",
							"price": "$1000"
						},
						{
							"id": 1,
							"name": "recurring",
							"price": "$45",
							"term": "24 months"
						}
					]
				}
			]
		}
	],
	"previousQuote": {
		"isValid": true,
		"unlimited": {
			"quantity": 1
		},
		"bytheGig": {
			"selection": {
				"name": "1 GB",
				"id": 2,
				"unitPrice": "$150"
			},
			"quantity": 1
		},
		"byod": {
			"quantity": 1
		},
		"devices": [
			{
				"deviceDetails": {
					"productCode": "a2482-iphone-13",
					"name": "iPhone 13",
					"paymentOptions": {
						"id": 1,
						"name": "onetime",
						"price": "1000"
					}
				},
				"quantity": 1
			},
			{
				"deviceDetails": {
					"productCode": "123-motorola-13",
					"name": "Motorola",
					"paymentOptions": {
						"id": 1,
						"name": "recurring",
						"price": "45",
						"term": "24 months"
					}
				},
				"quantity": 1
			}
		],
		"savings": {
			"currentMonthlyBill": "350",
			"currentMobileProvider": {
				"name": "AT&T",
				"id": 1
			}
		},
		"cartSummary": {
			"items": [
				{
					"name": "",
					"mrc": "",
					"nrc": ""
				}
			],
			"totalMrc": "30",
			"totalNrc": "40",
			"totalSavingsPerMonth": "155",
			"totalSavingsPerYear": "1860"
		}
	}
}]