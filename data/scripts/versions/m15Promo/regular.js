if (!loadedVersions.includes('m15PromoRegular')) {
	loadedVersions.push("m15PromoRegular")
	loadFrameImages([
		['Base Frame', 'data/images/m15Promo/m15PromoTextboxes.png', 0, 0, 1, 1, ['Full', 'Title (m15)', 'Type (m15 Promo)', 'Rules (m15 Promo)']],
		['White Frame', 'data/images/m15Promo/m15PromoFrameW.png', 0, 0, 1, 1, ['Full', 'Pinline (m15 Promo)', 'Border (m15)']],
		['Blue Frame', 'data/images/m15Promo/m15PromoFrameU.png', 0, 0, 1, 1, ['Full', 'Pinline (m15 Promo)', 'Border (m15)']],
		['Black Frame', 'data/images/m15Promo/m15PromoFrameB.png', 0, 0, 1, 1, ['Full', 'Pinline (m15 Promo)', 'Border (m15)']],
		['Red Frame', 'data/images/m15Promo/m15PromoFrameR.png', 0, 0, 1, 1, ['Full', 'Pinline (m15 Promo)', 'Border (m15)']],
		['Green Frame', 'data/images/m15Promo/m15PromoFrameG.png', 0, 0, 1, 1, ['Full', 'Pinline (m15 Promo)', 'Border (m15)']],
		['Multicolored Frame', 'data/images/m15Promo/m15PromoFrameM.png', 0, 0, 1, 1, ['Full', 'Pinline (m15 Promo)', 'Border (m15)']],
		['Artifact Frame', 'data/images/m15Promo/m15PromoFrameA.png', 0, 0, 1, 1, ['Full', 'Pinline (m15 Promo)', 'Border (m15)']],
		['Land Frame', 'data/images/m15Promo/m15PromoFrameL.png', 0, 0, 1, 1, ['Full', 'Pinline (m15 Promo)', 'Border (m15)']],
		['White Power/Toughness', 'data/images/m15/m15PTW.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Blue Power/Toughness', 'data/images/m15/m15PTU.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Black Power/Toughness', 'data/images/m15/m15PTB.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Red Power/Toughness', 'data/images/m15/m15PTR.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Green Power/Toughness', 'data/images/m15/m15PTG.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Multicolored Power/Toughness', 'data/images/m15/m15PTM.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Artifact Power/Toughness', 'data/images/m15/m15PTA.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']]
	], 'frameClassM15PromoRegular')
}

hideFrameImages('frameClassM15PromoRegular')