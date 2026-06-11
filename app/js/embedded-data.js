var SHIPS_CSV = `Faction,Tier,Name,Rarity,Type,Eng,Tac,Sci,Bonus,Trait,Id
Federation,0,Class F Shuttle,Common,Smc,2,2,2,-25% Maintenance per ANY Ship (Not Small Craft),,3e33a95f-27f5-4a22-b44a-92b241daa2ba
Federation,0,Danube Class Runabout,Common,Smc,3,2,1,-25% Maintenance per ANY Ship (Not Small Craft),,aacb9d4d-c04a-413e-ac0b-aadb44d16157
Federation,0,Federation Shuttlecraft,Common,Smc,2,2,2,-25% Maintenance per ANY Ship (Not Small Craft),,2213aecc-7a9c-4d80-adc4-cfbdcbcf242f
Federation,0,Type-10 Shuttlecraft,Common,Smc,2,2,2,5x Critical Rating from all Stats,,9b73efbf-16e5-4600-ab44-7b4d1ed2f3f8
Federation,0,Type-8 Shuttlecraft,Common,Smc,4,1,1,+10 ALL Stats per ANY Ship (Not Small Craft),,acb9f489-ce24-4e1c-a00d-bd954866b129
Federation,0,Captain's Yacht,Rare,Smc,4,3,3,5x Critical Rating from ALL Stats,,29f7c4e6-1fbb-4f65-a24f-d9e4dc340ff4
Federation,0,Delta Class Shuttle,Rare,Smc,3,3,4,+10 ALL Stats per ANY Ship (Not Small Craft),,1c6f933c-69c7-4c9e-b1a5-1822e31bcdc5
Federation,0,Mirror Universe Danube Class Runabout,Rare,Smc,4,5,1,-25% Maintenance per ANY Ship (Not Small Craft),,b0b90eca-6178-4732-8ffd-36c87478a77e
Federation,0,Peregrine Attack Fighter,Rare,Smc,3,4,3,5x Critical Rating from ALL Stats,,87c57e95-4fb8-4dd8-97b2-8e772a7eb429
Federation,0,Stalker Stealth Fighter,Rare,Smc,3,4,3,+10 ALL Stats per ANY Ship (Not Small Craft),,95542f1b-e186-442d-b907-4bb556da802d
Federation,0,Tal'Kyr Support Craft,Rare,Smc,3,1,6,-25% Maintenance per ANY Ship (Not Small Craft),,afd91663-096d-4cf9-89c1-28283ea4a8e1
Federation,0,Type-7 Shuttlecraft,Rare,Smc,5,3,2,5x Critical Rating from ALL Stats,,cc1c0840-71ff-40bd-b0dc-99b93808b0fa
Federation,0,Yellowstone Class Runabout,Rare,Smc,3,4,3,5x Critical Rating from ALL Stats,,3c3b943d-2684-4378-ad36-dd03dad6d264
Federation,0,Aeon Timeship,UltraRare,Smc,3,4,7,-25% Maintenance per ANY Ship (not small craft),,9145b0fc-b0e0-478d-b2ab-ee2bdcd5561e
Federation,1,Malachowski Light Cruiser,Common,Eng,6,4,5,2x Critical Rating from Events,,b8755f6c-cea9-4fe5-a8e9-b30fa6ac6047
Federation,1,Miranda Light Cruiser,Common,Eng,5,5,5,2x Critical Rating from Events,,4d74286b-fc9f-4162-80b8-86e22254ef25
Federation,1,Pioneer Utility Cruiser,Common,Eng,6,5,4,2x Critical Rating from Events,,d94852b2-8f02-4145-b58f-12a01855e693
Federation,1,Andorian Kumari Light Escort,Rare,Tac,4,10,4,2.5x Critical Rating from TAC,,bb3bb596-fdb0-4b5a-ab39-84b7e82a6d7b
Federation,1,Constitution Light Cruiser,Rare,Eng,6,6,6,2.5x Critical Rating from ENG,,4c4bfd01-cf4c-4bc4-8889-29461eb1ee02
Federation,1,NX Light Escort,Rare,Tac,5,8,5,1.5x Critical Rating from TAC and SCI,,07ac972f-ebed-4de3-a0a8-c1b9f1cb96ce
Federation,1,Oberth Light Science Vessel,Rare,Sci,4,4,10,2.5x Critical Rating from SCI,,0b4870b7-5a7d-4738-8338-de278e515c09
Federation,1,Steamrunner Blockade Runner Escort,Rare,Tac,6,7,5,1.5x Critical Rating from TAC and ENG,,42250339-3177-42fb-8f83-cfbac03aaecb
Federation,2,Constitution Cruiser,Common,Eng,14,8,8,+8 ENG per SciShip or TacShip,,3aea7ba0-979b-48cf-b465-fc7dc65ea85a
Federation,2,Nova Science Vessel,Common,Sci,8,8,14,+8 SCI per EngShip or TacShip,,7d76f2da-d754-4987-8e2c-647b0ab16a7a
Federation,2,Saber Escort,Common,Tac,8,14,8,+8 TAC per EngShip or SciShip,,901ed61b-e5cc-44be-9fbb-dea2b8e5add0
Federation,2,Daedalus Temporal Science Vessel,Rare,Sci,6,11,19,Ignores +/- SCI from Events,,8a3203ac-1969-42b5-bedb-44e464b16bc0
Federation,2,Exeter Cruiser Refit,Rare,Eng,18,9,9,1.5x Critical Rating from SCI or TAC,,bc7c8d9d-7907-4a62-a63b-ec904696d0cf
Federation,2,Gladius Escort Refit,Rare,Tac,9,18,9,1.5x Critical Rating from ENG or SCI,,c90b6016-fd4c-46cb-aab9-edc9465aa58f
Federation,2,Rhode Island Science Vessel Refit,Rare,Sci,9,9,18,1.5x Critical Rating from ENG or TAC,,6a54f479-3382-4ba6-90be-5b1a0e949109
Federation,3,Akira Heavy Escort,Common,Tac,11,23,11,2.5x Critical Rating from TAC,,f727d77f-c346-49cd-856d-f48eda57f8d8
Federation,3,Ambassador Support Cruiser,Common,Eng,22,10,13,1.5x Critical Rating from ENG and SCI,,df58ee4f-9353-41a6-9d44-26d69c6d23a9
Federation,3,Cheyenne Heavy Cruiser,Common,Eng,23,11,11,2.5x Critical Rating from ENG,,1df74b55-7680-45ed-9c84-8d0ab3986347
Federation,3,Olympic Research Science Vessel,Common,Sci,11,11,23,2.5x Critical Rating from SCI,,1f944e69-aa0a-4634-8c37-c3e60cd30773
Federation,3,Constellation Heavy Cruiser Refit,Rare,Eng,28,13,13,Ignore +ENG from Events,,5f16beeb-99f9-47c0-8711-e930c2461976
Federation,3,Excelsior Advanced Heavy Cruiser,Rare,Eng,26,16,12,1.5x Critical Rating from TAC and ENG,,08ed80eb-bc19-4c56-83fc-68625e287a24
Federation,3,Nebula Advanced Research Vessel,Rare,Sci,13,13,28,Ignore +SCI from Events,,2e3bc9c9-3440-4c88-83c4-605799a2a012
Federation,3,Perseus Temporal Escort,Rare,Tac,9,30,15,Ignores +/- TAC from Events,,6b8693ac-0691-4332-8690-ae3f44d01413
Federation,3,Thunderchild Heavy Escort Refit,Rare,Tac,13,28,13,Ignore +TAC from Events,,7d432e10-ad12-4dad-a048-a3d52d88adf5
Federation,4,Defiant Tactical Escort,Common,Tac,12,36,12,+8 TAC per EngShip or SciShip,,ec87bb15-c8c0-4806-956d-d8e651c25e96
Federation,4,Galaxy Exploration Cruiser,Common,Eng,36,12,12,+8 ENG per SciShip or TacShip,,a624e603-3d20-4faf-9ddb-f70105127bff
Federation,4,Intrepid Long Range Science Vessel,Common,Sci,12,12,36,+8 SCI per EngShip or TacShip,,093d32b3-b23e-47a7-9ad6-8c800e2309e8
Federation,4,Prototype Walker Light Exploration Cruiser,Common,Eng,44,14,14,+10 ENG per Engship,,eb9d7aff-924a-490e-b7a3-c343ec1d3937
Federation,4,Bellerophon Long Range Science Vessel Refit,Rare,Sci,15,15,42,1.5x Critical Rating from ENG and TAC,,43c5e0a5-48ab-43a6-985f-45aae47f1e75
Federation,4,Gemini Temporal Cruiser,Rare,Eng,38,20,14,Ignores +/- ENG from Events,,1871412e-a9b6-4434-a0cd-e5a9d7c036c7
Federation,4,Sao Paulo Tactical Escort Refit,Rare,Tac,15,42,15,1.5x Critical Rating from ENG and SCI,,26433319-1d03-4a80-b2cf-c13479f3df49
Federation,4,Venture Exploration Cruiser Refit,Rare,Eng,42,15,15,1.5x Critical Rating from TAC and SCI,,5a8bef9d-850f-4748-8769-51745b6afc82
Federation,4,Kobayashi Maru Freighter,Epic,Eng,47,13,30,+20 ALL per Any Ship (Not Small Craft),,9f9dcfdd-43db-47d9-b13e-290d86548b6c
Federation,5,Aquarius Light Escort,Common,Tac,16,42,16,1.5x Critical Rating from ENG and SCI,,4c09d8ac-5656-44bc-90d2-415dd07dc53d
Federation,5,Cheyenne Heavy Cruiser Retrofit,Common,Eng,50,14,11,-10% Maintenance per SciShip or TacShip,,cb842d90-20e7-4f4c-a7ea-4abfc277bc08
Federation,5,Emissary Star Cruiser,Common,Eng,47,11,17,+10 SCI per SciShip,,da5213e4-6eaf-4db3-80fc-e15a53b907b2
Federation,5,Hermes Patrol Escort,Common,Tac,17,47,11,+10 ENG per EngShip,,5e99f778-bdd3-4105-b0bd-f084f4d0d976
Federation,5,Luna Reconnaissance Science Vessel,Common,Sci,11,17,47,+10 TAC per TacShip,,1729c248-df28-497d-b516-4aed752c9bd3
Federation,5,Nova Science Vessel Retrofit,Common,Sci,12,16,47,+5 ENG and TAC per EngShip or TacShip,,f255b05e-0c3d-44e8-8d6e-7049686c4dfb
Federation,5,Odyssey Star Cruiser,Common,Eng,46,13,16,-5% Maintenance per Ship,,914d03c1-7f48-45c1-ac98-6c1670fb801a
Federation,5,Olympic Research Science Vessel Retrofit,Common,Sci,12,12,51,+10 ENG and TAC when Alone,,d4daf3c1-6627-47ef-8b76-bf0eda5f7f25
Federation,5,Prometheus Advanced Escort,Common,Tac,11,47,17,+10 SCI per SciShip,,57e08800-3b1f-42d4-a468-9e82e7b91cc7
Federation,5,Saber Escort Retrofit,Common,Tac,13,49,13,1.5x Critical Rating from ENG and SCI,,1e082b7d-c193-4d0f-ad49-58699dc75729
Federation,5,Sovereign Assault Cruiser,Common,Eng,47,17,11,+10 TAC per TacShip,,bde5276c-b2b0-48ed-802b-edbf1236739f
Federation,5,Trident Deep Space Science Vessel,Common,Sci,17,11,47,+10 ENG per EngShip,,7f617cc5-952f-4d7c-ba08-01e00ce5b4f8
Federation,5,Mirror Cheyenne Heavy Cruiser Retrofit,Uncommon,Eng,50,19,14,1.5x Critical Rating from SCI and Tac,,96d4446e-5ba1-45d1-acf3-e175abf8139a
Federation,5,Mirror Dervish Advanced Escort,Uncommon,Tac,12,50,21,+10 ENG per EngShip,,66f878c7-46f5-4450-bfdb-83ded7d84188
Federation,5,Mirror Emissary Assault Cruiser,Uncommon,Eng,50,12,21,+10 SCI per TacShip,,b62d2f81-fc61-486e-bbdf-1939f3da459b
Federation,5,Mirror Luna Deep Space Science Vessel,Uncommon,Sci,12,21,50,+10 ENG per EngShip,,0532b218-d74f-4a81-8cf0-892176518cc7
Federation,5,Mirror Nova Science Vessel Retrofit,Uncommon,Sci,15,18,50,+5 TAC and ENG per TacShip or EngShip,,07e058e8-2297-4cff-86f6-6fef7f3a022b
Federation,5,Mirror Phoenix Patrol Escort,Uncommon,Tac,21,50,12,+10 SCI per SciShip,,9bb0c701-15f9-46b4-99d2-010640f9d2de
Federation,5,Mirror Saber Escort Retrofit,Uncommon,Tac,17,52,14,+5 SCI and ENG per SciShip or TacShip,,0b7dee36-36a8-48b5-b863-8f773d60da20
Federation,5,Mirror Sovereign Star Cruiser,Uncommon,Eng,50,21,12,+10 TAC per SciShip,,9d1ce57f-770b-4633-be0c-b1afab6da3f5
Federation,5,Mirror Trident Reconnaissance Science Vessel,Uncommon,Sci,21,12,50,+10 TAC per TacShip,,cb3ab213-e081-438c-b97e-2db0602ca6f6
Federation,5,Armitage Heavy Strike Wing Escort,Rare,Tac,20,56,14,+20 ENG and SCI when Alone,,44b85111-e5ae-48af-991a-44970eb596fe
Federation,5,Avenger Battlecruiser,Rare,Eng,36,42,12,+10 SCI per SciShip,,2bcf12f7-a8ac-4951-b09c-7d219e410ec0
Federation,5,Caitian Atrox Carrier,Rare,Sci,26,14,50,+20 SCI and TAC when Alone,,6a309bd2-f167-417f-80b8-a0d58af48540
Federation,5,Chimera Heavy Destroyer,Rare,Tac,30,48,12,+8 SCI per SciShip or EngShip,,6564ec03-3c2b-4199-a17c-677dfb8e6044
Federation,5,D'Kyr Science Vessel,Rare,Sci,23,16,51,+8 ENG per EngShip or TacShip,,575575b2-ec4c-4de1-8993-950dc63e3e43
Federation,5,Defiant Tactical Escort Retrofit,Rare,Tac,20,55,15,+5 ENG and SCI per SciShip or EngShip,,e624a9ec-af0f-4c38-8791-1c5e573598ab
Federation,5,Excelsior Advanced Heavy Cruiser Retrofit,Rare,Eng,52,19,19,+5 SCI and TAC per SciShip or TacShip,,4a53bc3a-eb04-49e2-bc57-00fd54c3c426
Federation,5,Galaxy Dreadnought Cruiser,Rare,Eng,52,20,18,+10 SCI per SciShip,,e9101f5e-ebed-46fc-82fc-1ad5a277931c
Federation,5,Galaxy Exploration Cruiser Retrofit,Rare,Eng,55,15,20,+20 SCI and TAC when Alone,,ba9070e5-a270-4f52-99b4-987b9711b3d1
Federation,5,Intrepid Long Range Science Vessel Retrofit,Rare,Sci,20,15,55,+5 TAC and ENG per EngShip or TacShip,,a01fa940-cd71-4d78-9819-4c4e760876ce
Federation,5,Nebula Advanced Research Vessel Retrofit,Rare,Sci,16,23,51,+8 TAC per EngShip and TacShip,,5c045a96-6a3d-4d86-a643-adc63a3b7c36
Federation,5,Prometheus Multi-Vector Advanced Escort,Rare,Tac,18,50,22,+15 ALL when Alone,,b3616c6f-99f6-443b-a15b-167b37dda6d9
Federation,5,Ranger Temporal Battlecruiser,Rare,Eng,42,31,17,x2.5 BONUS from SCI,,aa2b7c92-a3a0-4089-9243-a5d0c1c7e98d
Federation,5,Regent Assault Cruiser Refit,Rare,Eng,52,23,15,+8 ENG per TacShip or SciShip,,ee318d3a-a5be-4758-8b62-c8201c18bd2f
Federation,5,Solanae Dyson Science Destroyer,Rare,Sci,12,28,50,Ignores +/- SCI from Events,,e624dc3f-6772-4965-83fa-0f257c9a8ad1
Federation,5,Steamrunner Blockade Runner Escort Retrofit,Rare,Tac,26,50,14,-5% Maintenance per Ship,,9805f8b1-3416-4c1c-b4ce-89432a16dee7
Federation,5,Tempest Patrol Escort Refit,Rare,Tac,22,53,15,+10 Tac per TacShip,,81bae075-6a2e-4f76-9edc-cfb76cad55b8
Federation,5,Andorian Charal Escort,VeryRare,Tac,24,54,20,+35 ENG when Alone,,104ffd50-ce3a-4564-aa47-6ba3481a262d
Federation,5,Andorian Khyzon Escort,VeryRare,Tac,20,54,24,+35 SCI when Alone,,7b4a5098-cf7f-4b40-ba43-ab6aa64b03a7
Federation,5,Andorian Kumari Escort,VeryRare,Tac,20,58,20,+35 TAC when Alone,,4f72eb04-beba-4186-8c53-6cb6a56c9aaa
Federation,5,Aventine Multi-Mission Reconnaissance Explorer,VeryRare,Sci,20,23,55,+35 TAC when Alone,,aa887651-2c61-4eee-a659-23d223b18fea
Federation,5,Fleet Akira Heavy Strike Wing Escort (T5),VeryRare,Tac,22,60,16,+10 ENG per SciShip,,09bdefa9-96d6-41e4-b637-1ca447c77090
Federation,5,Fleet Aquarius Light Escort,VeryRare,Tac,23,55,20,+8 ENG and SCI per TacShip,,1bb1d489-724e-4304-af67-7f95a7af1a34
Federation,5,Fleet Avenger Battlecruiser (T5),VeryRare,Eng,38,46,14,+10 ENG per EngShip,,73fa81fa-c2d0-4dcc-9c00-44fd45437a07
Federation,5,Fleet Caitian Atrox Carrier,VeryRare,Sci,28,16,54,+15 All when Alone,,376d7edf-97c7-496c-a65d-dd0d1735121e
Federation,5,Fleet Cheyenne Heavy Cruiser Retrofit,VeryRare,Eng,62,18,18,+8 ENG per SciShip or TacShip,,8b42baec-b008-4804-8566-72d6a3c5fbd1
Federation,5,Fleet Chimera Heavy Destroyer,VeryRare,Tac,32,52,14,+10 SCI per TacShip,,9f6cbf61-e2fc-4096-9fc9-e5c30ebe59e3
Federation,5,Fleet Comet Reconnaissance Science Vessel,VeryRare,Sci,16,22,60,+10 TAC per EngShip,,92c59805-c851-4bad-bf04-ab2f98329c5c
Federation,5,Fleet Defiant Tactical Escort Retrofit,VeryRare,Tac,19,67,12,+10 SCI per EngShip,,65c551eb-db48-46f1-8a78-47ec902d9e35
Federation,5,Fleet Excelsior Advanced Heavy Cruiser Retrofit,VeryRare,Eng,62,22,14,+10 ENG per SciShip,,8e13f3a9-99dd-4bf1-b34a-7ff8e0b7ec22
Federation,5,Fleet Galaxy Dreadnought Cruiser (T5),VeryRare,Eng,56,22,20,+5 SCI and TAC per SciShip or TacShip,,f6b0926f-8865-4b8b-a05a-54582606641a
Federation,5,Fleet Galaxy Exploration Cruiser Retrofit,VeryRare,Eng,66,12,20,2.5x Critical Rating from ENG,,862b5245-32fa-4ce2-b248-0b10da8d2a02
Federation,5,Fleet Hephaestus Advanced Escort (T5),VeryRare,Tac,14,63,21,2.5x Critical Rating per SCI,,2fe9b308-3f42-41f9-a68f-a403e4e1eab3
Federation,5,Fleet Imperial Assault Cruiser Refit,VeryRare,Eng,60,26,12,+10 Sci per TacShip,,ccfbed23-6eb1-4533-937d-7a582248acf0
Federation,5,Fleet Intrepid Long Range Science Vessel Retrofit,VeryRare,Sci,18,18,62,-25% Maintenance per SciShip,,39516655-bb0f-425f-8b22-d9edca72c4d4
Federation,5,Fleet Maelstrom Patrol Escort Refit,VeryRare,Tac,20,58,20,2.5x Critical Rating from TAC,,e45926d2-4c26-497e-a7ce-e180d09735d3
Federation,5,Fleet Nebula Advanced Research Vessel Retrofit,VeryRare,Sci,22,16,60,+8 ENG and TAC per TacShip,,d9d950fe-f06a-4883-beba-402c76c5cc60
Federation,5,Fleet Nimbus Deep Space Science Vessel,VeryRare,Sci,20,14,64,+10 ENG per TacShip,,df89c053-e182-47cb-9ac9-2da0ed821ab2
Federation,5,Fleet Nomad Star Cruiser,VeryRare,Eng,60,12,26,+10 TAC per SciShip,,4d726a7e-435a-4f25-8008-5c122be8e4d5
Federation,5,Fleet Nova Science Vessel Retrofit,VeryRare,Sci,12,25,58,2.5x Critical Rating from SCI,,0597b791-b114-48bd-bc12-61d1ccc18485
Federation,5,Fleet Olympic Research Science Vessel Retrofit,VeryRare,Sci,20,16,62,+8 ENG and TAC per EngShip,,14f5115b-b431-4aa0-bc47-31781317ca6e
Federation,5,Fleet Saber Escort Retrofit,VeryRare,Tac,20,58,20,2.5x Critical Rating from TAC,,16eea4f5-55d9-41de-aafc-18d57dff0935
Federation,5,Fleet Yamaguchi Support Cruiser Retrofit,VeryRare,Eng,59,21,18,-10% Maintenance per SciShip and TacShip,,67234d2a-2e79-45e3-b1dc-42508ab77dd4
Federation,5,Helios Dyson Surveillance Science Destroyer,VeryRare,Sci,12,32,54,+35 SCI when Alone,,c9b0db31-1cb3-45ae-8c18-7e84d305f706
Federation,5,Mobius Temporal Destroyer,UltraRare,Tac,23,59,23,+20 TAC and ENG when Alone,,783b2f0c-0ce2-4dec-9fa2-899de395b017
Federation,5,Montgomery Dyson Reconnaissance Science Destroyer,VeryRare,Sci,12,38,48,+35 TAC when Alone,,78b80181-5987-4140-8a87-905e8b86ae28
Federation,5,Odyssey Operations Cruiser,VeryRare,Eng,58,20,20,+35 ENG when Alone,,b4a013fc-97f8-454c-b1ed-6158b05b3ded
Federation,5,Odyssey Science Cruiser,VeryRare,Eng,54,20,24,+35 SCI when Alone,,e30b9b7b-d7ee-48b6-b913-46f19a579569
Federation,5,Odyssey Tactical Cruiser,VeryRare,Eng,54,24,20,+35 TAC when Alone,,e25b8504-dc7a-4ac4-b5e4-93cbdde602c5
Federation,5,Omega Dyson Strategic Science Destroyer,VeryRare,Sci,18,32,48,+35 ENG when Alone,,c4704f23-91e9-49aa-93e5-4b02170c8295
Federation,5,Rademaker Multi-Mission Strategic Explorer,VeryRare,Sci,24,19,55,+35 ENG when Alone,,cf7ed9af-6188-485a-83d5-5aa25868bca5
Federation,5,Vesta Multi-Mission Surveillance Explorer,VeryRare,Sci,20,19,59,+35 SCI when Alone,,b5328a54-bc3b-4f48-b5f0-28c3838f4d5f
Federation,5,Wells Temporal Science Vessel,UltraRare,Sci,23,23,59,2.5x Critical Rating from SCI,,70303e10-e112-401c-8886-83db258dd2c9
Federation,6,Alita Heavy Strike Wing Escort,Rare,Tac,25,65,18,+8 SCI per EngShip or TacShip,,80f86d62-6767-4781-ac98-a86b08ab1652
Federation,6,Andromeda Exploration Cruiser,Rare,Eng,70,19,19,+8 SCI and TAC per TacShip,,0298a662-2375-4e85-bdcc-b71ee9b21e4a
Federation,6,Arbiter Battlecruiser,Rare,Eng,41,50,17,-25% Maintenance per TacShip,,fa3b3a50-82b3-4aa6-b443-6a827d2dc4ea
Federation,6,Archon Intel Assault Cruiser,Rare,Eng,62,30,16,+20 TAC and ENG when Alone,,24d2b8d8-e050-4e83-a2d3-6e37fa0c51ab
Federation,6,Bozeman Intel Heavy Frigate,Rare,Eng,48,38,22,2.5x Critical Rating from ENG,,9922dc85-2519-408f-b924-ca2a6a42f331
Federation,6,Buran Command Dreadnought Cruiser,Rare,Eng,50,29,29,-25% Maintenance per EngShip,,3c2f8d98-0fb2-448f-b71b-dd8d1358a4eb
Federation,6,Cabot Command Light Escort,Rare,Tac,34,49,25,2.5x Critical Rating from TAC,,8ed8aca0-0c4b-4b7d-9eee-cda6fc3cbb66
Federation,6,Caitian Aspero Support Carrier,Rare,Sci,26,26,55,-25% Maintenance per SciShip,,0f16c10c-3086-498d-8fd4-1eba0b7a4d78
Federation,6,Caitian Shikaris Escort,Rare,Tac,23,49,36,+10 TAC per EngShip,,fd6dc73e-e232-4cd9-a3f3-7bf7b38d892b
Federation,6,Clarke Multi-Mission Command Cruiser,Rare,Eng,50,28,30,+6 ENG per Any Ship,,ff3dd6a3-8bac-45b1-b588-91b541561b84
Federation,6,Da Vinci Miracle Worker Escort,Rare,Tac,37,50,21,2.5x Bonus from ENG,,e3e7547c-e512-411f-b834-65144eefc195
Federation,6,Dauntless Experimental Science Vessel,Rare,Sci,22,28,58,+8 SCI per Any Ship,,7ac0f69f-e2a7-45f3-bb38-5c5f59ec2c32
Federation,6,Earhart Strike Wing Escort,Rare,Tac,26,50,32,+10 TAC per SciShip,,6a18628c-1822-4310-854f-2921d72fe6a7
Federation,6,Eclipse Intel Cruiser,Rare,Eng,60,22,26,+10 SCI per EngShip,,13deb9b4-3df9-485d-9c5a-fdae1904596e
Federation,6,Edison Temporal Warship,Rare,Tac,20,58,30,+10 TAC per SciShip,,51bf74ef-f6af-4cfb-b909-29a931ceb341
Federation,6,Equinox Pilot Scout Ship,Rare,Sci,21,28,59,+10 TAC per EngShip,,1d2efa7e-2d2f-478d-b6f6-209eabe92e38
Federation,6,Europa Heavy Battlecruiser,Rare,Eng,58,26,24,+8 ENG and SCI per TacShip,,e84b0319-f060-46e3-8840-3697708caacc
Federation,6,Gagarin Miracle Worker Battlecruiser,Rare,Eng,50,43,15,+8 TAC and ENG per EngShip,,c8be6faf-380b-4dda-ac76-63b829367307
Federation,6,Grissom Light Science Vessel,Rare,Sci,36,18,54,2.5x Critical Rating from SCI,,a816ff3e-54b2-402c-8b76-9955d15db916
Federation,6,Guardian Cruiser,Rare,Eng,66,21,21,2.5x Critical Rating from TAC,,61a5deff-2f0f-43b0-9087-9fadf9f9d467
Federation,6,Hestia Advanced Escort,Rare,Tac,16,68,24,+10 TAC per EngShip,,3ca799bc-fe95-405a-937c-6700ad3c637f
Federation,6,Jupiter Carrier,Rare,Sci,34,29,45,1.5x Critical Rating from TAC and ENG,,e670473f-00cb-407e-93fa-c4324f19eedb
Federation,6,Justiciar Command Star Cruiser,Rare,Eng,50,31,27,Ignores +/- TAC from Events,,ea806b16-08fa-427a-947e-3a10a8456e1a
Federation,6,Lafayette Recon Destroyer,Rare,Tac,19,52,37,+10 SCI per TacShip,,70607eba-54d0-4267-863d-f38590469b8c
Federation,6,Manticore Heavy Destroyer,Rare,Tac,35,57,16,-25% Maintenance per SciShip,,62979f72-bb7e-4de1-b2cd-ff7d48b59b30
Federation,6,Mirror Guardian Cruiser,Rare,Eng,64,23,21,2.5x Critical Rating from SCI,,89ca2817-3fe1-403a-9454-f37041df13f9
Federation,6,Narendra Support Cruiser,Rare,Eng,62,21,25,-25% Maintenance per EngShip,,624102a1-8f05-4a4d-bd2d-c52d5fb57b88
Federation,6,Nautilus Temporal Science Vessel,Rare,Sci,22,36,50,+10 SCI per EngShip,,0e482d41-7700-4c44-ac2d-a0922a1aace8
Federation,6,Nobel Miracle Worker Research Science Vessel,Rare,Sci,39,21,48,2.5x Critical Rating from SCI,,da6c2493-22af-427a-a5f1-e2fb6d61ef36
Federation,6,Paladin Temporal Battlecruiser,Rare,Eng,47,44,17,2x Critical Rating from Events,,c3dbf2a6-c0b5-4a95-9ec6-5379f7a62775
Federation,6,Pathfinder Long Range Science Vessel,Rare,Sci,21,21,66,2.5x Critical Rating from SCI,,5cb4a6bf-2918-4e1e-9dea-2a29ad47d37d
Federation,6,Phantom Intel Escort,Rare,Tac,26,60,22,+10 ENG per TacShip,,d7326f28-bcd9-4714-9916-aa46b695cefe
Federation,6,Reliant Advanced Light Cruiser,Rare,Eng,60,25,23,2.5x Critical Rating from ENG,,46ee6747-d833-4476-b18e-63fa7b3b12bf
Federation,6,Resolute Advanced Heavy Cruiser,Rare,Eng,67,25,16,-25% Maintenance per EngShip,,abb7b685-e62c-44d1-97f1-6d7eb390abfd
Federation,6,Sagittarius Temporal Cruiser,Rare,Eng,56,26,26,+10 ENG per SciShip,,fafd6849-6177-4b4b-8958-0495bea6960d
Federation,6,Scryer Intel Science Vessel,Rare,Sci,26,22,60,+10 TAC per SciShip,,ac23dbed-087a-4557-b130-81e7050c3931
Federation,6,Seneca Command Carrier,Rare,Sci,37,27,44,-25% Maintenance per SciShip,,0ee4fc78-f2f4-4418-a1a5-f25bc1f1e690
Federation,6,Shran Light Pilot Escort,Rare,Tac,28,58,26,+8 SCI and ENG per TacShip,,3754a34b-11ce-49ab-b016-dc5f7b1a8d97
Federation,6,Somerville Intel Science Vessel,Rare,Sci,28,28,52,+10 SCI per SciShip,,29fff3de-bc64-4397-8430-13c04a10cf20
Federation,6,Sutherland Advanced Research Vessel,Rare,Sci,31,20,57,+8 SCI per EngShip or TacShip,,2823b5f3-23cc-435f-931d-e192686f5ccd
Federation,6,Tellarite Pralim Flight Deck Assault Carrier,Rare,Eng,53,38,17,+10 ENG per TacShip,,b5beb53d-193a-4dd0-bfde-5a475d3dce82
Federation,6,Theseus Temporal Escort,Rare,Tac,22,56,30,+10 TAC per EngShip,,122b321c-85c4-47d3-be46-7dc110fc5707
Federation,6,Titan Science Destroyer,Rare,Sci,15,41,52,+10 SCI per TacShip,,4ecd10b7-a27d-43a7-aa43-cbd9097bb2e2
Federation,6,Valdres Command Strike Wing Escort,Rare,Tac,29,50,29,-25% Maintenance per TacShip,,86f031a2-5b30-4167-ac5f-703ea15cb7d8
Federation,6,Valiant Tactical Escort,Rare,Tac,23,69,16,2.5x Critical Rating from TAC,,8c9eabdb-f49a-4dc7-b1bc-d5331da9ee30
Federation,6,Vizier Command Assault Cruiser,Rare,Eng,62,30,16,+10 TAC per EngShip,,aa7c8c70-0102-447e-b612-0d9ab2b78dec
Federation,6,Yamato Dreadnought Cruiser,Rare,Eng,61,25,22,+15 All Stats when Alone,,0b59dd0d-62ee-426b-8659-48cba9509014
Federation,6,Achilles Miracle Worker Heavy Destroyer,VeryRare,Tac,23,62,32,+15 ALL when Alone,,529a6db3-2ae0-4404-b10c-6cdf07b8db2e
Federation,6,Ahwahnee Command Carrier,VeryRare,Sci,52,22,52,+8 Eng and Sci per TacShip,,6c1bbf64-3164-4174-acdb-2965bce7087d
Federation,6,Ajax Engineering Pilot Escort,VeryRare,Tac,26,66,25,+35 ENG when Alone,,ba5f34d1-7ea7-4d0a-89fa-9e20b67ac779
Federation,6,Andorian Chimesh Pilot Escort,VeryRare,Tac,26,55,36,-25% Maintenance per SciShip,,1cb944c9-9c05-47a5-a74a-ffda30d11bf1
Federation,6,Andorian Kumari Pilot Light Battlecruiser,VeryRare,Eng,58,32,26,+8 ENG per Any Ship (Not Small Craft),,c21a5cf1-a6cb-417a-a006-c3388a1bf22d
Federation,6,Andorian Kuthar Pilot Escort,VeryRare,Tac,36,55,26,-25% Maintenance per EngShip,,9d87c098-8a0a-49d1-855b-cd3aed36da71
Federation,6,Andorian Thozyn Pilot Escort,VeryRare,Tac,26,65,26,-25% Maintenance per TacShip,,1d6ad24c-d394-45e8-a270-3d0a9b163c1f
Federation,6,Appalachia Blockade Runner Escort,VeryRare,Tac,37,62,18,+35 TAC when Alone,,de96cac6-002f-4077-acdc-ca2fc780260e
Federation,6,Ark Royal Intel Science Carrier,VeryRare,Sci,30,37,51,x2.5 Bonus from SCI,,40f75645-2b18-4aac-8bcc-9f6e6d3ceb7c
Federation,6,Atlas Prototype Dreadnought Cruiser,UltraRare,Eng,62,44,20,+15 All Stats when Alone,,b382b071-a107-4a23-9bf6-6439469d1102
Federation,6,Augur Temporal Science Vessel,VeryRare,Sci,22,36,50,+10 SCI per EngShip,,b36a24f9-26a1-4278-a4e9-56c420e8d069
Federation,6,Brigid Multi-Mission Surveillance Explorer,VeryRare,Sci,28,35,54,Ignores +/- SCI from Events,,252824b7-fa17-4f38-8beb-f5d9f6612cea
Federation,6,California Miracle Worker Utility Cruiser,UltraRare,Eng,62,37,27,2.5x Critical Rating from ENG,,0b54d0b9-6a76-4d84-87e8-53ad656e3708
Federation,6,Concorde Operations Command Battlecruiser,VeryRare,Eng,77,20,20,+35 ENG when Alone,,66c07b9e-63b0-4ae9-8826-305a87b023e7
Federation,6,Constitution III Miracle Worker Cruiser,UltraRare,Eng,55,30,41,Ignores +/- ENG from Events,,0e842f16-cc29-4fef-a8da-c90506f4ea19
Federation,6,Constitution Miracle Worker Flight Deck Carrier,UltraRare,Eng,63,35,28,Ignores +/- ENG from Events,,78b6bb7d-1796-447a-9eda-4f664f3c5515
Federation,6,Constitution Temporal Light Cruiser,UltraRare,Eng,58,37,30,Ignores +/- ENG from Events,,a0398fd3-6090-4b34-b667-d299202052e1
Federation,6,Courage Command Science Destroyer,UltraRare,Sci,20,48,59,2.5x Bonus from TAC,,ce3a14ff-b668-4b1e-983a-34451fd07ce0
Federation,6,Credence Miracle Worker Dreadnought Cruiser,UltraRare,Eng,59,31,36,-5% Maintenance per Any Ship,,299863b5-1d7e-4719-81a7-f8ab4bb7f224
Federation,6,Crossfield Science Spearhead,UltraRare,Sci,20,47,59,2.5x Critical Rating from SCI,,099c089b-8c0c-46cb-a1a3-e007d5d8fd2c
Federation,6,Crossfield Science Spearhead Refit,UltraRare,Sci,37,30,59,+8 ENG and SCI per TacShip,,12a7b29d-c5e7-4a8d-9a44-1d0e4ace5281
Federation,6,Dauntless II Command Science Dreadnought,UltraRare,Sci,23,42,61,+8 TAC per TacShip or SciShip,,d79fb915-7242-4b22-b94a-71debe21b658
Federation,6,Daystrom Science Miracle Worker Cruiser,VeryRare,Eng,57,26,34,+20 TAC and ENG when Alone,,bc7b9f16-2408-4972-9211-4ed6c124d8a7
Federation,6,Deimos Pilot Destroyer,UltraRare,Tac,41,65,20,+10 TAC per TacShip,,d11d54bc-b081-464d-8587-95fe235ff1fc
Federation,6,Duderstadt Miracle Worker Science Spearhead,UltraRare,Sci,40,36,50,+8 ENG and TAC per SciShip,,736f6156-3c97-46fc-b507-68d3d7b80f2e
Federation,6,Echelon Intel Science Spearhead,UltraRare,Sci,35,37,54,+8 SCI per ANY SHIP,,f9c4a740-9d4d-4e50-8420-145ba6ee99a9
Federation,6,Endeavour Tactical Star Cruiser,VeryRare,Eng,56,36,25,+10 TAC per SciShip,,df0451e4-cb82-41f3-996f-6fbf1f3cdcd8
Federation,6,Esquiline Multi-Mission Strategic Explorer,VeryRare,Sci,32,39,46,Ignores +/- ENG from Events,,ccdbed68-3634-4256-a6ca-3083eaa0ddeb
Federation,6,Excelsior II Intel Heavy Cruiser,UltraRare,Eng,69,37,20,-25% Maintenance per EngShip,,362d36dd-f91a-44a7-96ce-1b43ecc03d6e
Federation,6,Farragut Temporal Cruiser,UltraRare,Eng,56,29,41,+10 SCI per TacShip,,6540ccb8-e274-44ef-ad9b-6c2707400c04
Federation,6,Federation Intel Holoship,UltraRare,Eng,48,42,36,2x Critical Rating from Events,,33ffbae8-9ea7-4e4a-95a8-9b3b4177b5bb
Federation,6,Fleet Akira Heavy Strike Wing Escort (T6),VeryRare,Tac,27,70,20,+5 SCI and ENG per EngShip or TacShip,,bdac8089-3768-4462-915c-1ead7e332ae9
Federation,6,Fleet Augur Temporal Science Vessel,VeryRare,Sci,22,43,60,+10 SCI per EngShip,,6adbf173-4291-4cf2-b63a-9af410410a1a
Federation,6,Fleet Avenger Battlecruiser (T6),VeryRare,Eng,43,55,19,+8 ENG per Any Ship,,0e611bef-0a60-4740-b061-5ad143f053ee
Federation,6,Fleet Caitian Atrox Carrier (T6),VeryRare,Sci,29,29,60,+8 SCI per Any Ship,,61e46d15-9612-4ed8-a542-4fc29d43f42b
Federation,6,Fleet Caitian Shikaris Escort,VeryRare,Tac,23,49,36,+10 TAC per EngShip,,11d8bf7d-a3cd-4a70-bab8-492ba391f68a
Federation,6,Fleet Cardenas Command Dreadnought Cruiser,VeryRare,Eng,51,34,32,+8 ENG per SciShip or TacShip,,b3043a7d-72d3-4a1d-916d-c4f0f55ae61a
Federation,6,Fleet Comet Science Destroyer,VeryRare,Sci,16,44,57,+10 TAC per SciShip,,6420cb48-e92d-4fce-b46a-f1cdc55295e8
Federation,6,Fleet Dauntless Experimental Science Vessel,VeryRare,Sci,24,31,62,Ignores +/- SCI from Events,,605d6a76-7a14-476a-83bb-63e54b1ded0c
Federation,6,Fleet Defiant Tactical Escort,VeryRare,Tac,25,74,18,Ignores +/- TAC from Events,,7afdbc5f-25d1-4a41-bddf-12e0e505c5a7
Federation,6,Fleet Eclipse Intel Cruiser,VeryRare,Eng,63,24,30,+8 SCI and TAC per EngShip,,b8b5c3cd-ce15-48c1-bed6-96305f6556b3
Federation,6,Fleet Engle Strike Wing Escort,VeryRare,Tac,30,50,37,+8 TAC per SciShip or TacShip,,eae00d36-bfee-457b-b79e-d778313c7bf8
Federation,6,Fleet Excelsior Advanced Heavy Cruiser,VeryRare,Eng,72,27,18,+8 TAC per Any Ship,,e4a152b3-ec8d-4dd7-98a3-2b3d2d07d959
Federation,6,Fleet Galaxy Dreadnought Cruiser (T6),VeryRare,Eng,66,27,24,2x Critical Rating from Events,,ef04d4b3-c65a-4274-bbb3-ce340b09e535
Federation,6,Fleet Galaxy Exploration Cruiser,VeryRare,Eng,73,22,22,2.5x Bonus from ENG,,d9c19093-f121-4f5e-be30-590455c7700d
Federation,6,Fleet Guardian Cruiser,VeryRare,Eng,69,24,24,Ignores +/- ENG from Events,,3af34288-4ed7-4bbe-909e-b5ad76b1649b
Federation,6,Fleet Hephaestus Advanced Escort (T6),VeryRare,Tac,18,73,26,+8 TAC per EngShip or SciShip,,80214c17-f28a-4a41-9e9d-8b915a49b9a2
Federation,6,Fleet Hernandez Intel Science Vessel,VeryRare,Sci,29,29,59,+35 SCI when Alone,,82ab5827-a5c6-476c-a9ee-e86798f54ea7
Federation,6,Fleet Hiawatha Command Carrier,VeryRare,Sci,40,29,47,+25 ENG when Alone,,f8fe5e64-ac29-4bab-bfdc-c10e963f166b
Federation,6,Fleet Hoover Temporal Warship,VeryRare,Tac,21,59,37,+10 SCI per TacShip,,940cef2f-cea7-4460-8d3c-fe5cfc8329c1
Federation,6,Fleet Imperial Intel Assault Cruiser,VeryRare,Eng,64,37,16,+35 TAC when Alone,,9d7030c8-510a-4af7-a46b-769ac7b766e8
Federation,6,Fleet Intrepid Long Range Science Vessel,VeryRare,Sci,24,24,69,+8 TAC and ENG per SciShip,,80950811-fe4f-43c4-b5fd-91b2b1730615
Federation,6,Fleet Jupiter Carrier,VeryRare,Sci,41,30,46,+8 SCI per EngShip or TacShip,,629dce16-62b5-4bef-a766-473ac33855f9
Federation,6,Fleet Justiciar Command Star Cruiser,VeryRare,Eng,60,29,28,+25 ENG when Alone,,dc79c26f-c6cd-499f-adf2-de61ee49db23
Federation,6,Fleet Magee Command Light Escort,VeryRare,Tac,36,54,27,Ignores +/- TAC from Events,,d413d286-1aa8-4f5a-ba6e-b0b490699498
Federation,6,Fleet Magee Light Pilot Escort,VeryRare,Tac,28,63,26,+35 TAC when Alone,,04a98f68-a2a3-43e5-9d0f-2ffbbd246d3e
Federation,6,Fleet Magellan Advanced Research Vessel,VeryRare,Sci,39,20,58,2.5x Critical Rating from SCI,,7e9530cb-79b5-4acc-87ab-63084f42d78d
Federation,6,Fleet Malachowski Multi-Mission Command Cruiser,VeryRare,Eng,55,30,32,2x Critical Rating from Events,,ec90cc81-6eb7-4a01-8e77-7420d4a67453
Federation,6,Fleet Manticore Heavy Destroyer,VeryRare,Tac,37,62,18,+8 SCI per Any Ship,,7621e8da-9b5c-4aea-956c-358b0e98bd20
Federation,6,Fleet Nautilus Temporal Science Vessel,VeryRare,Sci,22,44,51,+8 SCI per EngShip or TacShip,,d2f47a06-969e-499b-939e-a186dc0b54f8
Federation,6,Fleet New Orleans Recon Destroyer,VeryRare,Tac,20,58,39,+35 SCI when Alone,,787b6947-63b9-436b-b12f-7699eff312f6
Federation,6,Fleet Nimitz Heavy Battlecruiser,VeryRare,Eng,60,31,26,+8 ENG and SCI per EngShip,,a7f3c166-5cd9-4eda-a736-d904e582bac4
Federation,6,Fleet Norway Command Strike Wing Escort,VeryRare,Tac,30,54,33,+25 SCI when Alone,,588da2f1-1849-4a4d-9abe-b51635d2a1f8
Federation,6,Fleet Nova Pilot Scout Ship,VeryRare,Sci,23,30,64,+10 ENG per TacShip,,144e55ab-e16e-4bed-beb2-4a730f553cdb
Federation,6,Fleet Oberth Light Science Vessel,VeryRare,Sci,39,20,58,Ignores +/- SCI from Events,,f6789e4f-633f-49ee-bfba-b80df0d8f990
Federation,6,Fleet Olympic Miracle Worker Research Science Vessel,VeryRare,Sci,41,23,53,Ignores +/- SCI from Events,,7cba088a-1424-4bba-90e5-8bde8f7c807a
Federation,6,Fleet Paladin Temporal Battlecruiser,VeryRare,Eng,54,45,18,+35 TAC when Alone,,e4adab04-640b-4a45-ace2-e47f8de23e8d
Federation,6,Fleet Phantom Intel Escort,VeryRare,Tac,30,63,24,+8 ENG and SCI per TacShip,,4ea80139-d9e8-4573-b0a1-c3e603a2a1b2
Federation,6,Fleet Saber Miracle Worker Escort,VeryRare,Tac,42,53,22,+20 ENG and TAC when Alone,,7a57f047-4821-4d47-86ba-687901f8da3a
Federation,6,Fleet Sagittarius Temporal Cruiser,VeryRare,Eng,61,28,28,+8 ENG per SciShip or TacShip,,68af5c62-489e-4c67-b577-f020b8272002
Federation,6,Fleet Scryer Intel Science Vessel,VeryRare,Sci,30,24,63,+8 TAC and ENG per SciShip,,47377a6a-c99b-4e3d-90bf-b4b57aaf62e4
Federation,6,Fleet Shepard Miracle Worker Battlecruiser,VeryRare,Eng,54,48,15,+35 ENG when Alone,,748ef2ae-f612-4653-a162-17439695c590
Federation,6,Fleet Soyuz Advanced Light Cruiser,VeryRare,Eng,64,28,25,2x Critical Rating from Events,,3f3f3fa0-4178-4574-8114-a419527d50a5
Federation,6,Fleet Soyuz Intel Heavy Frigate,VeryRare,Eng,53,40,24,Ignores +/- ENG from Events,,c0a0f9f1-bc18-4fc1-8a33-c259951d4945
Federation,6,Fleet Tellarite Pralim Flight Deck Assault Carrier,VeryRare,Eng,57,41,19,+8 ENG per TacShip or SciShip,,e64a7e77-a4a0-4bf6-af90-af19f2a322a7
Federation,6,Fleet Theseus Temporal Escort,VeryRare,Tac,22,57,38,+8 TAC per EngShip or SciShip,,75cfbd55-7c26-4ccd-a9ac-21ed305f8962
Federation,6,Fleet Vizier Command Assault Cruiser,VeryRare,Eng,64,37,16,+8 TAC per SciShip or TacShip,,b611e906-a7f4-423b-be80-4f78a674df83
Federation,6,Fleet Yamaguchi Support Cruiser,VeryRare,Eng,67,23,27,-10% Maintenance per SciShip or TacShip,,8a5f5d1a-2a92-4f30-a7cc-3548721592f8
Federation,6,Freedom Exploration Frigate,UltraRare,Eng,52,46,28,Ignores +/- ENG from Events,,9e11cda1-2e07-44e1-9b4b-a372ef1a6b78
Federation,6,Friendship Command Flight Deck Carrier,UltraRare,Eng,59,47,20,+8 ENG and TAC per SciShip,,a2035e23-5efa-4098-8063-a5835c475e05
Federation,6,Geneva Science Command Battlecruiser,VeryRare,Eng,73,20,24,+35 SCI when Alone,,63c669c3-7b91-40f1-b545-67cf8b5436ff
Federation,6,Gral Command Scout Vessel,UltraRare,Sci,21,28,59,+10 TAC per SciShip,,622149d9-d8cd-4215-932e-9316da3a3966
Federation,6,Icarus Science Pilot Escort,VeryRare,Tac,22,66,29,+35 SCI when Alone,,21a26ea6-a18e-403b-b640-1f81d1316024
Federation,6,Inquiry Battlecruiser,UltraRare,Eng,64,44,18,+10 TAC per EngShip,,""" Deflectors to Full"""""""
Federation,6,Janeway Command Science Vessel,UltraRare,Sci,21,37,68,+25 TAC when Alone,,4d0a1ef1-3f32-41f3-89db-bce5f273e26f
Federation,6,Kardashev Command Dyson Science Destroyer,VeryRare,Sci,36,29,52,2.5x Critical Rating from ENG,,edeb6e49-d80e-4792-aa13-e7d8c0dad4d7
Federation,6,Kelvin Timeline Constitution Heavy Command Cruiser,UltraRare,Eng,62,36,28,+20 ENG and TAC when Alone,,3c21e582-ab65-42de-b5b1-dfcb893434dd
Federation,6,Kelvin Timeline Constitution II Intel Cruiser,UltraRare,Eng,62,38,27,-10% Maintenance per TacShip or EngShip,,30c44eff-507a-4396-9267-a7ae891e2491
Federation,6,Kelvin Timeline Einstein Heavy Destroyer,UltraRare,Tac,44,59,23,+20 ENG and TAC when Alone,,5becda4e-4b43-49b0-ad6a-cf744c60142e
Federation,6,Kelvin Vengeance Intel Dreadnought Cruiser,UltraRare,Eng,58,49,19,Ignores +/- TAC from Events,,978d87a0-a4c5-4125-80d2-9f7a0211b7f6
Federation,6,Kerala Temporal Battlecruiser,VeryRare,Eng,58,43,16,+10 Eng per TacShip,,bb72a289-0e13-4eb6-8460-b0bdc1880a33
Federation,6,Kirk Temporal Heavy Battlecruiser,UltraRare,Eng,49,44,32,-5% Maintenance per Any Ship,,23ddb0cd-eb22-422b-909e-b778527bb497
Federation,6,Klein Temporal Destroyer,UltraRare,Tac,29,68,29,+8 TAC per EngShip or SciShip,,49aa739d-d7e4-4e4e-9c9a-9a880af70117
Federation,6,Lamarr Temporal Science Dreadnought,UltraRare,Sci,34,38,54,1.5x Critical Rating from TAC and ENG,,58159475-b937-4106-9734-43c4ffb48d7c
Federation,6,Legendary Akira Multi-Mission Command Cruiser,VeryRare,Eng,43,43,22,+20 ENG and TAC when Alone,,def031ef-e041-4c72-83ad-e9fa59b09267
Federation,6,Legendary Ambassador Intel Support Cruiser,VeryRare,Eng,56,26,35,+35 SCI when Alone,,2d82f460-efb4-4831-8312-88fcf4e09d8b
Federation,6,Legendary Avenger Miracle Worker Battlecruiser,VeryRare,Tac,35,53,20,+35 ENG when Alone,,caa4efdc-80d2-4424-beb0-3ef0953d4ccb
Federation,6,Legendary Caelian Intel Multi-Mission Explorer,VeryRare,Sci,22,41,54,-25% Maintenance per EngShip,,b80c8cc2-6780-46c8-bdb5-8ec00e843a39
Federation,6,Legendary Columbia Temporal Operative Escort,VeryRare,Tac,18,61,37,+10 TAC per SciShip,,7d980d2a-80f9-43d6-bc93-b4af3056a106
Federation,6,Legendary Constitution Miracle Worker Light Cruiser,VeryRare,Eng,52,38,27,+10 ENG and TAC per EngShip,,eb7eb951-f220-4abe-bf08-53b4368b5e24
Federation,6,Legendary Constitution Temporal Flight Deck Carrier,VeryRare,Eng,49,33,35,+10 ENG per SciShip,,bc68c52e-9a8a-4b3f-a0a0-25d815080a69
Federation,6,Legendary Defiant Pilot Warship,VeryRare,Tac,37,61,19,+10 TAC per EngShip,,bd6cfc5d-99bc-403b-ae28-4e0f9b1871a1
Federation,6,Legendary Excelsior Miracle Worker Heavy Cruiser,VeryRare,Eng,65,32,20,+35 ENG when Alone,,7f514224-f46a-4e61-87db-7ff4c76c93ab
Federation,6,Legendary Galaxy Dreadnought Cruiser,VeryRare,Eng,66,34,17,+35 TAC when Alone,,78aabea6-3be3-4d4f-a826-07984b35a251
Federation,6,Legendary Glenn Temporal Operative Science Vessel,VeryRare,Sci,18,36,63,+10 SCI per TacShip,,cecc3133-7008-445a-801c-0ad2f8d5d1d5
Federation,6,Legendary Intrepid Miracle Worker Multi-Mission Science Vessel,VeryRare,Sci,35,20,62,+10 ENG per SciShip,,74d15728-106e-4f20-a071-d61911a61c57
Federation,6,Legendary Kelvin Timeline Constitution Intel Battlecruiser,VeryRare,Eng,52,41,24,+10 ENG per TacShip,,5cb126ec-7b17-4dad-8d2d-b838b1bd317b
Federation,6,Legendary Miranda Multi-Mission Cruiser,VeryRare,Eng,56,36,35,+10 SCI per EngShip,,d28f9e89-2680-4ce6-ad3b-efbcc4a7f92f
Federation,6,Legendary Nebula Temporal Science Spearhead,VeryRare,Sci,23,31,63,Ignores +/- SCI from Events,,b4a3d721-85c0-4a36-a076-fa544bf2bfaf
Federation,6,Legendary Ross Command Exploration Cruiser,VeryRare,Eng,65,30,22,+8 ENG and TAC per SciShip,,3f835f6e-112b-41db-88d8-28caff4dab72
Federation,6,Legendary Sovereign Miracle Worker Assault Cruiser,VeryRare,Eng,67,37,13,+8 ENG and TAC per TacShip,,1f3e5936-d65a-4f8a-a9f2-1b88811edc15
Federation,6,Legendary Verity Command Dreadnought Cruiser,VeryRare,Eng,50,35,32,+8 SCI and TAC per EngShip,,3dd9a94b-4ad2-4a39-87a8-28a8e0eb41de
Federation,6,Legendary Walker Light Battlecruiser,VeryRare,Eng,55,33,29,+35 ENG when Alone,,bfefeb89-d792-4cb0-9967-71002d8a4d0c
Federation,6,Mars Pilot Escort,UltraRare,Tac,34,63,29,-25% Maintenance per SciShip,,ea40a9e7-5f9b-45e4-81b2-a4569bb6f131
Federation,6,Mercury Tactical Pilot Escort,VeryRare,Tac,22,70,25,+35 TAC when Alone,,aa9c5d4b-6759-4ddd-88cb-a68883c63124
Federation,6,Merian Command Science Dreadnought,UltraRare,Sci,42,30,54,2.5x Critical Rating from SCI,,8b463244-8dc7-4139-9ab4-014f48788a8d
Federation,6,Mirror Constitution Warship,UltraRare,Tac,51,57,18,+10 ENG per TacShip,,c8f2ce3b-30a7-489a-9a0d-be90bd6f8067
Federation,6,Mirror Crossfield Science Destroyer,UltraRare,Sci,15,54,57,+20 TAC and SCI when Alone,,6c1997de-deb4-4461-8b0a-4ff57174ff2e
Federation,6,Mirror Engle Strike Wing Escort,UltraRare,Tac,22,57,47,+10 TAC per SciShip,,699c4fda-bc03-4e68-83ac-d002a9065e7d
Federation,6,Mirror Gagarin Warship,UltraRare,Tac,43,63,20,+8 ENG and SCI per TacShip,,30ffced2-29ed-4627-a506-cb076cfc08b0
Federation,6,Noble Intel Battlecruiser,UltraRare,Eng,56,47,23,+25 TAC when Alone,,5f2377af-19e8-4ac0-9f82-6e37d2234cc0
Federation,6,NV Multi-Mission Temporal Cruiser,VeryRare,Eng,54,46,17,+8 Eng and Tac per SciShip,,783f1fa7-8b6d-431a-bad9-999d669ca89c
Federation,6,NX Escort Refit,UltraRare,Tac,42,63,21,+8 TAC per Any Ship,,600a8185-a55a-4e28-ab54-c5f152cc6a0c
Federation,6,Obena Miracle Worker Heavy Cruiser,UltraRare,Eng,61,43,22,2.5x Critical Rating from ENG,,94fa17b5-5224-4e7a-b4ce-a5bff0cad620
Federation,6,Palatine Multi-Mission Reconnaissance Explorer,VeryRare,Sci,21,44,52,Ignores +/- TAC from Events,,c684f404-cb5d-4e0b-8343-80dbe0a4fd28
Federation,6,Parliament Miracle Worker Surveyor Cruiser,UltraRare,Eng,71,20,35,+20 ENG and SCI when Alone,,8bcb5349-76b6-4384-9ce8-63fd5bfdc744
Federation,6,Pioneer II Pilot Heavy Frigate,VeryRare,Eng,58,40,19,-10% Maintenance per Escort or Cruiser,,3f703119-91a4-454e-bbf8-45fefd2dfd48
Federation,6,Premonition Temporal Science Spearhead,VeryRare,Sci,30,24,62,+10 SCI per SCI ship,,9d7382be-6e84-44ac-b31d-dd557f201920
Federation,6,Presidio Tactical Command Battlecruiser,VeryRare,Eng,73,24,20,+35 TAC when Alone,,c99cffab-9de2-435c-aa40-977d9cb3b386
Federation,6,Princeton Miracle Worker Cruiser,VeryRare,Eng,66,35,16,+10 ENG per EngShip,,c0ab8f1c-43f0-45e1-85b3-3801f80cb77d
Federation,6,Protostar Temporal Science Spearhead,UltraRare,Sci,42,37,47,+35 SCI when Alone,,a67fa724-587d-4d08-af14-06deda548a36
Federation,6,Proxima Miracle Worker Science Dreadnought,VeryRare,Sci,28,33,56,-5% Maintenance per Any Ship,,2bbb162e-66b6-4c0a-8af1-7df1727dac3b
Federation,6,Sagan Command Cruiser,UltraRare,Eng,62,28,36,+6 SCI per Any Ship,,699b4324-97c5-4518-9e09-b9de6dc6537d
Federation,6,Saturn Intel Science Spearhead,UltraRare,Sci,29,46,51,+10 SCI per TacShip,,f898f138-c37c-4078-b729-a12cca993b91
Federation,6,Scott Operations Miracle Worker Cruiser,VeryRare,Eng,65,26,26,+20 TAC and SCI when Alone,,500ceb59-a5ca-4476-bd74-1086adbc98c9
Federation,6,Section 31 Intel Science Destroyer,UltraRare,Sci,18,52,56,+10 SCI per TacShip,,2d49250b-e023-4660-87e2-63f2989f5e8b
Federation,6,Shangri-La Command Warship,VeryRare,Tac,47,56,14,2.5x Critical Rating from TAC,,707e0113-e60a-4892-959b-c53c07c1fec8
Federation,6,Sojourner Operations Star Cruiser,VeryRare,Eng,65,26,26,+10 ENG per TacShip,,0cde0cbe-6d59-4848-931b-b18a813a434c
Federation,6,Suurok Intel Science Destroyer,VeryRare,Sci,37,27,53,+10 Sci per SciShip,,1393e8c8-0cb6-4cb5-9b23-154133b7fa40
Federation,6,Texas Miracle Worker Escort,UltraRare,Tac,48,48,30,Ignores +/- ENG from Events,,f2180081-aa0e-48de-9c00-a42fc07c158b
Federation,6,Theseus Miracle Worker Destroyer,UltraRare,Eng,60,34,29,+8 ENG and SCI per EngShip,,a85cdcb7-43e7-4f5b-ad3b-320c865d4bd2
Federation,6,Tucker Tactical Miracle Worker Cruiser,VeryRare,Eng,57,34,26,+20 SCI and ENG when Alone,,88dd09f5-08a4-4c07-8e48-28cc4a4e4e8b
Federation,6,Typhon Command Escort Carrier,VeryRare,Tac,42,59,16,2.5x Critical Rating from TAC,,25261a40-c7ee-45a3-9c9f-fa5f004a0f3a
Federation,6,Universe Temporal Heavy Dreadnought Cruiser,UltraRare,Eng,57,42,27,+20 TAC and ENG when Alone,,ba7f2e5c-38d4-45dc-af29-7fb79ed18108
Federation,6,Verne Temporal Science Vessel,UltraRare,Sci,29,29,68,Ignores +/- SCI from Events,,24eb629b-2b2b-40fa-91bf-bc086ff45ad4
Federation,6,Walker Light Exploration Cruiser,UltraRare,Eng,68,29,29,+8 SCI per SciShip or TacShip,,4089cfd4-b203-4220-8962-96d88adfd2f4
Federation,6,Warden Temporal Multi-Mission Cruiser,VeryRare,Eng,56,28,33,Ignores +/- ENG from Events,,46a6140d-33a6-4705-8fd6-66982181522a
Federation,6,Yorktown Science Star Cruiser,VeryRare,Eng,63,18,36,+10 SCI per EngShip,,10a4ad10-d576-4753-ab96-48112ac1ca18
Klingon,0,Kivra Shuttle,Common,Smc,4,1,1,-25% Maintenance per ANY Ship (Not Small Craft),,7da57b30-d544-40b5-a81f-bc0fb8a95026
Klingon,0,Toron Shuttle,Common,Smc,2,2,2,-25% Maintenance per ANY Ship (Not Small Craft),,44729d2e-1010-429b-9047-b61a0eb09677
Klingon,0,DujHod Chariot,Rare,Smc,4,3,3,5x Critical Rating from ALL stats,,d5cb49aa-7a28-4a17-a93e-6937b9f50a58
Klingon,0,To'Duj Fighter,Rare,Smc,3,4,3,+10 ALL Stats per ANY Ship (Not Small Craft),,b525e9b8-0e9b-45ff-9f5a-fb695bfbaf77
Klingon,0,Rozhenko Timeship,UltraRare,Smc,3,4,7,-25% Maintenance per ANY Ship (Not Small Craft),,1bb68cdc-a23b-41f1-a248-2f93b9bbd5d6
Klingon,1,B'rel Bird-of-Prey,Common,Tac,5,5,5,2x Critical Rating from Events,,c8a72a58-6793-46f8-a845-542a72c2ac74
Klingon,1,B'Rotlh Bird-of-Prey,Rare,Tac,6,6,6,1.25x Critical Rating from All Stats,,5faa98ab-c688-459a-be90-6ba7ae4ac338
Klingon,2,K'Tanco Battlecruiser,Common,Eng,12,10,8,+8 ENG per SciShip or TacShip,,8abe55f3-4173-468e-9d50-dfa0082d5334
Klingon,2,QulDun Bird-of-Prey,Common,Tac,10,10,10,1.5x Critical Rating from ENG and SCI,,d973fd37-6199-4cb2-bc8a-d40677a21f93
Klingon,2,Somraw Raptor,Common,Tac,10,12,8,+8 TAC per EngShip or SciShip,,cca76dc1-3710-4340-b3a5-76f00a31f326
Klingon,2,Qaw'Dun Bird-of-Prey,Rare,Tac,12,12,12,1.25x Critical Rating from ALL Stats,,2817221a-e699-48d5-921f-9075513ba20b
Klingon,3,K't'inga Battlecruiser,Common,Eng,22,13,10,2.5x Critical Rating from ENG,,d5d6b749-2919-4c44-b746-724bcf1272aa
Klingon,3,Kamarag Battlecruiser,Common,Eng,22,10,13,1.5x Critical Rating from ENG and SCI,,137c707b-146c-4cd4-9a57-a8f32283e568
Klingon,3,Norgh Bird-of-Prey,Common,Tac,15,15,15,2.5x Critical Rating from SCI,,85cf3e7a-751d-450b-9000-5221a1127801
Klingon,3,Qorgh Raptor,Common,Tac,13,22,10,2.5x Critical Rating from TAC,,ffc38e27-e8cc-4d78-b620-b0cf2cf07c9c
Klingon,3,Gorn Phalanx Science Vessel,Rare,Sci,14,11,29,Ignores +SCI from Events,,f2592406-35bb-4757-8057-0384cc671ac2
Klingon,3,Koro't'inga Battlecruiser,Rare,Eng,27,15,12,1.5x Critical Rating From ENG and TAC,,a467ce27-1e51-41bb-a951-0d7082db1782
Klingon,3,Nausicaan Vandal Destroyer,Rare,Tac,12,27,15,Ignores +/-TAC from Events,,8b340c31-06d8-4a9e-be84-050a379a3c53
Klingon,3,Ning'tao Bird-of-Prey,Rare,Tac,18,18,18,1.25x Critical Rating from All Stats,,99b6925d-fad3-4e6d-aad1-aa84cba20a4e
Klingon,3,Orion Dacoit Flight Deck Carrier,Rare,Eng,29,14,11,Ignores +ENG from Events,,71da30a6-61b7-49b5-b2f3-e06dddf8cc0f
Klingon,3,SuQob Raptor,Rare,Tac,14,29,11,+5 ENG and SCI from AnyShip,,695b0bb7-64e1-4893-944e-04cea3c1959d
Klingon,4,Ki'tang Bird-of-Prey,Common,Tac,20,20,20,1.5x Critical Rating from TAC and SCI,,eeea3ccf-cbc3-493a-83cd-04b3267ae0a6
Klingon,4,Pach Raptor,Common,Tac,18,28,14,+8 TAC per EngShip or SciShip,,231ad65a-c3b0-40be-ad96-e794f291ebb1
Klingon,4,Vor'cha Battlecruiser,Common,Eng,28,18,14,+8 ENG per SciShip or TacShip,,ede57b63-8625-43ad-9d4d-308694c8d57c
Klingon,4,Ch'Tang Bird-of-Prey,Rare,Tac,24,24,24,1.5x Critical Rating from Eng or Sci,,64533101-b34a-432f-a193-809577009828
Klingon,4,Gorn Draguas Support Vessel,Rare,Sci,22,12,38,+8 SCI per EngShip or TacShip,,f4d4b8da-4f78-4af6-9005-ed002998a279
Klingon,4,Nausicaan Scourge Destroyer,Rare,Tac,16,36,20,+8 TAC per SciShip or TacShip,,3af4acfb-1b7a-4915-8f91-dbfe6e45b970
Klingon,4,Orion Corsair Flight Deck Carrier,Rare,Eng,32,24,18,+5 TAC and Sci per SciShip or EngShip,,162ac2a8-db6a-4a7c-860d-6b2f4f1b96f3
Klingon,4,Puyjaq Raptor,Rare,Tac,20,40,12,1.5x Critical Rating from ENG or TAC,,2fcde160-7687-4dea-85c5-e0977f70dbe5
Klingon,4,Vor'Kang Battlecruiser,Rare,Eng,35,21,16,-10% Maintenance per SciShip or TacShip,,f8f988ed-267f-4e78-87e8-7e33798414d1
Klingon,4,Tong'Duj Freighter,Epic,Eng,47,13,30,+20 ALL per Any Ship (Not Small Craft),,dc0a25a6-15ab-44c4-80c7-7c841dc67f3b
Klingon,5,Bortas Heavy Battlecruiser,Common,Eng,38,24,13,-5% Maintenance per Any Ship,,802a594e-fae8-43aa-b7be-5b3cc652141f
Klingon,5,Hegh'ta Heavy Bird-of-Prey,Common,Tac,25,25,25,1.25x Critical Rating from All Stats,,99a6eb2a-f362-48bb-ad02-765ea0f97a5e
Klingon,5,HoH'SuS Bird-of-Prey,Common,Tac,25,30,20,1.5x Critical Rating from TAC and ENG,,331fbfcc-b961-4e40-be83-60f9ead4c4fe
Klingon,5,K't'inga Battlecruiser Retrofit,Common,Eng,37,22,16,+10 TAC per TacShip,,c9eab9ec-6d04-4158-9627-d511bee5259e
Klingon,5,Kamarag Battlecruiser Retrofit,Common,Eng,32,26,17,+10 SCI per SciShip,,a32a5761-7301-4b93-abbb-68f0035c1bdf
Klingon,5,Nausicaan Scourge Destroyer Retrofit,Common,Tac,17,37,21,+10 TAC per SciShip,,c1d88005-4c62-41d3-8887-d44f2db3539b
Klingon,5,Negh'Var Heavy Battlecruiser,Common,Eng,40,20,15,-25% Maintenance per SciShip,,7c0120c7-19b7-43bb-a2d7-c6aafa3681f4
Klingon,5,Orion Corsair Flight Deck Carrier Retrofit,Common,Eng,42,12,21,+10 TAC per EngShip,,40705835-eeff-4a8e-a245-d15e752b165b
Klingon,5,Qin Heavy Raptor,Common,Tac,22,36,15,+5 Sci per EngShip,,c9305e5f-5b2f-48ec-aee2-0cfda3796820
Klingon,5,Somraw Raptor Retrofit,Common,Tac,26,34,15,+10 SCI per SciShip,,8d27efb5-f80d-4829-8037-853894d35fd9
Klingon,5,Vo'Quv Carrier,Common,Sci,15,12,48,+8 SCI per Any Ship,,e0c8581a-5097-4c25-9904-59903ae75d1b
Klingon,5,Vor'cha Battlecruiser Retrofit,Common,Eng,36,24,15,-10% Maintenance per SciShip or TacShip,,ee7e6f33-790d-4703-a142-53a6716d21e2
Klingon,5,Mirror Ki'tang Bird-of-Prey Retrofit,Uncommon,Tac,27,28,28,+8 TAC per EngShip or SciShip,,4ff02a5f-f81b-4552-8ba6-c710bc8ad105
Klingon,5,Mirror Negh'Var Heavy Battlecruiser,Uncommon,Eng,36,30,17,+8 ENG and TAC per SciShip,,15e2beeb-6d1b-4750-adb0-3d68a4ff2e39
Klingon,5,Mirror Qin Heavy Raptor,Uncommon,Tac,25,42,16,+10 SCI per TacShip,,eec59620-204d-4d41-a7cf-4afb528ad3fc
Klingon,5,Mirror Somraw Raptor Retrofit,Uncommon,Tac,16,42,25,+10 ENG per EngShip,,976d4b35-2b02-4c31-acdc-cd1ad65ffd68
Klingon,5,Mirror Vo'Quv Carrier,Uncommon,Sci,50,16,17,+20 SCI and TAC when Alone,,2f34b753-03f7-41ac-8015-37f50f613bf0
Klingon,5,Mirror Vor'cha Battlecruiser,Uncommon,Eng,38,19,26,+8 ENG and SCI per TacShip,,7a2df9a9-f513-46c0-a242-0bfa19de53e1
Klingon,5,B'rel Bird-of-Prey Retrofit,Rare,Tac,28,34,28,+10 TAC per SciShip,,0389dcef-dcc7-4c02-8874-06157c77c910
Klingon,5,Fek'Ihri Kar'Fi Battle Carrier,Rare,Sci,18,30,42,+15 All Stats when Alone,,42d1e919-2bf8-40ea-b0f1-9e7edc81bba9
Klingon,5,Gorn Varanus Support Vessel,Rare,Sci,22,14,54,+8 ENG and TAC per SciShip,,eaf52bd8-dbe7-45f8-bf78-3a66a75afc9e
Klingon,5,Mogh Battlecruiser,Rare,Eng,32,42,16,+10 SCI per SciShip,,139f1541-203e-4767-a356-f70bdab2af3c
Klingon,5,Nausicaan Guramba Siege Destroyer,Rare,Tac,27,45,18,+8 ENG and SCI per TacShip,,cf437c21-6a15-40a4-81bb-2f7422ec7bf2
Klingon,5,Nov Dyson Science Destroyer,Rare,Sci,12,28,50,Ignores +/- SCI from Events,,5b04c827-75b2-4644-8d34-7f3a5cf9d7a0
Klingon,5,Orion Marauder Flight Deck Carrier,Rare,Eng,45,15,30,+8 TAC and SCI per EngShip,,4d10e993-fcba-4ce0-897e-4a6f13b663b5
Klingon,5,Peghqu' Heavy Destroyer,Rare,Tac,26,44,20,+8 SCI per SciShip or EngShip,,a3fc309e-8419-4ec2-ad06-c3d35c18270d
Klingon,5,B'rel Fleet Bird-of-Prey Retrofit,VeryRare,Tac,31,36,31,1.25x Critical Rating from All Stats,,46bcebe5-b368-483e-98f9-a4210d0b3adc
Klingon,5,Bortasqu' Command Cruiser,VeryRare,Eng,47,28,23,+35 SCI when Alone,,ed59981e-e7ab-4555-9be0-9abe4ff128a4
Klingon,5,Bortasqu' Tactical Cruiser,VeryRare,Eng,47,33,18,+35 TAC when Alone,,2490dc6b-0aa1-4179-80d4-a93809586628
Klingon,5,Bortasqu' War Cruiser,VeryRare,Eng,52,28,18,+35 ENG when Alone,,6f359764-2e9e-4c70-a7e4-17351b5001ff
Klingon,5,Chontay Dyson Tactical Science Destroyer,VeryRare,Sci,12,38,48,+35 TAC when Alone,,8c6e4ba1-94dd-49d6-8660-8283eaf43f8b
Klingon,5,Fleet Fek'Ihri Kar'Fi Battle Carrier,VeryRare,Sci,20,30,48,+8 ENG and TAC per TacShip,,565a9e57-93c8-4d4c-9a5a-b1c76242e834
Klingon,5,Fleet HoH'SuS Bird-of-Prey,VeryRare,Tac,27,48,23,+8 TAC per SciShip or TacShip,,62870e32-9f86-4da1-8bc4-a51edd0410a8
Klingon,5,Fleet K'maj Battlecruiser Retrofit,VeryRare,Eng,40,31,27,+8 SCI and TAC per TacShip,,0d7e72a3-1fdd-4389-b909-32e7f3fe3fa8
Klingon,5,Fleet K't'inga Battlecruiser Retrofit,VeryRare,Eng,46,31,21,+10 ENG per EngShip,,b7031f69-5233-4e8c-a2a2-1a109c3c28f3
Klingon,5,Fleet Mogh Battlecruiser (T5),VeryRare,Eng,46,34,18,+10 SCI per TacShip,,ae7196ef-1d01-4344-8a6a-934c77546fda
Klingon,5,Fleet Nausicaan Scourge Destroyer Retrofit,VeryRare,Tac,21,50,27,1.5x Critical Rating from ENG and SCI,,4523e54d-6e0f-449b-85d1-e372f83e8aa0
Klingon,5,Fleet Negh'Var Heavy Battlecruiser,VeryRare,Eng,54,23,21,-10% Maintenance per SciShip and TacShip,,f39dd38e-cd55-477f-a7e3-da3a5d614da3
Klingon,5,Fleet Norgh Bird-of-Prey Retrofit,VeryRare,Tac,33,34,31,-5% Maintenance per Any Ship,,8e6e2649-1b97-41e4-b2e2-72b291805fd0
Klingon,5,Fleet Orion Corsair Flight Deck Carrier Retrofit,VeryRare,Eng,55,15,28,+10 ENG per TacShip,,ce7f52df-d27c-4bb9-884c-8a18c19a719c
Klingon,5,Fleet Peghqu' Heavy Destroyer,VeryRare,Tac,20,48,30,+20 SCI and TAC when Alone,,edeb8fdb-c4e0-4b75-b920-316980198027
Klingon,5,Fleet Qin Heavy Raptor,VeryRare,Tac,26,50,22,+8 ENG and SCI per EngShip,,70546247-a70a-4691-949e-e32053190f64
Klingon,5,Fleet Somraw Raptor Retrofit,VeryRare,Tac,32,44,22,+10 SCI per SciShip,,b94673ed-f11e-485c-bfc4-881d0719bf50
Klingon,5,Fleet Tor'Kaht Battlecruiser Retrofit,VeryRare,Eng,44,37,17,-5% Maintenance per Any Ship,,5d9e62e4-773c-4f5e-9f5d-0f03cad02510
Klingon,5,Fleet Vo'Quv Carrier,VeryRare,Sci,24,17,57,+8 ENG and TAC per SciShip,,9cbed815-31cb-4224-8f87-cf17f758dae3
Klingon,5,Gorn Varanus Fleet Support Vessel,VeryRare,Sci,25,19,54,+10 TAC per SciShip,,5a0c91c0-22a8-4367-9377-2576b0b153fd
Klingon,5,Korath Temporal Science Vessel,UltraRare,Sci,23,23,59,2.5x Critical Rating from SCI,,0b004b75-a221-47ae-94f3-87b49850bfc5
Klingon,5,Krenn Temporal Destroyer,UltraRare,Tac,23,59,23,+20 TAC and ENG when Alone,,c3d32e0a-e4ef-420e-a453-d4218cc8e811
Klingon,5,MoQ Dyson Battle Science Destroyer,VeryRare,Sci,18,32,48,+35 ENG when Alone,,15a86a73-3abe-49c7-b4ba-b82f59931d6d
Klingon,5,Ta'Sub Dyson Command Science Destroyer,VeryRare,Sci,12,32,54,+35 SCI when Alone,,74dd07d1-1e8d-4d57-a765-519eb26dd27d
Klingon,6,Batlh Intel Science Vessel,Rare,Sci,28,28,52,+10 SCI per SciShip,,9290987d-945e-45e1-b445-012c23bd159a
Klingon,6,Chargh Temporal Warship,Rare,Tac,20,58,30,+10 TAC per SciShip,,51689232-8949-4b0d-932b-c0291646ab73
Klingon,6,Duvqu' Heavy Destroyer,Rare,Tac,23,52,33,-25% Maintenance per SciShip,,01904588-057b-4439-8062-79fb42ea9ec1
Klingon,6,Ferasan Slithus Escort,Rare,Tac,23,49,36,+10 TAC per EngShip,,0a4d6bc1-914b-41aa-81d1-9c18dd9620e0
Klingon,6,Ketha Recon Raptor,Rare,Tac,19,52,37,+10 SCI per TacShip,,33102ed8-3bcc-4d8b-8972-54b34ddcf910
Klingon,6,Kor Bird-of-Prey,Rare,Tac,35,38,35,2.5x Critical Rating from TAC,,eead4100-b1d0-4831-afc0-f8f45ea59ef3
Klingon,6,Kurak Battlecruiser,Rare,Eng,50,37,21,-25% Maintenance per TacShip,,9c7c407a-316d-4b12-b596-8f94001688ed
Klingon,6,M'Chla Bird-of-Prey Refit,Rare,Tac,33,54,21,+35 TAC when Alone,,2ef88dea-f20c-471c-9ba8-b1c3ad24d7d5
Klingon,6,M'Chla Pilot Bird-of-Prey,Rare,Tac,28,58,26,+8 SCI and ENG per TacShip,,d7b2f8da-10a5-4b13-b7e6-18df69be7197
Klingon,6,Mat'Ha Raptor,Rare,Tac,30,58,20,+10 TAC per EngShip,,7b5d3e94-1459-449d-a8c6-23919709f437
Klingon,6,Naj'sov Research Vessel,Rare,Sci,31,20,57,+8 SCI per EngShip or TacShip,,6e09a296-8299-4e5f-af7b-f14ae2955b72
Klingon,6,Nausicaan Kolasi Siege Destroyer,Rare,Tac,32,53,23,+15 to All Stats when Alone,,66f9522d-2f09-4ffb-9f3c-30e0d439eaa3
Klingon,6,Negh'Tev Heavy Battlecruiser,Rare,Eng,51,32,25,+8 SCI and TAC per TacShip,,18bbc5c5-eeaf-45d6-b730-917d34c891c7
Klingon,6,Orion Blackguard Flight Deck Assault Carrier,Rare,Eng,53,38,17,+10 ENG per TacShip,,c7fd0b53-3a9e-4d88-8ef1-8b357a85dd66
Klingon,6,Qa'Tel Flight Deck Raptor,Rare,Tac,29,54,25,+8 SCI per EngShip or TacShip,,f6a087a7-02d8-4348-b3be-fb8dc1c5ee39
Klingon,6,QeHpu' Advanced Light Battlecruiser,Rare,Eng,55,31,22,2.5x Critical Rating from ENG,,237a8c8f-80d1-437e-afb7-15f783ead249
Klingon,6,Qib Intel Battlecruiser,Rare,Eng,54,37,17,+10 SCI per EngShip,,6ab0798b-9dc1-4537-bb3f-c1064079fb6d
Klingon,6,Qoj Command Dreadnought Cruiser,Rare,Eng,50,29,29,-25% Maintenance per EngShip,,cf71bc0d-573c-4210-a942-d65d53cf3abd
Klingon,6,Qugh Miracle Worker Battlecruiser,Rare,Eng,50,43,15,+8 TAC and ENG per EngShip,,0ded536c-db11-4b8d-b20b-d129fdc9f7c4
Klingon,6,Sech Strike Wing Escort,Rare,Tac,26,50,32,+10 TAC per SciShip,,3140fbdf-accd-44e4-96d1-edd6cfc27b21
Klingon,6,Vo'Devwl Support Carrier,Rare,Sci,26,26,55,-25% Maintenance per SciShip,,5d92a349-90f0-47bd-8cbf-446751482f9d
Klingon,6,Vor'ral Support Battlecruiser,Rare,Eng,62,27,19,-25% Maintenance per EngShip,,32a578db-8905-4aa9-aaa9-9368521f0dc6
Klingon,6,An'quat War Command Battlecruiser,VeryRare,Eng,77,20,20,+35 ENG when Alone,,96225104-845c-49aa-8573-8b4a78e89e98
Klingon,6,Antaak Science Miracle Worker Cruiser,VeryRare,Eng,57,26,34,+20 TAC and ENG when Alone,,04e3f80b-3c8b-4557-96e9-d57e8952d825
Klingon,6,Chargh'poH Temporal Destroyer,UltraRare,Tac,29,68,29,+8 TAC per EngShip or SciShip,,b4450584-68a2-4781-bbfc-014c27be1225
Klingon,6,D7 Miracle Worker Flight Deck Carrier,UltraRare,Eng,63,35,28,Ignores +/- ENG from Events,,8c7bf7e0-7464-4aa7-b883-1b37487e42a5
Klingon,6,D7 Temporal Battlecruiser,UltraRare,Eng,53,44,29,Ignores +/- ENG from Events,,782d2e07-2931-4ce9-a7ce-efd90e5eae8c
Klingon,6,D9 Dreadnought Battlecruiser,UltraRare,Eng,62,46,18,+15 All Stats when Alone,,5a68953d-0795-4c82-bbd0-dbccc2a1c683
Klingon,6,Durgath Temporal Heavy Dreadnought Battlecruiser,UltraRare,Eng,57,42,27,+20 TAC and ENG when Alone,,d6abeec6-f924-4b66-9cce-1bd59fa10072
Klingon,6,Fleet B'rel Bird-of-Prey,VeryRare,Tac,37,43,37,Ignores +/- TAC from Events,,2ac5a367-f685-4e41-ba2d-b124f111422c
Klingon,6,Fleet Batlh Intel Science Vessel,VeryRare,Sci,29,29,59,+35 SCI when Alone,,3d311c8a-b877-463a-9333-6e32daaebe0a
Klingon,6,Fleet Chargh Temporal Warship,VeryRare,Tac,21,59,37,+10 SCI per TacShip,,8e090e05-046e-494b-b74f-5ce8caee7e10
Klingon,6,Fleet Duvqu' Heavy Destroyer,VeryRare,Tac,25,57,35,+8 SCI per Any Ship,,5eee521e-578a-41d5-b5a5-895e9053e267
Klingon,6,Fleet Ferasan Slithus Escort,VeryRare,Tac,23,49,36,+10 TAC per EngShip,,2dcd50c8-a6e7-4321-89e9-5e179923a2fb
Klingon,6,Fleet Ketha Recon Raptor,VeryRare,Tac,20,58,39,+35 SCI when Alone,,41078df7-a71d-4d5e-a45b-710de6e6c165
Klingon,6,Fleet M'Chla Pilot Bird-of-Prey,VeryRare,Tac,28,63,26,+35 TAC when Alone,,48c7face-2b17-445d-a6b4-3752cb9d0aa9
Klingon,6,Fleet Mat'Ha Raptor,VeryRare,Tac,35,60,22,+8 ENG and SCI per TacShip,,bffa798f-0614-4d82-87e2-26b7d42fa07d
Klingon,6,Fleet Mogh Battlecruiser (T6),VeryRare,Eng,55,39,23,+8 ENG per Any Ship,,68268702-c086-4107-ac9f-245af1714ab9
Klingon,6,Fleet Naj'sov Research Vessel,VeryRare,Sci,39,20,58,2.5x Critical Rating from SCI,,bd13015d-c889-482f-8569-bbb767f7c83c
Klingon,6,Fleet Nausicaan Guramba Siege Destroyer,VeryRare,Tac,35,57,25,2x Critical Rating from Events,,eafcfe8c-70a1-4c86-8267-050a65d75dad
Klingon,6,Fleet Negh'Tev Heavy Battlecruiser,VeryRare,Eng,55,35,27,+8 TAC per Any Ship,,673d4000-44c3-430f-91fa-eeea2d7274a3
Klingon,6,Fleet Orion Blackguard Flight Deck Assault Carrier,VeryRare,Eng,57,41,19,+8 ENG per TacShip or SciShip,,abe50eb6-e615-4c84-8d15-d8b1b56fe848
Klingon,6,Fleet QeHpu' Advanced Light Battlecruiser,VeryRare,Eng,59,34,24,2x Critical Rating from Events,,94b1b449-bc45-41e1-8768-5de3c3ee958c
Klingon,6,Fleet Qib Intel Battlecruiser,VeryRare,Eng,59,39,19,+8 SCI and TAC per EngShip,,1f1ddd3f-5db3-4ca9-a6cd-027ed38a9490
Klingon,6,Fleet Qin Flight Deck Raptor,VeryRare,Tac,31,59,27,+5 ENG and SCI per EngShip or TacShip,,d85bd4f1-cd35-48b5-9b0f-2f616c8f916d
Klingon,6,Fleet Qoj Command Dreadnought Cruiser,VeryRare,Eng,51,34,32,+8 ENG per SciShip or TacShip,,bf7e47e1-4608-49a0-90a0-0f4c774a2338
Klingon,6,Fleet Qugh Miracle Worker Battlecruiser,VeryRare,Eng,54,48,15,+35 ENG when Alone,,b548cf07-73e6-458e-aa00-24ba7132d1dd
Klingon,6,Fleet Sech Strike Wing Escort,VeryRare,Tac,30,50,37,+8 TAC per SciShip or TacShip,,2ffd6955-db66-4863-8f19-93b306882a32
Klingon,6,Fleet Vo'Quv Carrier (T6),VeryRare,Sci,29,29,60,+8 SCI per Any Ship,,c4d6619c-aad1-4629-9f72-68212f530cb5
Klingon,6,Fleet Vor'ral Support Battlecruiser,VeryRare,Eng,67,29,21,-10% Maintenance per TacShip or SciShip,,d438358e-9217-48dc-ae0a-77c6020d5251
Klingon,6,Gorkon Science Battlecruiser,VeryRare,Eng,54,36,27,+10 SCI per EngShip,,4c23c265-43b8-4ee4-ae85-5dfbee5eff4b
Klingon,6,Gorn Ahgamas Multi-Mission Surveillance Vessel,VeryRare,Sci,28,35,54,Ignores +/- SCI from Events,,6c79b219-00e9-4f01-bb0c-6d15efbe524b
Klingon,6,Gorn Hunter Pilot Raider,UltraRare,Tac,47,47,29,+8 Tac and Eng per TacShip,,dd86a086-c530-40f6-940d-edb51b571d2a
Klingon,6,Gorn Ihgomas Multi-Mission Strategic Vessel,VeryRare,Sci,32,39,46,Ignores +/- ENG from Events,,9832d778-a4a9-44cb-b96d-9b76ca1c7296
Klingon,6,Gorn Khaimas Multi-Mission Reconnaissance Vessel,VeryRare,Sci,21,44,52,Ignores +/- TAC from Events,,a2200b8d-97fe-42e8-bb37-54295783ef1a
Klingon,6,Kahless War Battlecruiser,VeryRare,Eng,64,34,19,+10 ENG per TacShip,,e1d02fbf-aeaa-4a37-8382-6d5365108c6e
Klingon,6,Kelvin Timeline D4x Pilot Bird-of-Prey,UltraRare,Tac,34,60,32,+10 TAC per EngShip,,5444ada7-b69d-4f82-9b3e-a1547e590e1b
Klingon,6,Kelvin Timeline D7 Heavy Destroyer,UltraRare,Tac,44,59,23,+20 ENG and TAC when Alone,,5cd10157-945f-419a-ad91-34b9013bdff0
Klingon,6,Klavek Science Pilot Raptor,VeryRare,Tac,22,66,29,+35 SCI when Alone,,f9e968d7-f999-42c3-b53b-0b38ce281b22
Klingon,6,Klinzhai Science Command Battlecruiser,VeryRare,Eng,73,20,24,+35 SCI when Alone,,6d1f1ad6-6e73-4399-9640-64c7b769e508
Klingon,6,Klothos Tactical Miracle Worker Cruiser,VeryRare,Eng,57,34,26,+20 SCI and ENG when Alone,,3c295aa2-6a2c-4061-bb6f-36023c2ec4a7
Klingon,6,Kortar Tactical Pilot Raptor,VeryRare,Tac,22,70,25,+35 TAC when Alone,,dcb7ab1c-2ed4-41d3-bbc2-8b61d9c7d0fe
Klingon,6,Legendary B'rel Pilot Bird-of-Prey,VeryRare,Tac,37,58,22,+35 TAC when Alone,,f0be7ed5-f396-4db9-9888-5dbba043bf77
Klingon,6,Legendary Bortasqu' Command Battlecruiser,VeryRare,Tac,40,60,17,2.5x Critical Rating from ENG,,41593c61-3f63-4328-8f58-7c158a7e1d1f
Klingon,6,Legendary D7 Intel Battlecruiser,VeryRare,Eng,56,43,26,2x Critical Rating from ENG and TAC,,862dafe5-edeb-463a-a15a-3ccb56b76679
Klingon,6,Legendary Negh'Var Intel Dreadnought Cruiser,VeryRare,Eng,55,36,26,2x Critical Rating from ENG and TAC,,44946ca1-16bd-45c5-9456-b143895a7f50
Klingon,6,Legendary Vor'cha Command Support Battlecruiser,VeryRare,Eng,56,39,22,+10 ENG Per EngShip,,71e9c034-3433-4804-acc4-c74a65484787
Klingon,6,Lethean Nemosin Pilot Escort,VeryRare,Tac,26,55,36,-25% Maintenance per SciShip,,4c9e4b94-f127-46f9-bf65-67bdbca06fb9
Klingon,6,Lethean Oniros Pilot Escort,VeryRare,Tac,36,55,26,-25% Maintenance per EngShip,,648c3782-ea05-48b3-83f2-6ed1528da999
Klingon,6,Lethean Xechas Pilot Escort,VeryRare,Tac,26,65,26,-25% Maintenance per TacShip,,876f3d8d-6ce7-4cda-88fb-41cc145d91a9
Klingon,6,Lo'laH Intel Dyson Science Destroyer,VeryRare,Sci,29,36,52,2.5x Critical Rating from TAC,,7c65cd3a-58ed-4e68-8846-07f75440a926
Klingon,6,Martok Tactical Battlecruiser,VeryRare,Eng,48,46,23,+10 TAC per SciShip,,1853fe1c-dbca-4860-bf30-91ccc7f934f3
Klingon,6,Mur'Eq Operations Miracle Worker Cruiser,VeryRare,Eng,65,26,26,+20 TAC and SCI when Alone,,1ae395d4-17aa-45c2-9248-01e14d8073e2
Klingon,6,Na'Qjej Intel Battlecruiser,UltraRare,Eng,59,48,19,+10 TAC per EngShip,,9ec11bfd-1f28-499e-82c4-519367fecfa0
Klingon,6,Orion D'Var Temporal Science Vessel,UltraRare,Sci,47,5,74,+35 SCI when Alone,,47d4a1f2-63ba-4b44-a829-519bb727851d
Klingon,6,Qui'tu Engineering Pilot Raptor,VeryRare,Tac,26,66,25,+35 ENG when Alone,,2b9db099-2bf3-4149-b7f6-70b726fe16ad
Klingon,6,Qul'poH Temporal Science Vessel,UltraRare,Sci,29,29,68,Ignores +/- SCI from Events,,69c200f8-e406-438f-a579-e0ceb94ae7c5
Klingon,6,Sarcophagus Dreadnought Carrier,UltraRare,Tac,41,53,32,Ignores +/- ENG from Events,,95d4710e-e996-42fa-9d2f-804e8fd54493
Klingon,6,Ty'Gokor Tactical Command Battlecruiser,VeryRare,Eng,73,24,20,+35 TAC when Alone,,f08c6238-3dae-4b9b-8759-8c7328885a3d
Romulan,0,Kestrel Runabout,Common,Smc,2,2,2,-25% Maintenance per ANY Ship (Not Small Craft),,63cf52d0-7a05-48ca-b451-6f7e3be4d52a
Romulan,0,Tiercel Shuttle,Common,Smc,4,1,1,-25% Maintenance per ANY Ship (Not Small Craft),,1efc98eb-0124-487a-9655-1bfc1adcb355
Romulan,0,Commander's Gig,Rare,Smc,4,3,3,5x Critical Rating from ALL Stats,,73b65805-80fe-4bba-8f7e-989d68106165
Romulan,0,Scorpion Fighter,Rare,Smc,3,6,1,+10 ALL Stats per ANY Ship (Not Small Craft),,c43df499-93cf-4ab8-94d9-77f6703ea3ed
Romulan,1,T'liss Light Warbird,Common,Tac,5,5,5,2x Bonus from Events,,8c41d312-9ad6-46b6-94e4-19cffc13b6a0
Romulan,1,T'varo Light Warbird,Rare,Tac,6,7,5,1.25x Bonus from All Stats,,843eecea-9b1e-4bc4-a9e0-f08c7464c8ee
Romulan,2,Dhelan Warbird,Common,Tac,8,13,9,1.5x Bonus from ENG and SCI,,d590cbaa-322a-4ae4-83b2-7d5e5b1a8303
Romulan,2,Dhael Warbird,Rare,Tac,9,16,11,+8 ENG per SciShip or TacShip,,e3662c9a-0f69-47fd-8c16-fe4beb43b20f
Romulan,3,Mogai Heavy Warbird,Common,Tac,10,21,14,2.5x Bonus from TAC,,e0ab0581-a7a2-4882-8241-83d942c5b9f6
Romulan,3,Valdore Heavy Warbird,Rare,Tac,12,25,17,+3 ENG and SCI per TacShip,,77503ee7-0940-4bb4-a277-98fd8147165e
Romulan,4,Ar'kif Tactical Warbird,Common,Tac,14,32,14,+15 ENG and SCI when Alone,,8cce58a3-4a8d-4a2b-8357-c6a6d0bdeb4e
Romulan,4,D'deridex Warbird Battlecruiser,Common,Eng,29,16,15,+15 SCI and TAC when Alone,,f4b97881-36d7-442d-a567-fa5ccabcfb55
Romulan,4,Ar'kala Tactical Warbird,Rare,Tac,17,38,17,2.5x Bonus from TAC,,1ca53230-7923-4273-8785-e6ab1680455f
Romulan,4,D'ridthau Warbird Battlecruiser,Rare,Eng,35,19,18,2.5x Critical Rating from ENG,,470b7ef5-e3fb-40e5-bc6f-cc79d5d00033
Romulan,5,Ha'apax Advanced Warbird,Common,Eng,40,20,15,+8 SCI and TAC per EngShip,,6d245169-66f5-4423-9ce2-a0e9791d2788
Romulan,5,Ha'feh Assault Warbird,Common,Tac,18,44,13,+8 ENG and SCI per TacShip,,6714037f-fe47-4af8-b602-ec0b906ce4c6
Romulan,5,Ha'nom Guardian Warbird,Common,Sci,15,20,40,+8 ENG and TAC per SciShip,,89536d40-1bd1-4960-91f6-f80d3e050813
Romulan,5,Mirror Dhelan Warbird Retrofit,Uncommon,Tac,24,44,15,-25% Maintenance per EngShip,,87af5a40-f679-4a28-a42e-66e95f0fa0c8
Romulan,5,Mirror Ha'apax Advanced Warbird,Uncommon,Eng,44,17,22,Ignores +ENG from Events,,eed7fa7d-8987-4bc3-8713-02229f3c2fa7
Romulan,5,Mirror Ha'feh Assault Warbird,Uncommon,Tac,14,49,20,Ignores +/- TAC from Events,,497751ab-b9f0-4bbc-a435-95d4adecac5e
Romulan,5,Mirror Ha'nom Guardian Warbird,Uncommon,Sci,22,17,44,Ignores +/- SCI from Events,,0d103018-ccf4-4f10-b2d4-fc278591780b
Romulan,5,Mirror Mogai Heavy Warbird Retrofit,Uncommon,Tac,13,42,28,-25% Maintenance per TacShip,,bef70efa-f2bb-44ce-8a70-d8cc5fa8eedc
Romulan,5,Mirror T'varo Light Warbird Retrofit,Uncommon,Tac,15,47,21,-25% Maintenance per SciShip,,4736948c-7833-4c86-880b-ec925b5674fa
Romulan,5,Ar'kif Tactical Carrier Warbird Retrofit,Rare,Tac,20,50,20,-10% Maintenance per EngShip or SciShip,,a53abc66-a26e-4721-9f94-6a3fe373ed23
Romulan,5,Aves Dyson Science Destroyer,Rare,Sci,12,28,50,Ignores +/- SCI from Events,,50f5735a-451c-430e-85a8-a2fbc2c34d53
Romulan,5,D'deridex Warbird Battlecruiser Retrofit,Rare,Eng,36,30,24,+10 ENG per EngShip,,af9efa65-48df-4671-bad9-a91af4539c11
Romulan,5,Daeinos Warbird Destroyer,Rare,Tac,26,44,20,+8 SCI per SciShip or EngShip,,96b2df1e-3cc4-427d-82f2-b90ecfe79143
Romulan,5,Dhelan Warbird Retrofit,Rare,Tac,23,36,31,+8 SCI and TAC per EngShip,,dcdf08db-4488-490a-8dce-1201ef8d0c15
Romulan,5,Haakona Advanced Warbird,Rare,Eng,42,28,20,2.5x Bonus from Eng,,d718e35c-aa43-4810-9deb-c3ef69dd3757
Romulan,5,Mogai Heavy Warbird Retrofit,Rare,Tac,32,46,12,+8 ENG and TAC per SciShip,,f867e1d8-e019-4d09-8de3-65e3d2dca30e
Romulan,5,T'varo Light Warbird Retrofit,Rare,Tac,27,36,27,+10 TAC per SciShip,,4ee189f0-8e17-4572-982f-bce45a9a59b1
Romulan,5,Caprimul Surveillance Science Destroyer Warbird,VeryRare,Sci,12,32,54,+35 SCI when Alone,,558e242e-129c-40a6-ac88-43c1b0c83369
Romulan,5,Falchion Dreadnought Warbird,VeryRare,Tac,28,48,22,+35 ENG when Alone,,fb236faf-ef28-4da3-91dd-ed5c1e255d37
Romulan,5,Fleet Ar'kif Tactical Carrier Warbird Retrofit,VeryRare,Tac,22,54,22,1.5x Critical Rating from ENG and SCI,,e7180bee-7437-4020-a401-604b74a0a80d
Romulan,5,Fleet D'deridex Warbird Battlecruiser Retrofit,VeryRare,Eng,40,32,26,+15 All Stats when Alone,,613b182b-f373-4399-b416-bb2bd9e858d6
Romulan,5,Fleet Daeinos Warbird Destroyer,VeryRare,Tac,28,48,22,+20 SCI and TAC when Alone,,92f82f98-38ad-44ae-84ff-d2793ff4bef5
Romulan,5,Fleet Dhelan Warbird Retrofit,VeryRare,Tac,24,40,34,+10 SCI per TacShip,,e477ea86-11bb-4bc8-b287-1bfadca30a02
Romulan,5,Fleet Ha'apax Advanced Warbird (T5),VeryRare,Eng,40,20,15,+8 SCI and TAC per EngShip,,e9101d77-e68a-422c-ac4a-31f8a5f65b14
Romulan,5,Fleet Ha'feh Assault Warbird,VeryRare,Tac,18,44,13,+8 ENG and SCI per TacShip,,925f092f-29f6-4828-9717-398ff6047373
Romulan,5,Fleet Ha'nom Guardian Warbird,VeryRare,Sci,19,26,53,+8 ENG and TAC per SciShip,,12932c58-2199-4f00-a60b-c4f08eda551e
Romulan,5,Fleet Mogai Heavy Warbird Retrofit,VeryRare,Tac,34,50,14,+10 ENG per TacShip,,1d5ad599-9635-431a-8da6-8749a2be8fce
Romulan,5,Fleet T'varo Light Warbird Retrofit,VeryRare,Tac,29,40,29,+10 TAC per TacShip,,4acc6b1b-ab56-4786-984a-b518c575a85c
Romulan,5,Harpia Reconnaissance Science Destroyer Warbird,VeryRare,Sci,12,38,48,+35 TAC when Alone,,d42e6648-d8f8-4723-b6c2-4022c2662328
Romulan,5,R'Mor Temporal Science Vessel,UltraRare,Sci,23,23,59,2.5x Critical Rating from SCI,,d5e0f1e8-68b9-4e57-8f48-eb1aa6cc06dd
Romulan,5,Scimitar Dreadnought Warbird,VeryRare,Tac,22,54,22,+35 TAC when Alone,,8e5f65f4-7166-4f6e-8ee1-f38960473d6c
Romulan,5,Talvath Temporal Destroyer,UltraRare,Tac,23,59,23,+20 TAC and ENG when Alone,,1f4c9f45-228c-4e3a-93f3-5c37f1a0f192
Romulan,5,Tulwar Dreadnought Warbird,VeryRare,Tac,22,48,28,+35 SCI when Alone,,a350460f-72c2-4803-a9ee-16c8af0e2a72
Romulan,5,Tyton Strategic Science Destroyer Warbird,VeryRare,Sci,16,32,48,+35 ENG when Alone,,eda9f4c0-63ed-4180-bad8-744833ff120c
Romulan,6,Aelahl Light Warbird Battlecruiser,Rare,Eng,53,36,19,+15 All Stats when Alone,,2a047684-053e-41c4-832e-8bc26ae2d997
Romulan,6,D'Khellra Warbird Battlecruiser,Rare,Eng,52,28,28,+8 SCI and TAC per TacShip,,ccd841e6-963f-49dc-ae30-f3778ac5b82c
Romulan,6,Deleth Advanced Light Warbird Battlecruiser,Rare,Eng,47,36,25,2.5x Critical Rating from ENG,,9f6efc6c-5328-48d0-9160-9319d562f5d9
Romulan,6,Dinaes Warbird Destroyer,Rare,Tac,31,52,25,-25% Maintenance per SciShip,,2f506b14-5e5f-4f66-8671-61ac2a853058
Romulan,6,Faeht Intel Warbird,Rare,Tac,19,62,27,+10 ENG per TacShip,,22fa7cfe-7f18-4c6a-b353-583d1b838831
Romulan,6,Hathos Warbird,Rare,Tac,23,49,36,+10 TAC per EngShip,,9b28efca-6763-4108-9d9d-bbfb1bc2e11e
Romulan,6,Jhu'ael Tactical Carrier Warbird,Rare,Tac,25,58,25,+8 SCI per EngShip or TacShip,,65366d5d-c3c9-4b7c-af69-f4b5a79895cf
Romulan,6,Kara Advanced Warbird,Rare,Eng,58,28,22,+15 All Stats when Alone,,be17601d-acbf-4dc4-98ed-f0793f2695f6
Romulan,6,Kholhr Temporal Warbird,Rare,Tac,20,58,30,+10 TAC per SciShip,,0bb87528-9df0-4596-be75-27e9df14e68a
Romulan,6,Laeosa Research Warbird,Rare,Sci,37,22,55,+8 SCI per EngShip or TacShip,,89dc00c3-0762-4f89-9ad7-b87c470745a1
Romulan,6,Malem Light Warbird,Rare,Tac,31,46,31,-25% Maintenance per TacShip,,db1f3bba-47ab-4501-aaa0-7e3cec101181
Romulan,6,Morrigu Heavy Warbird,Rare,Tac,38,55,15,2.5x Bonus from TAC,,370ea062-9c25-4784-aca7-35b92ec3fc8e
Romulan,6,Ra'nodaire Support Carrier Warbird,Rare,Sci,26,26,55,-25% Maintenance per SciShip,,c8faf373-2c39-42d1-bf81-ccae5d3dbcd2
Romulan,6,Rahhae Recon Warbird,Rare,Tac,19,52,37,+35 SCI when Alone,,5a5b21ac-4304-45b2-b757-c68c2ef90c63
Romulan,6,Suliban Silik Flight Deck Assault Carrier,Rare,Eng,53,38,17,+10 ENG per TacShip,,8ba3829b-fc8b-4d7a-9f71-e7982fced5c1
Romulan,6,Baratan Operations Command Warbird,VeryRare,Eng,77,20,20,+35 ENG when Alone,,51589314-379b-4411-97cf-defe137a8acf
Romulan,6,Deihu Science Command Warbird,VeryRare,Eng,73,20,24,+35 SCI when Alone,,896f17b2-173c-4c11-b96c-1731fce7a173
Romulan,6,Dewan Dynnasia Pilot Escort,VeryRare,Tac,36,55,26,-25% Maintenance per EngShip,,0c789724-f7d0-498c-beb2-571b8c1a4a5b
Romulan,6,Dewan Ikkabar Pilot Escort,VeryRare,Tac,26,55,36,-25% Maintenance per SciShip,,2a72a60b-d62d-4ea7-b355-24e639b6eeba
Romulan,6,Dewan Vandros Pilot Escort,VeryRare,Tac,26,65,26,-25% Maintenance per TacShip,,5f1d2f65-21f9-4e29-aa9a-147e33dd4848
Romulan,6,Dhailkhina Command Strike Wing Warbird,UltraRare,Tac,43,65,18,+10 TAC per TacShip,,9de16eb6-e6e0-4780-a5d4-f2e07d37141b
Romulan,6,Flambard Science Dreadnought Warbird,VeryRare,Tac,30,42,45,+10 SCI per EngShip,,19b2f688-0482-4da3-807b-a76b7ee9baed
Romulan,6,Fleet Aelahl Light Warbird Battlecruiser,VeryRare,Eng,55,41,21,+8 ENG per Any Ship,,4d085de9-9267-4774-bda3-08e7bcaa8cf3
Romulan,6,Fleet Ar'kif Tactical Carrier Warbird,VeryRare,Tac,28,62,27,+5 SCI and ENG per EngShip or TacShip,,6e95f04e-9734-4a1b-954a-bb9ab957d5da
Romulan,6,Fleet D'Khellra Warbird Battlecruiser,VeryRare,Eng,54,33,30,2.5x Critical Rating from ENG,,e1f4524f-edc5-4765-af9e-1425fa38457b
Romulan,6,Fleet Deleth Advanced Light Warbird Battlecruiser,VeryRare,Eng,51,39,27,2x Critical Rating from Events,,420bef60-6178-4709-9008-66eb546d7f22
Romulan,6,Fleet Dhelan Warbird,VeryRare,Tac,23,57,37,2.5x Critical Rating from TAC,,95c10538-c0b9-48a1-aab6-2cb69e28e292
Romulan,6,Fleet Dinaes Warbird Destroyer,VeryRare,Tac,34,56,27,+8 SCI per Any Ship,,5f990758-1704-45d6-89ec-1e20354c4760
Romulan,6,Fleet Faeht Intel Warbird,VeryRare,Tac,21,66,30,+8 ENG and SCI per TacShip,,1157d913-b00f-40c9-845b-4a58ba85d57e
Romulan,6,Fleet Ha'apax Advanced Warbird (T6),VeryRare,Eng,63,30,24,+8 TAC per Any Ship,,82f58b17-1e91-4f52-978e-215fd6fcda5f
Romulan,6,Fleet Kholhr Temporal Warbird,VeryRare,Tac,21,59,37,+10 SCI per TacShip,,0712b023-b50d-43d1-af6f-482c646aa1e5
Romulan,6,Fleet Laeosa Research Warbird,VeryRare,Sci,37,24,55,2.5x Critical Rating from SCI,,6aa4dd0e-cfb1-4713-a788-10b7503134c8
Romulan,6,Fleet Mogai Heavy Warbird,VeryRare,Tac,41,59,17,+8 TAC and ENG per SciShip,,55c8feb0-92fc-4fd5-9ee0-38237825179b
Romulan,6,Fleet Ra'nodaire Support Carrier Warbird,VeryRare,Sci,29,29,60,+8 SCI per Any Ship,,d672f5c9-8700-4284-a50c-ee9b9c1e43df
Romulan,6,Fleet Rahhae Recon Warbird,VeryRare,Tac,20,58,39,+10 SCI per TacShip,,616c1e38-43f7-4a85-ae06-8a445a5db6ee
Romulan,6,Fleet Suliban Silik Flight Deck Assault Carrier,VeryRare,Eng,57,41,19,+8 ENG per TacShip or SciShip,,bdf58ec9-2ffb-423f-a55c-a334de8a82b1
Romulan,6,Fleet T'varo Light Warbird,VeryRare,Tac,34,49,34,1.5x Critical Rating from ENG and SCI,,05e7dbce-9c76-4169-9a2d-3e6236ec69fb
Romulan,6,Galas Surveillance Explorer Warbird,VeryRare,Sci,28,35,54,Ignores +/- SCI from Events,,0ca154c6-57f2-4fa0-ba75-7efb408fb93d
Romulan,6,Jaeih Science Pilot Warbird,VeryRare,Tac,22,66,29,+35 SCI when Alone,,2b48f148-ff23-4ab1-92bb-e189d3514a18
Romulan,6,Kelvin Timeline T'laru Intel Carrier Warbird,UltraRare,Sci,36,45,45,+8 SCI per EngShip or TacShip,,8ba8dd0d-9733-4bef-b8e9-95b97d08ff8b
Romulan,6,Khaiell Engineering Pilot Warbird,VeryRare,Tac,26,66,25,+35 ENG when Alone,,827f9a7b-b260-45f3-bbf1-b077df9f2aaa
Romulan,6,Khopesh Tactical Dreadnought Warbird,VeryRare,Tac,30,60,27,+10 TAC per SciShip,,e5c17961-2bc4-43e6-8c45-6d6dddc75123
Romulan,6,Kiith Intel Warbird,UltraRare,Tac,22,63,41,-25% Maintenance per EngShip,,18b8bcf7-6588-4fb4-af59-6902c4f2d72a
Romulan,6,Legendary D'deridex Miracle Worker Warbird Battlecruiser,VeryRare,Eng,54,39,24,+10 ENG per TacShip,,6369f634-fba7-42ee-bba9-0df420e196da
Romulan,6,Legendary Dhelan Pilot Warbird,VeryRare,Tac,41,59,17,+25 TAC when Alone,,2e0fd4f2-b3e1-48d4-b532-c8634c10537a
Romulan,6,Legendary Scimitar Intel Dreadnought Warbird,VeryRare,Tac,39,54,24,+10 TAC per EngShip,,08f1fc78-07f7-4e90-bcdd-139cea236a27
Romulan,6,Legendary T'liss Light Intel Warbird,VeryRare,Tac,29,51,37,+35 TAC when Alone,,724069a6-417d-474d-b9a0-eafcbcdb26d5
Romulan,6,Legendary Valdore Temporal Ops Strike Wing Escort Warbird,VeryRare,Tac,21,48,48,1.5x Critical Rating from SCI and TAC,,364681f5-9553-4609-b0ca-008e3b69ea0b
Romulan,6,Nijil Operations Miracle Worker Warbird,VeryRare,Eng,65,26,26,+20 TAC and SCI when Alone,,f2d08953-0341-4946-b833-3ab3274f374e
Romulan,6,Okhala Tactical Pilot Warbird,VeryRare,Tac,22,70,25,+35 TAC when Alone,,0eee45a3-6344-448b-9180-12421b5b7f3f
Romulan,6,Praetor Command Warbird Battlecruiser,UltraRare,Eng,57,25,44,+6 TAC per Any Ship,,575edbb3-35a3-4171-b515-a3ce1a1febdc
Romulan,6,Rallus Temporal Dyson Science Destroyer,VeryRare,Sci,29,29,59,2.5x Critical Rating from SCI,,f695e8b3-4d28-4d00-ab16-f8a2ea6b286e
Romulan,6,Shamshir Operations Dreadnought Warbird,VeryRare,Tac,44,48,25,+10 ENG per TacShip,,16b56dec-9528-4987-bed3-7c092db1f217
Romulan,6,Sui'Mor Temporal Science Vessel,UltraRare,Sci,29,29,68,Ignores +/- SCI from Events,,a52d4f8f-b48e-400d-a1fc-93dc7256d94f
Romulan,6,Surhuelh Reconnaissance Explorer Warbird,VeryRare,Sci,21,44,52,Ignores +/- TAC from Events,,f851dcd8-04e3-4cfe-ba93-062b58491206
Romulan,6,T'liss Temporal Warbird,UltraRare,Tac,35,52,39,Ignores +/- ENG from Events,,cee6f976-bb85-4e42-8ed1-e296558c2d9a
Romulan,6,Taenen Strategic Explorer Warbird,VeryRare,Sci,32,39,46,Ignores +/- ENG from Events,,748634ad-4b85-4cd0-b7f1-84615eaf7ed6
Romulan,6,Tal'aura Temporal Destroyer,UltraRare,Tac,29,68,29,+8 TAC per EngShip or SciShip,,0e5fb0b3-7bbf-445a-bc1a-54c4e32d1681
Romulan,6,Tebok Tactical Miracle Worker Warbird,VeryRare,Eng,57,34,26,+20 SCI and ENG when Alone,,79a50816-3593-4bdd-b6dc-025c4c05f84c
Romulan,6,Thrai Dreadnought Warbird,UltraRare,Eng,57,49,20,+15 All Stats when Alone,,91b4d388-b2eb-4745-bc5b-dcc300c9c915
Romulan,6,Valkis Temporal Heavy Dreadnought Warbird,UltraRare,Eng,51,46,29,+20 TAC and ENG when Alone,,b1bfef90-c801-4764-9cfc-8d69b4597470
Romulan,6,Varel Science Miracle Worker Warbird,VeryRare,Eng,57,26,34,+20 TAC and ENG when Alone,,4ca6304b-7e10-466a-9cef-26436da7acf9
Romulan,6,Vastam Tactical Command Warbird,VeryRare,Eng,73,24,20,+35 TAC when Alone,,79394338-ba3a-4559-9cb8-93fde4fe88ce
JemHadar,0,Jem'Hadar Fighter,Common,Smc,2,3,1,+10 ALL Stats per ANY Ship (Not Small Craft),,42b16198-027e-4d74-873a-5cb9b6c84b38
JemHadar,5,Jem'Hadar Escort,Common,Tac,23,42,10,1.5x Critical Rating from All Stats,,2f1574aa-7bfc-4147-a097-3fe8b92b5faf
JemHadar,6,Jem'Hadar Vanguard Heavy Destroyer,Rare,Tac,35,57,16,-25% Maintenance per SciShip,,7e28c5bf-03c0-424c-afe6-64e8a371bf87
JemHadar,6,Jem'Hadar Vanguard Recon Destroyer,Rare,Tac,19,52,37,+35 SCI when Alone,,8b1be72b-b01b-44a9-8083-1b00969e995e
JemHadar,6,Jem'Hadar Vanguard Support Carrier,Rare,Sci,26,26,55,-25% Maintenance per SciShip,,0e4b530f-a6d2-45c1-9811-5b643e68d99b
JemHadar,6,Jem'Hadar Vanguard Temporal Warship,Rare,Tac,20,58,30,+10 TAC per SciShip,,5ee2d213-246c-4773-8f12-ce697cb8efe9
JemHadar,6,Fleet Jem'Hadar Vanguard Heavy Destroyer,VeryRare,Tac,37,62,18,+8 SCI per Any Ship (Not Small Craft),,89add371-e675-42a7-ac20-19c78545b0c0
JemHadar,6,Fleet Jem'Hadar Vanguard Recon Destroyer,VeryRare,Tac,20,58,39,+10 SCI per TacShip,,c43507a7-e7e3-4b52-b144-7f5edf02664c
JemHadar,6,Fleet Jem'Hadar Vanguard Support Carrier,VeryRare,Sci,29,29,60,+8 SCI per Any ship,,79aab008-eea1-43ca-9184-bbb553aeefde
JemHadar,6,Fleet Jem'Hadar Vanguard Temporal Warship,VeryRare,Tac,21,59,37,+10 SCI per TacShip,,d8d215dd-24e9-447f-9336-4bf7554d9703
JemHadar,6,Jem'Hadar Vanguard Carrier,VeryRare,Sci,20,34,63,2.5x Critical Rating from SCI,,272cf437-b645-4d80-b689-ddee56e41ce4
JemHadar,6,Jem'Hadar Vanguard Dreadnought Cruiser,VeryRare,Eng,60,34,23,2.5x Critical Rating from ENG,,48eb3db6-3c11-4cf1-b2e4-98c9ad386651
JemHadar,6,Jem'Hadar Vanguard Heavy Raider,VeryRare,Tac,30,47,40,Ignores +/- TAC from Events,,4327c03d-c750-4311-9011-c71f3ff068b5
JemHadar,6,Jem'Hadar Vanguard Warship,VeryRare,Tac,38,61,18,2.5x Critical Rating from TAC,,e13bac2f-8ef6-4e77-811e-53e4ba341982
JemHadar,6,Legendary Jem'Hadar Vanguard Pilot Attack Ship,VeryRare,Tac,38,59,20,Ignores +/- SCI from Events,,0703494d-3b71-4cd6-bd94-cf8679e3dcdb
Universal,0,Ferengi Na'Far,UltraRare,Smc,6,4,4,-25% Maintenance per ANY Ship (not small craft),,99882fee-416e-404e-af86-13e7bb0744a1
Universal,0,I.K.S. Hegh,Epic,Eng,62,42,31,+20 SCI per Any Ship,,21b322db-72e9-4c7a-a26b-3f35c301adff
Universal,0,I.S.S. Stadi,Epic,Eng,70,35,30,+20 TAC per Any Ship,,4e789f23-c119-4cca-a36f-e059634a54b6
Universal,0,Tholian Widow Fighter,UltraRare,Smc,1,8,5,+10 ALL Stats per ANY Ship (Not Small Craft),,14f23ccf-95a0-4e60-ba2f-f13af0a65e07
Universal,0,U.S.S. Hope,Epic,Sci,43,20,72,Ignores +/- SCI from Events and&lt;br&gt; 2x Critical Rating from SCI,,9c626279-bb09-445c-9b35-86ac76d36db5
Universal,0,U.S.S. Pastak,Epic,Sci,31,31,73,Ignores +/- SCI from Events and +8 SCI per Any Ship,,bdf4b418-e266-4f4b-96aa-3460a663495f
Universal,0,U.S.S. Rhode Island,Epic,Sci,30,27,78,3x Critical Rating from All Stats,,85eb0d85-3cc6-43bc-b88e-2248c00ea7c4
Universal,0,U.S.S. Sally Ride,Epic,Sci,28,28,79,+20 SCI per Any Ship (Not Small Craft),,eb157d50-8f7d-4a49-840a-4fce8b46d207
Universal,0,Vaadwaur Pythus Fighter,UltraRare,Smc,5,6,3,Ignores ALL Event Modifiers,,9961ca75-ffda-4eaa-96d0-d2a6f2c61aed
Universal,0,Voth Heavy Fighter,UltraRare,Smc,8,4,2,Ignores ALL Event Modifiers,,9562d3d5-0417-472e-97bd-758935d5b287
Universal,0,Zdenia,Epic,Tac,23,61,51,+15 ENG and TAC per Any Ship (Not Small Craft),,689855e5-1039-4995-a236-7992dcd4384c
Universal,2,Suliban Cell Ship,Uncommon,Eng,10,13,10,2x Bonus from All Stats,,40737726-970a-409a-83d5-1464221b68b1
Universal,2,Tuffli Freighter,Uncommon,Eng,13,10,10,2x Bonus from All Stats,,3ad80c06-b2c2-48d3-b1e4-37797cdd4120
Universal,4,Merchantman Freighter,Epic,Eng,36,30,24,+20 ALL per Any Ship (Not Small Craft),,17651b16-b9c7-49ba-9f65-c82c72a228cb
Universal,5,Obelisk Carrier,Common,Eng,37,15,23,2x Critical Rating from Events,,aa386d87-0c4c-4e21-991b-4c8ad39dbb82
Universal,5,APU Cruiser,Uncommon,Eng,47,21,15,+10 SCI per EngShip,,a43687e2-2d8e-4e1b-b439-55b67c932f76
Universal,5,Kazon Heavy Raider,Uncommon,Tac,14,50,19,+10 ENG per TacShip,,9f31f48b-8bab-4568-9817-f94df47158c1
Universal,5,Lukari N'Kaam Scout Ship,Uncommon,Sci,16,31,36,2.5x Critical Rating from SCI,,c095352b-9b8d-48e4-8831-27872e04469e
Universal,5,Malon Battlecruiser,Uncommon,Eng,45,18,20,+10 TAC per SciShip,,a8b362b7-7cf9-402b-9221-a8e41373f3f3
Universal,5,Nihydron Destroyer,Uncommon,Tac,21,47,15,2.5x Critical Rating from TAC,,b46257bc-e633-42f9-83c0-bfb03fb019f8
Universal,5,Sphere Builder Arehbes Destroyer,Uncommon,Tac,9,43,31,Ignores +/- TAC from Events,,f79ec266-5cfb-42b9-8d32-4ab59bfa4cd7
Universal,5,Tholian Meshweaver Escort,Uncommon,Tac,14,47,22,+8 SCI per EngShip or TacShip,,ec9f5d48-84b1-40bd-9bd2-50fcf1eef12f
Universal,5,Advanced Obelisk Carrier,UltraRare,Eng,53,21,31,2.5x Bonus from ENG,,6d098f31-a5f9-4b73-a2e3-22a555705d50
Universal,5,Breen Chel Grett Warship,UltraRare,Tac,25,52,28,+8 ENG and SCI per TacShip,,95d0a38e-95a7-44bd-b8e9-417ebe331df4
Universal,5,Breen Plesh Brek Heavy Raider,UltraRare,Tac,18,63,24,+8 TAC per EngShip or SciShip,,549af821-f880-43b5-a356-138411843cdb
Universal,5,Cardassian Galor Cruiser,UltraRare,Eng,59,28,18,1.5x Bonus from SCI and TAC,,23f910a8-7bf2-4e1f-b148-121fdbd63938
Universal,5,Elachi Monbosh Battleship,UltraRare,Eng,52,39,14,+10 SCI per TacShip,,aad25f59-8f6e-4a38-a0a3-906f0289ea45
Universal,5,Elachi S'golth Escort,UltraRare,Tac,18,51,36,2.5x Critical Rating from TAC,,afc6d85e-106e-404c-9c70-e940ea27a5b2
Universal,5,Ferengi D'Kora Marauder,UltraRare,Eng,51,31,23,+8 SCI and TAC per EngShip,,ff8f7227-5b54-4306-aa42-acbd941ae3e2
Universal,5,Hirogen Apex Heavy Battlecruiser,UltraRare,Eng,57,32,16,+5 Sci per TacShip,,2f8cd669-42d2-42ec-9bd1-6dff0db62f8e
Universal,5,Hirogen Hunter Heavy Escort,UltraRare,Tac,35,51,19,+5 SCI per EngShip,,af41109e-9401-456d-9b5b-d23ec3fcd288
Universal,5,Jem'Hadar Attack Ship,UltraRare,Tac,29,68,8,-25% Maintenance per SciShip,,86c5609e-0552-410a-8b16-ccbb58a39a80
Universal,5,Jem'Hadar Dreadnought Carrier (T5),UltraRare,Tac,44,45,16,+8 ENG per SciShip or TacShip,,1ea70ae1-a61b-4776-bc43-70f339b2f56b
Universal,5,Jem'Hadar Heavy Strike Wing Escort (T5),UltraRare,Tac,38,51,16,+8 TAC per EngShip or SciShip,,b643a6e7-81c0-4074-b00e-2e45cfc5cdac
Universal,5,Risian corvette,UltraRare,Tac,33,51,21,+10 TAC per SciShip,,40158329-fd4c-4f97-b85e-b5ea386d6cc4
Universal,5,Risian Luxury Cruiser,UltraRare,Eng,64,25,16,+8 ENG per SciShip or TacShip,,d03e5d68-9de3-4c37-935d-82327f0e9a2b
Universal,5,Tal Shiar Khnial Adapted Battlecruiser,UltraRare,Eng,46,28,31,+15 All Stats when Alone,,a3a31c48-aba9-4b90-9764-43f315afd4b3
Universal,5,Tal Shiar Llaihr Adapted Destroyer,UltraRare,Tac,24,51,30,+20 ENG and SCI when Alone,,d4b4e427-16c0-4a6c-994b-b075f87727f1
Universal,5,Tholian Orb Weaver,UltraRare,Sci,29,22,54,+8 ENG and TAC per SciShip,,f4a7e63a-8317-48e1-83fa-f858554757cb
Universal,5,Tholian Recluse Carrier,UltraRare,Eng,44,21,40,+10 TAC per TacShip,,17f1e285-b832-473d-a9dd-25ac67e0553d
Universal,5,Undine Dromias Bio-Cruiser,UltraRare,Eng,51,29,25,2.5x Bonus from TAC,,105b68dc-5880-45cd-a20a-377cc1c766a4
Universal,5,Undine Nicor Bio-Warship,UltraRare,Tac,20,56,29,2.5x Critical Rating from SCI,,d30bbde4-82ae-4b38-a594-20541b8d0b35
Universal,5,Voth Bastion Flight Deck Carrier,UltraRare,Eng,54,24,27,2.5x Critical Rating from ENG,,02f0989b-cb0e-4e9f-a6a2-fd29046473d1
Universal,5,Voth Bulwark Dreadnought Cruiser,UltraRare,Eng,63,19,23,-5% Maintenance per Any Ship,,329e846b-0495-4e7a-9bf0-7b987b873cb8
Universal,5,Voth Palisade Science Vessel,UltraRare,Sci,30,15,60,+10 TAC per EngShip,,2344b849-d8fe-453c-b804-47c6e4cde527
Universal,5,Xindi-Aquatic Narcine Dreadnought Carrier,UltraRare,Tac,27,51,27,1.5x Critical Rating from ENG and SCI,,8e8bd039-f3e7-4a58-951f-a0cada26d96f
Universal,5,Xindi-Reptilian Contortrix Escort,UltraRare,Tac,29,58,18,+10 Tac per SciShip,,04324723-12a1-47b9-9ab6-a816fc97460e
Universal,6,Cyclone Intel Escort,Rare,Tac,15,55,38,+25 TAC when Alone,,32d15d38-695f-4916-9917-32e7dd67caae
Universal,6,Terran Adamant Intel Heavy Raider,Rare,Tac,27,63,27,+20 ENG and SCI when Alone,,047efda3-446b-42d4-8052-b681ad6ad5b0
Universal,6,Terran Eagle Pilot Raider,Rare,Tac,23,47,47,+20 TAC and SCI when Alone,,85a4cf04-a054-4e37-b635-2a0943bbb2f8
Universal,6,Terran Hydra Intel Destroyer,Rare,Tac,27,70,20,+35 TAC when Alone,,3d7fa828-f861-4c06-93de-bd12162ae799
Universal,6,Terran Monitor Miracle Worker Carrier,Rare,Sci,25,33,59,+35 ENG when Alone,,37b0b016-4e4e-45dc-aac5-2dc44f8f236a
Universal,6,Terran Sirius Command Dreadnought Cruiser,Rare,Eng,61,40,16,+35 SCI when Alone,,b0e662d4-5cf7-411d-ac5c-4f2afb5b8ed4
Universal,6,Aetherian Harmony,UltraRare,Sci,26,44,56,-10% Maintenance per Science Ship,,e3dc4aeb-b500-498d-a98e-9c1195b484d3
Universal,6,Aetherian Revelation,UltraRare,Sci,41,24,61,+6 ENG per Any Ship,,1e19543e-671c-48e3-989e-c3ab94f18d41
Universal,6,Aetherian Salvation,UltraRare,Eng,61,33,33,Ignores +/- SCI from Events,,b07ea4ee-7b64-4c61-9e6f-d3a1755248b8
Universal,6,Alliance Rex Pilot Escort,UltraRare,Tac,30,60,36,+10 ENG per TacShip,,d7f90b2f-eef5-4b31-afe6-dc5477efe70d
Universal,6,Amarie Smuggler's Heavy Escort,UltraRare,Tac,20,62,44,Ignores +/- ENG from Events,,7afe1440-4eaf-49f5-afe4-e5bfa616861c
Universal,6,Areore Miracle Worker Juggernaut,UltraRare,Tac,43,54,29,1.5x Critical Rating from TAC and ENG,,826e0b88-f118-4058-94aa-69cedc03220e
Universal,6,Atlantis Temporal Destroyer,VeryRare,Tac,18,59,40,+10 TAC per TacShip,,ab24ac43-5eb7-4ad8-9b80-e77aab790fa8
Universal,6,Ba'ul Sentry Vessel,UltraRare,Sci,20,46,60,-25% Maintenance per TacShip,,076213c7-797f-4b55-988c-2139c8e9c66a
Universal,6,Benthan Assault Cruiser,UltraRare,Eng,63,40,23,+8 ENG and TAC per SciShip,,264ca2ac-df80-471b-90ee-dd2c0b5f4b90
Universal,6,Borg Assimilator Dreadnought Carrier,UltraRare,Eng,66,20,40,+6 TAC per Any Ship,,a2368462-477c-4fb6-8f97-f4ae1e95d8b8
Universal,6,Breen Chel Boalg Warship,UltraRare,Tac,40,53,33,+10 TAC per EngShip,,6fcae3c1-938b-4e04-9aed-65e62bb34880
Universal,6,Breen Keth Sarr Intel Courier,UltraRare,Tac,42,56,28,+35 TAC when Alone,,3977d350-3003-4f09-9a70-33b19cd06b04
Universal,6,Breen Plesh Tral Heavy Raider,UltraRare,Tac,24,72,30,+8 SCI and ENG per TacShip,,92904c27-cd1a-4f03-8a8a-faba2fc87cc0
Universal,6,Breen Rezreth Dreadnought Cruiser,UltraRare,Eng,62,33,31,Ignores +/- TAC from Events,,3d6da026-74f1-49fa-bc32-927cf220ddc7
Universal,6,Breen Sarr Theln Carrier,UltraRare,Sci,32,44,50,-10% Maintenance per TacShip or EngShip,,c4c7e992-f0b4-4d45-9192-461a638c098e
Universal,6,Breen Yod-Thot Dreadnought Carrier,UltraRare,Tac,31,66,29,2.5x Critical Rating from TAC,,472a4fa6-6581-402b-9df1-bb31b5d3a399
Universal,6,Cardassian Damar Intel Science Dreadnought,VeryRare,Sci,23,34,60,Ignores +/- SCI from Events,,bac39083-e1c9-47cd-ba59-c7f66197ce10
Universal,6,Cardassian Detapa Intel Escort,VeryRare,Tac,16,56,45,Ignores +/- TAC from Events,,fee7bf86-45ef-4372-b812-b096671d6938
Universal,6,Cardassian Ghemor Intel Flight Deck Carrier,VeryRare,Eng,66,29,22,Ignores +/- ENG from Events,,e0e6419b-c92b-4feb-a1a1-9b5f2286ad13
Universal,6,Cardassian Keldon Cruiser,UltraRare,Eng,71,29,26,1.5x Critical Rating from TAC and ENG,,4d678610-4e9f-41f9-808c-7a5f1fdcf8af
Universal,6,Chekov Intel Science Warship,VeryRare,Sci,23,47,47,+20 ENG and TAC when Alone,,f70e9393-d262-49ff-9d05-a51dd74687d9
Universal,6,Chronos Temporal Dreadnought Cruiser,VeryRare,Eng,51,41,25,Ignores +/- ENG from Events,,892ba8be-91c0-44fc-b213-84eddaedfd1b
Universal,6,Cnidarian Defender,UltraRare,Eng,60,33,33,+2 ALL STATS per Any Ship,,2bd89a19-7035-473b-809c-2ef897a5ebd7
Universal,6,Compiler Science Dreadnought,UltraRare,Sci,32,35,59,+35 SCI when Alone,,42b75863-d67c-488d-bd87-994704d51d44
Universal,6,Courier Pilot Raider,UltraRare,Tac,20,64,42,+10 SCI per EngShip,,9cdfcb73-2f65-4a38-9373-670775d30253
Universal,6,Damocles Miracle Worker Heavy Frigate,UltraRare,Eng,65,38,26,+2.5x Critical Rating from Engineering,,5cf96ea3-5f8c-45cb-b023-408b0cae51b8
Universal,6,Denorios Bajoran Interceptor,UltraRare,Tac,26,59,41,+10 TAC per TacShip,,56dd18be-0f56-426a-936e-82320a4bacc0
Universal,6,Eisenberg Star Cruiser,UltraRare,Eng,60,26,40,+6 ENG per Any Ship,,663f8952-70b1-4efc-9e50-3f58870aaac8
Universal,6,Elachi Ornash Battlecruiser,UltraRare,Eng,56,38,32,2.5x Critical Rating from ENG,,ab693c78-41f4-4f2c-bc51-07fd959b44d5
Universal,6,Elachi Qulash Frigate,UltraRare,Eng,60,45,21,+20 TAC and ENG when Alone,,2e0f43b8-1da9-4fe7-af3c-056918ec4a5b
Universal,6,Elachi S'ateth Escort,UltraRare,Tac,23,62,41,2.5x Critical Rating from TAC,,63bcaf78-3652-4b16-a48c-88f0669fbd07
Universal,6,Elachi Sheshar Command Dreadnought Cruiser,UltraRare,Eng,60,38,29,2x Critical Rating from Events,,e8888403-d53d-41a3-9c12-b3b86fe80b3a
Universal,6,Elachi Sheshar Intel Dreadnought Cruiser,UltraRare,Eng,57,38,32,Ignores +/- ENG from Events,,85c8fe0b-0de9-4516-a737-e514d85d3538
Universal,6,Eleos Intel Scout Vessel,UltraRare,Sci,34,33,59,+6 SCI per ANY ship,,63a22de3-b2e5-4b2a-8186-f0ec57ef7e81
Universal,6,Emerald Chain Intel Juggernaut,UltraRare,Tac,18,70,38,+10 SCI per TacShip,,6d210a80-a74c-4c10-87ce-b3908d8912a1
Universal,6,Empersa Alliance Miracle Worker Juggernaut,UltraRare,Tac,42,58,26,1.5x Critical Rating from TAC and ENG,,e9eeaa92-5aed-4b05-9602-103ea3223eb1
Universal,6,Eternal Temporal Multi-Mission Science Vessel,VeryRare,Sci,32,29,56,Ignores +/- SCI from Events,,fa9dc459-e9ce-4563-a0a5-1e036f8e3563
Universal,6,Fek'Ihri Byr'Jai Interceptor,UltraRare,Tac,20,55,53,+8 SCI per EngShip or TacShip,,82d3e2d1-14a2-4a8c-9c8c-e79f101d3efc
Universal,6,Fek'Ihri Fe'rang Dreadnought Carrier,UltraRare,Tac,40,62,24,+10 TAC per EngShip,,2a3c0b9b-ca90-4845-9617-29718df6436b
Universal,6,Fek'Ihri Gok'tad Carrier,UltraRare,Sci,24,40,62,+10 TAC per SciShip,,97baf269-0b09-41fb-bbf5-fd16f8bb97dc
Universal,6,Fek'Ihri S'torr Warship,UltraRare,Tac,30,63,33,+10 SCI per TacShip,,7bd4df99-91a7-4a6a-8ce7-f7a72d790fdc
Universal,6,Fek'Ihri Vok'Tar Temporal Science Vessel,UltraRare,Sci,27,29,70,-10% Maintenance per SciShip or EngShip,,7045ee4a-b32c-4c2f-a320-2edc5b09dafa
Universal,6,Ferengi Nagus Marauder,UltraRare,Eng,57,42,27,Ignores +/- ENG from Events,,9dfc64cf-81a8-410f-ab14-9b3005ce14f6
Universal,6,Ferengi Nandi Warship,UltraRare,Tac,22,60,44,-10% Maintenance per EngShip or SciShip,,7d346080-3c3a-4f6a-a8a2-c0b2d70313a4
Universal,6,Ferengi Quark Marauder,UltraRare,Eng,58,34,34,+35 ENG when Alone,,c52ec614-d60d-461d-8918-b082dfaba998
Universal,6,Fleet Cyclone Intel Escort,VeryRare,Tac,15,62,40,1.5x Critical Rating from SCI and TAC,,8abeb7f4-8f21-4a87-aa04-e9c351575faa
Universal,6,Garrett Command Alliance Dreadnought Cruiser,UltraRare,Eng,57,40,29,1.25x Critical Rating from All Stats,,7957876c-5c0b-4142-8086-211e2d3fde6a
Universal,6,Gomtuu,UltraRare,Sci,21,31,53,-10% Maintenance per SciShip or EngShip,,5d2cd41e-9185-43f4-9a31-6007bf1288af
Universal,6,Hazari Destroyer,UltraRare,Tac,30,66,30,+8 ENG and SCI per EngShip,,b494ee93-53dd-483e-96f4-8e4b2b16c0a2
Universal,6,Herald Baltim Heavy Raider,UltraRare,Tac,37,57,32,+20 ENG and SCI when Alone,,36f62d63-5d66-479f-9d85-5887a6882be5
Universal,6,Herald Quas Flight Deck Carrier,UltraRare,Eng,64,29,33,+35 TAC when Alone,,1f4a136b-bc8a-44d1-8e1d-453be84b9eff
Universal,6,Herald Vonph Dreadnought Carrier,UltraRare,Tac,26,68,32,+35 ENG when Alone,,8834ea2d-6add-49ec-b764-463df8f1cfc4
Universal,6,Hirogen Predator Heavy Escort,UltraRare,Tac,42,65,19,+15 ALL when Alone,,7ae6584d-e209-440b-bc20-ddfa858dcd26
Universal,6,Hur'q Nekcrid Assembly Multi-Mission Science Vessel,UltraRare,Sci,25,45,56,+8 SCI per EngShip or TacShip,,44f52fc2-d33e-4eb2-b56b-3b98fd97e1a6
Universal,6,Hur'q Vedcrid Hive Dreadnought Carrier,UltraRare,Eng,63,39,24,+5 TAC per Any Ship (not Small Craft),,d2ac2cfa-b4e8-4021-89a7-7e83ab07db13
Universal,6,Hur'q Vridyat Ravager Strike Wing Escort,UltraRare,Tac,27,72,27,+8 TAC per EngShip or SciShip,,029179f7-99c0-463c-9b53-f0d3f8d6dfc1
Universal,6,Husnock Warship,UltraRare,Tac,44,60,22,+20 TAC and ENG when Alone,,7c695f0b-90b7-46f0-9895-153b4e453498
Universal,6,Hysperian Intel Battlecruiser,UltraRare,Eng,52,37,37,+2 ALL STATS per Any Ship,,a0cebd37-2c0c-49a9-8ab2-ca8c22167cf2
Universal,6,Jarok Alliance Carrier,UltraRare,Sci,48,27,51,-25% Maintenance per TacShip,,cfde0a7a-74e0-4c3e-ba0c-54499e0c5363
Universal,6,Jem'Hadar Dreadnought Carrier (T6),UltraRare,Tac,49,55,22,+35 TAC when Alone,,2771c93e-3edf-4316-91e6-af844e4d0232
Universal,6,Jem'Hadar Heavy Strike Wing Escort (T6),UltraRare,Tac,42,60,24,Ignores +/- TAC from Events,,f9536ed5-8570-4a88-8430-36bd7ec68558
Universal,6,Jem'Hadar Light Battlecruiser,UltraRare,Eng,57,45,24,+8 TAC and SCI per TacShip,,9cd72615-e611-44b3-8549-726c6546802a
Universal,6,Jem'Hadar Recon Ship,UltraRare,Tac,32,78,16,2.5x Critical Rating from TAC,,322478bd-fde8-48a5-b66e-015c40794a81
Universal,6,Jem'Hadar Strike Ship,UltraRare,Tac,35,75,16,Ignores +/- TAC from Events,,24c39e87-f4f9-4887-9d43-83afd8b59965
Universal,6,Jovian Intel Heavy Raider,UltraRare,Tac,29,66,31,-25% Maintenance per EngShip,,9f076863-f8bd-48b1-8101-77171e132e99
Universal,6,Khitomer Alliance Battlecruiser,UltraRare,Eng,52,46,28,+10 ENG per TacShip,,731b35d4-f2c8-45f3-8411-3007918f8aff
Universal,6,Kobali Samsar Cruiser,UltraRare,Eng,74,24,28,-10% Maintenance per TacShip or SciShip,,05159341-5af0-4572-92b9-5c411663da3b
Universal,6,Krenim Annorax Science Dreadnought,UltraRare,Sci,18,47,61,Ignores +/- SCI from Events,,bf64b651-9de7-4260-bacf-b66f0fba1da6
Universal,6,Krenim Imperium Warship,UltraRare,Tac,26,66,34,+10 TAC per SciShip,,74bc6da2-7860-4a57-b5a9-f1323d751d1a
Universal,6,Krenim Science Vessel,UltraRare,Sci,26,34,66,+8 SCI per EngShip or TacShip,,410dfb72-88d7-46ff-85a4-9bf28f100d73
Universal,6,Kwejian Pilot Frigate,UltraRare,Eng,55,51,20,-25% Maintenance per SciShip,,b9a485f5-1af1-4a58-98d3-19f513d26c7b
Universal,6,La Sirena Heavy Raider,UltraRare,Tac,35,54,37,Ignores +/- TAC from Events,,5be12b54-066a-4ed9-84a2-393f28a1d47f
Universal,6,Liberated Borg Command Juggernaut,UltraRare,Tac,43,66,17,+20 TAC and ENG when Alone,,dd00dfb3-be59-480e-b80f-6daf772e44fc
Universal,6,Lukari Dranuur Scout Ship,VeryRare,Sci,21,50,55,+8 SCI per TacShip or EngShip,,9083ee90-4b37-4b81-8d0e-5b3549913635
Universal,6,Lukari Ho'kuun Science Vessel,UltraRare,Sci,42,20,64,+10 SCI per SciShip,,67d3070f-1a79-487a-b6f1-d08120b183db
Universal,6,Maquis Raider,UltraRare,Tac,35,56,35,+20 ENG and SCI when Alone,,7e4d1ef9-5130-40ab-a493-2aeba27c1c82
Universal,6,Miradorn Theta Heavy Raider,UltraRare,Tac,24,65,37,+20 TAC and SCI when Alone,,e0b79bad-a7f8-441c-a1dc-0b41e57dc722
Universal,6,Na'kuhl Acheros Battlecruiser,UltraRare,Eng,63,36,27,Ignores +/- ENG from Events,,4fe035db-dc19-47a8-b4fa-4538b53db303
Universal,6,Na'kuhl Daemosh Science Vessel,UltraRare,Sci,32,40,54,+35 SCI when Alone,,b31f6a13-81ad-4564-93d0-e56a11256cd2
Universal,6,Na'kuhl Tadaari Raider,UltraRare,Tac,29,60,37,Ignores +/- SCI from Events,,59f9384c-933d-414a-800a-7681bd19f725
Universal,6,Nova One Pilot Raider,UltraRare,Tac,49,55,22,+20 TAC+ENG when ALONE,,6655ed62-70a0-4faa-b388-12c0e278234e
Universal,6,NP Miracle Worker Light Escort,VeryRare,Tac,40,58,19,+20 TAC + ENG when Alone,,a993e9d3-311b-471b-8ba1-1db7d83dfa08
Universal,6,Okinawa Pilot Raider,VeryRare,Tac,33,49,35,+35 TAC when alone,,20800455-ccd0-4cd1-b1a5-1da2d8a3d412
Universal,6,Omega Miracle Worker Light Battlecruiser,UltraRare,Eng,63,46,17,+20 ENG and TAC when Alone,,1f759eb1-6d61-4797-8018-70189237c74e
Universal,6,Orion Interceptor,UltraRare,Tac,29,64,33,2.5x Critical Rating from TAC,,97421337-dd5f-4150-a855-2f07c186dbc9
Universal,6,Orion Orchid Intel Warship,UltraRare,Tac,50,62,14,1.5x Critical Rating from TAC and ENG,,8f3a026b-63e5-4534-82ec-e4a382d82b3c
Universal,6,Ouroboros Temporal Raider,VeryRare,Tac,32,55,30,Ignores +/- TAC from Events,,8f7f1c1d-9eaf-43c9-92f7-8425fcc2188e
Universal,6,Pakled Miracle Worker Clumpship,UltraRare,Eng,60,37,29,Ignores +/- ENG from Events,,c0206606-2a51-4598-9080-3e9ce0cc98e0
Universal,6,Paradox Temporal Dreadnought,UltraRare,Sci,34,32,60,+10 SCI per SciShip,,e4e83517-fbe4-43e3-af39-d369d0240497
Universal,6,Promellian Command Battlecruiser,UltraRare,Eng,57,41,28,+20 ENG and TAC when Alone,,a6b77ba1-4cb1-408a-ac3b-34134f22db8a
Universal,6,Risian corvette (T6),UltraRare,Tac,42,56,28,+10 TAC per TacShip,,0dc7a901-3512-4a84-99b9-229f216c503b
Universal,6,Risian Luxury Cruiser (T6),UltraRare,Eng,72,28,26,Ignores +/- ENG from Events,,e409610f-e784-40fc-b833-4ab08bf92d02
Universal,6,Risian Pilot corvette (T6),UltraRare,Tac,39,59,28,+15 TAC per SciShip,,53014a73-3a8d-4665-8d0e-ebaeac0a78bb
Universal,6,Risian Weather Control Vessel,UltraRare,Sci,31,30,67,+10 SCI per SciShip,,98573a1e-336e-4cde-8eed-2376a3c5b551
Universal,6,Section 31 Command Heavy Battlecruiser,UltraRare,Eng,58,41,27,+35 ENG when Alone,,9024dfca-356c-499f-91e8-7d25e0a9ea19
Universal,6,Section 31 Intel Dreadnought Cruiser,UltraRare,Eng,52,34,40,2x Critical Rating from Events,,10b2d70d-9e98-42cc-8b74-6da6d8a5a9df
Universal,6,Sh'vhal Temporal Science Spearhead,UltraRare,Sci,24,35,67,+10 TAC per EngShip,,24d98ae3-d90a-4555-ae3f-c74adbbe050a
Universal,6,Shrike Intel Juggernaut,UltraRare,Tac,39,55,32,4x Critical Rating from Tactical,,4b08b8b5-f107-4338-b866-8c35c38a9e0e
Universal,6,Son'a Collector Science Dreadnought,UltraRare,Sci,32,23,71,+8 TAC and ENG per TacShip,,be3f7bc9-b528-4ff5-bfa4-8b4b98c8c915
Universal,6,Son'a Command Science Vessel,UltraRare,Sci,38,24,64,+8 SCI per EngShip or TacShip,,4bc60a73-c008-47b3-971b-ab30d79553be
Universal,6,Son'a Intel Battlecruiser,UltraRare,Eng,59,42,25,+8 ENG per SciShip or TacShip,,042cadc5-42bd-4455-bdfa-dbe154d95372
Universal,6,Sphere Builder Denuos Dreadnought Carrier,UltraRare,Tac,35,53,38,2.5x Critical Rating from TAC,,6156914b-a5db-4a3a-bd60-62af62a8d2d5
Universal,6,Sphere Builder Edoulg Science Vessel,UltraRare,Sci,24,44,58,2.5x Critical Rating from SCI,,375a4c74-9e69-4b5c-b0c2-1bea390d7bc0
Universal,6,Styx Terran Dreadnought Cruiser,UltraRare,Eng,53,43,30,Ignores +/- ENG from Events,,6afbb1d9-f025-4f72-b0e7-eaa7281caf2b
Universal,6,Tal Shiar Khlinae Adapted Battlecruiser,UltraRare,Eng,54,32,40,+10 SCI per TacShip,,78e505b1-a21e-4828-84e4-fb761a8bb1c8
Universal,6,Tal Shiar Mandukar Adapted Destroyer,UltraRare,Tac,31,54,41,+10 SCI per EngShip,,158f02c3-5230-41b3-b386-dec0a51c6ad4
Universal,6,Tamarian Deep Space Cruiser,UltraRare,Eng,60,45,21,Ignores +/- ENG from Events,,68663011-f910-45ce-a7ec-4ea03ae1fad0
Universal,6,Temer Alliance Raider,UltraRare,Tac,39,67,20,+8 TAC per EngShip or SciShip,,c1af4da7-e590-4aaa-b0ec-29603f8c48d2
Universal,6,Terran Acheron Dreadnought Carrier,UltraRare,Tac,41,64,21,+6 TAC per Any Ship,,5bdaf3e7-2195-4aa9-aa5c-59558192347e
Universal,6,Terran Cygnus Battlecruiser,VeryRare,Eng,48,40,29,+20 SCI and TAC when Alone,,0a3047b9-6d8b-4b4d-9372-bce11788d079
Universal,6,Terran Lexington Dreadnought Cruiser,VeryRare,Eng,51,49,17,+15 All when Alone,,18531b2a-51cb-436e-9188-8dcc39c4bf0a
Universal,6,Terran Somerville Scout Ship,UltraRare,Sci,25,46,55,+8 SCI and TAC per TacShip,,e86fbf10-170a-4caf-8635-3af854a0a8ea
Universal,6,Terran Trailblazer Science Warship,VeryRare,Sci,17,42,58,+20 ENG and TAC when Alone,,6d6ecb9f-5c26-4535-82ac-76602043a0e5
Universal,6,Tholian Iktomi,UltraRare,Sci,38,25,63,+8 ENG and SCI per SciShip,,cbb08a08-ea43-44d9-9875-0a4292fddac6
Universal,6,Tholian Jorogumo Carrier,UltraRare,Eng,48,35,43,+15 ALL when Alone,,c22cb577-eb1c-482c-947a-360a75a23775
Universal,6,Tholian Tarantula Dreadnought Cruiser,UltraRare,Eng,53,43,30,+10 ENG per TacShip,,c1df8f93-27d8-4b67-bc49-605122edbe3b
Universal,6,Trafalgar Command Juggernaut,UltraRare,Tac,41,63,22,+10 TAC per EngShip,,117ca575-7b9d-41d1-92ff-7867547b0565
Universal,6,Typhoon Temporal Battlecruiser,UltraRare,Eng,49,45,32,+10 SCI per SciShip,,b675e617-1fa2-4e33-beec-5633d275a539
Universal,6,Tzenkethi Rhas'bej Battlecruiser,UltraRare,Eng,57,37,32,+35 SCI when Alone,,5ba94a7e-e8c3-494e-bc17-8fae6c3aa8b1
Universal,6,Tzenkethi Shuk-din Escort,UltraRare,Tac,26,55,45,+10 TAC per SciShip,,4c677c82-2f68-40be-b5fd-447668f0e4e0
Universal,6,Tzenkethi Tzen-tar Dreadnought Carrier,UltraRare,Tac,23,62,41,-5% Maintenance per Any Ship,,0521aaf1-cf63-4b6e-8cf3-7e6405a05999
Universal,6,Undine Cheirax Bio-Warship,UltraRare,Tac,27,60,39,+15 TAC per EngShip,,45aa7960-f19b-4f22-bb82-7d7a514a587e
Universal,6,Undine Kiwavi Bio-Cruiser,UltraRare,Eng,68,29,29,+15 ENG per TacShip,,2dfc4bfe-ef19-4b31-948d-d4d6746497c7
Universal,6,United Earth Defense Force Vessel,UltraRare,Tac,37,59,30,+6 SCI per Any Ship,,6d32b788-5e55-4375-bccf-f1e2e131069e
Universal,6,Vaadwaur Astika Heavy Battlecruiser,UltraRare,Eng,67,41,18,+10 TAC per TacShip,,c5fa1a0e-43c8-450a-a2a1-59a058959f68
Universal,6,Vaadwaur Manasa Assault Escort,UltraRare,Tac,42,64,20,+10 ENG per EngShip,,5b1736b2-48f6-4f20-9bab-6e03217f9501
Universal,6,Vaadwaur Miracle Worker Juggernaut,UltraRare,Tac,46,66,14,+8 ENG and TAC per TacShip,,6070ea2f-0343-466e-bab9-0e3b5fc63995
Universal,6,Vorgon Ryn'kodan Carrier,UltraRare,Eng,74,26,26,+8 SCI and TAC per EngShip,,e23c05c2-57ff-444b-98f4-a8618e535397
Universal,6,Vorgon Xyfius Heavy Escort,UltraRare,Tac,41,63,22,+15 ENG per TacShip,,406bf84f-54ff-4dfc-a311-e046e9e2525f
Universal,6,Vorgon Ytijara Dreadnought Cruiser,UltraRare,Eng,52,30,44,+10 SCI per EngShip,,536ad5de-c99b-4ab8-a9ae-9dcb611f0bab
Universal,6,Voth Bastille Temporal Science Vessel,UltraRare,Sci,32,31,63,-25% Maintenance per SciShip,,7b3ef6b2-7799-4b6d-b9b5-64ce54fd5e3d
Universal,6,Voth Rampart Command Flight Deck Carrier,UltraRare,Eng,63,33,30,-10% Maintenance per TacShip or SciShip,,e6e86e5d-7627-44ea-b66b-4dab2efb5c1d
Universal,6,Voth Stronghold Miracle Worker Dreadnought Cruiser,UltraRare,Eng,62,34,30,-25% Maintenance per Science Ship,,858feb09-35f3-4ef3-adc9-a4e79634a8e4
Universal,6,Vovin Obelisk Carrier,UltraRare,Eng,53,21,31,-10% Maintenance per SciShip or EngShip,,632c83f2-2b08-41be-90ca-7b94a0d471d2
Universal,6,Vulcan Experimental Scout Vessel,UltraRare,Sci,28,36,62,2.5x Bonus from SCI,,9588d6ce-bccc-4c5d-a30b-8785dc8e081d
Universal,6,Vulcan T'Pau Scout Ship,UltraRare,Sci,29,37,60,+8 SCI and TAC per EngShip,,dc8a6e73-b048-404c-8280-0921ae6cf11b
Universal,6,World Razer Temporal Ops Juggernaut,UltraRare,Eng,30,66,30,+8 Eng and Sci per TacShip,,3538dbbb-d3d3-4c7f-9cb1-839bc6466ce7
Universal,6,Xindi-Aquatic Briostrys Dreadnought Carrier,UltraRare,Tac,34,58,34,2.5x Critical Rating from SCI,,d2b9db7e-f645-46a9-8d16-fa106b8a5dea
Universal,6,Xindi-Insectoid Olaen Heavy Strike Wing Escort,UltraRare,Tac,31,62,33,+10 TAC per EngShip,,bb272fd1-3967-4afc-bba9-529f814d1547
Universal,6,Xindi-Primate Ateleth Dreadnought Cruiser,UltraRare,Eng,68,32,26,+10 ENG per TacShip,,6fb5c6cf-45b0-4411-a170-e7cbe5c4d4af
Universal,6,Xindi-Reptilian Sistruus Escort,UltraRare,Tac,35,69,22,+10 TAC per EngShip,,0df644d2-9a68-4ea2-938a-9454eee07559
Universal,6,Zahl Heavy Cruiser,UltraRare,Eng,70,36,20,-5% Maintenance per Any Ship,,b14f28a2-d065-448d-a5aa-727044ba59eb
`;

