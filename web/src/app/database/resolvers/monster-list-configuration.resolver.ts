import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {TOSElement, TOSEntity} from "../../shared/domain/tos/entity/tos-entity.model";
import {
  TOSMonster,
  TOSMonsterRace,
  TOSMonsterRank,
  TOSMonsterSize
} from "../../shared/domain/tos/monster/tos-monster.model";
import {TOSEquipmentMaterial} from "../../shared/domain/tos/item/equipment/tos-equipment.model";
import {TOSListConfiguration, TOSListTableColumnType} from "../entity-list/entity-list.component";

@Injectable()
export class MonsterListConfigurationResolver implements Resolve<TOSListConfiguration> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TOSListConfiguration> | Promise<TOSListConfiguration> | TOSListConfiguration {
    return {
      filter: [
        {
          column: 'Armor',
          groups: [
            {
              options: [
                TOSEquipmentMaterial.CLOTH,
                TOSEquipmentMaterial.GHOST,
                TOSEquipmentMaterial.LEATHER,
                TOSEquipmentMaterial.PLATE,
              ]
            }
          ]
        },
        {
          column: 'Element',
          groups: [
            {
              options: [
                TOSElement.DARK,
                TOSElement.EARTH,
                TOSElement.FIRE,
                TOSElement.HOLY,
                TOSElement.ICE,
                TOSElement.LIGHTNING,
                TOSElement.MELEE,
                TOSElement.POISON,
                TOSElement.PSYCHOKINESIS,
              ]
            }
          ]
        },
        {
          column: 'Race',
          groups: [
            {
              options: [
                TOSMonsterRace.BEAST,
                TOSMonsterRace.DEMON,
                TOSMonsterRace.INSECT,
                TOSMonsterRace.MUTANT,
                TOSMonsterRace.PLANT,
              ]
            }
          ]
        },
        {
          column: 'Rank',
          groups: [
            {
              options: [
                TOSMonsterRank.BOSS,
                TOSMonsterRank.ELITE,
                TOSMonsterRank.NORMAL,
                TOSMonsterRank.SPECIAL,
              ]
            }
          ]
        },
        {
          column: 'Size',
          groups: [
            {
              options: [
                TOSMonsterSize.S,
                TOSMonsterSize.M,
                TOSMonsterSize.L,
                TOSMonsterSize.XL,
              ]
            }
          ]
        },
      ],

      sortColumn: '$ID',

      tableColumns: [
        { value: 'Icon',    type: TOSListTableColumnType.ICON,        label: '',
          transformIcon: TOSEntity.getIcon },
        { value: '$ID',     type: TOSListTableColumnType.TEXT,        isNotMobile: true },
        { value: 'Name',    type: TOSListTableColumnType.TEXT,        isWide: true},
        { value: 'Armor',   type: TOSListTableColumnType.TEXT,        isNotMobile: true },
        { value: 'Element', type: TOSListTableColumnType.ICON,        isNotMobile: true,
          transformIcon: (o: TOSMonster) => TOSElement.getIcon(o.Element) },
        { value: 'Level',   type: TOSListTableColumnType.TEXT_NUMBER, },
        { value: 'Race',    type: TOSListTableColumnType.ICON,        isNotMobile: true,
          transformIcon: (o: TOSMonster) => TOSMonsterRace.getIcon(o.Race) },
        { value: 'Rank',    type: TOSListTableColumnType.TEXT,        },
        { value: 'Size',    type: TOSListTableColumnType.TEXT,        isNotMobile: true },
      ]
    };
  }
}
