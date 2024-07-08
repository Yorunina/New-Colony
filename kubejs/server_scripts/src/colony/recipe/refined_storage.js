// priority: 500
const { ColonyCraftRecipes } = require('../../model/citizen_recipes_model')

ServerEvents.recipes(event => {
    event.remove({ output: 'refinedstorage:quartz_enriched_iron' })
    event.remove({ output: 'refinedstorage:silicon' })

    event.remove({ output: 'refinedstorage:machine_casing' })
    event.remove({ output: 'refinedstorage:controller' })
    event.remove({ output: 'refinedstorage:grid' })
    event.remove({ output: 'refinedstorage:crafting_grid' })
    event.remove({ output: 'refinedstorage:fluid_grid' })
    event.remove({ output: 'refinedstorage:disk_manipulator' })
    event.remove({ output: 'refinedstorage:disk_drive' })
    event.remove({ output: 'refinedstorage:1k_storage_disk' })
    event.remove({ output: 'refinedstorage:4k_storage_disk' })
    event.remove({ output: 'refinedstorage:16k_storage_disk' })
    event.remove({ output: 'refinedstorage:64k_storage_disk' })
    event.remove({ output: 'refinedstorage:64k_fluid_storage_disk' })
    event.remove({ output: 'refinedstorage:256k_fluid_storage_disk' })
    event.remove({ output: 'refinedstorage:1024k_fluid_storage_disk' })
    event.remove({ output: 'refinedstorage:4096k_fluid_storage_disk' })

    event.remove({ output: 'refinedstorage:creative_storage_disk' })
    event.remove({ output: 'refinedstorage:creative_fluid_storage_disk' })

    // todo 自动制作管理缺少部分配方
    event.remove({ output: 'refinedstorage:crafter' })

    event.remove({ output: 'rsinfinitybooster:infinity_card' })
    event.remove({ output: 'rsinfinitybooster:dimension_card' })
})

ServerEvents.highPriorityData(event => {
    // 石英进阶应用理论
    event.addJson(`kubejs:crafterrecipes/smelter/quartz_enriched_iron.json`,
        new ColonyCraftRecipes('smelter_custom', Item.of('refinedstorage:quartz_enriched_iron', 3), [Item.of('kubejs:steel_ingot', 1), Item.of('minecraft:iron_ingot', 2), Item.of('refinedstorage:silicon', 1)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/advancedquartzuseage', true))
    event.addJson(`kubejs:crafterrecipes/smelter/silicon.json`,
        new ColonyCraftRecipes('smelter_custom', Item.of('refinedstorage:silicon', 1), [Item.of('minecraft:quartz', 2)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/advancedquartzuseage', true))

    // 多维度存储理论
    event.addJson(`kubejs:crafterrecipes/mechanic/machine_casing.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:machine_casing', 1), [Item.of('refinedstorage:quartz_enriched_iron', 8), Item.of('minecraft:redstone', 8), Item.of('minecraft:glowstone_dust', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/controller.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('refinedstorage:controller', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('minecraft:soul_lantern', 1), Item.of('kubejs:echo_crystal', 1), Item.of('refinedstorage:silicon', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/grid.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:grid', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('minecraft:glass', 4), Item.of('refinedstorage:silicon', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/crafting_grid.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:crafting_grid', 1), [Item.of('refinedstorage:grid', 1), Item.of('minecraft:crafting_table', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/fluid_grid.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:fluid_grid', 1), [Item.of('refinedstorage:grid', 1), Item.of('minecraft:glass', 16)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/disk_manipulator.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:disk_manipulator', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('refinedstorage:quartz_enriched_iron', 8), Item.of('refinedstorage:1k_storage_disk', 1)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/disk_drive.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:disk_drive', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('refinedstorage:quartz_enriched_iron', 8), Item.of('minecraft:ender_pearl', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/1k_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:1k_storage_disk', 1), [Item.of('refinedstorage:quartz_enriched_iron', 4), Item.of('minecraft:ender_pearl', 1), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/4k_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:4k_storage_disk', 1), [Item.of('refinedstorage:1k_storage_disk', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))


    event.addJson(`kubejs:crafterrecipes/mechanic/64k_fluid_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:64k_fluid_storage_disk', 1), [Item.of('refinedstorage:quartz_enriched_iron', 4), Item.of('minecraft:ender_pearl', 1), Item.of('minecraft:glass', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/256k_fluid_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:256k_fluid_storage_disk', 1), [Item.of('refinedstorage:64k_fluid_storage_disk', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/multidimstoragetheory', true))

    // 更多磁盘
    event.addJson(`kubejs:crafterrecipes/mechanic/16k_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:16k_storage_disk', 1), [Item.of('refinedstorage:4k_storage_disk', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(4)
            .setResearchId('kubejs:effects/morediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/64k_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:64k_storage_disk', 1), [Item.of('refinedstorage:16k_storage_disk', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(4)
            .setResearchId('kubejs:effects/morediskunlock', true))


    event.addJson(`kubejs:crafterrecipes/mechanic/1024k_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:1024k_storage_disk', 1), [Item.of('refinedstorage:256k_fluid_storage_disk', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(4)
            .setResearchId('kubejs:effects/morediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/4096k_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:4096k_storage_disk', 1), [Item.of('refinedstorage:1024k_storage_disk', 4), Item.of('refinedstorage:silicon', 8)])
            .setMinBuildingLevel(4)
            .setResearchId('kubejs:effects/morediskunlock', true))

    // 无穷无尽多维理论
    event.addJson(`kubejs:crafterrecipes/mechanic/creative_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_storage_disk', 1), [Item.of('refinedstorage:64k_storage_disk', 64), Item.of('refinedstorage:silicon', 128), Item.of('kubejs:echo_crystal', 16)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_fluid_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_fluid_storage_disk', 1), [Item.of('refinedstorage:64k_storage_disk', 64), Item.of('minecraft:glass', 128), Item.of('kubejs:echo_crystal', 16)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    // 自动制作管理
    event.addJson(`kubejs:crafterrecipes/mechanic/crafter.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:crafter', 1), [Item.of('refinedstorage:machine_casing', 1), Item.of('refinedstorage:silicon', 16), Item.of('minecraft:crafting_table', 4)])
            .setMinBuildingLevel(3)
            .setResearchId('kubejs:effects/autocraftmanage', true))

    // todo 自动制作管理

    // 无限无线通讯协议
    event.addJson(`kubejs:crafterrecipes/enchanter/infinity_card.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('rsinfinitybooster:infinity_card', 1), [Item.of('refinedstorage:network_card', 16), Item.of('kubejs:echo_crystal', 16), Item.of('minecraft:chorus_fruit', 128)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitywirelessaccess', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/dimension_card.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('rsinfinitybooster:dimension_card', 1), [Item.of('refinedstorage:network_card', 16), Item.of('kubejs:echo_crystal', 16), Item.of('minecraft:ender_pearl', 32)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitywirelessaccess', true))
})
