import { Student, AvatarOption } from '../types/student';

export const AVATAR_OPTIONS: AvatarOption[] = [
  { id: 'lion', emoji: '🦁', label: 'Cesur Aslan', bg: 'from-amber-500 to-yellow-600', border: 'border-amber-400' },
  { id: 'fox', emoji: '🦊', label: 'Akıllı Tilki', bg: 'from-orange-500 to-amber-600', border: 'border-orange-400' },
  { id: 'panda', emoji: '🐼', label: 'Sevimli Panda', bg: 'from-slate-600 to-slate-800', border: 'border-slate-300' },
  { id: 'rocket', emoji: '🚀', label: 'Uzay Kaptanı', bg: 'from-blue-600 to-indigo-700', border: 'border-blue-400' },
  { id: 'dino', emoji: '🦖', label: 'Minik Dino', bg: 'from-emerald-600 to-teal-700', border: 'border-emerald-400' },
  { id: 'unicorn', emoji: '🦄', label: 'Sihirli Pony', bg: 'from-pink-500 to-purple-600', border: 'border-pink-300' },
  { id: 'robot', emoji: '🤖', label: 'Süper Robot', bg: 'from-cyan-600 to-blue-700', border: 'border-cyan-400' },
  { id: 'owl', emoji: '🦉', label: 'Bilge Baykuş', bg: 'from-amber-700 to-stone-800', border: 'border-amber-500' },
  { id: 'tiger', emoji: '🐯', label: 'Hızlı Kaplan', bg: 'from-amber-600 to-orange-700', border: 'border-amber-400' },
  { id: 'rabbit', emoji: '🐰', label: 'Çevik Tavşan', bg: 'from-rose-400 to-pink-500', border: 'border-rose-300' },
  { id: 'dolphin', emoji: '🐬', label: 'Neşeli Yunus', bg: 'from-sky-500 to-blue-600', border: 'border-sky-300' },
  { id: 'koala', emoji: '🐨', label: 'Tatlı Koala', bg: 'from-stone-500 to-zinc-600', border: 'border-stone-300' },
  { id: 'soccer', emoji: '⚽', label: 'Yıldız Forvet', bg: 'from-emerald-500 to-green-700', border: 'border-emerald-300' },
  { id: 'artist', emoji: '🎨', label: 'Küçük Ressam', bg: 'from-fuchsia-500 to-purple-700', border: 'border-fuchsia-400' },
  { id: 'crown', emoji: '👑', label: 'Prens / Prenses', bg: 'from-yellow-400 to-amber-600', border: 'border-yellow-300' },
  { id: 'lightning', emoji: '⚡', label: 'Şimşek Çocuk', bg: 'from-yellow-500 to-orange-600', border: 'border-yellow-400' },
  { id: 'star', emoji: '🌟', label: 'Parlak Yıldız', bg: 'from-amber-300 to-yellow-500', border: 'border-yellow-200' },
  { id: 'cat', emoji: '🐱', label: 'Yaramaz Kedi', bg: 'from-orange-400 to-rose-500', border: 'border-orange-300' },
  { id: 'dog', emoji: '🐶', label: 'Sadık Dost', bg: 'from-amber-600 to-yellow-700', border: 'border-amber-400' },
  { id: 'trophy', emoji: '🏆', label: 'Şampiyon', bg: 'from-yellow-500 to-amber-700', border: 'border-yellow-400' },
  { id: 'bee', emoji: '🐝', label: 'Çalışkan Arı', bg: 'from-amber-400 to-yellow-600', border: 'border-amber-300' },
  { id: 'bear', emoji: '🐻', label: 'Güçlü Ayı', bg: 'from-amber-800 to-stone-900', border: 'border-amber-600' },
  { id: 'monkey', emoji: '🐵', label: 'Eğlenceli Maymun', bg: 'from-yellow-700 to-amber-900', border: 'border-yellow-500' },
  { id: 'penguin', emoji: '🐧', label: 'Kutup Pengueni', bg: 'from-slate-700 to-cyan-900', border: 'border-cyan-300' }
];