var EVENTS_CSV = `"Event","Eng","Tac","Sci","Crit","Reward"
"Abandoned Treasure Trove",0,0,0,10,"EcL"
"Allied Patrol",0,-20,0,0,"None"
"Ambush!",0,75,0,100,"None"
"Astrometric Data Exchange",0,0,10,5,"EcS"
"Borg Transwarp Gateway!",50,50,50,100,"None"
"Cascade System Failure",50,0,0,50,"None"
"Dilithium Dust Synthesis",0,0,10,5,"DilithiumS"
"Diplomatic Tribute",0,0,0,5,"EcS"
"Doomsday Machine!",0,100,0,200,"None"
"Enemy Fleet",0,50,0,50,"None"
"Enemy Patrol",0,30,0,30,"None"
"Grateful Freighter Captain",0,0,0,5,"EcL"
"Industrial Replicators Request",10,0,0,5,"EcS"
"Interference Nebula",30,0,0,30,"None"
"Intermix Chamber Salvage",10,0,0,5,"DilithiumS"
"Level 5 Diagnostic",-10,0,0,0,"None"
"Lucky Vein",0,0,0,5,"DilithiumM"
"Lucrative Mining Contract",0,0,0,10,"DilithiumL"
"Miracle Worker",-20,0,0,0,"None"
"Pirate Raiding Party",0,10,0,5,"EcS"
"Pirates",0,10,0,10,"None"
"Power Fluctuations",10,0,0,10,"None"
"Reality-Warping Flux",0,0,50,50,"None"
"Refinement Surplus",0,0,0,5,"DilithiumS"
"Reverse-Engineered Components",20,0,20,10,"ResearchR"
"Rogue Dilithium Asteroid",0,10,0,5,"DilithiumS"
"Safe Trade Route",0,-10,0,0,"None"
"Scavenger Party",25,25,25,20,"ResearchVR"
"Scientific Intuition",0,0,-20,0,"None"
"Secondary Deflector Dish",0,0,-10,0,"None"
"Stable Particle Fountain",40,0,40,20,"ResearchVR"
"Subspace Anomalies",0,0,30,30,"None"
"Temporal Vortex!",0,0,100,200,"Maintenance100"
"Unknown Readings",0,0,10,10,"None"
"Urgent Distress Call!",30,30,30,100,"None"
"Useful Materials",10,0,10,5,"ResearchU"
"Warp-Core Breach Imminent!",75,0,0,100,"None"
"We Don't Have The Power!",100,0,0,200,"None"
"Wormhole!",0,0,75,0,"Maintenance50"
`;

