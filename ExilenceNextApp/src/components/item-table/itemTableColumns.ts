import { Column } from 'react-table';
import {
  itemCorrupted,
  itemIcon,
  itemIlvlTier,
  itemLinks,
  itemName,
  itemTabs,
  itemValue,
} from '../columns/Columns';

const itemTableColumns: Column<object>[] = [
  itemIcon({
    accessor: 'icon',
    header: 'Icon',
  }),
  itemName({
    accessor: 'name',
    header: 'Name',
  }),
  itemIlvlTier({
    accessor: (row: any) => (row.tier > 0 ? row.tier : row.ilvl),
    header: 'Ilvl / Tier',
  }),
  itemTabs({
    accessor: 'tab',
    header: 'Tabs',
  }),
  itemCorrupted({
    accessor: 'corrupted',
    header: 'Corrupted',
  }),
  itemLinks({
    accessor: 'links',
    header: 'Links',
  }),
  {
    Header: 'Quality',
    accessor: 'quality',
    align: 'right',
    maxWidth: 60,
  },
  {
    Header: 'Level',
    accessor: 'level',
    align: 'right',
    maxWidth: 60,
  },
  {
    Header: 'Quantity',
    accessor: 'stackSize',
    align: 'right',
    maxWidth: 80,
  },
  itemValue({
    accessor: 'calculated',
    header: 'Price (c)',
  }),
  itemValue({
    accessor: 'total',
    header: 'Total value (c)',
  }),
  itemValue({
    header: 'Cumulative (c)',
    cumulative: true,
  }),
];

export default itemTableColumns;