export const DEFAULT_STUDENTS: Student[] = [
  // 1. SINIF ÖRNEK ÖĞRENCİLERİ
  { id: 'std_g1_1', name: 'Can Öztürk', avatar: '🦖', avatarBg: 'from-emerald-600 to-teal-700', grade: 1, className: '1-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g1_2', name: 'Elif Şahin', avatar: '🌟', avatarBg: 'from-amber-300 to-yellow-500', grade: 1, className: '1-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g1_3', name: 'Deniz Aydın', avatar: '🐬', avatarBg: 'from-sky-500 to-blue-600', grade: 1, className: '1-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },

  // 2. SINIF GERÇEK SINIF LİSTESİ (23 ÖĞRENCİ)
  { id: 'std_g2_1', name: 'Aybüke', avatar: '🐬', avatarBg: 'from-sky-500 to-blue-600', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_2', name: 'Betül Sare', avatar: '🌟', avatarBg: 'from-amber-300 to-yellow-500', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_3', name: 'Buğlem', avatar: '🦄', avatarBg: 'from-pink-500 to-purple-600', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_4', name: 'Çınar Eymen', avatar: '🦁', avatarBg: 'from-amber-500 to-yellow-600', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_5', name: 'Derin Defne', avatar: '🐰', avatarBg: 'from-rose-400 to-pink-500', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_6', name: 'Efekan', avatar: '🚀', avatarBg: 'from-blue-600 to-indigo-700', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_7', name: 'Elif Su', avatar: '🎨', avatarBg: 'from-fuchsia-500 to-purple-700', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_8', name: 'Eslem', avatar: '👑', avatarBg: 'from-yellow-400 to-amber-600', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_9', name: 'Eymen', avatar: '🐯', avatarBg: 'from-amber-600 to-orange-700', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_10', name: 'Güneş', avatar: '☀️', avatarBg: 'from-amber-400 to-yellow-500', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_11', name: 'Harun', avatar: '⚡', avatarBg: 'from-yellow-500 to-orange-600', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_12', name: 'Miraç', avatar: '⚽', avatarBg: 'from-emerald-500 to-green-700', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_13', name: 'Muhammed Eymen', avatar: '🦖', avatarBg: 'from-emerald-600 to-teal-700', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_14', name: 'Osman Emir', avatar: '🦊', avatarBg: 'from-orange-500 to-amber-600', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_15', name: 'Ömer Asaf', avatar: '🤖', avatarBg: 'from-cyan-600 to-blue-700', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_16', name: 'Ömer Faruk', avatar: '🐼', avatarBg: 'from-slate-600 to-slate-800', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_17', name: 'Ravza', avatar: '🐝', avatarBg: 'from-amber-400 to-yellow-600', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_18', name: 'Sudem', avatar: '🐱', avatarBg: 'from-orange-400 to-rose-500', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_19', name: 'Umut', avatar: '🏆', avatarBg: 'from-yellow-500 to-amber-700', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_20', name: 'Zeynep', avatar: '🦉', avatarBg: 'from-amber-700 to-stone-800', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_21', name: 'Zilan', avatar: '🐧', avatarBg: 'from-slate-700 to-cyan-900', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_22', name: 'Öykü Liya', avatar: '🌸', avatarBg: 'from-pink-400 to-rose-500', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g2_23', name: 'Harun Ali', avatar: '🐻', avatarBg: 'from-amber-800 to-stone-900', grade: 2, className: '2-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },

  // 3. SINIF ÖRNEK ÖĞRENCİLERİ
  { id: 'std_g3_1', name: 'Zeynep Çelik', avatar: '🦄', avatarBg: 'from-pink-500 to-purple-600', grade: 3, className: '3-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g3_2', name: 'Burak Yıldız', avatar: '🤖', avatarBg: 'from-cyan-600 to-blue-700', grade: 3, className: '3-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g3_3', name: 'Ece Koç', avatar: '🐰', avatarBg: 'from-rose-400 to-pink-500', grade: 3, className: '3-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },

  // 4. SINIF ÖRNEK ÖĞRENCİLERİ
  { id: 'std_g4_1', name: 'Mert Aksoy', avatar: '⚽', avatarBg: 'from-emerald-500 to-green-700', grade: 4, className: '4-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g4_2', name: 'Selin Arslan', avatar: '🎨', avatarBg: 'from-fuchsia-500 to-purple-700', grade: 4, className: '4-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() },
  { id: 'std_g4_3', name: 'Kaan Polat', avatar: '⚡', avatarBg: 'from-yellow-500 to-orange-600', grade: 4, className: '4-A', totalCorrect: 0, totalWrong: 0, gamesPlayed: 0, gamesWon: 0, topicStats: {}, createdAt: new Date().toISOString() }
];

const STORAGE_KEY = 'classroom_students_v1';
const INITIALIZED_KEY = 'classroom_students_init_v1';
export const SELECTED_STUDENTS_STORAGE_KEY = 'classroom_selected_students_v1';
export const SELECTED_STUDENTS_BY_GRADE_KEY = 'classroom_selected_students_by_grade_v1';

let currentStoreUserId: string | null = null;

/**
 * Sets the active user id in studentStore so all load/save operations
 * automatically target this user's private roster.
 */
export function setActiveStoreUserId(userId: string | null): void {
  currentStoreUserId = userId;
}

export function getActiveStoreUserId(): string | null {
  return currentStoreUserId;
}

export function getStudentsStorageKey(userId?: string | null): string {
  const uid = userId !== undefined ? userId : currentStoreUserId;
  return uid ? `classroom_students_user_${uid}` : 'classroom_students_guest_v1';
}

export function getStudentsInitKey(userId?: string | null): string {
  const uid = userId !== undefined ? userId : currentStoreUserId;
  return uid ? `classroom_students_init_${uid}` : 'classroom_students_init_guest_v1';
}

/**
 * Calculates total questions solved across all students in a roster
 */
export function calculateStudentListTotalSolved(list: Student[]): number {
  if (!Array.isArray(list) || list.length === 0) return 0;
  return list.reduce((sum, s) => {
    const directTotal = (s.totalCorrect || 0) + (s.totalWrong || 0);
    let topicTotal = 0;
    if (s.topicStats) {
      Object.values(s.topicStats).forEach(ts => {
        topicTotal += (ts.correct || 0) + (ts.wrong || 0);
      });
    }
    return sum + Math.max(directTotal, topicTotal);
  }, 0);
}

/**
 * Intelligently merges two student lists, ALWAYS keeping the highest question counts,
 * highest topic stats, won games, and custom student names. Never resets existing stats!
 */
export function mergeStudentLists(currentList: Student[] = [], incomingList: Student[] = []): Student[] {
  if (!Array.isArray(incomingList) || incomingList.length === 0) return Array.isArray(currentList) ? currentList : [];
  if (!Array.isArray(currentList) || currentList.length === 0) return incomingList;

  const result = [...currentList];
  const indexById = new Map<string, number>();
  const indexByName = new Map<string, number>();

  result.forEach((s, idx) => {
    if (s.id) indexById.set(s.id, idx);
    const normalizedName = `${s.grade || 2}__${s.name.trim().toLocaleLowerCase('tr')}`;
    indexByName.set(normalizedName, idx);
  });

  incomingList.forEach(incoming => {
    const normalizedName = `${incoming.grade || 2}__${incoming.name.trim().toLocaleLowerCase('tr')}`;
    const targetIdx = indexById.has(incoming.id) 
      ? indexById.get(incoming.id)! 
      : indexByName.has(normalizedName) 
      ? indexByName.get(normalizedName)! 
      : -1;

    if (targetIdx !== -1) {
      // Merge student preserving highest achievements
      const curr = result[targetIdx];
      const mergedTopicStats = { ...(curr.topicStats || {}) };

      if (incoming.topicStats) {
        Object.entries(incoming.topicStats).forEach(([topKey, inStat]) => {
          const curStat = mergedTopicStats[topKey];
          if (!curStat) {
            mergedTopicStats[topKey] = { ...inStat };
          } else {
            mergedTopicStats[topKey] = {
              correct: Math.max(curStat.correct || 0, inStat.correct || 0),
              wrong: Math.max(curStat.wrong || 0, inStat.wrong || 0),
              lastPlayed: inStat.lastPlayed || curStat.lastPlayed || new Date().toISOString()
            };
          }
        });
      }

      result[targetIdx] = {
        ...curr,
        name: curr.name || incoming.name,
        avatar: curr.avatar || incoming.avatar,
        avatarBg: curr.avatarBg || incoming.avatarBg,
        className: curr.className || incoming.className,
        totalCorrect: Math.max(curr.totalCorrect || 0, incoming.totalCorrect || 0),
        totalWrong: Math.max(curr.totalWrong || 0, incoming.totalWrong || 0),
        gamesPlayed: Math.max(curr.gamesPlayed || 0, incoming.gamesPlayed || 0),
        gamesWon: Math.max(curr.gamesWon || 0, incoming.gamesWon || 0),
        topicStats: mergedTopicStats
      };
    } else {
      // New student not in current list, append!
      result.push(incoming);
      indexById.set(incoming.id, result.length - 1);
      indexByName.set(normalizedName, result.length - 1);
    }
  });

  return result;
}

/**
 * Checks if a student list is merely an unplayed sample default list.
 * Returns false if ANY question was answered OR if custom names were entered.
 */
export function isDefaultSampleList(list: Student[]): boolean {
  if (!Array.isArray(list) || list.length === 0) return true;
  const hasSolved = list.some(s => (s.totalCorrect || 0) > 0 || (s.totalWrong || 0) > 0 || (s.gamesPlayed || 0) > 0);
  if (hasSolved) return false;

  // Check if names differ from standard default sets
  const defaultNames = new Set(DEFAULT_STUDENTS.map(s => s.name.trim().toLowerCase()));
  defaultNames.add('ali yılmaz');
  defaultNames.add('ayşe kaya');
  defaultNames.add('mehmet demir');

  // If at least one student is NOT in the default demo set, user has customized their roster!
  const hasCustomName = list.some(s => s.name && !defaultNames.has(s.name.trim().toLowerCase()));
  return !hasCustomName;
}

export const MULTI_USER_VAULT_KEY = 'olcico_multi_user_vault_v2';

export interface VaultUserRecord {
  identifier: string; // uid or clean email
  userEmail?: string;
  userId?: string;
  students: Student[];
  totalSolved: number;
  lastUpdated: string;
}

/**
 * Saves a user's roster snapshot into the permanent multi-user vault in localStorage.
 * Automatically merges with existing vault data so records are never lost or downgraded.
 */
export function saveToMultiUserVault(
  identifier: string,
  students: Student[],
  meta?: { userId?: string; userEmail?: string }
): void {
  try {
    if (!identifier || !Array.isArray(students) || students.length === 0) return;
    const cleanId = identifier.trim().toLowerCase();
    const raw = localStorage.getItem(MULTI_USER_VAULT_KEY);
    const vault: Record<string, VaultUserRecord> = raw ? JSON.parse(raw) : {};

    const existingRecord = vault[cleanId];
    const existingStudents = existingRecord?.students || [];
    const mergedStudents = mergeStudentLists(existingStudents, students);
    const totalSolved = calculateStudentListTotalSolved(mergedStudents);

    vault[cleanId] = {
      identifier: cleanId,
      userId: meta?.userId || existingRecord?.userId,
      userEmail: meta?.userEmail || existingRecord?.userEmail || (cleanId.includes('@') ? cleanId : undefined),
      students: mergedStudents,
      totalSolved,
      lastUpdated: new Date().toISOString()
    };

    localStorage.setItem(MULTI_USER_VAULT_KEY, JSON.stringify(vault));
  } catch (err) {
    console.error('Error saving to multi-user vault:', err);
  }
}

/**
 * Loads a user's snapshot from the permanent multi-user vault
 */
export function loadFromMultiUserVault(identifier: string): Student[] | null {
  try {
    if (!identifier) return null;
    const cleanId = identifier.trim().toLowerCase();
    const raw = localStorage.getItem(MULTI_USER_VAULT_KEY);
    if (!raw) return null;
    const vault: Record<string, VaultUserRecord> = JSON.parse(raw);
    const record = vault[cleanId];
    return record && Array.isArray(record.students) && record.students.length > 0
      ? record.students
      : null;
  } catch {
    return null;
  }
}

/**
 * Gets all saved user accounts from the permanent multi-user vault
 */
export function getAllUsersFromVault(): VaultUserRecord[] {
  try {
    const raw = localStorage.getItem(MULTI_USER_VAULT_KEY);
    if (!raw) return [];
    const vault: Record<string, VaultUserRecord> = JSON.parse(raw);
    return Object.values(vault);
  } catch {
    return [];
  }
}

/**
 * Searches localStorage slots (legacy, guest, backup, email, vault, and user slots)
 * for custom student lists with solved questions, intelligently merging all found data.
 */
export function recoverLegacyOrBackupStudents(
  userId?: string | null,
  userEmail?: string | null
): Student[] | null {
  try {
    let bestMerged: Student[] = [];
    const cleanEmail = userEmail ? userEmail.trim().toLowerCase() : null;

    // 1. Merge from vault first (both uid and email records)
    if (userId) {
      const fromVaultUid = loadFromMultiUserVault(userId);
      if (fromVaultUid && fromVaultUid.length > 0) {
        bestMerged = mergeStudentLists(bestMerged, fromVaultUid);
      }
    }
    if (cleanEmail) {
      const fromVaultEmail = loadFromMultiUserVault(cleanEmail);
      if (fromVaultEmail && fromVaultEmail.length > 0) {
        bestMerged = mergeStudentLists(bestMerged, fromVaultEmail);
      }
    }

    // Check all vault records for matching email or userId
    const allVaultRecords = getAllUsersFromVault();
    for (const rec of allVaultRecords) {
      if (cleanEmail && rec.userEmail && rec.userEmail.trim().toLowerCase() === cleanEmail) {
        bestMerged = mergeStudentLists(bestMerged, rec.students);
      } else if (userId && rec.userId === userId) {
        bestMerged = mergeStudentLists(bestMerged, rec.students);
      }
    }

    // 2. Collect candidate keys to check
    const keysToCheck: string[] = [];

    if (userId) {
      keysToCheck.push(`classroom_students_backup_${userId}`);
      keysToCheck.push(`classroom_students_user_${userId}`);
    }

    if (cleanEmail) {
      keysToCheck.push(`classroom_students_backup_${cleanEmail}`);
      keysToCheck.push(`classroom_students_user_${cleanEmail}`);
      keysToCheck.push(`classroom_students_${cleanEmail}`);
    }

    // 3. Scan all localStorage keys for relevant user/backup slots
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && !keysToCheck.includes(k)) {
        const lowerK = k.toLowerCase();
        if (
          (cleanEmail && lowerK.includes(cleanEmail)) ||
          (userId && lowerK.includes(userId.toLowerCase())) ||
          lowerK.startsWith('classroom_students_backup_') ||
          lowerK.startsWith('classroom_students_user_')
        ) {
          keysToCheck.push(k);
        }
      }
    }

    // 4. Legacy and guest fallback slots
    keysToCheck.push(
      'classroom_students_backup_v1',
      STORAGE_KEY,
      'classroom_students_guest_v1'
    );

    for (const key of keysToCheck) {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const mapped: Student[] = parsed.map((s: any) => ({
            ...s,
            grade: (s.grade && [1, 2, 3, 4].includes(Number(s.grade))) ? Number(s.grade) : 2
          }));

          const solved = calculateStudentListTotalSolved(mapped);
          if (!isDefaultSampleList(mapped) || solved > 0) {
            bestMerged = mergeStudentLists(bestMerged, mapped);
          }
        }
      } catch {}
    }

    const totalSolved = calculateStudentListTotalSolved(bestMerged);
    if (bestMerged.length > 0 && (!isDefaultSampleList(bestMerged) || totalSolved > 0)) {
      const uid = userId !== undefined ? userId : currentStoreUserId;
      if (uid) {
        saveStudents(bestMerged, uid);
        saveToMultiUserVault(uid, bestMerged, { userId: uid, userEmail: cleanEmail || undefined });
      }
      if (cleanEmail) {
        saveToMultiUserVault(cleanEmail, bestMerged, { userId: uid || undefined, userEmail: cleanEmail });
      }
      return bestMerged;
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Loads students from localStorage scoped to active user or specified userId.
 * Ensures every student is assigned to their proper grade (1, 2, 3, 4).
 * If previously created without grade, defaults to 2 (since 2. Sınıf was default).
 */
export function loadStudents(userId?: string | null): Student[] {
  try {
    const uid = userId !== undefined ? userId : currentStoreUserId;
    const storageKey = getStudentsStorageKey(uid);
    const initKey = getStudentsInitKey(uid);

    let raw = localStorage.getItem(storageKey);
    let isInitialized = localStorage.getItem(initKey);

    let parsed: any = null;
    if (raw !== null) {
      try {
        parsed = JSON.parse(raw);
      } catch {}
    }

    if (Array.isArray(parsed) && parsed.length > 0) {
      // Check if Grade 2 in this list has old demo students (Ali Yılmaz, Ayşe Kaya, Mehmet Demir)
      // or if total students is 12 (the old 3x4 demo set)
      const g2Students = parsed.filter((s: any) => Number(s.grade) === 2);
      const isG2DemoOnly = g2Students.length <= 3 && g2Students.some((s: any) => s.name === 'Ali Yılmaz' || s.name === 'Ayşe Kaya');
      const isOldTwelveSample = parsed.length === 12 && parsed.some((s: any) => s.name === 'Ali Yılmaz');

      if (isG2DemoOnly || isOldTwelveSample) {
        // Upgrade Grade 2 to the real 23 classroom students while keeping other grades intact
        const nonG2 = parsed.filter((s: any) => Number(s.grade) !== 2);
        const realG2 = DEFAULT_STUDENTS.filter(s => s.grade === 2);
        const upgraded = [...nonG2, ...realG2];
        saveStudents(upgraded, uid);
        return upgraded;
      }

      return parsed.map((s: any) => ({
        ...s,
        grade: (s.grade && [1, 2, 3, 4].includes(Number(s.grade))) ? Number(s.grade) : 2
      }));
    }

    // Check user's own backup slot first
    if (uid) {
      const backupRaw = localStorage.getItem(`classroom_students_backup_${uid}`);
      if (backupRaw) {
        try {
          const backupParsed = JSON.parse(backupRaw);
          if (Array.isArray(backupParsed) && backupParsed.length > 0) {
            saveStudents(backupParsed, uid);
            return backupParsed;
          }
        } catch {}
      }
    }

    // If guest and not yet initialized in guest_v1, check legacy 'classroom_students_v1'
    if (!uid && raw === null) {
      const legacyRaw = localStorage.getItem(STORAGE_KEY);
      if (legacyRaw !== null) {
        raw = legacyRaw;
        isInitialized = localStorage.getItem(INITIALIZED_KEY);
        try {
          parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            saveStudents(parsed, null);
            return parsed;
          }
        } catch {}
      }
    }

    // First time EVER visit for this specific user or guest: seed default sample students
    if (!isInitialized) {
      saveStudents(DEFAULT_STUDENTS, uid);
      return DEFAULT_STUDENTS;
    }

    return [];
  } catch (err) {
    console.error('Error loading students from localStorage:', err);
    return DEFAULT_STUDENTS;
  }
}

/**
 * Saves students to localStorage scoped to active user or specified userId.
 */
export function saveStudents(students: Student[], userId?: string | null): void {
  try {
    const uid = userId !== undefined ? userId : currentStoreUserId;
    const storageKey = getStudentsStorageKey(uid);
    const initKey = getStudentsInitKey(uid);

    localStorage.setItem(initKey, 'true');
    localStorage.setItem(storageKey, JSON.stringify(students));

    // Also mirror to legacy key if guest
    if (!uid) {
      localStorage.setItem(INITIALIZED_KEY, 'true');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    }

    // Always maintain a safe persistent backup of real custom student data and solved stats
    if (Array.isArray(students) && students.length > 0) {
      const solved = calculateStudentListTotalSolved(students);
      if (!isDefaultSampleList(students) || solved > 0) {
        localStorage.setItem('classroom_students_backup_v1', JSON.stringify(students));
        if (uid) {
          localStorage.setItem(`classroom_students_backup_${uid}`, JSON.stringify(students));
          saveToMultiUserVault(uid, students);
        }
      }
    }
  } catch (err) {
    console.error('Error saving students to localStorage:', err);
  }
}

/**
 * Loads selected player student IDs for a specific grade (1, 2, 3, or 4).
 * By default, no player is pre-selected initially.
 */
export function loadSelectedStudentIdsForGrade(_grade: number): (string | null)[] {
  return [null, null, null];
}

/**
 * Saves selected player student IDs for a specific grade so they persist independently
 */
export function saveSelectedStudentIdsForGrade(_grade: number, _ids: (string | null)[]): void {
  // Kept for interface compatibility; no forced persistence so games always start unselected
}

/**
 * Loads legacy selected student IDs
 */
export function loadSelectedStudentIds(): (string | null)[] {
  return loadSelectedStudentIdsForGrade(2);
}

/**
 * Saves legacy selected student IDs
 */
export function saveSelectedStudentIds(ids: (string | null)[]): void {
  saveSelectedStudentIdsForGrade(2, ids);
}

/**
 * Helper to capitalize Turkish names properly
 */
function toTurkishTitleCase(str: string): string {
  return str
    .split(/\s+/)
    .map(word => {
      if (!word) return '';
      const first = word.charAt(0).toLocaleUpperCase('tr');
      const rest = word.slice(1).toLocaleLowerCase('tr');
      return first + rest;
    })
    .join(' ');
}

/**
 * Advanced parser for multiline, Excel copy-paste, e-Okul exports, or comma-separated lists
 * targetGrade: 1, 2, 3, or 4
 * If replaceMode is true, it ONLY replaces students of targetGrade, keeping all other grades intact!
 */
export function importStudentsFromText(
  rawText: string,
  existingStudents: Student[] = [],
  replaceMode = false,
  targetGrade = 2,
  targetClass = ''
): Student[] {
  if (!rawText.trim()) return existingStudents;

  // Split lines
  let lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);

  // If user pasted a single line with commas or semicolons
  if (lines.length === 1 && (lines[0].includes(',') || lines[0].includes(';'))) {
    lines = lines[0].split(/[,;]/).map(l => l.trim()).filter(l => l.length > 0);
  }

  if (lines.length === 0) return existingStudents;

  // Other grades students will be preserved untouched
  const studentsOtherGrades = existingStudents.filter(s => s.grade !== targetGrade);

  // For the target grade: if replaceMode, start empty; otherwise keep existing target grade students
  const studentsTargetGrade = replaceMode
    ? []
    : existingStudents.filter(s => s.grade === targetGrade);

  const existingMap = new Map<string, Student>();
  studentsTargetGrade.forEach(s => existingMap.set(s.name.toLocaleLowerCase('tr'), s));

  const resultTargetGrade: Student[] = [...studentsTargetGrade];

  lines.forEach((line, idx) => {
    let candidate = line;

    // Handle Excel tab-separated columns (e.g., "1 \t Ahmet Yılmaz \t Erkek")
    if (candidate.includes('\t')) {
      const cols = candidate.split('\t').map(c => c.trim()).filter(Boolean);
      // Pick the first column that has alphabetic characters (not just a student number like "105")
      const textCol = cols.find(c => /[a-zA-ZçğıöşüÇĞİÖŞÜ]/.test(c));
      if (textCol) {
        candidate = textCol;
      }
    }

    // Handle e-Okul "SOYAD, AD" format (e.g. "KAYA, AYŞE" -> "Ayşe Kaya")
    if (candidate.includes(',')) {
      const parts = candidate.split(',').map(p => p.trim());
      if (parts.length === 2 && parts[0].length >= 2 && parts[1].length >= 2) {
        candidate = `${parts[1]} ${parts[0]}`;
      }
    }

    // Strip leading numbers: "1. Ahmet", "02- Mehmet", "3) Ayşe", "4 : Ali", "#5 Fatma"
    candidate = candidate.replace(/^[\d\s.\-):#]+/i, '');
    // Strip trailing student numbers like "Ahmet Yılmaz 412"
    candidate = candidate.replace(/\s+\d+$/i, '');
    candidate = candidate.trim();

    if (!candidate || candidate.length < 2) return;

    // Capitalize cleanly
    const formattedName = toTurkishTitleCase(candidate);
    const lower = formattedName.toLocaleLowerCase('tr');

    if (existingMap.has(lower)) {
      // Already in list, skip duplicate
      return;
    }

    const avatarOpt = AVATAR_OPTIONS[(resultTargetGrade.length + idx) % AVATAR_OPTIONS.length];
    const newStudent: Student = {
      id: `std_g${targetGrade}_${Date.now()}_${idx}_${Math.random().toString(36).substring(2, 6)}`,
      name: formattedName,
      avatar: avatarOpt.emoji,
      avatarBg: avatarOpt.bg,
      grade: targetGrade,
      className: targetClass.trim() || `${targetGrade}-A`,
      totalCorrect: 0,
      totalWrong: 0,
      gamesPlayed: 0,
      gamesWon: 0,
      topicStats: {},
      createdAt: new Date().toISOString()
    };

    resultTargetGrade.push(newStudent);
    existingMap.set(lower, newStudent);
  });

  const finalStudents = [...studentsOtherGrades, ...resultTargetGrade];
  saveStudents(finalStudents);
  return finalStudents;
}

/**
 * Resets students of a specific grade to empty [] without touching other grades
 */
export function clearStudentsForGrade(grade: number, existingStudents: Student[]): Student[] {
  const updated = existingStudents.filter(s => s.grade !== grade);
  saveStudents(updated);
  return updated;
}

/**
 * Restores default sample students for a specific grade
 */
export function restoreDefaultStudentsForGrade(grade: number, existingStudents: Student[]): Student[] {
  const defaults = DEFAULT_STUDENTS.filter(s => s.grade === grade);
  const otherGrades = existingStudents.filter(s => s.grade !== grade);
  const updated = [...otherGrades, ...defaults];
  saveStudents(updated);
  return updated;
}

/**
 * Resets the entire roster to empty [] across all grades
 */
export function clearAllStudents(): Student[] {
  saveStudents([]);
  return [];
}

/**
 * Restores all sample students across all grades
 */
export function restoreDefaultStudents(): Student[] {
  saveStudents(DEFAULT_STUDENTS);
  return DEFAULT_STUDENTS;
}

export function recordStudentAnswer(
  studentId: string,
  topicKey: string,
  isCorrect: boolean,
  existingStudents?: Student[],
  userId?: string | null
): Student[] {
  const uid = userId !== undefined ? userId : currentStoreUserId;
  const students = existingStudents && existingStudents.length > 0 
    ? [...existingStudents] 
    : loadStudents(uid);

  const idx = students.findIndex(s => s.id === studentId);
  if (idx === -1) return students;

  const student = students[idx];
  const now = new Date().toISOString();
  const currentTopicStat = student.topicStats?.[topicKey] || { correct: 0, wrong: 0 };

  const updatedStudent: Student = {
    ...student,
    totalCorrect: (student.totalCorrect || 0) + (isCorrect ? 1 : 0),
    totalWrong: (student.totalWrong || 0) + (isCorrect ? 0 : 1),
    topicStats: {
      ...(student.topicStats || {}),
      [topicKey]: {
        correct: (currentTopicStat.correct || 0) + (isCorrect ? 1 : 0),
        wrong: (currentTopicStat.wrong || 0) + (isCorrect ? 0 : 1),
        lastPlayed: now
      }
    }
  };

  students[idx] = updatedStudent;
  saveStudents(students, uid);
  return students;
}

export function recordStudentGameResult(
  studentId: string,
  won: boolean,
  existingStudents?: Student[],
  userId?: string | null
): Student[] {
  const uid = userId !== undefined ? userId : currentStoreUserId;
  const students = existingStudents && existingStudents.length > 0 
    ? [...existingStudents] 
    : loadStudents(uid);

  const idx = students.findIndex(s => s.id === studentId);
  if (idx === -1) return students;

  const student = students[idx];
  students[idx] = {
    ...student,
    gamesPlayed: (student.gamesPlayed || 0) + 1,
    gamesWon: (student.gamesWon || 0) + (won ? 1 : 0)
  };

  saveStudents(students, uid);
  return students;
}

export function resetAllStudentStats(): Student[] {
  const students = loadStudents();
  const reset = students.map(s => ({
    ...s,
    totalCorrect: 0,
    totalWrong: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    topicStats: {}
  }));
  saveStudents(reset);
  return reset;
}

export function resetGradeStudentStats(grade: number): Student[] {
  const students = loadStudents();
  const reset = students.map(s => {
    if (s.grade === grade) {
      return {
        ...s,
        totalCorrect: 0,
        totalWrong: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        topicStats: {}
      };
    }
    return s;
  });
  saveStudents(reset);
  return reset;
}

export function resetSingleStudentStat(studentId: string): Student[] {
  const students = loadStudents();
  const idx = students.findIndex(s => s.id === studentId);
  if (idx === -1) return students;

  students[idx] = {
    ...students[idx],
    totalCorrect: 0,
    totalWrong: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    topicStats: {}
  };
  saveStudents(students);
  return students;
}

/**
 * Resets stats for a single topic for a specific student
 */
export function resetSingleStudentTopicStat(studentId: string, topicKey: string): Student[] {
  const students = loadStudents();
  const idx = students.findIndex(s => s.id === studentId);
  if (idx === -1) return students;

  const student = students[idx];
  const topicStat = student.topicStats?.[topicKey];
  if (!topicStat) return students;

  const topicCorrect = topicStat.correct || 0;
  const topicWrong = topicStat.wrong || 0;

  const newTopicStats = { ...(student.topicStats || {}) };
  delete newTopicStats[topicKey];

  students[idx] = {
    ...student,
    totalCorrect: Math.max(0, (student.totalCorrect || 0) - topicCorrect),
    totalWrong: Math.max(0, (student.totalWrong || 0) - topicWrong),
    topicStats: newTopicStats
  };
  saveStudents(students);
  return students;
}

/**
 * Resets stats for a single topic across all students (or students of a specific grade)
 */
export function resetTopicStatsForAllStudents(topicKey: string, grade?: number): Student[] {
  const students = loadStudents();
  let modified = false;

  const updated = students.map(s => {
    if (grade !== undefined && s.grade !== grade) return s;
    if (!s.topicStats || !s.topicStats[topicKey]) return s;

    const topicStat = s.topicStats[topicKey];
    const topicCorrect = topicStat.correct || 0;
    const topicWrong = topicStat.wrong || 0;

    const newTopicStats = { ...s.topicStats };
    delete newTopicStats[topicKey];
    modified = true;

    return {
      ...s,
      totalCorrect: Math.max(0, (studentCorrectFallback(s.totalCorrect) - topicCorrect)),
      totalWrong: Math.max(0, (studentWrongFallback(s.totalWrong) - topicWrong)),
      topicStats: newTopicStats
    };
  });

  if (modified) {
    saveStudents(updated);
  }
  return updated;
}

function studentCorrectFallback(val: number | undefined): number {
  return typeof val === 'number' ? val : 0;
}

function studentWrongFallback(val: number | undefined): number {
  return typeof val === 'number' ? val : 0;
}

export function exportStudentsToCSV(students: Student[]): string {
  const headers = ['Sınıf Seviyesi', 'Şube', 'Öğrenci Adı', 'Avatar', 'Toplam Doğru', 'Toplam Yanlış', 'Başarı Yüzdesi (%)', 'Oynanan Oyun', 'Galibiyet'];
  const rows = students.map(s => {
    const total = s.totalCorrect + s.totalWrong;
    const rate = total > 0 ? Math.round((s.totalCorrect / total) * 100) : 0;
    return [
      `"${s.grade}. Sınıf"`,
      `"${s.className || ''}"`,
      `"${s.name}"`,
      `"${s.avatar}"`,
      s.totalCorrect,
      s.totalWrong,
      rate,
      s.gamesPlayed,
      s.gamesWon
    ].join(',');
  });

  return [headers.join(','), ...rows].join('\n');
}
