import styles from './Bot.module.css'

const FEATURES = [
  { emoji: '📝', title: 'Словарные проверки',    desc: 'Бот присылает слова, ты пишешь их — и сразу видишь ошибки.' },
  { emoji: '📚', title: 'Рекомендации книг',      desc: 'Попроси бота подобрать книгу по классу и жанру.' },
  { emoji: '🧮', title: 'Задачи по математике',   desc: 'Примеры и задачи с пошаговым разбором решений.' },
  { emoji: '🤔', title: 'Вопросы и ответы',       desc: 'Задай любой учебный вопрос — бот постарается помочь.' },
  { emoji: '🎯', title: 'Ежедневные задания',     desc: 'Короткие задачи каждый день для поддержания формы.' },
  { emoji: '⭐', title: 'Прогресс и достижения',  desc: 'Отслеживай свои успехи прямо в Telegram.' },
]

export function Bot() {
  return (
    <main className={styles.main}>
      <div className="page-container">
        {/* Header */}
        <div className={styles.hero}>
          <span className={styles.heroEmoji}>🤖</span>
          <div>
            <h1 className={styles.title}>Бот-помощник</h1>
            <p className={styles.handle}>@VlabSchoolBot</p>
            <p className={styles.desc}>
              Умный Telegram-бот для школьников — помогает учиться, тренирует память и отвечает на вопросы прямо в мессенджере.
            </p>
            <a
              href="https://t.me/VlabSchoolBot"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openBtn}
            >
              🚀 Открыть бот в Telegram
            </a>
          </div>
        </div>

        {/* Features */}
        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>Что умеет бот</h2>
          <div className={styles.featureGrid}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureEmoji}>{f.emoji}</span>
                <div>
                  <p className={styles.featureTitle}>{f.title}</p>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to start */}
        <section className={styles.howto}>
          <h2 className={styles.featuresTitle}>Как начать</h2>
          <ol className={styles.steps}>
            <li className={styles.step}><span className={styles.stepNum}>1</span>Открой Telegram и найди бота по имени <strong>@VlabSchoolBot</strong></li>
            <li className={styles.step}><span className={styles.stepNum}>2</span>Нажми кнопку <strong>Start / Старт</strong></li>
            <li className={styles.step}><span className={styles.stepNum}>3</span>Выбери нужный режим из меню</li>
            <li className={styles.step}><span className={styles.stepNum}>4</span>Учись и получай достижения! 🎉</li>
          </ol>
          <a
            href="https://t.me/VlabSchoolBot"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.openBtn}
          >
            Открыть @VlabSchoolBot →
          </a>
        </section>
      </div>
    </main>
  )
}