var ASSIGNMENTS_CSV = `Assignment,Rarity,Eng,Tac,Sci,Hours,Minutes
Analyze Newly Discovered Phenomenon,Uncommon,45,45,105,3,30
Assist Warbird Damaged by Pirates,Rare,95,65,65,0,45
Attempt to Dampen Unknown Signal,VeryRare,90,90,160,3,0
Attempt to Disperse Dangerous Phenomenon,Rare,70,70,125,3,0
Break Pirate Blockade,Common,20,45,20,1,30
Calibrate Automated Perimeter Defense,Common,15,25,15,0,30
Calibrate Defense Perimeter,Common,15,25,15,0,30
Capture Escaped Tal Shiar Agent,VeryRare,95,160,95,3,30
Capture Violent Escaped Criminal,VeryRare,95,160,95,3,30
Check Status of Isolated Colony,Common,15,15,15,0,30
Check Status of Isolated Forward Base,Common,80,80,80,2,0
Check Status of Isolated Research Station,Rare,80,80,80,2,0
Check Status of Isolated Surveillance Station,Rare,80,80,80,2,0
Clean Up Derelict Mine Field,Rare,125,80,80,4,0
Clear Stellar Debris for Starbase Construction,Rare,120,70,70,2,30
Coerce Diplomats with Show of Force,VeryRare,80,130,80,0,15
Collect Rare Resources at Diplomatic Exchange,Rare,75,75,75,0,30
Collect Tribute,Rare,75,75,75,0,30
Conduct Salvage Operations,Uncommon,60,30,30,0,15
Conduct Shipping Regulation Enforcement Patrols,VeryRare,145,85,85,2,0
Defend Supply Lines for Medical Emergency,Common,15,15,35,0,45
Defend Supply Lines for Medical Station,Common,15,15,35,0,45
Deliver Sensor Readings to Research Post,Common,10,10,20,0,15
Demolish Illegal Blockade,Common,20,45,20,1,30
Demolish Pirate Blockade,Common,20,45,20,1,30
Destroy Aggressive Defense Installations,VeryRare,190,95,95,4,0
Destroy Imperial Romulan Mine Field,VeryRare,190,95,95,4,0
Discourage Syndicate Raids in Ferengi Space,VeryRare,80,130,80,0,15
Disintegrate Derelict Klingon Vessels,Rare,95,65,65,0,45
Dismantle Illegal Mine Field,VeryRare,190,95,95,4,0
Dismantle Mines Surrounding Neutral World,Rare,125,80,80,4,0
Dismantle Unnecessary Mine Nets,Rare,125,80,80,4,0
Dispatch First Response Team to Medical Emergency,Uncommon,30,30,80,0,30
Disperse Hostile Blockade by Alien Intruders,VeryRare,85,145,85,1,30
Divert Attention of Hostile Spaceborne Entity,VeryRare,85,85,150,2,30
Divert Comet Approaching Trade-Partner's Planet,Common,55,20,20,2,30
Divert Comet from Inhabited Planet,Common,55,20,20,2,30
Divert Comet from Republic Planet,Common,55,20,20,2,30
Divert Comet from Resource-Rich Planet,Common,55,20,20,2,30
Divert Mining Asteroid to Stable Orbit,VeryRare,175,90,90,4,0
Divert Rogue Planet from Inhabited System,VeryRare,175,90,90,4,0
Drive Off or Destroy Spaceborne Entity,VeryRare,85,85,150,2,30
Ensure Return of Salvaged Weaponry,VeryRare,130,80,80,0,30
Ensure Return of Stolen Resources,VeryRare,130,80,80,0,30
Escort Captured Operative to Prisoner Exchange,Rare,70,110,70,2,0
Escort Colonial Convoy through Federation Space,Common,45,45,45,4,0
Escort Colonial Convoy through Ferengi Trade Alliance Space,Common,45,45,45,4,0
Escort Colonial Convoy through Klingon Space,Common,45,45,45,4,0
Escort Colonial Convoy through Pirate Territory,Rare,85,85,85,3,0
Escort Colonial Convoy through Republic Space,Common,45,45,45,4,0
Escort Colonial Convoy through Uncharted Space,Rare,85,85,85,3,0
Escort Diplomatic Envoy Through Trade Alliance Space,VeryRare,105,105,105,2,0
Escort Ferengi Trade Ships for Repairs,Common,20,10,10,0,15
Escort High-Security Prisoner Transport,Rare,70,110,70,2,0
Escort Prisoner Convoy to New Facility,Uncommon,40,80,40,1,0
Establish Blockade of Enemy Supply Lines,Uncommon,90,40,40,1,30
Establish Blockade of Pirate Territory,Uncommon,90,40,40,1,30
Establish Blockade of Suspected Black-Market Supply Lines,Common,65,25,25,3,30
Establish Blockade of Suspected Enemy Supply Lines,Common,65,25,25,3,30
Establish Blockade of Suspected Star Empire Supporters,Common,65,25,25,3,30
Establish Blockade of Syndicate Supply Line,Uncommon,90,40,40,1,30
Establish Defensive Perimeter at Repair Facility,Rare,120,70,70,2,30
Establish Defensive Perimeter at Salvage Facility,Rare,120,70,70,2,30
Establish Trade Blockade on Un-Allied Planet,Uncommon,90,40,40,1,30
Evacuate Refugees from Attacked Colony,VeryRare,110,110,110,3,0
Evacuate Refugees from Collapsing Ferengi Colony,VeryRare,110,110,110,3,0
Evacuate Refugees from Destroyed Colony,VeryRare,110,110,110,3,0
Evacuate Refugees from Failing Colony,Uncommon,70,70,70,4,0
Expose Agents of Empress Sela,Rare,75,75,75,0,30
Ferengi Alliance - Tour of Duty (1 of 10),Epic,10,10,10,20,0
Ferengi Alliance - Tour of Duty (10 of 10),Epic,100,100,100,20,0
Ferengi Alliance - Tour of Duty (2 of 10),Epic,20,20,20,20,0
Ferengi Alliance - Tour of Duty (3 of 10),Epic,30,30,30,20,0
Ferengi Alliance - Tour of Duty (4 of 10),Epic,40,40,40,20,0
Ferengi Alliance - Tour of Duty (5 of 10),Epic,50,50,50,20,0
Ferengi Alliance - Tour of Duty (6 of 10),Epic,60,60,60,20,0
Ferengi Alliance - Tour of Duty (7 of 10),Epic,70,70,70,20,0
Ferengi Alliance - Tour of Duty (8 of 10),Epic,80,80,80,20,0
Ferengi Alliance - Tour of Duty (9 of 10),Epic,90,90,90,20,0
Ferry Starbase Crewmen to Shore Leave,Common,25,25,25,1,0
Field Test New Singularity Drive,VeryRare,80,80,130,0,30
Gather Sensor Readings on Unexplored Colonial Region,Rare,50,50,110,1,30
Gather Sensor Readings on Unexplored Expansion Region,Rare,50,50,110,1,30
Host a Reunification Summit,VeryRare,105,105,105,2,0
Inspect Planetary Transporter Grids,Common,45,15,15,0,45
Investigate Disappearance of Diplomatic Vessel,Uncommon,40,40,95,2,0
Investigate Encoded Sensor Readings,Uncommon,25,25,70,0,15
Investigate Federation Distress Signal,Common,35,35,35,2,0
Investigate Ferengi Distress Signal,Common,35,35,35,2,0
Investigate Klingon Distress Signal,Common,35,35,35,2,0
Investigate Last Known Location of Lost Ship,Common,20,20,45,1,0
Investigate Last Known Location of Lost Traders,Common,20,20,45,1,0
Investigate Last Known Location of Lost Warriors,Common,20,20,45,1,0
Investigate Lost Ship of Diplomatic Ambassadors,Uncommon,40,40,95,2,0
Investigate Mysterious Loss of Commerce Authority Delegate,Uncommon,40,40,95,2,0
Investigate Mysterious Loss of High Council Delegate,VeryRare,40,40,95,2,0
Investigate Potential Location of Lost Archive,Common,20,20,45,1,0
Investigate Republic Distress Signal,Common,35,35,35,2,0
Investigate Stable Astronomical Phenomenon,Common,20,20,55,1,30
Investigate Unknown Distress Signal,Rare,85,85,85,3,30
Join Envoy Escorting Foreign Troops through Empire Territory,VeryRare,105,105,105,2,0
Klingon Empire - Tour of Duty (1 of 10),Epic,10,10,10,20,0
Klingon Empire - Tour of Duty (10 of 10),Epic,100,100,100,20,0
Klingon Empire - Tour of Duty (2 of 10),Epic,20,20,20,20,0
Klingon Empire - Tour of Duty (3 of 10),Epic,30,30,30,20,0
Klingon Empire - Tour of Duty (4 of 10),Epic,40,40,40,20,0
Klingon Empire - Tour of Duty (5 of 10),Epic,50,50,50,20,0
Klingon Empire - Tour of Duty (6 of 10),Epic,60,60,60,20,0
Klingon Empire - Tour of Duty (7 of 10),Epic,70,70,70,20,0
Klingon Empire - Tour of Duty (8 of 10),Epic,80,80,80,20,0
Klingon Empire - Tour of Duty (9 of 10),Epic,90,90,90,20,0
Knock Asteroid into Stable Orbit,VeryRare,175,90,90,4,0
Map Interior of Unexplored Nebula,Common,10,10,20,0,15
Map Unexplored Alien Territory,Uncommon,25,25,70,0,15
Map Unexplored Expansion Region,Rare,50,50,110,1,30
Negotiate for Return of Salvage,VeryRare,130,80,80,0,30
Observe Devastating Weapon Test,VeryRare,80,80,130,0,30
Observe Planetary Disaster in Progress,VeryRare,80,80,130,0,30
Obtain Sensor Readings from Nebula,Common,10,10,20,0,15
Obtain Updated Sensor Readings on Nearby Nebula,Common,10,10,20,0,15
Orbital Cleanse of Medical Emergency Site,Uncommon,30,30,80,0,30
Participate in Prototype Combat Drills,Common,10,20,10,0,30
Participate in Salvage Operations,Uncommon,60,30,30,0,15
Patrol Borders,Rare,75,75,75,1,0
Patrol Core Systems,Common,10,10,10,0,15
Patrol Core Territory,Common,10,10,10,0,15
Patrol Distant Colonies,Uncommon,50,50,50,0,45
Patrol Distant Colonies and Vassals,Uncommon,50,50,50,0,45
Patrol Edges of Claimed Space,Rare,75,75,75,1,0
Patrol New Romulus System,Common,10,10,10,0,15
Patrol Newly Established Colonies,VeryRare,100,100,100,0,45
Patrol Outlying Colonies,Uncommon,50,50,50,0,45
Patrol Republic Border,Uncommon,50,50,50,0,45
Patrol Republic Space,Rare,75,75,75,1,0
Patrol Unexplored Regions,VeryRare,100,100,100,0,45
Patrol Unexplored Space,VeryRare,100,100,100,0,45
Perform Diplomatic Parade,Rare,75,75,75,0,30
Protect Allied Diplomats Marked for Assassination,VeryRare,85,145,85,1,30
Protect Republic Officials Marked for Assassination,Common,20,45,20,1,30
Provide Additional Security for Reunification Summit,Uncommon,60,60,60,3,0
Provide Assistance to Damaged Alien Vessels,Rare,95,65,65,0,45
Provide Diplomatic Show of Force,VeryRare,80,130,80,0,15
Provide Escort for Vacationing Ferengi Merchants,Common,25,25,25,1,0
Provide Honor Escort for Warriors on Leave,Common,25,25,25,1,0
Provide Medical Assistance to Colony,Uncommon,30,30,80,0,30
Provide Opposition for Cloaking Detection Drills,Rare,60,85,60,0,15
Provide Opposition for Counter-Cloaking Drills,Rare,60,85,60,0,15
Provide Opposition for Strike Team Drills,Rare,60,85,60,0,15
Provide Quarantine Enforcement Patrols,VeryRare,145,85,85,2,0
Provide Reinforcements for Counter-offensive,Rare,65,100,65,1,0
Provide Reinforcements for Deep Strike,Rare,65,100,65,1,0
Provide Reinforcements for Secure New Colony,Rare,65,100,65,1,0
Provide Reinforcements in Hostile Sector,Uncommon,30,60,30,0,15
Provide Reinforcements to Combat Zone,Uncommon,30,60,30,0,15
Provide Reinforcements to Secure New Colony,Rare,65,100,65,1,0
Pursue Escaping Interplanetary Criminal,Uncommon,45,85,45,2,30
Pursue Escaping Tal Shiar Agent,Uncommon,45,85,45,2,30
Quarantine Colony After Biological Attack,VeryRare,145,85,85,2,0
Recover Stolen Cloaking Schematics,Common,25,25,25,1,0
Reinforce Envoy of Decorated General on Diplomatic Mission,Uncommon,60,60,60,3,0
Reinforce Envoy of Prominent Trader on Diplomatic Mission,Uncommon,60,60,60,3,0
Reinforce Trade Blockade on Federation Planet,Common,65,25,25,3,30
Relocate Settlers Away from Spaceborne Entity,VeryRare,85,85,150,2,30
Repair Colony Automated Defense System,Common,35,70,35,0,30
Romulan Republic - Tour of Duty (1 of 10),Epic,10,10,10,20,0
Romulan Republic - Tour of Duty (10 of 10),Epic,100,100,100,20,0
Romulan Republic - Tour of Duty (2 of 10),Epic,20,20,20,20,0
Romulan Republic - Tour of Duty (3 of 10),Epic,30,30,30,20,0
Romulan Republic - Tour of Duty (4 of 10),Epic,40,40,40,20,0
Romulan Republic - Tour of Duty (5 of 10),Epic,50,50,50,20,0
Romulan Republic - Tour of Duty (6 of 10),Epic,60,60,60,20,0
Romulan Republic - Tour of Duty (7 of 10),Epic,70,70,70,20,0
Romulan Republic - Tour of Duty (8 of 10),Epic,80,80,80,20,0
Romulan Republic - Tour of Duty (9 of 10),Epic,90,90,90,20,0
Salvage Abandoned Tal Shiar Research Station,VeryRare,130,80,80,0,30
Salvage Derelict Ferengi Vessels,Rare,95,65,65,0,45
Salvage Unnecessary Mine Nets,Rare,125,80,80,4,0
Set Up Orbital Transport Inhibitors at Quarantine Site,Common,45,15,15,0,45
Set Up Quarantine Warning Buoys,Common,45,15,15,0,45
Study Movements of Spaceborne Entity,Uncommon,35,35,90,1,0
Supply Isolated Colony,Common,15,15,15,0,30
Supply Isolated Forward Base,Rare,80,80,80,2,0
Supply Run to Distant Federation Colony,Uncommon,55,55,55,1,30
Supply Run to Distant Ferengi Outpost,Uncommon,55,55,55,1,30
Supply Run to Distant Klingon Outpost,Uncommon,55,55,55,1,30
Supply Run to Raiding Outpost,VeryRare,100,100,100,1,0
Supply Run to Reman Settlement,VeryRare,100,100,100,1,0
Supply Run to Remote Listening Post,VeryRare,100,100,100,1,0
Supply Run to Resource Depot,VeryRare,100,100,100,1,0
Supply Run to Romulan Colony,Uncommon,55,55,55,1,30
Support Response to Medical Emergency,Common,15,15,35,0,45
Suppress Star Empire Propaganda,VeryRare,80,130,80,0,15
Test Prototype Automated Defenses,Uncommon,35,70,35,0,30
Test Prototype Defense Perimeter,Uncommon,35,70,35,0,30
Tow Damaged Federation Ships for Repairs,Common,20,10,10,0,15
Tow Damaged Klingon Ships for Repairs,Common,20,10,10,0,15
Tow Damaged Republic Ships for Repairs,Common,20,10,10,0,15
Track Movements and Capabilities of Spaceborne Entity,Uncommon,35,35,90,1,0
Track Movements of Spaceborne Entity,Uncommon,35,35,90,1,0
Track Reman Separatist Movements,Common,25,25,60,3,0
Track Tal Shiar Movements,VeryRare,90,90,160,3,0
Transport Diplomatic Delegates,Uncommon,60,60,60,3,0
Transport Foreign Delegates,VeryRare,105,105,105,2,0
Transport Materials for Starbase Construction,Uncommon,80,35,35,0,45
Transport Political Prisoner into Custody,Uncommon,40,80,40,1,0
Transport Prisoners to Workforce Placement,Uncommon,40,80,40,1,0
Transport Raw Materials to Repair Facility Site,Uncommon,80,35,35,0,45
Transport Raw Materials to Salvage Facility Site,Uncommon,80,35,35,0,45
Transport Refugees From Failing Ferengi Colony,Uncommon,70,70,70,4,0
Uncover Source of Unknown Signal,Common,25,25,60,3,0
United Federation of Planets - Tour of Duty (1 of 10),Epic,10,10,10,20,0
United Federation of Planets - Tour of Duty (10 of 10),Epic,100,100,100,20,0
United Federation of Planets - Tour of Duty (2 of 10),Epic,20,20,20,20,0
United Federation of Planets - Tour of Duty (3 of 10),Epic,30,30,30,20,0
United Federation of Planets - Tour of Duty (4 of 10),Epic,40,40,40,20,0
United Federation of Planets - Tour of Duty (5 of 10),Epic,50,50,50,20,0
United Federation of Planets - Tour of Duty (6 of 10),Epic,60,60,60,20,0
United Federation of Planets - Tour of Duty (7 of 10),Epic,70,70,70,20,0
United Federation of Planets - Tour of Duty (8 of 10),Epic,80,80,80,20,0
United Federation of Planets - Tour of Duty (9 of 10),Epic,90,90,90,20,0
Verify Sensor Readings from Remote Listening Post,Uncommon,25,25,70,0,15
`;

