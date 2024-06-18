StartupEvents.registry('minecraft:item', event => {
    event.create('newer_atlas')        
    .texture('kubejs:item/curios/newer_atlas')
    .maxDamage(8)
    .maxStackSize(1)
    .tag('curios:atlas')
    .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
        .canEquip((item, slotContext) => onlyPlayerCanEquip(item, slotContext))
        .modifyAttribute('kubejs:treasure_fortune', 'NewerAtlasTreasureFortune', 10, 'addition')
        .modifyAttribute('kubejs:treasure_distance', 'NewerAtlasTreasureDistance', 1024, 'addition')
    )
})