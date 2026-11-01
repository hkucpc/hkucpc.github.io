import type { Award } from '../data/achievements';

/** Map a free-text honor from the team archive to an award badge type. */
export function awardFromHonor(honor: string): Award {
  if (/Gold Medal/i.test(honor)) return 'Gold';
  if (/Silver Medal/i.test(honor)) return 'Silver';
  if (/Bronze Medal/i.test(honor)) return 'Bronze';
  if (/Champion/i.test(honor)) return 'Champion';
  if (/First Prize/i.test(honor)) return 'First Prize';
  if (/Highest Honou?rs/i.test(honor)) return 'Highest Honours';
  if (/High Honou?rs/i.test(honor)) return 'High Honours';
  if (/Honou?rs/i.test(honor)) return 'Honours';
  if (/Honou?rable Mention/i.test(honor)) return 'Honourable Mention';
  return 'Position';
}

/** Extract a leading position such as "3rd" from "3rd Place in ...". */
export function positionRank(text: string): string | undefined {
  return text.match(/^(\d+(?:st|nd|rd|th))\s+Place\b/i)?.[1];
}

/**
 * Drop the medal name from an honor when the award badge already shows it.
 * "Gold Medal (7th Place) in Hong Kong Regional" -> "Hong Kong Regional (7th Place)"
 * "3rd Place in ACM-HK Programming Contest" -> "ACM-HK Programming Contest"
 */
export function honorDescription(text: string): string {
  const position = text.match(/^\d+(?:st|nd|rd|th)\s+Place\s+in\s+(.+)$/i);
  if (position) return position[1].trim();

  const medal = text.match(/^(?:Gold|Silver|Bronze) Medal\s*(?:\(([^)]*)\))?\s+in\s+(.+)$/i);
  if (medal) {
    const note = medal[1]?.trim();
    const contest = medal[2].trim();
    return note ? `${contest} (${note})` : contest;
  }

  const champion = text.match(/^Champion\s*(?:\(([^)]*)\))?\s+in\s+(.+)$/i);
  if (champion) {
    const note = champion[1]?.trim();
    const contest = champion[2].trim();
    return note ? `${contest} (${note})` : contest;
  }

  const mention = text.match(/^Honou?rable Mention\s*(?:\(([^)]*)\))?\s+in\s+(.+)$/i);
  if (mention) {
    const note = mention[1]?.trim();
    const contest = mention[2].trim();
    return note ? `${contest} (${note})` : contest;
  }

  const honours = text.match(/^(Highest Honours|High Honours|Honours)\s*(?:\(([^)]*)\))?\s+in\s+(.+)$/i);
  if (honours) {
    const note = honours[2]?.trim();
    const contest = honours[3].trim();
    return note ? `${contest} (${note})` : contest;
  }

  const firstPrize = text.match(/^First Prize\s*(?:\(([^)]*)\))?\s+in\s+(.+)$/i);
  if (firstPrize) {
    const note = firstPrize[1]?.trim();
    const contest = firstPrize[2].trim();
    return note ? `${contest} (${note})` : contest;
  }

  return text;
}
