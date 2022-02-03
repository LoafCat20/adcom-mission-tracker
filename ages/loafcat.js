DATA["egypt-bal-1"] = {
	"Ads": [
		{
			"Id": "AD011",
			"AdType": "Industry",
			"Name": "Propaganda Boost",
			"Description": "Applies a x2 payout to all industries",
			"ViewLimit": 3,
			"ResetType": "Now",
			"Rewards": [
				{
					"Reward": "Experiment",
					"RewardId": "EXAD6",
					"Value": 1
				}
			]
		},
		{
			"Id": "AD012",
			"AdType": "Tool",
			"Name": "Air Drop",
			"ViewLimit": 1,
			"ResetType": "Now",
			"Rewards": [
				{
					"Reward": "None"
				}
			]
		}
	],
	"AirDrops": [
		{
			"Id": 10001,
			"AirDropRewardType": "CoreResource",
			"IsAd": false,
			"IsAdSkippable": false,
			"Weight": 15,
			"MaxAdsPerInterval": -1,
			"RewardCalculation": {
				"A": 1800,
				"B": 5,
				"C": 0.125,
				"D": 25
			}
		},
		{
			"Id": 10002,
			"AirDropRewardType": "PrimaryCurrency",
			"IsAd": false,
			"IsAdSkippable": false,
			"Weight": 10,
			"MaxAdsPerInterval": -1,
			"RewardCalculation": {
				"A": 450,
				"B": 1.55,
				"C": 0.4,
				"D": 10
			}
		},
		{
			"Id": 10003,
			"AirDropRewardType": "PrimaryCurrency",
			"IsAd": true,
			"IsAdSkippable": false,
			"Weight": 50,
			"MaxAdsPerInterval": 6,
			"RewardCalculation": {
				"A": 7500,
				"B": 1.7,
				"C": 0.2,
				"D": -650
			}
		},
		{
			"Id": 10004,
			"AirDropRewardType": "SoftCurrency",
			"IsAd": true,
			"IsAdSkippable": false,
			"Weight": 25,
			"MaxAdsPerInterval": 3,
			"RewardCalculation": {
				"A": 550,
				"B": 1.01,
				"C": 1.001,
				"D": 65
			}
		}
	],
	"AirDropsConfig": [
		{
			"AirDropBaseInterval": 50,
			"AirDropIntervalVariance": 0.1,
			"AirDropIntervalMultiplier": 1.2,
			"ClaimCountResetInterval": 5400,
			"AdCountResetInterval": 43200,
			"StartupDelay": 15,
			"StartCondition": {
				"ConditionType": "RankReached",
				"Threshold": 2
			}
		}
	],
	"CardStoreCost": [
		{
			"Rarity": "Common",
			"ScienceCost": 0,
			"GoldCost": 0,
			"AdWatchStackModifier": 0
		},
		{
			"Rarity": "Rare",
			"ScienceCost": 0,
			"GoldCost": 0,
			"AdWatchStackModifier": 0
		},
		{
			"Rarity": "Epic",
			"ScienceCost": 0,
			"GoldCost": 0,
			"AdWatchStackModifier": 0
		},
		{
			"Rarity": "Supreme",
			"ScienceCost": 0,
			"GoldCost": 0,
			"AdWatchStackModifier": 0
		},
		{
			"Rarity": "LteCommon",
			"ScienceCost": 30,
			"GoldCost": 2,
			"AdWatchStackModifier": 0.25
		},
		{
			"Rarity": "LteRare",
			"ScienceCost": 250,
			"GoldCost": 15,
			"AdWatchStackModifier": 0.1
		}
	],
	"CardStoreStackSize": [
		{
			"Rank": 1,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 10,
			"LteRare": 2
		},
		{
			"Rank": 2,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 10,
			"LteRare": 2
		},
		{
			"Rank": 3,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 10,
			"LteRare": 2
		},
		{
			"Rank": 4,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 20,
			"LteRare": 3
		},
		{
			"Rank": 5,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 20,
			"LteRare": 3
		},
		{
			"Rank": 6,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 20,
			"LteRare": 3
		},
		{
			"Rank": 7,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 20,
			"LteRare": 3
		},
		{
			"Rank": 8,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 30,
			"LteRare": 4
		},
		{
			"Rank": 9,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 30,
			"LteRare": 4
		},
		{
			"Rank": 10,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 30,
			"LteRare": 4
		},
		{
			"Rank": 11,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 30,
			"LteRare": 4
		},
		{
			"Rank": 12,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 30,
			"LteRare": 5
		},
		{
			"Rank": 13,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 5
		},
		{
			"Rank": 14,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 5
		},
		{
			"Rank": 15,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 5
		},
		{
			"Rank": 16,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 6
		},
		{
			"Rank": 17,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 6
		},
		{
			"Rank": 18,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 6
		},
		{
			"Rank": 19,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 6
		},
		{
			"Rank": 20,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 21,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 22,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 23,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 24,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 25,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		}
	],
	"CardToScienceConversion": {
		"Common": 0,
		"Rare": 0,
		"Epic": 0,
		"Supreme": 0,
		"LteCommon": 15,
		"LteRare": 125
	},
	"CrossPromoTitles": [
		{
			"Id": "adcap",
			"IconId": "icon-adcap",
			"TitleSpriteId": "art-adcap-header",
			"BackgroundSpriteId": "art-adcap-header",
			"LinkedAppId_IOS": "927006017",
			"LinkedAppId_Android": "com.kongregate.mobile.adventurecapitalist.google"
		},
		{
			"Id": "adcom",
			"IconId": "icon-adcomm",
			"TitleSpriteId": "art-adcom-header",
			"BackgroundSpriteId": "art-adcom-background",
			"LinkedAppId_IOS": "1225683141",
			"LinkedAppId_Android": "com.kongregate.mobile.adventurecommunist.google"
		}
	],
	"DailyDealSlotChance": [
		{
			"Slot": 1,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 0.5,
			"LteRare": 0.5,
			"GoldCostChance": 0,
			"AdWatchChance": 1
		},
		{
			"Slot": 2,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 0.5,
			"LteRare": 0.5,
			"GoldCostChance": 0,
			"AdWatchChance": 0
		},
		{
			"Slot": 3,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 0,
			"LteRare": 1,
			"GoldCostChance": 1,
			"AdWatchChance": 0
		}
	],
	"Experiments": [
		{
			"Id": "EX164",
			"Name": "Basic Time Hack",
			"IconKey": "timehack_4",
			"Lifespan": "OneTime",
			"Lifetime": 1,
			"Type": "None",
			"Rewards": [
				{
					"Type": "ResourceSurge",
					"AllResources": true,
					"Value": 14400,
					"Description": "Resource Surge! Get 4 hours' worth instantly!"
				}
			],
			"Description": "Resource Surge! Get 4 hours' worth instantly!"
		},
		{
			"Id": "EX165",
			"Name": "Mega Time Hack",
			"IconKey": "timehack_24",
			"Lifespan": "OneTime",
			"Lifetime": 1,
			"Type": "None",
			"Rewards": [
				{
					"Type": "ResourceSurge",
					"AllResources": true,
					"Value": 86400,
					"Description": "Resource Surge! Get 24 hours' worth instantly!"
				}
			],
			"Description": "Resource Surge! Get 24 hours' worth instantly!"
		},
		{
			"Id": "EX167",
			"Name": "Simple Time Hack",
			"IconKey": "timehack_1",
			"Lifespan": "OneTime",
			"Lifetime": 1,
			"Type": "None",
			"Rewards": [
				{
					"Type": "ResourceSurge",
					"AllResources": true,
					"Value": 3600,
					"Description": "Resource Surge! Get 1 hours' worth instantly!"
				}
			],
			"Description": "Resource Surge! Get 1 hours' worth instantly!"
		},
		{
			"Id": "EX210",
			"Name": "Double Time",
			"IconKey": "propaganda",
			"Lifespan": "Permanent",
			"Lifetime": 0,
			"Type": "Ad",
			"Rewards": [
				{
					"Type": "PayoutMultiplier",
					"AllResources": true,
					"Value": 2,
					"Description": "Receive a permanent x2 speed boost to all industries!"
				}
			],
			"Description": "Receive a permanent x2 speed boost to all industries!"
		},
		{
			"Id": "EX211",
			"Name": "Quintuple Time",
			"IconKey": "propaganda",
			"Lifespan": "Permanent",
			"Lifetime": 0,
			"Type": "Ad",
			"Rewards": [
				{
					"Type": "PayoutMultiplier",
					"AllResources": true,
					"Value": 5,
					"Description": "Receive a permanent x5 speed boost to all industries!"
				}
			],
			"Description": "Receive a permanent x5 speed boost to all industries!"
		},
		{
			"Id": "EX215",
			"Name": "Long Term Propaganda",
			"IconKey": "propaganda",
			"Lifespan": "Timed",
			"Lifetime": 5184000,
			"Type": "Ad",
			"Rewards": [
				{
					"Type": "PayoutMultiplier",
					"AllResources": true,
					"Value": 5,
					"Description": "Receive a x5 speed boost to all industries for 60D!"
				}
			],
			"Description": "Receive a x5 speed boost to all industries for 60D!"
		},
		{
			"Id": "EXAD6",
			"Name": "Propaganda Boost",
			"IconKey": "propaganda",
			"Lifespan": "Timed",
			"Lifetime": 14400,
			"Type": "Ad",
			"Rewards": [
				{
					"Type": "PayoutMultiplier",
					"AllResources": true,
					"Value": 2,
					"Description": "x2 boost to all industries!"
				}
			],
			"Description": "x2 boost for 3 more hours!"
		},
		{
			"Id": "SCH2",
			"Name": "Free Gacha Capsule",
			"Lifespan": "Timed",
			"Lifetime": 7200,
			"Type": "None",
			"Rewards": [
				{
					"Type": "None",
					"AllResources": false
				}
			]
		},
		{
			"Id": "SCH3",
			"Name": "Science Air Drop Availability",
			"IconKey": "darkscience",
			"Lifespan": "Timed",
			"Lifetime": 14400,
			"Type": "None",
			"Rewards": [
				{
					"Type": "None"
				}
			]
		},
		{
			"Id": "SCH4",
			"Name": "Air Drop Session Reset",
			"IconKey": "none",
			"Lifespan": "Timed",
			"Lifetime": 14400,
			"Type": "None",
			"Rewards": [
				{
					"Type": "None"
				}
			]
		}
	],
	"FreeGachaData": {
		"TimeBetweenGachas": 7200,
		"MaxStackCount": 2
	},
	"GachaFreeCycle": [
		{
			"Cycle": [
				"plastic",
				"plastic",
				"armored",
				"plastic",
				"plastic",
				"plastic",
				"armored",
				"plastic",
				"plastic",
				"plastic",
				"armored",
				"plastic",
				"plastic",
				"plastic",
				"armored",
				"plastic",
				"plastic",
				"plastic",
				"armored",
				"plastic",
				"plastic",
				"plastic",
				"armored",
				"plastic"
			],
			"ScriptId": "sc3"
		}
	],
	"GachaGoldCycle": [
		{
			"Cycle": {
				"plastic": [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				],
				"armored": [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]
			}
		}
	],
	"GachaLootTable": [
		{
			"Id": "plastic",
			"CardWeight": 10,
			"RareWeight": -1,
			"EpicWeight": -1,
			"SupremeWeight": -1,
			"LteRareWeight": 17,
			"ScienceMin": 70,
			"ScienceMax": 80,
			"TrophyMin": 10,
			"TrophyMax": 10,
			"ChanceMultiplier": 10,
			"WeightDivider": 10,
			"Type": "Normal"
		},
		{
			"Id": "armored",
			"CardWeight": 30,
			"RareWeight": -1,
			"EpicWeight": -1,
			"SupremeWeight": -1,
			"LteRareWeight": 15,
			"ScienceMin": 140,
			"ScienceMax": 160,
			"TrophyMin": 50,
			"TrophyMax": 50,
			"ChanceMultiplier": 10,
			"WeightDivider": 10,
			"Type": "Normal"
		},
		{
			"Id": "titanium",
			"CardWeight": 200,
			"RareWeight": -1,
			"EpicWeight": -1,
			"SupremeWeight": -1,
			"LteRareWeight": 5,
			"ScienceMin": 1400,
			"ScienceMax": 1600,
			"TrophyMin": 0,
			"TrophyMax": 0,
			"ChanceMultiplier": 10,
			"WeightDivider": 10,
			"Type": "Premium"
		},
		{
			"Id": "tech",
			"CardWeight": 100,
			"RareWeight": -1,
			"EpicWeight": -1,
			"SupremeWeight": -1,
			"LteRareWeight": 1,
			"ScienceMin": 0,
			"ScienceMax": 0,
			"TrophyMin": 0,
			"TrophyMax": 0,
			"ChanceMultiplier": 10,
			"WeightDivider": 10,
			"Type": "Fixed"
		},
		{
			"Id": "sc_m01",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m02",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m03",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m04",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m05",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m06",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m07",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m08",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m09",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m10",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m11",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m12",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m13",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m14",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m15",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m16",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m17",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m18",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m19",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m20",
			"Type": "Scripted"
		},
		{
			"Id": "sc3",
			"Type": "Scripted"
		}
	],
	"GachaScripts": [
		{
			"GachaId": "sc_m01",
			"MimicGachaId": "plastic",
			"Science": 48,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "EGY001",
					"Value": 3
				}
			]
		},
		{
			"GachaId": "sc_m02",
			"MimicGachaId": "plastic",
			"Science": 45,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "EGY001",
					"Value": 3
				},
				{
					"Id": "EGY016",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m03",
			"MimicGachaId": "plastic",
			"Science": 52,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "EGY001",
					"Value": 5
				},
				{
					"Id": "EGY017",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m04",
			"MimicGachaId": "plastic",
			"Science": 61,
			"Gold": 0,
			"Trophy": 20,
			"Card": [
				{
					"Id": "EGY001",
					"Value": 4
				},
				{
					"Id": "EGY022",
					"Value": 4
				}
			]
		},
		{
			"GachaId": "sc_m05",
			"MimicGachaId": "plastic",
			"Science": 74,
			"Gold": 0,
			"Trophy": 30,
			"Card": [
				{
					"Id": "EGY002",
					"Value": 4
				},
				{
					"Id": "EGY007",
					"Value": 6
				}
			]
		},
		{
			"GachaId": "sc_m06",
			"MimicGachaId": "plastic",
			"Science": 85,
			"Gold": 0,
			"Trophy": 40,
			"Card": [
				{
					"Id": "EGY002",
					"Value": 4
				},
				{
					"Id": "EGY007",
					"Value": 7
				},
				{
					"Id": "EGY018",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m07",
			"MimicGachaId": "plastic",
			"Science": 93,
			"Gold": 0,
			"Trophy": 50,
			"Card": [
				{
					"Id": "EGY022",
					"Value": 8
				},
				{
					"Id": "EGY008",
					"Value": 6
				},
				{
					"Id": "EGY025",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m08",
			"MimicGachaId": "plastic",
			"Science": 112,
			"Gold": 0,
			"Trophy": 60,
			"Card": [
				{
					"Id": "EGY001",
					"Value": 7
				},
				{
					"Id": "EGY007",
					"Value": 11
				},
				{
					"Id": "EGY019",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m09",
			"MimicGachaId": "plastic",
			"Science": 127,
			"Gold": 0,
			"Trophy": 70,
			"Card": [
				{
					"Id": "EGY003",
					"Value": 13
				},
				{
					"Id": "EGY002",
					"Value": 8
				},
				{
					"Id": "EGY016",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m10",
			"MimicGachaId": "plastic",
			"Science": 143,
			"Gold": 0,
			"Trophy": 80,
			"Card": [
				{
					"Id": "EGY023",
					"Value": 9
				},
				{
					"Id": "EGY022",
					"Value": 13
				},
				{
					"Id": "EGY026",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m11",
			"MimicGachaId": "plastic",
			"Science": 156,
			"Gold": 0,
			"Trophy": 90,
			"Card": [
				{
					"Id": "EGY001",
					"Value": 7
				},
				{
					"Id": "EGY008",
					"Value": 10
				},
				{
					"Id": "EGY003",
					"Value": 8
				},
				{
					"Id": "EGY028",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m12",
			"MimicGachaId": "plastic",
			"Science": 172,
			"Gold": 0,
			"Trophy": 100,
			"Card": [
				{
					"Id": "EGY012",
					"Value": 6
				},
				{
					"Id": "EGY007",
					"Value": 10
				},
				{
					"Id": "EGY004",
					"Value": 12
				},
				{
					"Id": "EGY019",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m13",
			"MimicGachaId": "plastic",
			"Science": 190,
			"Gold": 0,
			"Trophy": 110,
			"Card": [
				{
					"Id": "EGY003",
					"Value": 9
				},
				{
					"Id": "EGY009",
					"Value": 15
				},
				{
					"Id": "EGY023",
					"Value": 6
				},
				{
					"Id": "EGY020",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m14",
			"MimicGachaId": "plastic",
			"Science": 200,
			"Gold": 0,
			"Trophy": 120,
			"Card": [
				{
					"Id": "EGY024",
					"Value": 7
				},
				{
					"Id": "EGY004",
					"Value": 16
				},
				{
					"Id": "EGY008",
					"Value": 9
				},
				{
					"Id": "EGY021",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m15",
			"MimicGachaId": "plastic",
			"Science": 229,
			"Gold": 0,
			"Trophy": 130,
			"Card": [
				{
					"Id": "EGY009",
					"Value": 12
				},
				{
					"Id": "EGY005",
					"Value": 8
				},
				{
					"Id": "EGY012",
					"Value": 15
				},
				{
					"Id": "EGY027",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m16",
			"MimicGachaId": "plastic",
			"Science": 229,
			"Gold": 0,
			"Trophy": 140,
			"Card": [
				{
					"Id": "EGY004",
					"Value": 15
				},
				{
					"Id": "EGY013",
					"Value": 10
				},
				{
					"Id": "EGY009",
					"Value": 12
				},
				{
					"Id": "EGY025",
					"Value": 3
				}
			]
		},
		{
			"GachaId": "sc_m17",
			"MimicGachaId": "plastic",
			"Science": 247,
			"Gold": 0,
			"Trophy": 150,
			"Card": [
				{
					"Id": "EGY002",
					"Value": 9
				},
				{
					"Id": "EGY012",
					"Value": 10
				},
				{
					"Id": "EGY010",
					"Value": 21
				},
				{
					"Id": "EGY028",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m18",
			"MimicGachaId": "plastic",
			"Science": 279,
			"Gold": 0,
			"Trophy": 170,
			"Card": [
				{
					"Id": "EGY006",
					"Value": 14
				},
				{
					"Id": "EGY014",
					"Value": 18
				},
				{
					"Id": "EGY008",
					"Value": 11
				},
				{
					"Id": "EGY018",
					"Value": 3
				}
			]
		},
		{
			"GachaId": "sc_m19",
			"MimicGachaId": "plastic",
			"Science": 303,
			"Gold": 0,
			"Trophy": 190,
			"Card": [
				{
					"Id": "EGY011",
					"Value": 5
				},
				{
					"Id": "EGY005",
					"Value": 17
				},
				{
					"Id": "EGY023",
					"Value": 24
				},
				{
					"Id": "EGY025",
					"Value": 3
				}
			]
		},
		{
			"GachaId": "sc_m20",
			"MimicGachaId": "plastic",
			"Science": 347,
			"Gold": 0,
			"Trophy": 220,
			"Card": [
				{
					"Id": "EGY015",
					"Value": 12
				},
				{
					"Id": "EGY011",
					"Value": 16
				},
				{
					"Id": "EGY006",
					"Value": 20
				},
				{
					"Id": "EGY028",
					"Value": 3
				}
			]
		},
		{
			"GachaId": "sc3",
			"MimicGachaId": "plastic",
			"Science": 50,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "EGY001",
					"Value": 3
				}
			]
		}
	],
	"GachaStackSplit": [
		{
			"Split": 2,
			"LteCommon": 8,
			"LteRare": 4
		},
		{
			"Split": 3,
			"LteCommon": 25,
			"LteRare": 25
		},
		{
			"Split": 4,
			"LteRare": 75
		}
	],
	"GeneratorObjectiveLimits": [
		{
			"GeneratorId": "builder",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "limestone",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "sled",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "quarry",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "obelisk",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "sphinx",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "pyramid",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "scribe",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "papyrus",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "relief",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "priest",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "temple",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "prophet",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "mummy",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "pectoral",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "sarcophagus",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "cat",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "deity",
			"MaximumObjectivesForRank": [
				999
			]
		}
	],
	"Generators": [
		{
			"Id": "comradegenerator",
			"Name": "Comrade",
			"ResourceType": "comradegenerator",
			"GeneratorType": "Automatic",
			"Generate": {
				"Resource": "comrade",
				"Qty": 1
			},
			"BaseCompletionTime": 1,
			"IncludeInAll": false,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 1
			}
		},
		{
			"Id": "builder",
			"Name": "Builder",
			"ResourceType": "builder",
			"GeneratorType": "Manual",
			"IndustryId": "building",
			"Cost": [
				{
					"Resource": "Tool",
					"Qty": "1.0E+01"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "tool",
				"Qty": 2
			},
			"BaseCompletionTime": 2,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "tool",
					"Threshold": 0
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "building",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "limestone",
			"Name": "limestone",
			"ResourceType": "limestone",
			"GeneratorType": "Manual",
			"IndustryId": "building",
			"Cost": [
				{
					"Resource": "builder",
					"Qty": "10"
				},
				{
					"Resource": "Tool",
					"Qty": "1.0E+06"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "builder",
				"Qty": 3
			},
			"BaseCompletionTime": 6,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "builder",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "builder",
				"Threshold": 2000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "sled",
			"Name": "Sled",
			"ResourceType": "sled",
			"GeneratorType": "Manual",
			"IndustryId": "building",
			"Cost": [
				{
					"Resource": "limestone",
					"Qty": "1.0E+03"
				},
				{
					"Resource": "Tool",
					"Qty": "1.0E+15"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "limestone",
				"Qty": 4
			},
			"BaseCompletionTime": 18,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "limestone",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "limestone",
				"Threshold": 450000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "quarry",
			"Name": "Quarry",
			"ResourceType": "quarry",
			"GeneratorType": "Manual",
			"IndustryId": "building",
			"Cost": [
				{
					"Resource": "Sled",
					"Qty": "1.0E+05"
				},
				{
					"Resource": "Tool",
					"Qty": "1.0E+30"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "sled",
				"Qty": 5
			},
			"BaseCompletionTime": 18,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "sled",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "sled",
				"Threshold": 100000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "obelisk",
			"Name": "Obelisk",
			"ResourceType": "obelisk",
			"GeneratorType": "Manual",
			"IndustryId": "building",
			"Cost": [
				{
					"Resource": "Quarry",
					"Qty": "1.0E+07"
				},
				{
					"Resource": "Tool",
					"Qty": 1e46
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "quarry",
				"Qty": 6
			},
			"BaseCompletionTime": 54,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "quarry",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "quarry",
				"Threshold": 800000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "sphinx",
			"Name": "Sphinx",
			"ResourceType": "sphinx",
			"GeneratorType": "Manual",
			"IndustryId": "building",
			"Cost": [
				{
					"Resource": "Obelisk",
					"Qty": "1.0E+08"
				},
				{
					"Resource": "Tool",
					"Qty": "1.0E+62"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "obelisk",
				"Qty": 7
			},
			"BaseCompletionTime": 162,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "obelisk",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "obelisk",
				"Threshold": 4000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "pyramid",
			"Name": "Pyramid",
			"ResourceType": "pyramid",
			"GeneratorType": "Manual",
			"IndustryId": "building",
			"Cost": [
				{
					"Resource": "Sphinx",
					"Qty": "1.0E+09"
				},
				{
					"Resource": "Tool",
					"Qty": "1.0E+78"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "sphinx",
				"Qty": 8
			},
			"BaseCompletionTime": 486,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "sphinx",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "sphinx",
				"Threshold": 20000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "scribe",
			"Name": "Scribe",
			"ResourceType": "scribe",
			"GeneratorType": "Manual",
			"IndustryId": "learning",
			"Cost": [
				{
					"Resource": "Hieroglyphic",
					"Qty": "2.5E+01"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "hieroglyphic",
				"Qty": 3
			},
			"BaseCompletionTime": 3,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "tool",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "learning",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "papyrus",
			"Name": "Papyrus",
			"ResourceType": "papyrus",
			"GeneratorType": "Manual",
			"IndustryId": "learning",
			"Cost": [
				{
					"Resource": "Scribe",
					"Qty": "1.0E+03"
				},
				{
					"Resource": "Hieroglyphic",
					"Qty": "1.0E+9"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "scribe",
				"Qty": 5
			},
			"BaseCompletionTime": 9,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "scribe",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "scribe",
				"Threshold": 2000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "relief",
			"Name": "Relief",
			"ResourceType": "relief",
			"GeneratorType": "Manual",
			"IndustryId": "learning",
			"Cost": [
				{
					"Resource": "papyrus",
					"Qty": 100000
				},
				{
					"Resource": "Hieroglyphic",
					"Qty": 1e18
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "papyrus",
				"Qty": 7
			},
			"BaseCompletionTime": 27,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "papyrus",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "papyrus",
				"Threshold": 60000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "priest",
			"Name": "Priest",
			"ResourceType": "priest",
			"GeneratorType": "Manual",
			"IndustryId": "learning",
			"Cost": [
				{
					"Resource": "Relief",
					"Qty": 10000000
				},
				{
					"Resource": "Hieroglyphic",
					"Qty": "1.0E+36"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "relief",
				"Qty": 9
			},
			"BaseCompletionTime": 81,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "relief",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "relief",
				"Threshold": 500000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "temple",
			"Name": "Temple",
			"ResourceType": "temple",
			"GeneratorType": "Manual",
			"IndustryId": "learning",
			"Cost": [
				{
					"Resource": "Priest",
					"Qty": 100000000
				},
				{
					"Resource": "Hieroglyphic",
					"Qty": "1.0E+53"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "priest",
				"Qty": 11
			},
			"BaseCompletionTime": 243,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "priest",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "priest",
				"Threshold": 2500000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "prophet",
			"Name": "Prophet",
			"ResourceType": "prophet",
			"GeneratorType": "Manual",
			"IndustryId": "learning",
			"Cost": [
				{
					"Resource": "Temple",
					"Qty": "1.0E+09"
				},
				{
					"Resource": "Hieroglyphic",
					"Qty": "1.0E+70"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "temple",
				"Qty": 13
			},
			"BaseCompletionTime": 729,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "temple",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "temple",
				"Threshold": 12000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "mummy",
			"Name": "Mummy",
			"ResourceType": "mummy",
			"GeneratorType": "Manual",
			"IndustryId": "mourning",
			"Cost": [
				{
					"Resource": "Urn",
					"Qty": "5.0E+01"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "urn",
				"Qty": 4
			},
			"BaseCompletionTime": 12,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "hieroglyphic",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "mourning",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "pectoral",
			"Name": "Pectoral",
			"ResourceType": "pectoral",
			"GeneratorType": "Manual",
			"IndustryId": "mourning",
			"Cost": [
				{
					"Resource": "mummy",
					"Qty": "1.0E+05"
				},
				{
					"Resource": "Urn",
					"Qty": "1.0E+12"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "mummy",
				"Qty": 7
			},
			"BaseCompletionTime": 36,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "mummy",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "mummy",
				"Threshold": 50000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "sarcophagus",
			"Name": "Sarcophagus",
			"ResourceType": "sarcophagus",
			"GeneratorType": "Manual",
			"IndustryId": "mourning",
			"Cost": [
				{
					"Resource": "Pectoral",
					"Qty": "1.0E+07"
				},
				{
					"Resource": "Urn",
					"Qty": "1.0E+24"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "pectoral",
				"Qty": 10
			},
			"BaseCompletionTime": 108,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "pectoral",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "pectoral",
				"Threshold": 400000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "cat",
			"Name": "Cat",
			"ResourceType": "cat",
			"GeneratorType": "Manual",
			"IndustryId": "mourning",
			"Cost": [
				{
					"Resource": "Sarcophagus",
					"Qty": "1.0E+08"
				},
				{
					"Resource": "Urn",
					"Qty": "1.0E+42"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "sarcophagus",
				"Qty": 13
			},
			"BaseCompletionTime": 324,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "sarcophagus",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "sarcophagus",
				"Threshold": 2000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "deity",
			"Name": "Deity",
			"ResourceType": "deity",
			"GeneratorType": "Manual",
			"IndustryId": "mourning",
			"Cost": [
				{
					"Resource": "Cat",
					"Qty": "1.0E+09"
				},
				{
					"Resource": "Urn",
					"Qty": "1.0E+62"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "cat",
				"Qty": 16
			},
			"BaseCompletionTime": 972,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "cat",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "cat",
				"Threshold": 10000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 128
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		}
	],
	"Industries": [
		{
			"Id": "building",
			"SortingOrder": 1,
			"VisibleConditions": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "tool"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "tool",
					"Threshold": 0
				}
			]
		},
		{
			"Id": "learning",
			"SortingOrder": 2,
			"UnlockCostResourceId": "tool",
			"UnlockCostResourceQty": 15000000000000,
			"VisibleConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "building"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "tool",
					"Threshold": 0
				}
			]
		},
		{
			"Id": "mourning",
			"SortingOrder": 3,
			"UnlockCostResourceId": "hieroglyphic",
			"UnlockCostResourceQty": 1.5e24,
			"VisibleConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "building"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "learning",
					"Threshold": 0
				}
			]
		}
	],
	"MiscBalance": {
		"SoftCurrencyId": "darkscience",
		"PrimaryGeneratorId": "comradegenerator",
		"PrimaryResourceId": "comrade",
		"HardToSoftCurrencyConversionRatio": 20,
		"OfferwallPlatforms": "android",
		"TotalSpendIncludesLte": false,
		"DaysForRecentSpend": 26,
		"RanksToTriggerOffers": "4,7,10,13,16,19,22,24,25",
		"ComradeSpendWarningEnableRank": 3,
		"ReferralReward": 110
	},
	"Missions": [
		{
			"Id": "M0001",
			"Rank": 1,
			"Condition": {
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 1,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m02",
				"Value": 1
			}
		},
		{
			"Id": "M0002",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0003",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 12,
				"ConditionId": "builder"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0004",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2500,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0005",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 555,
				"ConditionId": "builder"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0006",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0007",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 500000,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0008",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1500,
				"ConditionId": "builder"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0009",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 18,
				"ConditionId": "limestone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m03",
				"Value": 1
			}
		},
		{
			"Id": "M0010",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 250,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0011",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 500000000,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m04",
				"Value": 1
			}
		},
		{
			"Id": "M0012",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 33222,
				"ConditionId": "limestone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0013",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2000000000000,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0014",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0015",
			"Rank": 1,
			"Condition": {
				"ConditionType": "IndustryUnlocked",
				"Threshold": 1,
				"ConditionId": "learning"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0016",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 444222,
				"ConditionId": "limestone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0017",
			"Rank": 1,
			"Condition": {
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 2,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m05",
				"Value": 1
			}
		},
		{
			"Id": "M0018",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 378,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0019",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 77,
				"ConditionId": "sled"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0020",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 77777,
				"ConditionId": "scribe"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0021",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.54e18,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0022",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0023",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 44220000,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m06",
				"Value": 1
			}
		},
		{
			"Id": "M0024",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 555999,
				"ConditionId": "sled"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0025",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.21e22,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0026",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0027",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 993322,
				"ConditionId": "scribe"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0028",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4200000,
				"ConditionId": "sled"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0029",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 181,
				"ConditionId": "papyrus"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m07",
				"Value": 1
			}
		},
		{
			"Id": "M0030",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 550,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0031",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 25000000,
				"ConditionId": "sled"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0032",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.42e27,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0033",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 237000000000000,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0034",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 66600000,
				"ConditionId": "sled"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0035",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0036",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 181000,
				"ConditionId": "papyrus"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m08",
				"Value": 1
			}
		},
		{
			"Id": "M0037",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 333,
				"ConditionId": "quarry"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0038",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 7870000,
				"ConditionId": "papyrus"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0039",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.33e35,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0040",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0041",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 950000000000000000,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0042",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 88800000,
				"ConditionId": "quarry"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m09",
				"Value": 1
			}
		},
		{
			"Id": "M0043",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 45400000,
				"ConditionId": "papyrus"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0044",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.58e34,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0045",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0046",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.5e18,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0047",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 74,
				"ConditionId": "relief"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m10",
				"Value": 1
			}
		},
		{
			"Id": "M0048",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 333000000,
				"ConditionId": "quarry"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0049",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 37373,
				"ConditionId": "relief"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0050",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0051",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.19e44,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0052",
			"Rank": 1,
			"Condition": {
				"ConditionType": "IndustryUnlocked",
				"Threshold": 1,
				"ConditionId": "mourning"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0053",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 666000000,
				"ConditionId": "quarry"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0054",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e28,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m11",
				"Value": 1
			}
		},
		{
			"Id": "M0055",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0056",
			"Rank": 1,
			"Condition": {
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 4,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0057",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 33660000,
				"ConditionId": "relief"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0058",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 23,
				"ConditionId": "obelisk"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0059",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 3330000,
				"ConditionId": "mummy"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0060",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0061",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.27e50,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m12",
				"Value": 1
			}
		},
		{
			"Id": "M0062",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 144000000,
				"ConditionId": "relief"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0063",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.88e9,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0064",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 222330000,
				"ConditionId": "obelisk"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0065",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 340000000,
				"ConditionId": "relief"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0066",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0067",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2350000,
				"ConditionId": "mummy"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0068",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e35,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0069",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1330000000,
				"ConditionId": "obelisk"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0070",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 22,
				"ConditionId": "priest"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m13",
				"Value": 1
			}
		},
		{
			"Id": "M0071",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 22100000,
				"ConditionId": "mummy"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0072",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0073",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2233000000,
				"ConditionId": "obelisk"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0074",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.88e12,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0075",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 777888,
				"ConditionId": "priest"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0076",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 48900000,
				"ConditionId": "mummy"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0077",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 33,
				"ConditionId": "pectoral"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m14",
				"Value": 1
			}
		},
		{
			"Id": "M0078",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0079",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 3330000000,
				"ConditionId": "obelisk"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0080",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 737000000,
				"ConditionId": "priest"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0081",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.21e61,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0082",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 161000000,
				"ConditionId": "pectoral"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0083",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 24,
				"ConditionId": "sphinx"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m15",
				"Value": 1
			}
		},
		{
			"Id": "M0084",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0085",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 313000000,
				"ConditionId": "pectoral"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0086",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 90000,
				"ConditionId": "sphinx"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0087",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.08e22,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0088",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1780000000,
				"ConditionId": "priest"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m16",
				"Value": 1
			}
		},
		{
			"Id": "M0089",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 22110000,
				"ConditionId": "sphinx"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0090",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0091",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 383,
				"ConditionId": "sarcophagus"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0092",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.99e50,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0093",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4420000000,
				"ConditionId": "sphinx"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0094",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 120000,
				"ConditionId": "sarcophagus"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0095",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.22e74,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m17",
				"Value": 1
			}
		},
		{
			"Id": "M0096",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0097",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 97000000,
				"ConditionId": "sarcophagus"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0098",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 533,
				"ConditionId": "temple"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0099",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.23e33,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0100",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 8880000000,
				"ConditionId": "sphinx"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0101",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 747000000,
				"ConditionId": "sarcophagus"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0102",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0103",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 77000,
				"ConditionId": "temple"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0104",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 12600000000,
				"ConditionId": "sphinx"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0105",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.3e59,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0106",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1470000000,
				"ConditionId": "sarcophagus"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0107",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e75,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0108",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0109",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2220000000,
				"ConditionId": "temple"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0110",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.21e36,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0111",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 15800000000,
				"ConditionId": "sphinx"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0112",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 10,
				"ConditionId": "cat"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m18",
				"Value": 1
			}
		},
		{
			"Id": "M0113",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 66,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0114",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0115",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 5000,
				"ConditionId": "cat"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0116",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4440000000,
				"ConditionId": "temple"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0117",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.44e81,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0118",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.11e65,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0119",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 50500000,
				"ConditionId": "cat"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0120",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0121",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 666999,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0122",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.27e50,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0123",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 7770000000,
				"ConditionId": "temple"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0124",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1550000000,
				"ConditionId": "cat"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0125",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 966000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0126",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0127",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 10000000000,
				"ConditionId": "temple"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0128",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 3770000000,
				"ConditionId": "cat"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0129",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.99e92,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m19",
				"Value": 1
			}
		},
		{
			"Id": "M0130",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.44e68,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0131",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 3330000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0132",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0133",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 423,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0134",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6060000000,
				"ConditionId": "cat"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0135",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6660000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0136",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.34e57,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0137",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 235000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0138",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0139",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 8000000000,
				"ConditionId": "cat"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0140",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.01e77,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0141",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.42e98,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0142",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m20",
				"Value": 1
			}
		},
		{
			"Id": "M0145",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 346000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0144",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0143",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 9330000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0146",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 666999,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0147",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 3030000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0148",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.82e69,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0149",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 17100000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0150",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0151",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2550000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0152",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.2e89,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0153",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e101,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0154",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6060000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0155",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 33300000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0156",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0157",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 5540000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0158",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 13300000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0159",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.21e75,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0160",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e104,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0161",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 8900000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0162",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0163",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.1e93,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0164",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 55500000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0165",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e79,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0166",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.5e107,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0167",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 20000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0168",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0169",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.43e80,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0170",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 123000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0171",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e98,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0172",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 30000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0173",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.69e111,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0174",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 60000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0175",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.44e83,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0176",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 200000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0177",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.3e102,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0178",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 60000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0179",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.4e115,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0180",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 100000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0181",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.2e86,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0182",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 430000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0183",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.2e105,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0184",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 125000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0185",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.5e119,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0186",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 200000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0187",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.2e89,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0188",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 900000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0189",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.23e109,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0190",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 240000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0191",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e123,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0192",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 400000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0193",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.5e92,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0194",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1750000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0195",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.7e112,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0196",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 500000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0197",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.6e126,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0198",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 900000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0199",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.5e95,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0200",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4000000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0201",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.7e115,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0202",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1000000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0203",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.6e131,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0204",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1600000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0205",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.5e98,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0206",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.7e119,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0207",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2000000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0208",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.6e134,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0209",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 3000000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0210",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 15000000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0211",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.7e122,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0212",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4000000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0213",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.6e139,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0214",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6000000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0215",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.78e104,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0216",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.7e126,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0217",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 8000000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0218",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.6e142,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0219",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 18000000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0220",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 60000000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0221",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.7e129,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0222",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 15000000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0223",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.6e147,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0224",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 40000000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0225",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.5e110,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0226",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.7e133,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0227",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 30000000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0228",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.6e151,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0229",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 90000000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0230",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.5e113,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0231",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.7e136,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0232",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 60000000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0233",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.6e155,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0234",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 160000000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0235",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.5e116,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0236",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.7e140,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0237",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 120000000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0238",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.6e158,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0239",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 400000000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0240",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1000000000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0241",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.7e143,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0242",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 450000000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0243",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.6e171,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0244",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6000000000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0245",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.5e134,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0246",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.7e164,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0247",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 25000000000000000,
				"ConditionId": "deity"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0248",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.6e194,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0249",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 400000000000000000,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0250",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.5e157,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		}
	],
	"OfferPools": [
		{
			"SegmentId": "LteSegment",
			"OfferType": "Permanent",
			"ShowTakeover": false,
			"OfferDataList": [
				{
					"ItemId": "t07_lte_starter",
					"Duration": 0
				}
			]
		},
		{
			"SegmentId": "LteSegment",
			"OfferType": "RankUp",
			"ShowTakeover": true,
			"OfferDataList": [
				{
					"ItemId": "t04_lte_rank4",
					"Duration": 0
				},
				{
					"ItemId": "t06_lte_rank7",
					"Duration": 0
				},
				{
					"ItemId": "t08_lte_rank10",
					"Duration": 0
				},
				{
					"ItemId": "t09_lte_rank13",
					"Duration": 0
				},
				{
					"ItemId": "t08_lte_rank16",
					"Duration": 0
				},
				{
					"ItemId": "t09_lte_rank19",
					"Duration": 0
				},
				{
					"ItemId": "t10_lte_rank22",
					"Duration": 0
				},
				{
					"ItemId": "t11_lte_rank24",
					"Duration": 0
				},
				{
					"ItemId": "t15_lte_rank25",
					"Duration": 0
				}
			]
		}
	],
	"Promotions": [],
	"Ranks": [
		{
			"Rank": "1",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "0",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 0.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 0.6,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 1,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "2",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "4",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 0.6,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 0.7,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 1,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "3",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "4",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 0.8,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 0.8,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 2,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "4",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "5",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 1,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 3,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "5",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "5",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 1.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1.1,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 4,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "6",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "6",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 1.5,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1.3,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 5,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "7",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 1.9,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1.5,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 6,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "8",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 2.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1.7,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 7,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "9",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "5",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 2.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1.9,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 8,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "10",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "5",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 2.7,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2.1,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 9,
			"AirDropScience": 20,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "11",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 3,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2.3,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 10,
			"AirDropScience": 20,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "12",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "5",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 3.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2.5,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 11,
			"AirDropScience": 20,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "13",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 3.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2.7,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 12,
			"AirDropScience": 20,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "14",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 3.7,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2.9,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 13,
			"AirDropScience": 20,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "15",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.1,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 14,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "16",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "6",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.3,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 15,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 17,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "9",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.5,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 16,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 18,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4.6,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.7,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 17,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 19,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "9",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": "4.8",
			"PremiumGachaMultiplier": "1",
			"NormalGachaMultiplierScience": "3.9",
			"PremiumGachaMultiplierScience": "1",
			"GachaMultiplierTrophy": "18",
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 20,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": "4.9",
			"PremiumGachaMultiplier": "1",
			"NormalGachaMultiplierScience": "4.1",
			"PremiumGachaMultiplierScience": "1",
			"GachaMultiplierTrophy": "19",
			"AirDropScience": 40,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 21,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": "4.3",
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": "20",
			"AirDropScience": 40,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 22,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.1,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 4.5,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 22,
			"AirDropScience": 40,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 23,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "10",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 4.7,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 24,
			"AirDropScience": 40,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 24,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.3,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 4.9,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 26,
			"AirDropScience": 40,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 25,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "10",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 5,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 28,
			"AirDropScience": 50,
			"AirDropRankUpCoolDown": 60
		}
	],
	"ResearcherRankCosts": [
		{
			"Rarity": "Common",
			"Quantity": [
				9999
			],
			"Science": [
				999999
			]
		},
		{
			"Rarity": "Rare",
			"Quantity": [
				9999
			],
			"Science": [
				999999
			]
		},
		{
			"Rarity": "Epic",
			"Quantity": [
				9999
			],
			"Science": [
				999999
			]
		},
		{
			"Rarity": "Supreme",
			"Quantity": [
				9999
			],
			"Science": [
				999999
			]
		},
		{
			"Rarity": "LteCommon",
			"Quantity": [
				5,
				10,
				20,
				50,
				100,
				200,
				400,
				800
			],
			"Science": [
				100,
				200,
				300,
				400,
				800,
				2000,
				4000,
				8000
			]
		},
		{
			"Rarity": "LteRare",
			"Quantity": [
				5,
				10,
				20,
				50,
				100,
				200
			],
			"Science": [
				250,
				500,
				1000,
				2500,
				5000,
				10000
			]
		}
	],
	"Researchers": [
		{
			"Id": "EGY001",
			"Name": "Van Gobby",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"builder"
			],
			"ExpoMultiplier": 1,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 1,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY022",
			"Name": "As You Hitch",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"limestone"
			],
			"ExpoMultiplier": 2,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 3,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY002",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"sled"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 5,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY003",
			"Name": "Village Meeple",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"quarry"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 8,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY004",
			"Name": "Princess Hightower",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"obelisk"
			],
			"ExpoMultiplier": 5,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 11,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY005",
			"Name": "Herbert von Rosenbear",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"sphinx"
			],
			"ExpoMultiplier": 6,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 14,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY006",
			"Name": "Howlmont",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"pyramid"
			],
			"ExpoMultiplier": 7,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 18,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY007",
			"Name": "Full Metal Paulo",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"scribe"
			],
			"ExpoMultiplier": 2,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 4,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY008",
			"Name": "MacDeath",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"papyrus"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 6,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY023",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"relief"
			],
			"ExpoMultiplier": 6,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 9,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY009",
			"Name": "Moon Cloud",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"priest"
			],
			"ExpoMultiplier": 8,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 12,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY010",
			"Name": "Screamin Moiraine",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"temple"
			],
			"ExpoMultiplier": 10,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 16,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY011",
			"Name": "Scamdalf",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"prophet"
			],
			"ExpoMultiplier": 12,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 20,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY012",
			"Name": "Patsy M. Python, Esq.",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"mummy"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 11,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY024",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"pectoral"
			],
			"ExpoMultiplier": 6,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 13,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY013",
			"Name": "Dark Tarth",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"sarcophagus"
			],
			"ExpoMultiplier": 9,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 15,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY014",
			"Name": "God of Warwolf",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"cat"
			],
			"ExpoMultiplier": 12,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 18,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY015",
			"Name": "Way of Saphira",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"deity"
			],
			"ExpoMultiplier": 15,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 22,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY016",
			"Name": "Chicken Bladey",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"tool"
			],
			"ExpoMultiplier": 1.5,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 1,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY017",
			"Name": "Los Polos Leghorn",
			"ModType": "GeneratorCritChance",
			"TargetIds": [
				"building"
			],
			"ExpoMultiplier": 0.0075,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0.005,
			"BasePower": 0.005,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 2,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY025",
			"ModType": "GeneratorCritPowerMult",
			"TargetIds": [
				"building"
			],
			"ExpoMultiplier": 2,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 6,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY018",
			"Name": "Scarlett Goodwitch",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"hieroglyphic"
			],
			"ExpoMultiplier": 2.5,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 5,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY019",
			"Name": "Shaqdini",
			"ModType": "GeneratorCritChance",
			"TargetIds": [
				"learning"
			],
			"ExpoMultiplier": 0.0075,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0.005,
			"BasePower": 0.005,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 7,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY026",
			"ModType": "GeneratorCritPowerMult",
			"TargetIds": [
				"learning"
			],
			"ExpoMultiplier": 2,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 9,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY020",
			"Name": "Arthur Omensword",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"urn"
			],
			"ExpoMultiplier": 3.5,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 12,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY021",
			"Name": "Joan of Stark",
			"ModType": "GeneratorCritChance",
			"TargetIds": [
				"mourning"
			],
			"ExpoMultiplier": 0.0075,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0.005,
			"BasePower": 0.005,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 13,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY027",
			"ModType": "GeneratorCritPowerMult",
			"TargetIds": [
				"mourning"
			],
			"ExpoMultiplier": 2,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 14,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY028",
			"ModType": "GeneratorPayoutMultiplier",
			"TargetIds": [
				"building, learning, mourning"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 10,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		}
	],
	"Resources": [
		{
			"Id": "tool",
			"Singular": "Tool",
			"Plural": "Tool",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "hieroglyphic",
			"Singular": "Hieroglyphic",
			"Plural": "Hieroglyphics",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "urn",
			"Singular": "Urn",
			"Plural": "Urns",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "builder",
			"Singular": "Builder",
			"Plural": "Builders",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "limestone",
			"Singular": "Limestone",
			"Plural": "Limestones",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "sled",
			"Singular": "Sled",
			"Plural": "Sleds",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "quarry",
			"Singular": "Quarry",
			"Plural": "Quarries",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "obelisk",
			"Singular": "Obelisk",
			"Plural": "Obelisks",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "sphinx",
			"Singular": "Sphinx",
			"Plural": "Sphinxes",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "pyramid",
			"Singular": "Pyramid",
			"Plural": "Pyramids",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "scribe",
			"Singular": "Scribe",
			"Plural": "Scribes",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "papyrus",
			"Singular": "Papyrus",
			"Plural": "Papyruses",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "relief",
			"Singular": "Relief",
			"Plural": "Reliefs",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "priest",
			"Singular": "Priest",
			"Plural": "Priests",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "temple",
			"Singular": "Temple",
			"Plural": "Temples",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "prophet",
			"Singular": "Prophet",
			"Plural": "Prophets",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "mummy",
			"Singular": "Mummy",
			"Plural": "Mummies",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "pectoral",
			"Singular": "Pectoral",
			"Plural": "Pectorals",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "sarcophagus",
			"Singular": "Sarcophagus",
			"Plural": "Sarcophaguses",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "cat",
			"Singular": "Cat",
			"Plural": "Cats",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "deity",
			"Singular": "Deity",
			"Plural": "Deities",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "darkscience",
			"Singular": "Dark Science",
			"Plural": "Dark Science",
			"CurrencyCode": "SC",
			"Resettable": false,
			"SharedData": false
		},
		{
			"Id": "comrade",
			"Singular": "Comrade",
			"Plural": "Comrades",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "comradegenerator",
			"Singular": "Comrade",
			"Plural": "Comrades",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "gold",
			"Singular": "Gold",
			"Plural": "Gold",
			"CurrencyCode": "GO",
			"Resettable": false,
			"SharedData": true
		},
		{
			"Id": "trophy",
			"Singular": "Trophy",
			"Plural": "Trophies",
			"StartingQty": 0,
			"Resettable": false,
			"SharedData": false
		},
		{
			"Id": "timehack_1",
			"Singular": "Basic Warp",
			"Plural": "Basic Warps",
			"CurrencyCode": "TH",
			"Resettable": false,
			"SharedData": true
		},
		{
			"Id": "timehack_4",
			"Singular": "Super Warp",
			"Plural": "Super Warps",
			"CurrencyCode": "TH",
			"Resettable": false,
			"SharedData": true
		},
		{
			"Id": "timehack_24",
			"Singular": "Elite Warp",
			"Plural": "Elite Warps",
			"CurrencyCode": "TH",
			"Resettable": false,
			"SharedData": true
		},
		{
			"Id": "specops_point",
			"Singular": "SpecialOps Point",
			"Plural": "SpecialOps Points",
			"StartingQty": 0,
			"Resettable": false,
			"SharedData": false
		},
		{
			"Id": "scientist",
			"Singular": "Science",
			"Plural": "Science",
			"Resettable": false,
			"SharedData": false
		}
	],
	"Segments": [
		{
			"Id": "LteSegment",
			"Priority": 1,
			"Triggers": [
				{
					"Type": "Rank",
					"Operator": ">=",
					"Value": 1
				}
			]
		}
	],
	"Store": [
		{
			"Name": "Bit O'Gold",
			"InternalId": "t02_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 199,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 160,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold1\"}"
		},
		{
			"Name": "Lot O'Gold",
			"InternalId": "t05_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 499,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 500,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold2\"}"
		},
		{
			"Name": "Tonne O'Gold",
			"InternalId": "t10_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 999,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 1200,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold3\",\"popular\":\"true\"}"
		},
		{
			"Name": "Bucket O'Gold",
			"InternalId": "t20_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 1999,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 2500,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold4\"}"
		},
		{
			"Name": "Barrel O'Gold",
			"InternalId": "t50_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 4999,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 6500,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold5\"}"
		},
		{
			"Name": "Wheels O'Gold",
			"InternalId": "t60_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 9999,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 14000,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold6\",\"bestValue\":\"true\"}"
		},
		{
			"Name": "Discovery Pack",
			"InternalId": "darkscience_1000",
			"ItemClass": "VirtualCurrencyScience",
			"Price": 50,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 1000,
					"RewardId": "SC"
				}
			],
			"CustomData": "{\"icon\":\"vc-science1\",\"topUp\":\"true\"}"
		},
		{
			"Name": "Wise Pack",
			"InternalId": "darkscience_5000",
			"ItemClass": "VirtualCurrencyScience",
			"Price": 200,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 5000,
					"RewardId": "SC"
				}
			],
			"CustomData": "{\"icon\":\"vc-science2\"}"
		},
		{
			"Name": "Brilliant Pack",
			"InternalId": "darkscience_25000",
			"ItemClass": "VirtualCurrencyScience",
			"Price": 800,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 25000,
					"RewardId": "SC"
				}
			],
			"CustomData": "{\"icon\":\"vc-science3\",\"bestValue\":\"true\"}"
		},
		{
			"Name": "Titanium Capsule",
			"InternalId": "gacha_titanium",
			"ItemClass": "Gacha",
			"Price": 750,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 1,
					"RewardId": "titanium"
				}
			],
			"CustomData": "{\"icon\":\"ga-titanium\"}"
		},
		{
			"Name": "Skip 1 Hour!",
			"InternalId": "timehack_1",
			"ItemClass": "Experiment",
			"Price": 50,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "Experiment",
					"Value": 1,
					"RewardId": "EX167"
				}
			],
			"CustomData": "{\"rarity\":\"Rare\"}"
		},
		{
			"Name": "Skip 4 Hours!",
			"InternalId": "timehack_4",
			"ItemClass": "Experiment",
			"Price": 150,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "Experiment",
					"Value": 1,
					"RewardId": "EX164"
				}
			],
			"CustomData": "{\"rarity\":\"Epic\"}"
		},
		{
			"Name": "Skip 1 Day!",
			"InternalId": "timehack_24",
			"ItemClass": "Experiment",
			"Price": 750,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "Experiment",
					"Value": 1,
					"RewardId": "EX165"
				}
			],
			"CustomData": "{\"rarity\":\"Supreme\"}"
		},
		{
			"Name": "Event Starter Pack",
			"InternalId": "t07_lte_starter",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 699,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 1,
					"RewardId": "titanium"
				},
				{
					"Reward": "Resources",
					"Value": 100,
					"RewardId": "gold"
				},
				{
					"Reward": "Resources",
					"Value": 2500,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "Egypt",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 4 Bundle",
			"InternalId": "t04_lte_rank4",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 399,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 20,
					"RewardId": "EGY016"
				},
				{
					"Reward": "Researcher",
					"Value": 100,
					"RewardId": "EGY002"
				},
				{
					"Reward": "Resources",
					"Value": 1000,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "Egypt",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 7 Bundle",
			"InternalId": "t06_lte_rank7",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 599,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 30,
					"RewardId": "EGY018"
				},
				{
					"Reward": "Researcher",
					"Value": 200,
					"RewardId": "EGY023"
				},
				{
					"Reward": "Resources",
					"Value": 2000,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "Egypt",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 10 Bundle",
			"InternalId": "t08_lte_rank10",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 799,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 50,
					"RewardId": "EGY028"
				},
				{
					"Reward": "Researcher",
					"Value": 300,
					"RewardId": "EGY009"
				},
				{
					"Reward": "Resources",
					"Value": 3000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 2,
					"RewardId": "timehack_1"
				}
			],
			"BundleTheme": "Egypt",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 13 Bundle",
			"InternalId": "t09_lte_rank13",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 899,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 1,
					"RewardId": "tech"
				},
				{
					"Reward": "Resources",
					"Value": 5000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 4,
					"RewardId": "timehack_1"
				},
				{
					"Reward": "Resources",
					"Value": 1,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "Egypt",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 16 Bundle",
			"InternalId": "t08_lte_rank16",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 799,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 100,
					"RewardId": "EGY020"
				},
				{
					"Reward": "Researcher",
					"Value": 500,
					"RewardId": "EGY010"
				},
				{
					"Reward": "Resources",
					"Value": 5000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 1,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "Egypt",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 19 Bundle",
			"InternalId": "t09_lte_rank19",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 899,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 1,
					"RewardId": "tech"
				},
				{
					"Reward": "Resources",
					"Value": 2,
					"RewardId": "timehack_4"
				},
				{
					"Reward": "Researcher",
					"Value": 500,
					"RewardId": "EGY013"
				},
				{
					"Reward": "Resources",
					"Value": 6000,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "Egypt",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 22 Bundle",
			"InternalId": "t10_lte_rank22",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 999,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 1,
					"RewardId": "tech"
				},
				{
					"Reward": "Resources",
					"Value": 10000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 2,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "Egypt",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 24 Bundle",
			"InternalId": "t11_lte_rank24",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 1099,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 150,
					"RewardId": "EGY027"
				},
				{
					"Reward": "Researcher",
					"Value": 700,
					"RewardId": "EGY015"
				},
				{
					"Reward": "Resources",
					"Value": 10000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 3,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "Egypt",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 25 Bundle",
			"InternalId": "t15_lte_rank25",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 1499,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 3,
					"RewardId": "tech"
				},
				{
					"Reward": "Resources",
					"Value": 500,
					"RewardId": "gold"
				},
				{
					"Reward": "Resources",
					"Value": 20000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 6,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "Egypt",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		}
	],
	"SupremePassConfig": {
		"NumExtraFreeGachaCapsule": 2,
		"PropagandaAdsRemoved": true,
		"SpecOpsTimeReduction": 4,
		"NumExtraSpecOpsSlots": 1,
		"NumPerks": 6,
		"SupremePassStoreItemId": "t10_supremepass",
		"PurchaseTierCost": 250
	},
	"Trades": [
		{
			"Resource": "tool",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 1,
			"MaxLevel": 149
		},
		{
			"Resource": "hieroglyphic",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 2,
			"MaxLevel": 149
		},
		{
			"Resource": "urn",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 3,
			"MaxLevel": 149
		}
	]
};

