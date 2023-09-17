import { TEAM_SLUG_NAME } from '../constants';

export default function mapTeamSlugName(slug: String): string {
  let slugName;

  switch (slug) {
    case TEAM_SLUG_NAME.SUB_6.slug:
      slugName = TEAM_SLUG_NAME.SUB_6.slugName;
      break;
    case TEAM_SLUG_NAME.SUB_11.slug:
      slugName = TEAM_SLUG_NAME.SUB_11.slugName;
      break;
    case TEAM_SLUG_NAME.SUB_13.slug:
      slugName = TEAM_SLUG_NAME.SUB_13.slugName;
      break;
    case TEAM_SLUG_NAME.SUB_15.slug:
      slugName = TEAM_SLUG_NAME.SUB_15.slugName;
      break;
    case TEAM_SLUG_NAME.WOMEN.slug:
      slugName = TEAM_SLUG_NAME.WOMEN.slugName;
      break;
    default:
      slugName = 'ERROR'
  }

  return slugName
}