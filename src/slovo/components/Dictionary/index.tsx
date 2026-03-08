import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Word } from '../../types';
import { GlassCard } from '../UI';

async function loadGradeWords(grade: number): Promise<Word[]> {
  const mod = await import(`../../data/words/grade${grade}.json`);
  return mod.default as Word[];
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: 'rgba(0,122,255,0.18)', color: 'var(--ios-blue)', borderRadius: 2, padding: '0 1px' }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

const TabButton: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.88 }}
    onClick={onClick}
    style={{
      padding: '5px 12px',
      borderRadius: 10,
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      background: active ? 'var(--ios-blue)' : 'var(--glass-bg-strong)',
      color: active ? '#fff' : 'var(--text-color)',
      boxShadow: active ? '0 2px 8px rgba(0,122,255,0.28)' : 'none',
      transition: 'background 0.15s, box-shadow 0.15s',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </motion.button>
);

export const DictionaryScreen: React.FC = () => {
  const [activeGrade, setActiveGrade] = useState<number | 'all'>('all');
  const [search, setSearch] = useState('');
  const [loadedGrades, setLoadedGrades] = useState<Record<number, Word[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  // Use a ref to track which grades are already loaded without triggering the effect
  const loadedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const grades = activeGrade === 'all'
      ? Array.from({ length: 11 }, (_, i) => i + 1)
      : [activeGrade as number];
    const missing = grades.filter(g => !loadedRef.current.has(g));
    if (missing.length === 0) { setIsLoading(false); return; }
    setIsLoading(true);
    Promise.all(missing.map(g => loadGradeWords(g).then(words => ({ g, words })))).then(results => {
      const additions: Record<number, Word[]> = {};
      for (const { g, words } of results) { additions[g] = words; loadedRef.current.add(g); }
      setLoadedGrades(prev => ({ ...prev, ...additions }));
      setIsLoading(false);
    });
  }, [activeGrade]);

  const allWordsUnique = useMemo(() => {
    if (activeGrade !== 'all') return [];
    const all = Object.values(loadedGrades).flat();
    const seen = new Set<string>();
    const unique: Word[] = [];
    for (const w of all) {
      const key = w.text.toLowerCase();
      if (!seen.has(key)) { seen.add(key); unique.push(w); }
    }
    return unique;
  }, [loadedGrades, activeGrade]);

  const sourceList = useMemo(
    () => (activeGrade === 'all' ? allWordsUnique : (loadedGrades[activeGrade as number] ?? [])),
    [activeGrade, allWordsUnique, loadedGrades],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = q
      ? sourceList.filter(w =>
          w.text.toLowerCase().includes(q) ||
          w.hint.toLowerCase().includes(q)
        )
      : sourceList;
    return [...list].sort((a, b) => a.text.localeCompare(b.text, 'ru'));
  }, [sourceList, search]);

  const totalCount = activeGrade === 'all'
    ? allWordsUnique.length
    : (loadedGrades[activeGrade as number]?.length ?? 0);

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-display mb-1">Словарь</h1>
        <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
          {totalCount} слов · {filtered.length} показано
        </p>
      </motion.div>

      {/* Search */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="🔍 Поиск по слову или теме..."
          className="word-input"
          style={{ fontSize: 16, width: '100%' }}
        />
      </motion.div>

      {/* Grade tabs */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
        <div
          style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            padding: '12px 14px',
            background: 'var(--glass-bg)',
            borderRadius: 'var(--radius-card)',
            border: '1px solid var(--glass-border)',
          }}
        >
          <TabButton label="Все" active={activeGrade === 'all'} onClick={() => setActiveGrade('all')} />
          {Array.from({ length: 11 }, (_, i) => i + 1).map(g => (
            <TabButton
              key={g}
              label={`${g} кл.`}
              active={activeGrade === g}
              onClick={() => setActiveGrade(g)}
            />
          ))}
        </div>
      </motion.div>

      {/* Word list */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>
        {isLoading ? (
          <div className="flex items-center justify-center py-10" style={{ color: 'var(--text-secondary)' }}>⏳ Загрузка…</div>
        ) : filtered.length === 0 ? (
          <GlassCard className="p-8 text-center">
            <p style={{ fontSize: 36, marginBottom: 8 }}>🔍</p>
            <p className="text-headline">Ничего не найдено</p>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
              Попробуй другой запрос
            </p>
          </GlassCard>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: 8,
            }}
          >
            {filtered.map((word, i) => (
              <motion.div
                key={word.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(i * 0.015, 0.4), type: 'spring', stiffness: 300, damping: 28 }}
                style={{
                  padding: '12px 14px',
                  background: 'var(--glass-bg)',
                  borderRadius: 14,
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-color)', letterSpacing: '-0.01em', wordBreak: 'break-word' }}>
                  <Highlight text={word.text} query={search.trim()} />
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};
