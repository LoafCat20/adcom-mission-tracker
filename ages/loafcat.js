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
				}
			]
		},
		{
			"GachaId": "sc_m03",
			"MimicGachaId": "plastic",
			"Science": 47,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "EGY002",
					"Value": 3
				}
			]
		},
		{
			"GachaId": "sc_m04",
			"MimicGachaId": "plastic",
			"Science": 46,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "EGY001",
					"Value": 3
				},
				{
					"Id": "EGY017",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m05",
			"MimicGachaId": "plastic",
			"Science": 54,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "EGY001",
					"Value": 6
				}
			]
		},
		{
			"GachaId": "sc_m06",
			"MimicGachaId": "plastic",
			"Science": 55,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "EGY002",
					"Value": 6
				}
			]
		},
		{
			"GachaId": "sc_m07",
			"MimicGachaId": "plastic",
			"Science": 53,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "EGY007",
					"Value": 5
				},
				{
					"Id": "EGY016",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m08",
			"MimicGachaId": "plastic",
			"Science": 62,
			"Gold": 0,
			"Trophy": 20,
			"Card": [
				{
					"Id": "EGY003",
					"Value": 8
				}
			]
		},
		{
			"GachaId": "sc_m09",
			"MimicGachaId": "plastic",
			"Science": 67,
			"Gold": 0,
			"Trophy": 30,
			"Card": [
				{
					"Id": "EGY003",
					"Value": 10
				}
			]
		},
		{
			"GachaId": "sc_m10",
			"MimicGachaId": "plastic",
			"Science": 83,
			"Gold": 0,
			"Trophy": 40,
			"Card": [
				{
					"Id": "EGY008",
					"Value": 10
				},
				{
					"Id": "EGY018",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m11",
			"MimicGachaId": "plastic",
			"Science": 111,
			"Gold": 0,
			"Trophy": 60,
			"Card": [
				{
					"Id": "EGY004",
					"Value": 5
				},
				{
					"Id": "EGY008",
					"Value": 8
				},
				{
					"Id": "EGY019",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m12",
			"MimicGachaId": "plastic",
			"Science": 122,
			"Gold": 0,
			"Trophy": 70,
			"Card": [
				{
					"Id": "EGY012",
					"Value": 4
				},
				{
					"Id": "EGY004",
					"Value": 12
				},
				{
					"Id": "EGY019",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m13",
			"MimicGachaId": "plastic",
			"Science": 135,
			"Gold": 0,
			"Trophy": 80,
			"Card": [
				{
					"Id": "EGY009",
					"Value": 4
				},
				{
					"Id": "EGY012",
					"Value": 15
				},
				{
					"Id": "EGY018",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m14",
			"MimicGachaId": "plastic",
			"Science": 150,
			"Gold": 0,
			"Trophy": 90,
			"Card": [
				{
					"Id": "EGY005",
					"Value": 8
				},
				{
					"Id": "EGY009",
					"Value": 14
				},
				{
					"Id": "EGY020",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m15",
			"MimicGachaId": "plastic",
			"Science": 169,
			"Gold": 0,
			"Trophy": 100,
			"Card": [
				{
					"Id": "EGY013",
					"Value": 7
				},
				{
					"Id": "EGY005",
					"Value": 8
				},
				{
					"Id": "EGY001",
					"Value": 10
				},
				{
					"Id": "EGY020",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m16",
			"MimicGachaId": "plastic",
			"Science": 194,
			"Gold": 0,
			"Trophy": 140,
			"Card": [
				{
					"Id": "EGY010",
					"Value": 9
				},
				{
					"Id": "EGY013",
					"Value": 10
				},
				{
					"Id": "EGY007",
					"Value": 12
				},
				{
					"Id": "EGY021",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m17",
			"MimicGachaId": "plastic",
			"Science": 207,
			"Gold": 0,
			"Trophy": 160,
			"Card": [
				{
					"Id": "EGY014",
					"Value": 8
				},
				{
					"Id": "EGY010",
					"Value": 10
				},
				{
					"Id": "EGY008",
					"Value": 14
				},
				{
					"Id": "EGY020",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m18",
			"MimicGachaId": "plastic",
			"Science": 219,
			"Gold": 0,
			"Trophy": 180,
			"Card": [
				{
					"Id": "EGY006",
					"Value": 7
				},
				{
					"Id": "EGY014",
					"Value": 12
				},
				{
					"Id": "EGY012",
					"Value": 15
				},
				{
					"Id": "EGY021",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m19",
			"MimicGachaId": "plastic",
			"Science": 233,
			"Gold": 0,
			"Trophy": 250,
			"Card": [
				{
					"Id": "EGY011",
					"Value": 5
				},
				{
					"Id": "EGY006",
					"Value": 13
				},
				{
					"Id": "EGY008",
					"Value": 21
				},
				{
					"Id": "EGY020",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m20",
			"MimicGachaId": "plastic",
			"Science": 247,
			"Gold": 0,
			"Trophy": 300,
			"Card": [
				{
					"Id": "EGY015",
					"Value": 9
				},
				{
					"Id": "EGY011",
					"Value": 11
				},
				{
					"Id": "EGY010",
					"Value": 22
				},
				{
					"Id": "EGY021",
					"Value": 2
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
				"Multiplier": 8
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
					"Qty": "1.0E+03"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "builder",
				"Qty": 2
			},
			"BaseCompletionTime": 4,
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
				"Multiplier": 8
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
					"Qty": "1.0E+01"
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
				"Resource": "limestone",
				"Qty": 3
			},
			"BaseCompletionTime": 6,
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
				"Threshold": 45000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 8
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
					"Qty": "1.0E+02"
				},
				{
					"Resource": "Tool",
					"Qty": "1.0E+11"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "sled",
				"Qty": 4
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
				"Threshold": 10000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 8
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
					"Qty": "1.0E+03"
				},
				{
					"Resource": "Tool",
					"Qty": 1e22
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "quarry",
				"Qty": 5
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
				"Threshold": 200000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 8
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
					"Qty": "1.0E+04"
				},
				{
					"Resource": "Tool",
					"Qty": "1.0E+32"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "obelisk",
				"Qty": 6
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
				"Threshold": 2500000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 8
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
					"Qty": "2.0E+04"
				},
				{
					"Resource": "Tool",
					"Qty": "1.0E+40"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "sphinx",
				"Qty": 7
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
				"Multiplier": 8
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
				"Multiplier": 16
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
					"Qty": "1.0E+02"
				},
				{
					"Resource": "Hieroglyphic",
					"Qty": "1.0E+08"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "scribe",
				"Qty": 6
			},
			"BaseCompletionTime": 12,
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
				"Threshold": 200000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 16
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
					"Qty": 100
				},
				{
					"Resource": "Hieroglyphic",
					"Qty": 10000000000
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "papyrus",
				"Qty": 8
			},
			"BaseCompletionTime": 32,
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
				"Threshold": 7500000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 16
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
					"Qty": 1000
				},
				{
					"Resource": "Hieroglyphic",
					"Qty": "1.0E+19"
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
			"BaseCompletionTime": 48,
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
				"Threshold": 175000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 16
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
					"Qty": 10000
				},
				{
					"Resource": "Hieroglyphic",
					"Qty": "1.0E+25"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "priest",
				"Qty": 12
			},
			"BaseCompletionTime": 192,
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
				"Threshold": 2250000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 16
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
					"Qty": "1.0E+05"
				},
				{
					"Resource": "Hieroglyphic",
					"Qty": "1.0E+34"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "temple",
				"Qty": 15
			},
			"BaseCompletionTime": 768,
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
				"Threshold": 20000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 16
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
			"BaseCompletionTime": 4,
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
				"Multiplier": 32
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
					"Qty": "1.0E+02"
				},
				{
					"Resource": "Urn",
					"Qty": "1.0E+09"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "mummy",
				"Qty": 6
			},
			"BaseCompletionTime": 18,
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
				"Threshold": 5000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
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
					"Qty": "1.0E+03"
				},
				{
					"Resource": "Urn",
					"Qty": "1.0E+13"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "pectoral",
				"Qty": 9
			},
			"BaseCompletionTime": 24,
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
				"Threshold": 200000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
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
					"Qty": "1.0E+04"
				},
				{
					"Resource": "Urn",
					"Qty": "1.0E+16"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "sarcophagus",
				"Qty": 14
			},
			"BaseCompletionTime": 144,
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
				"Threshold": 3000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
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
					"Qty": "1.0E+05"
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
				"Resource": "cat",
				"Qty": 19
			},
			"BaseCompletionTime": 864,
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
				"Threshold": 20000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
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
				"Threshold": 4,
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
				"Threshold": 1,
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
				"Threshold": 50000,
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
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 1,
				"ConditionId": "any"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 555,
				"ConditionId": "builder"
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
				"Threshold": 125,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 500000000,
				"ConditionId": "tool"
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
				"Threshold": 1500,
				"ConditionId": "builder"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0010",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 180,
				"ConditionId": "limestone"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0011",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 1,
				"ConditionId": "any"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 500000000000,
				"ConditionId": "tool"
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
				"Threshold": 189,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 3322,
				"ConditionId": "limestone"
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
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 1,
				"ConditionId": "any"
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
			"Id": "M0017",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 44222,
				"ConditionId": "limestone"
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
			"Id": "M0019",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 1,
				"ConditionId": "any"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 55400000000000,
				"ConditionId": "tool"
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
				"Threshold": 5599,
				"ConditionId": "sled"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 275,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 1,
				"ConditionId": "any"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0024",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 321000000000000,
				"ConditionId": "tool"
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
			"Id": "M0026",
			"Rank": 1,
			"Condition": {
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 3,
				"ConditionId": "hieroglyphic"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 444222,
				"ConditionId": "sled"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 777,
				"ConditionId": "scribe"
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
			"Id": "M0030",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4442220000,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0031",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 22339,
				"ConditionId": "scribe"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0032",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2500000,
				"ConditionId": "sled"
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
				"Threshold": 64200000000000000000.0,
				"ConditionId": "tool"
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
			"Id": "M0035",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 181000,
				"ConditionId": "scribe"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 237000000000000000.0,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0037",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 181,
				"ConditionId": "papyrus"
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
			"Id": "M0039",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 33333,
				"ConditionId": "quarry"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.33e27,
				"ConditionId": "tool"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 78700,
				"ConditionId": "papyrus"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 950000000000000000000.0,
				"ConditionId": "hieroglyphic"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 2220000,
				"ConditionId": "quarry"
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
			"Id": "M0045",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 757000,
				"ConditionId": "papyrus"
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
			"Id": "M0047",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 11111111,
				"ConditionId": "quarry"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.5e24,
				"ConditionId": "hieroglyphic"
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
				"Threshold": 7400000,
				"ConditionId": "papyrus"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 373,
				"ConditionId": "relief"
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
				"Threshold": 5.19e38,
				"ConditionId": "tool"
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
				"Threshold": 99977777,
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
				"Threshold": 2.22e32,
				"ConditionId": "hieroglyphic"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 33666,
				"ConditionId": "relief"
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
			"Id": "M0057",
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
			"Id": "M0058",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.27e40,
				"ConditionId": "tool"
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
			"Id": "M0060",
			"Rank": 1,
			"Condition": {
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 8,
				"ConditionId": "urn"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 4440000,
				"ConditionId": "relief"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 333,
				"ConditionId": "mummy"
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
				"Threshold": 8888888,
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
				"Threshold": 22333,
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
				"Threshold": 34000000,
				"ConditionId": "relief"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0066",
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
			"Id": "M0067",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 23500,
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 222333,
				"ConditionId": "obelisk"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e40,
				"ConditionId": "hieroglyphic"
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
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0071",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2210000,
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
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0073",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2233000,
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 77788,
				"ConditionId": "priest"
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
				"Threshold": 8888888000,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0076",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4890000,
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
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0078",
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
			"Id": "M0079",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 23300000,
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
				"Threshold": 7370000,
				"ConditionId": "priest"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0081",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.21e62,
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
				"Threshold": 61600,
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
				"Threshold": 240000000,
				"ConditionId": "obelisk"
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
			"Id": "M0085",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 9,
				"ConditionId": "sphinx"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0086",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6160000,
				"ConditionId": "pectoral"
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
				"Threshold": 808000000000000000.0,
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
				"Threshold": 78700000,
				"ConditionId": "priest"
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
				"Threshold": 22211,
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
			"Id": "M0091",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 38300000,
				"ConditionId": "pectoral"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 12,
				"ConditionId": "sarcophagus"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.99e55,
				"ConditionId": "hieroglyphic"
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
				"Threshold": 88822200,
				"ConditionId": "sphinx"
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
				"Threshold": 1.22e65,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
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
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0097",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 97000,
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
				"Threshold": 533000000,
				"ConditionId": "priest"
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
				"Threshold": 3.23e25,
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
				"Threshold": 444000000,
				"ConditionId": "sphinx"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0101",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 747000,
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
			"Id": "M0103",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 77,
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
				"Threshold": 1260000000,
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
				"Threshold": 1.3e65,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0106",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 74700000,
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
				"Threshold": 3.33e70,
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
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0109",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 444000,
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 15800000000,
				"ConditionId": "sphinx"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0111",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.21e33,
				"ConditionId": "urn"
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
				"Threshold": 1000000000,
				"ConditionId": "sarcophagus"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
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
			"Id": "M0115",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 5,
				"ConditionId": "cat"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0116",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 44400000,
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
				"Threshold": 2.11e74,
				"ConditionId": "hieroglyphic"
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
				"Threshold": 4.44e75,
				"ConditionId": "tool"
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
				"Threshold": 5050,
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
				"Threshold": 66699,
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
			"Id": "M0123",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.27e45,
				"ConditionId": "urn"
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
				"Threshold": 50500,
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
				"Threshold": 999666,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0126",
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
			"Id": "M0127",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 20000000000,
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
				"Threshold": 770000000,
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
				"Threshold": 4.44e82,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0130",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.99e80,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0131",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 333000000,
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
				"RewardId": "plastic",
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
				"Threshold": 10100000000,
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.3400000000000001e60,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0136",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4440000000,
				"ConditionId": "pyramid"
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
			"Id": "M0139",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 18000000000,
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
				"Threshold": 1.01e90,
				"ConditionId": "hieroglyphic"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.42e85,
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
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0143",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 9390000000,
				"ConditionId": "pyramid"
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
				"RewardId": "plastic",
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
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0146",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6699,
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.82e65,
				"ConditionId": "urn"
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
			"Id": "M0149",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 17170000000,
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
			"Id": "M0151",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 2550000,
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
				"Threshold": 4.2e95,
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
				"Threshold": 2.22e90,
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
				"Threshold": 1,
				"ConditionId": "any"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 554000000,
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
				"Threshold": 3.21e70,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0160",
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
			"Id": "M0161",
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
			"Id": "M0162",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.1e98,
				"ConditionId": "hieroglyphic"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e95,
				"ConditionId": "tool"
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
				"Threshold": 1.11e72,
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
				"Threshold": 2.5e95,
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
				"Threshold": 6.43e72,
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
				"Threshold": 82000000000,
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
				"Threshold": 900000000,
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
				"Threshold": 1.69e98,
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
				"Threshold": 8000000000000,
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
				"Threshold": 4.44e74,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0176",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 100000000000,
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
				"Threshold": 2.3e100,
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
				"Threshold": 1200000000,
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
				"Threshold": 1.4e100,
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
				"Threshold": 20000000000000,
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
				"Threshold": 4.2e76,
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
				"Threshold": 830000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0183",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.2e102,
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
				"Threshold": 8500000000,
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
				"Threshold": 1.5e102,
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
				"Threshold": 80000000000000,
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
				"Threshold": 2.2e78,
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
				"Threshold": 1800000000000,
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
				"Threshold": 1.23e105,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0190",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 24000000000,
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
				"Threshold": 1.11e105,
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
				"Threshold": 200000000000000,
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
				"Threshold": 2.5e80,
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
				"Threshold": 7000000000000,
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
				"Threshold": 1.7e110,
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
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0197",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.6e108,
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
				"Threshold": 600000000000000,
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
				"Threshold": 2.5e85,
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
				"Threshold": 10000000000000,
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
				"Threshold": 6.7e112,
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
				"Threshold": 800000000000,
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
				"Threshold": 2.6e110,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0204",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 800000000000000,
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
				"Threshold": 7.5e90,
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
				"Threshold": 1.7e115,
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
			"Id": "M0208",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.6e112,
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
				"Threshold": 2000000000000000.0,
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
				"Threshold": 300000000000000,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0211",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.7e118,
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
				"Threshold": 5000000000000,
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
				"Threshold": 2.6e115,
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
				"Threshold": 6000000000000000.0,
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
				"Threshold": 7.78e95,
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
				"Threshold": 1.7e120,
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
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0218",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.6e118,
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
				"Threshold": 9000000000000000.0,
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
				"Threshold": 2000000000000000.0,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0221",
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
			"Id": "M0222",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 20000000000000,
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
				"Threshold": 2.6e120,
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
				"Threshold": 20000000000000000.0,
				"ConditionId": "prophet"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0225",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.5e102,
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
				"Threshold": 1.7e125,
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
				"Threshold": 50000000000000,
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
				"Threshold": 8.6e122,
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
				"Threshold": 60000000000000000.0,
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
				"Threshold": 2.5e105,
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
				"Threshold": 6.7e130,
				"ConditionId": "hieroglyphic"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0232",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 80000000000000,
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
				"Threshold": 2.6e125,
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
				"Threshold": 80000000000000000.0,
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
				"Threshold": 7.5e108,
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
				"Threshold": 1.7e135,
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
				"Threshold": 300000000000000,
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
				"Threshold": 8.6e130,
				"ConditionId": "tool"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0239",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 200000000000000000.0,
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
				"Threshold": 9000000000000000.0,
				"ConditionId": "pyramid"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0241",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.7e140,
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
				"Threshold": 900000000000000,
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
				"Threshold": 2.6e135,
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
				"Threshold": 600000000000000000.0,
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
				"Threshold": 2.5e120,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0246",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.7e150,
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
				"Threshold": 1000000000000000.0,
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
				"Threshold": 8.6e145,
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
				"Threshold": 800000000000000000.0,
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
				"Threshold": 7.5e150,
				"ConditionId": "urn"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
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
			"UpgradePower": 1,
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
			"UpgradePower": 1,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 4,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 6,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 9,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 12,
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
			"UpgradePower": 1,
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
			"UpgradePower": 1,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 5,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 7,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 10,
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
			"UpgradePower": 1,
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
			"UpgradePower": 1,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 13,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 15,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 19,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 22,
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
			"UpgradePower": 1,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 24,
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
			"ExpoMultiplier": 0.6,
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
			"Id": "EGY017",
			"Name": "Los Polos Leghorn",
			"ModType": "GeneratorCritChance",
			"TargetIds": [
				"building"
			],
			"ExpoMultiplier": 0,
			"ExpoGrowth": 0,
			"UpgradePower": 0,
			"CurveModifier": 0.12,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 10,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY025",
			"ModType": "GeneratorCritPowerMult",
			"TargetIds": [
				"building"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 18,
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
			"ExpoMultiplier": 1,
			"ExpoGrowth": 5,
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
			"ExpoMultiplier": 0,
			"ExpoGrowth": 0,
			"UpgradePower": 0,
			"CurveModifier": 0.12,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 13,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY026",
			"ModType": "GeneratorCritPowerMult",
			"TargetIds": [
				"learning"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 20,
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
			"ExpoMultiplier": 1.4,
			"ExpoGrowth": 5,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 14,
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
			"ExpoMultiplier": 0,
			"ExpoGrowth": 0,
			"UpgradePower": 0,
			"CurveModifier": 0.12,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 16,
			"ResearchOutputType": "Constant",
			"ResearchOutputRate": 1
		},
		{
			"Id": "EGY027",
			"ModType": "GeneratorCritPowerMult",
			"TargetIds": [
				"mourning"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 22,
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
			"ExpoGrowth": 4,
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
}

DATA["christmas-bal-13"] = {
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
			"MaxAdsPerInterval": 4,
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
			"AdWatchStackModifier": 0.3
		},
		{
			"Rarity": "LteRare",
			"ScienceCost": 250,
			"GoldCost": 15,
			"AdWatchStackModifier": 0.35
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
		},
		{
			"Rank": 26,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 27,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 28,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 29,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 30,
			"Common": 0,
			"Rare": 0,
			"Epic": 0,
			"Supreme": 0,
			"LteCommon": 50,
			"LteRare": 8
		},
		{
			"Rank": 31,
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
			"LteRareWeight": 9,
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
			"LteRareWeight": 10,
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
			"Id": "sc_m21",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m22",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m23",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m24",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m25",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m26",
			"Type": "Scripted"
		},
		{
			"Id": "sc_m27",
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
					"Id": "CHR001",
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
					"Id": "CHR001",
					"Value": 4
				}
			]
		},
		{
			"GachaId": "sc_m03",
			"MimicGachaId": "plastic",
			"Science": 47,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "CHR002",
					"Value": 3
				}
			]
		},
		{
			"GachaId": "sc_m04",
			"MimicGachaId": "plastic",
			"Science": 46,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "CHR001",
					"Value": 3
				},
				{
					"Id": "CHR023",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m05",
			"MimicGachaId": "plastic",
			"Science": 54,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "CHR001",
					"Value": 6
				}
			]
		},
		{
			"GachaId": "sc_m06",
			"MimicGachaId": "plastic",
			"Science": 55,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "CHR002",
					"Value": 6
				}
			]
		},
		{
			"GachaId": "sc_m07",
			"MimicGachaId": "plastic",
			"Science": 53,
			"Gold": 0,
			"Trophy": 10,
			"Card": [
				{
					"Id": "CHR007",
					"Value": 5
				},
				{
					"Id": "CHR016",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m08",
			"MimicGachaId": "plastic",
			"Science": 62,
			"Gold": 0,
			"Trophy": 20,
			"Card": [
				{
					"Id": "CHR003",
					"Value": 8
				}
			]
		},
		{
			"GachaId": "sc_m09",
			"MimicGachaId": "plastic",
			"Science": 67,
			"Gold": 0,
			"Trophy": 30,
			"Card": [
				{
					"Id": "CHR003",
					"Value": 10
				}
			]
		},
		{
			"GachaId": "sc_m10",
			"MimicGachaId": "plastic",
			"Science": 83,
			"Gold": 0,
			"Trophy": 40,
			"Card": [
				{
					"Id": "CHR008",
					"Value": 10
				},
				{
					"Id": "CHR018",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m11",
			"MimicGachaId": "plastic",
			"Science": 111,
			"Gold": 0,
			"Trophy": 60,
			"Card": [
				{
					"Id": "CHR004",
					"Value": 5
				},
				{
					"Id": "CHR008",
					"Value": 8
				},
				{
					"Id": "CHR019",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m12",
			"MimicGachaId": "plastic",
			"Science": 122,
			"Gold": 0,
			"Trophy": 70,
			"Card": [
				{
					"Id": "CHR012",
					"Value": 4
				},
				{
					"Id": "CHR004",
					"Value": 12
				},
				{
					"Id": "CHR019",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m13",
			"MimicGachaId": "plastic",
			"Science": 135,
			"Gold": 0,
			"Trophy": 80,
			"Card": [
				{
					"Id": "CHR009",
					"Value": 4
				},
				{
					"Id": "CHR012",
					"Value": 15
				},
				{
					"Id": "CHR018",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m14",
			"MimicGachaId": "plastic",
			"Science": 150,
			"Gold": 0,
			"Trophy": 90,
			"Card": [
				{
					"Id": "CHR005",
					"Value": 8
				},
				{
					"Id": "CHR009",
					"Value": 14
				},
				{
					"Id": "CHR020",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m15",
			"MimicGachaId": "plastic",
			"Science": 169,
			"Gold": 0,
			"Trophy": 100,
			"Card": [
				{
					"Id": "CHR013",
					"Value": 7
				},
				{
					"Id": "CHR005",
					"Value": 8
				},
				{
					"Id": "CHR001",
					"Value": 10
				},
				{
					"Id": "CHR020",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m16",
			"MimicGachaId": "plastic",
			"Science": 194,
			"Gold": 0,
			"Trophy": 140,
			"Card": [
				{
					"Id": "CHR010",
					"Value": 9
				},
				{
					"Id": "CHR013",
					"Value": 10
				},
				{
					"Id": "CHR007",
					"Value": 12
				},
				{
					"Id": "CHR021",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m17",
			"MimicGachaId": "plastic",
			"Science": 207,
			"Gold": 0,
			"Trophy": 160,
			"Card": [
				{
					"Id": "CHR014",
					"Value": 8
				},
				{
					"Id": "CHR010",
					"Value": 10
				},
				{
					"Id": "CHR008",
					"Value": 14
				},
				{
					"Id": "CHR020",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m18",
			"MimicGachaId": "plastic",
			"Science": 219,
			"Gold": 0,
			"Trophy": 180,
			"Card": [
				{
					"Id": "CHR006",
					"Value": 7
				},
				{
					"Id": "CHR014",
					"Value": 12
				},
				{
					"Id": "CHR012",
					"Value": 15
				},
				{
					"Id": "CHR021",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m19",
			"MimicGachaId": "plastic",
			"Science": 233,
			"Gold": 0,
			"Trophy": 250,
			"Card": [
				{
					"Id": "CHR011",
					"Value": 5
				},
				{
					"Id": "CHR006",
					"Value": 13
				},
				{
					"Id": "CHR008",
					"Value": 21
				},
				{
					"Id": "CHR020",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m20",
			"MimicGachaId": "plastic",
			"Science": 247,
			"Gold": 0,
			"Trophy": 300,
			"Card": [
				{
					"Id": "CHR015",
					"Value": 9
				},
				{
					"Id": "CHR011",
					"Value": 11
				},
				{
					"Id": "CHR010",
					"Value": 22
				},
				{
					"Id": "CHR021",
					"Value": 2
				}
			]
		},
		{
			"GachaId": "sc_m21",
			"MimicGachaId": "plastic",
			"Science": 1,
			"Gold": 1,
			"Trophy": 1,
			"Card": [
				{
					"Id": "CHR001",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m22",
			"MimicGachaId": "plastic",
			"Science": 1,
			"Gold": 1,
			"Trophy": 1,
			"Card": [
				{
					"Id": "CHR001",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m23",
			"MimicGachaId": "plastic",
			"Science": 1,
			"Gold": 1,
			"Trophy": 1,
			"Card": [
				{
					"Id": "CHR001",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m24",
			"MimicGachaId": "plastic",
			"Science": 1,
			"Gold": 1,
			"Trophy": 1,
			"Card": [
				{
					"Id": "CHR001",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m25",
			"MimicGachaId": "plastic",
			"Science": 1,
			"Gold": 1,
			"Trophy": 1,
			"Card": [
				{
					"Id": "CHR001",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m26",
			"MimicGachaId": "plastic",
			"Science": 1,
			"Gold": 1,
			"Trophy": 1,
			"Card": [
				{
					"Id": "CHR001",
					"Value": 1
				}
			]
		},
		{
			"GachaId": "sc_m27",
			"MimicGachaId": "plastic",
			"Science": 1,
			"Gold": 1,
			"Trophy": 1,
			"Card": [
				{
					"Id": "CHR001",
					"Value": 1
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
					"Id": "CHR023",
					"Value": 1
				},
				{
					"Id": "CHR024",
					"Value": 1
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
			"GeneratorId": "santahat",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "redcoat",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "blackboots",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "list",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "toysack",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "sleigh",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "milkcookies",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "gingerbreadhouse",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "yulelog",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "panettone",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "figgypudding",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "friedchicken",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "friedcaterpillar",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "poinsettia",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "parol",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "bauble",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "spiderweb",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "pohutukawa",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "bell",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "goldring",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "christmastree",
			"MaximumObjectivesForRank": [
				999
			]
		},
		{
			"GeneratorId": "balletdancer",
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
			"Id": "santahat",
			"Name": "santahat",
			"ResourceType": "santahat",
			"GeneratorType": "Manual",
			"IndustryId": "giftage",
			"Cost": [
				{
					"Resource": "gift",
					"Qty": "1.0E+01"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "gift",
				"Qty": 2
			},
			"BaseCompletionTime": 2,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "gift",
					"Threshold": 0
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "giftage",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "redcoat",
			"Name": "redcoat",
			"ResourceType": "redcoat",
			"GeneratorType": "Manual",
			"IndustryId": "giftage",
			"Cost": [
				{
					"Resource": "santahat",
					"Qty": "1.0E+01"
				},
				{
					"Resource": "gift",
					"Qty": "1.0E+04"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "santahat",
				"Qty": 5
			},
			"BaseCompletionTime": 6,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "santahat",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "santahat",
				"Threshold": 150
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 4
			}
		},
		{
			"Id": "blackboots",
			"Name": "blackboots",
			"ResourceType": "blackboots",
			"GeneratorType": "Manual",
			"IndustryId": "giftage",
			"Cost": [
				{
					"Resource": "redcoat",
					"Qty": "1.0E+02"
				},
				{
					"Resource": "gift",
					"Qty": "1.0E+12"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "redcoat",
				"Qty": 8
			},
			"BaseCompletionTime": 18,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "redcoat",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "redcoat",
				"Threshold": 25000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 6
			}
		},
		{
			"Id": "list",
			"Name": "list",
			"ResourceType": "list",
			"GeneratorType": "Manual",
			"IndustryId": "giftage",
			"Cost": [
				{
					"Resource": "blackboots",
					"Qty": "1.0E+03"
				},
				{
					"Resource": "gift",
					"Qty": 9.999999999999999e22
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "blackboots",
				"Qty": 11
			},
			"BaseCompletionTime": 54,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "blackboots",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "blackboots",
				"Threshold": 1000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 8
			}
		},
		{
			"Id": "toysack",
			"Name": "toysack",
			"ResourceType": "toysack",
			"GeneratorType": "Manual",
			"IndustryId": "giftage",
			"Cost": [
				{
					"Resource": "list",
					"Qty": "1.0E+05"
				},
				{
					"Resource": "gift",
					"Qty": "1.0E+41"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "list",
				"Qty": 14
			},
			"BaseCompletionTime": 162,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "list",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "list",
				"Threshold": 20000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 10
			}
		},
		{
			"Id": "sleigh",
			"Name": "sleigh",
			"ResourceType": "sleigh",
			"GeneratorType": "Manual",
			"IndustryId": "giftage",
			"Cost": [
				{
					"Resource": "toysack",
					"Qty": "1.0E+07"
				},
				{
					"Resource": "gift",
					"Qty": "1.0E+58"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "toysack",
				"Qty": 17
			},
			"BaseCompletionTime": 486,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "toysack",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "toysack",
				"Threshold": 200000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 12
			}
		},
		{
			"Id": "milkcookies",
			"Name": "milkcookies",
			"ResourceType": "milkcookies",
			"GeneratorType": "Manual",
			"IndustryId": "giftage",
			"Cost": [
				{
					"Resource": "sleigh",
					"Qty": "1.0E+09"
				},
				{
					"Resource": "gift",
					"Qty": "1.0E+88"
				},
				{
					"Resource": "Comrade",
					"Qty": "1"
				}
			],
			"Generate": {
				"Resource": "sleigh",
				"Qty": 20
			},
			"BaseCompletionTime": 1458,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "sleigh",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "sleigh",
				"Threshold": 20000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 14
			}
		},
		{
			"Id": "gingerbreadhouse",
			"Name": "gingerbreadhouse",
			"ResourceType": "gingerbreadhouse",
			"GeneratorType": "Manual",
			"IndustryId": "treatage",
			"Cost": [
				{
					"Resource": "candycane",
					"Qty": "2.5E+01"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "candycane",
				"Qty": 6
			},
			"BaseCompletionTime": 3,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "gift",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "treatage",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "yulelog",
			"Name": "yulelog",
			"ResourceType": "yulelog",
			"GeneratorType": "Manual",
			"IndustryId": "treatage",
			"Cost": [
				{
					"Resource": "gingerbreadhouse",
					"Qty": 1000
				},
				{
					"Resource": "candycane",
					"Qty": "1.0E+09"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "gingerbreadhouse",
				"Qty": 21
			},
			"BaseCompletionTime": 12,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "gingerbreadhouse",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "gingerbreadhouse",
				"Threshold": 50000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 4
			}
		},
		{
			"Id": "panettone",
			"Name": "panettone",
			"ResourceType": "panettone",
			"GeneratorType": "Manual",
			"IndustryId": "treatage",
			"Cost": [
				{
					"Resource": "yulelog",
					"Qty": 10000
				},
				{
					"Resource": "candycane",
					"Qty": "1.0E+22"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "yulelog",
				"Qty": 36
			},
			"BaseCompletionTime": 48,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "yulelog",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "yulelog",
				"Threshold": 5000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 6
			}
		},
		{
			"Id": "figgypudding",
			"Name": "figgypudding",
			"ResourceType": "figgypudding",
			"GeneratorType": "Manual",
			"IndustryId": "treatage",
			"Cost": [
				{
					"Resource": "panettone",
					"Qty": "1.0E+06"
				},
				{
					"Resource": "candycane",
					"Qty": "1.0E+41"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "panettone",
				"Qty": 51
			},
			"BaseCompletionTime": 192,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "panettone",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "panettone",
				"Threshold": 25000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 8
			}
		},
		{
			"Id": "friedchicken",
			"Name": "friedchicken",
			"ResourceType": "friedchicken",
			"GeneratorType": "Manual",
			"IndustryId": "treatage",
			"Cost": [
				{
					"Resource": "figgypudding",
					"Qty": "1.0E+08"
				},
				{
					"Resource": "candycane",
					"Qty": "1.0E+58"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "figgypudding",
				"Qty": 66
			},
			"BaseCompletionTime": 768,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "figgypudding",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "figgypudding",
				"Threshold": 400000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 10
			}
		},
		{
			"Id": "friedcaterpillar",
			"Name": "friedcaterpillar",
			"ResourceType": "friedcaterpillar",
			"GeneratorType": "Manual",
			"IndustryId": "treatage",
			"Cost": [
				{
					"Resource": "friedchicken",
					"Qty": "1.0E+09"
				},
				{
					"Resource": "candycane",
					"Qty": "1.0E+88"
				},
				{
					"Resource": "Comrade",
					"Qty": "3"
				}
			],
			"Generate": {
				"Resource": "friedchicken",
				"Qty": 81
			},
			"BaseCompletionTime": 3072,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "friedchicken",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "friedchicken",
				"Threshold": 25000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 12
			}
		},
		{
			"Id": "poinsettia",
			"Name": "poinsettia",
			"ResourceType": "poinsettia",
			"GeneratorType": "Manual",
			"IndustryId": "decorationage",
			"Cost": [
				{
					"Resource": "wreath",
					"Qty": "5.0E+01"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "wreath",
				"Qty": 12
			},
			"BaseCompletionTime": 4,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "candycane",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "decorationage",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "parol",
			"Name": "parol",
			"ResourceType": "parol",
			"GeneratorType": "Manual",
			"IndustryId": "decorationage",
			"Cost": [
				{
					"Resource": "poinsettia",
					"Qty": "1.0E+04"
				},
				{
					"Resource": "wreath",
					"Qty": "1.0E+13"
				},
				{
					"Resource": "Comrade",
					"Qty": "5"
				}
			],
			"Generate": {
				"Resource": "poinsettia",
				"Qty": 64
			},
			"BaseCompletionTime": 24,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "poinsettia",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "poinsettia",
				"Threshold": 5000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 4
			}
		},
		{
			"Id": "bauble",
			"Name": "bauble",
			"ResourceType": "bauble",
			"GeneratorType": "Manual",
			"IndustryId": "decorationage",
			"Cost": [
				{
					"Resource": "parol",
					"Qty": "1.0E+06"
				},
				{
					"Resource": "wreath",
					"Qty": 1e28
				},
				{
					"Resource": "Comrade",
					"Qty": 5
				}
			],
			"Generate": {
				"Resource": "parol",
				"Qty": 116
			},
			"BaseCompletionTime": 144,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "parol",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "parol",
				"Threshold": 30000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 6
			}
		},
		{
			"Id": "spiderweb",
			"Name": "spiderweb",
			"ResourceType": "spiderweb",
			"GeneratorType": "Manual",
			"IndustryId": "decorationage",
			"Cost": [
				{
					"Resource": "bauble",
					"Qty": 1000000000
				},
				{
					"Resource": "wreath",
					"Qty": 1e54
				},
				{
					"Resource": "Comrade",
					"Qty": 5
				}
			],
			"Generate": {
				"Resource": "bauble",
				"Qty": 168
			},
			"BaseCompletionTime": 864,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "bauble",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "bauble",
				"Threshold": 3000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 8
			}
		},
		{
			"Id": "pohutukawa",
			"Name": "pohutukawa",
			"ResourceType": "pohutukawa",
			"GeneratorType": "Manual",
			"IndustryId": "decorationage",
			"Cost": [
				{
					"Resource": "spiderweb",
					"Qty": 10000000000
				},
				{
					"Resource": "wreath",
					"Qty": 1e78
				},
				{
					"Resource": "Comrade",
					"Qty": 5
				}
			],
			"Generate": {
				"Resource": "spiderweb",
				"Qty": 220
			},
			"BaseCompletionTime": 5184,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "spiderweb",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "spiderweb",
				"Threshold": 30000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 10
			}
		},
		{
			"Id": "bell",
			"Name": "bell",
			"ResourceType": "bell",
			"GeneratorType": "Manual",
			"IndustryId": "musicage",
			"Cost": [
				{
					"Resource": "caroller",
					"Qty": 10000
				},
				{
					"Resource": "Comrade",
					"Qty": 7
				}
			],
			"Generate": {
				"Resource": "caroller",
				"Qty": 20
			},
			"BaseCompletionTime": 5,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "wreath",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "IndustryUnlocked",
				"ConditionId": "musicage",
				"Threshold": 0
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 2
			}
		},
		{
			"Id": "goldring",
			"Name": "goldring",
			"ResourceType": "goldring",
			"GeneratorType": "Manual",
			"IndustryId": "musicage",
			"Cost": [
				{
					"Resource": "bell",
					"Qty": 10000000
				},
				{
					"Resource": "caroller",
					"Qty": 10000000000000000000.0
				},
				{
					"Resource": "Comrade",
					"Qty": 7
				}
			],
			"Generate": {
				"Resource": "bell",
				"Qty": 210
			},
			"BaseCompletionTime": 60,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "bell",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "bell",
				"Threshold": 600000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 4
			}
		},
		{
			"Id": "christmastree",
			"Name": "christmastree",
			"ResourceType": "christmastree",
			"GeneratorType": "Manual",
			"IndustryId": "musicage",
			"Cost": [
				{
					"Resource": "goldring",
					"Qty": 100000000
				},
				{
					"Resource": "caroller",
					"Qty": 1e40
				},
				{
					"Resource": "Comrade",
					"Qty": 7
				}
			],
			"Generate": {
				"Resource": "goldring",
				"Qty": 400
			},
			"BaseCompletionTime": 720,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "goldring",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "goldring",
				"Threshold": 5000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 6
			}
		},
		{
			"Id": "balletdancer",
			"Name": "balletdancer",
			"ResourceType": "balletdancer",
			"GeneratorType": "Manual",
			"IndustryId": "musicage",
			"Cost": [
				{
					"Resource": "christmastree",
					"Qty": 10000000000
				},
				{
					"Resource": "caroller",
					"Qty": 1e64
				},
				{
					"Resource": "Comrade",
					"Qty": 7
				}
			],
			"Generate": {
				"Resource": "christmastree",
				"Qty": 590
			},
			"BaseCompletionTime": 8640,
			"Visible": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "christmastree",
					"Threshold": 2
				}
			],
			"Unlock": {
				"ConditionType": "ResourceQuantity",
				"ConditionId": "christmastree",
				"Threshold": 35000000000
			},
			"IncludeInAll": true,
			"Crit": {
				"ChancePercent": 0,
				"Multiplier": 32
			},
			"ObjectiveReward": {
				"Reward": "Resources",
				"RewardId": "darkscience",
				"Value": 8
			}
		}
	],
	"Industries": [
		{
			"Id": "giftage",
			"SortingOrder": 1,
			"VisibleConditions": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "gift"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "gift",
					"Threshold": 0
				}
			]
		},
		{
			"Id": "treatage",
			"SortingOrder": 2,
			"UnlockCostResourceId": "gift",
			"UnlockCostResourceQty": 3000000000000,
			"VisibleConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "giftage"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "ResourceQuantity",
					"ConditionId": "gift",
					"Threshold": 0
				}
			]
		},
		{
			"Id": "decorationage",
			"SortingOrder": 3,
			"UnlockCostResourceId": "candycane",
			"UnlockCostResourceQty": 15000000000000,
			"VisibleConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "giftage"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "treatage",
					"Threshold": 0
				}
			]
		},
		{
			"Id": "musicage",
			"SortingOrder": 4,
			"UnlockCostResourceId": "wreath",
			"UnlockCostResourceQty": 1e30,
			"VisibleConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "treatage"
				}
			],
			"InteractableConditions": [
				{
					"ConditionType": "IndustryUnlocked",
					"ConditionId": "decorationage",
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
		"RanksToTriggerOffers": "4,7,10,13,16,19,22,24,26,28,30,31",
		"ComradeSpendWarningEnableRank": 3,
		"ReferralReward": 110
	},
	"Missions": [
		{
			"Id": "M0001",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2200000000,
				"ConditionId": "gift"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 100,
				"ConditionId": "darkscience"
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
				"Threshold": 12,
				"ConditionId": "santahat"
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
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 2,
				"ConditionId": "gift"
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
				"Threshold": 124,
				"ConditionId": "santahat"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 125,
				"ConditionId": "darkscience"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0007",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 749,
				"ConditionId": "santahat"
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
				"Threshold": 150,
				"ConditionId": "redcoat"
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
				"ConditionType": "ResearchersUpgradedSinceSubscription",
				"Threshold": 1,
				"ConditionId": "any"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 2500,
				"ConditionId": "redcoat"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0011",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 300,
				"ConditionId": "darkscience"
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
				"Threshold": 5560,
				"ConditionId": "redcoat"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 9,
				"ConditionId": "blackboots"
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
				"ConditionType": "IndustryUnlocked",
				"Threshold": 1,
				"ConditionId": "treatage"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 350,
				"ConditionId": "darkscience"
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
				"Threshold": 555,
				"ConditionId": "gingerbreadhouse"
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
				"Threshold": 3,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0018",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 13300,
				"ConditionId": "gingerbreadhouse"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 2230,
				"ConditionId": "blackboots"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4440000000000,
				"ConditionId": "candycane"
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
			"Id": "M0022",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 100,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 121000,
				"ConditionId": "gingerbreadhouse"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 336000,
				"ConditionId": "blackboots"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 500,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 89,
				"ConditionId": "yulelog"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 654000000000000,
				"ConditionId": "gift"
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
				"Threshold": 2000000,
				"ConditionId": "blackboots"
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
				"Threshold": 299,
				"ConditionId": "list"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 78000,
				"ConditionId": "yulelog"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0031",
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
			"Id": "M0032",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 32100000000000000000.0,
				"ConditionId": "gift"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 27300,
				"ConditionId": "list"
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
				"ConditionType": "IndustryUnlocked",
				"Threshold": 1,
				"ConditionId": "decorationage"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0035",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 333,
				"ConditionId": "poinsettia"
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
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 2,
				"ConditionId": "wreath"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 1000000,
				"ConditionId": "list"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 237000000000000000000.0,
				"ConditionId": "candycane"
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
			"Id": "M0040",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.33e27,
				"ConditionId": "gift"
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
				"Threshold": 575000,
				"ConditionId": "yulelog"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.5e24,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 15000000,
				"ConditionId": "list"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 11,
				"ConditionId": "toysack"
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
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0046",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.92e39,
				"ConditionId": "gift"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 500,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 23500,
				"ConditionId": "poinsettia"
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
				"Threshold": 6660000,
				"ConditionId": "yulelog"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 700,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 2210000,
				"ConditionId": "poinsettia"
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
				"Threshold": 9.5e26,
				"ConditionId": "candycane"
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
				"Threshold": 606,
				"ConditionId": "panettone"
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
				"Threshold": 44200,
				"ConditionId": "toysack"
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
			"Id": "M0056",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.27e47,
				"ConditionId": "gift"
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
				"Threshold": 500,
				"ConditionId": "darkscience"
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
				"Threshold": 4890000,
				"ConditionId": "poinsettia"
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
				"Threshold": 64600,
				"ConditionId": "panettone"
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
			"Id": "M0061",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 66,
				"ConditionId": "parol"
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
				"Threshold": 2.22e31,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 2220000,
				"ConditionId": "toysack"
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
				"Threshold": 5250000,
				"ConditionId": "panettone"
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
			"Id": "M0066",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.42e56,
				"ConditionId": "gift"
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
				"Threshold": 500,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 111000000,
				"ConditionId": "toysack"
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
				"Threshold": 61600,
				"ConditionId": "parol"
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
			"Id": "M0071",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 18,
				"ConditionId": "sleigh"
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
				"Threshold": 2.22e42,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0073",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 34000000,
				"ConditionId": "panettone"
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
				"Threshold": 6160000,
				"ConditionId": "parol"
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
			"Id": "M0076",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.23e27,
				"ConditionId": "wreath"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 700,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 44,
				"ConditionId": "figgypudding"
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
			"Id": "M0080",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 11100,
				"ConditionId": "sleigh"
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
				"Threshold": 29900000,
				"ConditionId": "parol"
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
			"Id": "M0083",
			"Rank": 1,
			"Condition": {
				"ConditionType": "IndustryUnlocked",
				"Threshold": 1,
				"ConditionId": "musicage"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "armored",
				"Value": 1
			}
		},
		{
			"Id": "M0084",
			"Rank": 1,
			"Condition": {
				"ConditionType": "TradesSinceSubscription",
				"Threshold": 4,
				"ConditionId": "caroller"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 21,
				"ConditionId": "bell"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.2e54,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 2220,
				"ConditionId": "bell"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 700,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5550000000000,
				"ConditionId": "caroller"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 900,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 99,
				"ConditionId": "bauble"
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
				"Threshold": 8.88e79,
				"ConditionId": "gift"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.99e58,
				"ConditionId": "candycane"
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
				"Threshold": 9890000,
				"ConditionId": "figgypudding"
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
			"Id": "M0096",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3330000000000000000.0,
				"ConditionId": "caroller"
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
				"Threshold": 700,
				"ConditionId": "darkscience"
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
				"Threshold": 300000000,
				"ConditionId": "sleigh"
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
				"Threshold": 97000,
				"ConditionId": "bauble"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 900,
				"ConditionId": "darkscience"
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
				"Threshold": 3430000,
				"ConditionId": "bell"
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
				"Threshold": 3.23e42,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0103",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 700000000,
				"ConditionId": "sleigh"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e81,
				"ConditionId": "gift"
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
			"Id": "M0106",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.2e64,
				"ConditionId": "candycane"
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
			"Id": "M0108",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 747000,
				"ConditionId": "bauble"
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
				"Threshold": 585000000,
				"ConditionId": "bell"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 1000,
				"ConditionId": "darkscience"
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
				"Threshold": 88800000,
				"ConditionId": "figgypudding"
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
				"Threshold": 7650000000000000000.0,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0113",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 11,
				"ConditionId": "goldring"
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
				"Threshold": 1500000000,
				"ConditionId": "sleigh"
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
			"Id": "M0116",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.27e49,
				"ConditionId": "wreath"
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
			"Id": "M0118",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.4e73,
				"ConditionId": "candycane"
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
				"Threshold": 477000000,
				"ConditionId": "figgypudding"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 1000,
				"ConditionId": "darkscience"
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
				"Threshold": 189000,
				"ConditionId": "goldring"
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
				"Threshold": 3.33e86,
				"ConditionId": "gift"
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
				"Threshold": 2700000000,
				"ConditionId": "bauble"
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
				"Threshold": 88,
				"ConditionId": "friedchicken"
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
			"Id": "M0126",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.45e28,
				"ConditionId": "caroller"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 13000000000,
				"ConditionId": "sleigh"
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
				"Threshold": 5,
				"ConditionId": "spiderweb"
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
				"Threshold": 16000000,
				"ConditionId": "goldring"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0130",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 1000,
				"ConditionId": "darkscience"
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
				"Threshold": 9,
				"ConditionId": "milkcookies"
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
				"Threshold": 5.55e82,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0133",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 221000,
				"ConditionId": "friedchicken"
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
				"Threshold": 22200,
				"ConditionId": "spiderweb"
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
			"Id": "M0136",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.34e61,
				"ConditionId": "wreath"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 900,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.72e94,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0139",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 44400000,
				"ConditionId": "friedchicken"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 1500,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 2130000000,
				"ConditionId": "milkcookies"
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
				"Threshold": 1.23e89,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 8640000,
				"ConditionId": "spiderweb"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 4880000000,
				"ConditionId": "goldring"
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
			"Id": "M0146",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e38,
				"ConditionId": "caroller"
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
				"Threshold": 9960000000,
				"ConditionId": "friedchicken"
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
				"Threshold": 5.21e111,
				"ConditionId": "gift"
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
				"Threshold": 3,
				"ConditionId": "christmastree"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 1500,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.88e69,
				"ConditionId": "wreath"
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
				"Threshold": 2.1e96,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 21300000000,
				"ConditionId": "milkcookies"
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
				"Threshold": 34800000000,
				"ConditionId": "friedchicken"
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
			"Id": "M0156",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.33e118,
				"ConditionId": "gift"
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
				"Threshold": 1000,
				"ConditionId": "darkscience"
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
				"Threshold": 49500,
				"ConditionId": "christmastree"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 5550000000,
				"ConditionId": "spiderweb"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 1500,
				"ConditionId": "darkscience"
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
				"Threshold": 423,
				"ConditionId": "friedcaterpillar"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.3e106,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.21e73,
				"ConditionId": "wreath"
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
				"Threshold": 58500000,
				"ConditionId": "christmastree"
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
			"Id": "M0166",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 25500000000,
				"ConditionId": "spiderweb"
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
				"Threshold": 2.92e57,
				"ConditionId": "caroller"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 4,
				"ConditionId": "pohutukawa"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 235000,
				"ConditionId": "friedcaterpillar"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 1500,
				"ConditionId": "darkscience"
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
				"Threshold": 4.3e108,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.11e127,
				"ConditionId": "gift"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 82900000000,
				"ConditionId": "milkcookies"
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
				"Threshold": 1.45e59,
				"ConditionId": "caroller"
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
			"Id": "M0176",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.78e78,
				"ConditionId": "wreath"
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
				"Threshold": 1500,
				"ConditionId": "darkscience"
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
				"Threshold": 100000,
				"ConditionId": "pohutukawa"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 34600000,
				"ConditionId": "friedcaterpillar"
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
			"Id": "M0181",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.23e132,
				"ConditionId": "gift"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.55e88,
				"ConditionId": "wreath"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 5250000000,
				"ConditionId": "christmastree"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.44e114,
				"ConditionId": "candycane"
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
			"Id": "M0186",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.88e60,
				"ConditionId": "caroller"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 30000000000,
				"ConditionId": "christmastree"
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
				"Threshold": 44400000,
				"ConditionId": "pohutukawa"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 125000000000,
				"ConditionId": "milkcookies"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 2500,
				"ConditionId": "darkscience"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 3,
				"ConditionId": "balletdancer"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.88e95,
				"ConditionId": "wreath"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 3030000000,
				"ConditionId": "friedcaterpillar"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.55e116,
				"ConditionId": "candycane"
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
			"Id": "M0196",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.23e137,
				"ConditionId": "gift"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 55600,
				"ConditionId": "balletdancer"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1750,
				"ConditionId": "darkscience"
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
				"Threshold": 1.11e76,
				"ConditionId": "caroller"
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
			"Id": "M0201",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 9900000000,
				"ConditionId": "pohutukawa"
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
				"Threshold": 2.1e122,
				"ConditionId": "candycane"
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
				"Threshold": 9.99e101,
				"ConditionId": "wreath"
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
				"Threshold": 60600000000,
				"ConditionId": "friedcaterpillar"
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
			"Id": "M0206",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.88e78,
				"ConditionId": "caroller"
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
				"Threshold": 40000000000,
				"ConditionId": "pohutukawa"
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
			"Id": "M0209",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 525000000,
				"ConditionId": "balletdancer"
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
				"ConditionType": "ResourcesSpentSinceSubscription",
				"Threshold": 5000,
				"ConditionId": "darkscience"
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
				"Threshold": 5.55e102,
				"ConditionId": "wreath"
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
				"Threshold": 2.22e80,
				"ConditionId": "caroller"
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
				"Threshold": 4.4e126,
				"ConditionId": "candycane"
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
				"Threshold": 853000000000,
				"ConditionId": "milkcookies"
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
			"Id": "M0216",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e140,
				"ConditionId": "gift"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.33e88,
				"ConditionId": "caroller"
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
			"Id": "M0219",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 167000000000,
				"ConditionId": "friedcaterpillar"
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
			"Id": "M0221",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.26e105,
				"ConditionId": "wreath"
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
				"Threshold": 74700000000,
				"ConditionId": "balletdancer"
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
				"Threshold": 3.73e92,
				"ConditionId": "caroller"
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
				"Threshold": 343000000000,
				"ConditionId": "pohutukawa"
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
			"Id": "M0226",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
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
			"Id": "M0227",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.1e128,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 1200000000000,
				"ConditionId": "milkcookies"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.2e93,
				"ConditionId": "caroller"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 380000000000,
				"ConditionId": "pohutukawa"
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
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 800,
				"ConditionId": "any"
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
				"Threshold": 5.2e140,
				"ConditionId": "gift"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 670000000000,
				"ConditionId": "friedcaterpillar"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.25e110,
				"ConditionId": "wreath"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 200000000000,
				"ConditionId": "balletdancer"
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
			"Id": "M0237",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.22e130,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 1800000000000,
				"ConditionId": "milkcookies"
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
				"Threshold": 8e93,
				"ConditionId": "caroller"
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
				"Threshold": 430000000000,
				"ConditionId": "pohutukawa"
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
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0242",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.4e143,
				"ConditionId": "gift"
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
				"Threshold": 949000000000,
				"ConditionId": "friedcaterpillar"
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
				"Threshold": 5.26e112,
				"ConditionId": "wreath"
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
				"Threshold": 300000000000,
				"ConditionId": "balletdancer"
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
			"Id": "M0247",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.5e131,
				"ConditionId": "candycane"
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
				"Threshold": 2500000000000,
				"ConditionId": "milkcookies"
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
				"Threshold": 8.34e94,
				"ConditionId": "caroller"
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
				"Threshold": 500000000000,
				"ConditionId": "pohutukawa"
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
				"ConditionType": "ResearcherCardsEarnedSinceSubscription",
				"Threshold": 1000,
				"ConditionId": "any"
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
				"Threshold": 2.22e148,
				"ConditionId": "gift"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 1100000000000,
				"ConditionId": "friedcaterpillar"
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
				"Threshold": 2.35e114,
				"ConditionId": "wreath"
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
				"Threshold": 400000000000,
				"ConditionId": "balletdancer"
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
			"Id": "M0257",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.3e133,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 3200000000000,
				"ConditionId": "milkcookies"
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
				"Threshold": 9.2e95,
				"ConditionId": "caroller"
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
				"Threshold": 740000000000,
				"ConditionId": "pohutukawa"
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
				"Threshold": 3.9e151,
				"ConditionId": "gift"
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
				"Threshold": 1300000000000,
				"ConditionId": "friedcaterpillar"
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
				"Threshold": 2.8e116,
				"ConditionId": "wreath"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 600000000000,
				"ConditionId": "balletdancer"
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
			"Id": "M0266",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.3e135,
				"ConditionId": "candycane"
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
				"Threshold": 4000000000000,
				"ConditionId": "milkcookies"
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
				"Threshold": 7.5e96,
				"ConditionId": "caroller"
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
				"Threshold": 900000000000,
				"ConditionId": "pohutukawa"
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
				"Threshold": 6e153,
				"ConditionId": "gift"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 1700000000000,
				"ConditionId": "friedcaterpillar"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.34e118,
				"ConditionId": "wreath"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 800000000000,
				"ConditionId": "balletdancer"
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
			"Id": "M0275",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.2e137,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 5500000000000,
				"ConditionId": "milkcookies"
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
				"Threshold": 6.6e98,
				"ConditionId": "caroller"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 1300000000000,
				"ConditionId": "pohutukawa"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.5e156,
				"ConditionId": "gift"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 2400000000000,
				"ConditionId": "friedcaterpillar"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.7e122,
				"ConditionId": "wreath"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 1000000000000,
				"ConditionId": "balletdancer"
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
				"Threshold": 6.56e143,
				"ConditionId": "candycane"
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
				"Threshold": 7000000000000,
				"ConditionId": "milkcookies"
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
				"Threshold": 5.3e100,
				"ConditionId": "caroller"
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
				"Threshold": 2000000000000,
				"ConditionId": "pohutukawa"
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
				"Threshold": 2.8e161,
				"ConditionId": "gift"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 3600000000000,
				"ConditionId": "friedcaterpillar"
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
				"Threshold": 5.9e126,
				"ConditionId": "wreath"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 1700000000000,
				"ConditionId": "balletdancer"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.2e147,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 13000000000000,
				"ConditionId": "milkcookies"
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
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.9e105,
				"ConditionId": "caroller"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 3200000000000,
				"ConditionId": "pohutukawa"
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
				"Threshold": 8.4e165,
				"ConditionId": "gift"
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
				"Threshold": 6000000000000,
				"ConditionId": "friedcaterpillar"
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
				"Threshold": 2.6e129,
				"ConditionId": "wreath"
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
				"Threshold": 5000000000000,
				"ConditionId": "balletdancer"
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
				"Threshold": 1.3e150,
				"ConditionId": "candycane"
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
				"ConditionType": "ResourceQuantity",
				"Threshold": 27000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0301",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.5e107,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0302",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 4500000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0303",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.3e169,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0304",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 8500000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0305",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.9e132,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0306",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 7300000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0307",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.2e154,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0308",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 40000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0309",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.8e109,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0310",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 6200000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0311",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.89e173,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0312",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 12000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0313",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.7e135,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0314",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 8600000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0315",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.23e158,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0316",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 56000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0317",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.2e112,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0318",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 9300000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0319",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.4e177,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0320",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 17000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0321",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.5e139,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0322",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 10000000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0323",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.2e162,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0324",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 74000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0325",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.3e115,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0326",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 13000000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0327",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.12e182,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0328",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 23000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0329",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.56e143,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0330",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 13000000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0331",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.9e166,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0332",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 95000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0333",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.7e118,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0334",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 17000000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0335",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.5e187,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0336",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 30000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0337",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.1e147,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0338",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 16000000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0339",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.77e170,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0340",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 113000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0341",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.2e121,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0342",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 21000000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0343",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.5e192,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0344",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 37000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0345",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 9.9e151,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0346",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 19000000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0347",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6e175,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0348",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 132000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0349",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.25e125,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0350",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 25000000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0351",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.34e197,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0352",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 45000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0353",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.43e155,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0354",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 22000000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0355",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.9e180,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0356",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 150000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0357",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.6e129,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0358",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 29000000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0359",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.9e203,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0360",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 52000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0361",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.1e159,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0362",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 25000000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0363",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.34e185,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0364",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 171000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0365",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.3e133,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0366",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 33000000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0367",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.64e209,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0368",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 59000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0369",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.4e163,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0370",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 28000000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0371",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 2.4e190,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0372",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 188000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0373",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.45e137,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0374",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 37000000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0375",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.94e215,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0376",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 66000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0377",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 8.88e167,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0378",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 30000000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0379",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.2e195,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0380",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 212000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0381",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.6e142,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0382",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 41000000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0383",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.7e220,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0384",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 73000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0385",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.3e171,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0386",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 33000000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0387",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 3.6e200,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0388",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 235000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0389",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 7.5e147,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0390",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 45000000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0391",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 5.3e225,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0392",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 80000000000000,
				"ConditionId": "friedcaterpillar"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0393",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.4e175,
				"ConditionId": "wreath"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0394",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 36000000000000,
				"ConditionId": "balletdancer"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0395",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 4.6e205,
				"ConditionId": "candycane"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0396",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 260000000000000,
				"ConditionId": "milkcookies"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0397",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 1.23e152,
				"ConditionId": "caroller"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0398",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 50000000000000,
				"ConditionId": "pohutukawa"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0399",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourcesEarnedSinceSubscription",
				"Threshold": 6.6e231,
				"ConditionId": "gift"
			},
			"Reward": {
				"Reward": "Gacha",
				"RewardId": "plastic",
				"Value": 1
			}
		},
		{
			"Id": "M0400",
			"Rank": 1,
			"Condition": {
				"ConditionType": "ResourceQuantity",
				"Threshold": 88000000000000,
				"ConditionId": "friedcaterpillar"
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
					"ItemId": "t05_lte_rank7",
					"Duration": 0
				},
				{
					"ItemId": "t06_lte_rank10",
					"Duration": 0
				},
				{
					"ItemId": "t07_lte_rank13",
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
					"ItemId": "t12_lte_rank26",
					"Duration": 0
				},
				{
					"ItemId": "t13_lte_rank28",
					"Duration": 0
				},
				{
					"ItemId": "t15_lte_rank30",
					"Duration": 0
				},
				{
					"ItemId": "t25_lte_rank31",
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
			"Missions": "4",
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
			"Missions": "5",
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
			"Missions": "6",
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
			"Missions": "7",
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
			"Missions": "8",
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
			"Missions": "5",
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
			"Missions": "5",
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
			"Missions": "8",
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
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 3.6,
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
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 3.8,
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
			"Missions": "6",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.5,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 15,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "17",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "9",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.7,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 16,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "18",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 3.9,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 17,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "19",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "9",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 4.6,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 4.1,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 18,
			"AirDropScience": 30,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "20",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": "4.8",
			"PremiumGachaMultiplier": "1",
			"NormalGachaMultiplierScience": "4.3",
			"PremiumGachaMultiplierScience": "1",
			"GachaMultiplierTrophy": "19",
			"AirDropScience": "40",
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "21",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": "4.9",
			"PremiumGachaMultiplier": "1",
			"NormalGachaMultiplierScience": "4.5",
			"PremiumGachaMultiplierScience": "1",
			"GachaMultiplierTrophy": "20",
			"AirDropScience": "40",
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 22,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5,
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
			"Missions": "10",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.1,
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
			"Missions": "7",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.2,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 5.1,
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
			"NormalGachaMultiplier": 5.3,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 5.3,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 28,
			"AirDropScience": 50,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 26,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.4,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 5.5,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 30,
			"AirDropScience": 50,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 27,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "11",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.5,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 5.7,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 35,
			"AirDropScience": 50,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 28,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "8",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.6,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 5.9,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 40,
			"AirDropScience": 50,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": 29,
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "11",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.7,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 6.1,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 45,
			"AirDropScience": 50,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "30",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "9",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.8,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 6.3,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 50,
			"AirDropScience": 60,
			"AirDropRankUpCoolDown": 60
		},
		{
			"Rank": "31",
			"Name": "UNUSED",
			"SpriteName": "art-avatar",
			"Missions": "13",
			"ActiveMissionCount": 3,
			"RewardType": "None",
			"NormalGachaMultiplier": 5.9,
			"PremiumGachaMultiplier": 1,
			"NormalGachaMultiplierScience": 6.5,
			"PremiumGachaMultiplierScience": 1,
			"GachaMultiplierTrophy": 60,
			"AirDropScience": 60,
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
			"Id": "CHR001",
			"Name": "Peeta Pie",
			"Description": "researcher.RS0001.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"santahat"
			],
			"ExpoMultiplier": 1,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 1,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR002",
			"Name": "Tiny Cakes",
			"Description": "researcher.RS0002.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"redcoat"
			],
			"ExpoMultiplier": 2,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 3,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR003",
			"Name": "Sir Gizmolot",
			"Description": "researcher.RS0003.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"blackboots"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 4,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR004",
			"Name": "Keebler Monster",
			"Description": "researcher.RS0004.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"list"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 7,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR005",
			"Name": "Harace & Grumar",
			"Description": "researcher.RS0005.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"toysack"
			],
			"ExpoMultiplier": 5,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 10,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR006",
			"Name": "Wonky Landing",
			"Description": "researcher.RS0006.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"sleigh"
			],
			"ExpoMultiplier": 6,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 14,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR007",
			"Name": "Dusty Spangles",
			"Description": "researcher.RS0007.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"milkcookies"
			],
			"ExpoMultiplier": 7,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 22,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR008",
			"Name": "Eastpark",
			"Description": "researcher.RS0008.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"gingerbreadhouse"
			],
			"ExpoMultiplier": 2,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 5,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR009",
			"Name": "Snow Blow",
			"Description": "researcher.RS0009.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"yulelog"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 7,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR010",
			"Name": "Shovel King",
			"Description": "researcher.RS0010.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"panettone"
			],
			"ExpoMultiplier": 6,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 11,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR011",
			"Name": "Cliffmeister",
			"Description": "researcher.RS0011.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"figgypudding"
			],
			"ExpoMultiplier": 8,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 15,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR012",
			"Name": "Smokey Materials",
			"Description": "researcher.RS0012.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"friedchicken"
			],
			"ExpoMultiplier": 10,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 21,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR013",
			"Name": "Let It Snow",
			"Description": "researcher.RS0013.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"friedcaterpillar"
			],
			"ExpoMultiplier": 12,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 25,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR014",
			"Name": "Melt Hard",
			"Description": "researcher.RS0014.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"poinsettia"
			],
			"ExpoMultiplier": 3,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 8,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR015",
			"Name": "Bazooka Snow",
			"Description": "researcher.RS0015.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"parol"
			],
			"ExpoMultiplier": 6,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 12,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR016",
			"Name": "Crispy Und Panzer",
			"Description": "researcher.RS0016.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"bauble"
			],
			"ExpoMultiplier": 9,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 17,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR017",
			"Name": "Harry Soldier",
			"Description": "researcher.RS0017.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"spiderweb"
			],
			"ExpoMultiplier": 12,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 21,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR018",
			"Name": "King Of Solitude",
			"Description": "researcher.RS0018.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"pohutukawa"
			],
			"ExpoMultiplier": 15,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 26,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR019",
			"Name": "Bad Arthur",
			"Description": "researcher.RS0019.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"bell"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 15,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR020",
			"Name": "Doolie Boolie",
			"Description": "researcher.RS0020.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"goldring"
			],
			"ExpoMultiplier": 8,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 19,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR021",
			"Name": "Bubloph",
			"Description": "researcher.RS0021.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"christmastree"
			],
			"ExpoMultiplier": 12,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 24,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR022",
			"Name": "Sleigher",
			"Description": "researcher.RS0022.desc",
			"ModType": "GenManagerAndSpeedMult",
			"TargetIds": [
				"balletdancer"
			],
			"ExpoMultiplier": 16,
			"ExpoGrowth": 3,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteCommon",
			"PlayerRankUnlock": 28,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR023",
			"Name": "Mama Griswold",
			"Description": "researcher.RS0023.desc",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"gift"
			],
			"ExpoMultiplier": 1.5,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 1,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR026",
			"Name": "Killzone",
			"Description": "researcher.RS0024.desc",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"candycane"
			],
			"ExpoMultiplier": 2.5,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 6,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR029",
			"Name": "Buddy Brown",
			"Description": "researcher.RS0025.desc",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"wreath"
			],
			"ExpoMultiplier": 3.5,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 11,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR032",
			"Name": "Dental Man",
			"Description": "researcher.RS0026.desc",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"caroller"
			],
			"ExpoMultiplier": 4.5,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 18,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR024",
			"Name": "Ginger Heist",
			"Description": "researcher.RS0027.desc",
			"ModType": "GeneratorPayoutMultiplier",
			"TargetIds": [
				"giftage"
			],
			"ExpoMultiplier": 0.5,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 1,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR027",
			"Name": "Thing Age",
			"Description": "researcher.RS0028.desc",
			"ModType": "GeneratorPayoutMultiplier",
			"TargetIds": [
				"treatage"
			],
			"ExpoMultiplier": 1,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 4,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR030",
			"Name": "Pink Ryder",
			"Description": "researcher.RS0029.desc",
			"ModType": "GeneratorPayoutMultiplier",
			"TargetIds": [
				"decorationage"
			],
			"ExpoMultiplier": 1.5,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 13,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR033",
			"Name": "Cool E.L.F.S.",
			"Description": "researcher.RS0030.desc",
			"ModType": "GeneratorPayoutMultiplier",
			"TargetIds": [
				"musicage"
			],
			"ExpoMultiplier": 2,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 20,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR025",
			"Name": "Gingy Cratchit",
			"Description": "researcher.RS0031.desc",
			"ModType": "GeneratorCritChance",
			"TargetIds": [
				"giftage,treatage,decorationage,musicage"
			],
			"ExpoMultiplier": 0,
			"ExpoGrowth": 0,
			"UpgradePower": 0,
			"CurveModifier": 0.12,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 7,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR028",
			"Name": "Night Witch",
			"Description": "researcher.RS0032.desc",
			"ModType": "GeneratorPayoutMultiplier",
			"TargetIds": [
				"giftage,treatage,decorationage,musicage"
			],
			"ExpoMultiplier": 1.25,
			"ExpoGrowth": 4,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 10,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR034",
			"Name": "Blue Frosty",
			"Description": "researcher.RS0033.desc",
			"ModType": "TradePayoutMultiplier",
			"TargetIds": [
				"gift,candycane,wreath,caroller"
			],
			"ExpoMultiplier": 1,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 16,
			"ResearchOutputType": "Constant"
		},
		{
			"Id": "CHR031",
			"Name": "Troughsky's Ghost",
			"Description": "researcher.RS0034.desc",
			"ModType": "GeneratorCritPowerMult",
			"TargetIds": [
				"giftage,treatage,decorationage,musicage"
			],
			"ExpoMultiplier": 4,
			"ExpoGrowth": 2,
			"UpgradePower": 0,
			"CurveModifier": 0,
			"BasePower": 0,
			"Rarity": "LteRare",
			"PlayerRankUnlock": 23,
			"ResearchOutputType": "Constant"
		}
	],
	"Resources": [
		{
			"Id": "gift",
			"Singular": "gift",
			"Plural": "gift",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "candycane",
			"Singular": "candycane",
			"Plural": "candycane",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "wreath",
			"Singular": "wreath",
			"Plural": "wreath",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "caroller",
			"Singular": "caroller",
			"Plural": "caroller",
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "santahat",
			"Singular": "santahat",
			"Plural": "santahat",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "redcoat",
			"Singular": "redcoat",
			"Plural": "redcoat",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "blackboots",
			"Singular": "blackboots",
			"Plural": "blackboots",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "list",
			"Singular": "list",
			"Plural": "list",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "toysack",
			"Singular": "toysack",
			"Plural": "toysack",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "sleigh",
			"Singular": "sleigh",
			"Plural": "sleigh",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "milkcookies",
			"Singular": "milkcookies",
			"Plural": "milkcookies",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "gingerbreadhouse",
			"Singular": "gingerbreadhouse",
			"Plural": "gingerbreadhouse",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "yulelog",
			"Singular": "yulelog",
			"Plural": "yulelog",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "panettone",
			"Singular": "panettone",
			"Plural": "panettone",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "figgypudding",
			"Singular": "Frozen Lake",
			"Plural": "Frozen Lake",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "friedchicken",
			"Singular": "friedchicken",
			"Plural": "friedchicken",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "friedcaterpillar",
			"Singular": "friedcaterpillar",
			"Plural": "friedcaterpillar",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "poinsettia",
			"Singular": "Ruin",
			"Plural": "Ruin",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "parol",
			"Singular": "parol",
			"Plural": "parol",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "bauble",
			"Singular": "bauble",
			"Plural": "bauble",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "spiderweb",
			"Singular": "spiderweb",
			"Plural": "spiderweb",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "pohutukawa",
			"Singular": "pohutukawa",
			"Plural": "pohutukawa",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "bell",
			"Singular": "bell",
			"Plural": "bell",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "goldring",
			"Singular": "goldring",
			"Plural": "goldring",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "christmastree",
			"Singular": "christmastree",
			"Plural": "christmastree",
			"StartingQty": 1,
			"Resettable": true,
			"SharedData": false
		},
		{
			"Id": "balletdancer",
			"Singular": "balletdancer",
			"Plural": "balletdancer",
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
			"BundleTheme": "christmas",
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
					"Value": 15,
					"RewardId": "CHR027"
				},
				{
					"Reward": "Researcher",
					"Value": 100,
					"RewardId": "CHR003"
				},
				{
					"Reward": "Resources",
					"Value": 1000,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "christmas",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 7 Bundle",
			"InternalId": "t05_lte_rank7",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 499,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 30,
					"RewardId": "CHR025"
				},
				{
					"Reward": "Researcher",
					"Value": 200,
					"RewardId": "CHR009"
				},
				{
					"Reward": "Resources",
					"Value": 2000,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "christmas",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 10 Bundle",
			"InternalId": "t06_lte_rank10",
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
					"Value": 50,
					"RewardId": "CHR028"
				},
				{
					"Reward": "Researcher",
					"Value": 300,
					"RewardId": "CHR005"
				},
				{
					"Reward": "Resources",
					"Value": 3000,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "christmas",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 13 Bundle",
			"InternalId": "t07_lte_rank13",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 699,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 75,
					"RewardId": "CHR030"
				},
				{
					"Reward": "Researcher",
					"Value": 400,
					"RewardId": "CHR015"
				},
				{
					"Reward": "Resources",
					"Value": 4000,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "christmas",
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
					"RewardId": "CHR034"
				},
				{
					"Reward": "Researcher",
					"Value": 500,
					"RewardId": "CHR019"
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
			"BundleTheme": "christmas",
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
					"RewardId": "CHR020"
				},
				{
					"Reward": "Resources",
					"Value": 6000,
					"RewardId": "darkscience"
				}
			],
			"BundleTheme": "christmas",
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
			"BundleTheme": "christmas",
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
					"RewardId": "CHR031"
				},
				{
					"Reward": "Researcher",
					"Value": 700,
					"RewardId": "CHR021"
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
			"BundleTheme": "christmas",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 26 Bundle",
			"InternalId": "t12_lte_rank26",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 1199,
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
					"RewardId": "CHR018"
				},
				{
					"Reward": "Resources",
					"Value": 15000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 4,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "christmas",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 28 Bundle",
			"InternalId": "t13_lte_rank28",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 1299,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Researcher",
					"Value": 900,
					"RewardId": "CHR022"
				},
				{
					"Reward": "Resources",
					"Value": 18000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 5,
					"RewardId": "timehack_4"
				}
			],
			"BundleTheme": "christmas",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 30 Bundle",
			"InternalId": "t15_lte_rank30",
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
			"BundleTheme": "christmas",
			"CustomData": "{\"icon\":\"vc-ftb\"}"
		},
		{
			"Name": "Event Rank 31 Bundle",
			"InternalId": "t25_lte_rank31",
			"ItemClass": "VirtualCurrencyBundle",
			"Price": 2499,
			"Currency": "RM",
			"Tags": [
				"RealMoneyPurchase",
				"Bundle"
			],
			"Rewards": [
				{
					"Reward": "Resources",
					"Value": 25000,
					"RewardId": "darkscience"
				},
				{
					"Reward": "Resources",
					"Value": 8,
					"RewardId": "timehack_4"
				},
				{
					"Reward": "Resources",
					"Value": 2,
					"RewardId": "timehack_24"
				}
			],
			"BundleTheme": "christmas",
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
			"Resource": "gift",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 1,
			"MaxLevel": 249
		},
		{
			"Resource": "candycane",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 2,
			"MaxLevel": 249
		},
		{
			"Resource": "wreath",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 3,
			"MaxLevel": 249
		},
		{
			"Resource": "caroller",
			"CostExponent": 10,
			"CostMultiplier": 500,
			"ComradeMultiplier": 0,
			"ComradeAdd": 4,
			"MaxLevel": 249
		}
	]
},
  