var TRAITS_CSV = `Trait,Attributes,Description
1.21 Terrawatts,,"-Recharge to Capt Abilities from Electrical and Radiation Dmg$$$$ * When receiving Electrical or Radiation Damage,$$ * Reduce Recharge Time on Captain Abilities by 5% (max once per 10 sec)"
Ablative Field Projector,,"While this trait is slotted, your shield healing bridge officer abilities provide a small amount of Temporary Hit Points on the target. This buff stacks up to 3 times."
Adaptive Hull Plating,,+Max HP to self when using Hull Heal or Command BOff ability$$ * Self: +3% Maximum Hull Hit Points
Advanced Firing Solutions,,Gain Turn Rate and Accuracy when firing Cannons or Turrets.$$ * to self: +1 Flight Turn Rate for 10 sec.$$ * to self: +0.8 Accuracy for 10 sec.
Advantageous Positioning,,+Armor Pen with weapons while Flanking$$ * to self: +20 Armor Penetration with weapons while flanking
All Hands On Deck,,-Recharge on Science and Captain abilities.$$ * -10% Recharge Time on Science Bridge Officer abilities.$$ * Self: -5% Recharge Time on Captain Abilities.$$Can occur once every 5 seconds.
Assimilated Power Conduits,,"While this trait is slotted, activating Emergency Power to Auxiliary will grant a boost to Exotic Damage Critical Chance and Exotic Damage Critical Severity for a short time."
Badlands Tactics,,"While this starship trait is slotted and you are within 3km of an anomaly or Plasma Storm you control, you gain a moderate boost to stealth, defense and flanking damage. "
Battle Ready,,"+Defense, +Damage Resistance after using an Engineering or Intel Bridge Officer ability.$$ * +7.5 All Damage Resistance Rating for 15 sec when using an Engineering or Intelligence Bridge Officer ability.$$ * to self: +7.5% Defense for 15 sec when using and Engineering or Intelligence Bridge Officer ability."
Black Alert,,"While this trait is active, activating Beam: Overload, Cannon: Rapid Fire, or any Intelligence Bridge Officer Ability will allow temporally-displaced duplicates of your ship to appear near any foes that you damage over the next several seconds. Each of these duplicates will fire Torpedo Spreads at the damaged foe and other nearby targets. This trait may only activate once every 25 sec.$$For 12 sec after activating Beam: Overload, Cannon: Rapid Fire, or any Intel Bridge Officer Ability:$$ * Weapon Damage to Foe creates a Spore Duplicate which attacks Foe and up to 2 other Foes, dealing Kinetic Damage to each before disappearing. (Base Damage is approximately 4,000 per target at level 60.)$$ * Up to four total Spore Duplicates may be created, max once per 3 seconds."
Built To Last,,"After reaching level 5 in your Temporal Light Cruiser [T6], D7 Battlecruiser [T6] or T'Liss Temporal Warbird [T6] Starship Mastery, you will unlock the Built to Last Starship Trait. While this trait is slotted, activating a Hull Healing Bridge Officer ability will apply a weapon power cost reduction and a hull regeneration buff. The hull regeneration buff's effectiveness will increase when triggered at low hull strength."
Calm Before the Storm,,"Builds ""Calm"" stacks during combat, once 10 stacks are reached you are given the ""Storm"" buff - improving Bridge Officer Ability cooldown and Weapon Firing Cycle Haste. Leaving combat will clear all current stacks"
Catastrophic Overload,,While this trait is slotted activating Jam Sensors will cause it to deal high electrical damage and disable targets in a large area of effect when it expires.
Charged Particle Reaction,,"While this trait is slotted, activating Charged Particle Burst will cause a secondary, less potent version of Charged Particle Burst to be emitted from each target hit by this ability, causing a chain reaction."
Checkmate,,Exotic Damage and Projectile Damage Enhanced by Control Bridge Officer Abilities$$ * +30% Projectile Weapon Damage for 15 sec$$ * +30% Exotic Damage for 15 sec
Cold-hearted,,"With this trait is active, activating Auxiliary Power to Emergency Battery or any Pilot Bridge Officer Ability will cause your energy weapons to afflict foes with a debuff which Slows, Drains Power, and reduces Damage Resistance Rating. This effect stacks multiple times on each foe damaged."
Collect And Consume,,"Activating any Subsystem Drain or Shield Drain Bridge Officer Ability applies an instant Pull to all foes within 5km, dragging them a bit closer to you. After this Pull is done, all Foes within 2.5km will suffer a small amount of Radiation Damage. A portion of the damage dealt by this trait will be returned to you as a Hull Heal"
Coordinated Assault,,"While this starship trait is slotted and you activate Beam: Overload I, II or III you will allow your pets to use Beam: Overload I.$$Using Cannon: Rapid Fire I, II or III will allow your pets to use Cannon: Rapid Fire I."
Council Of Thought,,"Damage Resistance from nearby allies$$Affects Friend (10 max)$$For each Ally within 10km, gain one stack of Council of Thought (10 stacks max). Each stack grants:$$ * +5 All Damage Resistance Rating$$ * +2% Defense"
Cryonic Siphon,,Energy Siphon reduces Shield Hardness and Damage Resistance.$$ * Foe: to target: -15 All Damage Resistance Rating for 10 sec$$ * Foe: Increases Damage to Target's Shields by 20% for 10 sec
Dampen Energy Signatures,,"Activation of Mask Energy Signature, or any Intelligence Bridge Officer Ability, will grant your Hangar Pets a large amount of Stealth, as well as significantly reducing their Threat generation"
Delphic Phasing,,"Criticals grant +Energy Res, Delayed Immunity.$$When you critically hit gain 1 stack of **Partial Delphic Phasing** (once per 2 seconds):$$ * Self+ +5 All Energy Damage Resistance Rating per stack of **Partial Delphic Phasing** for 15 sec (Max 10 stacks)$$ * At 10 stacks of **Partial Delphic Phasing**:$$   * Self: Immunity to All Energy Damage for 5 sec$$   * Self: Clears all stacks of **Partial Delphic Phasing** and prevents new stacks for 45 sec"
Delphic Shockwave,,Photonic Shockwave creates Radiation hazards.$$Enhances specific powers$$ * Self: Removes the Repel effect from your Photonic Shockwave ability$$ * Self: Using Photonic Shockwave leaves behind a level _ **Delphic Expanse Anomaly**:$$ * Foe: _ Radiation Damage (Ignores Shields) every 0.5 sec for 5 seconds (up to 5 foes in 3km radius)
Designated Target,,"While this trait is slotted, and you kill a target affected by your Focused Assault ability allies within 5km of the defeated target will gain a moderate hull heal and damage boost."
Desperate Repairs,,Large Shield and Hull Heal after 3 incoming critical hits.$$When critically hit:$$ * Grants 1 Desperation Counter for 120 sec.$$At 3 counters:$$ * +_ Shield Regeneration applied once to each facing.$$ * +_ Hit Points$$ * Prevents gaining desperation counters for 60 sec.
Directed Energy Flux,,Temporal BOff Abilities and Directed Energy Modulation boost Cannon: Rapid Fire and Beam: Overload Damage$$Directed Energy Modulation or a Temporal Operative BOff Ability grant:$$ * **Directed Energy Flux**$$ * Beam: Overload and Cannon: Rapid Fire gain 25% Bonus Damage for 15 sec
Dominion Coordination,,"Buffs hangar pet damage after activating Beam: Overload, Cannon: Rapid Fire or Surgical Strikes.$$+33% All Damage Bonus to all hangar pets within 10km"
Down But Not Out,,"Max Subsystem Power Increases as Health Decreases.$$(Note: No sources of +MaxPower stack; only the highest bonus will apply.)$$ * Bonus starts at 80% Hull and reaches max potential at 20% Hull$$ * Up to 20 All Subsystem Power Max, increasing as Hull Percent decreases"
Emergency Response,Passive,-Hull and Shield Heal Recharge Time at low health.$$When taking damage at 50% or less hull strength:$$ * -10% Recharge Time on Hull and Shield Healing Bridge Officer abilities.
Emergency Weapon Cycle,,"On Emergency Power to Weapons: -Weapon Power Cost, +Weapon Firing Speed$$On Emergency Power to Weapons:$$ * -50% Weapon Power Cost for 30 sec.$$ * 20% Firing Cycle Haste for Energy Weapons for 30 sec."
Emitter Synergy,,"+Shield Heal, +Exotic Damage after using Tac or Intel Bridge Officer ability$$$$ * +7.5% Exotic Damage for 15 sec (Stacks up to 3 times).$$ * +7.5% to Shield Heals for 15 sec (Stacks up to 3 times)."
Energy Web,,"Physical DoT, Hold on Beam: Overload, Cannon: Rapid Fire or Surgical Strikes$$Activating Beam: Overload, Surgical Strikes or Cannon: Rapid Fire applies Energy Web:$$ * Foe: Deals _ Physical Damage every 0.5 sec for 6 sec (Ignores Shields)$$ * Foe: Holds target for 3 sec$$ * Can be used every 45 seconds"
Enhanced Power Condensers,,"Energy Siphon or Tachyon Beam: Self +Max Shield HP, +Max Power.$$##Applies Enhanced Power Condensers:$ * to self: +5 Max All Power Subsystems (does not stack with other Max increases) for 15 sec$ * to self: +10% Maximum Shield Capacity for 15 sec$ * Locks out Enhanced Power Condensers for 30 sec"
Evasion Specialist,,"After achieving level 5 in your Advanced Light Cruiser, QeHpu' Advanced Light Battlecruiser, or Deleth Advanced Light Warbird Battlecruiser, you will unlock the Evasion Specialist Starship Trait. Upon activation of Emergency Power to Engines, or any Pilot Bridge Officer Ability, gain Shield Hardness and Shield Regeneration for 5sec (once per 15sec max)."
Exotic Modulation,,Using Directed Energy Modulation or any Temporal Operative ability will provide a large boost to Exotic Damage for a short time.
Exotic Particle Shielding,,"While this trait is slotted, activating Engineering Team, Science Team or Tactical team will provide a buff to All Damage Resistance Rating. Affected targets will also gain an equal amount of Damage Resistance Rating to all Exotic Damage abilities."
Explosive Polarity Shift,,When Reverse Shield Polarity duration ends:$$ * _ Kinetic Damage (100% Shield Penetration) to foes within 3km (Damage Increased by 5% per stack of Polarity Shift) $$When damaged while Reverse Shield Polarity is active: $$ * Apply 1 stack of Polarity Shift (max once per 0.5 sec)
Frontal Assault,,"+Shield Hardness, +Shield Regen when using Cannon Abilities$$ * +_ Shield Regen per sec to Front Arc$$ * Reduces Damage to Shields by _%"
Go For The Kill,,Critical Hits extend duration of active Cannon: Rapid Fire by 3 seconds. May occur once every 5 seconds.
Greedy Emitters,,"Power Bonus, Drain Immunity, -Weapon Cost after using Energy Siphon, Tachyon Beam or Tyken's Rift.$$ * Immunity to Power Drain.$$ * -50% Weapon Power Cost.$$ * +2.5 All Power Settings."
Harasser Mines,,Weapon Modes Summon Mines$$Directed Energy Weapons create 1 level _ Chroniton Mine within 1.5km of each target's location:$$ * _ Kinetic Damage (20% Shield Penetration) per mine$$ * Can occur once every 20 seconds
Harrying Maneuvers,,"Emergency Power to Engines or Pilot Abilities grant Accuracy, Penetration, and SS Offline Proc"
Heavy Tachyon Mine,,"While this trait is slotted, activating Beam: Overload, Beam: Fire at Will, Cannon: Rapid Fire, Cannon: Scatter Volley or any Subsystem Targeting ability will cause your starship to deploy a Heavy Tachyon Mine behind your ship. This large mine is easier for your enemies to see than smaller mines, but it has a larger tracking distance and a larger area of effect. Upon impact, this mine will cause high kinetic damage(with 100% shield penetration) in a 3km area and will leave behind a Tachyon Particle Hazard that will heavily damage shields to any foe that remains within it. Unlike normal mine explosions, the Heavy Tachyon Mine's explosion will not harm the starship that deploys it. Additionally, if the Mine is destroyed by an enemy, it will still explode causing damage as normal."
Highly Specialized,,Specialist Cooldown Bonus and Skill Boosts.$$When activating Specialist Bridge Officer ability:$$ * -5% Recharge Time on all Specialist Bridge Officer abilities$$ * to self: +10 Starship Hull Restoration (Improves Hull Healing) for 20 sec (Stacks up to 5 times)$$ * to self: +10 Starship Exotic Particle Generator (Improves Exotic Damage) for 20 sec (Stacks up to 5 times)$$ * to self: +10 Starship Weapon Specialization (Improves Critical Hit Chance with Weapons) for 20 sec (Stacks up to 5 times)
History Will Remember,,"With this trait slotted, each Foe that damages you will grant you a stack of History Will Remember, which imparts increased weapon damage, hull capacity, and hull regeneration. Each foe only counts for a single stack, no matter how many times they damage you. Each stack will last until you leave the map, and you may have up to 30 stacks maximum. "
Hit And Run,,"While this trait is slotted, Evasive Maneuvers will provide a very high damage resistance rating buff. When Evasive Maneuvers expires, you'll receive a weapon damage and critical hit damage buff for a short time."
Hivebearer,,"While this trait is slotted, you will temporarily spawn an allied Swarmer Pet whenever you launch your Hangar Pets, or when one of them is defeated. Each pet lasts 60 sec (or until killed). You may only have 8 Swarmers active at a time from this trait."
Honored Dead,,"While this trait is active, any damage received during combat will be added to the defensive capabilities of your vessel, resulting in stacking benefits to Damage Resistance and passive Hull Regeneration as certain damage thresholds are met or exceeded. Once you reach maximum stacks of this, additional damage will instead grant a small amount of Temporary Hit Points at each threshold. $$After receiving 10,000 cumulative damage (pre-resistance), gain a stack of Honored Dead$$ * Each stack of Honored Dead grants +20 All Damage Resistance Rating and +2% Hull Regeneration (max 20 stacks, infinite duration)$$ * While at 20 stacks of Honored Dead, additional triggers instead grant 10,000 Temporary Hit Points for up to 40 sec.$$ * While not in Combat, lose one stack of Honored Dead every 2 seconds unless Cloaked."
Improved Brace For Impact,,"Brace for Impact grants Temporary Hit Points.$$ * 30,000 Temporary Hit Points for 3 sec to target."
Improved Feedback Pulse,,"Improved Feedback Pulse: +Damage, +Crit Buff$$+50% Feedback Pulse Damage$$When hit with directed energy while Feedback Pulse is active:$$ * +1% Critical Chance for 15 sec$$ * +5% Critical Severity for 15 sec$$(Can happen once every second, stacks up to 10 times)"
Improved Gravity Well,,"Your Gravity Well anomalies last twice as long, and recharge much faster. Additionally, the primary foe targeted by your Gravity Well activation will have their damage resistance rating reduced for the duration of the anomaly.$$ * Duration of Gravity Well increased from 20 sec to 40 sec$$ * Recharge time of Gravity Well reduced by 20 sec$$ * Primary Target of Gravity Well suffers -20 All Damage Resistance Rating for 40 sec"
Improved Polarize Hull,,Polarize Hull clears hazards and movement impairing effects.$$Enhances specific powers$$ * Self: Periodically removes Movement Impairing effects every 1 sec for 15 sec$$ * Self: Periodically removes Hazard debuffs every 1 sec for 15 sec
Improved Tachyon Beam,,Tachyon Beam Regenerates Ally Shields.$$ * +_ Shield Regeneration on first pulse of Tachyon Beam up to 20 allies within 10km.
Improved Weaponized Emitters,,While this trait is slotted your Aceton Beam and Overwhelm Emitters abilities cause radiation damage over time to enemies within 3km of the target.
Insidious Tactics,,"While this trait is slotted, activating Aceton Beam, Surgical Strikes or Torpedo: Transport Warhead will grant a boost to Critical Hit Chance and Critical Hit Severity. This buff stacks up to 3 times."
Insult To Injury,,"Activating any Intelligence Bridge Officer Ability or Tractor Beam I, II or III: Grants Torpedo: Transport Warhead I to all hangar pets within 10km."
Invincible,,"Heal Buff and Unkillable at Low Hull$$When reduced below 5% Hull:$$ * +50% Incoming Hull Healing for 8 sec$$ * +50% Incoming Shield Healing for 8 sec$$ * Unkillable for 8 sec$$ * Once activated, this Trait cannot trigger again for 120 sec"
Jubilant Cadence,,"While this trait is active, defeating enemies or healing allies will grant you one stack of Jubilant Cadence a maximum of once every 4 seconds, which last until you leave combat or are defeated. After reaching 5 stacks, you and your teammates will receive a large boost to speed and turn rate, while also having all bridge officer ability recharge timers reduced"
Kemocite Overload,,"While this trait is slotted, your first hit with Beam: Overload will cause a 2km radius explosion that deals radiation damage and reduces the damage resistance of affected foes."
Kick Them While They're Down,,"While this trait is slotted, activating any foe-targeted Control Bridge Officer Ability on an enemy that is affected by a Control effect will grant you an increase to Critical Chance for a moderate period of time. This effect can stack several times."
Layered Shielding,,While this trait is slotted Emergency Power to Shield and Extend Shield apply a moderate amount of Secondary Shielding to their target. This effect does not stack.
Load Viral Torpedo,,"When using Engineering, Science, Tactical or Intelligence team:$$ * Loads a Viral Torpedo.$ * This causes your next Torpedo attack to disable your target(s) for a short period of time.$ * This can occur once every 20 seconds."
Majority - Minority,,"While this Trait is active, the number of Allies and Foes within 10km of you will be counted. Depending upon whether you are in the Minority (Foes outnumber Allies) or the Majority (Allies equal or outnumber Foes), you gain different combat benefits.$$Majority = Increased Damage Resistance, Shield Hardness, and Hull Regeneration$$Minority = Increased Damage Output, and Flight Speed."
Nullifier Warheads,,"While this trait is slotted, activating any torpedo ability such as High Yield or Spread will launch a flood of Nullifiers around your ship."
Numerical Superiority,,"While slotted, you gain a small damage bonus that increases as more allies target your targeted foe. 10% - 50%. Does not count hanger pets."
Obedience is Victory,,"While this starship trait is slotted, you will summon a Jem'Hadar Attack Ship whenever you activate Engineering Team, Tactical Team or Science Team. This ally will fight by your side for a brief time. Subsequent activations of Team abilities will extend the duration of the ally's help. "
Out of Time,,"At High Speed: Cold Dmg to Self, Store Stacks$$At Lower Speed: -Recharge to Boff abilities from number of stacks.$$$$Once per sec, while above 88 Impulse Speed:$$ * 1,000 Cold Damage to Self$$ * Gain a stack of **Out of Time**$$$$When dropping below 88 Impulse Speed:$$ * Reduce Recharge time of Bridge Officer Abilities by 2% per stack of **Out of Time**$$ * Remove all stacks of **Out of Time**, and unable to gain stacks for 5 sec"
Overwhelming Force,,Beam Overloads create Charged Particle Bursts. High Yield Torpedoes create Photonic Shockwaves.$$Grants Overwhelming Force (High Yield).$$Applies Overwhelming Force (High Yield) to target.$$Targets Anything alive
Painful Memories,,"This trait causes a psionic energy resonance within the EPS of enemy ships, when activating any Foe-affecting Engineering Bridge Officer Abilities. This is reflected by an Electrical Damage-over-Time effect that also Slows the afflicted foe's engines.$$ * -50% Flight Speed$$ * Electrical Damage each second (100% Shield Penetration)"
Particle Feedback Loop,,Using an Exotic Damage Bridge Officer ability will provide a bonus to the Hull Penetration skill. This bonus stacks up to 3 times.$$ * to self: +50 Starship Hull Penetration for 30 sec (Improves Hull Penetration for Starship Weapons) (Stacks up to 3 times)
Partners In Arms,,Ally Buffs give Self Damage Buff.$$ * to self: +10% All Damage for 10 sec (Stacks up to 3 times)
Peak Efficiency,,-Recharge Time on Bridge Officer Abilities.$$ * -7.5% Recharge Time to all Bridge Officer Abilities every 5 seconds hull strength is at or above 80%.
Photonic Boarding Party,,"Photonic Boarding Party does not require you to launch Shuttles. Instead, your boarding assault teams immediately beam over to the targeted foe's ship, and immediately begin applying the debilitating effects already associated with Boarding Party. Using Photonic Boarding Parties is also more time efficient, allowing them to be ready to deploy more quickly. Note: Having this trait slotted removes the Shuttles entirely from this ability, potentially interfering with any effects designed to enhance them.$$Activating any rank of Boarding Party no longer launches Shuttles and instead instantly applies the effects to the targeted Foe Recharge time of Boarding Party reduced from 60sec to 40sec"
Photonic Diversion,,"Activating Jam Sensors or Evade Target Lock will create a Photonic Decoy at the target's location - this Decoy will attack with Spiral Wave Disruptors and Photon Torpedoes, in addition to generating a constant Feedback Pulse effect"
Potentiality,,"Damage Bonus While Not Using Bridge Officer Abilities$$ * Every 1 sec while in combat, gain a stack of *Potentiality*$$ * +3% All Damage Bonus for 10 sec, per stack of *Potentiality* (10 stacks max).$$ * Upon activation of any Bridge Officer Ability, prevents gain of *Potentiality* stacks for 10 sec"
Preferential Targeting,,While this trait is slotted activating Beam: Fire at Will or Cannon: Scatter Volley will cause Beam: Overload and Cannon: Rapid Fire to do 50% additional damage for the next 30 seconds.
Preparedness,,"Gain a random buff when entering combat - Shield Penetration, Hull Penetration, Hull Plating, or Readiness. The buff will persist for the duration of the combat"
Press the Advantage,,"Attacking an enemy's rear arc will reduce their turn rate, as well as lowering the cooldown on your Tactical and Pilot Bridge Officer Abilities"
Promise Of Ferocity,,"Activating Tactical or Pilot bridge officer abilities will provide a bonus damage buff as long as you remain in combat, once every few seconds. This buff stacks up to 5 times, but all stacks are lost immediately upon leaving combat.$$ * Per stack: +4% Bonus All Damage with Starship Weapons for duration of combat$$ * Max once per 4 sec, 5 stacks maximum, all stacks lost if combat ends."
Proto Spill,,"While slotted, activating any Hull Healing or Shield Healing Bridge Officer Ability will cause a Radiation AOE, centered on the healed ally (or self).$$ * Radiation Damage to up to 5 nearest foes within 3km of Healed Target (or Self)$$ * Max once every 6 sec"
Protomatter Capacitor,,"While this trait is slotted, hitting an enemy with Charged Particle Burst, Tachyon Beam or Energy Siphon will provide a stack of Protomatter Charge. Each stack of Protomatter Charge increases the user's Hull and Shield Regeneration. This effect stacks up to 3 times."
Radiant Nanite Cloud,,Hull Heals cause AoE Heal-over-Time$$ * Captain Ability and Bridge Officer Hull Heals apply an additional 50% of their Healing as a Heal-over-Time over 4 sec in a 3 km radius
Reactive Reconstruction,,"When your health drops below 50%, this trait heals you and all teammates for a significant amount, and then significantly increases your outgoing healing. This ability will then go on cooldown for the next few minutes before becoming usable again."
Reactive Repair Nanites,,Heals hangar pets within 5km when using a hull heal.$$ * Hull heals also heal your hangar pets within 5km of your target for 33% of healing caused
Reciprocity,Passive,Recharge time reduction to Tactical and Intelligence powers when you are missed.$$When missed: -10% Recharge Time on Intelligence and Tactical Bridge Officer abilities.
Redirecting Arrays,,"While Beam Array: Fire at Will is active, any damage that your starship receives will periodically extend its duration.$$Once per sec while Beam: Fire-at-Will is active, receiving Any Damage grants 0.33 sec Duration to Fire-at-Will (15 sec total duration maximum)"
Regroup,,Your Attack Pattern Bridge Officer abilities will reduce the recharge time on Engineering and Temporal Operative Bridge Officer abilities.
Relaunch and Repair,,"Carrier pet launch buffs regen, reduced captain ability recharge times.$$ When you launch carrier pets:$$ * To self: -5% Recharge Time on Captain abilities$$ * 25% Health Regeneration to self and Carrier Pets"
Repair Mode,,"Taking Damage Grants Repair Mode$$After taking a large amount of damage gain 1 Repair Mode Counter for 120 sec (May occur once every 3 seconds)$$On 3rd Repair Mode Counter enter Repair Mode:$$ * Self: +10,000 Hit Points every 0.5 sec for 5 sec$$ * Self: +500 All$$ * Damage Bonus Resistance Rating for 5 sec$$ * Self: 50,000 Temporary Hit Points for 5 sec$$ * Self: Disable for 5 sec$$ * Self: Removes all Repair Mode Counters$$ * Locks out ability to generate Repair Mode Counters for 90 sec"
Repulsive,,"While this trait is slotted, activating any Engineering or Command Bridge Officer Ability will cause your ship to initiate a massive repel wave targeting the nearest enemy starship within 3km. This causes some Physical Damage (ignores shields) and will push that foe and up to 2 other nearby enemy ships a good distance away from your vessel. "
Restorative Support,,Hull Heals Summon Support Probe$$When activating a hull heal: Summon Support Probe for 10 sec$$ * To healed target: +_ Hit Points per sec$$ * To 3 nearest foes within 5km: -_ Shields per sec$$ * Can be summoned once per 30 sec
Retaliation,,Damage and Critical Hit Chance Buff after Critical Hit.$$When critically hit (Stacks up to 3 times):$$ * +10% All Damage for 15 sec$$ * +1% Critical Chance for 15 sec
Reverberation,,"Dealing damage to any foe with a Projectile weapon will grant you a Reverberation Charge at a maximum rate of 1 per second. Each Reverberation Charge grants a stacking 10% chance to knock your opponents' shields offline for 5sec when using Projectile weapons. On a successful deactivation, all charges are consumed and you are locked out of building up charges for several seconds."
S.I.F. Burst,,"While this Starship Trait is slotted, activating any Hull Healing Bridge Officer Ability will cause enemies within 3km to suffer radiation damage over time."
Scavenger Beam,,"Improves Tractor Beam: +Damage, +Hull HP Drain$$While this trait is slotted, Tractor Beam will deal increased damage. Additionally, Tractor Beam will heal the caster over time.$$Enhances specific powers:$$ * to self: +_ Hit Points$$ * **Scavenger Beam:** +50% Tractor Beam Damage$$ * Skills that affect this ability: Starship Hull Restoration (Improves Hull Healing)"
Self-replicating Hull,,"While this trait is slotted, activating Auxiliary to Battery, Auxiliary to Structural, or Auxiliary to Dampers will provide a substantial boost to Hull Regeneration and Energy Damage Resistance Rating for a short time."
Shield Overload,,"Activating Emergency Power to Shields applies a massive boost to Damage Resistance and Shield Hardness. The effectiveness of this boost drops off overtime.$$ * Self: Increases Damage Resistance to All Damage by 75, this effect decreases drastically each 5 seconds for 30 seconds$$ * Self: Reduces damage to shields by 75%, this effect decreases drastically each 5 seconds for 30 seconds"
Sif Shunt,,"While this trait is slotted, activating any hull healing while at full hull strength will provide a boost to all power levels for a short time. This effect stacks up to 3 times."
Specialist Knowledge,,"While this trait is slotted, activating any Intel or Command Bridge Officer Specialist ability will reduce the recharge time of all Engineering Bridge Officer abilities."
Spoils Of The Victor,,"While slotted, defeating any enemy will grant a Hull and Shield Heal over time effect."
Standoff,,"Weapon Bonus Damage vs. Forward Arc$$ * +15% Bonus Damage to Weapons when attacking foe's forward 90' arc (Bonus reduced to +5% vs. Players)$$ * Once per 10 sec, apply Weapons Offline for 2 sec when attacking a foe's forward 90' arc"
Stay At Your Posts,,Activating an Engineering or Miracle Worker Bridge Officer ability will reduce the recharge time of Tactical Bridge Officer abilities. The amount of cooldown reduction is increased if you are currently below half of your maximum hull capacity. This may only occur once every few seconds.$$If current Hull at or above 50%: -10% Recharge Time on Tactical Bridge Officer abilities If current Hull below 50%: -20% Recharge Time on Tactical Bridge Officer abilities Can occur once every 5 seconds.
Stay On Target,,Keeping your current target in your forward 90 degree arc causes your ship to autofire a microtorpedo every few seconds.
Streak Breaker,,Missed Attacks Grant Streak Breaker Counter$$When you miss: Gain 1 Streak Breaker counter for 60 sec$$At 5 counters:$$ * +20% Accuracy for 15 sec$ * +20% Defense for 15 sec$ * +10% Critical Chance for 15 sec$ * Prevents gaining Streak Breaker counters for 60 sec
Structural Integrity Overcharge,,Bonus Hull Regeneration based on how high you set your base (unmodified) engine power.
Subspatial Warheads,,"While slotted, damage caused by your Torpedo: High Yield Torpedoes and Torpedo: Transport Warhead will cause an Isolytic Tear to form near the damaged target. This anomaly will chase down the nearest foe, causing physical damage and draining engine subsystem power to any enemies it encounters."
Subsystem Redundancies,,"While Subsystem Redundancies is slotted, activating and firing Beam: Overload I, II or III or a Spinal Lance or Javelin ability will trigger a shield heal, a shield hardness buff and will restore offline shields.$$Enhances Specific Powers$$ * _ Shield Regeneration for each facing$$ * Repairs disabled shields$$ * Reduces Damage to Shields by 25% for 10 sec"
Subwarp Sheath,,"Adds armor penetration with all directed energy weapons based on your speed, max 15% at 75 Impulse speed."
Super Charged Weapons,,Energy Weapon Performance Enhanced by Torpedoes$$Firing a Torpedo grants 1 stack of the *Super Charged* buff$$*Super Charged* (Stacks up to 3 times)$$Directed Energy Weapons gain:$$ * +10% Damage for 20 sec$$ * +1.5% Critical Chance for 20 sec$$ * +6.6% Critical Severity for 20 sec
Superweapon Ingenuity,Passive,Bonus Beam: Overload I$$ * Enables an additional Beam: Overload I when activating any rank of Beam: Overload (30 seconds cooldown)
Supremacy,,Beam: Fire at Will and Cannon: Scatter Volley boost power levels.$$ * +1 All Power Settings for 15 sec per target hit while Cannon: Scatter Volley or Beam: Fire at Will is active.
Symmetry,,"AoE Shield Drain from Shield Healing$$When using a Shield Heal: Drains Shields from Foes within 3km of the Healed Ally (or Self) Drain is equal to Shield Healing dealt, divided evenly among up to 5 Foes"
Synergistic Restoration,,+_ hit points every 1 sec for 5 sec upon receiving a shield heal (can occour once every 10 seconds)
Synergistic Tactical Systems,,"While this trait is slotted, activating Cannon: Rapid Fire, Surgical Strikes and Reroute Reserves to Weapons will provide a large boost to Starship Particle Generator skill and Starship Control Expertise for a short time."
Tachyon Dispersal,,Tachyon Beam gains AoE shield DoT$$$$ * Foes: -25% Shield Hardness (While Tachyon Beam is channeled)$$After 4 seconds of channeling Tachyon Beam:$$ * Foes: -_ All Shields (Half effectiveness vs. players) every 1 sec for 10 sec$$ * Foes: -25% Shield Hardness for 10 sec
Tactical Analysis,,"While this trait is slotted, activating Tactical Team will provide a boost to hull penetration for a short time. This buff does not stack.$$Upon activating Tactical Team, your weapons gain 20 armor penetration for 10 seconds"
Tactical Retreat,,"Untargetable, -All Threat, +Defense and +Flight Speed Buff if below 25% HP.$$When reduced to 25% hull strength:$$ * +60% Defense$$ * Untargetable for 2 sec.$$ * +299% Flight Speed strength for 10 sec.$$ * Resets all Threat to zero.$$ * Can occur once every 60 seconds."
Target Rich Environment,,"Beam: Fire at Will and Cannon: Scatter Volley Increase Weapon Damage.$$ * +1% Directed Energy Damage per target hit while Cannon: Scatter Volley or Beam: Fire At Will is active.$$(Stacks up to 30 times, generate up to 4 stacks per second)"
Team Synergy,,"Activating Science Team, Engineering Team, or Tactical Team will apply a weaker version to nearby allies"
Temporal Ally,,"When damaged while a shield facing is dangerously low, a Temporal Ally appears.$$When receiving damage while a shield facing is depleted or critically low:$$ * Summons a Temporal Ally for 30 seconds$$ * Can be triggered once every 90 seconds$$ * Self: Immunity to damage for 3 sec"
Time To Kill,,+Damage when using a Science Bridge Officer ability$$ * to self: +10% All Damage for 15 sec when using a Science Bridge Officer ability (Stacks up to 3 times)
Torpedo Barage,Passive,Enables Torpedo: High Yield I after launching a Torpedo: High Yield attack. (30 second cooldown)
Tricks of the Trade,,"Activation of Auxiliary to Structural, or any Miracle Worker Bridge Officer Ability, will grant your team a reduction to Weapon Power cost"
Turtle,,"While this trait is slotted, you may conserve your energy and move slowly, in order to gain additional Shield Capacity, Shield Hardness, and Turn Rate. These bonuses ramp up the longer you remain at or below 25% Throttle, increasing every 2 seconds."
Unstable Anomalies,,"Gravity Well, Tyken's Rift, Chronometric Inversion Field and Timeline Collapse explode and reduce Accuracy and Damage.$$Upon expiration of Gravity Well, Tyken's Rift, Chronometric Inversion Field or Timeline Collapse: (Applies to up to 5 foes within 5 km)$$ * Foe: _ Kinetic Damage (Ignores Shields)$$ * Foe: Reduces Accuracy by -0.2%$$ * Reduces Damage by 28.6%"
Vent Metreon Laced Plasma,,"While this trait is slotted Eject Warp Plasma will have its duration reduced from 30 seconds to 15 seconds, but each plasma cloud will explode in a 2km AoE dealing shield penetrating Radiation damage."
Vulcan Hello,,"While this trait is active, your Weapons gain a Shield and Armor Penetration bonus, and Weapon Power Drain from energy weapon activation is reduced for a brief duration when you first enter Combat. $$Upon entering Combat:$$ * +20 Energy Weapon Armor Penetration for 8 sec$$ * +20 Energy Weapon Shield Penetration for 8 sec$$ * -50 Weapon Power Cost for 8 sec"
Warp Shadow Decoy,,Create a Warp Shadow of your ship for 15 seconds that will taunt NPC enemy starships when you cloak.
Waylay,,Heals your shields when flanking your target with Directed Energy Weapons
Weapon System Synergy,,"On activation of Energy Weapons, gain 1 stack of Weapon System Synergy$$After 10 stacks, Projectile Weapons gain +25% Damage and +50% Shield Bleedthrough for 10sec$$Upon expiration, cannot gain stack again for 20sec"
Withering Barrage,,"Extend duration of Cannon: Scatter Volley$$$$While this trait is equipped, the duration of your Cannon: Scatter Volley is increased.$$Enhances specific powers$$ * Withering Barrage: Extend duration of Cannon: Scatter Volley by 4 sec."
`;
