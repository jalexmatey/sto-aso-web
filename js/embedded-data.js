var SHIPS_CSV = `Faction,Tier,Name,Rarity,Type,Eng,Tac,Sci,Bonus,Trait,Id
Federation,0,Class F Shuttle,Common,Smc,2,2,2,-25% Maintenance per ANY Ship (Not Small Craft),,3e33a95f-27f5-4a22-b44a-92b241daa2ba
Federation,0,Danube Runabout,Common,Smc,3,2,1,-25% Maintenance per ANY Ship (Not Small Craft),,aacb9d4d-c04a-413e-ac0b-aadb44d16157
Federation,0,Federation Shuttlecraft,Common,Smc,2,2,2,-25% Maintenance per ANY Ship (Not Small Craft),,2213aecc-7a9c-4d80-adc4-cfbdcbcf242f
Federation,0,Type 10 Shuttle,Common,Smc,2,2,2,5x Critical Rating from ALL Stats (Not Small Craft),,5b42ed24-6ad0-4e73-981f-d00ce6fc0d71
Federation,0,Type 8 Shuttle,Common,Smc,4,1,1,+10 ALL Stats per ANY Ship (Not Small Craft),,4bab9c3b-26e1-4ee2-b384-6a732edf8d77
Federation,0,Captain's Yacht,Rare,Smc,4,3,3,5x Critical Rating from ALL Stats,,29f7c4e6-1fbb-4f65-a24f-d9e4dc340ff4
Federation,0,Delta Class Shuttle,Rare,Smc,3,3,4,+10 ALL Stats per ANY Ship (Not Small Craft),,1c6f933c-69c7-4c9e-b1a5-1822e31bcdc5
Federation,0,Mirror Danube Runabout,Rare,Smc,4,5,1,-25% Maintenance per ANY Ship (Not Small Craft),,ff657b77-531b-4ed2-9147-c537c568cedb
Federation,0,Peregrine Attack Fighter,Rare,Smc,3,4,3,5x Critical Rating from ALL Stats,,87c57e95-4fb8-4dd8-97b2-8e772a7eb429
Federation,0,Stalker Stealth Fighter,Rare,Smc,3,4,3,+10 ALL Stats per ANY Ship (Not Small Craft),,95542f1b-e186-442d-b907-4bb556da802d
Federation,0,Tal'Kyr Support Craft,Rare,Smc,3,1,6,-25% Maintenance per ANY Ship (Not Small Craft),,afd91663-096d-4cf9-89c1-28283ea4a8e1
Federation,0,Type 7 Shuttle,Rare,Smc,5,3,2,5x Critical Rating from ALL Stats,,320a0739-981a-4039-b26c-b7443e119387
Federation,0,Yellowstone Runabout,Rare,Smc,3,4,3,5x Critical Rating from ALL Stats,,3c3b943d-2684-4378-ad36-dd03dad6d264
Federation,0,Aeon Timeship,Ultra Rare,Smc,3,4,7,-25% Maintenance per ANY Ship (Not Small Craft),,9145b0fc-b0e0-478d-b2ab-ee2bdcd5561e
Federation,1,Light Cruiser,Common,Eng,5,5,5,2x Critical Rating from Events,,0dbc20cd-2878-4e6b-b870-b3f2671347ff
Federation,1,Malachowski Light Cruiser,Common,Eng,6,4,5,2x Critical Rating from Events,,b8755f6c-cea9-4fe5-a8e9-b30fa6ac6047
Federation,1,Utility Cruiser,Common,Eng,6,5,4,2x Critical Rating from Events,,3a4225ab-a5b0-4550-bcd0-c35cc36710c5
Federation,1,Constitution Light Cruiser,Rare,Eng,6,6,6,2.5x Critical Rating from ENG,,4c4bfd01-cf4c-4bc4-8889-29461eb1ee02
Federation,1,Andorian Light Escort,Rare,Tac,4,10,4,2.5x Critical Rating from TAC,,491f5818-a62f-497a-a273-6bc21a488116
Federation,1,Blockade Runner Escort,Rare,Tac,6,7,5,1.5x Critical Rating from TAC and ENG,,0f9630f4-248d-4695-bcce-2d805f0d3edd
Federation,1,NX Light Escort,Rare,Tac,5,8,5,1.5x Critical Rating from TAC and SCI,,07ac972f-ebed-4de3-a0a8-c1b9f1cb96ce
Federation,1,Oberth Light Science Vessel,Rare,Sci,4,4,10,2.5x Critical Rating from SCI,,0b4870b7-5a7d-4738-8338-de278e515c09
Federation,2,Cruiser,Common,Eng,14,8,8,+8 ENG per SciShip or TacShip,,9a08fc19-11d1-4603-917b-bc1879086c33
Federation,2,Escort,Common,Tac,8,14,8,+8 TAC per EngShip or SciShip,,9fccb7e7-394b-4f4b-8f69-1a94461bec2d
Federation,2,Science Vessel,Common,Sci,8,8,14,+8 SCI per EngShip or TacShip,,5b1c8205-3c58-4393-8826-a816a048f726
Federation,2,Cruiser Refit,Rare,Eng,18,9,9,1.5x Critical Rating from SCI or TAC,,12ec6a15-2d3f-479b-af57-6156845b454f
Federation,2,Escort Refit,Rare,Tac,9,18,9,1.5x Critical Rating from ENG or SCI,,40412525-f0af-41c9-941a-4c8f6fb054d5
Federation,2,Science Vessel Refit,Rare,Sci,9,9,18,1.5x Critical Rating from ENG or TAC,,8a454257-e75d-428c-9637-01d5a5e7fbb7
Federation,2,Temporal Science Vessel,Rare,Sci,6,11,19,Ignores +/- SCI from Events,,9d60f3f4-0652-4970-8962-cb4405a7f625
Federation,3,Heavy Cruiser,Common,Eng,23,11,11,2.5x Critical Rating from ENG,,62ead3c7-c78d-4bb2-906d-af075f779166
Federation,3,Support Cruiser,Common,Eng,22,10,13,1.5x Critical Rating from ENG and SCI,,0f63a416-9ef9-428f-b4d4-85e0556ca95e
Federation,3,Heavy Escort,Common,Tac,11,23,11,2.5x Critical Rating from TAC,,1b3b7e6f-ceee-4eeb-ac13-56d88f9f88b4
Federation,3,Research Science Vessel,Common,Sci,11,11,23,2.5x Critical Rating from SCI,,a5995ab6-5eed-4d6c-87c5-ad3d4dee1296
Federation,3,Advanced Heavy Cruiser,Rare,Eng,26,16,12,1.5x Critical Rating from TAC and ENG,,23603796-5122-4e21-a528-4128ba58300b
Federation,3,Heavy Cruiser Refit,Rare,Eng,28,13,13,Ignore +/- ENG from Events,,d49d0070-9b91-4285-b6e6-b0286fe11da3
Federation,3,Heavy Escort Refit,Rare,Tac,13,28,13,Ignore +/- TAC from Events,,be2129c1-4946-4362-bf03-e675c71f6a8b
Federation,3,Temporal Escort,Rare,Tac,9,30,15,Ignores +/- TAC from Events,,f312b244-db74-4c79-8220-0288ea20bd40
Federation,3,Advanced Science Vessel,Rare,Sci,13,13,28,Ignore +/- SCI from Events,,572ff5d4-26d7-4f14-9c1a-36286f80d201
Federation,4,Exploration Cruiser,Common,Eng,36,12,12,+8 ENG per SciShip or TacShip,,a74f7240-0eed-45b8-8919-349d679357d7
Federation,4,Prototype Light Exploration Cruiser,Common,Eng,44,14,14,+10 ENG per EngShip,,7c215705-5f9a-4ce3-914e-c78500a4b00a
Federation,4,Tactical Escort,Common,Tac,12,36,12,+8 TAC per EngShip or SciShip,,c1b12758-275d-482d-aa6f-5e6d586a1722
Federation,4,Long Range Science Vessel,Common,Sci,12,12,36,+8 SCI per EngShip or TacShip,,3779c9e8-0a4e-421d-bb5a-b70758777ef2
Federation,4,Exploration Cruiser Refit,Rare,Eng,42,15,15,1.5x Critical Rating from TAC and SCI,,23aea5c6-c55b-49ee-99f1-a873975058b6
Federation,4,Temporal Cruiser,Rare,Eng,38,20,14,Ignores +/- ENG from Events,,0411d407-e3cc-46bc-8837-c5c3051485a4
Federation,4,Tactical Escort Refit,Rare,Tac,15,42,15,1.5x Critical Rating from ENG and SCI,,a7a82efa-e5b3-453f-a7bd-ea6682028688
Federation,4,Long Range Science Vessel Refit,Rare,Sci,15,15,42,1.5x Critical Rating from ENG and TAC,,1765f107-6d47-4a40-8d46-c287d83178f9
Federation,5,Assault Cruiser,Common,Eng,47,17,11,+10 TAC per TacShip,,8b9dd516-b5f4-4683-96a4-514f0bec5257
Federation,5,Heavy Cruiser Retrofit,Common,Eng,50,14,11,-10% Maintenance per SciShip or TacShip,,c108ded4-fda5-4125-8881-d8c165089ff4
Federation,5,Odyssey Star Cruiser,Common,Eng,46,13,16,-5% Maintenance per Ship,,914d03c1-7f48-45c1-ac98-6c1670fb801a
Federation,5,Star Cruiser,Common,Eng,47,11,17,+10 SCI per SciShip,,947c253f-b9c8-4952-bfcb-509762aef02d
Federation,5,Advanced Escort,Common,Tac,11,47,17,+10 SCI per SciShip,,6cd5366f-96eb-4823-97df-3d72f38a6a8d
Federation,5,Aquarius Light Escort,Common,Tac,16,43,16,1.5x Critical Rating from ENG and SCI,,4c09d8ac-5656-44bc-90d2-415dd07dc53d
Federation,5,Escort Retrofit,Common,Tac,13,49,13,1.5x Critical Rating from ENG and SCI,,a070b3da-90ac-4937-88d1-c467250ba409
Federation,5,Patrol Escort,Common,Tac,17,47,11,+10 ENG per EngShip,,09ec39c2-94df-44f8-94e3-e172c20c6224
Federation,5,Deep Space Science Vessel,Common,Sci,17,11,47,+10 ENG per EngShip,,7d0a4a0a-a4d5-4ce3-a316-df892b141c9b
Federation,5,Reconnaissance Science Vessel,Common,Sci,11,17,47,+10 TAC per TacShip,,8690ce33-80d5-442a-99f6-fe74e9549fb3
Federation,5,Research Science Vessel Retrofit,Common,Sci,12,12,51,+10 ENG and TAC when Alone,,c5ae5a14-f988-4b47-9632-139ff6460d2c
Federation,5,Science Vessel Retrofit,Common,Sci,12,16,47,+5 ENG and TAC per EngShip or TacShip,,fbff2e13-a9e7-4a88-8d41-7cf9041f9790
Federation,5,Mirror Assault Cruiser,Uncommon,Eng,50,12,21,+10 SCI per TacShip,,13e580bc-b227-4cbc-87e4-5bff36c7f78b
Federation,5,Mirror Heavy Cruiser Retrofit,Uncommon,Eng,50,19,14,1.5x Critical Rating from SCI and TAC,,2757e2a0-6726-4335-9ddd-81e61a314324
Federation,5,Mirror Star Cruiser,Uncommon,Eng,50,21,12,+10 TAC per SciShip,,ca543f5e-c901-4aa0-a083-9625d679b810
Federation,5,Mirror Advanced Escort,Uncommon,Tac,12,50,21,+10 ENG per EngShip,,cabe82ea-9303-4e6c-87ea-da5aa989cd13
Federation,5,Mirror Escort Retrofit,Uncommon,Tac,17,52,14,+5 SCI and ENG per SciShip or TacShip,,59d050e8-a60c-44e1-831c-cb58e9aaf0b9
Federation,5,Mirror Patrol Escort,Uncommon,Tac,21,50,12,+10 SCI per SciShip,,2c950ce2-3cb6-4128-baf9-6db492d557f2
Federation,5,Mirror Deep Space Science Vessel,Uncommon,Sci,12,21,50,+10 ENG per EngShip,,eef6455a-6cd6-4582-802f-1d224bd76c86
Federation,5,Mirror Reconnaissance Science Vessel,Uncommon,Sci,21,12,50,+10 TAC per TacShip,,bc5dcb34-192b-4971-aa95-524abdb510b7
Federation,5,Mirror Science Vessel Retrofit,Uncommon,Sci,15,18,50,+5 TAC and ENG per TacShip or EngShip,,e7993b34-3566-455e-9bae-0db8443e09d2
Federation,5,Advanced Heavy Cruiser Retrofit,Rare,Eng,52,19,19,+5 SCI and TAC per SciShip or TacShip,,54a69d3e-298b-4145-8605-3a04f53ffc94
Federation,5,Assault Cruiser Refit,Rare,Eng,52,23,15,+8 ENG per TacShip or SciShip,,022987b5-a19a-4831-a43c-3f64bd941e08
Federation,5,Battle Cruiser,Rare,Eng,36,42,12,+10 SCI per SciShip,,264e28f2-c7eb-48ad-9393-5ce4095b9944
Federation,5,Dreadnought Cruiser,Rare,Eng,52,20,18,+10 SCI per SciShip,,52a13615-2fd0-4720-8c18-9c554ea55fed
Federation,5,Exploration Cruiser Retrofit,Rare,Eng,55,15,20,+20 SCI and TAC when Alone,,7ac5dbbe-5857-47fa-8bf6-b4b42714e919
Federation,5,Support Cruiser Retrofit,Rare,Eng,52,17,21,-10% Maintenance per SciShip or TacShip,,a6989be5-7fc2-4ad4-b007-5f8044ca2192
Federation,5,Temporal Battlecruiser,Rare,Eng,42,31,17,x2.5 BONUS from SCI,,46c082a5-505a-4870-aa93-dab766b4a505
Federation,5,Blockade Runner Escort Retrofit,Rare,Tac,26,50,14,-5% Maintenance per Ship,,b68ad3aa-b5fa-4408-b0fd-f3eb44b08db8
Federation,5,Chimera Heavy Destroyer,Rare,Tac,30,48,12,+8 SCI per SciShip or EngShip,,6564ec03-3c2b-4199-a17c-677dfb8e6044
Federation,5,Heavy Strike Wing Escort,Rare,Tac,20,56,14,+20 ENG and SCI when Alone,,58d8d672-dcfe-41f4-b1e1-9dc3d9fc950a
Federation,5,Multi-Vector Advanced Escort,Rare,Tac,18,50,22,+15 All Stats when Alone,,cf62a4b6-615f-4788-8a63-5e45e40b2a4e
Federation,5,Patrol Escort Refit,Rare,Tac,22,53,15,+10 TAC per TacShip,,05c17685-bcf6-49d6-b73b-63c5a24595d5
Federation,5,Tactical Escort Retrofit,Rare,Tac,20,55,15,+5 ENG and SCI per SciShip or EngShip,,854e0458-4c88-4b92-aea5-5a99f8e6b427
Federation,5,Advanced Research Vessel Retrofit,Rare,Sci,16,23,51,+8 TAC per EngShip or TacShip,,4ce06360-4d1e-43c1-a12d-11e3954e7fe4
Federation,5,Caitian Atrox Carrier,Rare,Sci,26,14,50,+20 SCI and TAC when Alone,,6a309bd2-f167-417f-80b8-a0d58af48540
Federation,5,D'Kyr Science Vessel,Rare,Sci,23,16,51,+8 ENG per EngShip or TacShip,,575575b2-ec4c-4de1-8993-950dc63e3e43
Federation,5,Long Range Science Vessel Retrofit,Rare,Sci,20,15,55,+5 TAC and ENG per EngShip or TacShip,,5ae4761e-e5e2-4f93-bad1-139bf1101bb4
Federation,5,Solanae Dyson Science Destroyer,Rare,Sci,12,28,50,Ignores +/- SCI from Events,,e624dc3f-6772-4965-83fa-0f257c9a8ad1
Federation,5,Fleet Advanced Heavy Cruiser Retrofit,Very Rare,Eng,62,22,14,+10 ENG per SciShip,,5c461ea3-8154-44ee-9615-222c6b137a70
Federation,5,Fleet Assault Cruiser Refit,Very Rare,Eng,60,26,12,+10 SCI per TacShip,,01eb16b2-b1df-4d64-984a-a9f4947fc256
Federation,5,Fleet Battle Cruiser,Very Rare,Eng,38,46,14,+10 ENG per EngShip,,706cf961-b81a-4cc7-8b1a-294e0235e931
Federation,5,Fleet Dreadnought Cruiser,Very Rare,Eng,56,22,20,+5 SCI and TAC per SciShip or TacShip,,2d7246c1-a8ca-4d0e-8886-3b2bd11c8cde
Federation,5,Fleet Exploration Cruiser Retrofit,Very Rare,Eng,66,12,20,2.5x Critical Rating from ENG,,62960dc3-caa1-4d12-ab65-363e133c0d14
Federation,5,Fleet Heavy Cruiser Retrofit,Very Rare,Eng,62,18,18,+8 ENG per SciShip or TacShip,,3a47ea3f-9384-4f1a-be28-a4b5bb6ca79f
Federation,5,Fleet Star Cruiser,Very Rare,Eng,60,12,26,+10 TAC per SciShip,,230943a0-79ba-4a40-813b-c6bfe259ccc0
Federation,5,Fleet Support Cruiser Retrofit,Very Rare,Eng,59,21,18,-10% Maintenance per SciShip and TacShip,,c1f564e7-6d3f-4cef-bbcc-43a050823119
Federation,5,Odyssey Operations Cruiser,Very Rare,Eng,58,20,20,+35 ENG when Alone,,b4a013fc-97f8-454c-b1ed-6158b05b3ded
Federation,5,Odyssey Science Cruiser,Very Rare,Eng,54,20,24,+35 SCI when Alone,,e30b9b7b-d7ee-48b6-b913-46f19a579569
Federation,5,Odyssey Tactical Cruiser,Very Rare,Eng,54,24,20,+35 TAC when Alone,,e25b8504-dc7a-4ac4-b5e4-93cbdde602c5
Federation,5,Andorian Charal Escort,Very Rare,Tac,24,54,20,+35 ENG when Alone,,104ffd50-ce3a-4564-aa47-6ba3481a262d
Federation,5,Andorian Khyzon Escort,Very Rare,Tac,20,54,24,+35 SCI when Alone,,7b4a5098-cf7f-4b40-ba43-ab6aa64b03a7
Federation,5,Andorian Kumari Escort,Very Rare,Tac,20,58,20,+35 TAC when Alone,,4f72eb04-beba-4186-8c53-6cb6a56c9aaa
Federation,5,Fleet Advanced Escort,Very Rare,Tac,14,63,21,2.5x Critical Rating from SCI,,761a1708-6fd2-45ca-ab05-a482bb122329
Federation,5,Fleet Aquarius Light Escort,Very Rare,Tac,23,55,20,+8 ENG and SCI per TacShip,,1bb1d489-724e-4304-af67-7f95a7af1a34
Federation,5,Fleet Chimera Heavy Destroyer,Very Rare,Tac,32,52,14,+10 SCI per TacShip,,9f6cbf61-e2fc-4096-9fc9-e5c30ebe59e3
Federation,5,Fleet Escort Retrofit,Very Rare,Tac,20,58,20,2.5x Critical Rating from TAC,,36cc4101-da61-41f8-a61e-adb4823a3e74
Federation,5,Fleet Heavy Strike Wing Escort,Very Rare,Tac,22,60,16,+10 ENG per SciShip,,d47fa8aa-d39d-4df3-9c45-9d45f98f4555
Federation,5,Fleet Patrol Escort Refit,Very Rare,Tac,21,63,14,2.5x Critical Rating from ENG,,75c03113-0251-4dac-8462-36cfc3f8ea83
Federation,5,Fleet Tactical Escort Retrofit,Very Rare,Tac,19,67,12,+10 SCI per EngShip,,50f2c341-34ac-4414-a3ab-11291a31ea39
Federation,5,Dyson Reconnaissance Science Destroyer,Very Rare,Sci,12,38,48,+35 TAC when Alone,,34247fc8-473d-4d02-a28b-9c1d16052331
Federation,5,Dyson Strategic Science Destroyer,Very Rare,Sci,18,32,48,+35 ENG when Alone,,053a4f39-ceb2-4f8c-ba4f-be29083568b6
Federation,5,Dyson Surveillance Science Destroyer,Very Rare,Sci,12,32,54,+35 SCI when Alone,,21c032e3-8c9c-460e-b423-0e2e74461ee2
Federation,5,Fleet Advanced Research Vessel Retrofit,Very Rare,Sci,22,16,60,+8 ENG and TAC per TacShip,,fa4ae393-41e6-4082-b36f-997916dca0fb
Federation,5,Fleet Caitian Atrox Carrier,Very Rare,Sci,28,16,54,+15 All when Alone,,376d7edf-97c7-496c-a65d-dd0d1735121e
Federation,5,Fleet Deep Space Science Vessel,Very Rare,Sci,20,14,64,+10 ENG per TacShip,,2b400446-8a20-47f5-add2-4be6a7cb9830
Federation,5,Fleet Long Range Science Vessel Retrofit,Very Rare,Sci,18,18,62,-25% Maintenance per SciShip,,be4a292b-53d1-4f31-b895-d292aa582e88
Federation,5,Fleet Reconnaissance Science Vessel,Very Rare,Sci,16,22,60,+10 TAC per EngShip,,ec53387b-6452-4160-b1b4-d798f86b163c
Federation,5,Fleet Research Science Vessel Retrofit,Very Rare,Sci,20,16,62,+8 ENG and TAC per EngShip,,19e9993b-b047-48ff-ab1b-e53bb9fb172e
Federation,5,Fleet Science Vessel Retrofit,Very Rare,Sci,15,25,58,2.5x Critical Rating from SCI,,d14b8da9-1440-443a-8817-1c1279efd261
Federation,5,Multi-Mission Reconnaissance Explorer,Very Rare,Sci,20,23,55,+35 TAC when Alone,,4f020624-c504-43c8-8c01-5ff264e74180
Federation,5,Multi-Mission Strategic Explorer,Very Rare,Sci,24,19,55,+35 ENG when Alone,,df1b79c2-9f70-47f1-903e-3af9a1cbc4f4
Federation,5,Multi-Mission Surveillance Explorer,Very Rare,Sci,20,19,59,+35 SCI when Alone,,47feb683-8f38-4a9a-86a3-8979a77bf97e
Federation,5,Mobius Temporal Destroyer,Ultra Rare,Tac,23,59,23,+20 TAC and ENG when Alone,,783b2f0c-0ce2-4dec-9fa2-899de395b017
Federation,5,Wells Temporal Science Vessel,Ultra Rare,Sci,23,23,59,2.5x Critical Rating from SCI,,70303e10-e112-401c-8886-83db258dd2c9
Federation,6,Advanced Heavy Cruiser (T6),Rare,Eng,67,25,16,-25% Maintenance per EngShip,Improved Weaponized Emitters,fbedf605-4e02-437f-8b96-dc821dd71032
Federation,6,Advanced Light Cruiser (T6),Rare,Eng,60,25,23,2.5x Critical Rating from ENG,Evasion Specialist,2d121a14-89a0-45c0-9baf-2d2c67ef6f4e
Federation,6,Battlecruiser (T6),Rare,Eng,41,50,17,-25% Maintenance per TacShip,Emergency Weapon Cycle,2cd8e46d-ce39-4af1-9cda-b1da0c6e3e7b
Federation,6,Bozeman Intel Heavy Frigate (T6),Rare,Eng,48,38,22,2.5x Critical Rating from ENG,Active - Temporal Surge,9922dc85-2519-408f-b924-ca2a6a42f331
Federation,6,Buran Command Dreadnought Cruiser (T6),Rare,Eng,50,29,29,-25% Maintenance per EngShip,Unified Engineering,3c2f8d98-0fb2-448f-b71b-dd8d1358a4eb
Federation,6,Clarke Multi-Mission Command Cruiser (T6),Rare,Eng,50,28,30,+6 ENG per ANY Ship (Not Small Craft),Greater Than the Sum,ff3dd6a3-8bac-45b1-b588-91b541561b84
Federation,6,Command Assault Cruiser (T6),Rare,Eng,62,30,16,+10 TAC per EngShip,Vent Metreon Laced Plasma,d40a81c7-bbb1-4bd6-b68e-c28ca246e0ef
Federation,6,Dreadnought Cruiser (T6),Rare,Eng,61,25,22,+15 All Stats when Alone,Subsystem Redundancies,35b185ec-c9c7-4259-99f3-4fccd73c617d
Federation,6,Eclipse Intel Cruiser (T6),Rare,Eng,60,22,26,+10 SCI per EngShip,Battle Ready,13deb9b4-3df9-485d-9c5a-fdae1904596e
Federation,6,Exploration Cruiser (T6),Rare,Eng,70,19,19,+8 SCI and TAC per TacShip,Explosive Polarity Shift,3877866c-4232-48ff-9540-97df2e79ca09
Federation,6,Gagarin Miracle Worker Battlecruiser (T6),Rare,Eng,50,43,15,+8 TAC and ENG per ENGship,Entwined Tactical Matrices,c8be6faf-380b-4dda-ac76-63b829367307
Federation,6,Guardian Cruiser (T6),Rare,Eng,66,21,21,2.5x Critical Rating from TAC,Desperate Repairs,61a5deff-2f0f-43b0-9087-9fadf9f9d467
Federation,6,Heavy Battlecruiser (T6),Rare,Eng,58,26,24,+8 ENG and SCI per TacShip,Reactive Reconstruction,3f777002-f6c9-4fb1-8290-6993618eeb39
Federation,6,Intel Assault Cruiser (T6),Rare,Eng,62,30,16,+20 TAC and ENG when Alone,Specialist Knowledge,95a700b1-572b-46ba-b07d-3e55b1f948cf
Federation,6,Mirror Guardian Cruiser (T6),Rare,Eng,64,23,21,2.5x Critical Rating from SCI,Desperate Repairs,89ca2817-3fe1-403a-9454-f37041df13f9
Federation,6,Support Cruiser (T6),Rare,Eng,62,21,25,-25% Maintenance per EngShip,History Will Remember,bb7ac36d-0e18-4331-90f8-24b4aa8c3be3
Federation,6,Tellarite Pralim Flight-Deck Assault Cruiser (T6),Rare,Eng,53,38,17,+10 ENG per TacShip,Majority - Minority,7d072653-fd07-44b2-9400-07e22f315a87
Federation,6,Temporal Battlecruiser (T6),Rare,Eng,47,44,17,2x Critical Rating from Events,Retaliation,806ae2c5-c183-439d-9686-25e960046ba1
Federation,6,Temporal Cruiser (T6),Rare,Eng,56,26,26,+10 ENG per SciShip,Shield Overload,f21124a5-466d-426b-8aed-327aac69a877
Federation,6,Advanced Escort (T6),Rare,Tac,16,68,24,+10 TAC per EngShip,Numerical Superiority,0e2fae2a-d689-4ca2-bd37-af9fbf5facd2
Federation,6,Cabot Command Light Escort (T6),Rare,Tac,34,49,25,2.5x Critical Rating from TAC,Advanced Precision Guided Munitions,8ed8aca0-0c4b-4b7d-9eee-cda6fc3cbb66
Federation,6,Caitian Shikaris Escort (T6),Rare,Tac,23,49,36,+10 TAC per EngShip,Hit And Run,fd6dc73e-e232-4cd9-a3f3-7bf7b38d892b
Federation,6,Da Vinci Miracle Worker Escort (T6),Rare,Tac,37,50,21,2.5x Bonus from ENG,Energy Overdrive,e3e7547c-e512-411f-b834-65144eefc195
Federation,6,Earhart Strike Wing Escort (T6),Rare,Tac,26,50,32,+10 TAC per SciShip,Target That Explosion,6a18628c-1822-4310-854f-2921d72fe6a7
Federation,6,Edison Temporal Warship (T6),Rare,Tac,20,58,30,+10 TAC per SciShip,Heart Of Sol,51bf74ef-f6af-4cfb-b909-29a931ceb341
Federation,6,Heavy Destroyer (T6),Rare,Tac,35,57,16,-25% Maintenance per SciShip,Weapon System Synergy,05320ac1-76d1-44b3-b734-25a31837ea2e
Federation,6,Heavy Strike Wing Escort (T6),Rare,Tac,25,65,18,+8 SCI per EngShip or TacShip,Coordinated Assault,2fa68d69-6ce3-4656-b01f-4d863953a137
Federation,6,Phantom Intel Escort (T6),Rare,Tac,26,60,22,+10 ENG per TacShip,Reciprocity,d7326f28-bcd9-4714-9916-aa46b695cefe
Federation,6,Pilot Destroyer (T6),Rare,Tac,41,65,20,+10 TAC per TacShip,Formation Flying,702e0f6c-2b73-45d8-b063-9efe8ea186b4
Federation,6,Recon Destroyer (T6),Rare,Tac,19,52,37,+10 SCI per TacShip,Jubilant Cadence,512cfadf-fe60-4aea-a334-d770c92cab3b
Federation,6,Shran Light Pilot Escort (T6),Rare,Tac,28,58,26,+8 ENG and SCI per TacShip,Strike from Shadows,3754a34b-11ce-49ab-b016-dc5f7b1a8d97
Federation,6,Tactical Escort (T6),Rare,Tac,23,69,16,2.5x Critical Rating from TAC,Withering Barrage,2c457124-cd8d-451c-8e47-ddfd7a9c8654
Federation,6,Temporal Escort (T6),Rare,Tac,22,56,30,+10 TAC per EngShip,Designated Target,6200be33-2092-4a5b-8d12-92c2d2648788
Federation,6,Valdres Command Strike Wing Escort (T6),Rare,Tac,29,50,29,-25% Maintenance per TacShip,Constructive/Destructive Field Interference,86f031a2-5b30-4167-ac5f-703ea15cb7d8
Federation,6,Advanced Research Vessel (T6),Rare,Sci,31,20,57,+8 SCI per EngShip or TacShip,Tachyon Dispersal,2634ab63-77ae-4a3e-9fd7-ac79a54cf761
Federation,6,Caitian Aspero Support Carrier (T6),Rare,Sci,26,26,55,-25% Maintenance per SciShip,Relaunch and Repair,0f16c10c-3086-498d-8fd4-1eba0b7a4d78
Federation,6,Carrier (T6),Rare,Sci,34,29,45,1.5x Critical Rating from TAC and ENG,Insult To Injury,e9f6716d-2709-4c18-9833-8a5e505b21c6
Federation,6,Equinox Pilot Scout Ship (T6),Rare,Sci,21,28,59,+10 TAC per EngShip,Synthetic Good Fortune,1d2efa7e-2d2f-478d-b6f6-209eabe92e38
Federation,6,Experimental Science Vessel (T6),Rare,Sci,22,28,58,+8 SCI per Any Ship,Radiant Nanite Cloud,ac5dab8e-6e7e-42c1-9ff9-b8d664240a7f
Federation,6,Grissom Light Science Vessel (T6),Rare,Sci,36,18,54,2.5x Critical Rating from SCI,By the Book,a816ff3e-54b2-402c-8b76-9955d15db916
Federation,6,Long Range Science Vessel (T6),Rare,Sci,21,21,66,2.5x Critical Rating from SCI,Ablative Field Projector,3ac2ed09-9f45-45dd-b61a-e9ad74e1940c
Federation,6,Nobel Miracle Worker Research Science Vessel (T6),Rare,Sci,39,21,48,2.5x Critical Rating from SCI,Trauma Response,da6c2493-22af-427a-a5f1-e2fb6d61ef36
Federation,6,Scryer Intel Science Vessel (T6),Rare,Sci,26,22,60,+10 TAC per SciShip,Emitter Synergy,ac23dbed-087a-4557-b130-81e7050c3931
Federation,6,Seneca Command Carrier (T6),Rare,Sci,37,27,44,-25% Maintenance per SciShip,Supplementary Coordination Network,0ee4fc78-f2f4-4418-a1a5-f25bc1f1e690
Federation,6,Somerville Intel Science Vessel (T6),Rare,Sci,28,28,52,+10 SCI per SciShip,Spore-Infused Anomalies,29fff3de-bc64-4397-8430-13c04a10cf20
Federation,6,Temporal Science Vessel (T6),Rare,Sci,22,36,50,+10 SCI per EngShip,Improved Polarize Hull,ae2433db-4f25-46cf-8c52-e59128aa26f5
Federation,6,Titan Science Destroyer (T6),Rare,Sci,15,41,52,+10 SCI per TacShip,It's Another Enterprise,4ecd10b7-a27d-43a7-aa43-cbd9097bb2e2
Federation,6,Concorde Command Battlecruiser (T6),Very Rare,Eng,77,20,20,+35 ENG when Alone,Improved Brace For Impact,531c337f-3ec4-418c-b9e3-3ba2a0116868
Federation,6,Daystrom Science Miracle Worker Cruiser (T6),Very Rare,Eng,57,26,34,+20 TAC and ENG when Alone,Photonic Boarding Party,bc7b9f16-2408-4972-9211-4ed6c124d8a7
Federation,6,Fleet Advanced Heavy Cruiser (T6),Very Rare,Eng,72,27,18,+8 TAC per Any Ship,,3c5a07b4-0962-4831-a3a7-0612bfc01e7e
Federation,6,Fleet Advanced Light Cruiser (T6),Very Rare,Eng,64,28,25,2x Critical Rating from Events,,44f68406-9182-4907-90fe-cc794b776426
Federation,6,Fleet Battlecruiser (T6),Very Rare,Eng,43,55,19,+8 ENG per Any Ship,,71b5f108-6468-4668-80da-327ff7a85168
Federation,6,Fleet Cardenas Command Dreadnought Cruiser (T6),Very Rare,Eng,51,34,32,+8 ENG per TacShip or SciShip,,b3043a7d-72d3-4a1d-916d-c4f0f55ae61a
Federation,6,Fleet Command Assault Cruiser (T6),Very Rare,Eng,64,37,16,+8 TAC per SciShip or TacShip,,16997b20-d7f6-419e-b80f-dcc83e1689e4
Federation,6,Fleet Dreadnought Cruiser (T6),Very Rare,Eng,66,27,24,2x Critical Rating from Events,,7b9090c8-49e1-4cef-ae83-8935218901e5
Federation,6,Fleet Eclipse Intel Cruiser (T6),Very Rare,Eng,63,24,30,+8 SCI and TAC per EngShip,,b8b5c3cd-ce15-48c1-bed6-96305f6556b3
Federation,6,Fleet Exploration Cruiser (T6),Very Rare,Eng,73,22,22,2.5x Critical Rating from ENG,,ed3d2a25-96cc-43c0-a936-34718d3b41fc
Federation,6,Fleet Guardian Cruiser (T6),Very Rare,Eng,69,24,24,Ignores +/- ENG from Events,,3af34288-4ed7-4bbe-909e-b5ad76b1649b
Federation,6,Fleet Heavy Battlecruiser (T6),Very Rare,Eng,60,31,26,+8 ENG and SCI per EngShip,,0b1aab18-bccf-4dc8-98b3-a84421c4e9fa
Federation,6,Fleet Intel Assault Cruiser (T6),Very Rare,Eng,64,37,16,+35 TAC when Alone,,ef322455-40e3-4687-8d60-7ae6a97507e9
Federation,6,Fleet Malachowski Multi-Mission Command Cruiser (T6),Very Rare,Eng,55,30,32,2x Critical Rating from Events,,ec90cc81-6eb7-4a01-8e77-7420d4a67453
Federation,6,Fleet Shepard Miracle Worker Battlecruiser (T6),Very Rare,Eng,54,48,15,+35 ENG when Alone,,748ef2ae-f612-4653-a162-17439695c590
Federation,6,Fleet Soyuz Intel Heavy Frigate (T6),Very Rare,Eng,53,40,24,Ignores +/- ENG from Events,,c0a0f9f1-bc18-4fc1-8a33-c259951d4945
Federation,6,Fleet Support Cruiser (T6),Very Rare,Eng,67,23,27,-10% Maintenance per SciShip or TacShip,,9451ee3c-5724-4160-b4f3-cd8f158affdb
Federation,6,Fleet Tellarite Pralim Flight-Deck Assault Cruiser (T6),Very Rare,Eng,57,41,19,+8 ENG per TacShip or SciShip,,51ee40d0-f88e-458b-9502-64459606a50f
Federation,6,Fleet Temporal Battlecruiser (T6),Very Rare,Eng,54,45,18,+35 TAC when Alone,,e085baa4-d58c-4503-aed2-3c40edc4d06d
Federation,6,Fleet Temporal Cruiser (T6),Very Rare,Eng,61,28,28,+8 ENG per SciShip or TacShip,,0018ab40-3af5-4fd1-85e5-4a111be422b9
Federation,6,Geneva Command Battlecruiser (T6),Very Rare,Eng,73,20,24,+35 SCI when Alone,Improved Tachyon Beam,52284515-81cd-4e89-8d43-020da0e6ce5a
Federation,6,Legendary Ambassador Intel Support Cruiser (T6),Very Rare,Eng,56,26,35,+35 SCI when Alone,History Will Remember,2d82f460-efb4-4831-8312-88fcf4e09d8b
Federation,6,Legendary Command Dreadnought Cruiser (T6),Very Rare,Eng,50,35,32,+8 SCI and TAC per EngShip,Adaptive Hull Plating,af79fbc6-6f65-497b-9cbb-49893e2ecc43
Federation,6,Legendary Command Exploration Cruiser (T6),Very Rare,Eng,65,30,22,+8 ENG and TAC per SciShip,Explosive Polarity Shift,46be9814-b92d-4b1e-a6cc-e14c9fc83806
Federation,6,Legendary Excelsior Miracle Worker Heavy Cruiser (T6),Very Rare,Eng,65,32,20,+35 ENG when Alone,Improved Weaponized Emitters,7f514224-f46a-4e61-87db-7ff4c76c93ab
Federation,6,Legendary Galaxy Dreadnought Cruiser (T6),Very Rare,Eng,66,34,17,+35 TAC when Alone,Explosive Polarity Shift,78aabea6-3be3-4d4f-a826-07984b35a251
Federation,6,Legendary Kelvin Timeline Intel Battlecruiser (T6),Very Rare,Eng,52,41,24,+10 ENG per TacShip,Down But Not Out,2746627e-eac5-479c-aa9e-c3fde0594706
Federation,6,Legendary Miracle Worker Assault Cruiser (T6),Very Rare,Eng,67,37,13,+8 ENG and TAC per TacShip,Specialist Knowledge,237f95a8-ce25-4de4-ab2d-abb283815b71
Federation,6,Legendary Miracle Worker Light Cruiser (T6),Very Rare,Eng,52,38,27,+10 ENG per EngShip,Built To Last,47a78d4a-f7e8-4eb1-a853-3c9564e56704
Federation,6,Legendary Miranda Multi-Mission Cruiser (T6),Very Rare,Eng,56,36,35,+10 SCI per EngShip,Evasion Specialist,d28f9e89-2680-4ce6-ad3b-efbcc4a7f92f
Federation,6,Legendary Temporal Flight-Deck Carrier (T6),Very Rare,Eng,49,33,35,+10 ENG per SciShip,Polarized Lattice-Optimized Tritanium Armor,f4224338-e495-4ac6-bfcc-af3bacbfcbe5
Federation,6,Legendary Walker Light Battlecruiser (T6),Very Rare,Eng,55,33,29,+35 ENG when Alone,Vulcan Hello,bfefeb89-d792-4cb0-9967-71002d8a4d0c
Federation,6,Operations Star Cruiser (T6),Very Rare,Eng,65,26,26,+10 ENG per TacShip,Adaptive Hull Plating,2f6739c8-7e3b-4bfe-a97d-98b4bd14a6e0
Federation,6,Presidio Command Battlecruiser (T6),Very Rare,Eng,73,24,20,+35 TAC when Alone,All Hands On Deck,87b84727-6dd2-43d3-8943-56e4489d0138
Federation,6,Science Star Cruiser (T6),Very Rare,Eng,63,18,36,+10 SCI per EngShip,Checkmate,95928c12-a2d4-4ad6-985a-69f6dd840bdc
Federation,6,Scott Operations Miracle Worker Cruiser (T6),Very Rare,Eng,65,26,26,+20 TAC and SCI when Alone,Stay At Your Posts,500ceb59-a5ca-4476-bd74-1086adbc98c9
Federation,6,Tactical Star Cruiser (T6),Very Rare,Eng,56,36,25,+10 TAC per SciShip,Super Charged Weapons,2bd4af5b-3c90-4486-8e9e-afc1f4562ed9
Federation,6,Tucker Tactical Miracle Worker Cruiser (T6),Very Rare,Eng,57,34,26,+20 SCI and ENG when Alone,Redirecting Arrays,88dd09f5-08a4-4c07-8e48-28cc4a4e4e8b
Federation,6,Ajax Pilot Escort (T6),Very Rare,Tac,26,66,25,+35 ENG when Alone,Structural Integrity Overcharge,1cd64364-8f56-45e2-9446-399db06c6bef
Federation,6,Andorian Chimesh Pilot Escort (T6),Very Rare,Tac,26,55,36,-25% Maintenance per SciShip,Improved Gravity Well,1cb944c9-9c05-47a5-a74a-ffda30d11bf1
Federation,6,Andorian Kuthar Pilot Escort (T6),Very Rare,Tac,36,55,26,-25% Maintenance per EngShip,Painful Memories,9d87c098-8a0a-49d1-855b-cd3aed36da71
Federation,6,Andorian Thozyn Pilot Escort (T6),Very Rare,Tac,26,65,26,-25% Maintenance per TacShip,Promise Of Ferocity,1d6ad24c-d394-45e8-a270-3d0a9b163c1f
Federation,6,Appalachia Blockade Runner Escort (T6),Very Rare,Tac,37,62,18,+35 TAC when Alone,Piercing Projectiles,de96cac6-002f-4077-acdc-ca2fc780260e
Federation,6,Fleet Advanced Escort (T6),Very Rare,Tac,18,73,26,+8 TAC per EngShip or SciShip,,4a81405f-60df-46fa-b38e-b8208193cb1b
Federation,6,Fleet Caitian Shikaris Escort (T6),Very Rare,Tac,23,57,37,2.5x Critical Rating from TAC,,11d8bf7d-a3cd-4a70-bab8-492ba391f68a
Federation,6,Fleet Engle Strike Wing Escort (T6),Very Rare,Tac,30,50,37,+8 TAC per TacShip or SciShip,,eae00d36-bfee-457b-b79e-d778313c7bf8
Federation,6,Fleet Heavy Destroyer (T6),Very Rare,Tac,37,62,18,+8 SCI per Any Ship,,d3d8be1d-863d-4089-b6f5-aac61fd98487
Federation,6,Fleet Heavy Strike Wing Escort (T6),Very Rare,Tac,27,70,20,+5 SCI and ENG per EngShip and TacShip,,19fd6b3c-739c-43dc-bff4-e79f6a7ec5fe
Federation,6,Fleet Hoover Temporal Warship (T6),Very Rare,Tac,21,59,37,+10 SCI per TacShip,,940cef2f-cea7-4460-8d3c-fe5cfc8329c1
Federation,6,Fleet Magee Command Light Escort (T6),Very Rare,Tac,36,54,27,Ignores +/- TAC from Events,,d413d286-1aa8-4f5a-ba6e-b0b490699498
Federation,6,Fleet Magee Light Pilot Escort (T6),Very Rare,Tac,28,63,26,+35 TAC when Alone,,04a98f68-a2a3-43e5-9d0f-2ffbbd246d3e
Federation,6,Fleet Norway Command Strike Wing Escort (T6),Very Rare,Tac,30,54,33,+25 SCI when Alone,,588da2f1-1849-4a4d-9abe-b51635d2a1f8
Federation,6,Fleet Phantom Intel Escort (T6),Very Rare,Tac,30,63,24,+8 ENG and SCI per TacShip,,4ea80139-d9e8-4573-b0a1-c3e603a2a1b2
Federation,6,Fleet Recon Destroyer (T6),Very Rare,Tac,20,58,39,+35 SCI when Alone,,94210701-9146-4b8c-bdc0-fc9f7526a3ac
Federation,6,Fleet Saber Miracle Worker Escort (T6),Very Rare,Tac,42,53,22,+20 ENG and TAC when Alone,,7a57f047-4821-4d47-86ba-687901f8da3a
Federation,6,Fleet Tactical Escort (T6),Very Rare,Tac,25,74,18,Ignores +/- TAC from Events,,00ea70c4-0150-45c0-a951-1794a6dba521
Federation,6,Fleet Temporal Escort (T6),Very Rare,Tac,22,57,38,+8 TAC per EngShip or SciShip,,b8b189b2-896f-44c7-9b51-9a8d0229b109
Federation,6,Icarus Pilot Escort (T6),Very Rare,Tac,22,66,29,+35 SCI when Alone,Subwarp Sheath,8ddf3567-cd2e-4268-8973-db83a7ef6887
Federation,6,Legendary Pilot Warship (T6),Very Rare,Tac,37,61,19,+10 TAC per EngShip,Withering Barrage,f3a63180-0d37-4403-8c6c-d4a0a9ef5875
Federation,6,Legendary Temporal Operative Escort (T6),Very Rare,Tac,18,61,37,+10 TAC per SciShip,Preferential Targeting,cb9cad93-0854-4705-86db-48f72a450b1c
Federation,6,Mercury Pilot Escort (T6),Very Rare,Tac,22,70,25,+35 TAC when Alone,Stay On Target,26611edd-136a-421e-b4de-49f63f82483b
Federation,6,Fleet Advanced Research Vessel (T6),Very Rare,Sci,39,20,58,2.5x Critical Rating from SCI,,ccaeae1e-8172-40db-a89d-d9963950c214
Federation,6,Fleet Caitian Atrox Carrier (T6),Very Rare,Sci,29,29,60,+8 SCI per ANY Ship (Not Small Craft),,61e46d15-9612-4ed8-a542-4fc29d43f42b
Federation,6,Fleet Carrier (T6),Very Rare,Sci,41,30,46,+8 SCI per EngShip or TacShip,,3acf9553-3a8c-41e8-82ba-9fc856094a26
Federation,6,Fleet Comet Science Destroyer (T6),Very Rare,Sci,16,44,57,+10 TAC per SciShip,,6420cb48-e92d-4fce-b46a-f1cdc55295e8
Federation,6,Fleet Experimental Science Vessel (T6),Very Rare,Sci,24,31,62,Ignores +/- SCI from Events,,223623b7-5405-46f6-8dab-683d988ce49c
Federation,6,Fleet Hernandez Intel Science Vessel (T6),Very Rare,Sci,29,29,59,+35 SCI when Alone,,82ab5827-a5c6-476c-a9ee-e86798f54ea7
Federation,6,Fleet Hiawatha Command Carrier (T6),Very Rare,Sci,40,29,47,+25 ENG when Alone,,f8fe5e64-ac29-4bab-bfdc-c10e963f166b
Federation,6,Fleet Intrepid Long Range Science Vessel (T6),Very Rare,Sci,24,18,69,+8 TAC and ENG per SciShip,,80950811-fe4f-43c4-b5fd-91b2b1730615
Federation,6,Fleet Nova Pilot Scout Ship (T6),Very Rare,Sci,23,30,64,+10 ENG per TacShip,,144e55ab-e16e-4bed-beb2-4a730f553cdb
Federation,6,Fleet Oberth Light Science Vessel (T6),Very Rare,Sci,39,20,58,Ignores +/- SCI from Events,,f6789e4f-633f-49ee-bfba-b80df0d8f990
Federation,6,Fleet Olympic Miracle Worker Research Science Vessel (T6),Very Rare,Sci,41,23,53,Ignores +/- SCI from Events,,7cba088a-1424-4bba-90e5-8bde8f7c807a
Federation,6,Fleet Scryer Intel Science Vessel (T6),Very Rare,Sci,30,24,63,+8 TAC and ENG per SciShip,,47377a6a-c99b-4e3d-90bf-b4b57aaf62e4
Federation,6,Fleet Temporal Science Vessel (T6),Very Rare,Sci,22,44,51,+8 SCI per EngShip or TacShip,,10693ef1-7d57-40dc-af1f-424aef8c153a
Federation,6,Legendary Caelian Intel Multi-Mission Explorer (T6),Very Rare,Sci,22,41,54,-25% Maintenance per EngShip,Charged Particle Reaction,b80c8cc2-6780-46c8-bdb5-8ec00e843a39
Federation,6,Legendary Miracle Worker Multi-Mission Science Vessel (T6),Very Rare,Sci,35,20,62,+10 ENG per SciShip,Ablative Field Projector,d93eeebc-a1e7-460f-bc9f-8e97ce9cbbba
Federation,6,Legendary Temporal Operative Science Vessel (T6),Very Rare,Sci,18,36,63,+10 SCI per TacShip,Black Alert,389c6398-50cb-43a7-a77e-8732ec7fdeb6
Federation,6,Multi-Mission Reconnaissance Explorer (T6),Very Rare,Sci,21,44,52,Ignores +/- TAC from Events,Heavy Tachyon Mine,b98724b4-9f7d-40eb-a4e6-6c66034104f4
Federation,6,Multi-Mission Strategic Explorer (T6),Very Rare,Sci,32,39,46,Ignores +/- ENG from Events,Exotic Particle Shielding,66dc1726-566a-48c1-96b6-f21dd7aba41f
Federation,6,Multi-Mission Surveillance Explorer (T6),Very Rare,Sci,28,35,54,Ignores +/- SCI from Events,Charged Particle Reaction,6fc4edb8-9252-4666-8c9c-9e17f6c1cd33
Federation,6,California Miracle Worker Utility Cruiser (T6),Ultra Rare,Eng,62,37,27,2.5x Critical Rating from ENG,Lower Decks Initative,0b54d0b9-6a76-4d84-87e8-53ad656e3708
Federation,6,Constitution Miracle Worker Flight Deck Carrier (T6),Ultra Rare,Eng,63,35,28,Ignores +/- ENG from Events,Polarized Lattice-optimized Tritanium Armor,78b6bb7d-1796-447a-9eda-4f664f3c5515
Federation,6,Excelsior II Intel Heavy Cruiser (T6),Ultra Rare,Eng,69,37,20,-25% Maintenance per EngShip,Calculated Broadside,362d36dd-f91a-44a7-96ce-1b43ecc03d6e
Federation,6,Farragut Temporal Cruiser (T6),Ultra Rare,Eng,56,29,41,+10 SCI per TacShip,Damn the Torpedoes,6540ccb8-e274-44ef-ad9b-6c2707400c04
Federation,6,Freedom Exploration Frigate (T6),Ultra Rare,Eng,52,46,28,Ignores +/- ENG from Events,Smooth Landing,9e11cda1-2e07-44e1-9b4b-a372ef1a6b78
Federation,6,Inquiry Battlecruiser (T6),Ultra Rare,Eng,64,44,18,+10 TAC per EngShip,"Weapons Hot, Deflectors to Full",d542409a-100f-4a29-a232-3ecfc4070659
Federation,6,Kelvin Timeline Heavy Command Cruiser (T6),Ultra Rare,Eng,62,36,28,+20 ENG and TAC when Alone,Down But Not Out,0275a45e-8190-46b3-8e6f-de93e91a93b0
Federation,6,Kelvin Timeline Intel Dreadnought Cruiser (T6),Ultra Rare,Eng,59,48,19,Ignores +/- TAC from Events,Target Rich Environment,a4e2e67c-c24d-4ddb-b163-dc021f6f786e
Federation,6,Kirk Temporal Heavy Battlecruiser (T6),Ultra Rare,Eng,49,44,32,-5% Maintenance per ANY Ship (Not Small Craft),Risk is our Business,23ddb0cd-eb22-422b-909e-b778527bb497
Federation,6,Parliament Miracle Worker Surveyor Cruiser (T6),Ultra Rare,Eng,71,20,35,+20 ENG and SCI when Alone,Efficient Demolition,8bcb5349-76b6-4384-9ce8-63fd5bfdc744
Federation,6,Prototype Dreadnought Cruiser (T6),Ultra Rare,Eng,62,44,20,+15 All Stats when Alone,Sif Shunt,210ff4e0-a7f1-4206-a41b-bb40885c5a16
Federation,6,S31 Command Heavy Battlecruiser (T6),Ultra Rare,Eng,58,41,27,+35 ENG when Alone,Secret Mission,c9a0d09e-d6bd-4298-8d32-1780de0beb50
Federation,6,S31 Intel Dreadnought Cruiser (T6),Ultra Rare,Eng,52,34,40,2x Critical Rating from Events,Interference Drones,d2070382-608f-40a9-a7bf-3d1b86a642c5
Federation,6,Sagan Command Cruiser (T6),Ultra Rare,Eng,62,28,36,+6 SCI per ANY Ship (Not Small Craft),Reverberant Shielding,699b4324-97c5-4518-9e09-b9de6dc6537d
Federation,6,Temporal Heavy Dreadnought Cruiser (T6),Ultra Rare,Eng,57,42,27,+20 TAC and ENG when Alone,Repair Mode,8f68ce39-0890-4fb5-83ff-0515a605d625
Federation,6,Temporal Light Cruiser (T6),Ultra Rare,Eng,58,37,30,Ignores +/- ENG from Events,Built To Last,018848db-5cb6-4054-a31a-c04d661e2f43
Federation,6,Walker-class Light Exploration Cruiser (T6),Ultra Rare,Eng,58,29,29,+8 SCI per SciShip or TacShip,Vulcan Hello,55c0222c-31ad-428c-922c-cea65c1a7938
Federation,6,Kelvin Einstein Heavy Destroyer (T6),Ultra Rare,Tac,44,59,23,+20 ENG and TAC when Alone,Into The Fray,f2c4af1d-bcd6-4cc6-87c6-a3f79ed68208
Federation,6,Klein Temporal Destroyer (T6),Ultra Rare,Tac,29,68,29,+8 TAC per EngShip or SciShip,1.21 Terrawatts,49aa739d-d7e4-4e4e-9c9a-9a880af70117
Federation,6,Mars Pilot Escort (T6),Ultra Rare,Tac,34,63,29,-25% Maintenance per SciShip,Improved Lock Trajectory,ea40a9e7-5f9b-45e4-81b2-a4569bb6f131
Federation,6,Mirror Constitution Warship (T6),Ultra Rare,Tac,51,57,18,+10 ENG per TacShip,Terran Goodbye,c8f2ce3b-30a7-489a-9a0d-be90bd6f8067
Federation,6,Mirror Strike Wing Escort (T6),Ultra Rare,Tac,22,57,47,+10 TAC per SciShip,Superior Area Denial,792a1003-e8f6-4c9f-bf2d-644803072ca2
Federation,6,NX Escort Refit (T6),Ultra Rare,Tac,42,63,21,+8 TAC per Any Ship,Preferential Targeting,600a8185-a55a-4e28-ab54-c5f152cc6a0c
Federation,6,Courage Command Science Destroyer (T6),Ultra Rare,Sci,20,48,59,2.5x Bonus from TAC,Directional Bias,ce3a14ff-b668-4b1e-983a-34451fd07ce0
Federation,6,Crossfield Science Spearhead Refit (T6),Ultra Rare,Sci,37,30,59,+8 ENG and SCI per TacShip,Universal Designs,12a7b29d-c5e7-4a8d-9a44-1d0e4ace5281
Federation,6,Crossfield-class Science Vanguard (T6),Ultra Rare,Sci,20,47,59,2.5x Critical Rating from SCI,Black Alert,9d8b85d0-a881-4f19-aa2e-835eae14399c
Federation,6,Janeway Command Science Vessel (T6),Ultra Rare,Sci,21,37,68,+25 TAC when Alone,Enhanced Cloaking Integration,4d0a1ef1-3f32-41f3-89db-bce5f273e26f
Federation,6,Merian Command Science Dreadnought (T6),Ultra Rare,Sci,42,30,54,2.5x Critical Rating from SCI,Scientific Bulwark,8b463244-8dc7-4139-9ab4-014f48788a8d
Federation,6,Mirror Crossfield Science Destroyer (T6),Ultra Rare,Sci,15,54,57,+20 TAC and SCI when Alone,Terran Machinations,6c1997de-deb4-4461-8b0a-4ff57174ff2e
Federation,6,S31 Intel Science Destroyer (T6),Ultra Rare,Sci,18,52,56,+10 SCI per TacShip,Exitus Acta Probat,27d27362-c9ef-45f2-af69-429e462ba22d
Federation,6,Saturn Intel Science Spearhead (T6),Ultra Rare,Sci,29,46,46,+10 SCI per TacShip,Automated Triage,f898f138-c37c-4078-b729-a12cca993b91
Federation,6,Verne Temporal Science Vessel (T6),Ultra Rare,Sci,29,29,68,Ignores +/- SCI from Events,Out of Time,24eb629b-2b2b-40fa-91bf-bc086ff45ad4
JemHadar,0,Jem'Hadar Fighter,Common,Smc,2,3,1,+10 ALL Stats per ANY Ship (Not Small Craft),,42b16198-027e-4d74-873a-5cb9b6c84b38
JemHadar,5,Jem'Hadar Escort [T5-U],Common,Tac,23,42,10,1.5x Critical Rating from All Stats,,f463bdd9-22fd-4312-aff0-c96f9b0d1057
JemHadar,6,Jem'Hadar Vanguard Heavy Destroyer (T6),Rare,Tac,35,57,16,-25% Maintenance per SciShip,Weapon System Synergy,7e28c5bf-03c0-424c-afe6-64e8a371bf87
JemHadar,6,Jem'Hadar Vanguard Recon Destroyer (T6),Rare,Tac,19,52,37,+35 SCI when Alone,Jubilant Cadence,8b1be72b-b01b-44a9-8083-1b00969e995e
JemHadar,6,Jem'Hadar Vanguard Temporal Warship (T6),Rare,Tac,20,58,30,+10 TAC per SciShip,Persistence Of The Founders,5ee2d213-246c-4773-8f12-ce697cb8efe9
JemHadar,6,Jem'Hadar Vanguard Dreadnought Cruiser (T6),Very Rare,Eng,60,34,23,2.5x Critical Rating from ENG,Team Synergy,48eb3db6-3c11-4cf1-b2e4-98c9ad386651
JemHadar,6,Fleet Jem'Hadar Vanguard Heavy Destroyer (T6),Very Rare,Tac,37,62,18,+8 SCI per ANY Ship (Not Small Craft),,89add371-e675-42a7-ac20-19c78545b0c0
JemHadar,6,Fleet Jem'Hadar Vanguard Recon Destroyer (T6),Very Rare,Tac,29,58,39,+10 SCI per TacShip,,c43507a7-e7e3-4b52-b144-7f5edf02664c
JemHadar,6,Fleet Jem'Hadar Vanguard Temporal Warship (T6),Very Rare,Tac,21,59,37,+10 SCI per TacShip,,d8d215dd-24e9-447f-9336-4bf7554d9703
JemHadar,6,Jem'Hadar Vanguard Heavy Raider (T6),Very Rare,Tac,30,47,40,Ignore +/- TAC from Events,Press the Advantage,4327c03d-c750-4311-9011-c71f3ff068b5
JemHadar,6,Jem'Hadar Vanguard Warship (T6),Very Rare,Tac,38,61,18,2.5x Critical Rating from TAC,Tricks of the Trade,e13bac2f-8ef6-4e77-811e-53e4ba341982
JemHadar,6,Legendary Jem'Hadar Vanguard Pilot Attack Ship (T6),Very Rare,Tac,38,59,20,Ignores +/- SCI from Events,Go For The Kill,0703494d-3b71-4cd6-bd94-cf8679e3dcdb
JemHadar,6,Fleet Jem'Hadar Vanguard Support Carrier (T6),Very Rare,Sci,29,29,60,+8 SCI per ANY Ship (Not Small Craft),,79aab008-eea1-43ca-9184-bbb553aeefde
JemHadar,6,Jem'Hadar Vanguard Carrier (T6),Very Rare,Sci,20,34,63,2.5x Critical Rating from SCI,Dampen Energy Signatures,272cf437-b645-4d80-b689-ddee56e41ce4
Klingon,0,Kivra Shuttle,Common,Smc,4,1,1,-25% Maintenance per ANY Ship (Not Small Craft),,7da57b30-d544-40b5-a81f-bc0fb8a95026
Klingon,0,Toron Shuttle,Common,Smc,2,2,2,-25% Maintenance per ANY Ship (Not Small Craft),,44729d2e-1010-429b-9047-b61a0eb09677
Klingon,0,DujHod Chariot,Rare,Smc,4,3,3,5x Critical Rating from ALL Stats,,d5cb49aa-7a28-4a17-a93e-6937b9f50a58
Klingon,0,To'Duj Fighter,Rare,Smc,3,4,3,+10 ALL Stats per ANY Ship (Not Small Craft),,b525e9b8-0e9b-45ff-9f5a-fb695bfbaf77
Klingon,0,Rozhenko Timeship,Ultra Rare,Smc,3,4,7,-25% Maintenance per ANY Ship (Not Small Craft),,1bb68cdc-a23b-41f1-a248-2f93b9bbd5d6
Klingon,1,B'rel Bird-of-Prey,Common,Tac,5,5,5,2x Critical Rating from Events,,c8a72a58-6793-46f8-a845-542a72c2ac74
Klingon,1,B'Rotlh Bird-of-Prey,Rare,Tac,6,6,6,1.25x Critical Rating from All Stats,,5faa98ab-c688-459a-be90-6ba7ae4ac338
Klingon,2,K'Tanco Battle Cruiser,Common,Eng,12,10,8,+8 ENG per SciShip or TacShip,,fc41429c-48c3-40d8-9ce2-e4e7f74e0574
Klingon,2,QulDun Bird-of-Prey,Common,Tac,10,10,10,1.5x Critical Rating from ENG and SCI,,d973fd37-6199-4cb2-bc8a-d40677a21f93
Klingon,2,Somraw Raptor,Common,Tac,10,12,8,+8 TAC per EngShip or SciShip,,cca76dc1-3710-4340-b3a5-76f00a31f326
Klingon,2,Qaw'Dun Bird-of-Prey,Rare,Tac,12,12,12,1.25x Critical Rating from All Stats,,2817221a-e699-48d5-921f-9075513ba20b
Klingon,3,K't'inga Battle Cruiser,Common,Eng,22,13,10,2.5x Critical Rating from ENG,,4364b991-04c8-40fa-8b10-be4a65cfebb6
Klingon,3,Kamarag Battle Cruiser,Common,Eng,22,10,13,1.5x Critical Rating from ENG and SCI,,aa03de38-2ef4-46b4-bdc6-09a9f37de3a2
Klingon,3,Norgh Bird-of-Prey,Common,Tac,15,15,15,2.5x Critical Rating from SCI,,85cf3e7a-751d-450b-9000-5221a1127801
Klingon,3,Qorgh Raptor,Common,Tac,13,22,10,2.5x Critical Rating from TAC,,ffc38e27-e8cc-4d78-b620-b0cf2cf07c9c
Klingon,3,Dacoit Flight Deck Cruiser,Rare,Eng,29,11,14,Ignores +/- ENG from Events,,a1a448b0-fba3-4140-b8d1-0fbdbec6f7ba
Klingon,3,Koro't'inga Battle Cruiser,Rare,Eng,27,15,12,1.5x Critical Rating from ENG and TAC,,92012c51-9a1a-43d7-b60b-4ce0d1b2b939
Klingon,3,Ning'Tao Bird-of-Prey,Rare,Tac,18,18,18,1.25x Critical Rating from All Stats,,99b6925d-fad3-4e6d-aad1-aa84cba20a4e
Klingon,3,SuQob Raptor,Rare,Tac,14,29,11,+5 ENG and SCI from Any Ship,,695b0bb7-64e1-4893-944e-04cea3c1959d
Klingon,3,Vandal Destroyer,Rare,Tac,12,27,15,Ignores +/- TAC from Events,,c46c46e4-cf06-41d2-9738-784be4ec7f62
Klingon,3,Phalanx Science Vessel,Rare,Sci,14,11,29,Ignores +/- SCI from Events,,2dc153f0-08d1-4a56-b54d-1fe9dbfc9056
Klingon,4,Vor'cha Battle Cruiser,Common,Eng,28,18,14,+8 ENG per SciShip or TacShip,,fec986cf-df2a-45cb-8e69-c35ccd85a601
Klingon,4,Ki'tang Bird-of-Prey,Common,Tac,20,20,20,1.5x Critical Rating from TAC and SCI,,eeea3ccf-cbc3-493a-83cd-04b3267ae0a6
Klingon,4,Pach Raptor,Common,Tac,18,28,14,+8 TAC per EngShip or SciShip,,231ad65a-c3b0-40be-ad96-e794f291ebb1
Klingon,4,Corsair Flight Deck Cruiser,Rare,Eng,32,24,16,+5 TAC and SCI per SciShip or EngShip,,9dde9b36-2ba5-4bfd-8dd2-ae4a131b7a51
Klingon,4,Vor'Kang Battle Cruiser,Rare,Eng,35,21,16,-10% Maintenance per SciShip or TacShip,,342f90b1-2ac5-4c80-9cae-5990b987de55
Klingon,4,Ch'Tang Bird-of-Prey,Rare,Tac,24,24,24,1.5x Critical Rating from ENG and SCI,,64533101-b34a-432f-a193-809577009828
Klingon,4,Puyjaq Raptor,Rare,Tac,20,40,12,1.5x Critical Rating from ENG or TAC,,2fcde160-7687-4dea-85c5-e0977f70dbe5
Klingon,4,Scourge Destroyer,Rare,Tac,16,36,20,+8 TAC per SciShip or TacShip,,f233e07b-163b-48bd-90c7-68635d379c1f
Klingon,4,Draguas Support Vessel,Rare,Sci,22,12,38,+8 SCI per EngShip or TacShip,,e39759eb-9f54-40ea-b8e3-dd2539cf46a0
Klingon,4,Tong'Duj Freighter,Epic,Eng,43,17,30,+20 ALL per Any Ship (Not Small Craft),,dc0a25a6-15ab-44c4-80c7-7c841dc67f3b
Klingon,5,Bortas Battle Cruiser,Common,Eng,38,24,13,-5% Maintenance per Any Ship,,4ae68ba5-7ba6-4586-a219-34f593c2c222
Klingon,5,Corsair Flight Deck Cruiser Retrofit,Common,Eng,42,12,21,+10 TAC per EngShip,,4c71a56c-85c6-48bb-8025-45f85d73c6f4
Klingon,5,K't'inga Battle Cruiser Retrofit,Common,Eng,37,22,16,+10 TAC per TacShip,,eff9680e-9523-40f4-b592-fa052903c030
Klingon,5,Kamarag Battle Cruiser Retrofit,Common,Eng,32,26,17,+10 SCI per SciShip,,e495cdcf-9ef0-4b6b-9931-14d6173c3a42
Klingon,5,Negh'Var Heavy Battle Cruiser,Common,Eng,40,20,15,-25% Maintenance per SciShip,,8bdec868-1052-46b3-9674-397908a6f527
Klingon,5,Vor'cha Battle Cruiser Retrofit,Common,Eng,36,24,15,-10% Maintenance per SciShip or TacShip,,941f6674-0b72-43f1-b650-ed93d070957b
Klingon,5,Hegh'ta Heavy Bird-of-Prey,Common,Tac,25,25,25,1.25x Critical Rating from All Stats,,99a6eb2a-f362-48bb-ad02-765ea0f97a5e
Klingon,5,HoH'SuS Bird-of-Prey,Common,Tac,25,30,20,1.5x Critical Rating from TAC and ENG,,331fbfcc-b961-4e40-be83-60f9ead4c4fe
Klingon,5,Qin Heavy Raptor,Common,Tac,22,38,15,+10 SCI per EngShip,,c9305e5f-5b2f-48ec-aee2-0cfda3796820
Klingon,5,Scourge Destroyer Retrofit,Common,Tac,17,37,21,+10 TAC per SciShip,,0cc13aa8-4390-4286-afcb-99a9f6ae0d06
Klingon,5,Somraw Raptor Retrofit,Common,Tac,26,34,15,+10 SCI per SciShip,,8d27efb5-f80d-4829-8037-853894d35fd9
Klingon,5,Vo'quv Carrier,Common,Sci,15,12,48,+8 SCI per Any Ship,,e0c8581a-5097-4c25-9904-59903ae75d1b
Klingon,5,Mirror Negh'Var Battle Cruiser,Uncommon,Eng,36,30,17,+3 ENG and TAC per SciShip,,ee0b5a72-158d-4dce-b612-b2010f88a911
Klingon,5,Mirror Vor'cha Battle Cruiser Retrofit,Uncommon,Eng,38,19,26,+8 ENG and SCI per TacShip,,bd634085-17d2-434f-8b31-9435a8f450ee
Klingon,5,Mirror Ki'tang Bird-of-Prey Retrofit,Uncommon,Tac,27,28,28,+8 TAC per EngShip or SciShip,,4ff02a5f-f81b-4552-8ba6-c710bc8ad105
Klingon,5,Mirror Qin Heavy Raptor,Uncommon,Tac,25,42,16,+10 SCI per TacShip,,eec59620-204d-4d41-a7cf-4afb528ad3fc
Klingon,5,Mirror Somraw Raptor Retrofit,Uncommon,Tac,16,42,25,+10 ENG per EngShip,,976d4b35-2b02-4c31-acdc-cd1ad65ffd68
Klingon,5,Mirror Vo'Quv Carrier,Uncommon,Sci,50,16,17,+20 SCI and TAC when Alone,,2f34b753-03f7-41ac-8015-37f50f613bf0
Klingon,5,Marauder Flight Deck Cruiser,Rare,Eng,45,15,30,+8 TAC and SCI per EngShip,,9776e1ee-988f-4f4a-972a-d90a0349a94f
Klingon,5,Mogh Battle Cruiser,Rare,Eng,32,42,16,+10 SCI per SciShip,,84f6ded4-2e59-412e-945d-304de71febe4
Klingon,5,B'rel Bird-of-Prey Retrofit,Rare,Tac,28,34,28,+10 TAC per SciShip,,0389dcef-dcc7-4c02-8874-06157c77c910
Klingon,5,Guramba Siege Destroyer,Rare,Tac,27,45,18,+8 ENG and SCI per TacShip,,2bae175c-ecb4-49e8-b421-870cf609de27
Klingon,5,Peghqu' Heavy Destroyer,Rare,Tac,26,44,20,+8 SCI per SciShip or EngShip,,a3fc309e-8419-4ec2-ad06-c3d35c18270d
Klingon,5,Kar'Fi Battle Carrier,Rare,Sci,18,30,42,+15 All Stats when Alone,,193d3ac7-0253-4f70-89a2-942b60703de8
Klingon,5,Nov Dyson Science Destroyer,Rare,Sci,12,28,50,Ignores +/- SCI from Events,,5b04c827-75b2-4644-8d34-7f3a5cf9d7a0
Klingon,5,Varanus Support Vessel,Rare,Sci,22,14,54,+8 ENG and TAC per SciShip,,9839849f-ecd0-4b7d-9bac-9467c3a5de0d
Klingon,5,Bortasqu' Command Cruiser,Very Rare,Eng,47,28,23,+35 SCI when Alone,,ed59981e-e7ab-4555-9be0-9abe4ff128a4
Klingon,5,Bortasqu' Tactical Cruiser,Very Rare,Eng,47,33,18,+35 TAC when Alone,,2490dc6b-0aa1-4179-80d4-a93809586628
Klingon,5,Bortasqu' War Cruiser,Very Rare,Eng,52,28,18,+35 ENG when Alone,,6f359764-2e9e-4c70-a7e4-17351b5001ff
Klingon,5,Fleet Corsair Flight Deck Cruiser Retrofit,Very Rare,Eng,55,15,28,+10 ENG per TacShip,,52e9e342-0aaf-4959-a8f1-0fbd3b0c99a3
Klingon,5,Fleet K't'inga Battle Cruiser Retrofit,Very Rare,Eng,46,31,21,+10 ENG per EngShip,,1ae8eeea-a37b-4953-80c4-b36b71bf1db1
Klingon,5,Fleet Kamarag Battle Cruiser Retrofit,Very Rare,Eng,40,31,27,+8 SCI and TAC per TacShip,,74ace0c1-c054-45c9-b142-116c8a22e4c8
Klingon,5,Fleet Mogh Battle Cruiser,Very Rare,Eng,46,34,18,+5 SCI per TacShip,,c9694769-83fa-4254-a5e2-86fd419a076b
Klingon,5,Fleet Negh'Var Battle Cruiser,Very Rare,Eng,54,23,21,-10% Maintenance per SciShip and TacShip,,de47f475-54ba-4051-8151-f776e18dd225
Klingon,5,Fleet Vor'cha Battle Cruiser Retrofit,Very Rare,Eng,44,37,17,-5% Maintenance per Any Ship,,c4222dfc-f15a-4be1-841f-db8e087f71fd
Klingon,5,Fleet B'rel Bird-of-Prey Retrofit,Very Rare,Tac,31,36,31,1.25x Critical Rating from All Stats,,219640f5-977a-4037-87a6-2761a673f06f
Klingon,5,Fleet HoH'SuS Bird-of-Prey,Very Rare,Tac,27,48,23,+8 TAC per SciShip or TacShip,,62870e32-9f86-4da1-8bc4-a51edd0410a8
Klingon,5,Fleet Norgh Bird-of-Prey Retrofit,Very Rare,Tac,33,34,31,-5% Maintenance per Any Ship,,8e6e2649-1b97-41e4-b2e2-72b291805fd0
Klingon,5,Fleet Peghqu' Destroyer,Very Rare,Tac,20,48,30,+20 SCI and TAC when Alone,,676f3858-9e33-4231-8618-c7b9b3bab56b
Klingon,5,Fleet Qin Heavy Raptor,Very Rare,Tac,26,50,22,+8 ENG and SCI per EngShip,,70546247-a70a-4691-949e-e32053190f64
Klingon,5,Fleet Scourge Destroyer Retrofit,Very Rare,Tac,21,50,27,1.5x Critical Rating from ENG and SCI,,680398fd-f943-4c55-bc18-4a368dc6b877
Klingon,5,Fleet Somraw Raptor Retrofit,Very Rare,Tac,32,44,22,+10 SCI per SciShip,,b94673ed-f11e-485c-bfc4-881d0719bf50
Klingon,5,Chontay Class Science Destroyer,Very Rare,Sci,12,38,48,+35 TAC when Alone,,49dd03ec-1027-4bce-8572-db1ff83f1100
Klingon,5,Fleet Kar'Fi Battle Carrier,Very Rare,Sci,20,30,48,+8 ENG and TAC per TacShip,,83253ca9-a0fa-4b7d-80dc-c54d0c336cc6
Klingon,5,Fleet Vo'Quv Carrier,Very Rare,Sci,24,17,57,+8 ENG and TAC per SciShip,,9cbed815-31cb-4224-8f87-cf17f758dae3
Klingon,5,MoQ Class Science Destroyer,Very Rare,Sci,18,32,48,+35 ENG when Alone,,393383c1-c969-470e-bc4a-4b31850c249c
Klingon,5,Ta'Sub Class Science Destroyer,Very Rare,Sci,12,32,54,+35 SCI when Alone,,fcc5f489-c312-4273-9fea-627f436e2025
Klingon,5,Varanus Fleet Support Vessel,Very Rare,Sci,25,19,54,+10 TAC per SciShip,,9614d2f9-d032-4bfb-bd66-d0cf9d0b2514
Klingon,5,Krenn Temporal Destroyer,Ultra Rare,Tac,23,59,23,+20 TAC and ENG when Alone,,c3d32e0a-e4ef-420e-a453-d4218cc8e811
Klingon,5,Korath Temporal Science Vessel,Ultra Rare,Sci,23,23,59,2.5x Critical Rating from SCI,,0b004b75-a221-47ae-94f3-87b49850bfc5
Klingon,6,Kurak Battlecruiser (T6),Rare,Eng,50,37,21,-25% Maintenance per TacShip,Emergency Weapon Cycle,9c7c407a-316d-4b12-b596-8f94001688ed
Klingon,6,Negh'Tev Heavy Battle Cruiser (T6),Rare,Eng,51,32,25,+8 SCI and TAC per TacShip,Explosive Polarity Shift,64c66cfa-aed2-4aa4-be80-db3789c68f20
Klingon,6,Orion Blackguard Flight-Deck Assault Cruiser (T6),Rare,Eng,53,38,17,+10 ENG per TacShip,Majority - Minority,1692397a-45ab-4c23-8be3-aad3c984fb3b
Klingon,6,QeHpu' Advanced Light Battlecruiser (T6),Rare,Eng,55,31,22,2.5x Critical Rating from ENG,Evasion Specialist,237a8c8f-80d1-437e-afb7-15f783ead249
Klingon,6,Qib Intel Battle Cruiser (T6),Rare,Eng,54,37,17,+10 SCI per EngShip,Advanced Firing Solutions,010d0006-1d63-44e9-8a9a-a4f7acbd2be2
Klingon,6,Qoj Command Dreadnought Cruiser (T6),Rare,Eng,50,29,29,-25% Maintenance per EngShip,Unified Engineering,cf71bc0d-573c-4210-a942-d65d53cf3abd
Klingon,6,Qugh Miracle Worker Battlecruiser (T6),Rare,Eng,50,43,15,+8 ENG and TAC per EngShip,Entwined Tactical Matrices,0ded536c-db11-4b8d-b20b-d129fdc9f7c4
Klingon,6,Vor'ral Support Battlecruiser (T6),Rare,Eng,62,27,19,-25% Maintenance per EngShip,History Will Remember,32a578db-8905-4aa9-aaa9-9368521f0dc6
Klingon,6,Chargh Temporal Warship (T6),Rare,Tac,20,58,30,+10 TAC per SciShip,Legacy Of Qo'noS,51689232-8949-4b0d-932b-c0291646ab73
Klingon,6,Duvqu' Heavy Destroyer (T6),Rare,Tac,23,52,33,-25% Maintenance per SciShip,Weapon System Synergy,01904588-057b-4439-8062-79fb42ea9ec1
Klingon,6,Ferasan Slithus Escort (T6),Rare,Tac,23,49,36,+10 TAC per EngShip,Hit And Run,0a4d6bc1-914b-41aa-81d1-9c18dd9620e0
Klingon,6,Kolasi Siege Destroyer (T6),Rare,Tac,32,53,23,+15 All Stats when Alone,Subsystem Redundancies,aca9b4e8-4707-4f34-9ac3-80cf9f28473e
Klingon,6,Kor Bird-of-Prey (T6),Rare,Tac,35,38,35,2.5x Critical Rating from TAC,Withering Barrage,eead4100-b1d0-4831-afc0-f8f45ea59ef3
Klingon,6,M'Chla Bird-of-Prey Refit (T6),Rare,Tac,33,54,21,+35 TAC when Alone,Withering Barrage,2ef88dea-f20c-471c-9ba8-b1c3ad24d7d5
Klingon,6,M'Chla Pilot Bird-of-Prey (T6),Rare,Tac,28,58,26,+8 ENG and SCI per TacShip,Strike from Shadows,d7b2f8da-10a5-4b13-b7e6-18df69be7197
Klingon,6,Mat'Ha Raptor (T6),Rare,Tac,30,58,20,+10 TAC per EngShip,Overwhelming Force,7b5d3e94-1459-449d-a8c6-23919709f437
Klingon,6,Qa'Tel Flight Deck Raptor (T6),Rare,Tac,29,54,25,+8 SCI per EngShip or TacShip,Coordinated Assault,f6a087a7-02d8-4348-b3be-fb8dc1c5ee39
Klingon,6,Recon Raptor (T6),Rare,Tac,19,52,37,+10 SCI per TacShip,Jubilant Cadence,33eddf49-e05e-4f5a-9f26-fc44a60c9282
Klingon,6,Sech Strike Wing Escort (T6),Rare,Tac,26,50,32,+10 TAC per SciShip,Target That Explosion,3140fbdf-accd-44e4-96d1-edd6cfc27b21
Klingon,6,Batlh Intel Science Vessel (T6),Rare,Sci,28,28,52,+10 SCI per SciShip,Spore-infused Anomalies,9290987d-945e-45e1-b445-012c23bd159a
Klingon,6,Naj'sov Research Vessel (T6),Rare,Sci,31,20,57,+8 SCI per EngShip or TacShip,Tachyon Dispersal,6e09a296-8299-4e5f-af7b-f14ae2955b72
Klingon,6,Vo'Devwl Support Carrier (T6),Rare,Sci,26,26,55,-25% Maintenance per SciShip,Relaunch And Repair,5d92a349-90f0-47bd-8cbf-446751482f9d
Klingon,6,An'quat Command Battle Cruiser (T6),Very Rare,Eng,77,20,20,+35 ENG when Alone,Improved Brace For Impact,882dc230-c89b-459d-8b2e-f2218e480a84
Klingon,6,Antaak Science Miracle Worker Cruiser (T6),Very Rare,Eng,57,26,34,+20 TAC and ENG when Alone,Photonic Boarding Party,04e3f80b-3c8b-4557-96e9-d57e8952d825
Klingon,6,Fleet Mogh Battlecruiser (T6),Very Rare,Eng,55,39,23,+8 ENG per Any Ship,,ae7196ef-1d01-4344-8a6a-934c77546fda
Klingon,6,Fleet Negh'var Heavy Battle Cruiser (T6),Very Rare,Eng,55,35,27,+8 TAC per Any Ship,,a2e7cec8-1856-4ab7-9004-7b06c862be14
Klingon,6,Fleet Orion Blackguard Flight-Deck Assault Cruiser (T6),Very Rare,Eng,57,41,19,+8 ENG per TacShip or SciShip,,f6756d64-4f02-4f7f-b333-eb3c8a8847be
Klingon,6,Fleet QeHpu' Advanced Light Battlecruiser (T6),Very Rare,Eng,59,34,24,2x Critical Rating from Events,,94b1b449-bc45-41e1-8768-5de3c3ee958c
Klingon,6,Fleet Qib Intel Battle Cruiser (T6),Very Rare,Eng,59,39,19,+8 SCI and TAC per EngShip,,1e8d0bf0-cc8f-4f77-a002-beb85a36b548
Klingon,6,Fleet Qoj Command Dreadnought Cruiser (T6),Very Rare,Eng,51,34,32,+8 ENG per TacShip or SciShip,,bf7e47e1-4608-49a0-90a0-0f4c774a2338
Klingon,6,Fleet Qugh Miracle Worker Battlecruiser (T6),Very Rare,Eng,54,48,15,+35 ENG when Alone,,b548cf07-73e6-458e-aa00-24ba7132d1dd
Klingon,6,Fleet Support Battlecruiser (T6),Very Rare,Eng,67,29,21,-10% Maintenance per TacShip or SciShip,,b59619b4-182c-4ec7-84cb-ea440954b006
Klingon,6,Gorkon Science Battlecruiser (T6),Very Rare,Eng,54,36,27,+10 SCI per EngShip,Checkmate,4c23c265-43b8-4ee4-ae85-5dfbee5eff4b
Klingon,6,Kahless War Battlecruiser (T6),Very Rare,Eng,64,34,19,+10 ENG per TacShip,Adaptive Hull Plating,e1d02fbf-aeaa-4a37-8382-6d5365108c6e
Klingon,6,Klinzhai Command Battle Cruiser (T6),Very Rare,Eng,73,20,24,+35 SCI when Alone,Improved Tachyon Beam,e506da54-20dc-4bf8-821f-f9df7d008df1
Klingon,6,Klothos Tactical Miracle Worker Cruiser (T6),Very Rare,Eng,57,34,26,+20 SCI and ENG when Alone,Redirecting Arrays,3c295aa2-6a2c-4061-bb6f-36023c2ec4a7
Klingon,6,Legendary D7 Intel Battlecruiser (T6),Very Rare,Eng,56,43,26,2x Critical Rating from ENG and TAC,Built To Last,862dafe5-edeb-463a-a15a-3ccb56b76679
Klingon,6,Legendary Vor'cha Command Support Battlecruiser (T6),Very Rare,Eng,56,39,22,+10 ENG per EngShip,History Will Remember,71e9c034-3433-4804-acc4-c74a65484787
Klingon,6,Martok Tactical Battlecruiser (T6),Very Rare,Eng,48,46,23,+10 TAC per SciShip,Super Charged Weapons,1853fe1c-dbca-4860-bf30-91ccc7f934f3
Klingon,6,Mur'Eq Operations Miracle Worker Cruiser (T6),Very Rare,Eng,65,26,26,+20 TAC and SCI when Alone,Stay At Your Posts,1ae395d4-17aa-45c2-9248-01e14d8073e2
Klingon,6,Ty'Gokor Command Battle Cruiser (T6),Very Rare,Eng,73,24,20,+35 TAC when Alone,All Hands On Deck,92659c4b-ad54-4400-954a-d6aa7e5ba66e
Klingon,6,Fleet B'rel Bird-of-Prey (T6),Very Rare,Tac,37,43,37,Ignores +/- TAC from Events,,2ac5a367-f685-4e41-ba2d-b124f111422c
Klingon,6,Fleet Chargh Temporal Warship (T6),Very Rare,Tac,21,59,37,+10 SCI per TacShip,,8e090e05-046e-494b-b74f-5ce8caee7e10
Klingon,6,Fleet Duvqu' Heavy Destroyer (T6),Very Rare,Tac,25,57,35,+8 SCI per Any Ship,,5eee521e-578a-41d5-b5a5-895e9053e267
Klingon,6,Fleet Ferasan Slithus Escort (T6),Very Rare,Tac,23,57,37,2.5x Critical Rating from TAC,,2dcd50c8-a6e7-4321-89e9-5e179923a2fb
Klingon,6,Fleet Guramba Siege Destroyer (T6),Very Rare,Tac,35,57,25,2x Critical Rating from Events,,4587a975-7464-4c73-8d72-9bb0dbd9bbac
Klingon,6,Fleet M'Chla Pilot Bird-of-Prey (T6),Very Rare,Tac,28,63,26,+35 TAC when Alone,,48c7face-2b17-445d-a6b4-3752cb9d0aa9
Klingon,6,Fleet Mat'Ha Raptor (T6),Very Rare,Tac,35,60,22,+8 ENG and SCI per TacShip,,bffa798f-0614-4d82-87e2-26b7d42fa07d
Klingon,6,Fleet Qin Flight Deck Raptor (T6),Very Rare,Tac,31,59,27,+5 SCI and ENG per EngShip or TacShip,,d85bd4f1-cd35-48b5-9b0f-2f616c8f916d
Klingon,6,Fleet Recon Raptor (T6),Very Rare,Tac,20,58,39,+35 SCI when Alone,,04875a3c-673a-483d-a8e6-08cee9b4f0b8
Klingon,6,Fleet Sech Strike Wing Escort (T6),Very Rare,Tac,30,50,37,+8 TAC per TacShip or SciShip,,2ffd6955-db66-4863-8f19-93b306882a32
Klingon,6,Klavek Class Pilot Raptor (T6),Very Rare,Tac,22,66,29,+35 SCI when Alone,Subwarp Sheath,adcec02d-acdd-4f39-9249-f016375f30e2
Klingon,6,Kortar Class Pilot Raptor (T6),Very Rare,Tac,22,70,25,+35 TAC when Alone,Stay On Target,4fda5f07-a6c1-4be7-90e4-fb7663dcc8da
Klingon,6,Legendary B'rel Pilot Bird-of-Prey (T6),Very Rare,Tac,37,58,22,+35 TAC when Alone,Withering Barrage,f0be7ed5-f396-4db9-9888-5dbba043bf77
Klingon,6,Lethean Nemosin Pilot Escort (T6),Very Rare,Tac,26,55,36,-25% Maintenance per SciShip,Improved Gravity Well,4c9e4b94-f127-46f9-bf65-67bdbca06fb9
Klingon,6,Lethean Oniros Pilot Escort (T6),Very Rare,Tac,36,55,26,-25% Maintenance per EngShip,Painful Memories,648c3782-ea05-48b3-83f2-6ed1528da999
Klingon,6,Lethean Xechas Pilot Escort (T6),Very Rare,Tac,26,65,26,-25% Maintenance per TacShip,Promise Of Ferocity,876f3d8d-6ce7-4cda-88fb-41cc145d91a9
Klingon,6,Qui'Tu Class Pilot Raptor (T6),Very Rare,Tac,26,66,25,+35 ENG when Alone,Structural Integrity Overcharge,6044322c-0e18-47e8-ab85-122d60d84156
Klingon,6,Ahgamas Multi-Mission Surveillance Vessel (T6),Very Rare,Sci,28,35,54,Ignores +/- SCI from Events,Charged Particle Reaction,9124348a-9263-4ca6-814f-abd351316e45
Klingon,6,Fleet Batlh Intel Science Vessel (T6),Very Rare,Sci,29,29,59,+35 SCI when Alone,,3d311c8a-b877-463a-9333-6e32daaebe0a
Klingon,6,Fleet Naj'sov Research Vessel (T6),Very Rare,Sci,39,20,58,2.5x Critical Rating from SCI,,bd13015d-c889-482f-8569-bbb767f7c83c
Klingon,6,Fleet Vo'Quv Carrier (T6),Very Rare,Sci,29,29,60,+8 SCI per ANY Ship (Not Small Craft),,c4d6619c-aad1-4629-9f72-68212f530cb5
Klingon,6,Ihgomas Multi-Mission Strategic Vessel (T6),Very Rare,Sci,32,39,46,Ignores +/- ENG from Events,Exotic Particle Shielding,46574221-7b06-4d88-9ff2-de15513d051c
Klingon,6,Khaimas Multi-Mission Reconnaissance Vessel (T6),Very Rare,Sci,21,44,52,Ignores +/- TAC from Events,Heavy Tachyon Mine,e661b1d1-47b6-46e7-8888-d1f04516e3a0
Klingon,6,D7 Miracle Worker Flight Deck Carrier (T6),Ultra Rare,Eng,63,35,28,Ignores +/- ENG from Events,The Ruin Of Our Enemies,8c7bf7e0-7464-4aa7-b883-1b37487e42a5
Klingon,6,D7 Temporal Battlecruiser (T6),Ultra Rare,Eng,53,44,29,Ignores +/- ENG from Events,Built To Last,782d2e07-2931-4ce9-a7ce-efd90e5eae8c
Klingon,6,D9 Dreadnought Battlecruiser (T6),Ultra Rare,Eng,62,46,18,+15 All Stats when Alone,Catastrophic Overload,5a68953d-0795-4c82-bbd0-dbccc2a1c683
Klingon,6,Durgath Temporal Heavy Dreadnought Battlecruiser (T6),Ultra Rare,Eng,57,42,27,+20 TAC and ENG when Alone,Repair Mode,d6abeec6-f924-4b66-9cce-1bd59fa10072
Klingon,6,Na'Qjej Intel Battlecruiser (T6),Ultra Rare,Eng,59,48,19,+10 TAC per EngShip,Ceaseless Momentum,9ec11bfd-1f28-499e-82c4-519367fecfa0
Klingon,6,Chargh'poH Temporal Destroyer (T6),Ultra Rare,Tac,29,68,29,+8 TAC per EngShip or SciShip,1.21 Terrawatts,b4450584-68a2-4781-bbfc-014c27be1225
Klingon,6,Kelvin D7 Heavy Destroyer (T6),Ultra Rare,Tac,44,59,23,+20 ENG and TAC when Alone,Into The Fray,1c5ffd29-c1b8-4a3a-bb3c-ebec7e86ed52
Klingon,6,Sarcophagus Dreadnought Carrier (T6),Ultra Rare,Tac,41,53,32,Ignore +/- ENG from Events,Honored Dead,95d4710e-e996-42fa-9d2f-804e8fd54493
Klingon,6,Qul'poH Temporal Science Vessel (T6),Ultra Rare,Sci,29,29,68,Ignores +/- SCI from Events,Out of Time,69c200f8-e406-438f-a579-e0ceb94ae7c5
Romulan,0,Kestrel Runabout,Common,Smc,2,2,2,-25% Maintenance per ANY Ship (Not Small Craft),,63cf52d0-7a05-48ca-b451-6f7e3be4d52a
Romulan,0,Tiercel Shuttle,Common,Smc,4,1,1,-25% Maintenance per ANY Ship (Not Small Craft),,1efc98eb-0124-487a-9655-1bfc1adcb355
Romulan,0,Commander's Gig,Rare,Smc,4,3,3,5x Critical Rating from ALL Stats,,73b65805-80fe-4bba-8f7e-989d68106165
Romulan,0,Scorpion Fighter,Rare,Smc,3,6,1,+10 ALL Stats per ANY Ship (Not Small Craft),,c43df499-93cf-4ab8-94d9-77f6703ea3ed
Romulan,1,T'Liss Light Warbird,Common,Tac,5,5,5,2x Critical Rating from Events,,8c41d312-9ad6-46b6-94e4-19cffc13b6a0
Romulan,1,T'Varo Light Warbird,Rare,Tac,6,7,5,1.25x Critical Rating from All Stats,,843eecea-9b1e-4bc4-a9e0-f08c7464c8ee
Romulan,2,Dhelan Warbird,Common,Tac,8,13,9,1.5x Critical Rating from ENG and SCI,,d590cbaa-322a-4ae4-83b2-7d5e5b1a8303
Romulan,2,Dhael Warbird,Rare,Tac,9,16,11,+8 ENG per SciShip or TacShip,,e3662c9a-0f69-47fd-8c16-fe4beb43b20f
Romulan,3,Mogai Heavy Warbird,Common,Tac,10,21,14,2.5x Critical Rating from TAC,,e0ab0581-a7a2-4882-8241-83d942c5b9f6
Romulan,3,Valdore Heavy Warbird,Rare,Tac,12,25,17,+8 ENG and SCI per TacShip,,77503ee7-0940-4bb4-a277-98fd8147165e
Romulan,4,D'deridex Warbird Battle Cruiser,Common,Eng,29,16,15,+20 SCI and TAC when Alone,,0bf9d5eb-5cff-4ef6-aa9b-5eda7da0dbc8
Romulan,4,Ar'kif Tactical Warbird,Common,Tac,14,32,14,+20 ENG and SCI when Alone,,8cce58a3-4a8d-4a2b-8357-c6a6d0bdeb4e
Romulan,4,D'ridthau Warbird Battlecruiser,Rare,Eng,35,19,18,2.5x Critical Rating from ENG,,470b7ef5-e3fb-40e5-bc6f-cc79d5d00033
Romulan,4,Ar'kala Tactical Warbird,Rare,Tac,17,38,17,2.5x Critical Rating from TAC,,1ca53230-7923-4273-8785-e6ab1680455f
Romulan,5,Ha'apax Advanced Warbird,Common,Eng,40,20,15,+8 SCI and TAC per EngShip,,6d245169-66f5-4423-9ce2-a0e9791d2788
Romulan,5,Ha'feh Assault Warbird,Common,Tac,18,44,13,+8 ENG and SCI per TacShip,,6714037f-fe47-4af8-b602-ec0b906ce4c6
Romulan,5,Ha'nom Guardian Warbird,Common,Sci,15,20,40,+8 ENG and TAC per SciShip,,89536d40-1bd1-4960-91f6-f80d3e050813
Romulan,5,Mirror Ha'apax Advanced Warbird,Uncommon,Eng,44,17,22,Ignores +/- ENG from Events,,eed7fa7d-8987-4bc3-8713-02229f3c2fa7
Romulan,5,Mirror Dhelan Warbird Retrofit,Uncommon,Tac,24,44,15,-25% Maintenance per EngShip,,87af5a40-f679-4a28-a42e-66e95f0fa0c8
Romulan,5,Mirror Ha'feh Assault Warbird,Uncommon,Tac,14,49,20,Ignores +/- TAC from Events,,497751ab-b9f0-4bbc-a435-95d4adecac5e
Romulan,5,Mirror Mogai Heavy Warbird Retrofit,Uncommon,Tac,13,42,28,-25% Maintenance per TacShip,,bef70efa-f2bb-44ce-8a70-d8cc5fa8eedc
Romulan,5,Mirror T'Varo Light Warbird Retrofit,Uncommon,Tac,15,47,21,-25% Maintenance per SciShip,,4736948c-7833-4c86-880b-ec925b5674fa
Romulan,5,Mirror Ha'nom Guardian Warbird,Uncommon,Sci,22,17,44,Ignores +/- SCI from Events,,0d103018-ccf4-4f10-b2d4-fc278591780b
Romulan,5,D'deridex Warbird Battle Cruiser Retrofit,Rare,Eng,36,30,24,+10 ENG per EngShip,,9d5c4de0-2316-49e5-942a-5fb032aa4b90
Romulan,5,Haakona Advanced Warbird,Rare,Eng,42,28,20,2.5x Critical Rating from Eng,,d718e35c-aa43-4810-9deb-c3ef69dd3757
Romulan,5,Ar'kif Tactical Carrier Warbird,Rare,Tac,20,50,20,-10% Maintenance per EngShip or SciShip,,27802d76-9089-4158-ae91-f07da73a3471
Romulan,5,Daeinos Heavy Destroyer Warbird,Rare,Tac,26,44,20,+8 SCI per SciShip or EngShip,,6fcd6c6a-d693-4b4f-9300-b51f940e5577
Romulan,5,Dhelan Warbird Retrofit,Rare,Tac,23,36,31,+8 SCI and TAC per EngShip,,dcdf08db-4488-490a-8dce-1201ef8d0c15
Romulan,5,Mogai Heavy Warbird Retrofit,Rare,Tac,32,46,12,+8 ENG and TAC per SciShip,,f867e1d8-e019-4d09-8de3-65e3d2dca30e
Romulan,5,T'varo Light Warbird Retrofit,Rare,Tac,27,36,27,+10 TAC per SciShip,,4ee189f0-8e17-4572-982f-bce45a9a59b1
Romulan,5,Aves Dyson Science Destroyer,Rare,Sci,12,28,50,Ignores +/- SCI from Events,,50f5735a-451c-430e-85a8-a2fbc2c34d53
Romulan,5,Fleet D'deridex Warbird Battlecruiser Retrofit,Very Rare,Eng,36,30,24,+15 All Stats when Alone,,613b182b-f373-4399-b416-bb2bd9e858d6
Romulan,5,Fleet Ha'apax Advanced Warbird,Very Rare,Eng,40,20,15,+8 SCI and TAC per EngShip,,e9101d77-e68a-422c-ac4a-31f8a5f65b14
Romulan,5,Falchion Dreadnought Warbird,Very Rare,Tac,28,48,22,+35 ENG when Alone,,fb236faf-ef28-4da3-91dd-ed5c1e255d37
Romulan,5,Fleet Ar'Kif Tactical Carrier Warbird Retrofit,Very Rare,Tac,22,54,22,1.5x Critical Rating from ENG and SCI,,e7180bee-7437-4020-a401-604b74a0a80d
Romulan,5,Fleet Daeinos Warbird Destroyer,Very Rare,Tac,26,44,20,+20 SCI and TAC when Alone,,92f82f98-38ad-44ae-84ff-d2793ff4bef5
Romulan,5,Fleet Dhelan Warbird Retrofit,Very Rare,Tac,24,20,34,+10 SCI per TacShip,,e477ea86-11bb-4bc8-b287-1bfadca30a02
Romulan,5,Fleet Ha'feh Assault Warbird,Very Rare,Tac,26,53,19,+8 ENG and SCI per TacShip,,925f092f-29f6-4828-9717-398ff6047373
Romulan,5,Fleet Mogai Heavy Warbird Retrofit,Very Rare,Tac,34,50,14,+10 ENG per TacShip,,1d5ad599-9635-431a-8da6-8749a2be8fce
Romulan,5,Fleet T'Varo Light Warbird Retrofit,Very Rare,Tac,29,40,29,+10 TAC per TacShip,,4acc6b1b-ab56-4786-984a-b518c575a85c
Romulan,5,Scimitar Dreadnought Warbird,Very Rare,Tac,22,54,22,+35 TAC when Alone,,8e5f65f4-7166-4f6e-8ee1-f38960473d6c
Romulan,5,Tulwar Dreadnought Warbird,Very Rare,Tac,22,48,28,+35 SCI when Alone,,a350460f-72c2-4803-a9ee-16c8af0e2a72
Romulan,5,Caprimul Class Science Destroyer,Very Rare,Sci,12,32,54,+35 SCI when Alone,,809a3754-647c-460b-9d9e-3b74d2a1c80c
Romulan,5,Fleet Ha'nom Guardian Warbird,Very Rare,Sci,19,26,53,+8 ENG and TAC per SciShip,,12932c58-2199-4f00-a60b-c4f08eda551e
Romulan,5,Harpia Class Science Destroyer,Very Rare,Sci,12,38,48,+35 TAC when Alone,,d8adcdf8-c3ed-4ed0-a88c-6df04853c94d
Romulan,5,Tyton Class Science Destroyer,Very Rare,Sci,16,32,48,+35 ENG when Alone,,fe246e1f-4230-4c31-8a33-d434167930d3
Romulan,5,Talvath Temporal Destroyer,Ultra Rare,Tac,23,59,23,+35 TAC and ENG when Alone,,1f4c9f45-228c-4e3a-93f3-5c37f1a0f192
Romulan,5,R'Mor Temporal Science Vessel,Ultra Rare,Sci,23,23,59,2.5x Critical Rating from SCI,,d5e0f1e8-68b9-4e57-8f48-eb1aa6cc06dd
Romulan,6,Aelahl Light Warbird Battlecruiser (T6),Rare,Eng,53,36,19,+15 All Stats when Alone,Warp Shadow Decoy,2a047684-053e-41c4-832e-8bc26ae2d997
Romulan,6,D'Khellra Warbird Battlecruiser (T6),Rare,Eng,52,28,28,+8 SCI and TAC per TacShip,Explosive Polarity Shift,ccd841e6-963f-49dc-ae30-f3778ac5b82c
Romulan,6,Deleth Advanced Light Warbird Battlecruiser (T6),Rare,Eng,47,36,25,2.5x Critical Rating from ENG,Evasion Specialist,9f6efc6c-5328-48d0-9160-9319d562f5d9
Romulan,6,Kara Advanced Warbird (T6),Rare,Eng,58,28,22,+15 All Stats when Alone,Subsystem Redundancies,be17601d-acbf-4dc4-98ed-f0793f2695f6
Romulan,6,Suliban Silik Flight-Deck Assault Cruiser (T6),Rare,Eng,53,38,17,+10 ENG per TacShip,Majority - Minority,0fb1c9ac-cdf5-46a3-810d-2d97c74e2993
Romulan,6,Dinaes Warbird Destroyer (T6),Rare,Tac,31,52,25,-25% Maintenance per SciShip,Weapon System Synergy,2f506b14-5e5f-4f66-8671-61ac2a853058
Romulan,6,Faeht Intel Warbird (T6),Rare,Tac,19,62,27,+10 ENG per TacShip,Tactical Retreat,22fa7cfe-7f18-4c6a-b353-583d1b838831
Romulan,6,Hathos Warbird (T6),Rare,Tac,23,49,36,+10 TAC per EngShip,Hit And Run,9b28efca-6763-4108-9d9d-bbfb1bc2e11e
Romulan,6,Jhu'ael Tactical Carrier Warbird (T6),Rare,Tac,25,58,25,+8 SCI per EngShip or TacShip,Coordinated Assault,65366d5d-c3c9-4b7c-af69-f4b5a79895cf
Romulan,6,Kholhr Temporal Warbird (T6),Rare,Tac,20,58,30,+10 TAC per SciShip,Pride Of Mol'Rihan,0bb87528-9df0-4596-be75-27e9df14e68a
Romulan,6,Malem Light Warbird (T6),Rare,Tac,31,46,31,-25% Maintenance per TacShip,Withering Barrage,db1f3bba-47ab-4501-aaa0-7e3cec101181
Romulan,6,Morrigu Heavy Warbird (T6),Rare,Tac,38,55,15,2.5x Critical Rating from SCI,Emergency Weapon Cycle,370ea062-9c25-4784-aca7-35b92ec3fc8e
Romulan,6,Rahhae Recon Warbird (T6),Rare,Tac,19,52,37,+35 SCI when Alone,Jubilant Cadence,5a5b21ac-4304-45b2-b757-c68c2ef90c63
Romulan,6,Laeosa Research Vessel (T6),Rare,Sci,37,22,55,+8 SCI per EngShip or TacShip,Tachyon Dispersal,b3a6351d-e758-4c69-bd6d-92cc14b47d04
Romulan,6,Ra'nodaire Support Carrier Warbird (T6),Rare,Sci,26,26,55,-25% Maintenance per SciShip,Relaunch and Repair,c8faf373-2c39-42d1-bf81-ccae5d3dbcd2
Romulan,6,Baratan Command Battlecruiser Warbird (T6),Very Rare,Eng,77,20,20,+35 ENG when Alone,Improved Brace For Impact,7606b8b4-dcd0-4a8b-8b14-7c967b257052
Romulan,6,Deihu Command Battlecruiser Warbird (T6),Very Rare,Eng,73,20,24,+35 SCI when Alone,Improved Tachyon Beam,21920542-0e2e-4d11-9ba9-34f6ea449715
Romulan,6,Fleet Aelahl Light Warbird Battlecruiser (T6),Very Rare,Eng,55,41,21,+8 ENG per Any Ship,,4d085de9-9267-4774-bda3-08e7bcaa8cf3
Romulan,6,Fleet D'Khellra Warbird Battlecruiser (T6),Very Rare,Eng,54,33,30,2.5x Critical Rating from ENG,,e1f4524f-edc5-4765-af9e-1425fa38457b
Romulan,6,Fleet Deleth Advanced Light Warbird Battlecruiser (T6),Very Rare,Eng,51,39,27,2x Critical Rating from Events,,420bef60-6178-4709-9008-66eb546d7f22
Romulan,6,Fleet Ha'apax Advanced Warbird (T6),Very Rare,Eng,63,30,24,+8 TAC per Any Ship,,82f58b17-1e91-4f52-978e-215fd6fcda5f
Romulan,6,Fleet Suliban Silik Flight-Deck Assault Cruiser (T6),Very Rare,Eng,57,41,19,+8 ENG per TacShip or SciShip,,fc2a007e-4325-4fb4-92c8-95d0daa3c7eb
Romulan,6,Legendary D'deridex Miracle Worker Warbird Battlecruiser (T6),Very Rare,Eng,54,39,24,+10 ENG per TacShip,Explosive Polarity Shift,6369f634-fba7-42ee-bba9-0df420e196da
Romulan,6,Nijil Operations Miracle Worker Warbird (T6),Very Rare,Eng,65,26,26,+20 TAC and SCI when Alone,Stay At Your Posts,f2d08953-0341-4946-b833-3ab3274f374e
Romulan,6,Tebok Tactical Miracle Worker Warbird (T6),Very Rare,Eng,57,34,26,+20 SCI and ENG when Alone,Redirecting Arrays,79a50816-3593-4bdd-b6dc-025c4c05f84c
Romulan,6,Varel Science Miracle Worker Warbird (T6),Very Rare,Eng,57,26,34,+20 TAC and ENG when Alone,Photonic Boarding Party,4ca6304b-7e10-466a-9cef-26436da7acf9
Romulan,6,Vastam Command Battlecruiser Warbird (T6),Very Rare,Eng,73,24,20,+35 TAC when Alone,All Hands On Deck,4149d962-4f8a-4b02-8c5f-b4fc91952cdf
Romulan,6,Dewan Dynnasia Pilot Escort (T6),Very Rare,Tac,36,55,26,-25% Maintenance per EngShip,Painful Memories,0c789724-f7d0-498c-beb2-571b8c1a4a5b
Romulan,6,Dewan Ikkabar Pilot Escort (T6),Very Rare,Tac,26,55,36,-25% Maintenance per SciShip,Improved Gravity Well,2a72a60b-d62d-4ea7-b355-24e639b6eeba
Romulan,6,Dewan Vandros Pilot Escort (T6),Very Rare,Tac,26,65,26,-25% Maintenance per TacShip,Promise Of Ferocity,5f1d2f65-21f9-4e29-aa9a-147e33dd4848
Romulan,6,Flambard Science Dreadnought Warbird (T6),Very Rare,Tac,30,42,45,+10 SCI per EngShip,Checkmate,19b2f688-0482-4da3-807b-a76b7ee9baed
Romulan,6,Fleet Ar'kif Tactical Carrier Warbird (T6),Very Rare,Tac,28,62,27,+5 SCI and ENG per EngShip or TacShip,,6e95f04e-9734-4a1b-954a-bb9ab957d5da
Romulan,6,Fleet Dhelan Warbird (T6),Very Rare,Tac,23,57,37,2.5x Critical Rating from TAC,,95c10538-c0b9-48a1-aab6-2cb69e28e292
Romulan,6,Fleet Dinaes Warbird Destroyer (T6),Very Rare,Tac,24,56,27,+8 SCI per Any Ship,,5f990758-1704-45d6-89ec-1e20354c4760
Romulan,6,Fleet Faeht Intel Warbird (T6),Very Rare,Tac,21,66,30,+8 ENG and SCI per TacShip,,1157d913-b00f-40c9-845b-4a58ba85d57e
Romulan,6,Fleet Kholhr Temporal Warbird (T6),Very Rare,Tac,21,59,37,+10 SCI per TacShip,,0712b023-b50d-43d1-af6f-482c646aa1e5
Romulan,6,Fleet Mogai Heavy Warbird (T6),Very Rare,Tac,41,59,17,+8 TAC and ENG per SciShip,,55c8feb0-92fc-4fd5-9ee0-38237825179b
Romulan,6,Fleet Rahhae Recon Warbird (T6),Very Rare,Tac,20,58,39,+10 SCI per TacShip,,616c1e38-43f7-4a85-ae06-8a445a5db6ee
Romulan,6,Fleet T'varo Light Warbird (T6),Very Rare,Tac,34,49,34,1.5x Critical Rating from ENG and SCI,,05e7dbce-9c76-4169-9a2d-3e6236ec69fb
Romulan,6,Jaeih Class Pilot Warbird (T6),Very Rare,Tac,22,66,29,+35 SCI when Alone,Subwarp Sheath,6542b2fa-a23e-4474-8fb9-d90fba53d51d
Romulan,6,Khaiell Class Pilot Warbird (T6),Very Rare,Tac,26,66,25,+35 ENG when Alone,Structural Integrity Overcharge,356ce358-0ac3-43bb-a727-29162a1a7978
Romulan,6,Khopesh Tactical Dreadnought Warbird (T6),Very Rare,Tac,30,60,27,+10 TAC per SciShip,Super Charged Weapons,e5c17961-2bc4-43e6-8c45-6d6dddc75123
Romulan,6,Legendary Scimitar Intel Dreadnought Warbird (T6),Very Rare,Tac,39,54,24,+10 TAC per EngShip,Checkmate,08f1fc78-07f7-4e90-bcdd-139cea236a27
Romulan,6,Legendary T'liss Light Intel Warbird (T6),Very Rare,Tac,29,51,37,+35 TAC when Alone,Withering Barrage,724069a6-417d-474d-b9a0-eafcbcdb26d5
Romulan,6,Okhala Class Pilot Warbird (T6),Very Rare,Tac,22,70,25,+35 TAC when Alone,Stay On Target,332c9ffa-3e85-4df3-8b37-c9b35b8ad316
Romulan,6,Shamshir Operations Dreadnought Warbird (T6),Very Rare,Tac,44,48,25,+10 ENG per TacShip,Adaptive Hull Plating,16b56dec-9528-4987-bed3-7c092db1f217
Romulan,6,Fleet Laeosa Research Warbird (T6),Very Rare,Sci,37,24,55,2.5x Critical Rating from SCI,,6aa4dd0e-cfb1-4713-a788-10b7503134c8
Romulan,6,Fleet Ra'nodaire Support Carrier Warbird (T6),Very Rare,Sci,29,29,60,+8 SCI per ANY Ship (Not Small Craft),,d672f5c9-8700-4284-a50c-ee9b9c1e43df
Romulan,6,Galas Surveillance Explorer Warbird (T6),Very Rare,Sci,28,35,54,Ignores +/- SCI from Events,Charged Particle Reaction,0ca154c6-57f2-4fa0-ba75-7efb408fb93d
Romulan,6,Surhuelh Reconnaissance Explorer Warbird (T6),Very Rare,Sci,21,44,52,Ignores +/- TAC from Events,Heavy Tachyon Mine,f851dcd8-04e3-4cfe-ba93-062b58491206
Romulan,6,Taenen Strategic Explorer Warbird (T6),Very Rare,Sci,32,39,46,Ignores +/- ENG from Events,Exotic Particle Shielding,748634ad-4b85-4cd0-b7f1-84615eaf7ed6
Romulan,6,Praetor Command Warbird Battlecruiser (T6),Ultra Rare,Eng,57,25,44,+6 TAC per ANY Ship (Not Small Craft),Test Them,575edbb3-35a3-4171-b515-a3ce1a1febdc
Romulan,6,Thrai Dreadnought Warbird (T6),Ultra Rare,Eng,57,49,20,+15 All Stats when Alone,Layered Shielding,91b4d388-b2eb-4745-bc5b-dcc300c9c915
Romulan,6,Valkis Temporal Heavy Dreadnought Warbird (T6),Ultra Rare,Eng,51,46,29,+20 TAC and ENG when Alone,Repair Mode,b1bfef90-c801-4764-9cfc-8d69b4597470
Romulan,6,Dhailkhina Command Strike Wing Warbird (T6),Ultra Rare,Tac,43,65,18,+10 TAC per TacShip,Commanded Singularities,9de16eb6-e6e0-4780-a5d4-f2e07d37141b
Romulan,6,T'liss Temporal Warbird (T6),Ultra Rare,Tac,35,52,39,Ignores +/- ENG from Events,Built To Last,cee6f976-bb85-4e42-8ed1-e296558c2d9a
Romulan,6,Tal'aura Temporal Destroyer (T6),Ultra Rare,Tac,29,68,29,+8 TAC per EngShip or SciShip,1.21 Terrawatts,0e5fb0b3-7bbf-445a-bc1a-54c4e32d1681
Romulan,6,Sui'Mor Temporal Science Vessel (T6),Ultra Rare,Sci,29,29,68,Ignores +/- SCI from Events,Out of Time,a52d4f8f-b48e-400d-a1fc-93dc7256d94f
Universal,0,Ferengi Na'Far Shuttle,Ultra Rare,Smc,6,4,4,-25% Maintenance per ANY Ship (Not Small Craft),,73cf5f40-c2bc-463a-8910-591fad11660b
Universal,0,Tholian Widow Fighter,Ultra Rare,Smc,1,8,5,+10 ALL Stats per ANY Ship (Not Small Craft),,14f23ccf-95a0-4e60-ba2f-f13af0a65e07
Universal,0,Vaadwaur Pythus Fighter,Ultra Rare,Smc,5,6,3,Ignores ALL Event Modifiers (Not Small Craft),,9961ca75-ffda-4eaa-96d0-d2a6f2c61aed
Universal,0,Voth Heavy Fighter,Ultra Rare,Smc,8,4,2,Ignores ALL Event Modifiers,,9562d3d5-0417-472e-97bd-758935d5b287
Universal,0,Phoenix Replica Smallcraft,Epic,Smc,7,5,4,Ignores ALL Event Modifiers,,edd27461-948a-40d0-a9b0-d8a61da6a71e
Universal,2,Tufli Freighter,Uncommon,Eng,13,10,10,2x Critical Rating from All Stats,,af5dd2f1-5287-4c27-ba45-e3d028b2bce6
Universal,2,Suliban Cell Ship,Uncommon,Tac,10,13,10,2x Critical Rating from All Stats,,40737726-970a-409a-83d5-1464221b68b1
Universal,4,Kobayashi Maru Freighter,Epic,Eng,43,17,30,+20 ALL per Any Ship (Not Small Craft),,9f9dcfdd-43db-47d9-b13e-290d86548b6c
Universal,5,Obelisk Carrier,Common,Eng,37,15,23,2x Critical Rating from Events,,aa386d87-0c4c-4e21-991b-4c8ad39dbb82
Universal,5,APU Cruiser,Uncommon,Eng,47,21,15,+10 SCI per EngShip,,a43687e2-2d8e-4e1b-b439-55b67c932f76
Universal,5,Malon Battlecruiser,Uncommon,Eng,45,18,20,+10 TAC per SciShip,,a8b362b7-7cf9-402b-9221-a8e41373f3f3
Universal,5,Kazon Heavy Raider,Uncommon,Tac,14,50,19,+10 ENG per TacShip,,9f31f48b-8bab-4568-9817-f94df47158c1
Universal,5,Nihydron Destroyer,Uncommon,Tac,21,47,15,2.5x Critical Rating from TAC,,b46257bc-e633-42f9-83c0-bfb03fb019f8
Universal,5,Sphere Builder Arehbes Destroyer,Uncommon,Tac,9,43,31,Ignores +/- TAC from Events,,f79ec266-5cfb-42b9-8d32-4ab59bfa4cd7
Universal,5,Tholian Meshweaver Escort,Uncommon,Tac,14,47,22,+8 SCI per EngShip or TacShip,,ec9f5d48-84b1-40bd-9bd2-50fcf1eef12f
Universal,5,Lukari N'kaam Scout Ship,Uncommon,Sci,16,31,36,2.5x Critical Rating from SCI,,c095352b-9b8d-48e4-8831-27872e04469e
Universal,5,Advanced Obelisk Carrier,Ultra Rare,Eng,53,21,31,2.5x Critical Rating from ENG,,6d098f31-a5f9-4b73-a2e3-22a555705d50
Universal,5,Cardassian Galor Class Cruiser,Ultra Rare,Eng,59,28,18,1.5x Critical Rating from SCI and TAC,,23f910a8-7bf2-4e1f-b148-121fdbd63938
Universal,5,Elachi Monbosh Battleship,Ultra Rare,Eng,52,39,14,+10 SCI per TacShip,,aad25f59-8f6e-4a38-a0a3-906f0289ea45
Universal,5,Ferengi D'Kora Marauder,Ultra Rare,Eng,51,31,23,+8 SCI and TAC per EngShip,,ff8f7227-5b54-4306-aa42-acbd941ae3e2
Universal,5,Hirogen Apex Heavy Battlecruiser,Ultra Rare,Eng,57,32,16,+10 SCI per TacShip,,2f8cd669-42d2-42ec-9bd1-6dff0db62f8e
Universal,5,Risian Luxury Cruiser,Ultra Rare,Eng,64,25,16,+8 ENG per SciShip or TacShip,,d03e5d68-9de3-4c37-935d-82327f0e9a2b
Universal,5,Tholian Recluse Carrier,Ultra Rare,Eng,44,21,40,+10 TAC per Tacship,,17f1e285-b832-473d-a9dd-25ac67e0553d
Universal,5,Undine Dromias Bio-Cruiser,Ultra Rare,Eng,51,29,25,2.5x Critical Rating from TAC,,105b68dc-5880-45cd-a20a-377cc1c766a4
Universal,5,Voth Bastion Flight-Deck Cruiser,Ultra Rare,Eng,54,24,27,2.5x Critical Rating from ENG,,efb63b4d-b9cf-4fda-aaa2-7fdd8896dba9
Universal,5,Voth Bulwark Dreadnought Cruiser,Ultra Rare,Eng,63,19,23,-5% Maintenance per Any Ship,,329e846b-0495-4e7a-9bf0-7b987b873cb8
Universal,5,Breen Chel Grett Warship,Ultra Rare,Tac,25,52,28,+8 ENG and SCI per TacShip,,95d0a38e-95a7-44bd-b8e9-417ebe331df4
Universal,5,Breen Plesh Brek Heavy Raider,Ultra Rare,Tac,18,63,24,+8 TAC per EngShip or SciShip,,549af821-f880-43b5-a356-138411843cdb
Universal,5,Elachi S'Golth Escort,Ultra Rare,Tac,18,51,36,2.5x Critical Rating from TAC,,afc6d85e-106e-404c-9c70-e940ea27a5b2
Universal,5,Hirogen Hunter Heavy Escort,Ultra Rare,Tac,35,51,19,+5 SCI per EngShip,,af41109e-9401-456d-9b5b-d23ec3fcd288
Universal,5,Jem'Hadar Attack Ship,Ultra Rare,Tac,29,68,8,-25% Maintenance per SciShip,,86c5609e-0552-410a-8b16-ccbb58a39a80
Universal,5,Jem'Hadar Dreadnought Carrier,Ultra Rare,Tac,44,45,16,+8 ENG per SciShip or TacShip,,1ea70ae1-a61b-4776-bc43-70f339b2f56b
Universal,5,Jem'Hadar Heavy Strike Wing Escort,Ultra Rare,Tac,38,51,16,+8 TAC per EngShip or SciShip,,b643a6e7-81c0-4074-b00e-2e45cfc5cdac
Universal,5,Risian corvette,Ultra Rare,Tac,33,51,21,+10 TAC per SciShip,,40158329-fd4c-4f97-b85e-b5ea386d6cc4
Universal,5,Tal Shiar Adapted Battle Cruiser,Ultra Rare,Tac,46,28,31,+15 All Stats when Alone,,b50ccfe1-1f04-4ce2-845a-c1fab276587b
Universal,5,Tal Shiar Adapted Destroyer,Ultra Rare,Tac,24,51,30,+20 ENG and SCI when Alone,,3b35e94c-b2f5-439d-8df1-ebe9d5326730
Universal,5,Undine Nicor Bio-Warship,Ultra Rare,Tac,20,56,29,2.5x Critical Rating from SCI,,d30bbde4-82ae-4b38-a594-20541b8d0b35
Universal,5,Xindi-Aquatic Narcine Dreadnought Carrier,Ultra Rare,Tac,27,51,27,1.5x Critical Rating from ENG and SCI,,8e8bd039-f3e7-4a58-951f-a0cada26d96f
Universal,5,Xindi-Reptillian Contortrix Escort,Ultra Rare,Tac,29,58,18,+10 TAC per SciShip,,ba4b00ef-2fab-4e1e-816e-a64a3c83085e
Universal,5,Tholian Orb Weaver,Ultra Rare,Sci,29,22,54,+8 ENG and TAC per SciShip,,f4a7e63a-8317-48e1-83fa-f858554757cb
Universal,5,Voth Palisade Science Vessel,Ultra Rare,Sci,30,15,60,+10 TAC per EngShip,,2344b849-d8fe-453c-b804-47c6e4cde527
Universal,6,Terran Adamant Heavy Raider (T6),Rare,Tac,27,63,27,+20 ENG and SCI when Alone,Wild Weasel,5ecbbc22-38c7-4a32-aa10-26edaea51223
Universal,6,Jem'Hadar Vanguard Support Carrier (T6),Rare,Sci,26,26,55,-25% Maintenance per SciShip,Relaunch And Repair,0e4b530f-a6d2-45c1-9811-5b643e68d99b
Universal,6,Cardassian Intel Flight Deck Carrier (T6),Very Rare,Eng,66,29,22,Ignore +/- ENG from Events,Calm Before The Storm,f752daf3-b7d2-4490-9255-1cf9908e6624
Universal,6,Temporal Dreadnought Cruiser (T6),Very Rare,Eng,51,41,25,Ignores +/- ENG from Events,Exotic Modulation,03b9bbe6-af0e-40e2-8739-d408be7e7916
Universal,6,Terran Cygnus Battlecruiser (T6),Very Rare,Eng,48,40,29,+20 SCI and TAC when Alone,Controlled Aggression,0a3047b9-6d8b-4b4d-9372-bce11788d079
Universal,6,Terran Lexington Dreadnought Cruiser (T6),Very Rare,Eng,51,49,17,+15 ALL Stats when Alone,Dimensional Modulation,18531b2a-51cb-436e-9188-8dcc39c4bf0a
Universal,6,Terran Sirius Command Dreadnought Cruiser (T6),Very Rare,Eng,61,40,16,+35 SCI when Alone,The Best Offense,b0e662d4-5cf7-411d-ac5c-4f2afb5b8ed4
Universal,6,Cardassian Intel Escort (T6),Very Rare,Tac,16,56,45,Ignore +/- TAC from Events,Preparedness,7bef4c99-e71f-44c8-a063-37c0c92d7b18
Universal,6,Temporal Raider (T6),Very Rare,Tac,32,55,30,Ignores +/- TAC from Events,Regroup,346a6ae6-ecaf-4567-a8e5-98f25fcd79af
Universal,6,Terran Eagle Pilot Raider (T6),Very Rare,Tac,26,50,50,+20 TAC and SCI when Alone,Stealth Torpedo Bomber,85a4cf04-a054-4e37-b635-2a0943bbb2f8
Universal,6,Terran Hydra Intel Destroyer (T6),Very Rare,Tac,27,70,20,+35 TAC when Alone,Strike Group Command Authority,3d7fa828-f861-4c06-93de-bd12162ae799
Universal,6,Cardassian Intel Science Dreadnought (T6),Very Rare,Sci,23,34,60,Ignore +/- SCI from Events,Photonic Diversion,fd9d97ff-8592-4a72-bcad-3f1656dd241d
Universal,6,Temporal Multi-Mission Science Vessel (T6),Very Rare,Sci,32,29,56,Ignores +/- SCI from Events,Particle Feedback Loop,f5d00851-34f6-44c6-aa74-68ae347f5e03
Universal,6,Terran Monitor Miracle Worker Carrier (T6),Very Rare,Sci,25,33,59,+35 ENG when Alone,Tachyon Piercer,37b0b016-4e4e-45dc-aac5-2dc44f8f236a
Universal,6,Terran Trailblazer Science Warship (T6),Very Rare,Sci,17,42,58,+20 ENG and TAC when Alone,Weaponized Exotic Particles,6d6ecb9f-5c26-4535-82ac-76602043a0e5
Universal,6,Benthan Assault Cruiser (T6),Ultra Rare,Eng,63,40,23,+8 ENG and TAC per SciShip,Load Viral Torpedo,264ca2ac-df80-471b-90ee-dd2c0b5f4b90
Universal,6,Breen Rezreth Dreadnought Cruiser (T6),Ultra Rare,Eng,62,33,31,Ignores +/- TAC from Events,Enhanced Power Condensers,3d6da026-74f1-49fa-bc32-927cf220ddc7
Universal,6,Cardassian Keldon Cruiser (T6),Ultra Rare,Eng,71,29,26,1.5x Critical Rating from TAC and ENG,Insidious Tactics,4d678610-4e9f-41f9-808c-7a5f1fdcf8af
Universal,6,Cnidarian Defender (T6),Ultra Rare,Eng,60,33,33,+2 ALL Stats per ANY Ship,Gelatinous Membrane,2bd89a19-7035-473b-809c-2ef897a5ebd7
Universal,6,Eisenberg Star Cruiser (T6),Ultra Rare,Eng,60,26,40,+6 ENG per ANY Ship (Not Small Craft),Ingenious Tenacity,663f8952-70b1-4efc-9e50-3f58870aaac8
Universal,6,Elachi Ornash Battlecruiser (T6),Ultra Rare,Eng,56,38,32,2.5x Critical Rating from ENG,Subspace Reinforcements,ab693c78-41f4-4f2c-bc51-07fd959b44d5
Universal,6,Elachi Qulash Frigate (T6),Ultra Rare,Eng,60,45,21,+20 ENG and TAC when Alone,Invasive Maneuvers,2e0f43b8-1da9-4fe7-af3c-056918ec4a5b
Universal,6,Elachi Sheshar Command Dreadnought Cruiser (T6),Ultra Rare,Eng,60,37,29,2x Critical Rating from Events,Torpedo Barage,e8888403-d53d-41a3-9c12-b3b86fe80b3a
Universal,6,Elachi Sheshar Intel Dreadnought Cruiser (T6),Ultra Rare,Eng,57,37,32,Ignores +/- ENG from Events,Torpedo Barage,85c8fe0b-0de9-4516-a737-e514d85d3538
Universal,6,Ferengi Nagus Marauder (T6),Ultra Rare,Eng,57,42,27,Ignores +/- ENG from Events,Streak Breaker,9dfc64cf-81a8-410f-ab14-9b3005ce14f6
Universal,6,Ferengi Quark Marauder (T6),Ultra Rare,Eng,58,34,34,+35 ENG when Alone,Energy Monopoly,c52ec614-d60d-461d-8918-b082dfaba998
Universal,6,Herald Quas Flight Deck Cruiser (T6),Ultra Rare,Eng,64,29,33,+35 TAC when Alone,Synergistic Restoration,74526dae-f06e-4100-ae8e-8b64ae14e8e9
Universal,6,Hur'q Vedcrid Hive Dreadnought Carrier (T6),Ultra Rare,Eng,63,39,24,+5 TAC per Any Ship (Not Small Craft),Repulsive,d2ac2cfa-b4e8-4021-89a7-7e83ab07db13
Universal,6,Khitomer Alliance Battlecruiser (T6),Ultra Rare,Eng,52,46,28,+10 ENG per TacShip,Khitomer Alliance Battlecruiser,731b35d4-f2c8-45f3-8411-3007918f8aff
Universal,6,Kobali Samsar Cruiser (T6),Ultra Rare,Eng,74,24,28,-10% Maintenance per TacShip or SciShip,Emergency Response,05159341-5af0-4572-92b9-5c411663da3b
Universal,6,Kwejian Pilot Frigate (T6),Ultra Rare,Eng,55,51,20,-25% Maintenance per SciShip,Proximity Alert,b9a485f5-1af1-4a58-98d3-19f513d26c7b
Universal,6,Na'kuhl Acheros Battlecruiser (T6),Ultra Rare,Eng,63,36,27,Ignores +/- ENG from Events,Temporal Ally,4fe035db-dc19-47a8-b4fa-4538b53db303
Universal,6,Risian Luxury Cruiser (T6),Ultra Rare,Eng,72,28,26,Ignores +/- ENG from Events,Leisurely Pace,e409610f-e784-40fc-b833-4ab08bf92d02
Universal,6,Son'a Intel Battlecruiser (T6),Ultra Rare,Eng,59,42,25,+8 ENG per SciShip or TacShip,Subspatial Warheads,042cadc5-42bd-4455-bdfa-dbe154d95372
Universal,6,Tal Shiar Adapted Battlecruiser (T6),Ultra Rare,Eng,54,32,40,+10 SCI per TacShip,Assimilated Power Conduits,db2f969a-a7fd-4264-8516-9b4e52a5bd8e
Universal,6,Tholian Jorogumo Carrier (T6),Ultra Rare,Eng,48,35,43,+15 ALL Stats when Alone,Precision Multi-targeting,c22cb577-eb1c-482c-947a-360a75a23775
Universal,6,Tholian Tarantula Dreadnought Cruiser (T6),Ultra Rare,Eng,53,43,30,+10 ENG per Tacship,Energy Web,c1df8f93-27d8-4b67-bc49-605122edbe3b
Universal,6,Tzenkethi Rhas'bej Battlecruiser (T6),Ultra Rare,Eng,57,37,32,+35 SCI when Alone,Turtle,5ba94a7e-e8c3-494e-bc17-8fae6c3aa8b1
Universal,6,Undine Kiwavi Bio-Cruiser (T6),Ultra Rare,Eng,68,29,29,+15 ENG per TacShip,Bio-link,2dfc4bfe-ef19-4b31-948d-d4d6746497c7
Universal,6,Vaadwaur Astika Heavy Battle Cruiser (T6),Ultra Rare,Eng,67,41,18,+10 TAC per TacShip,Supremacy,dd80035f-c69d-456b-a1ba-8a58b03e7625
Universal,6,Vorgon Ryn'kodan Carrier (T6),Ultra Rare,Eng,74,26,26,+8 SCI and TAC per EngShip,Restorative Support,e23c05c2-57ff-444b-98f4-a8618e535397
Universal,6,Vorgon Ytijara Dreadnought Cruiser (T6),Ultra Rare,Eng,52,30,44,+10 SCI per EngShip,S.I.F. Burst,536ad5de-c99b-4ab8-a9ae-9dcb611f0bab
Universal,6,Voth Rampart Command Flight Deck Carrier (T6),Ultra Rare,Eng,63,33,30,-10% Maintenance per TacShip or SciShip,Voth Carrier Synergies,e6e86e5d-7627-44ea-b66b-4dab2efb5c1d
Universal,6,World Razer Temporal Ops Juggernaut (T6),Ultra Rare,Eng,30,66,30,+8 ENG and TAC per TacShip,Cultural Conquest,3538dbbb-d3d3-4c7f-9cb1-839bc6466ce7
Universal,6,Xindi-Primate Ateleth Dreadnought Cruiser (T6),Ultra Rare,Eng,68,32,26,+10 ENG per TacShip,Superweapon Ingenuity,6fb5c6cf-45b0-4411-a170-e7cbe5c4d4af
Universal,6,Zahl Heavy Cruiser (T6),Ultra Rare,Eng,70,36,20,-5% Maintenance per Any Ship,Invincible,b14f28a2-d065-448d-a5aa-727044ba59eb
Universal,6,Amarie-class Smuggler's Heavy Escort (T6),Ultra Rare,Tac,20,62,44,Ignores +/- ENG from Events,Reverberation,7a6f3a93-5742-4f72-bbd3-c3ec46e87d23
Universal,6,Bajoran Interceptor (T6),Ultra Rare,Tac,26,59,41,+10 TAC per TacShip,Harrying Maneuvers,8c891e29-3f26-4239-9713-b2094f46d735
Universal,6,Breen Chel Boalg Warship (T6),Ultra Rare,Tac,40,53,33,+10 TAC per EngShip,Cryonic Siphon,6fcae3c1-938b-4e04-9aed-65e62bb34880
Universal,6,Breen Plesh Tral Heavy Raider (T6),Ultra Rare,Tac,24,72,30,+8 SCI and ENG per TacShip,Cold-hearted,92904c27-cd1a-4f03-8a8a-faba2fc87cc0
Universal,6,Courier Pilot Raider (T6),Ultra Rare,Tac,20,64,42,+10 SCI per EngShip,Special Delivery,9cdfcb73-2f65-4a38-9373-670775d30253
Universal,6,Elachi S'ateth Escort (T6),Ultra Rare,Tac,23,62,41,2.5x Critical Rating from TAC,Crescent Wave Discharge,63bcaf78-3652-4b16-a48c-88f0669fbd07
Universal,6,Emerald Chain Intel Juggernaut (T6),Ultra Rare,Tac,18,70,38,+10 SCI per TacShip,Lash of the Chain,6d210a80-a74c-4c10-87ce-b3908d8912a1
Universal,6,Fek'Ihri Byr'Jai Interceptor (T6),Ultra Rare,Tac,20,55,53,+8 SCI per EngShip or TacShip,Tear Open the Gates,82d3e2d1-14a2-4a8c-9c8c-e79f101d3efc
Universal,6,Fek'Ihri Fe'rang Dreadnought Carrier (T6),Ultra Rare,Tac,40,62,24,+10 TAC per ENGShip,Fiery Entrance,2a3c0b9b-ca90-4845-9617-29718df6436b
Universal,6,Fek'Ihri S'torr Warship (T6),Ultra Rare,Tac,30,63,33,+10 SCI per TacShip,Maw Of Gre'thor,7bd4df99-91a7-4a6a-8ce7-f7a72d790fdc
Universal,6,Ferengi Nandi Warship (T6),Ultra Rare,Tac,22,60,44,-10% Maintenance per EngShip or SciShip,Greedy Emitters,7d346080-3c3a-4f6a-a8a2-c0b2d70313a4
Universal,6,Hazari Destroyer (T6),Ultra Rare,Tac,30,66,30,+8 ENG and SCI per EngShip,Partners In Arms,b494ee93-53dd-483e-96f4-8e4b2b16c0a2
Universal,6,Herald Baltim Heavy Raider (T6),Ultra Rare,Tac,37,57,32,+15 ENG and SCI when Alone,Waylay,36f62d63-5d66-479f-9d85-5887a6882be5
Universal,6,Herald Vonph Dreadnought Carrier (T6),Ultra Rare,Tac,26,68,32,+35 ENG when Alone,Peak Efficiency,8834ea2d-6add-49ec-b764-463df8f1cfc4
Universal,6,Hur'q Ravager Strike Wing Escort (T6),Ultra Rare,Tac,27,72,27,+8 TAC per Engship or Sciship,Nullifier Warheads,3ece3f01-1b86-4f94-8813-af3930759def
Universal,6,Husnock Warship (T6),Ultra Rare,Tac,44,60,22,+20 TAC and ENG when Alone,Directed Energy Flux,7c695f0b-90b7-46f0-9895-153b4e453498
Universal,6,Jem'Hadar Dreadnought Carrier (T6),Ultra Rare,Tac,49,55,22,+35 TAC when Alone,Dominion Coordination,2771c93e-3edf-4316-91e6-af844e4d0232
Universal,6,Jem'Hadar Heavy Strike Wing Escort (T6),Ultra Rare,Tac,42,60,24,Ignores +/- TAC from Events,Tactical Analysis,f9536ed5-8570-4a88-8430-36bd7ec68558
Universal,6,Jem'Hadar Light Battlecruiser (T6),Ultra Rare,Tac,57,45,24,+8 TAC and SCI per TacShip,Obedience is Victory,9cd72615-e611-44b3-8549-726c6546802a
Universal,6,Jem'Hadar Recon Ship (T6),Ultra Rare,Tac,32,78,16,2.5x Critical Rating from TAC,Go For The Kill,322478bd-fde8-48a5-b66e-015c40794a81
Universal,6,Jem'Hadar Strike Ship (T6),Ultra Rare,Tac,35,75,16,Ignores +/- TAC from Events,Go For The Kill,24c39e87-f4f9-4887-9d43-83afd8b59965
Universal,6,Jovian Intel Heavy Raider (T6),Ultra Rare,Tac,29,66,31,-25% Maintenance per EngShip,Precision Scrapper,9f076863-f8bd-48b1-8101-77171e132e99
Universal,6,Kelvin Timeline D4x Pilot Raider (T6),Ultra Rare,Tac,34,60,32,+10 TAC per EngShip,Standoff,096afec7-bc10-48bb-8a06-d9158ec6aed5
Universal,6,Krenim Imperium Warship (T6),Ultra Rare,Tac,26,66,34,+10 TAC per SciShip,Potentiality,74bc6da2-7860-4a57-b5a9-f1323d751d1a
Universal,6,La Sirena Heavy Raider (T6),Ultra Rare,Tac,35,54,37,Ignores +/- TAC from Events,Maintained To Regulation,5be12b54-066a-4ed9-84a2-393f28a1d47f
Universal,6,Liberated Borg Command Juggernaut (T6),Ultra Rare,Tac,43,66,17,+20 ENG and TAC when Alone,Enhanced Nanite Regeneration,dd00dfb3-be59-480e-b80f-6daf772e44fc
Universal,6,Marquis Raider (T6),Ultra Rare,Tac,35,56,35,+20 ENG and SCI when Alone,Badlands Tactics,094d6bad-c7eb-4750-9503-56256a9286dc
Universal,6,Miradorn Theta Class Heavy Raider (T6),Ultra Rare,Tac,24,65,37,+20 TAC and SCI when alone,Advantageous Positioning,e0b79bad-a7f8-441c-a1dc-0b41e57dc722
Universal,6,Mirror Gagarin Warship (T6),Ultra Rare,Tac,43,63,20,+8 ENG and SCI per TacShip,Protomatter Precursor Shields,30ffced2-29ed-4627-a506-cb076cfc08b0
Universal,6,Na'kuhl Tadaari Raider (T6),Ultra Rare,Tac,29,60,37,Ignores +/- SCI from Events,Spoils Of The Victor,59f9384c-933d-414a-800a-7681bd19f725
Universal,6,Risian corvette (T6),Ultra Rare,Tac,42,56,28,+10 TAC per TacShip,Rhythmic Rumble,0dc7a901-3512-4a84-99b9-229f216c503b
Universal,6,Risian Pilot corvette (T6),Ultra Rare,Tac,39,59,28,+15 TAC per SciShip,No Starship Trait specified,53014a73-3a8d-4665-8d0e-ebaeac0a78bb
Universal,6,Sphere Builder Denuos Dreadnought Carrier (T6),Ultra Rare,Tac,35,53,38,2.5x Critical Rating from TAC,Delphic Shockwave,6156914b-a5db-4a3a-bd60-62af62a8d2d5
Universal,6,Tal Shiar Adapted Destroyer (T6),Ultra Rare,Tac,32,54,41,+10 SCI per EngShip,Synergistic Tactical Systems,2d6431be-b061-40a7-a024-c06a9eefd8c2
Universal,6,Temer Alliance Raider (T6),Ultra Rare,Tac,39,67,20,+8 TAC per EngShip or SciShip,Sniper (starship),c1af4da7-e590-4aaa-b0ec-29603f8c48d2
Universal,6,Terran Acheron Dreadnought Carrier (T6),Ultra Rare,Tac,41,64,21,+6 TAC per ANY Ship (Not Small Craft),Gravitic Entanglement,5bdaf3e7-2195-4aa9-aa5c-59558192347e
Universal,6,Tzenkethi Shuk-din Escort (T6),Ultra Rare,Tac,26,55,45,+10 TAC per SciShip,Symmetry,4c677c82-2f68-40be-b5fd-447668f0e4e0
Universal,6,Tzenkethi Tzen-tar Dreadnought Carrier (T6),Ultra Rare,Tac,23,62,41,-5% Maintenance per ANY Ship (Not Small Craft),Automated Aggression,0521aaf1-cf63-4b6e-8cf3-7e6405a05999
Universal,6,Undine Cheirax Bio-Warship (T6),Ultra Rare,Tac,27,60,39,+15 TAC per EngShip,Omega Bond,45aa7960-f19b-4f22-bb82-7d7a514a587e
Universal,6,United Earth Defense Force Vessel (T6),Ultra Rare,Tac,37,59,30,+6 SCI per ANY Ship (Not Small Craft),Interlaced Emitters,6d32b788-5e55-4375-bccf-f1e2e131069e
Universal,6,Vaadwaur Manasa Assault Escort (T6),Ultra Rare,Tac,42,64,20,+10 ENG per EngShip,Frontal Assault,5b1736b2-48f6-4f20-9bab-6e03217f9501
Universal,6,Vaadwaur Miracle Worker Juggernaut (T6),Ultra Rare,Tac,46,66,14,+8 ENG and TAC per TacShip,Weapon Emitter Overdrive,6070ea2f-0343-466e-bab9-0e3b5fc63995
Universal,6,Vorgon Xyfius Heavy Escort (T6),Ultra Rare,Tac,41,63,22,+15 ENG per TacShip,Harasser Mines,406bf84f-54ff-4dfc-a311-e046e9e2525f
Universal,6,Xindi-Aquatic Briostrys Dreadnought Carrier (T6),Ultra Rare,Tac,34,58,34,2.5x Critical Rating from SCI,Kemocite Overload,d2b9db7e-f645-46a9-8d16-fa106b8a5dea
Universal,6,Xindi-Insectoid Olaen Heavy Strike Wing Escort (T6),Ultra Rare,Tac,31,62,33,+10 TAC per EngShip,Council Of Thought,bb272fd1-3967-4afc-bba9-529f814d1547
Universal,6,Xindi-Reptilian Sistruus Escort (T6),Ultra Rare,Tac,35,69,22,+10 TAC per EngShip,Self-replicating Hull,0df644d2-9a68-4ea2-938a-9454eee07559
Universal,6,Ba'ul Sentry Vessel (T6),Ultra Rare,Sci,20,46,60,-25% Maintenance per TacShip,Intruder Discouragement,076213c7-797f-4b55-988c-2139c8e9c66a
Universal,6,Breen Sarr Theln Carrier (T6),Ultra Rare,Sci,32,44,50,-10% Maintenance per TacShip or EngShip,Reactive Repair Nanites,c4c7e992-f0b4-4d45-9192-461a638c098e
Universal,6,Compiler Science Dreadnought (T6),Ultra Rare,Sci,32,35,59,+35 SCI when Alone,Digital Compilation,42b75863-d67c-488d-bd87-994704d51d44
Universal,6,Fek'Ihri Gok'tad Carrier (T6),Ultra Rare,Sci,24,40,62,+10 TAC per SciShip,Gre'thor's Fire,97baf269-0b09-41fb-bbf5-fd16f8bb97dc
Universal,6,Hur'q Assembly Multi-Mission Science Vessel (T6),Ultra Rare,Sci,25,45,56,+8 SCI per Engship or Tacship,Hivebearer,81c148c5-f42d-4024-830a-16a1c6827820
Universal,6,Jarok Alliance Carrier (T6),Ultra Rare,Sci,48,27,51,-25% Maintenance per TacShip,Backup Shield Batteries,cfde0a7a-74e0-4c3e-ba0c-54499e0c5363
Universal,6,Kelvin Timeline T'laru Intel Carrier Warbird (T6),Ultra Rare,Sci,36,45,45,+8 SCI per EngShip or TacShip,Highly Specialized,8ba8dd0d-9733-4bef-b8e9-95b97d08ff8b
Universal,6,Krenim Annorax Science Dreadnought (T6),Ultra Rare,Sci,18,47,61,Ignores +/- SCI from Events,Time To Kill,bf64b651-9de7-4260-bacf-b66f0fba1da6
Universal,6,Krenim Science Vessel (T6),Ultra Rare,Sci,26,34,66,+8 SCI per EngShip or TacShip,Improved Feedback Pulse,410dfb72-88d7-46ff-85a4-9bf28f100d73
Universal,6,Lukari Dranuur Scout Ship (T6),Ultra Rare,Sci,21,50,55,+8 SCI per EngShip or TacShip,Proto Spill,9083ee90-4b37-4b81-8d0e-5b3549913635
Universal,6,Lukari Ho'kuun Science Vessel (T6),Ultra Rare,Sci,42,20,64,+10 SCI per SciShip,Protomatter Capacitor,67d3070f-1a79-487a-b6f1-d08120b183db
Universal,6,Na'kuhl Daemosh Science Vessel (T6),Ultra Rare,Sci,32,40,54,+35 SCI when Alone,Scavenger Beam,b31f6a13-81ad-4564-93d0-e56a11256cd2
Universal,6,Paradox Temporal Dreadnought (T6),Ultra Rare,Sci,34,32,60,+10 SCI per SciShip,Unstable Anomalies,e4e83517-fbe4-43e3-af39-d369d0240497
Universal,6,Risian Weather Control Vessel (T6),Ultra Rare,Sci,31,30,67,+10 SCI per SciShip,Electrified Anomalies,98573a1e-336e-4cde-8eed-2376a3c5b551
Universal,6,Sh'vhal Temporal Science Spearhead (T6),Ultra Rare,Sci,24,35,67,+10 TAC per EngShip,Totally Lost All Control,24d98ae3-d90a-4555-ae3f-c74adbbe050a
Universal,6,Son'a Collector Science Dreadnought (T6),Ultra Rare,Sci,32,23,71,+8 TAC and ENG per TacShip,Collect And Consume,be3f7bc9-b528-4ff5-bfa4-8b4b98c8c915
Universal,6,Son'a Command Science Vessel (T6),Ultra Rare,Sci,38,24,64,+8 SCI per EngShip or TacShip,Kick Them While They're Down,4bc60a73-c008-47b3-971b-ab30d79553be
Universal,6,Sphere Builder Edoulg Science Vessel (T6),Ultra Rare,Sci,24,44,58,2.5x Critical Rating from SCI,Delphic Phasing,375a4c74-9e69-4b5c-b0c2-1bea390d7bc0
Universal,6,Styx Terran Dreadnought Cruiser (T6),Ultra Rare,Sci,53,43,30,Ignores +/- ENG from Events,Vaulting Ambition,6afbb1d9-f025-4f72-b0e7-eaa7281caf2b
Universal,6,Terran Somerville Scout Ship (T6),Ultra Rare,Sci,25,46,55,+8 TAC and SCI per TacShip,Devious Rerouting,e86fbf10-170a-4caf-8635-3af854a0a8ea
Universal,6,Tholian Iktomi (T6),Ultra Rare,Sci,38,25,63,+8 ENG and SCI per SciShip,Improved Photonic Officer,cbb08a08-ea43-44d9-9875-0a4292fddac6
Universal,6,Voth Bastille Temporal Science Vessel (T6),Ultra Rare,Sci,31,32,63,-25% Maintenance per SciShip,Rapid Response Shielding,7b3ef6b2-7799-4b6d-b9b5-64ce54fd5e3d
Universal,6,Vulcan Experimental Scout Vessel (T6),Ultra Rare,Sci,28,36,62,2.5x Bonus from SCI,Slippery Target,9588d6ce-bccc-4c5d-a30b-8785dc8e081d
Universal,6,Vulcan T'Pau Scout Ship (T6),Ultra Rare,Sci,29,37,60,+8 TAC and SCI per EngShip,Emergency Response Teams,dc8a6e73-b048-404c-8280-0921ae6cf11b
Universal,6,Assimilated Assault Cruiser (T6),Epic,Eng,66,49,20,+20 ENG per Any Ship (Not Small Craft),,7dd9ef71-d826-44d6-9d72-b518912241aa
Universal,6,I.K.S. Hegh,Epic,Eng,62,42,31,+20 SCI per Any Ship (Not Small Craft),,21b322db-72e9-4c7a-a26b-3f35c301adff
Universal,6,I.S.S. Stadi,Epic,Eng,70,35,30,+20 TAC per Any Ship,,4e789f23-c119-4cca-a36f-e059634a54b6
Universal,6,Quark's Triumph,Epic,Eng,49,45,41,-20% Maintenance per ANY Ship (Not Small Craft),,ea3b2361-5b09-40ab-aa32-bcf7d2528190
Universal,6,V.S.S. Tanius,Epic,Eng,53,39,43,+50 ALL when Alone,,ffb2ee04-cefb-4c9c-9d43-99428cce1351
Universal,6,R.R.W. Zdenia,Epic,Tac,23,61,51,+15 ENG and TAC per Any Ship,,73846900-d4ef-4a9d-943d-8c23b9545241
Universal,6,U.S.S. Appalachia,Epic,Tac,38,75,22,Ignores +/- TAC from Events and +8 TAC per Any Ship (Not Small Craft),,ceea0de1-10e2-44c2-a6e4-a258f8e844c5
Universal,6,C.U.V. Tain,Epic,Sci,66,29,40,2.5x Critical Rating from Events,,46383c8e-8301-4edb-a991-1088c9213858
Universal,6,Odo's Flagship,Epic,Sci,69,40,26,4x Critical Rating from ENG,,1ef4f918-fb2e-4e28-9227-d4677615dc00
Universal,6,U.S.S. Hope,Epic,Sci,43,20,72,Ignores +/- SCI from Events and 2x Critical Rating from SCI,,9c626279-bb09-445c-9b35-86ac76d36db5
Universal,6,U.S.S. Pastak,Epic,Sci,31,31,73,Ignores +/- SCI from Events and +8 SCI per Any Ship,,bdf4b418-e266-4f4b-96aa-3460a663495f
Universal,6,U.S.S. Rhode Island,Epic,Sci,30,27,78,3x Critical Rating from All Stats,,85eb0d85-3cc6-43bc-b88e-2248c00ea7c4
Universal,6,U.S.S. Sally Ride,Epic,Sci,28,28,79,+20 SCI per ANY Ship (Not Small Craft),,eb157d50-8f7d-4a49-840a-4fce8b46d207
Universal,6,U.S.S. Voyager,Epic,Sci,41,22,72,-25% Maintenance per ANY Ship (Not Small Craft),,040eb1d3-0870-4197-b875-dd8e72643dd0
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
