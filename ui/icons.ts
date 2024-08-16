import m, { Children } from "mithril";
import { ICONS_SVG } from "../build/assets.ts";

export function getIcon(name: string): Children {
  // return m(
  //   `svg.icon.icon-${name}`,
  //   { key: `icon-${name}` },
  //   m("use", { href: `${ICONS_SVG}#icon-${name}` }),
  // );

  switch (name) {
    case 'add':
      name = '➕';
      break;
    case 'add-instance':
      name = '✙';
      break;
    case 'delete-instance':
      name = '➖';
      break;
    case 'edit':
      name = '✏️';
      break;
    case 'refresh':
      name = '⟳';
      break;
    case 'remove':
      name = '❌';
      break;
    case 'retry':
      name = '🔄';
      break;
    case 'sorted-asc':
      name = '↗';
      break;
    case 'sorted-dsc':
      name = '↘';
      break;
    case 'unsorted':
      name = '♦';
      break;
  
    default:
      break;
  }

  return m('span', `${name}`);
}