DATA["music-bal-6"] = {
	"Ads": [
		{
			"Id": "AD011",
			"AdType": "Industry",
			"Name": "Propaganda Boost",
			"Description": "Applies a x2 payout to all industries",
			"ViewLimit": 3,
			"ResetType": "Now",
			"Rewards": [
				{
					"Reward": "Experiment",
					"RewardId": "EXAD6",
					"Value": 1
				}
			]
		},
		{
			"Id": "AD012",
			"AdType": "Tool",
			"Name": "Air Drop",
			"ViewLimit": 1,
			"ResetType": "Now",
			"Rewards": [
				{
					"Reward": "None"
				}
			]
		}
	],
	"AirDrops": [
		{
			"Id": 10001,
			"AirDropRewardType": "CoreResource",
			"IsAd": false,
			"IsAdSkippable": false,
			"Weight": 15,
			"MaxAdsPerInterval": -1,
			"RewardCalculation": {
				"A": 1800,
				"B": 5,
				"C": 0.125,
				"D": 25
			}
		},
		{
			"Id": 10002,
			"AirDropRewardType": "PrimaryCurrency",
			"IsAd": false,
			"IsAdSkippable": false,
			"Weight": 10,
			"MaxAdsPerInterval": -1,
			"RewardCalculation": {
				"A": 450,
				"B": 1.55,
				"C": 0.4,
				"D": 10
			}
		},
		{
			"Id": 10003,
			"AirDropRewardType": "PrimaryCurrency",
			"IsAd": true,
			"IsAdSkippable": false,
			"Weight": 50,
			"MaxAdsPerInterval": 3,
			"RewardCalculation": {
				"A": 7500,
				"B": 1.7,
				"C": 0.2,
				"D": -650
			}
		},
		{
			"Id": 10004,
			"AirDropRewardType": "SoftCurrency",
			"IsAd": true,
			"IsAdSkippable": false,
			"Weight": 25,
			"MaxAdsPerInterval": 2,
			"RewardCalculation": {
				"A": 550,
				"B": 1.01,
				"C": 1.001,
				"D": 65
			}
		}
	],
	"AirDropsConfig": [
		{
			"AirDropBaseInterval": 50,
			"AirDropIntervalVariance": 0.1,
			"AirDropIntervalMultiplier": 1.2,
			"ClaimCountResetInterval": 5400,
			"AdCountResetInterval": 43200,
			"StartupDelay": 30,
			"StartCondition": {
				"ConditionType": "RankReached",
				"Threshold": 2
			}
		}
	],
	"CardStoreCost": [
		{
			"Rarity": "Common",
			"ScienceCost": 0,
			"GoldCost": 0,
			"AdWatchStackModifier": 0
		},
		{
			"Rarity": "Rare",
			"ScienceCost": 0,
			"GoldCost": 0,
			"AdWatchStackModifier": 0
		},
		{
			"Rarity": "Epic",
			"ScienceCost": 0,
			"GoldCost": 0,
			"AdWatchStackModifier": 0
		},
		{
			"Rarity": "Supreme",
			"ScienceCost": 0,
			"GoldCost": 0,
			"AdWatchStackModifier": 0
		},
		{
			"Rarity": "LteCommon",
			"ScienceCost": 30,
			"GoldCost": 2,
			"AdWatchStackModifier": 0.25
		},
		{
			"Rarity": "LteRare",
			"ScienceCost": 250,
			"GoldCost": 15,
			"AdWatchStackModifier": 0.1
		}
	],
	"CardStoreStackSize": [
		{
			"Rank": 1,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 10,
			"LteRare": 2
		},
		{
			"Rank": 2,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 10,
			"LteRare": 2
		},
		{
			"Rank": 3,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 10,
			"LteRare": 2
		},
		{
			"Rank": 4,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 20,
			"LteRare": 3
		},
		{
			"Rank": 5,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 20,
			"LteRare": 3
		},
		{
			"Rank": 6,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 20,
			"LteRare": 3
		},
		{
			"Rank": 7,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 20,
			"LteRare": 3
		},
		{
			"Rank": 8,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 30,
			"LteRare": 4
		},
		{
			"Rank": 9,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 30,
			"LteRare": 4
		},
		{
			"Rank": 10,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 30,
			"LteRare": 4
		},
		{
			"Rank": 11,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 30,
			"LteRare": 4
		},
		{
			"Rank": 12,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 30,
			"LteRare": 5
		},
		{
			"Rank": 13,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 5
		},
		{
			"Rank": 14,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 5
		},
		{
			"Rank": 15,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 5
		},
		{
			"Rank": 16,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 6
		},
		{
			"Rank": 17,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 6
		},
		{
			"Rank": 18,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 6
		},
		{
			"Rank": 19,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 40,
			"LteRare": 6
		},
		{
			"Rank": 20,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 21,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 22,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 23,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 24,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 25,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		}
	],
	"CardToScienceConversion": {
		"Common": 0,
		"Rare": 0,
		"Epic": 0,
		"Supreme": 0,
		"LteCommon": 15,
		"LteRare": 125
	},
	"CrossPromoTitles": [
		{
			"Id": "adcap",
			"IconId": "icon-adcap",
			"TitleSpriteId": "art-adcap-header",
			"BackgroundSpriteId": "art-adcap-header",
			"LinkedAppId_IOS": "927006017",
			"LinkedAppId_Android": "com.kongregate.mobile.adventurecapitalist.google"
		},
		{
			"Id": "adcom",
			"IconId": "icon-adcomm",
			"TitleSpriteId": "art-adcom-header",
			"BackgroundSpriteId": "art-adcom-background",
			"LinkedAppId_IOS": "1225683141",
			"LinkedAppId_Android": "com.kongregate.mobile.adventurecommunist.google"
		}
	],
	"DailyDealSlotChance": [
		{
			"Slot": 1,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 0.5,
			"LteRare": 0.5,
			"GoldCostChance": 0,
			"AdWatchChance": 1
		},
		{
			"Slot": 2,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 0.5,
			"LteRare": 0.5,
			"GoldCostChance": 0,
			"AdWatchChance": 0
		},
		{
			"Slot": 3,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 0,
			"LteRare": 1,
			"GoldCostChance": 1,
			"AdWatchChance": 0
		}
	],
	"DropDownLegends": [
		{
			"TriggerTypes": "None",
			"SegmentTypes": "NumberOfPurchases",
			"": [
				{
					"Operators": ">"
				}
			],
			"Tags": "RealMoneyPurchase",
			"Item Classes": "Experiment",
			"AdTypes": "Industry",
			"RewardTypes": "None",
			"ExperimentRewardTypes": "None",
			"ExperimentTypes": "None",
			"ResearcherRarities": "Common"
		},
		{
			"TriggerTypes": "SessionCount",
			"SegmentTypes": "TotalSpent",
			"": [
				{
					"Operators": "<"
				}
			],
			"Tags": "Bundle",
			"Item Classes": "VirtualCurrencyGold",
			"AdTypes": "AdHoc",
			"RewardTypes": "Resources",
			"ExperimentRewardTypes": "PayoutMultiplier",
			"ExperimentTypes": "Industry",
			"ResearcherRarities": "Uncommon"
		},
		{
			"TriggerTypes": "RankUp",
			"SegmentTypes": "DaysSinceLastSpend",
			"": [
				{
					"Operators": "=="
				}
			],
			"Tags": "GoldPurchase",
			"Item Classes": "VirtualCurrencyScience",
			"AdTypes": "Capsule",
			"RewardTypes": "Gacha",
			"ExperimentRewardTypes": "SpeedMultiplier",
			"ExperimentTypes": "State",
			"ResearcherRarities": "Rare"
		},
		{
			"TriggerTypes": "BundleExpired",
			"SegmentTypes": "Rank",
			"": [
				{
					"Operators": ">="
				}
			],
			"Item Classes": "VirtualCurrencyBundle",
			"AdTypes": "Comrade",
			"RewardTypes": "Experiment",
			"ExperimentRewardTypes": "Autoclick",
			"ExperimentTypes": "Tool",
			"ResearcherRarities": "Legendary"
		},
		{
			"TriggerTypes": "UTCTime",
			"": [
				{
					"Operators": "<="
				}
			],
			"AdTypes": "Tool",
			"RewardTypes": "GeneratorBaseOutput",
			"ExperimentRewardTypes": "ResourceSurge",
			"ExperimentTypes": "Trial"
		},
		{
			"TriggerTypes": "MedalCount",
			"RewardTypes": "VirtualCurrency",
			"ExperimentRewardTypes": "ResourceQuantity",
			"ExperimentTypes": "Ad"
		},
		{
			"TriggerTypes": "DaysSinceLastSpend",
			"RewardTypes": "Researcher",
			"ExperimentRewardTypes": "GeneratorBaseOutput"
		}
	],
	"Experiments": [
		{
			"Id": "EX164",
			"Name": "Basic Time Hack",
			"IconKey": "timehack_4",
			"Lifespan": "OneTime",
			"Lifetime": 1,
			"Type": "None",
			"Rewards": [
				{
					"Type": "ResourceSurge",
					"AllResources": true,
					"Value": 14400,
					"Description": "Resource Surge! Get 4 hours' worth instantly!"
				}
			],
			"Description": "Resource Surge! Get 4 hours' worth instantly!"
		},
		{
			"Id": "EX165",
			"Name": "Mega Time Hack",
			"IconKey": "timehack_24",
			"Lifespan": "OneTime",
			"Lifetime": 1,
			"Type": "None",
			"Rewards": [
				{
					"Type": "ResourceSurge",
					"AllResources": true,
					"Value": 86400,
					"Description": "Resource Surge! Get 24 hours' worth instantly!"
				}
			],
			"Description": "Resource Surge! Get 24 hours' worth instantly!"
		},
		{
			"Id": "EX167",
			"Name": "Simple Time Hack",
			"IconKey": "timehack_1",
			"Lifespan": "OneTime",
			"Lifetime": 1,
			"Type": "None",
			"Rewards": [
				{
					"Type": "ResourceSurge",
					"AllResources": true,
					"Value": 3600,
					"Description": "Resource Surge! Get 1 hours' worth instantly!"
				}
			],
			"Description": "Resource Surge! Get 1 hours' worth instantly!"
		},
		{
			"Id": "EX210",
			"Name": "Double Time",
			"IconKey": "propaganda",
			"Lifespan": "Permanent",
			"Lifetime": 0,
			"Type": "Ad",
			"Rewards": [
				{
					"Type": "PayoutMultiplier",
					"AllResources": true,
					"Value": 2,
					"Description": "Receive a permanent x2 speed boost to all industries!"
				}
			],
			"Description": "Receive a permanent x2 speed boost to all industries!"
		},
		{
			"Id": "EX211",
			"Name": "Quintuple Time",
			"IconKey": "propaganda",
			"Lifespan": "Permanent",
			"Lifetime": 0,
			"Type": "Ad",
			"Rewards": [
				{
					"Type": "PayoutMultiplier",
					"AllResources": true,
					"Value": 5,
					"Description": "Receive a permanent x5 speed boost to all industries!"
				}
			],
			"Description": "Receive a permanent x5 speed boost to all industries!"
		},
		{
			"Id": "EX215",
			"Name": "Long Term Propaganda",
			"IconKey": "propaganda",
			"Lifespan": "Timed",
			"Lifetime": 5184000,
			"Type": "Ad",
			"Rewards": [
				{
					"Type": "PayoutMultiplier",
					"AllResources": true,
					"Value": 5,
					"Description": "Receive a x5 speed boost to all industries for 60D!"
				}
			],
			"Description": "Receive a x5 speed boost to all industries for 60D!"
		},
		{
			"Id": "EXAD6",
			"Name": "Propaganda Boost",
			"IconKey": "propaganda",
			"Lifespan": "Timed",
			"Lifetime": 14400,
			"Type": "Ad",
			"Rewards": [
				{
					"Type": "PayoutMultiplier",
					"AllResources": true,
					"Value": 2,
					"Description": "x2 boost to all industries!"
				}
			],
			"Description": "x2 boost for 3 more hours!"
		},
		{
			"Id": "SCH2",
			"Name": "Free Gacha Capsule",
			"Lifespan": "Timed",
			"Lifetime": 7200,
			"Type": "None",
			"Rewards": [
				{
					"Type": "None",
					"AllResources": false
				}
			]
		},
		{
			"Id": "SCH3",
			"Name": "Science Air Drop Availability",
			"IconKey": "darkscience",
			"Lifespan": "Timed",
			"Lifetime": 14400,
			"Type": "None",
			"Rewards": [
				{
					"Type": "None"
				}
			]
		},
		{
			"Id": "SCH4",
			"Name": "Air Drop Session Reset",
			"IconKey": "none",
			"Lifespan": "Timed",
			"Lifetime": 14400,
			"Type": "None",
			"Rewards": [
				{
					"Type": "None"
				}
			]
		}
	],
	"FreeGachaData": {
		"TimeBetweenGachas": 7200,
		"MaxStackCount": 2
	},
	"GachaFreeCycle": [
		{
			"Cycle": [
				"plastic",
				"plastic",
				"armored",
				"plastic",
				"plastic",
				"plastic",
				"armored",
				"plastic",
				"plastic",
				"plastic",
				"armored",
				"plastic",
				"plastic",
				"plastic",
				"armored",
				"plastic",
				"plastic",
				"plastic",
				"armored",
				"plastic",
				"plastic",
				"plastic",
				"armored",
				"plastic"
			],
			"ScriptId": "sc3"
		}
	],
	"GachaGoldCycle": [
		{
			"Cycle": {
				"plastic": [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				],
				"armored": [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]
			}
		}
	],
	"GachaLootTable": [
		{
			"Id": "plastic",
			"CardWeight": 10,
			"RareWeight": -1,
			"EpicWeight": -1,
			"SupremeWeight": -1,
			"LteRareWeight": 17,
			"ScienceMin": 70,
			"ScienceMax": 80,
			"TrophyMin": 10,
			"TrophyMax": 10,
			"ChanceMultiplier": 10,
			"WeightDivider": 10,
			"Type": "Normal"
		},
		{
			"Id": "armored",
			"CardWeight": 30,
			"RareWeight": -1,
			"EpicWeight": -1,
			"SupremeWeight": -1,
			"LteRareWeight": 15,
			"ScienceMin": 140,
			"ScienceMax": 160,
			"TrophyMin": 50,
			"TrophyMax": 50,
			"ChanceMultiplier": 10,
			"WeightDivider": 10,
			"Type": "Normal"
		},
		{
			"Id": "titanium",
			"CardWeight": 200,
			"RareWeight": -1,
			"EpicWeight": -1,
			"SupremeWeight": -1,
			"LteRareWeight": 5,
			"ScienceMin": 1400,
			"ScienceMax": 1600,
			"TrophyMin": 0,
			"TrophyMax": 0,
			"ChanceMultiplier": 10,
			"WeightDivider": 10,
			"Type": "Premium"
		},
		{
			"Id": "tech",
			"CardWeight": 100,
			"RareWeight": -1,
			"EpicWeight": -1,
			"SupremeWeight": -1,
			"LteRareWeight": 1,
			"ScienceMin": 0,
			"ScienceMax": 0,
			"TrophyMin": 0,
			"TrophyMax": 0,
			"ChanceMultiplier": 10,
			"WeightDivider": 10,
			"Type": "Fixed"
		},
		{
			"Id": "sc_m01",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m02",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m03",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m04",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m05",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m06",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m07",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m08",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m09",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m10",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m11",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m12",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m13",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m14",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m15",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m16",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m17",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m18",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m19",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m20",
			"Type": "Scripted"
		},
		{
			"Id": "sc3",
			"Type": "Scripted"
		}
	],
	"GachaScripts": [
		{
			"GachaId": "sc_m01",
			"MimicGachaId": "plastic",
			"Science": 48,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "MUS001",
					"Value": 4
				}
			]
		},
		{
			"GachaId": "sc_m02",
			"MimicGachaId": "plastic",
			"Science": 47,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "MUS001",
					"Value": 4
				}
			]
		},
		{
			"GachaId": "sc_m03",
			"MimicGachaId": "plastic",
			"Science": 48,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "MUS002",
					"Value": 4
				}
			]
		},
		{
			"GachaId": "sc_m04",
			"MimicGachaId": "plastic",
			"Science": 47,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "MUS001",
					"Value": 3
				},
				{
					"Id": "MUS020",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m05",
			"MimicGachaId": "plastic",
			"Science": 48,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "MUS002",
					"Value": 4
				}
			]
		},
		{
			"GachaId": "sc_m06",
			"MimicGachaId": "plastic",
			"Science": 52,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "MUS001",
					"Value": 6
				}
			]
		},
		{
			"GachaId": "sc_m07",
			"MimicGachaId": "plastic",
			"Science": 51,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "MUS002",
					"Value": 5
				},
				{
					"Id": "MUS016",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m08",
			"MimicGachaId": "plastic",
			"Science": 72,
			"Gold": 0,
			"Trophy": 20,
			"Card": [
				{
					"Id": "MUS007",
					"Value": 7
				}
			]
		},
		{
			"GachaId": "sc_m09",
			"MimicGachaId": "plastic",
			"Science": 90,
			"Gold": 0,
			"Trophy": 30,
			"Card": [
				{
					"Id": "MUS003",
					"Value": 3
				},
				{
					"Id": "MUS002",
					"Value": 5
				},
				{
					"Id": "MUS017",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m10",
			"MimicGachaId": "plastic",
			"Science": 111,
			"Gold": 0,
			"Trophy": 40,
			"Card": [
				{
					"Id": "MUS008",
					"Value": 4
				},
				{
					"Id": "MUS007",
					"Value": 7
				},
				{
					"Id": "MUS020",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m11",
			"MimicGachaId": "plastic",
			"Science": 132,
			"Gold": 0,
			"Trophy": 50,
			"Card": [
				{
					"Id": "MUS004",
					"Value": 4
				},
				{
					"Id": "MUS008",
					"Value": 11
				}
			]
		},
		{
			"GachaId": "sc_m12",
			"MimicGachaId": "plastic",
			"Science": 150,
			"Gold": 0,
			"Trophy": 60,
			"Card": [
				{
					"Id": "MUS012",
					"Value": 7
				},
				{
					"Id": "MUS004",
					"Value": 12
				},
				{
					"Id": "MUS022",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m13",
			"MimicGachaId": "plastic",
			"Science": 167,
			"Gold": 0,
			"Trophy": 70,
			"Card": [
				{
					"Id": "MUS009",
					"Value": 6
				},
				{
					"Id": "MUS012",
					"Value": 15
				},
				{
					"Id": "MUS019",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m14",
			"MimicGachaId": "plastic",
			"Science": 183,
			"Gold": 0,
			"Trophy": 80,
			"Card": [
				{
					"Id": "MUS005",
					"Value": 8
				},
				{
					"Id": "MUS009",
					"Value": 15
				},
				{
					"Id": "MUS022",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m15",
			"MimicGachaId": "plastic",
			"Science": 198,
			"Gold": 0,
			"Trophy": 90,
			"Card": [
				{
					"Id": "MUS013",
					"Value": 4
				},
				{
					"Id": "MUS005",
					"Value": 8
				},
				{
					"Id": "MUS009",
					"Value": 13
				},
				{
					"Id": "MUS024",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m16",
			"MimicGachaId": "plastic",
			"Science": 222,
			"Gold": 0,
			"Trophy": 120,
			"Card": [
				{
					"Id": "MUS010",
					"Value": 7
				},
				{
					"Id": "MUS013",
					"Value": 9
				},
				{
					"Id": "MUS005",
					"Value": 14
				},
				{
					"Id": "MUS022",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m17",
			"MimicGachaId": "plastic",
			"Science": 234,
			"Gold": 0,
			"Trophy": 140,
			"Card": [
				{
					"Id": "MUS014",
					"Value": 8
				},
				{
					"Id": "MUS010",
					"Value": 9
				},
				{
					"Id": "MUS013",
					"Value": 15
				},
				{
					"Id": "MUS024",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m18",
			"MimicGachaId": "plastic",
			"Science": 257,
			"Gold": 0,
			"Trophy": 180,
			"Card": [
				{
					"Id": "MUS006",
					"Value": 8
				},
				{
					"Id": "MUS014",
					"Value": 12
				},
				{
					"Id": "MUS010",
					"Value": 18
				},
				{
					"Id": "MUS017",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m19",
			"MimicGachaId": "plastic",
			"Science": 268,
			"Gold": 0,
			"Trophy": 200,
			"Card": [
				{
					"Id": "MUS011",
					"Value": 9
				},
				{
					"Id": "MUS006",
					"Value": 13
				},
				{
					"Id": "MUS014",
					"Value": 17
				},
				{
					"Id": "MUS024",
					"Value": 3
				}
			]
		},
		{
			"GachaId": "sc_m20",
			"MimicGachaId": "plastic",
			"Science": 307,
			"Gold": 0,
			"Trophy": 300,
			"Card": [
				{
					"Id": "MUS015",
					"Value": 12
				},
				{
					"Id": "MUS011",
					"Value": 14
				},
				{
					"Id": "MUS006",
					"Value": 17
				},
				{
					"Id": "MUS020",
					"Value": 3
				}
			]
		},
		{
			"GachaId": "sc3",
			"MimicGachaId": "plastic",
			"Science": 50,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "MUS001",
					"Value": 5
				}
			]
		}
	],
	"GachaStackSplit": [
		{
			"Split": 2,
			"LteCommon": 8,
			"LteRare": 4
		},
		{
			"Split": 3,
			"LteCommon": 25,
			"LteRare": 25
		},
		{
			"Split": 4,
			"LteRare": 75
		}
	],
	"GeneratorObjectiveLimits": [
		{
			"GeneratorId": "flute",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "bassoon",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "violin",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "harp",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "trumpet",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "piano",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "drumkit",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "saxophone",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "keyboard",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "electricguitar",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "microphone",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "erhu",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "koto",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "peking",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "sitar",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "gramophone",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "jukebox",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "boombox",
			"MaximumObjectivesForRank": [
				999
			]
		}
	],
	"Generators": [
		{
			"Id": "comradegenerator",
			"Name": "Comrade",
			"ResourceType": "comradegenerator",
			"GeneratorType": "Automatic",
			"Generate": {
				"Resource": "comrade",
				"Qty": 1
			},
			"BaseCompletionTime": 1,
			"IncludeInAll": false,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 1
			}
		},
		{
			"Id": "flute",
			"Name": "Flute",
			"ResourceType": "flute",
			"GeneratorType": "Manual",
			"IndustryId": "western",
			"Cost": [
				{
					"Resource": "Baton",
					"Qty": "1.00E+01"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "baton",
				"Qty": 5
			},
			"BaseCompletionTime": 2,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "baton",
					"Threshold": 0
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "western",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "bassoon",
			"Name": "Bassoon",
			"ResourceType": "bassoon",
			"GeneratorType": "Manual",
			"IndustryId": "western",
			"Cost": [
				{
					"Resource": "Flute",
					"Qty": "1.00E+01"
				},
				{
					"Resource": "Baton",
					"Qty": "1.00E+04"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "flute",
				"Qty": 7
			},
			"BaseCompletionTime": 4,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "flute",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "flute",
				"Threshold": 150
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 4
			}
		},
		{
			"Id": "violin",
			"Name": "Violin",
			"ResourceType": "violin",
			"GeneratorType": "Manual",
			"IndustryId": "western",
			"Cost": [
				{
					"Resource": "Bassoon",
					"Qty": "1.00E+02"
				},
				{
					"Resource": "Baton",
					"Qty": "1.00E+12"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "bassoon",
				"Qty": 9
			},
			"BaseCompletionTime": 8,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "bassoon",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "bassoon",
				"Threshold": 25000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 6
			}
		},
		{
			"Id": "harp",
			"Name": "Harp",
			"ResourceType": "harp",
			"GeneratorType": "Manual",
			"IndustryId": "western",
			"Cost": [
				{
					"Resource": "Violin",
					"Qty": "1.00E+03"
				},
				{
					"Resource": "Baton",
					"Qty": 1e29
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "violin",
				"Qty": 11
			},
			"BaseCompletionTime": 16,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "violin",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "violin",
				"Threshold": 10000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 8
			}
		},
		{
			"Id": "trumpet",
			"Name": "Trumpet",
			"ResourceType": "trumpet",
			"GeneratorType": "Manual",
			"IndustryId": "western",
			"Cost": [
				{
					"Resource": "Harp",
					"Qty": "1.00E+05"
				},
				{
					"Resource": "Baton",
					"Qty": "1.00E+47"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "harp",
				"Qty": 13
			},
			"BaseCompletionTime": 32,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "harp",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "harp",
				"Threshold": 100000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 10
			}
		},
		{
			"Id": "piano",
			"Name": "Piano",
			"ResourceType": "piano",
			"GeneratorType": "Manual",
			"IndustryId": "western",
			"Cost": [
				{
					"Resource": "Trumpet",
					"Qty": "1.00E+07"
				},
				{
					"Resource": "Baton",
					"Qty": "1.00E+66"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "trumpet",
				"Qty": 15
			},
			"BaseCompletionTime": 64,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "trumpet",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "trumpet",
				"Threshold": 700000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 12
			}
		},
		{
			"Id": "drumkit",
			"Name": "Drum Kit",
			"ResourceType": "drumkit",
			"GeneratorType": "Manual",
			"IndustryId": "americana",
			"Cost": [
				{
					"Resource": "MusicStand",
					"Qty": "2.50E+01"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "musicstand",
				"Qty": 6
			},
			"BaseCompletionTime": 3,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "baton",
					"Threshold": 25000000000
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "americana",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 3
			}
		},
		{
			"Id": "saxophone",
			"Name": "Saxophones",
			"ResourceType": "saxophone",
			"GeneratorType": "Manual",
			"IndustryId": "americana",
			"Cost": [
				{
					"Resource": "DrumKit",
					"Qty": "1.00E+03"
				},
				{
					"Resource": "MusicStand",
					"Qty": "1.00E+09"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "drumkit",
				"Qty": 21
			},
			"BaseCompletionTime": 12,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "drumkit",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "drumkit",
				"Threshold": 200000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 6
			}
		},
		{
			"Id": "keyboard",
			"Name": "Keyboard",
			"ResourceType": "keyboard",
			"GeneratorType": "Manual",
			"IndustryId": "americana",
			"Cost": [
				{
					"Resource": "Saxophone",
					"Qty": 10000
				},
				{
					"Resource": "MusicStand",
					"Qty": "1.00E+23"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "saxophone",
				"Qty": 36
			},
			"BaseCompletionTime": 48,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "saxophone",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "saxophone",
				"Threshold": 10000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 9
			}
		},
		{
			"Id": "electricguitar",
			"Name": "Electric Guitar",
			"ResourceType": "electricguitar",
			"GeneratorType": "Manual",
			"IndustryId": "americana",
			"Cost": [
				{
					"Resource": "Keyboard",
					"Qty": 1000000
				},
				{
					"Resource": "MusicStand",
					"Qty": "1.00E+40"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "keyboard",
				"Qty": 51
			},
			"BaseCompletionTime": 192,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "keyboard",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "keyboard",
				"Threshold": 50000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 12
			}
		},
		{
			"Id": "microphone",
			"Name": "Microphone",
			"ResourceType": "microphone",
			"GeneratorType": "Manual",
			"IndustryId": "americana",
			"Cost": [
				{
					"Resource": "ElectricGuitar",
					"Qty": "1.00E+08"
				},
				{
					"Resource": "MusicStand",
					"Qty": "1.00E+58"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "electricguitar",
				"Qty": 66
			},
			"BaseCompletionTime": 768,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "electricguitar",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "electricguitar",
				"Threshold": 500000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 15
			}
		},
		{
			"Id": "erhu",
			"Name": "Erhu",
			"ResourceType": "erhu",
			"GeneratorType": "Manual",
			"IndustryId": "global",
			"Cost": [
				{
					"Resource": "SheetMusic",
					"Qty": "5.00E+01"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "sheetmusic",
				"Qty": 12
			},
			"BaseCompletionTime": 4,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "musicstand",
					"Threshold": 1000000000000
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "global",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 4
			}
		},
		{
			"Id": "koto",
			"Name": "Koto",
			"ResourceType": "koto",
			"GeneratorType": "Manual",
			"IndustryId": "global",
			"Cost": [
				{
					"Resource": "Erhu",
					"Qty": "1.00E+04"
				},
				{
					"Resource": "SheetMusic",
					"Qty": "1.00E+13"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "erhu",
				"Qty": 64
			},
			"BaseCompletionTime": 24,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "erhu",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "erhu",
				"Threshold": 10000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 8
			}
		},
		{
			"Id": "peking",
			"Name": "Peking",
			"ResourceType": "peking",
			"GeneratorType": "Manual",
			"IndustryId": "global",
			"Cost": [
				{
					"Resource": "Koto",
					"Qty": "1.00E+06"
				},
				{
					"Resource": "SheetMusic",
					"Qty": "1.00E+29"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "koto",
				"Qty": 116
			},
			"BaseCompletionTime": 144,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "koto",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "koto",
				"Threshold": 50000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 12
			}
		},
		{
			"Id": "sitar",
			"Name": "Sitar",
			"ResourceType": "sitar",
			"GeneratorType": "Manual",
			"IndustryId": "global",
			"Cost": [
				{
					"Resource": "Peking",
					"Qty": "1.00E+08"
				},
				{
					"Resource": "SheetMusic",
					"Qty": "1.00E+49"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "peking",
				"Qty": 168
			},
			"BaseCompletionTime": 864,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "peking",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "peking",
				"Threshold": 700000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 16
			}
		},
		{
			"Id": "gramophone",
			"Name": "Gramophone",
			"ResourceType": "gramophone",
			"GeneratorType": "Manual",
			"IndustryId": "invention",
			"Cost": [
				{
					"Resource": "VinylRecord",
					"Qty": 100
				},
				{
					"Resource": "Comrade",
					"Qty": 7
				}
			],
			"Generate": {
				"Resource": "vinylrecord",
				"Qty": 20
			},
			"BaseCompletionTime": 5,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "sheetmusic",
					"Threshold": 1e32
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "invention",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 5
			}
		},
		{
			"Id": "jukebox",
			"Name": "Jukebox",
			"ResourceType": "jukebox",
			"GeneratorType": "Manual",
			"IndustryId": "invention",
			"Cost": [
				{
					"Resource": "Gramophone",
					"Qty": 10000000
				},
				{
					"Resource": "VinylRecord",
					"Qty": 10000000000000000.0
				},
				{
					"Resource": "Comrade",
					"Qty": 7
				}
			],
			"Generate": {
				"Resource": "gramophone",
				"Qty": 210
			},
			"BaseCompletionTime": 60,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "gramophone",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "gramophone",
				"Threshold": 300000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 10
			}
		},
		{
			"Id": "boombox",
			"Name": "Boombox",
			"ResourceType": "boombox",
			"GeneratorType": "Manual",
			"IndustryId": "invention",
			"Cost": [
				{
					"Resource": "Jukebox",
					"Qty": 100000000
				},
				{
					"Resource": "VinylRecord",
					"Qty": 1e35
				},
				{
					"Resource": "Comrade",
					"Qty": 7
				}
			],
			"Generate": {
				"Resource": "jukebox",
				"Qty": 400
			},
			"BaseCompletionTime": 720,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "jukebox",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "jukebox",
				"Threshold": 1000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 3
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 15
			}
		}
	],
	"Industries": [
		{
			"Id": "western",
			"SortingOrder": 1,
			"VisibleConditions": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "baton"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "baton",
					"Threshold": 0
				}
			]
		},
		{
			"Id": "americana",
			"SortingOrder": 2,
			"UnlockCostResourceId": "baton",
			"UnlockCostResourceQty": 25000000000,
			"VisibleConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "western"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "baton",
					"Threshold": 0
				}
			]
		},
		{
			"Id": "global",
			"SortingOrder": 3,
			"UnlockCostResourceId": "musicstand",
			"UnlockCostResourceQty": 1000000000000,
			"VisibleConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "western"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "americana",
					"Threshold": 0
				}
			]
		},
		{
			"Id": "invention",
			"SortingOrder": 4,
			"UnlockCostResourceId": "sheetmusic",
			"UnlockCostResourceQty": 1e32,
			"VisibleConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "western"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "global",
					"Threshold": 0
				}
			]
		}
	],
	"MiscBalance": {
		"SoftCurrencyId": "darkscience",
		"PrimaryGeneratorId": "comradegenerator",
		"PrimaryResourceId": "comrade",
		"HardToSoftCurrencyConversionRatio": 20,
		"OfferwallPlatforms": "android",
		"TotalSpendIncludesLte": false,
		"DaysForRecentSpend": 26,
		"RanksToTriggerOffers": "4,7,10,13,16,19,22,25",
		"ComradeSpendWarningEnableRank": 3,
		"ReferralReward": 110
	},
	"Missions": [
		{
			"Id": "M0001",
			"Rank": 1,
			"Condition": {
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 3,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m02",
				"Value": 1
			}
		},
		{
			"Id": "M0002",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 2,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m04",
				"Value": 1
			}
		},
		{
			"Id": "M0003",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 15,
				"ConditionId": "flute"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m01",
				"Value": 1
			}
		},
		{
			"Id": "M0004",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 300,
				"ConditionId": "bassoon"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m03",
				"Value": 1
			}
		},
		{
			"Id": "M0005",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 200000000,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m05",
				"Value": 1
			}
		},
		{
			"Id": "M0006",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 10,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0007",
			"Rank": 1,
			"Condition": {
				"ConditionType": "IndustryUnlocked",
				"Threshold": 1,
				"ConditionId": "americana"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m06",
				"Value": 1
			}
		},
		{
			"Id": "M0008",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 24800,
				"ConditionId": "bassoon"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0009",
			"Rank": 1,
			"Condition": {
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 2,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0010",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 400,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0011",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 65,
				"ConditionId": "violin"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0012",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 5500,
				"ConditionId": "drumkit"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "sc_m08",
				"Value": 1
			}
		},
		{
			"Id": "M0013",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 940000000000000,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0014",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 25,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0015",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4442222,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0016",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 82800,
				"ConditionId": "violin"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0017",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 44444,
				"ConditionId": "drumkit"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0018",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 600,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0019",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.55e20,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0020",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 90,
				"ConditionId": "saxophone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0021",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4280000,
				"ConditionId": "violin"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0022",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 50,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0023",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.22e25,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0024",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7370000000000,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0025",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 10000000,
				"ConditionId": "violin"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0026",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 800,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0027",
			"Rank": 1,
			"Condition": {
				"ConditionType": "IndustryUnlocked",
				"Threshold": 1,
				"ConditionId": "global"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0028",
			"Rank": 1,
			"Condition": {
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 4,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0029",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 36363,
				"ConditionId": "harp"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0030",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 75,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0031",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 123,
				"ConditionId": "erhu"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0032",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1110000000000000000.0,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0033",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.1e34,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0034",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0035",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4500000,
				"ConditionId": "saxophone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0036",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 8580000,
				"ConditionId": "harp"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0037",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2320000000,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0038",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 100,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0039",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.55e39,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0040",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 500000,
				"ConditionId": "erhu"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0041",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 683,
				"ConditionId": "keyboard"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0042",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 75000000,
				"ConditionId": "harp"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0043",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 1200,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0044",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.66e23,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0045",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 55,
				"ConditionId": "koto"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0046",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.23e44,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0047",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 7744000,
				"ConditionId": "keyboard"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0048",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 125,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0049",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 100000,
				"ConditionId": "koto"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0050",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 333,
				"ConditionId": "trumpet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0051",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 567000000000,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0052",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.8e30,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0053",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 1400,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0054",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6000000,
				"ConditionId": "koto"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0055",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.3e51,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0056",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 24000000,
				"ConditionId": "keyboard"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0057",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 987000000000000000.0,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0058",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 150,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0059",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 280000,
				"ConditionId": "trumpet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0060",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.33e37,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0061",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 22000000,
				"ConditionId": "koto"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0062",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.5e54,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0063",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 1600,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0064",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6,
				"ConditionId": "electricguitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0065",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5e24,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0066",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 148000000,
				"ConditionId": "trumpet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0067",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e42,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0068",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 175,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0069",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 124,
				"ConditionId": "peking"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0070",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.89e59,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0071",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 68000,
				"ConditionId": "electricguitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0072",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5e27,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0073",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0074",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 428000000,
				"ConditionId": "trumpet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0075",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.8e45,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0076",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.89e62,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0077",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6900000,
				"ConditionId": "peking"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0078",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 200,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0079",
			"Rank": 1,
			"Condition": {
				"ConditionType": "IndustryUnlocked",
				"Threshold": 1,
				"ConditionId": "invention"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0080",
			"Rank": 1,
			"Condition": {
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 2,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0081",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 264000,
				"ConditionId": "electricguitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0082",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 111,
				"ConditionId": "gramophone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0083",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 2000,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0084",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9e28,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0085",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8880000,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0086",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0087",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.34e48,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0088",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 225,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0089",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 11100000,
				"ConditionId": "gramophone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0090",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 100000000,
				"ConditionId": "peking"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0091",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 171000000000,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0092",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.63e68,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0093",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 2200,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0094",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 400000000,
				"ConditionId": "electricguitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0095",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.48e32,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0096",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 250000000,
				"ConditionId": "gramophone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0097",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.22e54,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0098",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 250,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0099",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 8700,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0100",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 131000000000000,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0101",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 215000000,
				"ConditionId": "peking"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0102",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.32e71,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0103",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 2400,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0104",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 5,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0105",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2e34,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0106",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 5,
				"ConditionId": "jukebox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0107",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.53e57,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0108",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 300,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0109",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 60000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0110",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.5e18,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0111",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 615000000,
				"ConditionId": "peking"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0112",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.2e72,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0113",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 3,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0114",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 333,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0115",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.23e37,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0116",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 200000,
				"ConditionId": "jukebox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0117",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.7e63,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0118",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 350,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0119",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.43e38,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0120",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 33300,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0121",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 808000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0122",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.2e23,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0123",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 2800,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0124",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0125",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.31e76,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0126",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 444000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0127",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.34e42,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0128",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 400,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0129",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 500000000,
				"ConditionId": "jukebox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0130",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.21e70,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0131",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2420000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0132",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.3e28,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0133",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 3000,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0134",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 35,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0135",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e72,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0136",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.32e79,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0137",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 999333,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0138",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 450,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0139",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.45e48,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0140",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0141",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 156,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0142",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e72,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0143",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 3200,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0144",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.4e36,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0145",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2300,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0146",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.69e81,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0147",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1500000000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0148",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 500,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0149",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.57e52,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0150",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 44444,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0151",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 606000000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0152",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.1e41,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0153",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 3400,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0154",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.66e84,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0155",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.3e55,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0156",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 707000000,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0157",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.92e74,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0158",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 550,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0159",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.8e43,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0160",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.91e76,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0161",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.4e45,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0162",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1450000000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0163",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 3600,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0164",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.23e87,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0165",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.2e78,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0166",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 8480000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0167",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.3e60,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0168",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.4e48,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0169",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 600,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0170",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 3500000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0171",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2e86,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0172",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1010000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0173",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.1e80,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0174",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e65,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0175",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 3800,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0176",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.2e52,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0177",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3e88,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0178",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 26420,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0179",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.2e82,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0180",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 62600000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0181",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 650,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0182",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.32e70,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0183",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e55,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0184",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 55000000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0185",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.3e95,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0186",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 30300000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0187",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 4000,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0188",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.9e84,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0189",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.43e78,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0190",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.7e60,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0191",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.67e100,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0192",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 98400,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0193",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 700,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0194",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.9e86,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0195",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 929000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0196",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.43e84,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0197",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.77e62,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0198",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 750000000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0199",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 4200,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0200",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.44e102,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0201",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 606000000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0202",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.6e94,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0203",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.43e90,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0204",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.7e64,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0205",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 750,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0206",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.43e106,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0207",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 321000,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0208",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.5e88,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0209",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1210000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0210",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.43e96,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0211",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 4400,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0212",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.3e66,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0213",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1500000000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0214",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.34e108,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0215",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 9090000000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0216",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.2e92,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0217",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 800,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0218",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.23e100,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0219",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e68,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0220",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e110,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0221",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6420000,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0222",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.2e94,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0223",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 4600,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0224",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 42400000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0225",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.24e104,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0226",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e70,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0227",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 35000000000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0228",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e114,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0229",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 850,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0230",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.1e96,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0231",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 10100000000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0232",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e118,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0233",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.24e98,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0234",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 9840000,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0235",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 4800,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0236",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.23e106,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0237",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 626000000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0238",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.43e72,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0239",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.44e122,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0240",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.2e100,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0241",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 900,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0242",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.56e110,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0243",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 550000000000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0244",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.45e74,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0245",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 30300000000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0246",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.56e126,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0247",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e102,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0248",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 32100000,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0249",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.77e114,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0250",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2220000000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0251",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.7e78,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0252",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.67e130,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0253",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e104,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0254",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.55e116,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0255",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 750000000000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0256",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.78e82,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0257",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 606000000000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0258",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.78e134,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0259",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.2e106,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0260",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 64200000,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0261",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.24e120,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0262",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 12100000000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0263",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.76e86,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0264",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e138,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0265",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.7e110,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0266",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.99e124,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0267",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1500000000000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0268",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.7e90,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0269",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 909000000000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0270",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.01e142,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0271",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.5e112,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0272",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 98400000,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0273",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.23e128,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0274",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 42400000000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0275",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.3e94,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0276",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.12e146,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0277",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.6e116,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0278",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.76e132,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0279",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 3500000000000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0280",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.6e98,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0281",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 1010000000000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0282",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.13e150,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0283",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.66e120,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0284",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 321000000,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0285",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.55e136,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0286",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 62600000000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0287",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e100,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0288",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.32e155,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0289",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.4e130,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0290",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e140,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0291",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 5500000000000,
				"ConditionId": "microphone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0292",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e110,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0293",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 3030000000000,
				"ConditionId": "sitar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0294",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.4e160,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0295",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.5e150,
				"ConditionId": "musicstand"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0296",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 642000000,
				"ConditionId": "boombox"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0297",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e145,
				"ConditionId": "sheetmusic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0298",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 92900000000000,
				"ConditionId": "piano"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0299",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.75e120,
				"ConditionId": "vinylrecord"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0300",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.65e170,
				"ConditionId": "baton"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		}
	],
	"OfferPools": [
		{
			"SegmentId": "LteSegment",
			"OfferType": "Permanent",
			"ShowTakeover": false,
			"OfferDataList": [
				{
					"ItemId": "t07_lte_starter",
					"Duration": 0
				}
			]
		},
		{
			"SegmentId": "LteSegment",
			"OfferType": "RankUp",
			"ShowTakeover": true,
			"OfferDataList": [
				{
					"ItemId": "t04_lte_rank4",
					"Duration": 0
				},
				{
					"ItemId": "t06_lte_rank7",
					"Duration": 0
				},
				{
					"ItemId": "t08_lte_rank10",
					"Duration": 0
				},
				{
					"ItemId": "t09_lte_rank13",
					"Duration": 0
				},
				{
					"ItemId": "t10_lte_rank16",
					"Duration": 0
				},
				{
					"ItemId": "t11_lte_rank19",
					"Duration": 0
				},
				{
					"ItemId": "t13_lte_rank22",
					"Duration": 0
				},
				{
					"ItemId": "t15_lte_rank25",
					"Duration": 0
				}
			]
		}
	],
	"passcode": [],
	"Promotions": [],
	"Ranks": [
		{
			"Rank": "1",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "0",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 0.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 0.9,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 1,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "2",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "3",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 0.6,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 1,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "3",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "4",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 0.8,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1.1,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 2,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "4",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "5",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 1,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1.2,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 3,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "5",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 1.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1.3,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 4,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "6",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "5",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 1.5,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1.6,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 5,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "7",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "6",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 1.9,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 1.8,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 6,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "8",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "5",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 2.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 7,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "9",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 2.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2.2,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 8,
			"AirDropScience": 10,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "10",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "5",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 2.7,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2.4,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 9,
			"AirDropScience": 20,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "11",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 3,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2.6,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 10,
			"AirDropScience": 20,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "12",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "4",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 3.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2.75,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 11,
			"AirDropScience": 20,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "13",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "6",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 3.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 2.9,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 12,
			"AirDropScience": 20,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "14",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 3.7,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.1,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 13,
			"AirDropScience": 20,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "15",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "5",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.3,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 14,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "16",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.5,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 15,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 17,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "9",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.7,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 16,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 18,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4.6,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.9,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 17,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 19,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "9",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": "4.8",
			"PremiumGachaMultiplier": "1",
			"NormalGachaMultiplierScience": "4.1",
			"PremiumGachaMultiplierScience": "1",
			"GachaMultiplierTrophy": "18",
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 20,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "10",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": "4.9",
			"PremiumGachaMultiplier": "1",
			"NormalGachaMultiplierScience": "4.3",
			"PremiumGachaMultiplierScience": "1",
			"GachaMultiplierTrophy": "19",
			"AirDropScience": 40,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 21,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "6",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 4.5,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": "20",
			"AirDropScience": 40,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 22,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "6",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.1,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 4.7,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 22,
			"AirDropScience": 40,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 23,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "12",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 4.9,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 24,
			"AirDropScience": 40,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 24,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.3,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 5.15,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 26,
			"AirDropScience": 40,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 25,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "14",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 5.4,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 28,
			"AirDropScience": 50,
			"AirDropRankUpCoolDown": 60
		}
	],
	"ResearcherRankCosts": [
		{
			"Rarity": "Common",
			"Quantity": [
				9999
			],
			"Science": [
				999999
			]
		},
		{
			"Rarity": "Rare",
			"Quantity": [
				9999
			],
			"Science": [
				999999
			]
		},
		{
			"Rarity": "Epic",
			"Quantity": [
				9999
			],
			"Science": [
				999999
			]
		},
		{
			"Rarity": "Supreme",
			"Quantity": [
				9999
			],
			"Science": [
				999999
			]
		},
		{
			"Rarity": "LteCommon",
			"Quantity": [
				5,
				10,
				20,
				50,
				100,
				200,
				400,
				800
			],
			"Science": [
				100,
				200,
				300,
				400,
				800,
				2000,
				4000,
				8000
			]
		},
		{
			"Rarity": "LteRare",
			"Quantity": [
				5,
				10,
				20,
				50,
				100,
				200
			],
			"Science": [
				250,
				500,
				1000,
				2500,
				5000,
				10000
			]
		}
	],
	"Researchers": [
		{
			"Id": "MUS001",
			"Name": "Peeta Pie",
			"Description": "researcher.RS0001.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"flute"
			],
			"ExpoMultiplier": 1,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 1,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS002",
			"Name": "Tiny Cakes",
			"Description": "researcher.RS0002.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"bassoon"
			],
			"ExpoMultiplier": 2,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 1,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS003",
			"Name": "Sir Gizmolot",
			"Description": "researcher.RS0003.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"violin"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 4,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS004",
			"Name": "Keebler Monster",
			"Description": "researcher.RS0004.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"harp"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 6,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS005",
			"Name": "Harace & Grumar",
			"Description": "researcher.RS0005.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"trumpet"
			],
			"ExpoMultiplier": 5,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 10,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS006",
			"Name": "Wonky Landing",
			"Description": "researcher.RS0006.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"piano"
			],
			"ExpoMultiplier": 6,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 16,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS007",
			"Name": "Eastpark",
			"Description": "researcher.RS0008.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"drumkit"
			],
			"ExpoMultiplier": 2,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 3,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS008",
			"Name": "Snow Blow",
			"Description": "researcher.RS0009.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"saxophone"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 5,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS009",
			"Name": "Shovel King",
			"Description": "researcher.RS0010.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"keyboard"
			],
			"ExpoMultiplier": 6,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 8,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS010",
			"Name": "Cliffmeister",
			"Description": "researcher.RS0011.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"electricguitar"
			],
			"ExpoMultiplier": 8,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 12,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS011",
			"Name": "Smokey Materials",
			"Description": "researcher.RS0012.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"microphone"
			],
			"ExpoMultiplier": 10,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 17,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS012",
			"Name": "Melt Hard",
			"Description": "researcher.RS0014.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"erhu"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 7,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS013",
			"Name": "Bazooka Snow",
			"Description": "researcher.RS0015.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"koto"
			],
			"ExpoMultiplier": 6,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 9,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS014",
			"Name": "Crispy Und Panzer",
			"Description": "researcher.RS0016.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"peking"
			],
			"ExpoMultiplier": 9,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 13,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS015",
			"Name": "Harry Soldier",
			"Description": "researcher.RS0017.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"sitar"
			],
			"ExpoMultiplier": 12,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 20,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS016",
			"Name": "Bad Arthur",
			"Description": "researcher.RS0019.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"gramophone"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 15,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS017",
			"Name": "Doolie Boolie",
			"Description": "researcher.RS0020.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"jukebox"
			],
			"ExpoMultiplier": 8,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 18,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS018",
			"Name": "Bubloph",
			"Description": "researcher.RS0021.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"boombox"
			],
			"ExpoMultiplier": 12,
			"ExpoGrowth": 6,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 22,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS019",
			"Name": "Mama Griswold",
			"Description": "researcher.RS0023.desc",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"baton"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 1,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "MUS021",
			"Name": "Killzone",
			"Description": "researcher.RS0024.desc",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"musicstand"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 3,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "MUS023",
			"Name": "Buddy Brown",
			"Description": "researcher.RS0025.desc",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"sheetmusic"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 11,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "MUS025",
			"Name": "Dental Man",
			"Description": "researcher.RS0026.desc",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"vinylrecord"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 18,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS020",
			"Name": "Ginger Heist",
			"Description": "researcher.RS0027.desc",
			"ModType": "GeneratorPayoutMultiplier",
			"TargetIds": [
				"western"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 5,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 1,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS022",
			"Name": "Thing Age",
			"Description": "researcher.RS0028.desc",
			"ModType": "GeneratorPayoutMultiplier",
			"TargetIds": [
				"americana"
			],
			"ExpoMultiplier": 3.6,
			"ExpoGrowth": 5,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 4,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "MUS024",
			"Name": "Pink Ryder",
			"Description": "researcher.RS0029.desc",
			"ModType": "GeneratorPayoutMultiplier",
			"TargetIds": [
				"global"
			],
			"ExpoMultiplier": 4.2,
			"ExpoGrowth": 5,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 10,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "MUS026",
			"Name": "Cool E.L.F.S.",
			"Description": "researcher.RS0030.desc",
			"ModType": "GeneratorPayoutMultiplier",
			"TargetIds": [
				"invention"
			],
			"ExpoMultiplier": 4.8,
			"ExpoGrowth": 5,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 20,
			"ResearchOutputType": "Constant"
		}
	],
	"Resources": [
		{
			"Id": "baton",
			"Singular": "Baton",
			"Plural": "Batons",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "musicstand",
			"Singular": "Music Stand",
			"Plural": "Music Stands",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "sheetmusic",
			"Singular": "Sheet Music",
			"Plural": "Sheet Musics",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "vinylrecord",
			"Singular": "Vinyl Record",
			"Plural": "Vinyl Records",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "flute",
			"Singular": "Flute",
			"Plural": "Flutes",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "bassoon",
			"Singular": "Bassoon",
			"Plural": "Bassoons",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "violin",
			"Singular": "Violin",
			"Plural": "Violins",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "harp",
			"Singular": "Harp",
			"Plural": "Harps",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "trumpet",
			"Singular": "Trumpet",
			"Plural": "Trumpets",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "piano",
			"Singular": "Piano",
			"Plural": "Pianos",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "drumkit",
			"Singular": "Drum Kit",
			"Plural": "Drum Kits",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "saxophone",
			"Singular": "Saxophone",
			"Plural": "Saxophones",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "keyboard",
			"Singular": "Keyboard",
			"Plural": "Keyboards",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "electricguitar",
			"Singular": "Electric Guitar",
			"Plural": "Electric Guitars",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "microphone",
			"Singular": "Microphone",
			"Plural": "Microphones",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "erhu",
			"Singular": "Erhu",
			"Plural": "Erhu",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "koto",
			"Singular": "Koto",
			"Plural": "Kotos",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "peking",
			"Singular": "Peking",
			"Plural": "Pekings",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "sitar",
			"Singular": "Sitar",
			"Plural": "Sitars",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "gramophone",
			"Singular": "Gramophone",
			"Plural": "Gramophones",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "jukebox",
			"Singular": "Jukebox",
			"Plural": "Jukeboxes",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "boombox",
			"Singular": "Boombox",
			"Plural": "Boomboxes",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "darkscience",
			"Singular": "Dark Science",
			"Plural": "Dark Science",
			"CurrencyCode": "SC",
			"Resettable": false,
			"SharedData": false
		},
		{
			"Id": "comrade",
			"Singular": "Comrade",
			"Plural": "Comrades",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "comradegenerator",
			"Singular": "Comrade",
			"Plural": "Comrades",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "gold",
			"Singular": "Gold",
			"Plural": "Gold",
			"CurrencyCode": "GO",
			"Resettable": false,
			"SharedData": true
		},
		{
			"Id": "trophy",
			"Singular": "Trophy",
			"Plural": "Trophies",
			"Resettable": false,
			"SharedData": false
		},
		{
			"Id": "timehack_1",
			"Singular": "Basic Warp",
			"Plural": "Basic Warps",
			"CurrencyCode": "TH",
			"Resettable": false,
			"SharedData": true
		},
		{
			"Id": "timehack_4",
			"Singular": "Super Warp",
			"Plural": "Super Warps",
			"CurrencyCode": "TH",
			"Resettable": false,
			"SharedData": true
		},
		{
			"Id": "timehack_24",
			"Singular": "Elite Warp",
			"Plural": "Elite Warps",
			"CurrencyCode": "TH",
			"Resettable": false,
			"SharedData": true
		},
		{
			"Id": "specops_point",
			"Singular": "SpecialOps Point",
			"Plural": "SpecialOps Points",
			"StartingQty": 0,
			"Resettable": false,
			"SharedData": false
		},
		{
			"Id": "scientist",
			"Singular": "Science",
			"Plural": "Science",
			"Resettable": false,
			"SharedData": false
		}
	],
	"Segments": [
		{
			"Id": "LteSegment",
			"Priority": 1,
			"Triggers": [
				{
					"Type": "Rank",
					"Operator": ">=",
					"Value": 1
				}
			]
		}
	],
	"Store": [
		{
			"Name": "Bit O'Gold",
			"InternalId": "t02_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 199,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 160,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold1\"}"
		},
		{
			"Name": "Lot O'Gold",
			"InternalId": "t05_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 499,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 500,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold2\"}"
		},
		{
			"Name": "Tonne O'Gold",
			"InternalId": "t10_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 999,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 1200,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold3\",\"popular\":\"true\"}"
		},
		{
			"Name": "Bucket O'Gold",
			"InternalId": "t20_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 1999,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 2500,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold4\"}"
		},
		{
			"Name": "Barrel O'Gold",
			"InternalId": "t50_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 4999,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 6500,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold5\"}"
		},
		{
			"Name": "Wheels O'Gold",
			"InternalId": "t60_gold",
			"ItemClass": "VirtualCurrencyGold",
			"Price": 9999,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 14000,
					"RewardId": "GO"
				}
			],
			"CustomData": "{\"icon\":\"vc-gold6\",\"bestValue\":\"true\"}"
		},
		{
			"Name": "Discovery Pack",
			"InternalId": "darkscience_1000",
			"ItemClass": "VirtualCurrencyScience",
			"Price": 50,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 1000,
					"RewardId": "SC"
				}
			],
			"CustomData": "{\"icon\":\"vc-science1\",\"topUp\":\"true\"}"
		},
		{
			"Name": "Wise Pack",
			"InternalId": "darkscience_5000",
			"ItemClass": "VirtualCurrencyScience",
			"Price": 200,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 5000,
					"RewardId": "SC"
				}
			],
			"CustomData": "{\"icon\":\"vc-science2\"}"
		},
		{
			"Name": "Brilliant Pack",
			"InternalId": "darkscience_25000",
			"ItemClass": "VirtualCurrencyScience",
			"Price": 800,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "VirtualCurrency",
					"Value": 25000,
					"RewardId": "SC"
				}
			],
			"CustomData": "{\"icon\":\"vc-science3\",\"bestValue\":\"true\"}"
		},
		{
			"Name": "Titanium Capsule",
			"InternalId": "gacha_titanium",
			"ItemClass": "Gacha",
			"Price": 750,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 1,
					"RewardId": "titanium"
				}
			],
			"CustomData": "{\"icon\":\"ga-titanium\"}"
		},
		{
			"Name": "Skip 1 Hour!",
			"InternalId": "timehack_1",
			"ItemClass": "Experiment",
			"Price": 50,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "Experiment",
					"Value": 1,
					"RewardId": "EX167"
				}
			],
			"CustomData": "{\"rarity\":\"Rare\"}"
		},
		{
			"Name": "Skip 4 Hours!",
			"InternalId": "timehack_4",
			"ItemClass": "Experiment",
			"Price": 150,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "Experiment",
					"Value": 1,
					"RewardId": "EX164"
				}
			],
			"CustomData": "{\"rarity\":\"Epic\"}"
		},
		{
			"Name": "Skip 1 Day!",
			"InternalId": "timehack_24",
			"ItemClass": "Experiment",
			"Price": 750,
			"Currency": "GO",
			"Tags": [
				"GoldPurchase"
			],
			"Rewards": [
				{
					"Reward": "Experiment",
					"Value": 1,
					"RewardId": "EX165"
				}
			],
			"CustomData": "{\"rarity\":\"Supreme\"}"
		},
		{
			"Name": "Event Starter Pack",
			"InternalId": "t07_lte_starter",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 699,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 1,
					"RewardId": "titanium"
				},
				{
					"Reward": "Resources",
					"Value": 100,
					"RewardId": "gold"
				},
				{
					"Reward": "Resources",
					"Value": 2500,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "Music",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 4 Bundle",
			"InternalId": "t04_lte_rank4",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 399,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 20,
					"RewardId": "MUS019"
				},
				{
					"Reward": "Researcher",
					"Value": 100,
					"RewardId": "MUS003"
				},
				{
					"Reward": "Resources",
					"Value": 1000,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "Music",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 7 Bundle",
			"InternalId": "t06_lte_rank7",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 599,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 30,
					"RewardId": "MUS022"
				},
				{
					"Reward": "Researcher",
					"Value": 200,
					"RewardId": "MUS012"
				},
				{
					"Reward": "Resources",
					"Value": 2000,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "Music",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 10 Bundle",
			"InternalId": "t08_lte_rank10",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 799,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 50,
					"RewardId": "MUS024"
				},
				{
					"Reward": "Researcher",
					"Value": 300,
					"RewardId": "MUS013"
				},
				{
					"Reward": "Resources",
					"Value": 3000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 2,
					"RewardId": "timehack_1"
				}
			],
			"BundleTheme": "Music",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 13 Bundle",
			"InternalId": "t09_lte_rank13",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 899,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 1,
					"RewardId": "tech"
				},
				{
					"Reward": "Resources",
					"Value": 5000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 4,
					"RewardId": "timehack_1"
				},
				{
					"Reward": "Resources",
					"Value": 1,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "Music",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 16 Bundle",
			"InternalId": "t10_lte_rank16",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 999,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 1,
					"RewardId": "tech"
				},
				{
					"Reward": "Resources",
					"Value": 8000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 4,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "Music",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 19 Bundle",
			"InternalId": "t11_lte_rank19",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 1099,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 2,
					"RewardId": "tech"
				},
				{
					"Reward": "Resources",
					"Value": 250,
					"RewardId": "gold"
				},
				{
					"Reward": "Resources",
					"Value": 10000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 1,
					"RewardId": "timehack_24"
				}
			],
			"BundleTheme": "Music",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 22 Bundle",
			"InternalId": "t13_lte_rank22",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 1299,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 2,
					"RewardId": "tech"
				},
				{
					"Reward": "Researcher",
					"Value": 800,
					"RewardId": "MUS018"
				},
				{
					"Reward": "Resources",
					"Value": 15000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 5,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "Music",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 26Bundle",
			"InternalId": "t15_lte_rank25",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 1499,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Gacha",
					"Value": 3,
					"RewardId": "tech"
				},
				{
					"Reward": "Resources",
					"Value": 500,
					"RewardId": "gold"
				},
				{
					"Reward": "Resources",
					"Value": 20000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 6,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "Music",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		}
	],
	"SupremePassConfig": {
		"NumExtraFreeGachaCapsule": 2,
		"PropagandaAdsRemoved": true,
		"SpecOpsTimeReduction": 4,
		"NumExtraSpecOpsSlots": 1,
		"NumPerks": 6,
		"SupremePassStoreItemId": "t10_supremepass",
		"PurchaseTierCost": 250
	},
	"Trades": [
		{
			"Resource": "baton",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 1,
			"MaxLevel": 249
		},
		{
			"Resource": "musicstand",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 2,
			"MaxLevel": 249
		},
		{
			"Resource": "sheetmusic",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 3,
			"MaxLevel": 249
		},
		{
			"Resource": "vinylrecord",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 4,
			"MaxLevel": 249
		}
	]
}
;